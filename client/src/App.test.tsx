import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import ReactDOM from "react-dom";
import {useAuth0} from "@auth0/auth0-react";
import { mocked } from "ts-jest/utils";


it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});


