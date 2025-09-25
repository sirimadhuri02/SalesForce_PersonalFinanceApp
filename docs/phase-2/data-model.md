# Data Model Design

## Objects & Key Fields
* `Account__c`:
    * AccountName (Text)
    * Type (Picklist)
    * Balance__c (Currency)
* `Transaction__c`:
    * Amount__c (Currency)
    * Date__c (Date)
    * Category__c (Picklist)
    * Related_Account__c (Lookup to Account__c)
* `Budget__c`:
    * Category__c (Picklist)
    * Limit__c (Currency)
    * Period__c (Picklist - e.g., Monthly, Yearly)
    * StartDate__c (Date)
* `Goal__c`:
    * TargetAmount__c (Currency)
    * TargetDate__c (Date)
    * Progress__c (Percent)
* `Recurring_Bill__c`:
    * Vendor__c (Text)
    * Amount__c (Currency)
    * DueDate__c (Date)
    * Frequency__c (Picklist - e.g., Monthly, Weekly)

## Relationships
* `Transaction__c` has a Lookup relationship to `Account__c`.
* `Budget__c` has a Lookup relationship to `Account__c`.
* `Goal__c` has a Lookup relationship to `Account__c`.
* `Recurring_Bill__c` has a Lookup relationship to `Account__c`.
* The `Account__c` object will have a rollup summary field to calculate total balance.