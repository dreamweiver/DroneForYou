import React from "react";
import DroneStation from "./DroneStation";
import renderer from "react-test-renderer";
import mockedDrones from "./../Misc/drone-list-mock";

it("Drone Station renders correctly", () => {
  let { quads: allDrones } = mockedDrones;
  const isUserForbidden = false;
  allDrones = allDrones.slice(0, 10);
  const stationId = 0;

  const rentDrone = () => {}; // mock function

  const onDroneRenting = (drone, stationId) => {}; // mock function

  const tree = renderer
    .create(
      <DroneStation
        stationId={stationId}
        drones={allDrones}
        onDroneRenting={rentDrone}
        disableDroneRenting={isUserForbidden}
      ></DroneStation>
    )
    .toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <div
      className="MuiPaper-root MuiPaper-elevation1 dashboard__sta MuiPaper-rounded"
    >
      <div
        className="dashboard__sta-row1"
      >
        <header
          className="MuiPaper-root MuiPaper-elevation4 MuiAppBar-root MuiAppBar-positionStatic MuiAppBar-colorPrimary"
        >
          <div
            className="MuiToolbar-root MuiToolbar-regular MuiToolbar-gutters"
          >
            <p
              className="MuiTypography-root MuiTypography-body1 MuiTypography-noWrap"
            >
              <b>
                STATION 
                0
              </b>
            </p>
            <div
              className="makeStyles-grow-1"
            />
            <p
              className="MuiTypography-root MuiTypography-body1 MuiTypography-noWrap"
            >
              Drones Count : 
              10
               / 
              10
            </p>
          </div>
        </header>
      </div>
      <div
        className="dashboard__sta-row margin10"
      >
        <div
          className="MuiGrid-root height100P MuiGrid-container MuiGrid-spacing-xs-3"
        >
          <div
            className="MuiGrid-root height100P MuiGrid-item MuiGrid-grid-xs-true"
          >
            <div
              className="MuiPaper-root MuiPaper-elevation1 height100P MuiPaper-rounded"
            >
              <div
                className="makeStyles-root-178"
              >
                <div
                  className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-spacing-xs-2"
                >
                  <div
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-item"
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
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-true"
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
                          className="MuiChip-root makeStyles-highlight-181 MuiChip-sizeSmall"
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
            </div>
          </div>
          <div
            className="MuiGrid-root height100P MuiGrid-item MuiGrid-grid-xs-true"
          >
            <div
              className="MuiPaper-root MuiPaper-elevation1 height100P MuiPaper-rounded"
            >
              <div
                className="makeStyles-root-178"
              >
                <div
                  className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-spacing-xs-2"
                >
                  <div
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-item"
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
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-true"
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
                          YuneecBreeze
                        </span>
                        <p
                          className="MuiTypography-root MuiTypography-body2 MuiTypography-colorTextSecondary"
                        >
                          Max Flight Time: 
                          1min
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
                            className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"
                            disabled={false}
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
                            tabIndex={0}
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
                          className="MuiChip-root makeStyles-normal-180 MuiChip-sizeSmall"
                          onKeyDown={[Function]}
                          onKeyUp={[Function]}
                        >
                          <span
                            className="MuiChip-label MuiChip-labelSmall"
                          >
                            100%
                          </span>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="MuiGrid-root height100P MuiGrid-item MuiGrid-grid-xs-true"
          >
            <div
              className="MuiPaper-root MuiPaper-elevation1 height100P MuiPaper-rounded"
            >
              <div
                className="makeStyles-root-178"
              >
                <div
                  className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-spacing-xs-2"
                >
                  <div
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-item"
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
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-true"
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
                          CheersonCX-STARS
                        </span>
                        <p
                          className="MuiTypography-root MuiTypography-body2 MuiTypography-colorTextSecondary"
                        >
                          Max Flight Time: 
                          34min
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
                            className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"
                            disabled={false}
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
                            tabIndex={0}
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
                          className="MuiChip-root makeStyles-normal-180 MuiChip-sizeSmall"
                          onKeyDown={[Function]}
                          onKeyUp={[Function]}
                        >
                          <span
                            className="MuiChip-label MuiChip-labelSmall"
                          >
                            98%
                          </span>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="MuiGrid-root height100P MuiGrid-item MuiGrid-grid-xs-true"
          >
            <div
              className="MuiPaper-root MuiPaper-elevation1 height100P MuiPaper-rounded"
            >
              <div
                className="makeStyles-root-178"
              >
                <div
                  className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-spacing-xs-2"
                >
                  <div
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-item"
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
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-true"
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
                          CheersonCX-32W
                        </span>
                        <p
                          className="MuiTypography-root MuiTypography-body2 MuiTypography-colorTextSecondary"
                        >
                          Max Flight Time: 
                          7min
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
                            className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"
                            disabled={false}
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
                            tabIndex={0}
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
                          className="MuiChip-root makeStyles-normal-180 MuiChip-sizeSmall"
                          onKeyDown={[Function]}
                          onKeyUp={[Function]}
                        >
                          <span
                            className="MuiChip-label MuiChip-labelSmall"
                          >
                            72%
                          </span>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="MuiGrid-root height100P MuiGrid-item MuiGrid-grid-xs-true"
          >
            <div
              className="MuiPaper-root MuiPaper-elevation1 height100P MuiPaper-rounded"
            >
              <div
                className="makeStyles-root-178"
              >
                <div
                  className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-spacing-xs-2"
                >
                  <div
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-item"
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
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-true"
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
                          CheersonCX-20
                        </span>
                        <p
                          className="MuiTypography-root MuiTypography-body2 MuiTypography-colorTextSecondary"
                        >
                          Max Flight Time: 
                          15min
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
                          className="MuiChip-root makeStyles-highlight-181 MuiChip-sizeSmall"
                          onKeyDown={[Function]}
                          onKeyUp={[Function]}
                        >
                          <span
                            className="MuiChip-label MuiChip-labelSmall"
                          >
                            2%
                          </span>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="dashboard__sta-row margin10"
      >
        <div
          className="MuiGrid-root height100P MuiGrid-container MuiGrid-spacing-xs-3"
        >
          <div
            className="MuiGrid-root height100P MuiGrid-item MuiGrid-grid-xs-true"
          >
            <div
              className="MuiPaper-root MuiPaper-elevation1 height100P MuiPaper-rounded"
            >
              <div
                className="makeStyles-root-178"
              >
                <div
                  className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-spacing-xs-2"
                >
                  <div
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-item"
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
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-true"
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
                          BladeNano QX
                        </span>
                        <p
                          className="MuiTypography-root MuiTypography-body2 MuiTypography-colorTextSecondary"
                        >
                          Max Flight Time: 
                          28min
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
                            className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"
                            disabled={false}
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
                            tabIndex={0}
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
                          className="MuiChip-root makeStyles-normal-180 MuiChip-sizeSmall"
                          onKeyDown={[Function]}
                          onKeyUp={[Function]}
                        >
                          <span
                            className="MuiChip-label MuiChip-labelSmall"
                          >
                            52%
                          </span>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="MuiGrid-root height100P MuiGrid-item MuiGrid-grid-xs-true"
          >
            <div
              className="MuiPaper-root MuiPaper-elevation1 height100P MuiPaper-rounded"
            >
              <div
                className="makeStyles-root-178"
              >
                <div
                  className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-spacing-xs-2"
                >
                  <div
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-item"
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
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-true"
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
                          3DRSolo
                        </span>
                        <p
                          className="MuiTypography-root MuiTypography-body2 MuiTypography-colorTextSecondary"
                        >
                          Max Flight Time: 
                          20min
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
                            className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"
                            disabled={false}
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
                            tabIndex={0}
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
                          className="MuiChip-root makeStyles-normal-180 MuiChip-sizeSmall"
                          onKeyDown={[Function]}
                          onKeyUp={[Function]}
                        >
                          <span
                            className="MuiChip-label MuiChip-labelSmall"
                          >
                            60%
                          </span>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="MuiGrid-root height100P MuiGrid-item MuiGrid-grid-xs-true"
          >
            <div
              className="MuiPaper-root MuiPaper-elevation1 height100P MuiPaper-rounded"
            >
              <div
                className="makeStyles-root-178"
              >
                <div
                  className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-spacing-xs-2"
                >
                  <div
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-item"
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
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-true"
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
                          DJIMavic 2
                        </span>
                        <p
                          className="MuiTypography-root MuiTypography-body2 MuiTypography-colorTextSecondary"
                        >
                          Max Flight Time: 
                          31min
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
                            className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"
                            disabled={false}
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
                            tabIndex={0}
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
                          className="MuiChip-root makeStyles-normal-180 MuiChip-sizeSmall"
                          onKeyDown={[Function]}
                          onKeyUp={[Function]}
                        >
                          <span
                            className="MuiChip-label MuiChip-labelSmall"
                          >
                            52%
                          </span>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="MuiGrid-root height100P MuiGrid-item MuiGrid-grid-xs-true"
          >
            <div
              className="MuiPaper-root MuiPaper-elevation1 height100P MuiPaper-rounded"
            >
              <div
                className="makeStyles-root-178"
              >
                <div
                  className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-spacing-xs-2"
                >
                  <div
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-item"
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
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-true"
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
                          DJISpark
                        </span>
                        <p
                          className="MuiTypography-root MuiTypography-body2 MuiTypography-colorTextSecondary"
                        >
                          Max Flight Time: 
                          16min
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
                            className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"
                            disabled={false}
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
                            tabIndex={0}
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
                          className="MuiChip-root makeStyles-normal-180 MuiChip-sizeSmall"
                          onKeyDown={[Function]}
                          onKeyUp={[Function]}
                        >
                          <span
                            className="MuiChip-label MuiChip-labelSmall"
                          >
                            100%
                          </span>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="MuiGrid-root height100P MuiGrid-item MuiGrid-grid-xs-true"
          >
            <div
              className="MuiPaper-root MuiPaper-elevation1 height100P MuiPaper-rounded"
            >
              <div
                className="makeStyles-root-178"
              >
                <div
                  className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-spacing-xs-2"
                >
                  <div
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-item"
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
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-true"
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
                          DJIPhantom 4
                        </span>
                        <p
                          className="MuiTypography-root MuiTypography-body2 MuiTypography-colorTextSecondary"
                        >
                          Max Flight Time: 
                          28min
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
                            className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"
                            disabled={false}
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
                            tabIndex={0}
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
                          className="MuiChip-root makeStyles-normal-180 MuiChip-sizeSmall"
                          onKeyDown={[Function]}
                          onKeyUp={[Function]}
                        >
                          <span
                            className="MuiChip-label MuiChip-labelSmall"
                          >
                            93%
                          </span>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `);
});

it("Drone Station renders correctly- Forbidden users", () => {
  let { quads: allDrones } = mockedDrones;
  allDrones = allDrones.slice(0, 10);
  const isUserForbidden = true;
  const stationId = 0;

  const rentDrone = () => {}; // mock function

  const onDroneRenting = (drone, stationId) => {}; // mock function

  const tree = renderer
    .create(
      <DroneStation
        stationId={stationId}
        drones={allDrones}
        onDroneRenting={rentDrone}
        disableDroneRenting={isUserForbidden}
      ></DroneStation>
    )
    .toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <div
      className="MuiPaper-root MuiPaper-elevation1 dashboard__sta MuiPaper-rounded"
    >
      <div
        className="dashboard__sta-row1"
      >
        <header
          className="MuiPaper-root MuiPaper-elevation4 MuiAppBar-root MuiAppBar-positionStatic MuiAppBar-colorPrimary"
        >
          <div
            className="MuiToolbar-root MuiToolbar-regular MuiToolbar-gutters"
          >
            <p
              className="MuiTypography-root MuiTypography-body1 MuiTypography-noWrap"
            >
              <b>
                STATION 
                0
              </b>
            </p>
            <div
              className="makeStyles-grow-1"
            />
            <p
              className="MuiTypography-root MuiTypography-body1 MuiTypography-noWrap"
            >
              Drones Count : 
              10
               / 
              10
            </p>
          </div>
        </header>
      </div>
      <div
        className="dashboard__sta-row margin10"
      >
        <div
          className="MuiGrid-root height100P MuiGrid-container MuiGrid-spacing-xs-3"
        >
          <div
            className="MuiGrid-root height100P MuiGrid-item MuiGrid-grid-xs-true"
          >
            <div
              className="MuiPaper-root MuiPaper-elevation1 height100P MuiPaper-rounded"
            >
              <div
                className="makeStyles-root-178"
              >
                <div
                  className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-spacing-xs-2"
                >
                  <div
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-item"
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
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-true"
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
                          className="MuiChip-root makeStyles-highlight-181 MuiChip-sizeSmall"
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
            </div>
          </div>
          <div
            className="MuiGrid-root height100P MuiGrid-item MuiGrid-grid-xs-true"
          >
            <div
              className="MuiPaper-root MuiPaper-elevation1 height100P MuiPaper-rounded"
            >
              <div
                className="makeStyles-root-178"
              >
                <div
                  className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-spacing-xs-2"
                >
                  <div
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-item"
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
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-true"
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
                          YuneecBreeze
                        </span>
                        <p
                          className="MuiTypography-root MuiTypography-body2 MuiTypography-colorTextSecondary"
                        >
                          Max Flight Time: 
                          1min
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
                          className="MuiChip-root makeStyles-normal-180 MuiChip-sizeSmall"
                          onKeyDown={[Function]}
                          onKeyUp={[Function]}
                        >
                          <span
                            className="MuiChip-label MuiChip-labelSmall"
                          >
                            100%
                          </span>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="MuiGrid-root height100P MuiGrid-item MuiGrid-grid-xs-true"
          >
            <div
              className="MuiPaper-root MuiPaper-elevation1 height100P MuiPaper-rounded"
            >
              <div
                className="makeStyles-root-178"
              >
                <div
                  className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-spacing-xs-2"
                >
                  <div
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-item"
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
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-true"
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
                          CheersonCX-STARS
                        </span>
                        <p
                          className="MuiTypography-root MuiTypography-body2 MuiTypography-colorTextSecondary"
                        >
                          Max Flight Time: 
                          34min
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
                          className="MuiChip-root makeStyles-normal-180 MuiChip-sizeSmall"
                          onKeyDown={[Function]}
                          onKeyUp={[Function]}
                        >
                          <span
                            className="MuiChip-label MuiChip-labelSmall"
                          >
                            98%
                          </span>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="MuiGrid-root height100P MuiGrid-item MuiGrid-grid-xs-true"
          >
            <div
              className="MuiPaper-root MuiPaper-elevation1 height100P MuiPaper-rounded"
            >
              <div
                className="makeStyles-root-178"
              >
                <div
                  className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-spacing-xs-2"
                >
                  <div
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-item"
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
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-true"
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
                          CheersonCX-32W
                        </span>
                        <p
                          className="MuiTypography-root MuiTypography-body2 MuiTypography-colorTextSecondary"
                        >
                          Max Flight Time: 
                          7min
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
                          className="MuiChip-root makeStyles-normal-180 MuiChip-sizeSmall"
                          onKeyDown={[Function]}
                          onKeyUp={[Function]}
                        >
                          <span
                            className="MuiChip-label MuiChip-labelSmall"
                          >
                            72%
                          </span>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="MuiGrid-root height100P MuiGrid-item MuiGrid-grid-xs-true"
          >
            <div
              className="MuiPaper-root MuiPaper-elevation1 height100P MuiPaper-rounded"
            >
              <div
                className="makeStyles-root-178"
              >
                <div
                  className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-spacing-xs-2"
                >
                  <div
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-item"
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
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-true"
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
                          CheersonCX-20
                        </span>
                        <p
                          className="MuiTypography-root MuiTypography-body2 MuiTypography-colorTextSecondary"
                        >
                          Max Flight Time: 
                          15min
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
                          className="MuiChip-root makeStyles-highlight-181 MuiChip-sizeSmall"
                          onKeyDown={[Function]}
                          onKeyUp={[Function]}
                        >
                          <span
                            className="MuiChip-label MuiChip-labelSmall"
                          >
                            2%
                          </span>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="dashboard__sta-row margin10"
      >
        <div
          className="MuiGrid-root height100P MuiGrid-container MuiGrid-spacing-xs-3"
        >
          <div
            className="MuiGrid-root height100P MuiGrid-item MuiGrid-grid-xs-true"
          >
            <div
              className="MuiPaper-root MuiPaper-elevation1 height100P MuiPaper-rounded"
            >
              <div
                className="makeStyles-root-178"
              >
                <div
                  className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-spacing-xs-2"
                >
                  <div
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-item"
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
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-true"
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
                          BladeNano QX
                        </span>
                        <p
                          className="MuiTypography-root MuiTypography-body2 MuiTypography-colorTextSecondary"
                        >
                          Max Flight Time: 
                          28min
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
                          className="MuiChip-root makeStyles-normal-180 MuiChip-sizeSmall"
                          onKeyDown={[Function]}
                          onKeyUp={[Function]}
                        >
                          <span
                            className="MuiChip-label MuiChip-labelSmall"
                          >
                            52%
                          </span>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="MuiGrid-root height100P MuiGrid-item MuiGrid-grid-xs-true"
          >
            <div
              className="MuiPaper-root MuiPaper-elevation1 height100P MuiPaper-rounded"
            >
              <div
                className="makeStyles-root-178"
              >
                <div
                  className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-spacing-xs-2"
                >
                  <div
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-item"
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
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-true"
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
                          3DRSolo
                        </span>
                        <p
                          className="MuiTypography-root MuiTypography-body2 MuiTypography-colorTextSecondary"
                        >
                          Max Flight Time: 
                          20min
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
                          className="MuiChip-root makeStyles-normal-180 MuiChip-sizeSmall"
                          onKeyDown={[Function]}
                          onKeyUp={[Function]}
                        >
                          <span
                            className="MuiChip-label MuiChip-labelSmall"
                          >
                            60%
                          </span>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="MuiGrid-root height100P MuiGrid-item MuiGrid-grid-xs-true"
          >
            <div
              className="MuiPaper-root MuiPaper-elevation1 height100P MuiPaper-rounded"
            >
              <div
                className="makeStyles-root-178"
              >
                <div
                  className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-spacing-xs-2"
                >
                  <div
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-item"
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
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-true"
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
                          DJIMavic 2
                        </span>
                        <p
                          className="MuiTypography-root MuiTypography-body2 MuiTypography-colorTextSecondary"
                        >
                          Max Flight Time: 
                          31min
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
                          className="MuiChip-root makeStyles-normal-180 MuiChip-sizeSmall"
                          onKeyDown={[Function]}
                          onKeyUp={[Function]}
                        >
                          <span
                            className="MuiChip-label MuiChip-labelSmall"
                          >
                            52%
                          </span>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="MuiGrid-root height100P MuiGrid-item MuiGrid-grid-xs-true"
          >
            <div
              className="MuiPaper-root MuiPaper-elevation1 height100P MuiPaper-rounded"
            >
              <div
                className="makeStyles-root-178"
              >
                <div
                  className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-spacing-xs-2"
                >
                  <div
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-item"
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
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-true"
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
                          DJISpark
                        </span>
                        <p
                          className="MuiTypography-root MuiTypography-body2 MuiTypography-colorTextSecondary"
                        >
                          Max Flight Time: 
                          16min
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
                          className="MuiChip-root makeStyles-normal-180 MuiChip-sizeSmall"
                          onKeyDown={[Function]}
                          onKeyUp={[Function]}
                        >
                          <span
                            className="MuiChip-label MuiChip-labelSmall"
                          >
                            100%
                          </span>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="MuiGrid-root height100P MuiGrid-item MuiGrid-grid-xs-true"
          >
            <div
              className="MuiPaper-root MuiPaper-elevation1 height100P MuiPaper-rounded"
            >
              <div
                className="makeStyles-root-178"
              >
                <div
                  className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-spacing-xs-2"
                >
                  <div
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-item"
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
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-true"
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
                          DJIPhantom 4
                        </span>
                        <p
                          className="MuiTypography-root MuiTypography-body2 MuiTypography-colorTextSecondary"
                        >
                          Max Flight Time: 
                          28min
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
                          className="MuiChip-root makeStyles-normal-180 MuiChip-sizeSmall"
                          onKeyDown={[Function]}
                          onKeyUp={[Function]}
                        >
                          <span
                            className="MuiChip-label MuiChip-labelSmall"
                          >
                            93%
                          </span>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `);
});

