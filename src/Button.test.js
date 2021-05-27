/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, cleanup } from "@testing-library/react";
import { createSerializer } from "@emotion/jest";
import { ThemeProvider } from 'emotion-theming'
import { theme } from './App'
import Button from "./Button";

expect.addSnapshotSerializer(createSerializer());

describe("IconComponent", () => {
  afterEach(cleanup);

  it("should match the snapshot for the given props", () => {
    const { asFragment } = render(<ThemeProvider theme={theme}><Button /></ThemeProvider>);
    expect(asFragment()).toMatchSnapshot();
  });
});
