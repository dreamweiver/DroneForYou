import React from "react";
import Drone from "./Drone";
import renderer from "react-test-renderer";
import mockedDrones from "./../Misc/drone-list-mock";

it("Drone renders correctly", () => {
  const { quads: allDrones } = mockedDrones;
  const drone = allDrones[0];
  const disableDroneRenting = false;
  const stationId = 0;

  const onDroneRenting = (drone, stationId) => {}; // mock function

  const tree = renderer
    .create(
      <Drone
        title={drone.manufacturer + drone.model}
        charge={drone.charge}
        maxFlightTime={drone.maxFlightTime}
        onDroneAction={() => onDroneRenting(drone, stationId)}
        isDroneNotAcessible={disableDroneRenting}
      ></Drone>
    )
    .toJSON();
  expect(tree).toMatchInlineSnapshot(`
        <div
          className="makeStyles-root-1"
        >
          <div
            className="MuiGrid-root makeStyles-fullHeight-2 MuiGrid-container MuiGrid-spacing-xs-2"
          >
            <div
              className="MuiGrid-root makeStyles-fullHeight-2 MuiGrid-item"
            >
              <div
                className="MuiAvatar-root"
              >
                <img
                  alt="drone"
                  className="MuiAvatar-img"
                  src="drone.png"
                />
              </div>
            </div>
            <div
              className="MuiGrid-root makeStyles-fullHeight-2 MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-true"
            >
              <div
                className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 MuiGrid-item MuiGrid-direction-xs-column MuiGrid-grid-xs-10"
              >
                <div
                  className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true"
                >
                  <span
                    className="MuiTypography-root MuiTypography-caption MuiTypography-gutterBottom"
                  >
                    ParrotAnafi
                  </span>
                  <p
                    className="MuiTypography-root MuiTypography-body2 MuiTypography-colorTextSecondary"
                  >
                    Max Flight Time: 
                    25min
                  </p>
                </div>
                <div
                  className="MuiGrid-root MuiGrid-item"
                >
                  <p
                    className="MuiTypography-root MuiTypography-body2"
                    style={
                      Object {
                        "cursor": "pointer",
                      }
                    }
                  >
                    <button
                      className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary Mui-disabled Mui-disabled"
                      disabled={true}
                      onBlur={[Function]}
                      onClick={[Function]}
                      onDragLeave={[Function]}
                      onFocus={[Function]}
                      onKeyDown={[Function]}
                      onKeyUp={[Function]}
                      onMouseDown={[Function]}
                      onMouseLeave={[Function]}
                      onMouseUp={[Function]}
                      onTouchEnd={[Function]}
                      onTouchMove={[Function]}
                      onTouchStart={[Function]}
                      tabIndex={-1}
                      type="button"
                    >
                      <span
                        className="MuiButton-label"
                      >
                        RENT ME
                      </span>
                    </button>
                  </p>
                </div>
              </div>
              <div
                className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-2"
              >
                <span
                  className="MuiTypography-root MuiTypography-caption"
                >
                  <div
                    className="MuiChip-root makeStyles-highlight-4 MuiChip-sizeSmall"
                    onKeyDown={[Function]}
                    onKeyUp={[Function]}
                  >
                    <span
                      className="MuiChip-label MuiChip-labelSmall"
                    >
                      0%
                    </span>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
    `);
});

