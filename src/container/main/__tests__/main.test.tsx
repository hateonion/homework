import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { Main } from "../main";

describe("main container tests", () => {
  test("should pop up modal when hit invite button", async () => {
    render(<Main />);
    fireEvent.click(screen.getByText("Request an invite"));
    await waitFor(() => screen.getByRole("dialog"));

    expect(screen.getByPlaceholderText("Full name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Confirm Email")).toBeInTheDocument();
  });

  test("should close modal when click outside", async () => {
    render(<Main />);
    fireEvent.click(screen.getByText("Request an invite"));
    await waitFor(() => screen.getByRole("dialog"));

    fireEvent.click(screen.getByRole("dialog"));

    expect(screen.queryByRole("dialog")).toBeNull();
  });
});
