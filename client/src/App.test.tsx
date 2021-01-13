import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import ReactDOM from "react-dom";
import {useAuth0} from "@auth0/auth0-react";
import { mocked } from "ts-jest/utils";

// const user = {
//   email: "johndoe@me.com",
//   email_verified: true,
//   sub: "google-oauth2|2147627834623744883746",
// };

// jest.mock("@auth0/auth0-react");

// const mockAuth0 = mocked(auth0, true);

// const mockedAuth = useAuth0 as jest.Mock<typeof useAuth0>
// describe("App logged in", () => {
//   beforeEach(() => {
//     mockedAuth.mockResolvedValue({
//       isAuthenticated: true,
//       user,
//       logout: jest.fn(),
//       loginWithRedirect: jest.fn(),
//       getAccessTokenWithPopup: jest.fn(),
//       getAccessTokenSilently: jest.fn(),
//       getIdTokenClaims: jest.fn(),
//       loginWithPopup: jest.fn(),
//       isLoading: false,
//     });
//   });

//   it("renders without crashing", () => {
//     const div = document.createElement("div");
//     ReactDOM.render(<App />, div);
//   });

//   it("renders Log Out message", () => {
//     render(<App />);
//     expect(screen.getByText("Log Out")).toBeInTheDocument();
//   });

  // test('Create New Blog Post displays on Log In', () => {
  //   render(<App />);
  //   const button = screen.getByText('View All Blog Posts')
  //   expect(button).toBeInTheDocument();
  // })
// });

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

it("renders Log In message", () => {
  render(<App />);
  expect(screen.getByText("Log In")).toBeInTheDocument();
});
