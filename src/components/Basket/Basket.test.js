import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Basket from "./Basket";
import Sales from "../../services/Sales";
import { data } from "../../test/mock/data";

describe("Basket", () => {
  beforeEach(() => {
    jest.spyOn(Sales, "getSalesData").mockResolvedValue(data);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("sales service getSalesData method is called", async () => {
    await render(<Basket />);
    expect(Sales.getSalesData).toHaveBeenCalledTimes(1);
  });
  test("total amount is updated", async () => {
    await render(<Basket />);
    await waitFor(() => {
      expect(screen.getByTestId("btn-add-R01")).toBeDefined();
    });
    const btnAdd = screen.getByTestId("btn-add-R01");
    fireEvent.click(btnAdd);
    expect(screen.getByText("Total: $37.900")).toBeInTheDocument();
  });
  test("reset total amount", async () => {
    await render(<Basket />);
    await waitFor(() => {
      expect(screen.getByTestId("btn-add-R01")).toBeDefined();
    });
    const btnAdd = screen.getByTestId("btn-add-R01");
    fireEvent.click(btnAdd);
    expect(screen.getByText("Total: $37.900")).toBeInTheDocument();
    const btnReset = screen.getByTestId("btn-reset");
    fireEvent.click(btnReset);
    expect(screen.getByText("Total: $0.000")).toBeInTheDocument();
  });
});
