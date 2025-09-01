from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Create app
app = FastAPI()

# Allow frontend (React) to talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # allow all origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dummy invoice data (10 invoices)
invoices = [
    {"invoice_no": "INV001", "date": "2025-08-25", "airline": "Thai Airways", "amount": 12000, "gstin": "27AAAAA0000A1Z5"},
    {"invoice_no": "INV002", "date": "2025-08-26", "airline": "IndiGo", "amount": 9500, "gstin": "27BBBBB0000B2Z6"},
    {"invoice_no": "INV003", "date": "2025-08-27", "airline": "Air India", "amount": 15000, "gstin": "27CCCCC0000C3Z7"},
    {"invoice_no": "INV004", "date": "2025-08-28", "airline": "SpiceJet", "amount": 8000, "gstin": "27DDDDD0000D4Z8"},
    {"invoice_no": "INV005", "date": "2025-08-29", "airline": "Vistara", "amount": 18000, "gstin": "27EEEEE0000E5Z9"},
    {"invoice_no": "INV006", "date": "2025-08-30", "airline": "GoAir", "amount": 7000, "gstin": "27FFFFF0000F6Z0"},
    {"invoice_no": "INV007", "date": "2025-08-31", "airline": "AirAsia", "amount": 11000, "gstin": "27GGGGG0000G7Z1"},
    {"invoice_no": "INV008", "date": "2025-09-01", "airline": "IndiGo", "amount": 13000, "gstin": "27HHHHH0000H8Z2"},
    {"invoice_no": "INV009", "date": "2025-09-02", "airline": "Air India", "amount": 9000, "gstin": "27IIIII0000I9Z3"},
    {"invoice_no": "INV010", "date": "2025-09-03", "airline": "SpiceJet", "amount": 16000, "gstin": "27JJJJJ0000J0Z4"}
]

@app.get("/")
def home():
    return {"message": "Backend is running! Visit /api/invoices or /api/suggest-high-value"}

@app.get("/api/invoices")
def get_invoices():
    return invoices

@app.get("/api/suggest-high-value")
def suggest_high_value():
    # Find the invoice with the highest amount
    highest_invoice = max(invoices, key=lambda x: x["amount"])
    return {"suggested": [highest_invoice]}
