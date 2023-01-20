### Framework explained
* The framework is running on Cypress 12 .2.0.
* The test cases are contained in the file  `cypress/e2e/grammarly.spec.cy.js` 
* The test will first invoke and install the Chrome extension before launching the browser. App executable can be found in the path  `extensions/Grammarly-Grammar-Checker-and-Writing-App.zip` 
* User login is invoked before each test case execution as beforeEach hook. So `login()` is not declared as an independent test case. 
* The negative test case will always fail as Grammarly does not return a valid suggestion. 
* I was unable to attach a real-time HTML report as tests persistently fail when running headless owing to CAPTCHA validation. See note for additional details 

### Prerequisite
 * Verify node and npm installation on local computer by running this command on terminal 
 	
  ```
node -v 
npm -v
```

* If command is not found, please proceed to install node before executing next steps. 

### Setup procedures
* Clone this repository
* Launch project on any IDE of choice (preferable VS code)
* Open terminal (mac) or command line (Windows) on project root directory
* Run the command to install all node dependencies `npm install`
* Create a file in the root folder `PageFreezer_tests/cypress.env.json` Paste the code below and update details.
  ```
	{
	"email" : "-- your grammarly email address --",
	"password" : "-- your grammarly password --"
	}
	```


* Open terminal in project root folder and run the following command to launch cypress GUI `npx cypress open`
* Click on e2e to run the automated tests

#### Notes
Grammarly extension occasionally prompts for CAPTCHA after login. This will have to be manually selected else the test fails. It is typically not good practice to attempt bypassing security checks. By standard, tests should be executed on a staging server where CAPTCHA can be disabled without any security risks.

