# Test Automation with Nightwatch JS & Jest

[![CircleCI](https://dl.circleci.com/status-badge/img/circleci/RnPQGDqwYhBKX5CeYSWFw9/Vtx5PmGgLCZ6EQLNN5XS15/tree/main.svg?style=svg&circle-token=CCIPRJ_VKhu23zZpG9z2RsJhwrb5S_95c8dc6f56c75a519e377f606f8c3f818fcc5ec1)](https://dl.circleci.com/status-badge/redirect/circleci/RnPQGDqwYhBKX5CeYSWFw9/Vtx5PmGgLCZ6EQLNN5XS15/tree/main)

## Project Overview

This project is dedicated to testing some of [online store](http://automationpractice.multiformis.com/index.php)'s functionalities through automated testing. Utilizing **Nightwatch.js**, I perform end-to-end UI tests that simulate real user interactions. Also, I rigorously test the `mock-user-auth` [npm package](https://www.npmjs.com/package/mock-user-auth) with **Jest** and **Supertest** [npm package](https://www.npmjs.com/package/supertest) to validate all possible flows, focusing on the robustness of API endpoints by testing with both valid and invalid body requests and tokens. Integration with **CircleCI** ensures that with each commit to the main branch, our suite of UI and API tests are executed.

## Getting Started

To set up this project for local development:

- **Clone the repository**: Get a local copy of the codebase.
- **Install Node.js and npm**: Ensure you have Node.js and npm installed as they are crucial for managing the project's dependencies.
- **Install dependencies**: Run `npm install` in the project directory to install all dependencies listed in the `package.json` file.
- **Jest and Supertest**: These tools are included in the dependencies and are essential for running the unit and API route tests.
- **Run UI tests**: Execute `npm run uitest` to run UI test suites in parallel.
  
  ![ublgIPFZfj](https://github.com/ZiadAlMoqamar/Test-Automation-with-JS/assets/49427996/0d4fee06-798f-4533-9666-b1ca92f39517)
- **Start the API node locally**: Run `npm run dev` command in your terminal.
- **Run API tests**: Use `npm run apitest` to run API test suites sequentially.
  
  ![yF96vgmOOJ](https://github.com/ZiadAlMoqamar/Test-Automation-with-JS/assets/49427996/2ab4a919-9208-41e8-87ff-7b1d49b67db3)

## Used Tools & Frameworks
- Nightwatch JS.
- Jest.
- Supertest npm package.
- jest-html-reporter npm package.
- wait-on npm package.
- CircleCI.

## Tests & Results

### UI Tests

The UI testing framework is structured using the **Page Object Model (POM)**, which enhances test maintenance and reduces code duplication. Test suites are organized into separate files for clarity and ease of navigation.

- **Test Suites Location**: The test suites for the UI tests are organized in the `ui-tests/tests` directory of the repository.
- **Test Report**: After running the tests, a detailed HTML report is generated to provide insights into the test results. This report is accessible in the `tests_output/nightwatch-html-report` [directory](https://github.com/ZiadAlMoqamar/Test-Automation-with-JS/tree/main/tests_output/nightwatch-html-report).
- **Test Cases Documentation**: A PDF file with all the performed test cases can be found [here](https://github.com/ZiadAlMoqamar/Test-Automation-with-JS/blob/main/documents/ui-tests/UI%20test%20cases%20documentation.pdf).
- **Bug Report**: A detailed bug report for the discovered issues can be found here [here](https://github.com/ZiadAlMoqamar/Test-Automation-with-JS/blob/main/documents/ui-tests/UI%20bugs%20report.pdf).

### API Tests

For API testing, utility methods are abstracted into a separate folder to streamline the testing process. Each test suite is dedicated to a single functionality, ensuring targeted and efficient testing.

- **Test Suites Location**: The test suites for the API tests can be found in the `api-tests/tests` directory of the repository.
- **Test Report**: Jest is configured with an HTML reporter to visualize the test results. The generated report provides a comprehensive overview of the test outcomes and is located in the `tests_output/api-test-html-report` [directory](https://github.com/ZiadAlMoqamar/Test-Automation-with-JS/tree/main/tests_output/api-test-html-report).
- **Bug Report**: A detailed bug report for the discovered issues can be found here [here](https://github.com/ZiadAlMoqamar/Test-Automation-with-JS/blob/main/documents/api-tests/API%20bugs%20report.pdf).

## CircleCI Integration

The project is integrated with **CircleCI** to ensure that the test results are consistent with local runs. This deterministic result matching provides confidence in the reliability of the continuous integration process.

- **Consistent Results**: The CI pipeline is configured to match local test results deterministically.
- **Build Status Badge**: A CircleCI status badge is included in the README to reflect the current build status.
- **Test Execution Flow**:
  - **Install Dependencies**: After setting up the environment and installing dependencies, the browser driver is installed to facilitate UI testing.
  - **UI Tests**: The UI test suites are executed in parallel first.
  - **Localhost Initialization**: Before running the API tests, a localhost node is initialized.
  - **API Tests**: Regardless of the UI tests' outcomes, the API tests are run sequentially.
  - **Cleanup**: After the API tests conclude, the localhost node is terminated.

This integration ensures that every commit to the main branch triggers the automated testing sequence, maintaining the integrity of the codebase.

![JYTJBpc0fC](https://github.com/ZiadAlMoqamar/Test-Automation-with-JS/assets/49427996/4c9a0ebf-8b33-4426-89a7-d680786d564e)




