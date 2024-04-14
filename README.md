# Test Automation with Nightwatch JS & Jest

[![CircleCI](https://dl.circleci.com/status-badge/img/circleci/RnPQGDqwYhBKX5CeYSWFw9/Vtx5PmGgLCZ6EQLNN5XS15/tree/main.svg?style=svg&circle-token=CCIPRJ_VKhu23zZpG9z2RsJhwrb5S_95c8dc6f56c75a519e377f606f8c3f818fcc5ec1)](https://dl.circleci.com/status-badge/redirect/circleci/RnPQGDqwYhBKX5CeYSWFw9/Vtx5PmGgLCZ6EQLNN5XS15/tree/main)

## Project Overview

This project is dedicated to test some of [online store](http://automationpractice.multiformis.com/index.php)'s functionalities through automated testing. Utilizing **Nightwatch.js**, I performed end-to-end UI tests that simulate real user interactions. Also, I rigorously test the `mock-user-auth` [npm package](https://www.npmjs.com/package/mock-user-auth) with **Jest** and **Supertest** [npm package](https://www.npmjs.com/package/supertest) to validate all possible flows, focusing on the robustness of API endpoints by testing with both valid and invalid body requests and tokens. Integration with **CircleCI** ensures that with each commit to the main branch, our suite of UI and API tests are executed.

## Getting Started

To set up this project for local development:

- **Clone the repository**: Get a local copy of the codebase.
- **Install Node.js and npm**: Ensure you have Node.js and npm installed as they are crucial for managing the project's dependencies.
- **Install dependencies**: Run `npm install` in the project directory to install all dependencies listed in the `package.json` file.
- **Jest and Supertest**: These tools are included in the dependencies and are essential for running the unit and API route tests.
- **Run UI tests**: Execute `npm run uitest` to run UI test suites in parallel.
- **Run API tests**: Use `npm run apitest` to run API test suites sequentially.

## Used Tools & Frameworks
- Nightwatch JS.
- Jest.
- Supertest npm package.
- jest-html-reporter npm package.
- CircleCI.

## Tests & Results

### UI Tests

The UI testing framework is structured using the **Page Object Model (POM)**, which enhances test maintenance and reduces code duplication. Test suites are organized into separate files for clarity and ease of navigation.

- **Test Suites Location**: The test suites for the UI tests are organized in the `ui-tests/tests` directory of the repository.
- **Test Report**: After running the tests, a detailed HTML report is generated to provide insights into the test results. This report is accessible in the `tests_output/nightwatch-html-report` directory.
- **Test Cases Documentation**: A PDF file with all the performed test cases can be found [here]().
- **Bug Report**: A detailed bug report for the found issues can be found here [here]().

### API Tests

For API testing, utility methods are abstracted into a separate folder to streamline the testing process. Each test suite is dedicated to a single functionality, ensuring targeted and efficient testing.

- **Test Suites Location**: The test suites for the API tests can be found in the `api-tests/tests` directory of the repository.
- **Test Report**: Jest is configured with an HTML reporter to visualize the test results. The generated report provides a comprehensive overview of the test outcomes and is located in the `tests_output/api-test-html-report` directory.
- **Bug Report**: A detailed bug report for the found issues can be found here [here]().

## CircleCI Integration

The project is integrated with **CircleCI** to ensure that the test results are consistent with local runs. This deterministic result matching provides confidence in the reliability of the continuous integration process.

- **Consistent Results**: The CI pipeline is configured to match local test results deterministically.
- **Build Status Badge**: A CircleCI status badge is included in the README to reflect the current build status.
- **Test Execution Flow**:
  - **Install Dependencies**: After setting up the environment and installing dependencies, the browser driver is installed to facilitate UI testing.
  - **UI Tests**: The UI tests are executed in parallel first.
  - **Localhost Initialization**: Before running the API tests, a localhost node is initialized.
  - **API Tests**: Regardless of the UI tests' outcomes, the API tests are run sequentially.
  - **Cleanup**: After the API tests conclude, the localhost node is terminated.

This integration ensures that every commit to the main branch triggers the automated testing sequence, maintaining the integrity of the codebase.




