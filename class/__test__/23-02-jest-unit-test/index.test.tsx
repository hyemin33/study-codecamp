import { render, screen } from "@testing-library/react";
import JestUnitTestPage from "../../pages/23-02-jest-unit-test";
import "@testing-library/jest-dom";

it("내가 원하는대로 그려지는지 테스트", () => {
  render(<JestUnitTestPage />);
  const myText1 = screen.getByText("철수는 13살 입니다.");
  expect(myText1).toBeInTheDocument();
});
