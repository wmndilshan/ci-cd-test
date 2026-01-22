# CI/CD Simulation Project 🚀

A beginner-friendly project demonstrating how GitHub Actions CI/CD works with a Node.js Express REST API.

## 📋 Project Overview

This project simulates real-world CI/CD workflows by showing how automated testing and deployment work in GitHub Actions. You'll see what happens when tests pass, fail, and pass again across multiple commits.

## 🏗️ Project Structure

```
cicd-simulation/
├── .github/
│   └── workflows/
│       └── ci.yml              # GitHub Actions workflow
├── src/
│   ├── app.js                  # Express API server
│   └── utils/
│       └── calculator.js       # Business logic
├── tests/
│   ├── calculator.test.js      # Unit tests
│   └── app.test.js            # API integration tests
├── package.json
├── jest.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- Git installed
- GitHub account

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd cicd-simulation
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the application**
   ```bash
   npm start
   ```
   The API will be available at `http://localhost:3000`

4. **Run tests**
   ```bash
   npm test
   ```

## 🔌 API Endpoints

### Health Check
```bash
GET /
```

### Calculator Operations
```bash
POST /api/sum
Body: { "a": 5, "b": 3 }
Response: { "operation": "sum", "a": 5, "b": 3, "result": 8 }

POST /api/subtract
Body: { "a": 10, "b": 4 }
Response: { "operation": "subtract", "a": 10, "b": 4, "result": 6 }

POST /api/multiply
Body: { "a": 3, "b": 7 }
Response: { "operation": "multiply", "a": 3, "b": 7, "result": 21 }
```

## 🎯 CI/CD Simulation: Step-by-Step Guide

This project demonstrates CI/CD through **three commits** that show different pipeline behaviors.

### Commit 1: ✅ Initial Setup (Tests Pass)

**What to do:**
```bash
# Initialize Git repository
git init

# Add all files
git add .

# Commit with passing tests
git commit -m "feat: initial setup with passing tests"

# Create GitHub repository and push
git remote add origin <your-repo-url>
git branch -M main
git push -u origin main
```

**What happens in GitHub Actions:**
1. ✅ Workflow triggers on push to `main`
2. ✅ Checks out code
3. ✅ Sets up Node.js
4. ✅ Installs dependencies
5. ✅ Runs tests → **All tests pass** ✅
6. ✅ Uploads coverage report
7. ✅ **Deploy job runs** → Deployment succeeds! 🚀

**Expected Result:** Green checkmark ✅ - Pipeline succeeds, deployment happens

---

### Commit 2: ❌ Breaking Change (Tests Fail)

**What to do:**

Intentionally break the `sum` function to simulate a bug:

```bash
# Edit src/utils/calculator.js
# Change the sum function to:
function sum(a, b) {
  return a - b;  // BUG: Subtracting instead of adding!
}
```

```bash
# Verify tests fail locally
npm test  # Tests should fail

# Commit the breaking change
git add src/utils/calculator.js
git commit -m "bug: broke sum function (demonstrates CI failure)"
git push
```

**What happens in GitHub Actions:**
1. ✅ Workflow triggers on push to `main`
2. ✅ Checks out code
3. ✅ Sets up Node.js
4. ✅ Installs dependencies
5. ❌ Runs tests → **Tests fail!** ❌
6. ⏸️ **Deploy job is skipped** → No deployment!

**Expected Result:** Red X ❌ - Pipeline fails, deployment blocked

**Key Learning:** When tests fail, the `deploy` job doesn't run because it has `needs: test`. This prevents broken code from reaching production!

---

### Commit 3: ✅ Fix Applied (Tests Pass Again)

**What to do:**

Fix the bug to restore passing tests:

```bash
# Edit src/utils/calculator.js
# Restore the correct sum function:
function sum(a, b) {
  return a + b;  // FIXED: Back to addition
}
```

```bash
# Verify tests pass locally
npm test  # Tests should pass

# Commit the fix
git add src/utils/calculator.js
git commit -m "fix: restored sum function (CI passes again)"
git push
```

**What happens in GitHub Actions:**
1. ✅ Workflow triggers on push to `main`
2. ✅ Checks out code
3. ✅ Sets up Node.js
4. ✅ Installs dependencies
5. ✅ Runs tests → **All tests pass** ✅
6. ✅ Uploads coverage report
7. ✅ **Deploy job runs** → Deployment succeeds! 🚀

**Expected Result:** Green checkmark ✅ - Pipeline succeeds, deployment happens

---

## 📊 Understanding the GitHub Actions Workflow

### Workflow File: `.github/workflows/ci.yml`

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ main ]  # Triggers on push to main branch
  pull_request:
    branches: [ main ]  # Also triggers on pull requests

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - Checkout code
      - Setup Node.js 18
      - Install dependencies (npm ci)
      - Run tests (npm test)
      - Upload coverage report
  
  deploy:
    runs-on: ubuntu-latest
    needs: test  # ⚠️ Only runs if test job succeeds
    steps:
      - Simulated deployment
```

### Key Concepts

1. **Triggers (`on`)**: The workflow runs automatically when code is pushed or PR is created
2. **Jobs**: Independent units of work (test, deploy)
3. **Job Dependencies (`needs`)**: Deploy only runs if test succeeds
4. **Steps**: Sequential actions within a job
5. **Blocking**: Failed tests prevent deployment

## 🎓 Learning Outcomes

After completing this simulation, you'll understand:

✅ How CI/CD pipelines automate testing and deployment  
✅ How failing tests block deployments (safety mechanism)  
✅ How to read GitHub Actions workflow files  
✅ How to interpret pipeline status (green ✅ vs red ❌)  
✅ The importance of automated testing in software development  
✅ Real-world best practices for Node.js projects

## 🧪 Running Tests Locally

```bash
# Run all tests
npm test

# Run tests in watch mode (auto-rerun on changes)
npm run test:watch

# Run tests with coverage
npm test -- --coverage
```

## 📦 Technologies Used

- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **Jest** - Testing framework
- **Supertest** - HTTP testing library
- **GitHub Actions** - CI/CD platform

## 🤝 Contributing

This is an educational project. Feel free to fork and experiment!

## 📝 License

ISC

---

**Happy Learning! 🎉** Feel free to explore, break things, and learn how CI/CD works in practice!
