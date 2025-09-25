# Security Model

## Profiles & Permission Sets
* **PFM User Profile:** Minimum permissions required for end users to access the app and its data.
* **PFM Admin Profile:** Full permissions to configure the app and view all data.
* **Permission Sets:**
    * `ChatbotAccess`: Grants access to the `AiChatController` Apex class.
    * `DataImportAccess`: Grants permissions for importing data via CSV.

## Sharing & Visibility
* **Org-Wide Defaults (OWD):**
    * `Account__c`: Private
    * `Transaction__c`: Private
    * `Budget__c`: Private
    * `Goal__c`: Private
    * `Recurring_Bill__c`: Private
* **Justification:** PFM data is highly sensitive and should only be visible to the record owner by default.

## Field-Level Security
* Fields like `Balance__c` on `Account__c` will be read-only for certain profiles to ensure data integrity.