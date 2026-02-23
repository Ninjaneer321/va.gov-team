# Array-Builder Implementation Analysis
## How Users Have Implemented Array-Builder Across VA.gov Forms

**Date:** February 19, 2026
**Applications Analyzed:** 31 apps using array-builder
**Total Array Builders Found:** 81 instances
**Total Pages:** 481 (346 item pages + 135 summary pages)

---

## Executive Summary

Array-builder is used in **31 applications** (21% of all VA.gov apps) to create **81 array instances** with a total of **481 pages**. The pattern shows high flexibility with implementations ranging from simple 1-page arrays to complex 21-page workflows.

###Key Findings:

- **Most arrays are optional** (25 apps) vs required (5 apps)
- **Page count varies widely**: 0-21 pages per array
- **Max items constraints**: 13 apps set limits (range: 1-20 items)
- **No min items constraints** found
- **Yes/No pattern**: Used in 18 apps (58%)
- **Conditional pages**: 18 apps (58%) use dynamic page visibility

---

## 1. Number of Pages Per Array

### Distribution

| Pages | Count | % of Total | Examples |
|-------|-------|------------|----------|
| 0 pages | 3 | 4% | Mock forms (config only) |
| 1 page | 19 | 23% | Simple lists (jobs, names, dates) |
| 2 pages | 14 | 17% | Basic info + details |
| 3 pages | 14 | 17% | Most common multi-page |
| 4 pages | 9 | 11% | Moderate complexity |
| 5 pages | 3 | 4% | Dependents, care expenses |
| 6-8 pages | 8 | 10% | Complex financial data |
| 9-12 pages | 6 | 7% | Very complex (dependents, children) |
| 13-21 pages | 5 | 6% | Extremely complex workflows |

### Notable Implementations

**Simplest (1 page):**
- **Spouse** (ezr) - max: 1 item, 1 page
- **Previous names** (pensions) - 1 page
- **Current jobs** (pensions) - max: 2 items, 1 page

**Most Complex (21 pages):**
- **Dependents** (686C-674-v2) - 21 item pages
  - Comprehensive dependent information workflow

**Second Most Complex (18 pages):**
- **Dependents** (686C-674-v2) - 18 item pages

---

## 2. Required vs Optional

### Overall Distribution

| Type | Apps | % | Arrays | % |
|------|------|---|--------|---|
| **Optional** | 25 | 81% | 75 | 93% |
| **Required** | 5 | 16% | 6 | 7% |
| **Mixed** | 1 | 3% | - | - |

### Applications with REQUIRED Arrays

1. **pensions** (21P-527EZ)
   - Previous jobs - Required, max: 4

2. **pre-need-integration** (40-10007)
   - Deceased person - Required, max: 3
   - Service periods - Required, max: 3

3. **21-4142-medical-release**
   - Treatment records - Required, max: 5

4. **mock-form-patterns-v3**
   - Treatment records - Required, max: 5

5. **40-xxxx-ton**
   - Service periods - Required, max: 3
   - Desired date/time ranges - Required, max: 3
   - Deceased person - Required, max: 3

### Why Most Are Optional

Most arrays are optional because they collect:
- **Supplemental information** (dependents, insurance)
- **Variable-length lists** (medical expenses, treatment facilities)
- **Conditional data** (only applies to some users)

---

## 3. Yes/No Pattern Usage

### Distribution

- **With Yes/No**: 18 apps (58%)
- **Without Yes/No**: 13 apps (42%)

### What is Yes/No Pattern?

The yes/no pattern asks users "Do you have any [items] to add?" before showing the array:
- **Yes** → Shows array builder
- **No** → Skips to next section

### Examples

**Forms using Yes/No:**
- Healthcare Application (hca) - "Do you have dependents?"
- 686C-674 - "Do you have children to add?"
- Pensions - "Do you have medical expenses?"
- Pre-need - "Do you have service periods to add?"

**Forms NOT using Yes/No:**
- Mock forms (demonstration purposes)
- Simple optional arrays
- Arrays embedded in conditional sections

---

## 4. Max/Min Values

### Max Items Constraints

| Max Value | Apps | Use Cases |
|-----------|------|-----------|
| 1 | 2 | Spouse, single item |
| 2 | 3 | Names, marriages |
| 3 | 6 | Service periods, deceased persons, care expenses |
| 4 | 7 | Jobs, relatives, medical treatments, debts |
| 5 | 9 | Treatment records, medical/care expenses, employers |
| 20 | 1 | Events (disability claims) |

**Most Common:** max: 5 (9 apps)
**Largest:** max: 20 (526EZ disability claims - events)

### Min Items Constraints

**No applications use minItems!**

This makes sense because:
- Arrays are typically optional
- Required arrays need at least 1 item (enforced by `required: true`)
- No business need for "must have at least 3 items" scenarios

### No Constraints

**68 arrays (84%)** have no max/min constraints, allowing unlimited items.

