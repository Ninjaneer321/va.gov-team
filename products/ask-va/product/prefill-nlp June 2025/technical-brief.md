# Overview

AskVA plans to utilize AI predictions to auto-categorize questions which will reduce the form length.

## Problem statement

**Background**: Only 1/3 of Veterans, family members, and other people with questions for VA who visit the current Ask VA landing page, [Ask VA](https://www.va.gov/contact-us/ask-va/introduction) end up completing the support request. User research has identified form burden as a barrier for Veterans to receiving answers to their inquiries. To expediently get Veterans the healthcare & benefits answers they deserve, VA is simplifying the process. 

## Solution - AI ML Predictive Category Model Initiative

We'll reduce unnecessary Veteran inputs by auto-classifying the categories needed to route Veteran inquiries to the right place. **Multiple phases** will be required to build the infrastructure and integrate it into VA.gov AskVA.  The infrastructure created through this process will enable new auto-classifications in future iterations. 

The AI ML Predictive Category Model Initiative will be
- [Machine learning models](#model) used to predict the category based on a question
- [Prediction Service](#prediction-service) hosted on AWS that receive user questions from VA.gov and provide Kubernetes cluster that loads a quantized ONNX model from a secured S3 bucket on node start
- Ask VA on VA.gov will utilize [VETS-API](#vets-api) to pass-through authenticated requests to the [Prediction Service](#prediction-service)
- Evaluating [model predictions](#model-predictions) to assess accuracy and continously improve the model

The AI ML Predictive Category Model Initiative will be implemented across phases:
- **Phase 0** - Completed June 2025 - Creation of the [ML model](#model) the classifies category
- **Phase 1** - Create the AskVA Prediction Service in AWS - creating the [Prediction Service](#prediction-service) in AWS
- **Phase 2** - Connect the AskVA Prediction Service to VETS-API and VA.gov - connecting the [Prediction Service](#prediction-service) to [VETS-API](#vets-api) and VA.gov Ask VA form, generating [model predictions](#model-predictions) for continously learning
- **Phase 3** - Release to a percentage of users through a trigger and evaluate performance

### Architecture Diagram

1. [System Architecture Diagram](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1768512459038/ffc445de20b4b6fbe9bf5160c87b9208906b004c?wid=3-1769569902367)
2. [User Data Flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1768512459038/ffc445de20b4b6fbe9bf5160c87b9208906b004c?wid=0-1769570240202)
3. [Sequence Diagram](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1768512459038/ffc445de20b4b6fbe9bf5160c87b9208906b004c?wid=3-1769572346104)
4. [API Documentation](#api-documentation)

## Security Overview

The [Prediction Service](#prediction-service) will follow a similar security model as the [Disability Contention Classifier](https://github.com/department-of-veterans-affairs/vagov-claim-classification/wiki/ML-classifier:-deployment-configuration) with specific service accounts for the Kubernetes cluster and access to the buckets limited to the Kubernetes service and specific AskVA individuals that will upload the ONNX model to the bucket.  Additionally, the hash value of the current model will be an environment variable within the Kubernetes cluster as an additional security measure and a versioning pipeline for implementing new models.  The buckets and permissions to access them are administered by VFS Platform, generally through infrastructure-as-code with ArgoCD and Helm.

This service utilizes the same libraries found in the [Disability Contention Classifier implementation](https://github.com/department-of-veterans-affairs/contention-classification-api).

The sensitive data in the process is the user's question that is entered as free-text.  The existing data shows that users enter their own PII into their question.

In Phase 2, we will be transmitting the sensitive data from VA.gov to [VETS-API](#vets-api) to [Ask-VA Prediction Service](#prediction-service).  We plan to implement the VA best practices on the new integration between [VETS-API](#vets-api) and the [AWS Ask-VA Prediction Service](#prediction-service) and will solicit those practices.  With each integration, will will continue to not log the user's question as it may contain PII/PHI.

## Model
### Overview

- Goal: Create a machine learning model that can infer category from user question with 80% accuracy 
- Completed: Jun 2025
- [Repository](https://github.com/department-of-veterans-affairs/CAIO-ML-Projects/tree/main/AskVA)

### Architecture

The model uses **DistilBERT** (distilled BERT) for text classification:

- **Base Model**: `distilbert-base-uncased` from Hugging Face
- **Architecture**: DistilBERT + Classification Head
- **Input**: Text sequences (max 512 tokens)
- **Output**: Category probabilities

### Security

AskVA models will be generated using the Pickle format but will be converted to ONNX.  The Pickle format has the ability to run python scripts and is considered insecure.  The industry has moved to other formats as a result and we've found the quantized ONNX is both performant and secure.

### Training

**Key Features**

- **Cross-Validation**: 3-fold stratified CV by default
- **Text Preprocessing**: Lowercasing, whitespace normalization
- **Label Encoding**: Automatic category to numeric mapping

**Training Parameters**

Default hyperparameters (matching original notebook):

```python
learning_rate = 5e-5
batch_size = 16
epochs = 4
weight_decay = 0.01
warmup_ratio = 0.1
max_length = 512
```

### Model Evaluation

Initial Training Evaluation will utilize Accuracy, Macro F1, Weighted F1 metrics to determine the best model

### Versioning

Investigating using Databricks ML Flow for Model registry and versioning

### Materialized Format

**During training**: PyTorch .pth format with full state
**Format for Export**: ONNX format, quantized

### Continuous Evaluation

Once the model is in use, [model predictions](#model-predictions) will be utilized to evaluate accuracy.  Model performance will be defined by these metrics:
- Top 1 Accuracy - Percentage - The prediction with the highest probability was ultimately the selected value
- Top 3 Accuracy - Percentage - One of predictions in top 3 probabilities was ultimately the selected value
- Top 3 Error Rate - Percentage - None of the predictions in the top 3 probabilities was ultimately the selected value
- User Adoption - Percentage - Percentage of the population using one of the predictions when they are displayed

## Prediction service
### Overview

- Goal: Create a service that can generate predictions and be integrated with VA.gov via VETS-API
- Repository: TODO

This application will borrow heavily from the [Disability Contention Classifier](https://github.com/department-of-veterans-affairs/contention-classification-api) with some minor changes.  

### Components

- AWS Kubernetes Cluster - t3-medium - 4 CPU 4 GB RAM
    - Control Plane
    - Worker Nodes: 2
        - Fast API based application (see below)
        - Resource auto scaling from 220 MB to 1.5 GB
        - Loads model from S3 on boot
- S3 Bucket
    - Kubernetes service needs access
    - Ask VA team - Matt Floyd - needs access to upload model files
- Fast API based application
    - Python 3.12
    - Key Libraries:
        - onnxruntime
        - numpy
        - fastapi
        - transformers
        - pydantic

### API documentation

Request
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "question": {
            "type": "string",
            "maxLength": 10000,
            "example": "How do I set up my account to receive the monthly stipend while I'm in school? When do you need that information?"
        }
    },
    "required": ["question"]
}
```
Response
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "model_version": {
            "type": "string",
            "example": "Version 1"
        },
        "error" : {
            "type": "string",
            "example" : "Bad request. Missing field(s): question"
        },
        "predictions": {
            "type": "object",
            "properties": {
                "1": {
                    "type": "object",
                    "properties": {
                        "confidence_level": {
                            "type": "number",
                            "format": "float",
                            "example": "0.8125"
                        },
                        "category": {
                            "type": "object",
                            "properties": {
                                "name": {
                                    "type": "string",
                                    "maxLength": 100,
                                    "example" : "Education benefits and work study"
                                },
                                "model_id": {
                                    "type": "integer",
                                    "example" : 1
                                }
                            },
                            "required": ["name", "model_id"]
                        }
                    },
                    "required": ["confidence_level", "category"]
                },
                "2": {
                    "type": "object",
                    "properties": {
                        "confidence_level": {
                            "type": "number",
                            "format": "float",
                            "example": "0.6250"
                        },
                        "category": {
                            "type": "object",
                            "properties": {
                                "name": {
                                    "type": "string",
                                    "maxLength": 100,
                                    "example" : "Debt for benefit overpayments and health care copay bills"
                                },
                                "model_id": {
                                    "type": "integer",
                                    "example": 2
                                }
                            },
                            "required": ["name", "model_id"]
                        }
                    },
                    "required": ["confidence_level", "category"]
                },
                "3": {
                    "type": "object",
                    "properties": {
                        "confidence_level": {
                            "type": "number",
                            "format": "float"
                        },
                        "category": {
                            "type": "object",
                            "properties": {
                                "name": {
                                    "type": "string",
                                    "maxLength": 100,
                                    "example" : "Benefits issues outside the U.S."
                                },
                                "model_id": {
                                    "type": "integer",
                                    "example": 3
                                }
                            },
                            "required": ["name", "model_id"]
                        }
                    },
                    "required": ["confidence_level", "category"]
                }
            },
            "required": ["1", "2", "3"]
        }
    }
}
```

### HTTP Status Codes

| HTTP Status Code | Description |
|-----------------|-------------|
| 200 | OK - Request successful, predictions returned |
| 400 | Bad Request - Invalid request format or missing required fields |
| 401 | Unauthorized - Authentication credentials missing or invalid |
| 500 | Internal Server Error - Server encountered an unexpected error |
| 502 | Bad Gateway - Invalid response or a timeout from Prediction Service |

The intention is that most of the HTTP status codes should originate from VETS-API where there is integrated Datadog logging.  AWS access should not be required unless in depth debugging is required.

### Security Overview

The Prediction Service will exist within the VA's AWS infrastructure
- AWS Kubernetes Cluster
    - Exposed to VETS-API
- S3 Bucket
    - Kubernetes service needs access
    - Ask VA team - Matt Floyd - needs access to upload model files

### AWS S3 and IAM Roles
| VFS environment | S3 bucket | IAM roles |
| :--- | :--- | :--- |
| dev | dsva-vagov-dev-askva-prediction-api | dsva-vagov-vets-api-nonprod-askva-prediction-api-ro, dsva-vagov-vets-api-nonprod-askva-prediction-api-rw |
| staging | dsva-vagov-staging-askva-prediction-api | dsva-vagov-vets-api-nonprod-askva-prediction-api-ro, dsva-vagov-vets-api-nonprod-askva-prediction-api-rw |
| sandbox | dsva-vagov-staging-askva-prediction-api | dsva-vagov-vets-api-prod-askva-prediction-api-ro, dsva-vagov-vets-api-prod-askva-prediction-api-rw |
| production | dsva-vagov-prod-askva-prediction-api | dsva-vagov-vets-api-nonprod-askva-prediction-api-rw, dsva-vagov-vets-api-prod-askva-prediction-api-rw |

### K8s service accounts

The AskVA Prediction Service is deployed via VFS ArgoCD into a kubernetes (k8s) environment. To allow access from the deployment environment to S3, k8s service accounts must know which IAM role to use, and the IAM roles must know which k8s cluster to trust.

Future Phase: Will update this further once we build the AWS application to reference the Helm configuration.

### Abuse Scenarios

See the VETS-API section which is exposed to end-users.

### Release Plan

| Step | Environment | Description |
|-----------------|-------------|-------------|
| 05 | Local | Development of service on GFE based on ONNX model |
| 10 | N/A | Submit Application Onboarding Form to create new AWS application | 
| 15 | Dev | Create AWS application using ArgoCD | 
| 20 | Staging | Submit Application Promotion Form to create Staging application | 
| 25 | Staging | Collaboration Cycle Staging Review | 
| 30 | Production | Submit Application Promotion Form to create Production application |

### Monitoring

Utilize AWS CloudWatch to log any errors from the Application.  Important Notes:
- Error handling within the application should provide a defined HTTP status code and error message as the standard
- 500 status code will be reserved for unexpected errors within the application
- The contents of the question field can't be logged due to PII concerns
- This paradigm enables service debugging to occur mostly in VETS-API, limiting AWS access needs

## VETS-API

### Endpoints

Ask VA currently utilizes VETS-API as a Rails module under /ask_va_api.  This effort would add a route for predictions /predict and a specific route for Category predictions /predict/category.

- /ask_va_api/predict/category

VETS-API will be a passthrough-API to the prediction service - see [API documentation](#api-documentation) for details

### Timeout Design

| Step | Timeout (seconds) |
|-----------------|-------------|
| VA.gov | 5 |
| Vets-API | 4 |
| Prediction Service | 2 |

### HTTP Status Codes

| HTTP Status Code | Description |
|-----------------|-------------|
| 200 | OK - Request successful, predictions returned |
| 400 | Bad Request - Invalid request format or missing required fields |
| 401 | Unauthorized - Authentication credentials missing or invalid |
| 403 | Forbidden - Valid credentials but insufficient permissions |
| 500 | Internal Server Error - Server encountered an unexpected error |
| 502 | Bad Gateway - Invalid response or a timeout from Prediction Service |
| 504 | Gateway Timeout - Prediction Service failed to respond in time |

### Call Patterns

AskVA traffic patterns were analyzed to serve as a baseline for expected traffic - relevant details:
- Averages 1 personal inquiry per minute
- Deployment plan will ramp up utilization over time using triggers to evaluate metrics on a small portion of the population

### Logging

Standard response logging via Rails into DataDog will indicate:
- HTTP Status
- Error message when applicable

### Security - Abuse Scenarios

The model uses a distilled NLP model (Distilbert) that takes a single input and provides the top 3 predicted categories (out of a list of 18)

Adversarial Evasion - trying to forc
| inquiry_id | Lookup | - | Yes | Reference to related inquiry record - rirsiis_inquiry i, iris_inquirynumber |e a categorization
- Thntegere use- r continues to control the routing of their request, the prediction is a suggestion

Downstream Injection - sending malicious code in the question
- Inputs to the model will be sanitized to remove HTML prio000r to use
- Inputs will not be saved by the prediction process

Resource Exhaustion - Denial of Service
- The text length is limited to 10,000 characters - we will stress test the model to ensure that it will not overload the service
- VA.gov's CSRF token is effective at preventing multiple API0 calls with a single token


## Model predictions
### Overview

As the model makes predictions and provide them to the user, we will need to capture and evaluate these predictions to determine their ultimate accuracy.

### Capture

AskVA has an existing API that captures inquiries in MS Dynamics.  0The data is captured using the AskVA React application and the Form Library.  We will reuse the existing application and integrations with a new endpoint to send the predictions to MS Dynamics.

### Entity Design - Non Normalized Option


| Field Name | Data Type | Length | Required | Description |
|-----------|-----------|--------|----------|-------------|
| inquiry_id | Lookup | - | Yes | Reference to related inquiry record - iris_inquiry, iris_inquirynumber |
| model_version | Whole Number | - | Yes | Version identifier of the model used for prediction |
| user_adoption | Whole Number | - | No | The prediction the user accepted - 1,2,or 3 - 0 if they didn't accept it|
| prediction_rank_1_confidence | Decimal | - | Yes | Confidence level (0-1) for top prediction |
| prediction_rank_1_category_name | Text | 1000 | Yes | Category name for top prediction |
| prediction_rank_1_category_model_id | Whole Number | - | Yes | Model ID for top prediction category |
| prediction_rank_2_confidence | Decimal | - | Yes | Confidence level (0-1) for second prediction |
| prediction_rank_2_category_name | Text | 1000 | Yes | Category name for second prediction |
| prediction_rank_2_category_model_id | Whole Number | - | Yes | Model ID for second prediction category |
| prediction_rank_3_confidence | Decimal | - | Yes | Confidence level (0-1) for third prediction |
| prediction_rank_3_category_name | Text | 1000 | Yes | Category name for third prediction |
| prediction_rank_3_category_model_id | Whole Number | - | Yes | Model ID for third prediction category |
| created_on | Date Time | - | Yes | Timestamp when prediction was captured |


### Entity Design - Normalized Option


**AskVA Model Prediction (Parent Entity)**

| Field Name | Data Type | Length | Required | Description |
|-----------|-----------|--------|----------|-------------|
| prediction_id | Primary Key | - | Yes | Unique identifier for prediction record |
| inquiry_id | Lookup | - | Yes | Reference to related inquiry record - iris_inquiry, iris_inquirynumber |
| model_version | Whole Number | - | Yes | Version identifier of the model used for prediction |
| user_adoption | Whole Number | - | No | The prediction the user accepted - 1,2,or 3 - 0 if they didn't accept it|
| created_on | Date Time | - | Yes | Timestamp when prediction was captured |

**AskVA Model Prediction Rank (Child Entity)**

| Field Name | Data Type | Length | Required | Description |
|-----------|-----------|--------|----------|-------------|
| prediction_rank_id | Primary Key | - | Yes | Unique identifier for prediction rank record |
| prediction_id | Lookup | - | Yes | Reference to parent AskVA Model Prediction record |
| rank | Whole Number | - | Yes | Ranking position (1, 2, or 3) |
| confidence_level | Decimal | - | Yes | Confidence level (0-1) for prediction |
| category_name | Text | 1000 | Yes | Category name for prediction |
| category_model_id | Whole Number | - | Yes | Model ID for prediction category |


### Power BI Reporting

See the [Continuous Evaluation Metrics](#continuous-evaluation) to see how the model is evaluated.

To evaluate accuracy, the category prediction would be compared to the ultimate category of the completed inquiry when the user accepts the prediction (user_adoption <> 0)
- Assumption: that the re-assignment of the queue would change the category
- Otherwise: we would need to detect if the queue was reassigned

To evaluation user adoption, we'd count the predictions where user_adoption is 1,2,or 3 divided by the total number of predictions

The Top 1 and Top 3 metrics are useful for model re-training but don't need to appear in the report.

### Storage

Model predictions will be stored in an entity in MS Dynamics.  The existing integration with CX Insights will be used to expose these predictions to Databricks where the model lives to enable a continuously improving model.

The initial discussions with the engineering lead mentioned a polciy where we could only keep these predictions for up to 60 days.  We will revisit this in Phase 2 as we would be storing the data in an existing MS Dynamics and inquiries that don't complete within 60 days would have their success metrics lost.

### Ongoing Evaluation

To avoid model drift, the AskVA inquiries will be evaluated via topic analysis initially.  This analysis will be re run every month to detect new topics - if a new topic is detected, this would prompt an investigation and a re-evaluation of the model.

Model re-training can also be run monthly and evaluated for accuracy through the Registered Models functionality in ML Flow.  These models would be development models that could opt to be promoted if they are found to work better.

# Change log
All notable changes to this project will be documented in this file.

## [0.0.3] - 2026-02-20
Description: Draft of Model Entity design for Intake Request
User: @mfloyd-iat

## [0.0.2] - 2026-02-20
Description: Updates based on internal review
User: @mfloyd-iat

## [0.0.1] - 2026-02-11
Description: Initial Draft for Internal Review
User: @mfloyd-iat

---
## [0.0.0] - 2026-00-00
Description:
User:

### Added
- 

### Changed
- 

### Removed
- 

### Fixed
- 