it("Drone renders correctly- disable Drone Renting", () => {
  const { quads: allDrones } = mockedDrones;
  const drone = allDrones[0];
  const disableDroneRenting = true;
  const stationId = 0;

  const onDroneRenting = (drone, stationId) => {}; // mock function

  const tree = renderer
    .create(
      <Drone
        title={drone.manufacturer + drone.model}
        charge={drone.charge}
        maxFlightTime={drone.maxFlightTime}
        onDroneAction={() => onDroneRenting(drone, stationId)}
        isDroneNotAcessible={disableDroneRenting}
      ></Drone>
    )
    .toJSON();
  expect(tree).toMatchInlineSnapshot(`
        <div
          className="makeStyles-root-1"
        >
          <div
            className="MuiGrid-root makeStyles-fullHeight-2 MuiGrid-container MuiGrid-spacing-xs-2"
          >
            <div
              className="MuiGrid-root makeStyles-fullHeight-2 MuiGrid-item"
            >
              <div
                className="MuiAvatar-root"
              >
                <img
                  alt="drone"
                  className="MuiAvatar-img"
                  src="drone.png"
                />
              </div>
            </div>
            <div
              className="MuiGrid-root makeStyles-fullHeight-2 MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-true"
            >
              <div
                className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 MuiGrid-item MuiGrid-direction-xs-column MuiGrid-grid-xs-10"
              >
                <div
                  className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true"
                >
                  <span
                    className="MuiTypography-root MuiTypography-caption MuiTypography-gutterBottom"
                  >
                    ParrotAnafi
                  </span>
                  <p
                    className="MuiTypography-root MuiTypography-body2 MuiTypography-colorTextSecondary"
                  >
                    Max Flight Time: 
                    25min
                  </p>
                </div>
                <div
                  className="MuiGrid-root MuiGrid-item"
                >
                  <p
                    className="MuiTypography-root MuiTypography-body2"
                    style={
                      Object {
                        "cursor": "pointer",
                      }
                    }
                  >
                    <button
                      className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary Mui-disabled Mui-disabled"
                      disabled={true}
                      onBlur={[Function]}
                      onClick={[Function]}
                      onDragLeave={[Function]}
                      onFocus={[Function]}
                      onKeyDown={[Function]}
                      onKeyUp={[Function]}
                      onMouseDown={[Function]}
                      onMouseLeave={[Function]}
                      onMouseUp={[Function]}
                      onTouchEnd={[Function]}
                      onTouchMove={[Function]}
                      onTouchStart={[Function]}
                      tabIndex={-1}
                      type="button"
                    >
                      <span
                        className="MuiButton-label"
                      >
                        RENT ME
                      </span>
                    </button>
                  </p>
                </div>
              </div>
              <div
                className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-2"
              >
                <span
                  className="MuiTypography-root MuiTypography-caption"
                >
                  <div
                    className="MuiChip-root makeStyles-highlight-4 MuiChip-sizeSmall"
                    onKeyDown={[Function]}
                    onKeyUp={[Function]}
                  >
                    <span
                      className="MuiChip-label MuiChip-labelSmall"
                    >
                      0%
                    </span>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
    `);
});

it("Drone renders correctly - verify with low charge", () => {
  const { quads: allDrones } = mockedDrones;
  const drone = allDrones[0];
  drone.charge = "3%";

  const disableDroneRenting = false;
  const stationId = 0;

  const onDroneRenting = (drone, stationId) => {}; // mock function

  const tree = renderer
    .create(
      <Drone
        title={drone.manufacturer + drone.model}
        charge={drone.charge}
        maxFlightTime={drone.maxFlightTime}
        onDroneAction={() => onDroneRenting(drone, stationId)}
        isDroneNotAcessible={disableDroneRenting}
      ></Drone>
    )
    .toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <div
      className="makeStyles-root-1"
    >
      <div
        className="MuiGrid-root makeStyles-fullHeight-2 MuiGrid-container MuiGrid-spacing-xs-2"
      >
        <div
          className="MuiGrid-root makeStyles-fullHeight-2 MuiGrid-item"
        >
          <div
            className="MuiAvatar-root"
          >
            <img
              alt="drone"
              className="MuiAvatar-img"
              src="drone.png"
            />
          </div>
        </div>
        <div
          className="MuiGrid-root makeStyles-fullHeight-2 MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-true"
        >
          <div
            className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 MuiGrid-item MuiGrid-direction-xs-column MuiGrid-grid-xs-10"
          >
            <div
              className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true"
            >
              <span
                className="MuiTypography-root MuiTypography-caption MuiTypography-gutterBottom"
              >
                ParrotAnafi
              </span>
              <p
                className="MuiTypography-root MuiTypography-body2 MuiTypography-colorTextSecondary"
              >
                Max Flight Time: 
                25min
              </p>
            </div>
            <div
              className="MuiGrid-root MuiGrid-item"
            >
              <p
                className="MuiTypography-root MuiTypography-body2"
                style={
                  Object {
                    "cursor": "pointer",
                  }
                }
              >
                <button
                  className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary Mui-disabled Mui-disabled"
                  disabled={true}
                  onBlur={[Function]}
                  onClick={[Function]}
                  onDragLeave={[Function]}
                  onFocus={[Function]}
                  onKeyDown={[Function]}
                  onKeyUp={[Function]}
                  onMouseDown={[Function]}
                  onMouseLeave={[Function]}
                  onMouseUp={[Function]}
                  onTouchEnd={[Function]}
                  onTouchMove={[Function]}
                  onTouchStart={[Function]}
                  tabIndex={-1}
                  type="button"
                >
                  <span
                    className="MuiButton-label"
                  >
                    RENT ME
                  </span>
                </button>
              </p>
            </div>
          </div>
          <div
            className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-2"
          >
            <span
              className="MuiTypography-root MuiTypography-caption"
            >
              <div
                className="MuiChip-root makeStyles-highlight-4 MuiChip-sizeSmall"
                onKeyDown={[Function]}
                onKeyUp={[Function]}
              >
                <span
                  className="MuiChip-label MuiChip-labelSmall"
                >
                  3%
                </span>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  `);
});

