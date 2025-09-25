# Use Cases

**Project:** Salesforce Personal Finance Manager (PFM)

### Use Case 1: Track Personal Spending

- **Actors:** End User
- **Goal:** To log a new transaction and have it tracked against a budget.
- **Preconditions:** The user has an active PFM profile and a budget defined for a specific category.
- **Main Success Scenario:**
    1. The user logs a new transaction in the mobile app.
    2. The user enters the transaction amount, date, and category.
    3. The system saves the transaction record.
    4. The system updates the corresponding budget's spending tracker.
    5. The user views the updated budget progress on the dashboard.
- **Postconditions:** The transaction is logged, and the budget's spending is updated.

### Use Case 2: Monitor Savings Goals

- **Actors:** End User
- **Goal:** To monitor progress toward a specific financial savings goal.
- **Preconditions:** The user has created a savings goal record.
- **Main Success Scenario:**
    1. The user navigates to the "Goals" tab.
    2. The system displays a list of all active savings goals.
    3. For each goal, the system shows the target amount, current progress, and remaining time.
    4. The user can see a visual representation of the progress (e.g., a progress bar).
- **Postconditions:** The user is informed of their progress toward their savings goals.

### Use Case 3: Get Financial Advice from AI Chatbot

- **Actors:** End User
- **Goal:** To receive an AI-driven suggestion on how to improve finances.
- **Preconditions:** The PFM app is connected to an external AI service.
- **Main Success Scenario:**
    1. The user clicks the "Open Chatbot" button on the dashboard.
    2. A chatbot modal or window opens.
    3. The user types a question, such as "Where can I reduce spend?"
    4. The system sends the user's query and a summary of their recent spending data to the AI service.
    5. The AI service responds with a suggestion based on the data.
    6. The response is displayed to the user in the chatbot window.
- **Postconditions:** The user has received actionable financial advice.
