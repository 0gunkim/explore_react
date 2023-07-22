import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";
import { expect, test } from "vitest";

test("count button test", () => {
  const { getByText } = render(<Counter />);

  const countButton = getByText(/count is 0/i);
  expect(countButton).toBeInTheDocument();

  fireEvent.click(countButton);

  const updatedCountButton = getByText(/count is 1/i);
  expect(updatedCountButton).toBeInTheDocument();
});
