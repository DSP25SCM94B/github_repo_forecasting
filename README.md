# 📦 GitHub Repo: `github_repo_forecasting`

A full-stack application using **Flask (Python)** as a backend API and **React** as a frontend client. Both services are containerized with Docker and deployed on **Google Cloud Run** using a CI/CD pipeline powered by **Google Cloud Build**.

---

## 🚀 Live Deployment

- **Frontend**: [https://react-frontend-xyz.a.run.app](#)
- **Backend API**: [https://flask-backend-xyz.a.run.app](#)


## 🗂️ Project Structure

github_repo_forecasting/ ├── flask_backend/ # Flask backend service (Python) │ ├── app.py # Flask entrypoint │ ├── Dockerfile # Flask Docker build │ └── requirements.txt ├── react_frontend/ # React frontend (JS) │ ├── src/ # React components │ ├── Dockerfile # React Docker build │ └── nginx.conf # Custom NGINX config for SPA routing ├── cloudbuild.yaml # CI/CD build pipeline (Cloud Build) └── README.md # Project 

---

## 🧪 Tech Stack

- 🐍 **Flask 3.1**
- ⚛️ **React 18+**
- 🐳 **Docker**
- ☁️ **Google Cloud Platform**
  - Cloud Run
  - Artifact/Container Registry
  - Cloud Build (CI/CD)
  - IAM & Logging

---

## 🔧 Local Development

### 🔹 Flask Backend

```bash
cd flask_backend
pip install -r requirements.txt
python app.py
```
### 🔹 React Frontend
```bash
cd react_frontend
npm install
npm start
```
### 🐳 Docker Build (Manual)
```bash
# Flask
docker build -t flask-backend ./flask_backend
docker tag flask-backend gcr.io/YOUR_PROJECT_ID/flask-backend
docker push gcr.io/YOUR_PROJECT_ID/flask-backend

# React
docker build -t react-frontend ./react_frontend
docker tag react-frontend gcr.io/YOUR_PROJECT_ID/react-frontend
docker push gcr.io/YOUR_PROJECT_ID/react-frontend
```
### 🚀 Cloud Build CI/CD (Auto-Deployment)
Any push to main triggers cloudbuild.yaml

 Cloud Build:

- Builds Docker images

- Pushes to Container Registry

- Deploys to Cloud Run

### 👥 IAM & Permissions Notes
Ensure the build service account has:

- roles/logging.logWriter

- roles/artifactregistry.writer

- roles/iam.serviceAccountUser

- roles/run.admin
