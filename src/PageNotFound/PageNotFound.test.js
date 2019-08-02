import React from "react";
import PageNotFound from "./PageNotFound";
import renderer from "react-test-renderer";

it("PageNotFound renders correctly ", () => {
  const tree = renderer.create(<PageNotFound></PageNotFound>).toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <h1>
      Not found
    </h1>
  `);
});
