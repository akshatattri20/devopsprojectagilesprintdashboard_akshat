# 🚀 Agile Sprint Dashboard (DevOps Project)

![Docker](https://img.shields.io/badge/Container-Docker-blue)
![CI/CD](https://img.shields.io/badge/CI/CD-GitHub_Actions-orange)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

##  Project Details

**Student Name:** Akshat Attri
**Registration No:** 23FE10CSE00685
**Course:** CSE3253 DevOps [PE6]
**Semester:** VI (2025–2026)
**Project Type:** DevOps Implementation (CI/CD + Docker)
**Difficulty:** Intermediate

---

## 📌 Project Overview

### 🧩 Problem Statement

Managing agile sprint tasks manually lacks efficiency and visibility. Teams need a lightweight system to track tasks and monitor sprint progress in real time.

### 🎯 Objectives

* Build a simple Agile Sprint Dashboard
* Implement containerization using Docker
* Integrate CI/CD pipeline using GitHub Actions
* Perform automated testing

---

## ✨ Key Features

* 📋 Task creation and management
* 🔄 Task status updates (To Do → In Progress → Done)
* 🗑️ Delete and edit tasks
* 📊 Kanban-style dashboard
* ⚙️ REST API backend
* 🐳 Dockerized application
* 🔁 Automated CI/CD pipeline
* 🧪 Unit testing integration

---

## 🛠️ Technology Stack

### 🔹 Core Technologies

* **Backend:** Python (Flask)
* **Frontend:** HTML, CSS, JavaScript
* **Database:** In-memory (for simplicity)

### 🔹 DevOps Tools

* **Version Control:** Git
* **CI/CD:** GitHub Actions
* **Containerization:** Docker
* **Testing:** unittest

---

## 🚀 Getting Started

### 📦 Prerequisites

* Python 3.10+
* Git
* Docker Desktop

---

### ⚙️ Installation (Local Setup)

1. Clone the repository:

```bash
git clone https://github.com/yourusername/devopsprojectsprintdashboard.git
cd devopsprojectsprintdashboard
```

2. Install dependencies:

```bash
pip install -r requirements.txt
```

3. Run the backend:

```bash
python app/app.py
```

4. Open frontend:

* Open `frontend/index.html` in browser

---

## 🐳 Docker Setup

### Build and Run

```bash
docker-compose up --build
```

### Access Application

* Backend: http://localhost:5000
* Frontend: Open `index.html`

---

## 🔁 CI/CD Pipeline

The project uses **GitHub Actions** for continuous integration.

### Pipeline Stages

1. Checkout code
2. Install dependencies
3. Run unit tests
4. Build Docker image

### 📊 Pipeline Status

![Pipeline](https://img.shields.io/badge/pipeline-passing-brightgreen)

---

## 🧪 Testing

### Unit Tests

Run tests using:

```bash
python -m unittest discover tests
```

### Test Coverage

* API endpoint validation
* Task creation functionality

---

## 📂 Project Structure

```bash
devopsprojectsprintdashboard/
│
├── app/
├── frontend/
├── tests/
├── Dockerfile
├── docker-compose.yml
├── .github/workflows/
└── README.md
```

---

## 🔐 Security

* Input validation implemented
* Safe API handling
* Environment-ready configuration

---

## 🎯 Performance Metrics

| Metric        | Target    | Current |
| ------------- | --------- | ------- |
| Build Time    | < 5 min   | ✔       |
| Test Coverage | Basic     | ✔       |
| Deployment    | Automated | ✔       |

---

## 🎥 Demo

* Demo Video: [Add link here]
* Live Demo: Not deployed

---

## 🧠 Development Workflow

### Git Strategy

* `main` → stable code
* Feature-based commits

### Commit Convention

* `feat:` New feature
* `fix:` Bug fix
* `docs:` Documentation

---

## 📄 License

This project is licensed under the MIT License.
