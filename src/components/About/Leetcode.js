import React from "react";

function LeetCodeHeatmap() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>
        <strong className="purple">LeetCode</strong> Contribution Heatmap
      </h2>
      <img
        src="https://leetcard.jacoblin.cool/Sughan?theme=dark&animation=true"
        alt="LeetCode Contribution Heatmap"
        style={{ maxWidth: "700px", width: "100%", borderRadius: "10px" }}
      />
    </div>
  );
}

export default LeetCodeHeatmap;