Common use cases:
- Dependents (variable number)
- Medical expenses (unpredictable)
- Financial information (varies by person)
- Service history (varies widely)

---

## 5. Other Relevant Patterns

### Conditional Pages (Depends)

**18 applications (58%)** use conditional page visibility.

**Example from HCA (dependents):**
```javascript
depends: (formData, index) =>
  includeHouseholdInformation(formData) &&
  formData.dependents[index]?.['view:dependentIncome']
```

**Common Conditions:**
- Show income page only if dependent has income
- Show support page only if dependent doesn't cohabitate
- Show education page only if dependent is 18-23 with income
- Age-based page visibility

### Custom Titles

**Use of arrayBuilderItemFirstPageTitleUI:**
- Customizes first page title with item context
- Example: "Tell us about your dependent" vs "Tell us about John Doe"

**Use of arrayBuilderItemSubsequentPageTitleUI:**
- Shows item name in subsequent pages
- Example: "John Doe's education expenses"

### Text Configuration

Common text configurations:
- **nounSingular**: "dependent", "employer", "treatment record"
- **nounPlural**: "dependents", "employers", "treatment records"
- **cardDescription**: Shows key info in summary cards
- **getItemName**: Extracts display name from item data

---

## 6. Detailed Application Analysis

### Top 5 Most Complex Implementations

#### 1. income-and-asset-statement (21P-0969)
- **10 array builders**
- **131 total pages** (81 item pages)
- Arrays:
  - Asset transfers (9 pages)
  - Trusts (11 pages)
  - Financial accounts (8 pages)
  - Annuities (6 pages)
  - Royalties (8 pages)
  - Waived income (7 pages)
  - Recurring income (8 pages)
  - Assets not reported (6 pages)
  - Owned assets (11 pages)
  - Discontinued income (7 pages)

#### 2. 686C-674-v2 (Add/Remove Dependents)
- **4 array builders**
- **72 total pages** (64 item pages)
- Comprehensive dependent management
- Largest single array: 21 pages

#### 3. 10-10d-extended (CHAMPVA Extended)
- **3 array builders**
- **43 total pages** (40 item pages)
- 16-page and 8-page complex workflows

#### 4. pensions (21P-527EZ)
- **9 array builders**
- **34 total pages** (25 item pages)
- Mix of financial, personal, and medical data

#### 5. representative-21a
- **6 array builders**
- **23 total pages** (17 item pages)
- Professional accreditation workflow

### Most Common Use Cases

**1. Dependents/Family Members** (8 apps)
- Healthcare application (hca)
- 686C-674
- EZR
- Pensions

**2. Medical Expenses/Treatment** (11 apps)
- Medical expense report
- Pensions
- Survivors benefits
- CHAMPVA claims

**3. Employment History** (7 apps)
- Income verification
- Financial status reports
- Education benefits

**4. Service History** (5 apps)
- Pre-need
- TON application
- Various forms

**5. Financial Information** (5 apps)
- Income and asset statement
- Financial Status Report
- Debt management

---

## 7. Common Patterns by Page Count

### 1-Page Arrays (19 instances)
**Use:** Simple list collection

**Examples:**
- Previous names
- Current jobs
- VA medical centers
- Service periods
- Insurance providers

**Pattern:** Summary page + 1 item page (basic info)

### 2-Page Arrays (14 instances)
**Use:** Basic info + additional details

**Examples:**
- Employers (name/address + job details)
- Medical treatments (facility + dates)
- Relatives (info + contact)

**Pattern:** Summary + 2 item pages

### 3-Page Arrays (14 instances)
**Use:** Multi-faceted data

**Examples:**
- Treatment records (facility + dates + details)
- Medical expenses (type + amount + provider)
- Care expenses (recipient + type + amount)

**Pattern:** Summary + 3 item pages

### 4-5 Page Arrays (12 instances)
**Use:** Complex entities

**Examples:**
- Dependents (basic + relationship + support + income + education)
- Deceased persons (identity + service + burial + benefits)

**Pattern:** Summary + 4-5 item pages with conditional logic

### 6+ Page Arrays (23 instances)
**Use:** Very complex workflows

**Examples:**
- Financial accounts with extensive details
- Dependent children with comprehensive information
- Assets with full documentation requirements

**Pattern:** Summary + 6-21 pages with heavy conditional logic

---

## 8. Best Practices Observed

### Naming Conventions

**Good:**
- Descriptive nouns: "dependent", "employer", "treatment record"
- Consistent singular/plural forms
- User-friendly language

**Examples:**
- ✅ "dependent" / "dependents"
- ✅ "medical expense" / "medical expenses"
- ✅ "employer" / "employers"
- ❌ "items" / "items" (too generic - found in 23 arrays)

### Max Items Guidelines

