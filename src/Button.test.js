/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, cleanup } from "@testing-library/react";
import { createSerializer } from "@emotion/jest";
import Button from "./Button";
expect.addSnapshotSerializer(createSerializer());

describe("IconComponent", () => {
  afterEach(cleanup);

  it("should match the snapshot for the given props", () => {
    const { asFragment } = render(<Button />);

    expect(asFragment()).toMatchSnapshot();
  });
});
