import React from "react";
import TabPanel from "./TabPanel";
import renderer from "react-test-renderer";

it("TabPanel renders correctly - activate tab", () => {
  const activePanelIndex = 0;
  const tree = renderer
    .create(<TabPanel value={activePanelIndex} index={0}></TabPanel>)
    .toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <div
      aria-labelledby="full-width-tab-0"
      className="MuiTypography-root MuiTypography-body1"
      hidden={false}
      id="full-width-tabpanel-0"
      role="tabpanel"
    >
      <div
        className="MuiBox-root MuiBox-root-32"
      />
    </div>
  `);
});

it("TabPanel renders correctly - deactivate tab", () => {
  const activePanelIndex = 1;
  const tree = renderer
    .create(<TabPanel value={activePanelIndex} index={0}></TabPanel>)
    .toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <div
      aria-labelledby="full-width-tab-0"
      className="MuiTypography-root MuiTypography-body1"
      hidden={true}
      id="full-width-tabpanel-0"
      role="tabpanel"
    >
      <div
        className="MuiBox-root MuiBox-root-33"
      />
    </div>
  `);
});
