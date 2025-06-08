export const getTemplate = () => `INSTRUCTIONS STATUS: PENDING

⸻ BEFORE STARTING THE TASK ---

If the "INSTRUCTIONS STATUS" at the top of this page is "COMPLETE", then please let the user know that it looks like these instructions and related tasks have been completed and then wait for them to respond before proceeding further.

If the "INSTRUCTIONS STATUS" at the top of this page is "FAILURE", then review this document to see if there are details about the previous failures and if so, come up with a plan to resolve those failures and finish out the instructions. If no previous failures are mentioned but the "INSTRUCTIONS STATUS" is "FAILURE", then prompt the user and wait for them to respond before proceeding further. 

If the "INSTRUCTIONS STATUS" at the top of this page is "PENDING", then please proceed with the instructions and tasks.

⸻ BEGIN INSTRUCTIONS ---

// Write task-specific instructions here

⸻ COMPLETION INSTRUCTIONS ---

Once you are done, update the "INSTRUCTIONS STATUS" at the top of this page and use one of the below statuses based on the results of your task:

- "FAILURE" - if you ran into significant issues preventing you from completing this task. In addition to updating the "INSTRUCTIONS STATUS", also add a "FAILURES" section to this document the exact issues you ran into so that the User or another Ai Agent can read them to assist with debugging.

- "COMPLETE" - if you successfully completed all the required tasks, steps and instructions defined in this document. In addition to updating the status, remove the "FAILURES" section of this document (only if it is present and you feel they have been resolved) and also remove the "PENDING CHANGES" section (only if it is present and you feel they have been implemented)

- "PARTIAL" - If you were able to get most of the tasks done, but you either determined additional work is required or recommended or if you needed to gather more information from the User to properly complete the instructions. In this case, edit this document with a "PENDING CHANGES" section and list what is pending or recommendations you have to improve things.

Finally, regardless of the status, at the end of this file, update the section titled "OUTCOME SUMMARY" to meet the below requirements:

This section should summarize the actions you performed during the task. Include the following:

- A list of files that were created or modified
  (e.g., updated React components, API routes, utility modules, test files, stylesheets)

- A summary of the key implementation areas that were affected
  (e.g., "Refactored all team management endpoints", "Rebuilt the user table UI", "Added new hooks for SuperAdmin features")

- Any inconsistencies, bugs, or unclear requirements you encountered and how you resolved them
  (e.g., mismatched type expectations, unexpected API formats, missing fields, component prop issues)

- Any task items that were intentionally skipped, deferred, or incomplete and why
  (e.g., "Sources page not updated because backend API not implemented yet", "Tests not added because behavior unchanged")

This section serves as a concise but clear audit trail of what was done and why. Do not include raw terminal output. Aim to make it understandable to the User or another Ai Agent who may review this document later.

⸻ OUTCOME SUMMARY ---

`;
