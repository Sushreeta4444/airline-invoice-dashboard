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