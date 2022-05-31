import React from "react";
import { Button, Typography } from "@material-ui/core";

import { useParams } from "react-router";
import axios from "axios";

import "./user_form.css";
function SubmitForm() {
  return (
    <div className="submit">
      <div className="user_form">
        <div className="user_form_section">
          <div className="user_title_section">
            <Typography
              style={{
                fontSize: "26px",
                fontFamily: "'Google Sans','Roboto','Arial','sans-serif'",
              }}
            >
              Untitled Form 123
            </Typography>
            <br></br>
            <Typography style={{ fontSize: "13px", fontWeight: "400" }}>
              Your response has been recorded.
            </Typography>
            <br></br>
            <a href="#1" style={{ fontSize: "13px" }}>
              Submit another response
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubmitForm;
