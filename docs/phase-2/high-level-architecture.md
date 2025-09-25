# PFM — High Level Architecture

## Layers
- **Presentation:** Lightning App (LWCs) - Home Dashboard, Budget Planner, Chatbot modal
- **Business:** Apex (controllers, integrations), Flows (notifications, recurring bills)
- **Data:** Custom Objects (Account__c, Transaction__c, Budget__c, Goal__c, Recurring_Bill__c)
- **Integrations:** Named Credential for AI Chatbot; optional Plaid for bank imports

## Org Strategy
- DevHub (your org) + scratch orgs for feature dev + one UAT sandbox before production.

## CI/CD
- Validate on PRs using GitHub Actions; deploy to scratch org on merges to develop.