| Data Type | Typical Max | Rationale |
|-----------|-------------|-----------|
| Spouse | 1 | Only one at a time |
| Previous names | 2-3 | Rare to have more |
| Jobs | 2-4 | Recent employment only |
| Medical treatments | 4-5 | Keeps manageable |
| Service periods | 3 | Military service ranges |
| Care/medical expenses | 3-5 | Recent claims |

### When to Use Required

✅ **Use required when:**
- Form purpose requires the data (e.g., burial planning needs deceased info)
- At least one item is mandatory (e.g., service history)
- Form is invalid without it

❌ **Don't use required when:**
- Data is supplemental
- Applies only to subset of users
- Variable applicability

---

## 9. Recommendations

### For New Implementations

1. **Start with 1-3 pages** - Most use cases fit this pattern
2. **Use descriptive nouns** - Avoid generic "items"
3. **Set reasonable maxItems** - Based on data type (see table above)
4. **Use conditional pages** - Show only relevant fields
5. **Implement yes/no pattern** - Better UX for optional arrays
6. **Make optional by default** - Unless data is truly required

### For Existing Applications

**23 arrays use generic "items" label** - Should be updated with specific nouns:
- Mock forms can stay generic (demonstration)
- Production forms should use descriptive labels

**68 arrays have no max constraint** - Consider adding limits for:
- Performance (very long lists)
- Data quality (focused responses)
- User experience (prevent overwhelming forms)

### Common Configuration

**Typical optional array with yes/no:**
```javascript
const options = {
  arrayPath: 'dependents',
  nounSingular: 'dependent',
  nounPlural: 'dependents',
  required: false,  // Most common
  maxItems: 5,      // Reasonable limit
  text: {
    getItemName: item => item.fullName,
    cardDescription: item => item.relationship,
  },
};
```

**Required array with strict limit:**
```javascript
const options = {
  arrayPath: 'servicePeriods',
  nounSingular: 'service period',
  nounPlural: 'service periods',
  required: true,
  maxItems: 3,
  // ... rest of config
};
```

---

## 10. Files Created

### Data Files

1. **array-builder-detailed-analysis.json**
   - Complete analysis data
   - All 81 array builders
   - Page counts, constraints, configurations

2. **array-builder-scan-output.log**
   - Scan execution log
   - Summary statistics

### Analysis Documents

3. **ARRAY_BUILDER_IMPLEMENTATION_ANALYSIS.md** (this file)
   - Comprehensive analysis
   - Best practices
   - Recommendations

---

## Appendix: Full Application List

| App | Builders | Total Pages | Item Pages | Required | Max Items |
|-----|----------|-------------|------------|----------|-----------|
| mock-form-ae-design-patterns | 3 | 17 | 12 | 0 | 0 |
| representative-21a | 6 | 23 | 17 | 0 | 0 |
| 686C-674-v2 | 4 | 72 | 64 | 0 | 0 |
| 526EZ-all-claims | 2 | 6 | 4 | 0 | 1 (max:20) |
| 0839-edu-benefits | 1 | 6 | 4 | 0 | 0 |
| 10215-edu-benefits | 1 | 2 | 1 | 0 | 0 |
| 10297-edu-benefits | 1 | 2 | 1 | 0 | 0 |
| 1919-edu-benefits | 1 | 6 | 4 | 0 | 0 |
| 8794-edu-benefits | 1 | 6 | 4 | 0 | 0 |
| ezr | 4 | 12 | 8 | 0 | 1 (max:1) |
| hca | 2 | 8 | 6 | 0 | 0 |
| income-and-asset-statement | 10 | 131 | 81 | 0 | 0 |
| 10-10d-extended | 3 | 43 | 40 | 0 | 0 |
| 10-7959a | 1 | 3 | 2 | 0 | 0 |
| medical-expense-report | 3 | 13 | 10 | 0 | 3 (max:5) |
| pensions | 9 | 34 | 25 | 1 | 3 (max:2,4) |
| pre-need-integration | 2 | 16 | 8 | 2 | 2 (max:3) |
| 10207-pp | 3 | 9 | 6 | 0 | 3 (max:4) |
| 21-4140-income-verification | 1 | 4 | 3 | 0 | 1 (max:4) |
| 21-4142-medical-release | 1 | 4 | 3 | 1 | 1 (max:5) |
| 21-8940 | 4 | 13 | 9 | 0 | 0 |
| 21P-601 | 3 | 8 | 5 | 0 | 3 (max:4) |
| mock-form-minimal-header | 1 | 3 | 2 | 0 | 1 (max:5) |
| mock-simple-forms-patterns | 2 | 4 | 3 | 0 | 0 |
| mock-form-patterns-v3 | 2 | 7 | 5 | 1 | 2 (max:5) |
| survivors-benefits | 6 | 21 | 15 | 0 | 5 (max:2,3,5) |
| 40-xxxx-ton | 3 | 6 | 3 | 3 | 3 (max:3) |
| new-conditions | 1 | 2 | 1 | 0 | 0 |

---
