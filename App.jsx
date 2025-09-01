import React, { useState } from "react";

const App = () => {
  const [invoices, setInvoices] = useState([]);
  const [highlight, setHighlight] = useState(null); // "highest", "lowest", or null

  const loadInvoices = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/invoices");
      const data = await response.json();
      setInvoices(data);
      setHighlight(null); // reset highlight when loading
    } catch (err) {
      console.error("Error loading invoices:", err);
    }
  };

  const getHighestInvoice = () => {
    if (invoices.length === 0) return null;
    return invoices.reduce((prev, curr) =>
      prev.amount > curr.amount ? prev : curr
    );
  };

  const getLowestInvoice = () => {
    if (invoices.length === 0) return null;
    return invoices.reduce((prev, curr) =>
      prev.amount < curr.amount ? prev : curr
    );
  };

  const highestInvoice = getHighestInvoice();
  const lowestInvoice = getLowestInvoice();

  const cardStyle = {
    background: "#fff",
    borderRadius: "16px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    padding: "20px",
    marginBottom: "30px",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "15px",
  };

  const thStyle = {
    padding: "12px",
    background: "linear-gradient(90deg,#6a11cb,#2575fc)",
    color: "#fff",
  };

  const tdStyle = {
    padding: "12px",
    textAlign: "center",
    borderBottom: "1px solid #eee",
    transition: "all 0.2s",
  };

  const highlightRowStyle = (inv) => {
    if (
      highlight === "highest" &&
      highestInvoice?.invoice_no === inv.invoice_no
    ) {
      return { background: "#fff8dc" }; // gold
    } else if (
      highlight === "lowest" &&
      lowestInvoice?.invoice_no === inv.invoice_no
    ) {
      return { background: "#ffcccc" }; // red
    } else {
      return { background: "#fff" };
    }
  };

  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "Poppins, sans-serif",
        background: "linear-gradient(135deg,#a1c4fd,#c2e9fb)",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{ textAlign: "center", marginBottom: "30px", fontSize: "32px" }}
      >
        ✈️ Airline Invoice Dashboard
      </h1>

      {/* Buttons */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <button
          onClick={loadInvoices}
          style={{
            padding: "12px 24px",
            marginRight: "15px",
            background: "linear-gradient(90deg,#6a11cb,#2575fc)",
            border: "none",
            borderRadius: "25px",
            color: "#fff",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          📋 Load Invoices
        </button>

        <button
          onClick={() => setHighlight("highest")}
          style={{
            padding: "12px 24px",
            marginRight: "15px",
            background: "linear-gradient(90deg,#ffdd00,#ffc700)",
            border: "none",
            borderRadius: "25px",
            color: "#333",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          💰 Show Highest
        </button>

        <button
          onClick={() => setHighlight("lowest")}
          style={{
            padding: "12px 24px",
            background: "linear-gradient(90deg,#ff6b6b,#ff4757)",
            border: "none",
            borderRadius: "25px",
            color: "#fff",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          🔹 Show Lowest
        </button>
      </div>

      {/* Invoice Table */}
      <div style={cardStyle}>
        <h2 style={{ color: "#2575fc", marginBottom: "15px" }}>
          📋 All Invoices
        </h2>
        {invoices.length > 0 ? (
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Invoice No</th>
                <th style={thStyle}>Date</th>
                <th style={thStyle}>Airline</th>
                <th style={thStyle}>Amount</th>
                <th style={thStyle}>GSTIN</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((inv) => (
                <tr
                  key={inv.invoice_no}
                  style={{
                    ...highlightRowStyle(inv),
                    cursor: "pointer",
                    transition: "background 0.2s",
                  }}
                >
                  <td style={tdStyle}>
                    {inv.invoice_no}
                    {highlight === "highest" &&
                      highestInvoice?.invoice_no === inv.invoice_no &&
                      " 🏆"}
                    {highlight === "lowest" &&
                      lowestInvoice?.invoice_no === inv.invoice_no &&
                      " 🔹"}
                  </td>
                  <td style={tdStyle}>{inv.date}</td>
                  <td style={tdStyle}>{inv.airline}</td>
                  <td
                    style={{ ...tdStyle, fontWeight: "600", color: "#2575fc" }}
                  >
                    ₹{inv.amount}
                  </td>
                  <td style={tdStyle}>{inv.gstin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p style={{ color: "#aaa" }}>No invoices loaded</p>
        )}
      </div>
    </div>
  );
};

export default App;
