import React from "react";
import { render, screen, act } from "@testing-library/react";
import App from "./App";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        users_url: "https://my-user-manager.herokuapp.com/users",
        value: "Oriana's Challenge Cloud Api",
      }),
  })
);

describe("App", () => {
  it("loads users", () => {
    act(() => render(<App />));
    expect(screen.getByText("Oriana's Challenge Cloud Api")).toBeInTheDocument();
  });
});
