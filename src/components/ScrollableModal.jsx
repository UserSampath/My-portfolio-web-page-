import React from "react";

const ScrollableModal = () => {
  const modalContainerStyle = {
    width: "700px",
    maxHeight: "90vh",
    overflowY: "auto",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
    position: "relative",
  };

  const modalContentStyle = {
    padding: "20px",
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}>
      <div style={modalContainerStyle}>
        <div style={modalContentStyle}>
          fvsfdvvfsdvsdvs
          <p>This is your scrollable modal content.</p>
        </div>
      </div>
    </div>
  );
};



export default ScrollableModal;
