# Business Process Map

**Project:** Salesforce Personal Finance Manager (PFM)

### Process 1: Creating and Managing a Budget

This process describes how a user will set up and track a monthly budget.

1.  **Start:** User decides to create a new budget to control spending.
2.  **Define Budget:** User navigates to the "Budget" section of the PFM app.
3.  **Input Details:** User enters the budget name (e.g., "Monthly Groceries"), selects a category (e.g., "Food & Dining"), specifies the budget amount ($500), and sets a timeframe (e.g., Monthly).
4.  **Save Budget:** User saves the new budget record.
5.  **Automated Tracking:** The system automatically tracks transactions categorized as "Food & Dining" against the $500 budget limit.
6.  **Receive Alerts:** When the user's spending reaches 80% and 100% of the budget, the system sends a notification.
7.  **Review Progress:** The user can view their spending progress on the PFM Dashboard.
8.  **End:** The process repeats for the next month.

### Process 2: Logging a New Transaction

This process outlines the steps for a user to manually record an expense.

1.  **Start:** User makes a purchase (e.g., buys coffee).
2.  **Access App:** The user opens the Salesforce Mobile App.
3.  **New Transaction:** The user clicks a "New Transaction" button or uses the Salesforce action to quickly log the expense.
4.  **Input Details:** User enters the amount ($4.50), selects the transaction date, and chooses the correct category (e.g., "Food & Dining") from a dropdown.
5.  **Categorize:** The system automatically associates the transaction with the user's "Monthly Groceries" budget.
6.  **Save:** The user saves the transaction.
7.  **Update Dashboard:** The PFM dashboard and budget tracker are immediately updated to reflect the new spending.
8.  **End:** The transaction is successfully logged and tracked.

_Note: A more detailed visual diagram (BPMN) can be created and stored in the `/assets` folder and referenced here._
