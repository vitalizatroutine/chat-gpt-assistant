import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TranscriptArea from "./transcriptArea.component";

describe("TranscriptArea", () => {
  it("renders the provided value in the textarea", () => {
    const testValue = "Test transcript content";
    render(<TranscriptArea value={testValue} />);
    expect(screen.getByDisplayValue(testValue)).toBeInTheDocument();
  });

  it("contains a title that says 'The Transcript'", () => {
    render(<TranscriptArea value="" />);
    const title = screen.getByText(/the transcript/i);
    expect(title).toBeInTheDocument();
  });

  it("contains a button to launch ChatGPT", () => {
    render(<TranscriptArea value="" />);
    const button = screen.getByRole("button", { name: /launch chatgpt/i });
    expect(button).toBeInTheDocument();
  });

  it("opens the ChatGPT URL in a new tab when the button is clicked", () => {
    const openSpy = jest.spyOn(window, "open").mockImplementation(() => null);

    render(<TranscriptArea value="" />);
    const button = screen.getByRole("button", { name: /launch chatgpt/i });

    userEvent.click(button);
    expect(openSpy).toHaveBeenCalledWith(
      "https://chat.openai.com/chat?model=gpt-4",
      "_blank"
    );

    openSpy.mockRestore();
  });
});
