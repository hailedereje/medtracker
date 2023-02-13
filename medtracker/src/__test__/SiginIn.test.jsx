import React from "react";
// import { render, fireEvent } from '@testing-library/react';
import {
  render,
  screen,
  fireEvent,
//   getByTestId,
//   getByPlaceholderText,
//   getByText,
} from "@testing-library/react";

import HelloLogin from "../Components/Login/Login";
import "@testing-library/jest-dom";
import { expect } from "@jest/globals";

describe("Login Page", () => {
  it("renders correctly", () => {
    const { getByText, getByPlaceholderText } = render(<HelloLogin />);

    const emailInput = getByPlaceholderText("Email");
    const passWord = getByPlaceholderText("Password");
    const submitButton = getByText("Login");

    expect(emailInput).toBeInTheDocument();
    expect(passWord).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

//   it("takes data correctly in", () => {
//     const { getByPlaceholderText } = render(<HelloLogin />);
//     const emailInput = getByPlaceholderText("Email");

//     const passWord = getByPlaceholderText("Password");
//     // const submitButton = getByText("Login");

//     fireEvent.change(emailInput, { target: { value: "test@example.com" } });
//     fireEvent.change(passWord, { target: { value: "password123" } });

//     expect(emailInput.value).toBe("test@example.com");
//     expect(passWord.value).toBe("password123");
//   });

//   it("should call the onSubmit prop when the form is submitted", () => {
//     const onSubmit = jest.fn();
//     const { getByLabelText, getByText } = render(
//       <HelloLogin onSubmit={onSubmit} />
//     );
//     const emailInput = getByLabelText("Email");
//     const passwordInput = getByLabelText("Password");
//     const submitButton = getByText("Login");

//     fireEvent.change(emailInput, { target: { value: "test@example.com" } });
//     fireEvent.change(passwordInput, { target: { value: "password123" } });
//     fireEvent.click(submitButton);

//     expect(onSubmit).toHaveBeenCalledWith({
//       email: "test@example.com",
//       password: "password123",
//     });
//   });
});
