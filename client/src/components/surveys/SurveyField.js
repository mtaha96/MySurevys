import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label> {label}</label>
      <input {...input} />
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
    </div>
  );
};
