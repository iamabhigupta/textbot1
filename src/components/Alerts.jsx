import React from "react";

function Alerts(props) {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    props.alert && (
      <div>
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalizeFirstLetter(props.alert.type)}</strong>{" "}
          {props.alert.msg}
        </div>
      </div>
    )
  );
}

export default Alerts;
