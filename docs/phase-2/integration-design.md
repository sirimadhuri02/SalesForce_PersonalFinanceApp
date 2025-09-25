# Integration Design

## AI Chatbot Integration
* **Endpoint:** External AI service (e.g., OpenAI, a custom service).
* **Authentication:** Named Credential.
    * **Why:** Using a Named Credential avoids hardcoding API keys in Apex, provides a secure way to store credentials, and bypasses remote site settings.
    * **Method:** Will use the `callout:PFM_AI` endpoint in Apex to make authenticated callouts.
    * **Details:** The `PFM_AI` Named Credential will store the API key and endpoint URL.
* **Apex Controller:** `AiChatController.cls` will handle the HTTP request/response.
* **LWC Component:** `pfmChatbot` will handle user input and display the response.

## CSV Import Integration (Future Consideration)
* **Method:** A Lightning Component or Flow will allow users to upload a CSV file.
* **Apex:** An Apex class will parse the CSV data and insert new `Transaction__c` records.