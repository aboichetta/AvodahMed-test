# Landing Page Tests – Playwright

This repository contains a set of **three automated tests** built with **[Playwright](https://playwright.dev/)** to validate key interactions on a landing page. The three tests will be described in BDD:

1. **Feature:** Topbar Validations
- Scenario: Validate the contents and functionalities of the topbar section
- Given: the user navigates to the AvodahMed landing page
- When: the user views the topbar elements and interacts with the "The Problem" button and the "Up" button
- Then: the topbar section displays all the correct elements, and clicking the "The Problem" button scrolls down to the corresponding section, while the "Up" button scrolls back to the top

2. **Feature:** Our Solution Page Validations
- Scenario: Validate the contents of the Our Solution section
- Given: the user scrolls to the Our Solution section
- When: the user views its elements
- Then: the Our Solution section displays all the expected content and UI components correctly

3. **Feature:** FAQs Page Validations
- Scenario: Validate the contents of the FAQs section
- Given: the user scrolls to the FAQs section
- When: the user views the section and types the "cost" query in the search input
- Then: the FAQs section displays all the expected elements, and the results show information related to the cost

---

## Requirements

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (version **18+** recommended)
- npm (comes bundled with Node.js)

---

## Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/aboichetta/AvodahMed-test.git
   cd AvodahMed-test

## Install

Before running the tests, install the project dependencies with **npm i**. After that, run **npx playwright test** to run the 3 tests at the same time, since the repository is configured to have 4 workers while running locally.