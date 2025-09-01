# Backend (FastAPI)

## Setup (Windows PowerShell or CMD)
```bash
# 1) Ensure Python is installed and on PATH (python --version). On Windows you can also use 'py' launcher.
py -m venv venv
.\venv\Scripts\activate

# 2) Install deps
py -m pip install --upgrade pip
py -m pip install -r requirements.txt

# 3) Run the API
uvicorn app:app --reload --port 8000
# The API will be at http://127.0.0.1:8000
# Test in browser:
# http://127.0.0.1:8000/api/health
# http://127.0.0.1:8000/api/invoices
# http://127.0.0.1:8000/api/airline-totals
# http://127.0.0.1:8000/api/suggest-high-value?threshold=10000
```
✈️ Airline Invoice Dashboard

A fullstack web application to manage, track, and analyze airline invoices with an interactive dashboard.
This project is built using React (Frontend) and FastAPI / Python (Backend).

🚀 Features

📊 Interactive Dashboard – View and analyze airline invoices

🔐 Admin Login – Secure access for administrators

👥 Agent Management – Add and manage airline agents

📂 CSV Upload – Import invoice lists and distribute among agents

💾 MongoDB Integration – Store and manage invoice data

⚡ FastAPI Backend – High-performance REST API

🎨 Responsive UI – Built with React for modern and clean design

🛠️ Tech Stack
Frontend

React.js

Vite

Tailwind CSS / Bootstrap

Backend

FastAPI (Python)

MongoDB (via MongoDB Compass)

📂 Project Structure
airline-invoice-dashboard/
│── frontend/       # React frontend
│── backend/        # FastAPI backend
│── README.md       # Project documentation

⚙️ Setup Instructions
1️⃣ Clone the Repository
git clone https://github.com/your-username/airline-invoice-dashboard.git
cd airline-invoice-dashboard

2️⃣ Run Backend
cd backend
uvicorn main:app --reload


Backend will run at: http://127.0.0.1:8000

3️⃣ Run Frontend
cd frontend
npm install
npm run dev


Frontend will run at: http://localhost:5173 (default Vite port).

📸 Screenshots

(Add some UI screenshots of your dashboard here.)

🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

📜 License

This project is licensed under the MIT License – free to use and modify.
