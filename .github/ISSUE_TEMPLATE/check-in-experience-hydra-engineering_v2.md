name: Hydra - Check In Experience Engineering Ticket
description: Template to create an engineering ticket
title: "[FE|BE|Spike]: "
labels:
body:
  - type: textarea
    id: summary
    attributes:
      label: Summary
      description: Brief overview of the work being completed
      placeholder: Feature, fix, refactor, enhancement...
    validations:
      required: true

  - type: textarea
    id: context
    attributes:
      label: Context / Background
      description: Why is this change needed? Link to relevant docs, epic, or product brief.

  - type: checkboxes
    id: acceptance-criteria
    attributes:
      label: Acceptance Criteria
      options:
        - label: Documentation updated (technical + feature reference)
        - label: Monitoring/logging added (if relevant)
        - label: Tests added/updated

  - type: dropdown
    id: area-of-work
    attributes:
      label: Area(s) of Work
      multiple: true
      options:
        - Frontend
        - Backend
        - Full-stack
        - Infrastructure
    validations:
      required: true

  - type: textarea
    id: primary-files
    attributes:
      label: Primary Files / Modules
      description: List key files, paths, or endpoints
      render: text

  - type: textarea
    id: dependencies
    attributes:
      label: Dependencies
      description: Feature toggles, APIs, or services impacted
      placeholder: |
        Feature toggle: <toggle_name>
        Service dependency: <service_name>

  - type: textarea
    id: design-assets
    attributes:
      label: Design / Assets
      description: Links to Figma specs, feature references, Swagger docs, etc.
