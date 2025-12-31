# Origami Take-Home Tests

Automated end-to-end tests for the Origami assignment using Playwright and TypeScript.

## Project Overview

This project contains automated tests for the Origami application's login and logout functionality, covering:
- Successful login with valid credentials
- Error handling for invalid username
- Error handling for invalid password
- Successful logout after login

The test suite is built with Playwright, TypeScript, and follows best practices for maintainability and scalability.

## Prerequisites

Before running the tests, ensure you have the following installed:

- **Node.js** (v18 or higher recommended)
- **npm** (comes with Node.js)
- **Git** (for cloning the repository)

## Project Setup

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd origami-take-home-tests
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Install Playwright browsers**:
   ```bash
   npx playwright install
   ```

4. **Configure environment variables** - The `.env` file is included in the repository with example values. Update it with your actual credentials:
   ```env
   TARGET_URL=https://your-application-url.com
   USERNAME=your-username
   PASSWORD=your-password
   ```

## Running the Tests

### Run all tests
```bash
npm test
```

### Run tests in UI mode (interactive)
```bash
npm run test:ui
```

### Run tests in headed mode (see the browser)
```bash
npm run test:headed
```

### Run specific test file
```bash
npx playwright test src/lib/all.test.ts
```

### Run specific test by name
```bash
# Run only the "Successful login" test
npx playwright test --grep "Successful login"

# Run only tests with "invalid username" in the name
`npx playwright test --grep "invalid username"`

# Run only tests with "invalid password" in the name
npx playwright test --grep "invalid password"

# Run only the "Successful logout" test
npx playwright test --grep "Successful logout"
```

### Run tests in debug mode
```bash
npx playwright test --debug
```

### Run specific test in debug mode
```bash
npx playwright test --debug --grep "Successful login"
```

## Project Structure

```
origami-take-home-tests/
├── src/
│   └── lib/
│       ├── all.test.ts                    # Main test file
│       ├── constants/                     # Test data constants
│       │   └── testData.ts                # Test messages and credentials
│       ├── pages/                         # Page Object Model
│       │   └── LoginPage.ts               # Login page object
│       ├── origamiLoginSuccessful/        # Test scenario modules
│       │   └── index.ts
│       ├── origamiLoginWrongUsername/
│       │   └── index.ts
│       ├── origamiLoginWrongPassword/
│       │   └── index.ts
│       └── origamiLogoutSuccessful/
│           └── index.ts
├── playwright.config.ts                   # Playwright configuration
├── tsconfig.json                          # TypeScript configuration
├── package.json                           # Project dependencies
└── README.md                              
```

## Dependencies

### Production Dependencies
- `@playwright/test` - Playwright test framework
- `playwright` - Playwright browser automation

### Development Dependencies
- `typescript` - TypeScript compiler
- `@types/node` - Node.js type definitions
- `dotenv` - Environment variable management
- `@typescript-eslint/eslint-plugin` - ESLint plugin for TypeScript
- `@typescript-eslint/parser` - ESLint parser for TypeScript

## Test Reports

After running tests, you can view the HTML report:
```bash
npx playwright show-report
```

Test results and traces are stored in:
- `test-results/` - Test execution results and traces
- `playwright-report/` - HTML test reports

## Configuration

The test configuration is defined in `playwright.config.ts`. Key settings include:
- Test directory: `./src/lib`
- Test timeout: 30 seconds
- Trace collection: Enabled for all tests
- Screenshots: On failure only
- Videos: Retained on failure

## Troubleshooting

### Tests fail with "TARGET_URL environment variable is not set"
- Ensure you have created a `.env` file in the project root
- Verify the `.env` file contains `TARGET_URL=your-url`

### Browser installation issues
- Run `npx playwright install --with-deps` to install browsers with system dependencies

### TypeScript errors
- Run `npm install` to ensure all dependencies are installed
- Verify `tsconfig.json` is properly configured

