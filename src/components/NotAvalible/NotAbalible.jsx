import React from "react";

// eslint-disable-next-line react/display-name
export default class extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "300px"
        }}
      >
        <h1 style={{ color: "gray" }}>หน้ายังไม่พร้อมใช้งาน</h1>
      </div>
    );
  }
}
