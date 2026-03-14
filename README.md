# Stock Trading Platform (Zerodha-Style Clone)

Production-ready MERN-style project split into three deployable apps:

- `frontend`: marketing pages + signup/login
- `dashboard`: trading UI (holdings, positions, order actions)
- `backend`: Express API + MongoDB Atlas

This repository is designed for portfolio/interview demonstration with clean deployment architecture and real cloud hosting.

## Live Applications

- Frontend: https://stock-trading-srxa.vercel.app/
- Dashboard: https://stock-trading-gamma.vercel.app/
- Backend API: https://stock-trading-backend-k34l.onrender.com

## Table of Contents

1. Overview
2. Architecture
3. Features
4. Tech Stack
5. Repository Structure
6. API Reference
7. Local Setup (From Scratch)
8. Seed Demo Data
9. Deployment Guide (Render + Vercel)
10. Verification Checklist
11. Security Best Practices
12. Troubleshooting
13. Future Improvements

## Overview

The project simulates a stock trading workflow:

- Users sign up and log in from the public site.
- Auth is handled with JWT tokens stored in HTTP-only cookies.
- Authenticated users access a dashboard for holdings, positions, and order placement.
- Data is persisted in MongoDB Atlas and served through a Node/Express backend.

## Architecture

```text
Browser (Frontend)        Browser (Dashboard)
				|                         |
				+--------- HTTPS ---------+
											|
											v
						Render Node.js Backend
											|
											v
								 MongoDB Atlas
```

Cross-origin access is controlled via `FRONTEND_URL` and `DASHBOARD_URL` on the backend.

## Features

- User signup/login flow with cookie-based sessions
- JWT token issue + verification middleware route
- Read APIs for holdings, positions, and orders
- Create API for order placement (`/newOrder`)
- Seed script to preload holdings and positions
- CORS whitelist for production domains
- Deployed independently (frontend/dashboard/backend)

## Tech Stack

- Backend: Node.js, Express, Mongoose, JWT, bcryptjs, cookie-parser, CORS
- Frontend: React, React Router, Axios
- Dashboard: React, MUI, Chart.js, Axios
- Database: MongoDB Atlas
- Hosting: Render (API), Vercel (frontend + dashboard)

## Repository Structure

```text
stock-trading/
	backend/
		controllers/
		Middlewares/
		models/
		Routes/
		schemas/
		utils/
		index.js
		seedData.js
	frontend/
		src/
		public/
	dashboard/
		src/
		public/
	README.md
```

## API Reference

Base URL:

`https://stock-trading-backend-k34l.onrender.com`

### Health/Data Endpoints

- `GET /allHoldings` -> returns holdings list
- `GET /allPositions` -> returns positions list
- `GET /allOrders` -> returns orders list

### Trading Endpoint

- `POST /newOrder`

Sample request body:

```json
{
	"name": "TCS",
	"qty": 1,
	"price": 3194.8,
	"mode": "BUY"
}
```

### Auth Endpoints

- `POST /signup`
- `POST /login`
- `POST /` -> verifies cookie token and returns auth status

## Local Setup (From Scratch)

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm 9+
- MongoDB Atlas database and user

### 1. Clone repository

```bash
git clone https://github.com/Jaykumar-Kale/stock-trading.git
cd stock-trading
```

### 2. Install dependencies

```bash
cd backend && npm install
cd ../frontend && npm install
cd ../dashboard && npm install
```

### 3. Configure environment files

Create these files locally.

`backend/.env`

```env
MONGO_URL=<your_mongodb_connection_string>
TOKEN_KEY=<your_local_secret>
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
DASHBOARD_URL=http://localhost:3001
```

`frontend/.env`

```env
REACT_APP_API_BASE_URL=http://localhost:3002
REACT_APP_DASHBOARD_URL=http://localhost:3001
```

`dashboard/.env`

```env
REACT_APP_API_BASE_URL=http://localhost:3002
```

### 4. Start all apps (three terminals)

Terminal 1:

```bash
cd backend
npm start
```

Terminal 2:

```bash
cd frontend
npm start
```

Terminal 3:

```bash
cd dashboard
npm start
```

Expected local URLs:

- Frontend: `http://localhost:3000`
- Dashboard: `http://localhost:3001`
- Backend: `http://localhost:3002`

## Seed Demo Data

To preload demo holdings and positions into MongoDB Atlas:

```bash
cd backend
npm run seed
```

This refreshes:

- `holdings`
- `positions`

## Deployment Guide (Render + Vercel)

### 1. Deploy Backend to Render

- Service type: Web Service
- Root directory: `backend`
- Build command: `npm install`
- Start command: `npm start`

Render environment variables:

```env
MONGO_URL=<atlas_connection_string>
TOKEN_KEY=<strong_production_secret>
NODE_ENV=production
FRONTEND_URL=https://stock-trading-srxa.vercel.app
DASHBOARD_URL=https://stock-trading-gamma.vercel.app
```

### 2. Deploy Dashboard to Vercel

- Root directory: `dashboard`

Env variable:

```env
REACT_APP_API_BASE_URL=https://stock-trading-backend-k34l.onrender.com
```

### 3. Deploy Frontend to Vercel

- Root directory: `frontend`

Env variables:

```env
REACT_APP_API_BASE_URL=https://stock-trading-backend-k34l.onrender.com
REACT_APP_DASHBOARD_URL=https://stock-trading-gamma.vercel.app
```

## Verification Checklist

- Backend URL responds:
	- `/allHoldings`
	- `/allPositions`
	- `/allOrders`
- Frontend opens and login/signup works
- Successful login redirects to dashboard
- Dashboard displays holdings and positions
- New order appears in `/allOrders`

## Security Best Practices

- Never commit `.env` files
- Rotate secrets immediately if exposed
- Use long random `TOKEN_KEY` in production
- Restrict Atlas network access after deployment
- Use least-privilege DB user roles in Atlas

## Troubleshooting

### `react-scripts is not recognized`

Install dependencies in the correct app directory:

```bash
cd frontend && npm install
cd ../dashboard && npm install
```

### Mongo SRV DNS error (`querySrv ECONNREFUSED`)

Use Atlas standard connection string format (`mongodb://...`) for `MONGO_URL`.

### CORS blocked on production

Ensure Render env values match exact Vercel domains:

- `FRONTEND_URL`
- `DASHBOARD_URL`

### Cookie/session not persisting after login

- Keep `NODE_ENV=production` on Render
- Ensure frontend calls auth endpoints with `withCredentials: true`
- Redeploy services after env changes

## Future Improvements

- Add role-based authorization and protected backend routes
- Add automated backend tests and CI pipeline
- Add portfolio analytics and P/L aggregation endpoints
- Add refresh token strategy and secure logout flow
- Add Dockerfiles + single-command local orchestration

---

If you are an interviewer and want a guided walkthrough, start from Frontend -> Login -> Dashboard -> Place Order to cover the full data flow.


