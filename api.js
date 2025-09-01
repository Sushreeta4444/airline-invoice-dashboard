const API_BASE_URL = "http://127.0.0.1:8000";

export async function fetchInvoices() {
  const response = await fetch(`${API_BASE_URL}/api/invoices`);
  return response.json();
}

export async function fetchHighValue(threshold) {
  const response = await fetch(
    `${API_BASE_URL}/api/suggest-high-value?threshold=${threshold}`
  );
  return response.json();
}
