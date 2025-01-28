const ResponseArea = ({ response }) => (
    <div style={{ marginTop: "20px", color: "#333" }}>
        <strong>Bot Response:</strong>
        <p>{response || "No response yet."}</p>
    </div>
);

export default ResponseArea;