it("Drone Station renders correctly- invoke filler when station has less then 10 drones", () => {
  let { quads: allDrones } = mockedDrones;
  allDrones = allDrones.slice(0, 7);

  const isUserForbidden = false;
  const stationId = 0;

  const rentDrone = () => {}; // mock function

  const onDroneRenting = (drone, stationId) => {}; // mock function

  const tree = renderer
    .create(
      <DroneStation
        stationId={stationId}
        drones={allDrones}
        onDroneRenting={rentDrone}
        disableDroneRenting={isUserForbidden}
      ></DroneStation>
    )
    .toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <div
      className="MuiPaper-root MuiPaper-elevation1 dashboard__sta MuiPaper-rounded"
    >
      <div
        className="dashboard__sta-row1"
      >
        <header
          className="MuiPaper-root MuiPaper-elevation4 MuiAppBar-root MuiAppBar-positionStatic MuiAppBar-colorPrimary"
        >
          <div
            className="MuiToolbar-root MuiToolbar-regular MuiToolbar-gutters"
          >
            <p
              className="MuiTypography-root MuiTypography-body1 MuiTypography-noWrap"
            >
              <b>
                STATION 
                0
              </b>
            </p>
            <div
              className="makeStyles-grow-1"
            />
            <p
              className="MuiTypography-root MuiTypography-body1 MuiTypography-noWrap"
            >
              Drones Count : 
              7
               / 
              10
            </p>
          </div>
        </header>
      </div>
      <div
        className="dashboard__sta-row margin10"
      >
        <div
          className="MuiGrid-root height100P MuiGrid-container MuiGrid-spacing-xs-3"
        >
          <div
            className="MuiGrid-root height100P MuiGrid-item MuiGrid-grid-xs-true"
          >
            <div
              className="MuiPaper-root MuiPaper-elevation1 height100P MuiPaper-rounded"
            >
              <div
                className="makeStyles-root-178"
              >
                <div
                  className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-spacing-xs-2"
                >
                  <div
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-item"
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
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-true"
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
                          className="MuiChip-root makeStyles-highlight-181 MuiChip-sizeSmall"
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
            </div>
          </div>
          <div
            className="MuiGrid-root height100P MuiGrid-item MuiGrid-grid-xs-true"
          >
            <div
              className="MuiPaper-root MuiPaper-elevation1 height100P MuiPaper-rounded"
            >
              <div
                className="makeStyles-root-178"
              >
                <div
                  className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-spacing-xs-2"
                >
                  <div
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-item"
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
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-true"
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
                          YuneecBreeze
                        </span>
                        <p
                          className="MuiTypography-root MuiTypography-body2 MuiTypography-colorTextSecondary"
                        >
                          Max Flight Time: 
                          1min
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
                            className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"
                            disabled={false}
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
                            tabIndex={0}
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
                          className="MuiChip-root makeStyles-normal-180 MuiChip-sizeSmall"
                          onKeyDown={[Function]}
                          onKeyUp={[Function]}
                        >
                          <span
                            className="MuiChip-label MuiChip-labelSmall"
                          >
                            100%
                          </span>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="MuiGrid-root height100P MuiGrid-item MuiGrid-grid-xs-true"
          >
            <div
              className="MuiPaper-root MuiPaper-elevation1 height100P MuiPaper-rounded"
            >
              <div
                className="makeStyles-root-178"
              >
                <div
                  className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-spacing-xs-2"
                >
                  <div
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-item"
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
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-true"
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
                          CheersonCX-STARS
                        </span>
                        <p
                          className="MuiTypography-root MuiTypography-body2 MuiTypography-colorTextSecondary"
                        >
                          Max Flight Time: 
                          34min
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
                            className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"
                            disabled={false}
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
                            tabIndex={0}
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
                          className="MuiChip-root makeStyles-normal-180 MuiChip-sizeSmall"
                          onKeyDown={[Function]}
                          onKeyUp={[Function]}
                        >
                          <span
                            className="MuiChip-label MuiChip-labelSmall"
                          >
                            98%
                          </span>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="MuiGrid-root height100P MuiGrid-item MuiGrid-grid-xs-true"
          >
            <div
              className="MuiPaper-root MuiPaper-elevation1 height100P MuiPaper-rounded"
            >
              <div
                className="makeStyles-root-178"
              >
                <div
                  className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-spacing-xs-2"
                >
                  <div
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-item"
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
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-true"
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
                          CheersonCX-32W
                        </span>
                        <p
                          className="MuiTypography-root MuiTypography-body2 MuiTypography-colorTextSecondary"
                        >
                          Max Flight Time: 
                          7min
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
                            className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"
                            disabled={false}
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
                            tabIndex={0}
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
                          className="MuiChip-root makeStyles-normal-180 MuiChip-sizeSmall"
                          onKeyDown={[Function]}
                          onKeyUp={[Function]}
                        >
                          <span
                            className="MuiChip-label MuiChip-labelSmall"
                          >
                            72%
                          </span>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="MuiGrid-root height100P MuiGrid-item MuiGrid-grid-xs-true"
          >
            <div
              className="MuiPaper-root MuiPaper-elevation1 height100P MuiPaper-rounded"
            >
              <div
                className="makeStyles-root-178"
              >
                <div
                  className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-spacing-xs-2"
                >
                  <div
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-item"
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
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-true"
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
                          CheersonCX-20
                        </span>
                        <p
                          className="MuiTypography-root MuiTypography-body2 MuiTypography-colorTextSecondary"
                        >
                          Max Flight Time: 
                          15min
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
                          className="MuiChip-root makeStyles-highlight-181 MuiChip-sizeSmall"
                          onKeyDown={[Function]}
                          onKeyUp={[Function]}
                        >
                          <span
                            className="MuiChip-label MuiChip-labelSmall"
                          >
                            2%
                          </span>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="dashboard__sta-row margin10"
      >
        <div
          className="MuiGrid-root height100P MuiGrid-container MuiGrid-spacing-xs-3"
        >
          <div
            className="MuiGrid-root height100P MuiGrid-item MuiGrid-grid-xs-true"
          >
            <div
              className="MuiPaper-root MuiPaper-elevation1 height100P MuiPaper-rounded"
            >
              <div
                className="makeStyles-root-178"
              >
                <div
                  className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-spacing-xs-2"
                >
                  <div
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-item"
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
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-true"
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
                          BladeNano QX
                        </span>
                        <p
                          className="MuiTypography-root MuiTypography-body2 MuiTypography-colorTextSecondary"
                        >
                          Max Flight Time: 
                          28min
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
                            className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"
                            disabled={false}
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
                            tabIndex={0}
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
                          className="MuiChip-root makeStyles-normal-180 MuiChip-sizeSmall"
                          onKeyDown={[Function]}
                          onKeyUp={[Function]}
                        >
                          <span
                            className="MuiChip-label MuiChip-labelSmall"
                          >
                            52%
                          </span>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="MuiGrid-root height100P MuiGrid-item MuiGrid-grid-xs-true"
          >
            <div
              className="MuiPaper-root MuiPaper-elevation1 height100P MuiPaper-rounded"
            >
              <div
                className="makeStyles-root-178"
              >
                <div
                  className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-spacing-xs-2"
                >
                  <div
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-item"
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
                    className="MuiGrid-root makeStyles-fullHeight-179 MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-true"
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
                          3DRSolo
                        </span>
                        <p
                          className="MuiTypography-root MuiTypography-body2 MuiTypography-colorTextSecondary"
                        >
                          Max Flight Time: 
                          20min
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
                            className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"
                            disabled={false}
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
                            tabIndex={0}
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
                          className="MuiChip-root makeStyles-normal-180 MuiChip-sizeSmall"
                          onKeyDown={[Function]}
                          onKeyUp={[Function]}
                        >
                          <span
                            className="MuiChip-label MuiChip-labelSmall"
                          >
                            60%
                          </span>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true"
          >
            <div
              className="MuiPaper-root MuiPaper-elevation1 makeStyles-fullHeight-2 makeStyles-placeHolder-3 MuiPaper-rounded"
            >
              <h6
                className="MuiTypography-root makeStyles-text-4 MuiTypography-h6 MuiTypography-colorTextSecondary"
              >
                Empty Slot
              </h6>
            </div>
          </div>
          <div
            className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true"
          >
            <div
              className="MuiPaper-root MuiPaper-elevation1 makeStyles-fullHeight-2 makeStyles-placeHolder-3 MuiPaper-rounded"
            >
              <h6
                className="MuiTypography-root makeStyles-text-4 MuiTypography-h6 MuiTypography-colorTextSecondary"
              >
                Empty Slot
              </h6>
            </div>
          </div>
          <div
            className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true"
          >
            <div
              className="MuiPaper-root MuiPaper-elevation1 makeStyles-fullHeight-2 makeStyles-placeHolder-3 MuiPaper-rounded"
            >
              <h6
                className="MuiTypography-root makeStyles-text-4 MuiTypography-h6 MuiTypography-colorTextSecondary"
              >
                Empty Slot
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  `);
});
