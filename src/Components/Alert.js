import React from "react";

export default function Alert(props) {
  return (
    <div style={{ height: "10px" }}>
      {props.alert && (
        <div>
          <div className={`alert alert-${props.alert.Type}`} role="alert">
            {props.alert.msg}
          </div>
        </div>
      )}
    </div>
  );
}
