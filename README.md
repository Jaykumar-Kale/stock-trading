# StockTrading

This repository contains a learning project based on a Zerodha-style stock trading clone. It has three separate apps:

- `frontend`: public landing pages, signup, and login
- `dashboard`: logged-in trading dashboard UI
- `backend`: Express API with MongoDB

## Clean Folder Structure

```text
StockTrading/
	backend/       Express + MongoDB API
	dashboard/     React dashboard app
	frontend/      React landing/auth app
	DEPLOYMENT.md  Vercel + Render deployment guide
	README.md      local setup and project overview
```

Generated folders such as `node_modules` and `build` are not meant to be pushed to GitHub.

## Tech Stack

- React
- Express
- MongoDB Atlas
- Mongoose
- JWT + cookies for auth
- Axios
- Material UI
- Chart.js

## Local Setup

### 1. Backend env file

Use `backend/.env` with the values below.

Required local values:

```env
MONGO_URL=<your-mongodb-uri>
TOKEN_KEY=<your-local-secret>
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
DASHBOARD_URL=http://localhost:3001
```

### 2. Frontend env file

Use `frontend/.env` with:

```env
REACT_APP_API_BASE_URL=http://localhost:3002
REACT_APP_DASHBOARD_URL=http://localhost:3001
```

### 3. Dashboard env file

Use `dashboard/.env` with:

```env
REACT_APP_API_BASE_URL=http://localhost:3002
```

## Run Locally

Open three terminals.

### Terminal 1

```bash
cd backend
npm install
npm start
```

### Terminal 2

```bash
cd frontend
npm install
npm start
```

### Terminal 3

```bash
cd dashboard
npm install
npm start
```

Expected local URLs:

- frontend: `http://localhost:3000`
- dashboard: `http://localhost:3001`
- backend: `http://localhost:3002`

## Before Pushing to GitHub

- Do not commit `backend/.env`
- Do not commit `node_modules`
- Do not commit `build`
- Rotate secrets if they were ever exposed
- Confirm no old Amplify or AWS deployment config remains

## Deployment

Use [DEPLOYMENT.md](DEPLOYMENT.md) for the Vercel + Render deployment flow.


