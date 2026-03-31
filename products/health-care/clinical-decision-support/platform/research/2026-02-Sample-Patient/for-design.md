{
  "meta": {
    "version": "1.0",
    "created": "2026-02-12",
    "description": "Sample patient for design reference. Synthesized from condition-specific sample datasets. **Not a real patient/individual.**",

    ]
  },
  "demographics": {
    "patient_id": "V9001",
    "name": "James R. Calloway",
    "age": 54,
    "sex": "M",
    "dob": "1971-09-14",
    "service_era": "Desert Storm / OIF",
    "branch": "U.S. Army",
    "years_of_service": 22,
    "discharge_status": "Honorable",
    "va_facility": "VA Medical Center – Denver, CO",
    "primary_care_provider": "Dr. M. Chen, MD",
    "last_visit": "2026-01-14",
    "next_appointment": "2026-03-10"
  },
  "vitals": {
    "height_in": 70,
    "weight_lbs": 210,
    "bmi": 30.1,
    "bp_systolic": 142,
    "bp_diastolic": 88,
    "oxygen_saturation_pct": 94,
    "smoking_status": "Former",
    "smoking_pack_years": 20
  },
  "labs": {
    "a1c_pct": 8.1,
    "ldl_mg_dl": 118,
    "uric_acid_mg_dl": 8.7,
    "ascvd_risk_10yr_pct": 21,
    "audiogram_dbhl_avg": null
  },
  "conditions": {
    "mental_health": {
      "primary_diagnosis": "PTSD (chronic)",
      "icd10": "F43.12",
      "comorbid": [
        "Major depressive disorder (F33.1)",
        "Alcohol use disorder (F10.20)"
      ],
      "tbi_flag": true,
      "screenings": {
        "pcl5": 46,
        "phq9": 14,
        "gad7": 8,
        "audit_c": 5
      },
      "suicide_risk": "Low",
      "therapy_type": "Prolonged Exposure; CBT",
      "medications": [
        "sertraline 100 mg daily",
        "prazosin 3 mg QHS",
        "naltrexone 50 mg daily"
      ]
    },
    "musculoskeletal": {
      "primary_diagnosis": "Low back pain with cervical radiculopathy",
      "icd10": [
        "M54.50",
        "M54.12"
      ],
      "affected_sites": [
        "Lumbar spine",
        "Cervical C5-C6"
      ],
      "pain_score": 7,
      "rom_limited": true,
      "imaging": [
        {
          "modality": "MRI",
          "region": "Lumbar",
          "findings": "L4-L5 disc degeneration; mild stenosis"
        },
        {
          "modality": "MRI",
          "region": "Cervical",
          "findings": "C5-C6 foraminal narrowing"
        }
      ],
      "pt_visits_last_12mo": 10,
      "surgery_history": false,
      "assistive_device": "None",
      "medications": [
        "naproxen 500 mg BID",
        "gabapentin 600 mg TID",
        "cyclobenzaprine PRN"
      ]
    },
    "chronic_diseases": {
      "primary_diagnosis": "Type 2 diabetes mellitus",
      "icd10": "E11.9",
      "comorbid": [
        "Primary hypertension (I10)",
        "Hyperlipidemia"
      ],
      "medications": [
        "metformin 1000 mg BID",
        "glipizide 5 mg daily",
        "lisinopril 20 mg daily",
        "HCTZ 12.5 mg daily",
        "atorvastatin 40 mg daily",
        "aspirin 81 mg daily"
      ]
    },
    "respiratory": {
      "primary_diagnosis": "Chronic bronchitis",
      "icd10": "J41.0",
      "spirometry": {
        "fev1_pct_predicted": 60,
        "fev1_fvc_ratio_pct": 62
      },
      "exacerbations_last_12mo": 3,
      "pulmonary_rehab": true,
      "exposure_history": [
        "Burn pit exposure",
        "Dust/smoke exposure"
      ],
      "medications": [
        "umeclidinium/vilanterol daily",
        "albuterol HFA PRN",
        "roflumilast daily"
      ]
    },
    "other": {
      "diagnoses": [
        {
          "condition": "Gout (unspecified)",
          "icd10": "M10.9",
          "uric_acid_mg_dl": 8.7,
          "pain_score": 7,
          "flares_last_12mo": 2,
          "imaging": "Foot X-ray: no erosions",
          "medications": [
            "allopurinol 100 mg daily",
            "colchicine PRN"
          ]
        },
        {
          "condition": "Tinnitus (unspecified)",
          "icd10": "H93.19",
          "pain_score": 3,
          "audit_c": 2,
          "assistive_device": "None",
          "medications": []
        }
      ]
    }
  },
  "medications_full_list": [
    {
      "name": "sertraline",
      "dose": "100 mg",
      "frequency": "daily",
      "category": "Mental health"
    },
    {
      "name": "prazosin",
      "dose": "3 mg",
      "frequency": "QHS (bedtime)",
      "category": "Mental health / PTSD nightmares"
    },
    {
      "name": "naltrexone",
      "dose": "50 mg",
      "frequency": "daily",
      "category": "Alcohol use disorder"
    },
    {
      "name": "naproxen",
      "dose": "500 mg",
      "frequency": "BID",
      "category": "Pain / MSK"
    },
    {
      "name": "gabapentin",
      "dose": "600 mg",
      "frequency": "TID",
      "category": "Neuropathic pain"
    },
    {
      "name": "cyclobenzaprine",
      "dose": "5 mg",
      "frequency": "PRN",
      "category": "Muscle relaxant"
    },
    {
      "name": "metformin",
      "dose": "1000 mg",
      "frequency": "BID",
      "category": "Diabetes"
    },
    {
      "name": "glipizide",
      "dose": "5 mg",
      "frequency": "daily",
      "category": "Diabetes"
    },
    {
      "name": "lisinopril",
      "dose": "20 mg",
      "frequency": "daily",
      "category": "Hypertension"
    },
    {
      "name": "HCTZ",
      "dose": "12.5 mg",
      "frequency": "daily",
      "category": "Hypertension"
    },
    {
      "name": "atorvastatin",
      "dose": "40 mg",
      "frequency": "daily",
      "category": "Hyperlipidemia"
    },
    {
      "name": "aspirin",
      "dose": "81 mg",
      "frequency": "daily",
      "category": "Cardiovascular prophylaxis"
    },
    {
      "name": "umeclidinium/vilanterol",
      "dose": "62.5/25 mcg",
      "frequency": "daily",
      "category": "Respiratory / COPD"
    },
    {
      "name": "albuterol HFA",
      "dose": "90 mcg",
      "frequency": "PRN",
      "category": "Respiratory rescue"
    },
    {
      "name": "roflumilast",
      "dose": "500 mcg",
      "frequency": "daily",
      "category": "Chronic bronchitis"
    },
    {
      "name": "allopurinol",
      "dose": "100 mg",
      "frequency": "daily",
      "category": "Gout"
    },
    {
      "name": "colchicine",
      "dose": "0.6 mg",
      "frequency": "PRN",
      "category": "Gout flare"
    }
  ],
  "care_team": [
    {
      "role": "Primary Care Physician",
      "name": "Dr. M. Chen, MD"
    },
    {
      "role": "Psychiatrist",
      "name": "Dr. A. Okonkwo, MD"
    },
    {
      "role": "Physical Therapist",
      "name": "T. Reyes, DPT"
    },
    {
      "role": "Pulmonologist",
      "name": "Dr. S. Park, MD"
    },
    {
      "role": "Pharmacist",
      "name": "K. Brandt, PharmD"
    }
  ]
}
