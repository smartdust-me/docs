---
id: cypress-quickstart
title: Cypress
---

## 🧪 Cypress Quickstart

Cypress is a web end-to-end testing framework used to automate websites and web applications directly in a browser.

Cypress documentation:  
`https://docs.cypress.io/`

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**
- **npm**
- **Google Chrome**
- Internet access

---

## Step 1: Create Cypress Project

Create a new project directory:

```bash
mkdir -p cypress
cd cypress
```

Initialize npm:

```bash
npm init -y
```

Install Cypress:

```bash
npm install --save-dev cypress
```

---

## Step 2: Configure Cypress

Create:

```text
cypress.config.js
```

Add:

```js
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://example.com',
    supportFile: false
  }
});
```

The `supportFile: false` option disables the default Cypress support file because it is not needed for this simple test.

---

## Step 3: Write Your Test

Create the test directory:

```bash
mkdir -p cypress/e2e
```

Create:

```text
cypress/e2e/example.cy.js
```

Add:

```js
describe('Example Domain', () => {
  it('should load example.com', () => {
    cy.visit('/');

    cy.title().should('eq', 'Example Domain');

    cy.get('h1')
      .should('be.visible')
      .and('contain.text', 'Example Domain');

    cy.wait(5000);
  });
});
```

This test:

- Opens `https://example.com`
- Verifies the page title
- Verifies that the main heading is visible
- Keeps the page open briefly for demonstration

---

## ▶️ Step 4: Run Cypress Test

Run Cypress using Chrome:

```bash
npx cypress run --browser chrome
```

Expected output:

```text
Running:  example.cy.js

Example Domain
  ✓ should load example.com

1 passing
```

The final summary should show:

```text
Tests:        1
Passing:      1
Failing:      0

✔ All specs passed!
```

![Cypress test](/img/cypress_test.png)


