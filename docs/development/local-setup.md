# Local Development Setup

> This document explains how to set up the complete R-zension development environment from scratch. Follow this guide whenever setting up a new machine or onboarding a new developer.

---

# Document Information

| Field | Value |
|--------|-------|
| Document | Local Development Setup |
| Product | R-zension |
| Version | 1.0 |
| Status | Active |
| Owner | Engineering Team |

---

# Purpose

This guide ensures every developer has an identical development environment.

Objectives

- Consistent setup
- Easy onboarding
- Reduced environment issues
- Faster development
- Reproducible builds

---

# Minimum System Requirements

## Operating System

Supported

- Windows 11 (Primary)
- Windows 10
- Ubuntu 22.04+
- macOS (Apple Silicon & Intel)

---

## Hardware

Minimum

| Component | Requirement |
|-----------|-------------|
| CPU | 4 Cores |
| RAM | 8 GB |
| Storage | 25 GB Free |
| Internet | Required |

Recommended

| Component | Requirement |
|-----------|-------------|
| CPU | 8+ Cores |
| RAM | 16 GB |
| Storage | SSD |
| Internet | Stable Broadband |

---

# Required Software

Install the latest stable versions of

| Software | Purpose |
|----------|----------|
| Git | Version Control |
| Node.js LTS | Frontend & Backend |
| Python 3.12+ | Oracle AI |
| PostgreSQL | Database |
| Docker Desktop | Containers |
| VS Code | IDE |

---

# Recommended VS Code Extensions

Install

- ESLint
- Prettier
- Docker
- GitLens
- PostgreSQL
- Python
- Pylance
- Thunder Client
- Error Lens
- Tailwind CSS IntelliSense

---

# Repository Structure

```text
R-zension/

client/
server/
ai/
docker/
docs/
.github/

docker-compose.yml
README.md
.gitignore
```

---

# Clone Repository

```bash
git clone https://github.com/Konarkpreserve/R-zension.git
```

Move into the project

```bash
cd R-zension
```

---

# Verify Installations

## Git

```bash
git --version
```

---

## Node.js

```bash
node -v
```

---

## npm

```bash
npm -v
```

---

## Python

```bash
python --version
```

---

## Docker

```bash
docker --version
```

---

## Docker Compose

```bash
docker compose version
```

---

## PostgreSQL

```bash
psql --version
```

---

# Install Dependencies

## Frontend

```bash
cd client
npm install
```

---

## Backend

```bash
cd ../server
npm install
```

---

## AI Service

Create virtual environment

```bash
cd ../ai
python -m venv .venv
```

Activate

### Windows CMD

```cmd
.venv\Scripts\activate
```

### Windows PowerShell

```powershell
.venv\Scripts\Activate.ps1
```

### Linux/macOS

```bash
source .venv/bin/activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

---

# Environment Variables

Create

```text
client/.env

server/.env

ai/.env
```

Configuration is documented in

```
docs/development/02-environment-variables.md
```

---

# Start Docker

```bash
docker compose up -d
```

Verify containers

```bash
docker ps
```

---

# Start Development Servers

## Backend

```bash
cd server
npm run dev
```

---

## Frontend

```bash
cd client
npm run dev
```

---

## Oracle AI

```bash
cd ai
uvicorn app.main:app --reload
```

---

# Expected Services

| Service | Port |
|----------|------|
| React | 5173 |
| Express | 3000 |
| FastAPI | 8000 |
| PostgreSQL | 5432 |
| Redis | 6379 |

---

# Verify Application

Confirm

- Frontend loads
- Backend responds
- AI service starts
- Database accepts connections
- Docker containers are healthy

---

# Project Workflow

```text
Pull Latest Code

↓

Install Dependencies

↓

Start Docker

↓

Run Backend

↓

Run AI Service

↓

Run Frontend

↓

Develop

↓

Commit

↓

Push

↓

Pull Request
```

---

# Updating Dependencies

Frontend

```bash
npm update
```

Backend

```bash
npm update
```

Python

```bash
pip install -U -r requirements.txt
```

---

# Updating Local Repository

```bash
git checkout main

git pull origin main
```

---

# Before Starting Work

Always

- Pull latest changes
- Install new dependencies
- Verify Docker
- Check environment variables
- Ensure services start successfully

---

# Common Problems

| Problem | Solution |
|----------|----------|
| Port already in use | Stop conflicting process |
| Docker not running | Start Docker Desktop |
| PostgreSQL connection failed | Verify container/service |
| npm install failed | Delete node_modules and reinstall |
| Python package missing | Activate virtual environment and reinstall |

Detailed troubleshooting is available in

```
docs/development/13-troubleshooting.md
```

---

# Development Best Practices

- Keep dependencies updated
- Never commit `.env` files
- Use feature branches
- Run tests before pushing
- Keep Docker containers healthy
- Follow coding standards

---

# References

- environment-variables.md
- docker-setup.md
- testing-guide.md
- troubleshooting.md
- git-workflow.md
- coding-standards.md
```