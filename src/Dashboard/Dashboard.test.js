import React from "react";
import Dashboard from "./Dashboard";
import EnzymeToJson from "enzyme-to-json";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import allDrones from "./../Misc/drone-list-mock";
import UtilityHelper from "./../Helpers/UtilityHelper";

configure({ adapter: new Adapter() });

it("Dashboard renders correctly with default state", () => {
  const tree = mount(<Dashboard></Dashboard>);
  expect(EnzymeToJson(tree)).toMatchInlineSnapshot(`
                        <Dashboard>
                          <div
                            className="dashboard"
                          >
                            <HeaderAppBar
                              countDownValue={0}
                              isUserBanned={false}
                              loggedInUser=", "
                              onDroneReturn={[Function]}
                            >
                              <div
                                className="header-app-bar"
                              >
                                <WithStyles(ForwardRef(AppBar))
                                  position="static"
                                >
                                  <ForwardRef(AppBar)
                                    classes={
                                      Object {
                                        "colorDefault": "MuiAppBar-colorDefault",
                                        "colorPrimary": "MuiAppBar-colorPrimary",
                                        "colorSecondary": "MuiAppBar-colorSecondary",
                                        "positionAbsolute": "MuiAppBar-positionAbsolute",
                                        "positionFixed": "MuiAppBar-positionFixed",
                                        "positionRelative": "MuiAppBar-positionRelative",
                                        "positionStatic": "MuiAppBar-positionStatic",
                                        "positionSticky": "MuiAppBar-positionSticky",
                                        "root": "MuiAppBar-root",
                                      }
                                    }
                                    position="static"
                                  >
                                    <WithStyles(ForwardRef(Paper))
                                      className="MuiAppBar-root MuiAppBar-positionStatic MuiAppBar-colorPrimary"
                                      component="header"
                                      elevation={4}
                                      square={true}
                                    >
                                      <ForwardRef(Paper)
                                        className="MuiAppBar-root MuiAppBar-positionStatic MuiAppBar-colorPrimary"
                                        classes={
                                          Object {
                                            "elevation0": "MuiPaper-elevation0",
                                            "elevation1": "MuiPaper-elevation1",
                                            "elevation10": "MuiPaper-elevation10",
                                            "elevation11": "MuiPaper-elevation11",
                                            "elevation12": "MuiPaper-elevation12",
                                            "elevation13": "MuiPaper-elevation13",
                                            "elevation14": "MuiPaper-elevation14",
                                            "elevation15": "MuiPaper-elevation15",
                                            "elevation16": "MuiPaper-elevation16",
                                            "elevation17": "MuiPaper-elevation17",
                                            "elevation18": "MuiPaper-elevation18",
                                            "elevation19": "MuiPaper-elevation19",
                                            "elevation2": "MuiPaper-elevation2",
                                            "elevation20": "MuiPaper-elevation20",
                                            "elevation21": "MuiPaper-elevation21",
                                            "elevation22": "MuiPaper-elevation22",
                                            "elevation23": "MuiPaper-elevation23",
                                            "elevation24": "MuiPaper-elevation24",
                                            "elevation3": "MuiPaper-elevation3",
                                            "elevation4": "MuiPaper-elevation4",
                                            "elevation5": "MuiPaper-elevation5",
                                            "elevation6": "MuiPaper-elevation6",
                                            "elevation7": "MuiPaper-elevation7",
                                            "elevation8": "MuiPaper-elevation8",
                                            "elevation9": "MuiPaper-elevation9",
                                            "root": "MuiPaper-root",
                                            "rounded": "MuiPaper-rounded",
                                          }
                                        }
                                        component="header"
                                        elevation={4}
                                        square={true}
                                      >
                                        <header
                                          className="MuiPaper-root MuiPaper-elevation4 MuiAppBar-root MuiAppBar-positionStatic MuiAppBar-colorPrimary"
                                        >
                                          <WithStyles(ForwardRef(Toolbar))>
                                            <ForwardRef(Toolbar)
                                              classes={
                                                Object {
                                                  "dense": "MuiToolbar-dense",
                                                  "gutters": "MuiToolbar-gutters",
                                                  "regular": "MuiToolbar-regular",
                                                  "root": "MuiToolbar-root",
                                                }
                                              }
                                            >
                                              <div
                                                className="MuiToolbar-root MuiToolbar-regular MuiToolbar-gutters"
                                              >
                                                <WithStyles(ForwardRef(Typography))
                                                  className="makeStyles-title-2"
                                                  noWrap={true}
                                                  variant="h6"
                                                >
                                                  <ForwardRef(Typography)
                                                    className="makeStyles-title-2"
                                                    classes={
                                                      Object {
                                                        "alignCenter": "MuiTypography-alignCenter",
                                                        "alignJustify": "MuiTypography-alignJustify",
                                                        "alignLeft": "MuiTypography-alignLeft",
                                                        "alignRight": "MuiTypography-alignRight",
                                                        "body1": "MuiTypography-body1",
                                                        "body2": "MuiTypography-body2",
                                                        "button": "MuiTypography-button",
                                                        "caption": "MuiTypography-caption",
                                                        "colorError": "MuiTypography-colorError",
                                                        "colorInherit": "MuiTypography-colorInherit",
                                                        "colorPrimary": "MuiTypography-colorPrimary",
                                                        "colorSecondary": "MuiTypography-colorSecondary",
                                                        "colorTextPrimary": "MuiTypography-colorTextPrimary",
                                                        "colorTextSecondary": "MuiTypography-colorTextSecondary",
                                                        "displayBlock": "MuiTypography-displayBlock",
                                                        "displayInline": "MuiTypography-displayInline",
                                                        "gutterBottom": "MuiTypography-gutterBottom",
                                                        "h1": "MuiTypography-h1",
                                                        "h2": "MuiTypography-h2",
                                                        "h3": "MuiTypography-h3",
                                                        "h4": "MuiTypography-h4",
                                                        "h5": "MuiTypography-h5",
                                                        "h6": "MuiTypography-h6",
                                                        "noWrap": "MuiTypography-noWrap",
                                                        "overline": "MuiTypography-overline",
                                                        "paragraph": "MuiTypography-paragraph",
                                                        "root": "MuiTypography-root",
                                                        "srOnly": "MuiTypography-srOnly",
                                                        "subtitle1": "MuiTypography-subtitle1",
                                                        "subtitle2": "MuiTypography-subtitle2",
                                                      }
                                                    }
                                                    noWrap={true}
                                                    theme={
                                                      Object {
                                                        "breakpoints": Object {
                                                          "between": [Function],
                                                          "down": [Function],
                                                          "keys": Array [
                                                            "xs",
                                                            "sm",
                                                            "md",
                                                            "lg",
                                                            "xl",
                                                          ],
                                                          "only": [Function],
                                                          "up": [Function],
                                                          "values": Object {
                                                            "lg": 1280,
                                                            "md": 960,
                                                            "sm": 600,
                                                            "xl": 1920,
                                                            "xs": 0,
                                                          },
                                                          "width": [Function],
                                                        },
                                                        "direction": "ltr",
                                                        "mixins": Object {
                                                          "gutters": [Function],
                                                          "toolbar": Object {
                                                            "@media (min-width:0px) and (orientation: landscape)": Object {
                                                              "minHeight": 48,
                                                            },
                                                            "@media (min-width:600px)": Object {
                                                              "minHeight": 64,
                                                            },
                                                            "minHeight": 56,
                                                          },
                                                        },
                                                        "overrides": Object {},
                                                        "palette": Object {
                                                          "action": Object {
                                                            "active": "rgba(0, 0, 0, 0.54)",
                                                            "disabled": "rgba(0, 0, 0, 0.26)",
                                                            "disabledBackground": "rgba(0, 0, 0, 0.12)",
                                                            "hover": "rgba(0, 0, 0, 0.08)",
                                                            "hoverOpacity": 0.08,
                                                            "selected": "rgba(0, 0, 0, 0.14)",
                                                          },
                                                          "augmentColor": [Function],
                                                          "background": Object {
                                                            "default": "#fafafa",
                                                            "paper": "#fff",
                                                          },
                                                          "common": Object {
                                                            "black": "#000",
                                                            "white": "#fff",
                                                          },
                                                          "contrastThreshold": 3,
                                                          "divider": "rgba(0, 0, 0, 0.12)",
                                                          "error": Object {
                                                            "contrastText": "#fff",
                                                            "dark": "#d32f2f",
                                                            "light": "#e57373",
                                                            "main": "#f44336",
                                                          },
                                                          "getContrastText": [Function],
                                                          "grey": Object {
                                                            "100": "#f5f5f5",
                                                            "200": "#eeeeee",
                                                            "300": "#e0e0e0",
                                                            "400": "#bdbdbd",
                                                            "50": "#fafafa",
                                                            "500": "#9e9e9e",
                                                            "600": "#757575",
                                                            "700": "#616161",
                                                            "800": "#424242",
                                                            "900": "#212121",
                                                            "A100": "#d5d5d5",
                                                            "A200": "#aaaaaa",
                                                            "A400": "#303030",
                                                            "A700": "#616161",
                                                          },
                                                          "primary": Object {
                                                            "contrastText": "#fff",
                                                            "dark": "#303f9f",
                                                            "light": "#7986cb",
                                                            "main": "#3f51b5",
                                                          },
                                                          "secondary": Object {
                                                            "contrastText": "#fff",
                                                            "dark": "#c51162",
                                                            "light": "#ff4081",
                                                            "main": "#f50057",
                                                          },
                                                          "text": Object {
                                                            "disabled": "rgba(0, 0, 0, 0.38)",
                                                            "hint": "rgba(0, 0, 0, 0.38)",
                                                            "primary": "rgba(0, 0, 0, 0.87)",
                                                            "secondary": "rgba(0, 0, 0, 0.54)",
                                                          },
                                                          "tonalOffset": 0.2,
                                                          "type": "light",
                                                        },
                                                        "props": Object {},
                                                        "shadows": Array [
                                                          "none",
                                                          "0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)",
                                                          "0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)",
                                                          "0px 1px 8px 0px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 3px 3px -2px rgba(0,0,0,0.12)",
                                                          "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
                                                          "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
                                                          "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
                                                          "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
                                                          "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
                                                          "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
                                                          "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
                                                          "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
                                                          "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
                                                          "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
                                                          "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
                                                          "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
                                                          "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
                                                          "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
                                                          "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
                                                          "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
                                                          "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
                                                          "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
                                                          "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
                                                          "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
                                                          "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
                                                        ],
                                                        "shape": Object {
                                                          "borderRadius": 4,
                                                        },
                                                        "spacing": [Function],
                                                        "transitions": Object {
                                                          "create": [Function],
                                                          "duration": Object {
                                                            "complex": 375,
                                                            "enteringScreen": 225,
                                                            "leavingScreen": 195,
                                                            "short": 250,
                                                            "shorter": 200,
                                                            "shortest": 150,
                                                            "standard": 300,
                                                          },
                                                          "easing": Object {
                                                            "easeIn": "cubic-bezier(0.4, 0, 1, 1)",
                                                            "easeInOut": "cubic-bezier(0.4, 0, 0.2, 1)",
                                                            "easeOut": "cubic-bezier(0.0, 0, 0.2, 1)",
                                                            "sharp": "cubic-bezier(0.4, 0, 0.6, 1)",
                                                          },
                                                          "getAutoHeightDuration": [Function],
                                                        },
                                                        "typography": Object {
                                                          "body1": Object {
                                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                            "fontSize": "1rem",
                                                            "fontWeight": 400,
                                                            "letterSpacing": "0.00938em",
                                                            "lineHeight": 1.5,
                                                          },
                                                          "body2": Object {
                                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                            "fontSize": "0.875rem",
                                                            "fontWeight": 400,
                                                            "letterSpacing": "0.01071em",
                                                            "lineHeight": 1.43,
                                                          },
                                                          "button": Object {
                                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                            "fontSize": "0.875rem",
                                                            "fontWeight": 500,
                                                            "letterSpacing": "0.02857em",
                                                            "lineHeight": 1.75,
                                                            "textTransform": "uppercase",
                                                          },
                                                          "caption": Object {
                                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                            "fontSize": "0.75rem",
                                                            "fontWeight": 400,
                                                            "letterSpacing": "0.03333em",
                                                            "lineHeight": 1.66,
                                                          },
                                                          "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                          "fontSize": 14,
                                                          "fontWeightBold": 700,
                                                          "fontWeightLight": 300,
                                                          "fontWeightMedium": 500,
                                                          "fontWeightRegular": 400,
                                                          "h1": Object {
                                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                            "fontSize": "6rem",
                                                            "fontWeight": 300,
                                                            "letterSpacing": "-0.01562em",
                                                            "lineHeight": 1,
                                                          },
                                                          "h2": Object {
                                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                            "fontSize": "3.75rem",
                                                            "fontWeight": 300,
                                                            "letterSpacing": "-0.00833em",
                                                            "lineHeight": 1,
                                                          },
                                                          "h3": Object {
                                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                            "fontSize": "3rem",
                                                            "fontWeight": 400,
                                                            "letterSpacing": "0em",
                                                            "lineHeight": 1.04,
                                                          },
                                                          "h4": Object {
                                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                            "fontSize": "2.125rem",
                                                            "fontWeight": 400,
                                                            "letterSpacing": "0.00735em",
                                                            "lineHeight": 1.17,
                                                          },
                                                          "h5": Object {
                                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                            "fontSize": "1.5rem",
                                                            "fontWeight": 400,
                                                            "letterSpacing": "0em",
                                                            "lineHeight": 1.33,
                                                          },
                                                          "h6": Object {
                                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                            "fontSize": "1.25rem",
                                                            "fontWeight": 500,
                                                            "letterSpacing": "0.0075em",
                                                            "lineHeight": 1.6,
                                                          },
                                                          "htmlFontSize": 16,
                                                          "overline": Object {
                                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                            "fontSize": "0.75rem",
                                                            "fontWeight": 400,
                                                            "letterSpacing": "0.08333em",
                                                            "lineHeight": 2.66,
                                                            "textTransform": "uppercase",
                                                          },
                                                          "pxToRem": [Function],
                                                          "round": [Function],
                                                          "subtitle1": Object {
                                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                            "fontSize": "1rem",
                                                            "fontWeight": 400,
                                                            "letterSpacing": "0.00938em",
                                                            "lineHeight": 1.75,
                                                          },
                                                          "subtitle2": Object {
                                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                            "fontSize": "0.875rem",
                                                            "fontWeight": 500,
                                                            "letterSpacing": "0.00714em",
                                                            "lineHeight": 1.57,
                                                          },
                                                        },
                                                        "zIndex": Object {
                                                          "appBar": 1100,
                                                          "drawer": 1200,
                                                          "mobileStepper": 1000,
                                                          "modal": 1300,
                                                          "snackbar": 1400,
                                                          "tooltip": 1500,
                                                        },
                                                      }
                                                    }
                                                    variant="h6"
                                                  >
                                                    <h6
                                                      className="MuiTypography-root makeStyles-title-2 MuiTypography-h6 MuiTypography-noWrap"
                                                    >
                                                      Drone For You
                                                    </h6>
                                                  </ForwardRef(Typography)>
                                                </WithStyles(ForwardRef(Typography))>
                                                <div
                                                  className="makeStyles-grow-1"
                                                />
                                                <WithStyles(ForwardRef(Typography))
                                                  noWrap={true}
                                                >
                                                  <ForwardRef(Typography)
                                                    classes={
                                                      Object {
                                                        "alignCenter": "MuiTypography-alignCenter",
                                                        "alignJustify": "MuiTypography-alignJustify",
                                                        "alignLeft": "MuiTypography-alignLeft",
                                                        "alignRight": "MuiTypography-alignRight",
                                                        "body1": "MuiTypography-body1",
                                                        "body2": "MuiTypography-body2",
                                                        "button": "MuiTypography-button",
                                                        "caption": "MuiTypography-caption",
                                                        "colorError": "MuiTypography-colorError",
                                                        "colorInherit": "MuiTypography-colorInherit",
                                                        "colorPrimary": "MuiTypography-colorPrimary",
                                                        "colorSecondary": "MuiTypography-colorSecondary",
                                                        "colorTextPrimary": "MuiTypography-colorTextPrimary",
                                                        "colorTextSecondary": "MuiTypography-colorTextSecondary",
                                                        "displayBlock": "MuiTypography-displayBlock",
                                                        "displayInline": "MuiTypography-displayInline",
                                                        "gutterBottom": "MuiTypography-gutterBottom",
                                                        "h1": "MuiTypography-h1",
                                                        "h2": "MuiTypography-h2",
                                                        "h3": "MuiTypography-h3",
                                                        "h4": "MuiTypography-h4",
                                                        "h5": "MuiTypography-h5",
                                                        "h6": "MuiTypography-h6",
                                                        "noWrap": "MuiTypography-noWrap",
                                                        "overline": "MuiTypography-overline",
                                                        "paragraph": "MuiTypography-paragraph",
                                                        "root": "MuiTypography-root",
                                                        "srOnly": "MuiTypography-srOnly",
                                                        "subtitle1": "MuiTypography-subtitle1",
                                                        "subtitle2": "MuiTypography-subtitle2",
                                                      }
                                                    }
                                                    noWrap={true}
                                                    theme={
                                                      Object {
                                                        "breakpoints": Object {
                                                          "between": [Function],
                                                          "down": [Function],
                                                          "keys": Array [
                                                            "xs",
                                                            "sm",
                                                            "md",
                                                            "lg",
                                                            "xl",
                                                          ],
                                                          "only": [Function],
                                                          "up": [Function],
                                                          "values": Object {
                                                            "lg": 1280,
                                                            "md": 960,
                                                            "sm": 600,
                                                            "xl": 1920,
                                                            "xs": 0,
                                                          },
                                                          "width": [Function],
                                                        },
                                                        "direction": "ltr",
                                                        "mixins": Object {
                                                          "gutters": [Function],
                                                          "toolbar": Object {
                                                            "@media (min-width:0px) and (orientation: landscape)": Object {
                                                              "minHeight": 48,
                                                            },
                                                            "@media (min-width:600px)": Object {
                                                              "minHeight": 64,
                                                            },
                                                            "minHeight": 56,
                                                          },
                                                        },
                                                        "overrides": Object {},
                                                        "palette": Object {
                                                          "action": Object {
                                                            "active": "rgba(0, 0, 0, 0.54)",
                                                            "disabled": "rgba(0, 0, 0, 0.26)",
                                                            "disabledBackground": "rgba(0, 0, 0, 0.12)",
                                                            "hover": "rgba(0, 0, 0, 0.08)",
                                                            "hoverOpacity": 0.08,
                                                            "selected": "rgba(0, 0, 0, 0.14)",
                                                          },
                                                          "augmentColor": [Function],
                                                          "background": Object {
                                                            "default": "#fafafa",
                                                            "paper": "#fff",
                                                          },
                                                          "common": Object {
                                                            "black": "#000",
                                                            "white": "#fff",
                                                          },
                                                          "contrastThreshold": 3,
                                                          "divider": "rgba(0, 0, 0, 0.12)",
                                                          "error": Object {
                                                            "contrastText": "#fff",
                                                            "dark": "#d32f2f",
                                                            "light": "#e57373",
                                                            "main": "#f44336",
                                                          },
                                                          "getContrastText": [Function],
                                                          "grey": Object {
                                                            "100": "#f5f5f5",
                                                            "200": "#eeeeee",
                                                            "300": "#e0e0e0",
                                                            "400": "#bdbdbd",
                                                            "50": "#fafafa",
                                                            "500": "#9e9e9e",
                                                            "600": "#757575",
                                                            "700": "#616161",
                                                            "800": "#424242",
                                                            "900": "#212121",
                                                            "A100": "#d5d5d5",
                                                            "A200": "#aaaaaa",
                                                            "A400": "#303030",
                                                            "A700": "#616161",
                                                          },
                                                          "primary": Object {
                                                            "contrastText": "#fff",
                                                            "dark": "#303f9f",
                                                            "light": "#7986cb",
                                                            "main": "#3f51b5",
                                                          },
                                                          "secondary": Object {
                                                            "contrastText": "#fff",
                                                            "dark": "#c51162",
                                                            "light": "#ff4081",
                                                            "main": "#f50057",
                                                          },
                                                          "text": Object {
                                                            "disabled": "rgba(0, 0, 0, 0.38)",
                                                            "hint": "rgba(0, 0, 0, 0.38)",
                                                            "primary": "rgba(0, 0, 0, 0.87)",
                                                            "secondary": "rgba(0, 0, 0, 0.54)",
                                                          },
                                                          "tonalOffset": 0.2,
                                                          "type": "light",
                                                        },
                                                        "props": Object {},
                                                        "shadows": Array [
                                                          "none",
                                                          "0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)",
                                                          "0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)",
                                                          "0px 1px 8px 0px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 3px 3px -2px rgba(0,0,0,0.12)",
                                                          "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
                                                          "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
                                                          "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
                                                          "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
                                                          "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
                                                          "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
                                                          "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
                                                          "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
                                                          "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
                                                          "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
                                                          "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
                                                          "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
                                                          "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
                                                          "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
                                                          "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
                                                          "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
                                                          "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
                                                          "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
                                                          "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
                                                          "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
                                                          "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
                                                        ],
                                                        "shape": Object {
                                                          "borderRadius": 4,
                                                        },
                                                        "spacing": [Function],
                                                        "transitions": Object {
                                                          "create": [Function],
                                                          "duration": Object {
                                                            "complex": 375,
                                                            "enteringScreen": 225,
                                                            "leavingScreen": 195,
                                                            "short": 250,
                                                            "shorter": 200,
                                                            "shortest": 150,
                                                            "standard": 300,
                                                          },
                                                          "easing": Object {
                                                            "easeIn": "cubic-bezier(0.4, 0, 1, 1)",
                                                            "easeInOut": "cubic-bezier(0.4, 0, 0.2, 1)",
                                                            "easeOut": "cubic-bezier(0.0, 0, 0.2, 1)",
                                                            "sharp": "cubic-bezier(0.4, 0, 0.6, 1)",
                                                          },
                                                          "getAutoHeightDuration": [Function],
                                                        },
                                                        "typography": Object {
                                                          "body1": Object {
                                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                            "fontSize": "1rem",
                                                            "fontWeight": 400,
                                                            "letterSpacing": "0.00938em",
                                                            "lineHeight": 1.5,
                                                          },
                                                          "body2": Object {
                                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                            "fontSize": "0.875rem",
                                                            "fontWeight": 400,
                                                            "letterSpacing": "0.01071em",
                                                            "lineHeight": 1.43,
                                                          },
                                                          "button": Object {
                                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                            "fontSize": "0.875rem",
                                                            "fontWeight": 500,
                                                            "letterSpacing": "0.02857em",
                                                            "lineHeight": 1.75,
                                                            "textTransform": "uppercase",
                                                          },
                                                          "caption": Object {
                                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                            "fontSize": "0.75rem",
                                                            "fontWeight": 400,
                                                            "letterSpacing": "0.03333em",
                                                            "lineHeight": 1.66,
                                                          },
                                                          "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                          "fontSize": 14,
                                                          "fontWeightBold": 700,
                                                          "fontWeightLight": 300,
                                                          "fontWeightMedium": 500,
                                                          "fontWeightRegular": 400,
                                                          "h1": Object {
                                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                            "fontSize": "6rem",
                                                            "fontWeight": 300,
                                                            "letterSpacing": "-0.01562em",
                                                            "lineHeight": 1,
                                                          },
                                                          "h2": Object {
                                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                            "fontSize": "3.75rem",
                                                            "fontWeight": 300,
                                                            "letterSpacing": "-0.00833em",
                                                            "lineHeight": 1,
                                                          },
                                                          "h3": Object {
                                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                            "fontSize": "3rem",
                                                            "fontWeight": 400,
                                                            "letterSpacing": "0em",
                                                            "lineHeight": 1.04,
                                                          },
                                                          "h4": Object {
                                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                            "fontSize": "2.125rem",
                                                            "fontWeight": 400,
                                                            "letterSpacing": "0.00735em",
                                                            "lineHeight": 1.17,
                                                          },
                                                          "h5": Object {
                                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                            "fontSize": "1.5rem",
                                                            "fontWeight": 400,
                                                            "letterSpacing": "0em",
                                                            "lineHeight": 1.33,
                                                          },
                                                          "h6": Object {
                                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                            "fontSize": "1.25rem",
                                                            "fontWeight": 500,
                                                            "letterSpacing": "0.0075em",
                                                            "lineHeight": 1.6,
                                                          },
                                                          "htmlFontSize": 16,
                                                          "overline": Object {
                                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                            "fontSize": "0.75rem",
                                                            "fontWeight": 400,
                                                            "letterSpacing": "0.08333em",
                                                            "lineHeight": 2.66,
                                                            "textTransform": "uppercase",
                                                          },
                                                          "pxToRem": [Function],
                                                          "round": [Function],
                                                          "subtitle1": Object {
                                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                            "fontSize": "1rem",
                                                            "fontWeight": 400,
                                                            "letterSpacing": "0.00938em",
                                                            "lineHeight": 1.75,
                                                          },
                                                          "subtitle2": Object {
                                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                            "fontSize": "0.875rem",
                                                            "fontWeight": 500,
                                                            "letterSpacing": "0.00714em",
                                                            "lineHeight": 1.57,
                                                          },
                                                        },
                                                        "zIndex": Object {
                                                          "appBar": 1100,
                                                          "drawer": 1200,
                                                          "mobileStepper": 1000,
                                                          "modal": 1300,
                                                          "snackbar": 1400,
                                                          "tooltip": 1500,
                                                        },
                                                      }
                                                    }
                                                  >
                                                    <p
                                                      className="MuiTypography-root MuiTypography-body1 MuiTypography-noWrap"
                                                    >
                                                       
                                                    </p>
                                                  </ForwardRef(Typography)>
                                                </WithStyles(ForwardRef(Typography))>
                                                <div
                                                  className="makeStyles-grow-1"
                                                />
                                                <WithStyles(ForwardRef(Button))
                                                  className="margin3"
                                                  color="primary"
                                                  disabled={true}
                                                  onClick={[Function]}
                                                  variant="contained"
                                                >
                                                  <ForwardRef(Button)
                                                    className="margin3"
                                                    classes={
                                                      Object {
                                                        "colorInherit": "MuiButton-colorInherit",
                                                        "contained": "MuiButton-contained",
                                                        "containedPrimary": "MuiButton-containedPrimary",
                                                        "containedSecondary": "MuiButton-containedSecondary",
                                                        "disabled": "Mui-disabled",
                                                        "focusVisible": "Mui-focusVisible",
                                                        "fullWidth": "MuiButton-fullWidth",
                                                        "label": "MuiButton-label",
                                                        "outlined": "MuiButton-outlined",
                                                        "outlinedPrimary": "MuiButton-outlinedPrimary",
                                                        "outlinedSecondary": "MuiButton-outlinedSecondary",
                                                        "root": "MuiButton-root",
                                                        "sizeLarge": "MuiButton-sizeLarge",
                                                        "sizeSmall": "MuiButton-sizeSmall",
                                                        "text": "MuiButton-text",
                                                        "textPrimary": "MuiButton-textPrimary",
                                                        "textSecondary": "MuiButton-textSecondary",
                                                      }
                                                    }
                                                    color="primary"
                                                    disabled={true}
                                                    onClick={[Function]}
                                                    variant="contained"
                                                  >
                                                    <WithStyles(ForwardRef(ButtonBase))
                                                      className="MuiButton-root margin3 MuiButton-contained MuiButton-containedPrimary Mui-disabled"
                                                      component="button"
                                                      disabled={true}
                                                      focusRipple={true}
                                                      focusVisibleClassName="Mui-focusVisible"
                                                      onClick={[Function]}
                                                      type="button"
                                                    >
                                                      <ForwardRef(ButtonBase)
                                                        className="MuiButton-root margin3 MuiButton-contained MuiButton-containedPrimary Mui-disabled"
                                                        classes={
                                                          Object {
                                                            "disabled": "Mui-disabled",
                                                            "focusVisible": "Mui-focusVisible",
                                                            "root": "MuiButtonBase-root",
                                                          }
                                                        }
                                                        component="button"
                                                        disabled={true}
                                                        focusRipple={true}
                                                        focusVisibleClassName="Mui-focusVisible"
                                                        onClick={[Function]}
                                                        type="button"
                                                      >
                                                        <button
                                                          className="MuiButtonBase-root MuiButton-root margin3 MuiButton-contained MuiButton-containedPrimary Mui-disabled Mui-disabled"
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
                                                            Return Drone
                                                          </span>
                                                        </button>
                                                      </ForwardRef(ButtonBase)>
                                                    </WithStyles(ForwardRef(ButtonBase))>
                                                  </ForwardRef(Button)>
                                                </WithStyles(ForwardRef(Button))>
                                                <div
                                                  className="makeStyles-grow-1"
                                                />
                                                <b>
                                                   
                                                  , 
                                                   
                                                </b>
                                                <div
                                                  className="makeStyles-sectionDesktop-3"
                                                >
                                                  <WithStyles(ForwardRef(IconButton))
                                                    aria-controls="profile-account-menu"
                                                    aria-haspopup="true"
                                                    aria-label="Account of current user"
                                                    color="inherit"
                                                    edge="end"
                                                    onClick={[Function]}
                                                  >
                                                    <ForwardRef(IconButton)
                                                      aria-controls="profile-account-menu"
                                                      aria-haspopup="true"
                                                      aria-label="Account of current user"
                                                      classes={
                                                        Object {
                                                          "colorInherit": "MuiIconButton-colorInherit",
                                                          "colorPrimary": "MuiIconButton-colorPrimary",
                                                          "colorSecondary": "MuiIconButton-colorSecondary",
                                                          "disabled": "Mui-disabled",
                                                          "edgeEnd": "MuiIconButton-edgeEnd",
                                                          "edgeStart": "MuiIconButton-edgeStart",
                                                          "label": "MuiIconButton-label",
                                                          "root": "MuiIconButton-root",
                                                          "sizeSmall": "MuiIconButton-sizeSmall",
                                                        }
                                                      }
                                                      color="inherit"
                                                      edge="end"
                                                      onClick={[Function]}
                                                    >
                                                      <WithStyles(ForwardRef(ButtonBase))
                                                        aria-controls="profile-account-menu"
                                                        aria-haspopup="true"
                                                        aria-label="Account of current user"
                                                        centerRipple={true}
                                                        className="MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-edgeEnd"
                                                        disabled={false}
                                                        focusRipple={true}
                                                        onClick={[Function]}
                                                      >
                                                        <ForwardRef(ButtonBase)
                                                          aria-controls="profile-account-menu"
                                                          aria-haspopup="true"
                                                          aria-label="Account of current user"
                                                          centerRipple={true}
                                                          className="MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-edgeEnd"
                                                          classes={
                                                            Object {
                                                              "disabled": "Mui-disabled",
                                                              "focusVisible": "Mui-focusVisible",
                                                              "root": "MuiButtonBase-root",
                                                            }
                                                          }
                                                          disabled={false}
                                                          focusRipple={true}
                                                          onClick={[Function]}
                                                        >
                                                          <button
                                                            aria-controls="profile-account-menu"
                                                            aria-haspopup="true"
                                                            aria-label="Account of current user"
                                                            className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-edgeEnd"
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
                                                              className="MuiIconButton-label"
                                                            >
                                                              <ForwardRef>
                                                                <WithStyles(ForwardRef(SvgIcon))>
                                                                  <ForwardRef(SvgIcon)
                                                                    classes={
                                                                      Object {
                                                                        "colorAction": "MuiSvgIcon-colorAction",
                                                                        "colorDisabled": "MuiSvgIcon-colorDisabled",
                                                                        "colorError": "MuiSvgIcon-colorError",
                                                                        "colorPrimary": "MuiSvgIcon-colorPrimary",
                                                                        "colorSecondary": "MuiSvgIcon-colorSecondary",
                                                                        "fontSizeInherit": "MuiSvgIcon-fontSizeInherit",
                                                                        "fontSizeLarge": "MuiSvgIcon-fontSizeLarge",
                                                                        "fontSizeSmall": "MuiSvgIcon-fontSizeSmall",
                                                                        "root": "MuiSvgIcon-root",
                                                                      }
                                                                    }
                                                                  >
                                                                    <svg
                                                                      aria-hidden="true"
                                                                      className="MuiSvgIcon-root"
                                                                      focusable="false"
                                                                      role="presentation"
                                                                      viewBox="0 0 24 24"
                                                                    >
                                                                      <path
                                                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
                                                                      />
                                                                    </svg>
                                                                  </ForwardRef(SvgIcon)>
                                                                </WithStyles(ForwardRef(SvgIcon))>
                                                              </ForwardRef>
                                                            </span>
                                                            <NoSsr>
                                                              <WithStyles(undefined)
                                                                center={true}
                                                              >
                                                                <ForwardRef(TouchRipple)
                                                                  center={true}
                                                                  classes={
                                                                    Object {
                                                                      "child": "MuiTouchRipple-child",
                                                                      "childLeaving": "MuiTouchRipple-childLeaving",
                                                                      "childPulsate": "MuiTouchRipple-childPulsate",
                                                                      "ripple": "MuiTouchRipple-ripple",
                                                                      "ripplePulsate": "MuiTouchRipple-ripplePulsate",
                                                                      "rippleVisible": "MuiTouchRipple-rippleVisible",
                                                                      "root": "MuiTouchRipple-root",
                                                                    }
                                                                  }
                                                                >
                                                                  <span
                                                                    className="MuiTouchRipple-root"
                                                                  >
                                                                    <TransitionGroup
                                                                      childFactory={[Function]}
                                                                      component={null}
                                                                      exit={true}
                                                                    />
                                                                  </span>
                                                                </ForwardRef(TouchRipple)>
                                                              </WithStyles(undefined)>
                                                            </NoSsr>
                                                          </button>
                                                        </ForwardRef(ButtonBase)>
                                                      </WithStyles(ForwardRef(ButtonBase))>
                                                    </ForwardRef(IconButton)>
                                                  </WithStyles(ForwardRef(IconButton))>
                                                </div>
                                              </div>
                                            </ForwardRef(Toolbar)>
                                          </WithStyles(ForwardRef(Toolbar))>
                                        </header>
                                      </ForwardRef(Paper)>
                                    </WithStyles(ForwardRef(Paper))>
                                  </ForwardRef(AppBar)>
                                </WithStyles(ForwardRef(AppBar))>
                                <WithStyles(ForwardRef(Menu))
                                  anchorEl={null}
                                  anchorOrigin={
                                    Object {
                                      "horizontal": "right",
                                      "vertical": "top",
                                    }
                                  }
                                  id="profile-account-menu"
                                  keepMounted={true}
                                  onClose={[Function]}
                                  open={false}
                                  transformOrigin={
                                    Object {
                                      "horizontal": "right",
                                      "vertical": "top",
                                    }
                                  }
                                >
                                  <ForwardRef(Menu)
                                    anchorEl={null}
                                    anchorOrigin={
                                      Object {
                                        "horizontal": "right",
                                        "vertical": "top",
                                      }
                                    }
                                    classes={
                                      Object {
                                        "list": "MuiMenu-list",
                                        "paper": "MuiMenu-paper",
                                      }
                                    }
                                    id="profile-account-menu"
                                    keepMounted={true}
                                    onClose={[Function]}
                                    open={false}
                                    theme={
                                      Object {
                                        "breakpoints": Object {
                                          "between": [Function],
                                          "down": [Function],
                                          "keys": Array [
                                            "xs",
                                            "sm",
                                            "md",
                                            "lg",
                                            "xl",
                                          ],
                                          "only": [Function],
                                          "up": [Function],
                                          "values": Object {
                                            "lg": 1280,
                                            "md": 960,
                                            "sm": 600,
                                            "xl": 1920,
                                            "xs": 0,
                                          },
                                          "width": [Function],
                                        },
                                        "direction": "ltr",
                                        "mixins": Object {
                                          "gutters": [Function],
                                          "toolbar": Object {
                                            "@media (min-width:0px) and (orientation: landscape)": Object {
                                              "minHeight": 48,
                                            },
                                            "@media (min-width:600px)": Object {
                                              "minHeight": 64,
                                            },
                                            "minHeight": 56,
                                          },
                                        },
                                        "overrides": Object {},
                                        "palette": Object {
                                          "action": Object {
                                            "active": "rgba(0, 0, 0, 0.54)",
                                            "disabled": "rgba(0, 0, 0, 0.26)",
                                            "disabledBackground": "rgba(0, 0, 0, 0.12)",
                                            "hover": "rgba(0, 0, 0, 0.08)",
                                            "hoverOpacity": 0.08,
                                            "selected": "rgba(0, 0, 0, 0.14)",
                                          },
                                          "augmentColor": [Function],
                                          "background": Object {
                                            "default": "#fafafa",
                                            "paper": "#fff",
                                          },
                                          "common": Object {
                                            "black": "#000",
                                            "white": "#fff",
                                          },
                                          "contrastThreshold": 3,
                                          "divider": "rgba(0, 0, 0, 0.12)",
                                          "error": Object {
                                            "contrastText": "#fff",
                                            "dark": "#d32f2f",
                                            "light": "#e57373",
                                            "main": "#f44336",
                                          },
                                          "getContrastText": [Function],
                                          "grey": Object {
                                            "100": "#f5f5f5",
                                            "200": "#eeeeee",
                                            "300": "#e0e0e0",
                                            "400": "#bdbdbd",
                                            "50": "#fafafa",
                                            "500": "#9e9e9e",
                                            "600": "#757575",
                                            "700": "#616161",
                                            "800": "#424242",
                                            "900": "#212121",
                                            "A100": "#d5d5d5",
                                            "A200": "#aaaaaa",
                                            "A400": "#303030",
                                            "A700": "#616161",
                                          },
                                          "primary": Object {
                                            "contrastText": "#fff",
                                            "dark": "#303f9f",
                                            "light": "#7986cb",
                                            "main": "#3f51b5",
                                          },
                                          "secondary": Object {
                                            "contrastText": "#fff",
                                            "dark": "#c51162",
                                            "light": "#ff4081",
                                            "main": "#f50057",
                                          },
                                          "text": Object {
                                            "disabled": "rgba(0, 0, 0, 0.38)",
                                            "hint": "rgba(0, 0, 0, 0.38)",
                                            "primary": "rgba(0, 0, 0, 0.87)",
                                            "secondary": "rgba(0, 0, 0, 0.54)",
                                          },
                                          "tonalOffset": 0.2,
                                          "type": "light",
                                        },
                                        "props": Object {},
                                        "shadows": Array [
                                          "none",
                                          "0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)",
                                          "0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)",
                                          "0px 1px 8px 0px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 3px 3px -2px rgba(0,0,0,0.12)",
                                          "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
                                          "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
                                          "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
                                          "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
                                          "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
                                          "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
                                          "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
                                          "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
                                          "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
                                          "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
                                          "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
                                          "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
                                          "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
                                          "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
                                          "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
                                          "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
                                          "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
                                          "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
                                          "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
                                          "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
                                          "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
                                        ],
                                        "shape": Object {
                                          "borderRadius": 4,
                                        },
                                        "spacing": [Function],
                                        "transitions": Object {
                                          "create": [Function],
                                          "duration": Object {
                                            "complex": 375,
                                            "enteringScreen": 225,
                                            "leavingScreen": 195,
                                            "short": 250,
                                            "shorter": 200,
                                            "shortest": 150,
                                            "standard": 300,
                                          },
                                          "easing": Object {
                                            "easeIn": "cubic-bezier(0.4, 0, 1, 1)",
                                            "easeInOut": "cubic-bezier(0.4, 0, 0.2, 1)",
                                            "easeOut": "cubic-bezier(0.0, 0, 0.2, 1)",
                                            "sharp": "cubic-bezier(0.4, 0, 0.6, 1)",
                                          },
                                          "getAutoHeightDuration": [Function],
                                        },
                                        "typography": Object {
                                          "body1": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "1rem",
                                            "fontWeight": 400,
                                            "letterSpacing": "0.00938em",
                                            "lineHeight": 1.5,
                                          },
                                          "body2": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "0.875rem",
                                            "fontWeight": 400,
                                            "letterSpacing": "0.01071em",
                                            "lineHeight": 1.43,
                                          },
                                          "button": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "0.875rem",
                                            "fontWeight": 500,
                                            "letterSpacing": "0.02857em",
                                            "lineHeight": 1.75,
                                            "textTransform": "uppercase",
                                          },
                                          "caption": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "0.75rem",
                                            "fontWeight": 400,
                                            "letterSpacing": "0.03333em",
                                            "lineHeight": 1.66,
                                          },
                                          "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                          "fontSize": 14,
                                          "fontWeightBold": 700,
                                          "fontWeightLight": 300,
                                          "fontWeightMedium": 500,
                                          "fontWeightRegular": 400,
                                          "h1": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "6rem",
                                            "fontWeight": 300,
                                            "letterSpacing": "-0.01562em",
                                            "lineHeight": 1,
                                          },
                                          "h2": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "3.75rem",
                                            "fontWeight": 300,
                                            "letterSpacing": "-0.00833em",
                                            "lineHeight": 1,
                                          },
                                          "h3": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "3rem",
                                            "fontWeight": 400,
                                            "letterSpacing": "0em",
                                            "lineHeight": 1.04,
                                          },
                                          "h4": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "2.125rem",
                                            "fontWeight": 400,
                                            "letterSpacing": "0.00735em",
                                            "lineHeight": 1.17,
                                          },
                                          "h5": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "1.5rem",
                                            "fontWeight": 400,
                                            "letterSpacing": "0em",
                                            "lineHeight": 1.33,
                                          },
                                          "h6": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "1.25rem",
                                            "fontWeight": 500,
                                            "letterSpacing": "0.0075em",
                                            "lineHeight": 1.6,
                                          },
                                          "htmlFontSize": 16,
                                          "overline": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "0.75rem",
                                            "fontWeight": 400,
                                            "letterSpacing": "0.08333em",
                                            "lineHeight": 2.66,
                                            "textTransform": "uppercase",
                                          },
                                          "pxToRem": [Function],
                                          "round": [Function],
                                          "subtitle1": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "1rem",
                                            "fontWeight": 400,
                                            "letterSpacing": "0.00938em",
                                            "lineHeight": 1.75,
                                          },
                                          "subtitle2": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "0.875rem",
                                            "fontWeight": 500,
                                            "letterSpacing": "0.00714em",
                                            "lineHeight": 1.57,
                                          },
                                        },
                                        "zIndex": Object {
                                          "appBar": 1100,
                                          "drawer": 1200,
                                          "mobileStepper": 1000,
                                          "modal": 1300,
                                          "snackbar": 1400,
                                          "tooltip": 1500,
                                        },
                                      }
                                    }
                                    transformOrigin={
                                      Object {
                                        "horizontal": "right",
                                        "vertical": "top",
                                      }
                                    }
                                  >
                                    <WithStyles(ForwardRef(Popover))
                                      PaperProps={
                                        Object {
                                          "classes": Object {
                                            "root": "MuiMenu-paper",
                                          },
                                        }
                                      }
                                      anchorEl={null}
                                      anchorOrigin={
                                        Object {
                                          "horizontal": "right",
                                          "vertical": "top",
                                        }
                                      }
                                      getContentAnchorEl={[Function]}
                                      id="profile-account-menu"
                                      keepMounted={true}
                                      onClose={[Function]}
                                      onEntering={[Function]}
                                      open={false}
                                      transformOrigin={
                                        Object {
                                          "horizontal": "right",
                                          "vertical": "top",
                                        }
                                      }
                                      transitionDuration="auto"
                                    >
                                      <ForwardRef(Popover)
                                        PaperProps={
                                          Object {
                                            "classes": Object {
                                              "root": "MuiMenu-paper",
                                            },
                                          }
                                        }
                                        anchorEl={null}
                                        anchorOrigin={
                                          Object {
                                            "horizontal": "right",
                                            "vertical": "top",
                                          }
                                        }
                                        classes={
                                          Object {
                                            "paper": "MuiPopover-paper",
                                          }
                                        }
                                        getContentAnchorEl={[Function]}
                                        id="profile-account-menu"
                                        keepMounted={true}
                                        onClose={[Function]}
                                        onEntering={[Function]}
                                        open={false}
                                        transformOrigin={
                                          Object {
                                            "horizontal": "right",
                                            "vertical": "top",
                                          }
                                        }
                                        transitionDuration="auto"
                                      >
                                        <ForwardRef(Modal)
                                          BackdropProps={
                                            Object {
                                              "invisible": true,
                                            }
                                          }
                                          id="profile-account-menu"
                                          keepMounted={true}
                                          onClose={[Function]}
                                          open={false}
                                        >
                                          <ForwardRef(Portal)
                                            disablePortal={false}
                                            onRendered={[Function]}
                                          >
                                            <Portal
                                              containerInfo={
                                                <body>
                                                  <div
                                                    aria-hidden="true"
                                                    id="profile-account-menu"
                                                    role="presentation"
                                                    style="position: fixed; z-index: 1300; right: 0px; bottom: 0px; top: 0px; left: 0px; visibility: hidden;"
                                                  >
                                                    <div
                                                      data-test="sentinelStart"
                                                      tabindex="0"
                                                    />
                                                    <div
                                                      class="MuiPaper-root MuiMenu-paper MuiPaper-elevation8 MuiPopover-paper MuiPaper-rounded"
                                                      role="document"
                                                      style="opacity: 0; transform: scale(0.75, 0.5625); visibility: hidden;"
                                                      tabindex="-1"
                                                    >
                                                      <ul
                                                        class="MuiList-root MuiMenu-list MuiList-padding"
                                                        role="menu"
                                                        tabindex="-1"
                                                      >
                                                        <li
                                                          aria-disabled="false"
                                                          class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                                                          role="menuitem"
                                                          tabindex="-1"
                                                        >
                                                          Sign Out
                                                          <span
                                                            class="MuiTouchRipple-root"
                                                          />
                                                        </li>
                                                      </ul>
                                                    </div>
                                                    <div
                                                      data-test="sentinelEnd"
                                                      tabindex="0"
                                                    />
                                                  </div>
                                                </body>
                                              }
                                            >
                                              <div
                                                id="profile-account-menu"
                                                onKeyDown={[Function]}
                                                role="presentation"
                                                style={
                                                  Object {
                                                    "bottom": 0,
                                                    "left": 0,
                                                    "position": "fixed",
                                                    "right": 0,
                                                    "top": 0,
                                                    "visibility": "hidden",
                                                    "zIndex": 1300,
                                                  }
                                                }
                                              >
                                                <ForwardRef(SimpleBackdrop)
                                                  invisible={true}
                                                  onClick={[Function]}
                                                  open={false}
                                                />
                                                <TrapFocus
                                                  disableAutoFocus={false}
                                                  disableEnforceFocus={false}
                                                  disableRestoreFocus={false}
                                                  getDoc={[Function]}
                                                  isEnabled={[Function]}
                                                  open={false}
                                                >
                                                  <div
                                                    data-test="sentinelStart"
                                                    tabIndex={0}
                                                  />
                                                  <ForwardRef(Grow)
                                                    appear={true}
                                                    in={false}
                                                    onEnter={[Function]}
                                                    onEntering={[Function]}
                                                    onExited={[Function]}
                                                    role="document"
                                                    tabIndex="-1"
                                                    timeout="auto"
                                                  >
                                                    <Transition
                                                      addEndListener={[Function]}
                                                      appear={true}
                                                      enter={true}
                                                      exit={true}
                                                      in={false}
                                                      mountOnEnter={false}
                                                      onEnter={[Function]}
                                                      onEntered={[Function]}
                                                      onEntering={[Function]}
                                                      onExit={[Function]}
                                                      onExited={[Function]}
                                                      onExiting={[Function]}
                                                      role="document"
                                                      tabIndex="-1"
                                                      timeout={null}
                                                      unmountOnExit={false}
                                                    >
                                                      <WithStyles(ForwardRef(Paper))
                                                        className="MuiPopover-paper"
                                                        classes={
                                                          Object {
                                                            "root": "MuiMenu-paper",
                                                          }
                                                        }
                                                        elevation={8}
                                                        role="document"
                                                        style={
                                                          Object {
                                                            "opacity": 0,
                                                            "transform": "scale(0.75, 0.5625)",
                                                            "visibility": "hidden",
                                                          }
                                                        }
                                                        tabIndex="-1"
                                                      >
                                                        <ForwardRef(Paper)
                                                          className="MuiPopover-paper"
                                                          classes={
                                                            Object {
                                                              "elevation0": "MuiPaper-elevation0",
                                                              "elevation1": "MuiPaper-elevation1",
                                                              "elevation10": "MuiPaper-elevation10",
                                                              "elevation11": "MuiPaper-elevation11",
                                                              "elevation12": "MuiPaper-elevation12",
                                                              "elevation13": "MuiPaper-elevation13",
                                                              "elevation14": "MuiPaper-elevation14",
                                                              "elevation15": "MuiPaper-elevation15",
                                                              "elevation16": "MuiPaper-elevation16",
                                                              "elevation17": "MuiPaper-elevation17",
                                                              "elevation18": "MuiPaper-elevation18",
                                                              "elevation19": "MuiPaper-elevation19",
                                                              "elevation2": "MuiPaper-elevation2",
                                                              "elevation20": "MuiPaper-elevation20",
                                                              "elevation21": "MuiPaper-elevation21",
                                                              "elevation22": "MuiPaper-elevation22",
                                                              "elevation23": "MuiPaper-elevation23",
                                                              "elevation24": "MuiPaper-elevation24",
                                                              "elevation3": "MuiPaper-elevation3",
                                                              "elevation4": "MuiPaper-elevation4",
                                                              "elevation5": "MuiPaper-elevation5",
                                                              "elevation6": "MuiPaper-elevation6",
                                                              "elevation7": "MuiPaper-elevation7",
                                                              "elevation8": "MuiPaper-elevation8",
                                                              "elevation9": "MuiPaper-elevation9",
                                                              "root": "MuiPaper-root MuiMenu-paper",
                                                              "rounded": "MuiPaper-rounded",
                                                            }
                                                          }
                                                          elevation={8}
                                                          role="document"
                                                          style={
                                                            Object {
                                                              "opacity": 0,
                                                              "transform": "scale(0.75, 0.5625)",
                                                              "visibility": "hidden",
                                                            }
                                                          }
                                                          tabIndex="-1"
                                                        >
                                                          <div
                                                            className="MuiPaper-root MuiMenu-paper MuiPaper-elevation8 MuiPopover-paper MuiPaper-rounded"
                                                            role="document"
                                                            style={
                                                              Object {
                                                                "opacity": 0,
                                                                "transform": "scale(0.75, 0.5625)",
                                                                "visibility": "hidden",
                                                              }
                                                            }
                                                            tabIndex="-1"
                                                          >
                                                            <ForwardRef(MenuList)
                                                              actions={
                                                                Object {
                                                                  "current": Object {
                                                                    "adjustStyleForScrollbar": [Function],
                                                                  },
                                                                }
                                                              }
                                                              autoFocus={false}
                                                              className="MuiMenu-list"
                                                              onKeyDown={[Function]}
                                                            >
                                                              <WithStyles(ForwardRef(List))
                                                                className="MuiMenu-list"
                                                                onKeyDown={[Function]}
                                                                role="menu"
                                                                tabIndex={-1}
                                                              >
                                                                <ForwardRef(List)
                                                                  className="MuiMenu-list"
                                                                  classes={
                                                                    Object {
                                                                      "dense": "MuiList-dense",
                                                                      "padding": "MuiList-padding",
                                                                      "root": "MuiList-root",
                                                                      "subheader": "MuiList-subheader",
                                                                    }
                                                                  }
                                                                  onKeyDown={[Function]}
                                                                  role="menu"
                                                                  tabIndex={-1}
                                                                >
                                                                  <ul
                                                                    className="MuiList-root MuiMenu-list MuiList-padding"
                                                                    onKeyDown={[Function]}
                                                                    role="menu"
                                                                    tabIndex={-1}
                                                                  >
                                                                    <WithStyles(ForwardRef(MenuItem))
                                                                      key=".0"
                                                                      onClick={[Function]}
                                                                    >
                                                                      <ForwardRef(MenuItem)
                                                                        classes={
                                                                          Object {
                                                                            "dense": "MuiMenuItem-dense",
                                                                            "gutters": "MuiMenuItem-gutters",
                                                                            "root": "MuiMenuItem-root",
                                                                            "selected": "Mui-selected",
                                                                          }
                                                                        }
                                                                        onClick={[Function]}
                                                                      >
                                                                        <WithStyles(ForwardRef(ListItem))
                                                                          button={true}
                                                                          className="MuiMenuItem-root MuiMenuItem-gutters"
                                                                          classes={
                                                                            Object {
                                                                              "dense": "MuiMenuItem-dense",
                                                                            }
                                                                          }
                                                                          component="li"
                                                                          disableGutters={false}
                                                                          onClick={[Function]}
                                                                          role="menuitem"
                                                                          tabIndex={-1}
                                                                        >
                                                                          <ForwardRef(ListItem)
                                                                            button={true}
                                                                            className="MuiMenuItem-root MuiMenuItem-gutters"
                                                                            classes={
                                                                              Object {
                                                                                "alignItemsFlexStart": "MuiListItem-alignItemsFlexStart",
                                                                                "button": "MuiListItem-button",
                                                                                "container": "MuiListItem-container",
                                                                                "dense": "MuiListItem-dense MuiMenuItem-dense",
                                                                                "disabled": "Mui-disabled",
                                                                                "divider": "MuiListItem-divider",
                                                                                "focusVisible": "Mui-focusVisible",
                                                                                "gutters": "MuiListItem-gutters",
                                                                                "root": "MuiListItem-root",
                                                                                "secondaryAction": "MuiListItem-secondaryAction",
                                                                                "selected": "Mui-selected",
                                                                              }
                                                                            }
                                                                            component="li"
                                                                            disableGutters={false}
                                                                            onClick={[Function]}
                                                                            role="menuitem"
                                                                            tabIndex={-1}
                                                                          >
                                                                            <WithStyles(ForwardRef(ButtonBase))
                                                                              className="MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                                                                              component="li"
                                                                              disabled={false}
                                                                              focusVisibleClassName="Mui-focusVisible"
                                                                              onClick={[Function]}
                                                                              role="menuitem"
                                                                              tabIndex={-1}
                                                                            >
                                                                              <ForwardRef(ButtonBase)
                                                                                className="MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                                                                                classes={
                                                                                  Object {
                                                                                    "disabled": "Mui-disabled",
                                                                                    "focusVisible": "Mui-focusVisible",
                                                                                    "root": "MuiButtonBase-root",
                                                                                  }
                                                                                }
                                                                                component="li"
                                                                                disabled={false}
                                                                                focusVisibleClassName="Mui-focusVisible"
                                                                                onClick={[Function]}
                                                                                role="menuitem"
                                                                                tabIndex={-1}
                                                                              >
                                                                                <li
                                                                                  aria-disabled={false}
                                                                                  className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
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
                                                                                  role="menuitem"
                                                                                  tabIndex={-1}
                                                                                >
                                                                                  Sign Out
                                                                                  <NoSsr>
                                                                                    <WithStyles(undefined)
                                                                                      center={false}
                                                                                    >
                                                                                      <ForwardRef(TouchRipple)
                                                                                        center={false}
                                                                                        classes={
                                                                                          Object {
                                                                                            "child": "MuiTouchRipple-child",
                                                                                            "childLeaving": "MuiTouchRipple-childLeaving",
                                                                                            "childPulsate": "MuiTouchRipple-childPulsate",
                                                                                            "ripple": "MuiTouchRipple-ripple",
                                                                                            "ripplePulsate": "MuiTouchRipple-ripplePulsate",
                                                                                            "rippleVisible": "MuiTouchRipple-rippleVisible",
                                                                                            "root": "MuiTouchRipple-root",
                                                                                          }
                                                                                        }
                                                                                      >
                                                                                        <span
                                                                                          className="MuiTouchRipple-root"
                                                                                        >
                                                                                          <TransitionGroup
                                                                                            childFactory={[Function]}
                                                                                            component={null}
                                                                                            exit={true}
                                                                                          />
                                                                                        </span>
                                                                                      </ForwardRef(TouchRipple)>
                                                                                    </WithStyles(undefined)>
                                                                                  </NoSsr>
                                                                                </li>
                                                                              </ForwardRef(ButtonBase)>
                                                                            </WithStyles(ForwardRef(ButtonBase))>
                                                                          </ForwardRef(ListItem)>
                                                                        </WithStyles(ForwardRef(ListItem))>
                                                                      </ForwardRef(MenuItem)>
                                                                    </WithStyles(ForwardRef(MenuItem))>
                                                                  </ul>
                                                                </ForwardRef(List)>
                                                              </WithStyles(ForwardRef(List))>
                                                            </ForwardRef(MenuList)>
                                                          </div>
                                                        </ForwardRef(Paper)>
                                                      </WithStyles(ForwardRef(Paper))>
                                                    </Transition>
                                                  </ForwardRef(Grow)>
                                                  <div
                                                    data-test="sentinelEnd"
                                                    tabIndex={0}
                                                  />
                                                </TrapFocus>
                                              </div>
                                            </Portal>
                                          </ForwardRef(Portal)>
                                        </ForwardRef(Modal)>
                                      </ForwardRef(Popover)>
                                    </WithStyles(ForwardRef(Popover))>
                                  </ForwardRef(Menu)>
                                </WithStyles(ForwardRef(Menu))>
                              </div>
                            </HeaderAppBar>
                            <section
                              className="dashboard__cont"
                            >
                              <WithStyles(ForwardRef(Container))
                                maxWidth="lg"
                              >
                                <ForwardRef(Container)
                                  classes={
                                    Object {
                                      "fixed": "MuiContainer-fixed",
                                      "maxWidthLg": "MuiContainer-maxWidthLg",
                                      "maxWidthMd": "MuiContainer-maxWidthMd",
                                      "maxWidthSm": "MuiContainer-maxWidthSm",
                                      "maxWidthXl": "MuiContainer-maxWidthXl",
                                      "maxWidthXs": "MuiContainer-maxWidthXs",
                                      "root": "MuiContainer-root",
                                    }
                                  }
                                  maxWidth="lg"
                                >
                                  <div
                                    className="MuiContainer-root MuiContainer-maxWidthLg"
                                  >
                                    <WithStyles(ForwardRef(Grid))
                                      container={true}
                                      justify="center"
                                      spacing={3}
                                    >
                                      <ForwardRef(Grid)
                                        classes={
                                          Object {
                                            "align-content-xs-center": "MuiGrid-align-content-xs-center",
                                            "align-content-xs-flex-end": "MuiGrid-align-content-xs-flex-end",
                                            "align-content-xs-flex-start": "MuiGrid-align-content-xs-flex-start",
                                            "align-content-xs-space-around": "MuiGrid-align-content-xs-space-around",
                                            "align-content-xs-space-between": "MuiGrid-align-content-xs-space-between",
                                            "align-items-xs-baseline": "MuiGrid-align-items-xs-baseline",
                                            "align-items-xs-center": "MuiGrid-align-items-xs-center",
                                            "align-items-xs-flex-end": "MuiGrid-align-items-xs-flex-end",
                                            "align-items-xs-flex-start": "MuiGrid-align-items-xs-flex-start",
                                            "container": "MuiGrid-container",
                                            "direction-xs-column": "MuiGrid-direction-xs-column",
                                            "direction-xs-column-reverse": "MuiGrid-direction-xs-column-reverse",
                                            "direction-xs-row-reverse": "MuiGrid-direction-xs-row-reverse",
                                            "grid-lg-1": "MuiGrid-grid-lg-1",
                                            "grid-lg-10": "MuiGrid-grid-lg-10",
                                            "grid-lg-11": "MuiGrid-grid-lg-11",
                                            "grid-lg-12": "MuiGrid-grid-lg-12",
                                            "grid-lg-2": "MuiGrid-grid-lg-2",
                                            "grid-lg-3": "MuiGrid-grid-lg-3",
                                            "grid-lg-4": "MuiGrid-grid-lg-4",
                                            "grid-lg-5": "MuiGrid-grid-lg-5",
                                            "grid-lg-6": "MuiGrid-grid-lg-6",
                                            "grid-lg-7": "MuiGrid-grid-lg-7",
                                            "grid-lg-8": "MuiGrid-grid-lg-8",
                                            "grid-lg-9": "MuiGrid-grid-lg-9",
                                            "grid-lg-auto": "MuiGrid-grid-lg-auto",
                                            "grid-lg-true": "MuiGrid-grid-lg-true",
                                            "grid-md-1": "MuiGrid-grid-md-1",
                                            "grid-md-10": "MuiGrid-grid-md-10",
                                            "grid-md-11": "MuiGrid-grid-md-11",
                                            "grid-md-12": "MuiGrid-grid-md-12",
                                            "grid-md-2": "MuiGrid-grid-md-2",
                                            "grid-md-3": "MuiGrid-grid-md-3",
                                            "grid-md-4": "MuiGrid-grid-md-4",
                                            "grid-md-5": "MuiGrid-grid-md-5",
                                            "grid-md-6": "MuiGrid-grid-md-6",
                                            "grid-md-7": "MuiGrid-grid-md-7",
                                            "grid-md-8": "MuiGrid-grid-md-8",
                                            "grid-md-9": "MuiGrid-grid-md-9",
                                            "grid-md-auto": "MuiGrid-grid-md-auto",
                                            "grid-md-true": "MuiGrid-grid-md-true",
                                            "grid-sm-1": "MuiGrid-grid-sm-1",
                                            "grid-sm-10": "MuiGrid-grid-sm-10",
                                            "grid-sm-11": "MuiGrid-grid-sm-11",
                                            "grid-sm-12": "MuiGrid-grid-sm-12",
                                            "grid-sm-2": "MuiGrid-grid-sm-2",
                                            "grid-sm-3": "MuiGrid-grid-sm-3",
                                            "grid-sm-4": "MuiGrid-grid-sm-4",
                                            "grid-sm-5": "MuiGrid-grid-sm-5",
                                            "grid-sm-6": "MuiGrid-grid-sm-6",
                                            "grid-sm-7": "MuiGrid-grid-sm-7",
                                            "grid-sm-8": "MuiGrid-grid-sm-8",
                                            "grid-sm-9": "MuiGrid-grid-sm-9",
                                            "grid-sm-auto": "MuiGrid-grid-sm-auto",
                                            "grid-sm-true": "MuiGrid-grid-sm-true",
                                            "grid-xl-1": "MuiGrid-grid-xl-1",
                                            "grid-xl-10": "MuiGrid-grid-xl-10",
                                            "grid-xl-11": "MuiGrid-grid-xl-11",
                                            "grid-xl-12": "MuiGrid-grid-xl-12",
                                            "grid-xl-2": "MuiGrid-grid-xl-2",
                                            "grid-xl-3": "MuiGrid-grid-xl-3",
                                            "grid-xl-4": "MuiGrid-grid-xl-4",
                                            "grid-xl-5": "MuiGrid-grid-xl-5",
                                            "grid-xl-6": "MuiGrid-grid-xl-6",
                                            "grid-xl-7": "MuiGrid-grid-xl-7",
                                            "grid-xl-8": "MuiGrid-grid-xl-8",
                                            "grid-xl-9": "MuiGrid-grid-xl-9",
                                            "grid-xl-auto": "MuiGrid-grid-xl-auto",
                                            "grid-xl-true": "MuiGrid-grid-xl-true",
                                            "grid-xs-1": "MuiGrid-grid-xs-1",
                                            "grid-xs-10": "MuiGrid-grid-xs-10",
                                            "grid-xs-11": "MuiGrid-grid-xs-11",
                                            "grid-xs-12": "MuiGrid-grid-xs-12",
                                            "grid-xs-2": "MuiGrid-grid-xs-2",
                                            "grid-xs-3": "MuiGrid-grid-xs-3",
                                            "grid-xs-4": "MuiGrid-grid-xs-4",
                                            "grid-xs-5": "MuiGrid-grid-xs-5",
                                            "grid-xs-6": "MuiGrid-grid-xs-6",
                                            "grid-xs-7": "MuiGrid-grid-xs-7",
                                            "grid-xs-8": "MuiGrid-grid-xs-8",
                                            "grid-xs-9": "MuiGrid-grid-xs-9",
                                            "grid-xs-auto": "MuiGrid-grid-xs-auto",
                                            "grid-xs-true": "MuiGrid-grid-xs-true",
                                            "item": "MuiGrid-item",
                                            "justify-xs-center": "MuiGrid-justify-xs-center",
                                            "justify-xs-flex-end": "MuiGrid-justify-xs-flex-end",
                                            "justify-xs-space-around": "MuiGrid-justify-xs-space-around",
                                            "justify-xs-space-between": "MuiGrid-justify-xs-space-between",
                                            "justify-xs-space-evenly": "MuiGrid-justify-xs-space-evenly",
                                            "root": "MuiGrid-root",
                                            "spacing-xs-1": "MuiGrid-spacing-xs-1",
                                            "spacing-xs-10": "MuiGrid-spacing-xs-10",
                                            "spacing-xs-2": "MuiGrid-spacing-xs-2",
                                            "spacing-xs-3": "MuiGrid-spacing-xs-3",
                                            "spacing-xs-4": "MuiGrid-spacing-xs-4",
                                            "spacing-xs-5": "MuiGrid-spacing-xs-5",
                                            "spacing-xs-6": "MuiGrid-spacing-xs-6",
                                            "spacing-xs-7": "MuiGrid-spacing-xs-7",
                                            "spacing-xs-8": "MuiGrid-spacing-xs-8",
                                            "spacing-xs-9": "MuiGrid-spacing-xs-9",
                                            "wrap-xs-nowrap": "MuiGrid-wrap-xs-nowrap",
                                            "wrap-xs-wrap-reverse": "MuiGrid-wrap-xs-wrap-reverse",
                                            "zeroMinWidth": "MuiGrid-zeroMinWidth",
                                          }
                                        }
                                        container={true}
                                        justify="center"
                                        spacing={3}
                                      >
                                        <div
                                          className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 MuiGrid-justify-xs-center"
                                        />
                                      </ForwardRef(Grid)>
                                    </WithStyles(ForwardRef(Grid))>
                                  </div>
                                </ForwardRef(Container)>
                              </WithStyles(ForwardRef(Container))>
                            </section>
                            <NotificationBar
                              dismissAfter={5000}
                              msg=""
                              onDimiss={[Function]}
                              showNotification={false}
                              variant=""
                            >
                              <div>
                                <WithStyles(ForwardRef(Snackbar))
                                  anchorOrigin={
                                    Object {
                                      "horizontal": "center",
                                      "vertical": "bottom",
                                    }
                                  }
                                  autoHideDuration={5000}
                                  onClose={[Function]}
                                  open={false}
                                >
                                  <ForwardRef(Snackbar)
                                    anchorOrigin={
                                      Object {
                                        "horizontal": "center",
                                        "vertical": "bottom",
                                      }
                                    }
                                    autoHideDuration={5000}
                                    classes={
                                      Object {
                                        "anchorOriginBottomCenter": "MuiSnackbar-anchorOriginBottomCenter",
                                        "anchorOriginBottomLeft": "MuiSnackbar-anchorOriginBottomLeft",
                                        "anchorOriginBottomRight": "MuiSnackbar-anchorOriginBottomRight",
                                        "anchorOriginTopCenter": "MuiSnackbar-anchorOriginTopCenter",
                                        "anchorOriginTopLeft": "MuiSnackbar-anchorOriginTopLeft",
                                        "anchorOriginTopRight": "MuiSnackbar-anchorOriginTopRight",
                                        "root": "MuiSnackbar-root",
                                      }
                                    }
                                    onClose={[Function]}
                                    open={false}
                                  />
                                </WithStyles(ForwardRef(Snackbar))>
                              </div>
                            </NotificationBar>
                          </div>
                        </Dashboard>
            `);
});

it("Dashboard renders correctly - invoke countdown timer", () => {
  const wrapper = mount(<Dashboard></Dashboard>);

  //start count down
  wrapper.instance()._startCountDown("xyz@gmail.com", 0.1);

  expect(EnzymeToJson(wrapper)).toMatchInlineSnapshot(`
                <Dashboard>
                  <div
                    className="dashboard"
                  >
                    <HeaderAppBar
                      countDownValue={0}
                      isUserBanned={false}
                      loggedInUser=", "
                      onDroneReturn={[Function]}
                    >
                      <div
                        className="header-app-bar"
                      >
                        <WithStyles(ForwardRef(AppBar))
                          position="static"
                        >
                          <ForwardRef(AppBar)
                            classes={
                              Object {
                                "colorDefault": "MuiAppBar-colorDefault",
                                "colorPrimary": "MuiAppBar-colorPrimary",
                                "colorSecondary": "MuiAppBar-colorSecondary",
                                "positionAbsolute": "MuiAppBar-positionAbsolute",
                                "positionFixed": "MuiAppBar-positionFixed",
                                "positionRelative": "MuiAppBar-positionRelative",
                                "positionStatic": "MuiAppBar-positionStatic",
                                "positionSticky": "MuiAppBar-positionSticky",
                                "root": "MuiAppBar-root",
                              }
                            }
                            position="static"
                          >
                            <WithStyles(ForwardRef(Paper))
                              className="MuiAppBar-root MuiAppBar-positionStatic MuiAppBar-colorPrimary"
                              component="header"
                              elevation={4}
                              square={true}
                            >
                              <ForwardRef(Paper)
                                className="MuiAppBar-root MuiAppBar-positionStatic MuiAppBar-colorPrimary"
                                classes={
                                  Object {
                                    "elevation0": "MuiPaper-elevation0",
                                    "elevation1": "MuiPaper-elevation1",
                                    "elevation10": "MuiPaper-elevation10",
                                    "elevation11": "MuiPaper-elevation11",
                                    "elevation12": "MuiPaper-elevation12",
                                    "elevation13": "MuiPaper-elevation13",
                                    "elevation14": "MuiPaper-elevation14",
                                    "elevation15": "MuiPaper-elevation15",
                                    "elevation16": "MuiPaper-elevation16",
                                    "elevation17": "MuiPaper-elevation17",
                                    "elevation18": "MuiPaper-elevation18",
                                    "elevation19": "MuiPaper-elevation19",
                                    "elevation2": "MuiPaper-elevation2",
                                    "elevation20": "MuiPaper-elevation20",
                                    "elevation21": "MuiPaper-elevation21",
                                    "elevation22": "MuiPaper-elevation22",
                                    "elevation23": "MuiPaper-elevation23",
                                    "elevation24": "MuiPaper-elevation24",
                                    "elevation3": "MuiPaper-elevation3",
                                    "elevation4": "MuiPaper-elevation4",
                                    "elevation5": "MuiPaper-elevation5",
                                    "elevation6": "MuiPaper-elevation6",
                                    "elevation7": "MuiPaper-elevation7",
                                    "elevation8": "MuiPaper-elevation8",
                                    "elevation9": "MuiPaper-elevation9",
                                    "root": "MuiPaper-root",
                                    "rounded": "MuiPaper-rounded",
                                  }
                                }
                                component="header"
                                elevation={4}
                                square={true}
                              >
                                <header
                                  className="MuiPaper-root MuiPaper-elevation4 MuiAppBar-root MuiAppBar-positionStatic MuiAppBar-colorPrimary"
                                >
                                  <WithStyles(ForwardRef(Toolbar))>
                                    <ForwardRef(Toolbar)
                                      classes={
                                        Object {
                                          "dense": "MuiToolbar-dense",
                                          "gutters": "MuiToolbar-gutters",
                                          "regular": "MuiToolbar-regular",
                                          "root": "MuiToolbar-root",
                                        }
                                      }
                                    >
                                      <div
                                        className="MuiToolbar-root MuiToolbar-regular MuiToolbar-gutters"
                                      >
                                        <WithStyles(ForwardRef(Typography))
                                          className="makeStyles-title-2"
                                          noWrap={true}
                                          variant="h6"
                                        >
                                          <ForwardRef(Typography)
                                            className="makeStyles-title-2"
                                            classes={
                                              Object {
                                                "alignCenter": "MuiTypography-alignCenter",
                                                "alignJustify": "MuiTypography-alignJustify",
                                                "alignLeft": "MuiTypography-alignLeft",
                                                "alignRight": "MuiTypography-alignRight",
                                                "body1": "MuiTypography-body1",
                                                "body2": "MuiTypography-body2",
                                                "button": "MuiTypography-button",
                                                "caption": "MuiTypography-caption",
                                                "colorError": "MuiTypography-colorError",
                                                "colorInherit": "MuiTypography-colorInherit",
                                                "colorPrimary": "MuiTypography-colorPrimary",
                                                "colorSecondary": "MuiTypography-colorSecondary",
                                                "colorTextPrimary": "MuiTypography-colorTextPrimary",
                                                "colorTextSecondary": "MuiTypography-colorTextSecondary",
                                                "displayBlock": "MuiTypography-displayBlock",
                                                "displayInline": "MuiTypography-displayInline",
                                                "gutterBottom": "MuiTypography-gutterBottom",
                                                "h1": "MuiTypography-h1",
                                                "h2": "MuiTypography-h2",
                                                "h3": "MuiTypography-h3",
                                                "h4": "MuiTypography-h4",
                                                "h5": "MuiTypography-h5",
                                                "h6": "MuiTypography-h6",
                                                "noWrap": "MuiTypography-noWrap",
                                                "overline": "MuiTypography-overline",
                                                "paragraph": "MuiTypography-paragraph",
                                                "root": "MuiTypography-root",
                                                "srOnly": "MuiTypography-srOnly",
                                                "subtitle1": "MuiTypography-subtitle1",
                                                "subtitle2": "MuiTypography-subtitle2",
                                              }
                                            }
                                            noWrap={true}
                                            theme={
                                              Object {
                                                "breakpoints": Object {
                                                  "between": [Function],
                                                  "down": [Function],
                                                  "keys": Array [
                                                    "xs",
                                                    "sm",
                                                    "md",
                                                    "lg",
                                                    "xl",
                                                  ],
                                                  "only": [Function],
                                                  "up": [Function],
                                                  "values": Object {
                                                    "lg": 1280,
                                                    "md": 960,
                                                    "sm": 600,
                                                    "xl": 1920,
                                                    "xs": 0,
                                                  },
                                                  "width": [Function],
                                                },
                                                "direction": "ltr",
                                                "mixins": Object {
                                                  "gutters": [Function],
                                                  "toolbar": Object {
                                                    "@media (min-width:0px) and (orientation: landscape)": Object {
                                                      "minHeight": 48,
                                                    },
                                                    "@media (min-width:600px)": Object {
                                                      "minHeight": 64,
                                                    },
                                                    "minHeight": 56,
                                                  },
                                                },
                                                "overrides": Object {},
                                                "palette": Object {
                                                  "action": Object {
                                                    "active": "rgba(0, 0, 0, 0.54)",
                                                    "disabled": "rgba(0, 0, 0, 0.26)",
                                                    "disabledBackground": "rgba(0, 0, 0, 0.12)",
                                                    "hover": "rgba(0, 0, 0, 0.08)",
                                                    "hoverOpacity": 0.08,
                                                    "selected": "rgba(0, 0, 0, 0.14)",
                                                  },
                                                  "augmentColor": [Function],
                                                  "background": Object {
                                                    "default": "#fafafa",
                                                    "paper": "#fff",
                                                  },
                                                  "common": Object {
                                                    "black": "#000",
                                                    "white": "#fff",
                                                  },
                                                  "contrastThreshold": 3,
                                                  "divider": "rgba(0, 0, 0, 0.12)",
                                                  "error": Object {
                                                    "contrastText": "#fff",
                                                    "dark": "#d32f2f",
                                                    "light": "#e57373",
                                                    "main": "#f44336",
                                                  },
                                                  "getContrastText": [Function],
                                                  "grey": Object {
                                                    "100": "#f5f5f5",
                                                    "200": "#eeeeee",
                                                    "300": "#e0e0e0",
                                                    "400": "#bdbdbd",
                                                    "50": "#fafafa",
                                                    "500": "#9e9e9e",
                                                    "600": "#757575",
                                                    "700": "#616161",
                                                    "800": "#424242",
                                                    "900": "#212121",
                                                    "A100": "#d5d5d5",
                                                    "A200": "#aaaaaa",
                                                    "A400": "#303030",
                                                    "A700": "#616161",
                                                  },
                                                  "primary": Object {
                                                    "contrastText": "#fff",
                                                    "dark": "#303f9f",
                                                    "light": "#7986cb",
                                                    "main": "#3f51b5",
                                                  },
                                                  "secondary": Object {
                                                    "contrastText": "#fff",
                                                    "dark": "#c51162",
                                                    "light": "#ff4081",
                                                    "main": "#f50057",
                                                  },
                                                  "text": Object {
                                                    "disabled": "rgba(0, 0, 0, 0.38)",
                                                    "hint": "rgba(0, 0, 0, 0.38)",
                                                    "primary": "rgba(0, 0, 0, 0.87)",
                                                    "secondary": "rgba(0, 0, 0, 0.54)",
                                                  },
                                                  "tonalOffset": 0.2,
                                                  "type": "light",
                                                },
                                                "props": Object {},
                                                "shadows": Array [
                                                  "none",
                                                  "0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)",
                                                  "0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)",
                                                  "0px 1px 8px 0px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 3px 3px -2px rgba(0,0,0,0.12)",
                                                  "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
                                                  "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
                                                  "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
                                                  "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
                                                  "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
                                                  "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
                                                  "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
                                                  "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
                                                  "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
                                                  "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
                                                  "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
                                                  "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
                                                  "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
                                                  "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
                                                  "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
                                                  "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
                                                  "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
                                                  "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
                                                  "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
                                                  "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
                                                  "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
                                                ],
                                                "shape": Object {
                                                  "borderRadius": 4,
                                                },
                                                "spacing": [Function],
                                                "transitions": Object {
                                                  "create": [Function],
                                                  "duration": Object {
                                                    "complex": 375,
                                                    "enteringScreen": 225,
                                                    "leavingScreen": 195,
                                                    "short": 250,
                                                    "shorter": 200,
                                                    "shortest": 150,
                                                    "standard": 300,
                                                  },
                                                  "easing": Object {
                                                    "easeIn": "cubic-bezier(0.4, 0, 1, 1)",
                                                    "easeInOut": "cubic-bezier(0.4, 0, 0.2, 1)",
                                                    "easeOut": "cubic-bezier(0.0, 0, 0.2, 1)",
                                                    "sharp": "cubic-bezier(0.4, 0, 0.6, 1)",
                                                  },
                                                  "getAutoHeightDuration": [Function],
                                                },
                                                "typography": Object {
                                                  "body1": Object {
                                                    "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                    "fontSize": "1rem",
                                                    "fontWeight": 400,
                                                    "letterSpacing": "0.00938em",
                                                    "lineHeight": 1.5,
                                                  },
                                                  "body2": Object {
                                                    "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                    "fontSize": "0.875rem",
                                                    "fontWeight": 400,
                                                    "letterSpacing": "0.01071em",
                                                    "lineHeight": 1.43,
                                                  },
                                                  "button": Object {
                                                    "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                    "fontSize": "0.875rem",
                                                    "fontWeight": 500,
                                                    "letterSpacing": "0.02857em",
                                                    "lineHeight": 1.75,
                                                    "textTransform": "uppercase",
                                                  },
                                                  "caption": Object {
                                                    "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                    "fontSize": "0.75rem",
                                                    "fontWeight": 400,
                                                    "letterSpacing": "0.03333em",
                                                    "lineHeight": 1.66,
                                                  },
                                                  "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                  "fontSize": 14,
                                                  "fontWeightBold": 700,
                                                  "fontWeightLight": 300,
                                                  "fontWeightMedium": 500,
                                                  "fontWeightRegular": 400,
                                                  "h1": Object {
                                                    "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                    "fontSize": "6rem",
                                                    "fontWeight": 300,
                                                    "letterSpacing": "-0.01562em",
                                                    "lineHeight": 1,
                                                  },
                                                  "h2": Object {
                                                    "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                    "fontSize": "3.75rem",
                                                    "fontWeight": 300,
                                                    "letterSpacing": "-0.00833em",
                                                    "lineHeight": 1,
                                                  },
                                                  "h3": Object {
                                                    "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                    "fontSize": "3rem",
                                                    "fontWeight": 400,
                                                    "letterSpacing": "0em",
                                                    "lineHeight": 1.04,
                                                  },
                                                  "h4": Object {
                                                    "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                    "fontSize": "2.125rem",
                                                    "fontWeight": 400,
                                                    "letterSpacing": "0.00735em",
                                                    "lineHeight": 1.17,
                                                  },
                                                  "h5": Object {
                                                    "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                    "fontSize": "1.5rem",
                                                    "fontWeight": 400,
                                                    "letterSpacing": "0em",
                                                    "lineHeight": 1.33,
                                                  },
                                                  "h6": Object {
                                                    "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                    "fontSize": "1.25rem",
                                                    "fontWeight": 500,
                                                    "letterSpacing": "0.0075em",
                                                    "lineHeight": 1.6,
                                                  },
                                                  "htmlFontSize": 16,
                                                  "overline": Object {
                                                    "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                    "fontSize": "0.75rem",
                                                    "fontWeight": 400,
                                                    "letterSpacing": "0.08333em",
                                                    "lineHeight": 2.66,
                                                    "textTransform": "uppercase",
                                                  },
                                                  "pxToRem": [Function],
                                                  "round": [Function],
                                                  "subtitle1": Object {
                                                    "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                    "fontSize": "1rem",
                                                    "fontWeight": 400,
                                                    "letterSpacing": "0.00938em",
                                                    "lineHeight": 1.75,
                                                  },
                                                  "subtitle2": Object {
                                                    "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                    "fontSize": "0.875rem",
                                                    "fontWeight": 500,
                                                    "letterSpacing": "0.00714em",
                                                    "lineHeight": 1.57,
                                                  },
                                                },
                                                "zIndex": Object {
                                                  "appBar": 1100,
                                                  "drawer": 1200,
                                                  "mobileStepper": 1000,
                                                  "modal": 1300,
                                                  "snackbar": 1400,
                                                  "tooltip": 1500,
                                                },
                                              }
                                            }
                                            variant="h6"
                                          >
                                            <h6
                                              className="MuiTypography-root makeStyles-title-2 MuiTypography-h6 MuiTypography-noWrap"
                                            >
                                              Drone For You
                                            </h6>
                                          </ForwardRef(Typography)>
                                        </WithStyles(ForwardRef(Typography))>
                                        <div
                                          className="makeStyles-grow-1"
                                        />
                                        <WithStyles(ForwardRef(Typography))
                                          noWrap={true}
                                        >
                                          <ForwardRef(Typography)
                                            classes={
                                              Object {
                                                "alignCenter": "MuiTypography-alignCenter",
                                                "alignJustify": "MuiTypography-alignJustify",
                                                "alignLeft": "MuiTypography-alignLeft",
                                                "alignRight": "MuiTypography-alignRight",
                                                "body1": "MuiTypography-body1",
                                                "body2": "MuiTypography-body2",
                                                "button": "MuiTypography-button",
                                                "caption": "MuiTypography-caption",
                                                "colorError": "MuiTypography-colorError",
                                                "colorInherit": "MuiTypography-colorInherit",
                                                "colorPrimary": "MuiTypography-colorPrimary",
                                                "colorSecondary": "MuiTypography-colorSecondary",
                                                "colorTextPrimary": "MuiTypography-colorTextPrimary",
                                                "colorTextSecondary": "MuiTypography-colorTextSecondary",
                                                "displayBlock": "MuiTypography-displayBlock",
                                                "displayInline": "MuiTypography-displayInline",
                                                "gutterBottom": "MuiTypography-gutterBottom",
                                                "h1": "MuiTypography-h1",
                                                "h2": "MuiTypography-h2",
                                                "h3": "MuiTypography-h3",
                                                "h4": "MuiTypography-h4",
                                                "h5": "MuiTypography-h5",
                                                "h6": "MuiTypography-h6",
                                                "noWrap": "MuiTypography-noWrap",
                                                "overline": "MuiTypography-overline",
                                                "paragraph": "MuiTypography-paragraph",
                                                "root": "MuiTypography-root",
                                                "srOnly": "MuiTypography-srOnly",
                                                "subtitle1": "MuiTypography-subtitle1",
                                                "subtitle2": "MuiTypography-subtitle2",
                                              }
                                            }
                                            noWrap={true}
                                            theme={
                                              Object {
                                                "breakpoints": Object {
                                                  "between": [Function],
                                                  "down": [Function],
                                                  "keys": Array [
                                                    "xs",
                                                    "sm",
                                                    "md",
                                                    "lg",
                                                    "xl",
                                                  ],
                                                  "only": [Function],
                                                  "up": [Function],
                                                  "values": Object {
                                                    "lg": 1280,
                                                    "md": 960,
                                                    "sm": 600,
                                                    "xl": 1920,
                                                    "xs": 0,
                                                  },
                                                  "width": [Function],
                                                },
                                                "direction": "ltr",
                                                "mixins": Object {
                                                  "gutters": [Function],
                                                  "toolbar": Object {
                                                    "@media (min-width:0px) and (orientation: landscape)": Object {
                                                      "minHeight": 48,
                                                    },
                                                    "@media (min-width:600px)": Object {
                                                      "minHeight": 64,
                                                    },
                                                    "minHeight": 56,
                                                  },
                                                },
                                                "overrides": Object {},
                                                "palette": Object {
                                                  "action": Object {
                                                    "active": "rgba(0, 0, 0, 0.54)",
                                                    "disabled": "rgba(0, 0, 0, 0.26)",
                                                    "disabledBackground": "rgba(0, 0, 0, 0.12)",
                                                    "hover": "rgba(0, 0, 0, 0.08)",
                                                    "hoverOpacity": 0.08,
                                                    "selected": "rgba(0, 0, 0, 0.14)",
                                                  },
                                                  "augmentColor": [Function],
                                                  "background": Object {
                                                    "default": "#fafafa",
                                                    "paper": "#fff",
                                                  },
                                                  "common": Object {
                                                    "black": "#000",
                                                    "white": "#fff",
                                                  },
                                                  "contrastThreshold": 3,
                                                  "divider": "rgba(0, 0, 0, 0.12)",
                                                  "error": Object {
                                                    "contrastText": "#fff",
                                                    "dark": "#d32f2f",
                                                    "light": "#e57373",
                                                    "main": "#f44336",
                                                  },
                                                  "getContrastText": [Function],
                                                  "grey": Object {
                                                    "100": "#f5f5f5",
                                                    "200": "#eeeeee",
                                                    "300": "#e0e0e0",
                                                    "400": "#bdbdbd",
                                                    "50": "#fafafa",
                                                    "500": "#9e9e9e",
                                                    "600": "#757575",
                                                    "700": "#616161",
                                                    "800": "#424242",
                                                    "900": "#212121",
                                                    "A100": "#d5d5d5",
                                                    "A200": "#aaaaaa",
                                                    "A400": "#303030",
                                                    "A700": "#616161",
                                                  },
                                                  "primary": Object {
                                                    "contrastText": "#fff",
                                                    "dark": "#303f9f",
                                                    "light": "#7986cb",
                                                    "main": "#3f51b5",
                                                  },
                                                  "secondary": Object {
                                                    "contrastText": "#fff",
                                                    "dark": "#c51162",
                                                    "light": "#ff4081",
                                                    "main": "#f50057",
                                                  },
                                                  "text": Object {
                                                    "disabled": "rgba(0, 0, 0, 0.38)",
                                                    "hint": "rgba(0, 0, 0, 0.38)",
                                                    "primary": "rgba(0, 0, 0, 0.87)",
                                                    "secondary": "rgba(0, 0, 0, 0.54)",
                                                  },
                                                  "tonalOffset": 0.2,
                                                  "type": "light",
                                                },
                                                "props": Object {},
                                                "shadows": Array [
                                                  "none",
                                                  "0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)",
                                                  "0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)",
                                                  "0px 1px 8px 0px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 3px 3px -2px rgba(0,0,0,0.12)",
                                                  "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
                                                  "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
                                                  "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
                                                  "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
                                                  "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
                                                  "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
                                                  "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
                                                  "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
                                                  "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
                                                  "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
                                                  "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
                                                  "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
                                                  "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
                                                  "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
                                                  "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
                                                  "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
                                                  "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
                                                  "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
                                                  "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
                                                  "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
                                                  "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
                                                ],
                                                "shape": Object {
                                                  "borderRadius": 4,
                                                },
                                                "spacing": [Function],
                                                "transitions": Object {
                                                  "create": [Function],
                                                  "duration": Object {
                                                    "complex": 375,
                                                    "enteringScreen": 225,
                                                    "leavingScreen": 195,
                                                    "short": 250,
                                                    "shorter": 200,
                                                    "shortest": 150,
                                                    "standard": 300,
                                                  },
                                                  "easing": Object {
                                                    "easeIn": "cubic-bezier(0.4, 0, 1, 1)",
                                                    "easeInOut": "cubic-bezier(0.4, 0, 0.2, 1)",
                                                    "easeOut": "cubic-bezier(0.0, 0, 0.2, 1)",
                                                    "sharp": "cubic-bezier(0.4, 0, 0.6, 1)",
                                                  },
                                                  "getAutoHeightDuration": [Function],
                                                },
                                                "typography": Object {
                                                  "body1": Object {
                                                    "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                    "fontSize": "1rem",
                                                    "fontWeight": 400,
                                                    "letterSpacing": "0.00938em",
                                                    "lineHeight": 1.5,
                                                  },
                                                  "body2": Object {
                                                    "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                    "fontSize": "0.875rem",
                                                    "fontWeight": 400,
                                                    "letterSpacing": "0.01071em",
                                                    "lineHeight": 1.43,
                                                  },
                                                  "button": Object {
                                                    "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                    "fontSize": "0.875rem",
                                                    "fontWeight": 500,
                                                    "letterSpacing": "0.02857em",
                                                    "lineHeight": 1.75,
                                                    "textTransform": "uppercase",
                                                  },
                                                  "caption": Object {
                                                    "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                    "fontSize": "0.75rem",
                                                    "fontWeight": 400,
                                                    "letterSpacing": "0.03333em",
                                                    "lineHeight": 1.66,
                                                  },
                                                  "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                  "fontSize": 14,
                                                  "fontWeightBold": 700,
                                                  "fontWeightLight": 300,
                                                  "fontWeightMedium": 500,
                                                  "fontWeightRegular": 400,
                                                  "h1": Object {
                                                    "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                    "fontSize": "6rem",
                                                    "fontWeight": 300,
                                                    "letterSpacing": "-0.01562em",
                                                    "lineHeight": 1,
                                                  },
                                                  "h2": Object {
                                                    "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                    "fontSize": "3.75rem",
                                                    "fontWeight": 300,
                                                    "letterSpacing": "-0.00833em",
                                                    "lineHeight": 1,
                                                  },
                                                  "h3": Object {
                                                    "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                    "fontSize": "3rem",
                                                    "fontWeight": 400,
                                                    "letterSpacing": "0em",
                                                    "lineHeight": 1.04,
                                                  },
                                                  "h4": Object {
                                                    "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                    "fontSize": "2.125rem",
                                                    "fontWeight": 400,
                                                    "letterSpacing": "0.00735em",
                                                    "lineHeight": 1.17,
                                                  },
                                                  "h5": Object {
                                                    "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                    "fontSize": "1.5rem",
                                                    "fontWeight": 400,
                                                    "letterSpacing": "0em",
                                                    "lineHeight": 1.33,
                                                  },
                                                  "h6": Object {
                                                    "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                    "fontSize": "1.25rem",
                                                    "fontWeight": 500,
                                                    "letterSpacing": "0.0075em",
                                                    "lineHeight": 1.6,
                                                  },
                                                  "htmlFontSize": 16,
                                                  "overline": Object {
                                                    "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                    "fontSize": "0.75rem",
                                                    "fontWeight": 400,
                                                    "letterSpacing": "0.08333em",
                                                    "lineHeight": 2.66,
                                                    "textTransform": "uppercase",
                                                  },
                                                  "pxToRem": [Function],
                                                  "round": [Function],
                                                  "subtitle1": Object {
                                                    "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                    "fontSize": "1rem",
                                                    "fontWeight": 400,
                                                    "letterSpacing": "0.00938em",
                                                    "lineHeight": 1.75,
                                                  },
                                                  "subtitle2": Object {
                                                    "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                    "fontSize": "0.875rem",
                                                    "fontWeight": 500,
                                                    "letterSpacing": "0.00714em",
                                                    "lineHeight": 1.57,
                                                  },
                                                },
                                                "zIndex": Object {
                                                  "appBar": 1100,
                                                  "drawer": 1200,
                                                  "mobileStepper": 1000,
                                                  "modal": 1300,
                                                  "snackbar": 1400,
                                                  "tooltip": 1500,
                                                },
                                              }
                                            }
                                          >
                                            <p
                                              className="MuiTypography-root MuiTypography-body1 MuiTypography-noWrap"
                                            >
                                               
                                            </p>
                                          </ForwardRef(Typography)>
                                        </WithStyles(ForwardRef(Typography))>
                                        <div
                                          className="makeStyles-grow-1"
                                        />
                                        <WithStyles(ForwardRef(Button))
                                          className="margin3"
                                          color="primary"
                                          disabled={true}
                                          onClick={[Function]}
                                          variant="contained"
                                        >
                                          <ForwardRef(Button)
                                            className="margin3"
                                            classes={
                                              Object {
                                                "colorInherit": "MuiButton-colorInherit",
                                                "contained": "MuiButton-contained",
                                                "containedPrimary": "MuiButton-containedPrimary",
                                                "containedSecondary": "MuiButton-containedSecondary",
                                                "disabled": "Mui-disabled",
                                                "focusVisible": "Mui-focusVisible",
                                                "fullWidth": "MuiButton-fullWidth",
                                                "label": "MuiButton-label",
                                                "outlined": "MuiButton-outlined",
                                                "outlinedPrimary": "MuiButton-outlinedPrimary",
                                                "outlinedSecondary": "MuiButton-outlinedSecondary",
                                                "root": "MuiButton-root",
                                                "sizeLarge": "MuiButton-sizeLarge",
                                                "sizeSmall": "MuiButton-sizeSmall",
                                                "text": "MuiButton-text",
                                                "textPrimary": "MuiButton-textPrimary",
                                                "textSecondary": "MuiButton-textSecondary",
                                              }
                                            }
                                            color="primary"
                                            disabled={true}
                                            onClick={[Function]}
                                            variant="contained"
                                          >
                                            <WithStyles(ForwardRef(ButtonBase))
                                              className="MuiButton-root margin3 MuiButton-contained MuiButton-containedPrimary Mui-disabled"
                                              component="button"
                                              disabled={true}
                                              focusRipple={true}
                                              focusVisibleClassName="Mui-focusVisible"
                                              onClick={[Function]}
                                              type="button"
                                            >
                                              <ForwardRef(ButtonBase)
                                                className="MuiButton-root margin3 MuiButton-contained MuiButton-containedPrimary Mui-disabled"
                                                classes={
                                                  Object {
                                                    "disabled": "Mui-disabled",
                                                    "focusVisible": "Mui-focusVisible",
                                                    "root": "MuiButtonBase-root",
                                                  }
                                                }
                                                component="button"
                                                disabled={true}
                                                focusRipple={true}
                                                focusVisibleClassName="Mui-focusVisible"
                                                onClick={[Function]}
                                                type="button"
                                              >
                                                <button
                                                  className="MuiButtonBase-root MuiButton-root margin3 MuiButton-contained MuiButton-containedPrimary Mui-disabled Mui-disabled"
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
                                                    Return Drone
                                                  </span>
                                                </button>
                                              </ForwardRef(ButtonBase)>
                                            </WithStyles(ForwardRef(ButtonBase))>
                                          </ForwardRef(Button)>
                                        </WithStyles(ForwardRef(Button))>
                                        <div
                                          className="makeStyles-grow-1"
                                        />
                                        <b>
                                           
                                          , 
                                           
                                        </b>
                                        <div
                                          className="makeStyles-sectionDesktop-3"
                                        >
                                          <WithStyles(ForwardRef(IconButton))
                                            aria-controls="profile-account-menu"
                                            aria-haspopup="true"
                                            aria-label="Account of current user"
                                            color="inherit"
                                            edge="end"
                                            onClick={[Function]}
                                          >
                                            <ForwardRef(IconButton)
                                              aria-controls="profile-account-menu"
                                              aria-haspopup="true"
                                              aria-label="Account of current user"
                                              classes={
                                                Object {
                                                  "colorInherit": "MuiIconButton-colorInherit",
                                                  "colorPrimary": "MuiIconButton-colorPrimary",
                                                  "colorSecondary": "MuiIconButton-colorSecondary",
                                                  "disabled": "Mui-disabled",
                                                  "edgeEnd": "MuiIconButton-edgeEnd",
                                                  "edgeStart": "MuiIconButton-edgeStart",
                                                  "label": "MuiIconButton-label",
                                                  "root": "MuiIconButton-root",
                                                  "sizeSmall": "MuiIconButton-sizeSmall",
                                                }
                                              }
                                              color="inherit"
                                              edge="end"
                                              onClick={[Function]}
                                            >
                                              <WithStyles(ForwardRef(ButtonBase))
                                                aria-controls="profile-account-menu"
                                                aria-haspopup="true"
                                                aria-label="Account of current user"
                                                centerRipple={true}
                                                className="MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-edgeEnd"
                                                disabled={false}
                                                focusRipple={true}
                                                onClick={[Function]}
                                              >
                                                <ForwardRef(ButtonBase)
                                                  aria-controls="profile-account-menu"
                                                  aria-haspopup="true"
                                                  aria-label="Account of current user"
                                                  centerRipple={true}
                                                  className="MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-edgeEnd"
                                                  classes={
                                                    Object {
                                                      "disabled": "Mui-disabled",
                                                      "focusVisible": "Mui-focusVisible",
                                                      "root": "MuiButtonBase-root",
                                                    }
                                                  }
                                                  disabled={false}
                                                  focusRipple={true}
                                                  onClick={[Function]}
                                                >
                                                  <button
                                                    aria-controls="profile-account-menu"
                                                    aria-haspopup="true"
                                                    aria-label="Account of current user"
                                                    className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-edgeEnd"
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
                                                      className="MuiIconButton-label"
                                                    >
                                                      <ForwardRef>
                                                        <WithStyles(ForwardRef(SvgIcon))>
                                                          <ForwardRef(SvgIcon)
                                                            classes={
                                                              Object {
                                                                "colorAction": "MuiSvgIcon-colorAction",
                                                                "colorDisabled": "MuiSvgIcon-colorDisabled",
                                                                "colorError": "MuiSvgIcon-colorError",
                                                                "colorPrimary": "MuiSvgIcon-colorPrimary",
                                                                "colorSecondary": "MuiSvgIcon-colorSecondary",
                                                                "fontSizeInherit": "MuiSvgIcon-fontSizeInherit",
                                                                "fontSizeLarge": "MuiSvgIcon-fontSizeLarge",
                                                                "fontSizeSmall": "MuiSvgIcon-fontSizeSmall",
                                                                "root": "MuiSvgIcon-root",
                                                              }
                                                            }
                                                          >
                                                            <svg
                                                              aria-hidden="true"
                                                              className="MuiSvgIcon-root"
                                                              focusable="false"
                                                              role="presentation"
                                                              viewBox="0 0 24 24"
                                                            >
                                                              <path
                                                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
                                                              />
                                                            </svg>
                                                          </ForwardRef(SvgIcon)>
                                                        </WithStyles(ForwardRef(SvgIcon))>
                                                      </ForwardRef>
                                                    </span>
                                                    <NoSsr>
                                                      <WithStyles(undefined)
                                                        center={true}
                                                      >
                                                        <ForwardRef(TouchRipple)
                                                          center={true}
                                                          classes={
                                                            Object {
                                                              "child": "MuiTouchRipple-child",
                                                              "childLeaving": "MuiTouchRipple-childLeaving",
                                                              "childPulsate": "MuiTouchRipple-childPulsate",
                                                              "ripple": "MuiTouchRipple-ripple",
                                                              "ripplePulsate": "MuiTouchRipple-ripplePulsate",
                                                              "rippleVisible": "MuiTouchRipple-rippleVisible",
                                                              "root": "MuiTouchRipple-root",
                                                            }
                                                          }
                                                        >
                                                          <span
                                                            className="MuiTouchRipple-root"
                                                          >
                                                            <TransitionGroup
                                                              childFactory={[Function]}
                                                              component={null}
                                                              exit={true}
                                                            />
                                                          </span>
                                                        </ForwardRef(TouchRipple)>
                                                      </WithStyles(undefined)>
                                                    </NoSsr>
                                                  </button>
                                                </ForwardRef(ButtonBase)>
                                              </WithStyles(ForwardRef(ButtonBase))>
                                            </ForwardRef(IconButton)>
                                          </WithStyles(ForwardRef(IconButton))>
                                        </div>
                                      </div>
                                    </ForwardRef(Toolbar)>
                                  </WithStyles(ForwardRef(Toolbar))>
                                </header>
                              </ForwardRef(Paper)>
                            </WithStyles(ForwardRef(Paper))>
                          </ForwardRef(AppBar)>
                        </WithStyles(ForwardRef(AppBar))>
                        <WithStyles(ForwardRef(Menu))
                          anchorEl={null}
                          anchorOrigin={
                            Object {
                              "horizontal": "right",
                              "vertical": "top",
                            }
                          }
                          id="profile-account-menu"
                          keepMounted={true}
                          onClose={[Function]}
                          open={false}
                          transformOrigin={
                            Object {
                              "horizontal": "right",
                              "vertical": "top",
                            }
                          }
                        >
                          <ForwardRef(Menu)
                            anchorEl={null}
                            anchorOrigin={
                              Object {
                                "horizontal": "right",
                                "vertical": "top",
                              }
                            }
                            classes={
                              Object {
                                "list": "MuiMenu-list",
                                "paper": "MuiMenu-paper",
                              }
                            }
                            id="profile-account-menu"
                            keepMounted={true}
                            onClose={[Function]}
                            open={false}
                            theme={
                              Object {
                                "breakpoints": Object {
                                  "between": [Function],
                                  "down": [Function],
                                  "keys": Array [
                                    "xs",
                                    "sm",
                                    "md",
                                    "lg",
                                    "xl",
                                  ],
                                  "only": [Function],
                                  "up": [Function],
                                  "values": Object {
                                    "lg": 1280,
                                    "md": 960,
                                    "sm": 600,
                                    "xl": 1920,
                                    "xs": 0,
                                  },
                                  "width": [Function],
                                },
                                "direction": "ltr",
                                "mixins": Object {
                                  "gutters": [Function],
                                  "toolbar": Object {
                                    "@media (min-width:0px) and (orientation: landscape)": Object {
                                      "minHeight": 48,
                                    },
                                    "@media (min-width:600px)": Object {
                                      "minHeight": 64,
                                    },
                                    "minHeight": 56,
                                  },
                                },
                                "overrides": Object {},
                                "palette": Object {
                                  "action": Object {
                                    "active": "rgba(0, 0, 0, 0.54)",
                                    "disabled": "rgba(0, 0, 0, 0.26)",
                                    "disabledBackground": "rgba(0, 0, 0, 0.12)",
                                    "hover": "rgba(0, 0, 0, 0.08)",
                                    "hoverOpacity": 0.08,
                                    "selected": "rgba(0, 0, 0, 0.14)",
                                  },
                                  "augmentColor": [Function],
                                  "background": Object {
                                    "default": "#fafafa",
                                    "paper": "#fff",
                                  },
                                  "common": Object {
                                    "black": "#000",
                                    "white": "#fff",
                                  },
                                  "contrastThreshold": 3,
                                  "divider": "rgba(0, 0, 0, 0.12)",
                                  "error": Object {
                                    "contrastText": "#fff",
                                    "dark": "#d32f2f",
                                    "light": "#e57373",
                                    "main": "#f44336",
                                  },
                                  "getContrastText": [Function],
                                  "grey": Object {
                                    "100": "#f5f5f5",
                                    "200": "#eeeeee",
                                    "300": "#e0e0e0",
                                    "400": "#bdbdbd",
                                    "50": "#fafafa",
                                    "500": "#9e9e9e",
                                    "600": "#757575",
                                    "700": "#616161",
                                    "800": "#424242",
                                    "900": "#212121",
                                    "A100": "#d5d5d5",
                                    "A200": "#aaaaaa",
                                    "A400": "#303030",
                                    "A700": "#616161",
                                  },
                                  "primary": Object {
                                    "contrastText": "#fff",
                                    "dark": "#303f9f",
                                    "light": "#7986cb",
                                    "main": "#3f51b5",
                                  },
                                  "secondary": Object {
                                    "contrastText": "#fff",
                                    "dark": "#c51162",
                                    "light": "#ff4081",
                                    "main": "#f50057",
                                  },
                                  "text": Object {
                                    "disabled": "rgba(0, 0, 0, 0.38)",
                                    "hint": "rgba(0, 0, 0, 0.38)",
                                    "primary": "rgba(0, 0, 0, 0.87)",
                                    "secondary": "rgba(0, 0, 0, 0.54)",
                                  },
                                  "tonalOffset": 0.2,
                                  "type": "light",
                                },
                                "props": Object {},
                                "shadows": Array [
                                  "none",
                                  "0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)",
                                  "0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)",
                                  "0px 1px 8px 0px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 3px 3px -2px rgba(0,0,0,0.12)",
                                  "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
                                  "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
                                  "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
                                  "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
                                  "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
                                  "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
                                  "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
                                  "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
                                  "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
                                  "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
                                  "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
                                  "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
                                  "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
                                  "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
                                  "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
                                  "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
                                  "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
                                  "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
                                  "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
                                  "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
                                  "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
                                ],
                                "shape": Object {
                                  "borderRadius": 4,
                                },
                                "spacing": [Function],
                                "transitions": Object {
                                  "create": [Function],
                                  "duration": Object {
                                    "complex": 375,
                                    "enteringScreen": 225,
                                    "leavingScreen": 195,
                                    "short": 250,
                                    "shorter": 200,
                                    "shortest": 150,
                                    "standard": 300,
                                  },
                                  "easing": Object {
                                    "easeIn": "cubic-bezier(0.4, 0, 1, 1)",
                                    "easeInOut": "cubic-bezier(0.4, 0, 0.2, 1)",
                                    "easeOut": "cubic-bezier(0.0, 0, 0.2, 1)",
                                    "sharp": "cubic-bezier(0.4, 0, 0.6, 1)",
                                  },
                                  "getAutoHeightDuration": [Function],
                                },
                                "typography": Object {
                                  "body1": Object {
                                    "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                    "fontSize": "1rem",
                                    "fontWeight": 400,
                                    "letterSpacing": "0.00938em",
                                    "lineHeight": 1.5,
                                  },
                                  "body2": Object {
                                    "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                    "fontSize": "0.875rem",
                                    "fontWeight": 400,
                                    "letterSpacing": "0.01071em",
                                    "lineHeight": 1.43,
                                  },
                                  "button": Object {
                                    "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                    "fontSize": "0.875rem",
                                    "fontWeight": 500,
                                    "letterSpacing": "0.02857em",
                                    "lineHeight": 1.75,
                                    "textTransform": "uppercase",
                                  },
                                  "caption": Object {
                                    "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                    "fontSize": "0.75rem",
                                    "fontWeight": 400,
                                    "letterSpacing": "0.03333em",
                                    "lineHeight": 1.66,
                                  },
                                  "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                  "fontSize": 14,
                                  "fontWeightBold": 700,
                                  "fontWeightLight": 300,
                                  "fontWeightMedium": 500,
                                  "fontWeightRegular": 400,
                                  "h1": Object {
                                    "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                    "fontSize": "6rem",
                                    "fontWeight": 300,
                                    "letterSpacing": "-0.01562em",
                                    "lineHeight": 1,
                                  },
                                  "h2": Object {
                                    "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                    "fontSize": "3.75rem",
                                    "fontWeight": 300,
                                    "letterSpacing": "-0.00833em",
                                    "lineHeight": 1,
                                  },
                                  "h3": Object {
                                    "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                    "fontSize": "3rem",
                                    "fontWeight": 400,
                                    "letterSpacing": "0em",
                                    "lineHeight": 1.04,
                                  },
                                  "h4": Object {
                                    "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                    "fontSize": "2.125rem",
                                    "fontWeight": 400,
                                    "letterSpacing": "0.00735em",
                                    "lineHeight": 1.17,
                                  },
                                  "h5": Object {
                                    "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                    "fontSize": "1.5rem",
                                    "fontWeight": 400,
                                    "letterSpacing": "0em",
                                    "lineHeight": 1.33,
                                  },
                                  "h6": Object {
                                    "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                    "fontSize": "1.25rem",
                                    "fontWeight": 500,
                                    "letterSpacing": "0.0075em",
                                    "lineHeight": 1.6,
                                  },
                                  "htmlFontSize": 16,
                                  "overline": Object {
                                    "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                    "fontSize": "0.75rem",
                                    "fontWeight": 400,
                                    "letterSpacing": "0.08333em",
                                    "lineHeight": 2.66,
                                    "textTransform": "uppercase",
                                  },
                                  "pxToRem": [Function],
                                  "round": [Function],
                                  "subtitle1": Object {
                                    "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                    "fontSize": "1rem",
                                    "fontWeight": 400,
                                    "letterSpacing": "0.00938em",
                                    "lineHeight": 1.75,
                                  },
                                  "subtitle2": Object {
                                    "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                    "fontSize": "0.875rem",
                                    "fontWeight": 500,
                                    "letterSpacing": "0.00714em",
                                    "lineHeight": 1.57,
                                  },
                                },
                                "zIndex": Object {
                                  "appBar": 1100,
                                  "drawer": 1200,
                                  "mobileStepper": 1000,
                                  "modal": 1300,
                                  "snackbar": 1400,
                                  "tooltip": 1500,
                                },
                              }
                            }
                            transformOrigin={
                              Object {
                                "horizontal": "right",
                                "vertical": "top",
                              }
                            }
                          >
                            <WithStyles(ForwardRef(Popover))
                              PaperProps={
                                Object {
                                  "classes": Object {
                                    "root": "MuiMenu-paper",
                                  },
                                }
                              }
                              anchorEl={null}
                              anchorOrigin={
                                Object {
                                  "horizontal": "right",
                                  "vertical": "top",
                                }
                              }
                              getContentAnchorEl={[Function]}
                              id="profile-account-menu"
                              keepMounted={true}
                              onClose={[Function]}
                              onEntering={[Function]}
                              open={false}
                              transformOrigin={
                                Object {
                                  "horizontal": "right",
                                  "vertical": "top",
                                }
                              }
                              transitionDuration="auto"
                            >
                              <ForwardRef(Popover)
                                PaperProps={
                                  Object {
                                    "classes": Object {
                                      "root": "MuiMenu-paper",
                                    },
                                  }
                                }
                                anchorEl={null}
                                anchorOrigin={
                                  Object {
                                    "horizontal": "right",
                                    "vertical": "top",
                                  }
                                }
                                classes={
                                  Object {
                                    "paper": "MuiPopover-paper",
                                  }
                                }
                                getContentAnchorEl={[Function]}
                                id="profile-account-menu"
                                keepMounted={true}
                                onClose={[Function]}
                                onEntering={[Function]}
                                open={false}
                                transformOrigin={
                                  Object {
                                    "horizontal": "right",
                                    "vertical": "top",
                                  }
                                }
                                transitionDuration="auto"
                              >
                                <ForwardRef(Modal)
                                  BackdropProps={
                                    Object {
                                      "invisible": true,
                                    }
                                  }
                                  id="profile-account-menu"
                                  keepMounted={true}
                                  onClose={[Function]}
                                  open={false}
                                >
                                  <ForwardRef(Portal)
                                    disablePortal={false}
                                    onRendered={[Function]}
                                  >
                                    <Portal
                                      containerInfo={
                                        <body>
                                          <div
                                            aria-hidden="true"
                                            id="profile-account-menu"
                                            role="presentation"
                                            style="position: fixed; z-index: 1300; right: 0px; bottom: 0px; top: 0px; left: 0px; visibility: hidden;"
                                          >
                                            <div
                                              data-test="sentinelStart"
                                              tabindex="0"
                                            />
                                            <div
                                              class="MuiPaper-root MuiMenu-paper MuiPaper-elevation8 MuiPopover-paper MuiPaper-rounded"
                                              role="document"
                                              style="opacity: 0; transform: scale(0.75, 0.5625); visibility: hidden;"
                                              tabindex="-1"
                                            >
                                              <ul
                                                class="MuiList-root MuiMenu-list MuiList-padding"
                                                role="menu"
                                                tabindex="-1"
                                              >
                                                <li
                                                  aria-disabled="false"
                                                  class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                                                  role="menuitem"
                                                  tabindex="-1"
                                                >
                                                  Sign Out
                                                  <span
                                                    class="MuiTouchRipple-root"
                                                  />
                                                </li>
                                              </ul>
                                            </div>
                                            <div
                                              data-test="sentinelEnd"
                                              tabindex="0"
                                            />
                                          </div>
                                          <div
                                            aria-hidden="true"
                                            id="profile-account-menu"
                                            role="presentation"
                                            style="position: fixed; z-index: 1300; right: 0px; bottom: 0px; top: 0px; left: 0px; visibility: hidden;"
                                          >
                                            <div
                                              data-test="sentinelStart"
                                              tabindex="0"
                                            />
                                            <div
                                              class="MuiPaper-root MuiMenu-paper MuiPaper-elevation8 MuiPopover-paper MuiPaper-rounded"
                                              role="document"
                                              style="opacity: 0; transform: scale(0.75, 0.5625); visibility: hidden;"
                                              tabindex="-1"
                                            >
                                              <ul
                                                class="MuiList-root MuiMenu-list MuiList-padding"
                                                role="menu"
                                                tabindex="-1"
                                              >
                                                <li
                                                  aria-disabled="false"
                                                  class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                                                  role="menuitem"
                                                  tabindex="-1"
                                                >
                                                  Sign Out
                                                  <span
                                                    class="MuiTouchRipple-root"
                                                  />
                                                </li>
                                              </ul>
                                            </div>
                                            <div
                                              data-test="sentinelEnd"
                                              tabindex="0"
                                            />
                                          </div>
                                        </body>
                                      }
                                    >
                                      <div
                                        id="profile-account-menu"
                                        onKeyDown={[Function]}
                                        role="presentation"
                                        style={
                                          Object {
                                            "bottom": 0,
                                            "left": 0,
                                            "position": "fixed",
                                            "right": 0,
                                            "top": 0,
                                            "visibility": "hidden",
                                            "zIndex": 1300,
                                          }
                                        }
                                      >
                                        <ForwardRef(SimpleBackdrop)
                                          invisible={true}
                                          onClick={[Function]}
                                          open={false}
                                        />
                                        <TrapFocus
                                          disableAutoFocus={false}
                                          disableEnforceFocus={false}
                                          disableRestoreFocus={false}
                                          getDoc={[Function]}
                                          isEnabled={[Function]}
                                          open={false}
                                        >
                                          <div
                                            data-test="sentinelStart"
                                            tabIndex={0}
                                          />
                                          <ForwardRef(Grow)
                                            appear={true}
                                            in={false}
                                            onEnter={[Function]}
                                            onEntering={[Function]}
                                            onExited={[Function]}
                                            role="document"
                                            tabIndex="-1"
                                            timeout="auto"
                                          >
                                            <Transition
                                              addEndListener={[Function]}
                                              appear={true}
                                              enter={true}
                                              exit={true}
                                              in={false}
                                              mountOnEnter={false}
                                              onEnter={[Function]}
                                              onEntered={[Function]}
                                              onEntering={[Function]}
                                              onExit={[Function]}
                                              onExited={[Function]}
                                              onExiting={[Function]}
                                              role="document"
                                              tabIndex="-1"
                                              timeout={null}
                                              unmountOnExit={false}
                                            >
                                              <WithStyles(ForwardRef(Paper))
                                                className="MuiPopover-paper"
                                                classes={
                                                  Object {
                                                    "root": "MuiMenu-paper",
                                                  }
                                                }
                                                elevation={8}
                                                role="document"
                                                style={
                                                  Object {
                                                    "opacity": 0,
                                                    "transform": "scale(0.75, 0.5625)",
                                                    "visibility": "hidden",
                                                  }
                                                }
                                                tabIndex="-1"
                                              >
                                                <ForwardRef(Paper)
                                                  className="MuiPopover-paper"
                                                  classes={
                                                    Object {
                                                      "elevation0": "MuiPaper-elevation0",
                                                      "elevation1": "MuiPaper-elevation1",
                                                      "elevation10": "MuiPaper-elevation10",
                                                      "elevation11": "MuiPaper-elevation11",
                                                      "elevation12": "MuiPaper-elevation12",
                                                      "elevation13": "MuiPaper-elevation13",
                                                      "elevation14": "MuiPaper-elevation14",
                                                      "elevation15": "MuiPaper-elevation15",
                                                      "elevation16": "MuiPaper-elevation16",
                                                      "elevation17": "MuiPaper-elevation17",
                                                      "elevation18": "MuiPaper-elevation18",
                                                      "elevation19": "MuiPaper-elevation19",
                                                      "elevation2": "MuiPaper-elevation2",
                                                      "elevation20": "MuiPaper-elevation20",
                                                      "elevation21": "MuiPaper-elevation21",
                                                      "elevation22": "MuiPaper-elevation22",
                                                      "elevation23": "MuiPaper-elevation23",
                                                      "elevation24": "MuiPaper-elevation24",
                                                      "elevation3": "MuiPaper-elevation3",
                                                      "elevation4": "MuiPaper-elevation4",
                                                      "elevation5": "MuiPaper-elevation5",
                                                      "elevation6": "MuiPaper-elevation6",
                                                      "elevation7": "MuiPaper-elevation7",
                                                      "elevation8": "MuiPaper-elevation8",
                                                      "elevation9": "MuiPaper-elevation9",
                                                      "root": "MuiPaper-root MuiMenu-paper",
                                                      "rounded": "MuiPaper-rounded",
                                                    }
                                                  }
                                                  elevation={8}
                                                  role="document"
                                                  style={
                                                    Object {
                                                      "opacity": 0,
                                                      "transform": "scale(0.75, 0.5625)",
                                                      "visibility": "hidden",
                                                    }
                                                  }
                                                  tabIndex="-1"
                                                >
                                                  <div
                                                    className="MuiPaper-root MuiMenu-paper MuiPaper-elevation8 MuiPopover-paper MuiPaper-rounded"
                                                    role="document"
                                                    style={
                                                      Object {
                                                        "opacity": 0,
                                                        "transform": "scale(0.75, 0.5625)",
                                                        "visibility": "hidden",
                                                      }
                                                    }
                                                    tabIndex="-1"
                                                  >
                                                    <ForwardRef(MenuList)
                                                      actions={
                                                        Object {
                                                          "current": Object {
                                                            "adjustStyleForScrollbar": [Function],
                                                          },
                                                        }
                                                      }
                                                      autoFocus={false}
                                                      className="MuiMenu-list"
                                                      onKeyDown={[Function]}
                                                    >
                                                      <WithStyles(ForwardRef(List))
                                                        className="MuiMenu-list"
                                                        onKeyDown={[Function]}
                                                        role="menu"
                                                        tabIndex={-1}
                                                      >
                                                        <ForwardRef(List)
                                                          className="MuiMenu-list"
                                                          classes={
                                                            Object {
                                                              "dense": "MuiList-dense",
                                                              "padding": "MuiList-padding",
                                                              "root": "MuiList-root",
                                                              "subheader": "MuiList-subheader",
                                                            }
                                                          }
                                                          onKeyDown={[Function]}
                                                          role="menu"
                                                          tabIndex={-1}
                                                        >
                                                          <ul
                                                            className="MuiList-root MuiMenu-list MuiList-padding"
                                                            onKeyDown={[Function]}
                                                            role="menu"
                                                            tabIndex={-1}
                                                          >
                                                            <WithStyles(ForwardRef(MenuItem))
                                                              key=".0"
                                                              onClick={[Function]}
                                                            >
                                                              <ForwardRef(MenuItem)
                                                                classes={
                                                                  Object {
                                                                    "dense": "MuiMenuItem-dense",
                                                                    "gutters": "MuiMenuItem-gutters",
                                                                    "root": "MuiMenuItem-root",
                                                                    "selected": "Mui-selected",
                                                                  }
                                                                }
                                                                onClick={[Function]}
                                                              >
                                                                <WithStyles(ForwardRef(ListItem))
                                                                  button={true}
                                                                  className="MuiMenuItem-root MuiMenuItem-gutters"
                                                                  classes={
                                                                    Object {
                                                                      "dense": "MuiMenuItem-dense",
                                                                    }
                                                                  }
                                                                  component="li"
                                                                  disableGutters={false}
                                                                  onClick={[Function]}
                                                                  role="menuitem"
                                                                  tabIndex={-1}
                                                                >
                                                                  <ForwardRef(ListItem)
                                                                    button={true}
                                                                    className="MuiMenuItem-root MuiMenuItem-gutters"
                                                                    classes={
                                                                      Object {
                                                                        "alignItemsFlexStart": "MuiListItem-alignItemsFlexStart",
                                                                        "button": "MuiListItem-button",
                                                                        "container": "MuiListItem-container",
                                                                        "dense": "MuiListItem-dense MuiMenuItem-dense",
                                                                        "disabled": "Mui-disabled",
                                                                        "divider": "MuiListItem-divider",
                                                                        "focusVisible": "Mui-focusVisible",
                                                                        "gutters": "MuiListItem-gutters",
                                                                        "root": "MuiListItem-root",
                                                                        "secondaryAction": "MuiListItem-secondaryAction",
                                                                        "selected": "Mui-selected",
                                                                      }
                                                                    }
                                                                    component="li"
                                                                    disableGutters={false}
                                                                    onClick={[Function]}
                                                                    role="menuitem"
                                                                    tabIndex={-1}
                                                                  >
                                                                    <WithStyles(ForwardRef(ButtonBase))
                                                                      className="MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                                                                      component="li"
                                                                      disabled={false}
                                                                      focusVisibleClassName="Mui-focusVisible"
                                                                      onClick={[Function]}
                                                                      role="menuitem"
                                                                      tabIndex={-1}
                                                                    >
                                                                      <ForwardRef(ButtonBase)
                                                                        className="MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                                                                        classes={
                                                                          Object {
                                                                            "disabled": "Mui-disabled",
                                                                            "focusVisible": "Mui-focusVisible",
                                                                            "root": "MuiButtonBase-root",
                                                                          }
                                                                        }
                                                                        component="li"
                                                                        disabled={false}
                                                                        focusVisibleClassName="Mui-focusVisible"
                                                                        onClick={[Function]}
                                                                        role="menuitem"
                                                                        tabIndex={-1}
                                                                      >
                                                                        <li
                                                                          aria-disabled={false}
                                                                          className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
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
                                                                          role="menuitem"
                                                                          tabIndex={-1}
                                                                        >
                                                                          Sign Out
                                                                          <NoSsr>
                                                                            <WithStyles(undefined)
                                                                              center={false}
                                                                            >
                                                                              <ForwardRef(TouchRipple)
                                                                                center={false}
                                                                                classes={
                                                                                  Object {
                                                                                    "child": "MuiTouchRipple-child",
                                                                                    "childLeaving": "MuiTouchRipple-childLeaving",
                                                                                    "childPulsate": "MuiTouchRipple-childPulsate",
                                                                                    "ripple": "MuiTouchRipple-ripple",
                                                                                    "ripplePulsate": "MuiTouchRipple-ripplePulsate",
                                                                                    "rippleVisible": "MuiTouchRipple-rippleVisible",
                                                                                    "root": "MuiTouchRipple-root",
                                                                                  }
                                                                                }
                                                                              >
                                                                                <span
                                                                                  className="MuiTouchRipple-root"
                                                                                >
                                                                                  <TransitionGroup
                                                                                    childFactory={[Function]}
                                                                                    component={null}
                                                                                    exit={true}
                                                                                  />
                                                                                </span>
                                                                              </ForwardRef(TouchRipple)>
                                                                            </WithStyles(undefined)>
                                                                          </NoSsr>
                                                                        </li>
                                                                      </ForwardRef(ButtonBase)>
                                                                    </WithStyles(ForwardRef(ButtonBase))>
                                                                  </ForwardRef(ListItem)>
                                                                </WithStyles(ForwardRef(ListItem))>
                                                              </ForwardRef(MenuItem)>
                                                            </WithStyles(ForwardRef(MenuItem))>
                                                          </ul>
                                                        </ForwardRef(List)>
                                                      </WithStyles(ForwardRef(List))>
                                                    </ForwardRef(MenuList)>
                                                  </div>
                                                </ForwardRef(Paper)>
                                              </WithStyles(ForwardRef(Paper))>
                                            </Transition>
                                          </ForwardRef(Grow)>
                                          <div
                                            data-test="sentinelEnd"
                                            tabIndex={0}
                                          />
                                        </TrapFocus>
                                      </div>
                                    </Portal>
                                  </ForwardRef(Portal)>
                                </ForwardRef(Modal)>
                              </ForwardRef(Popover)>
                            </WithStyles(ForwardRef(Popover))>
                          </ForwardRef(Menu)>
                        </WithStyles(ForwardRef(Menu))>
                      </div>
                    </HeaderAppBar>
                    <section
                      className="dashboard__cont"
                    >
                      <WithStyles(ForwardRef(Container))
                        maxWidth="lg"
                      >
                        <ForwardRef(Container)
                          classes={
                            Object {
                              "fixed": "MuiContainer-fixed",
                              "maxWidthLg": "MuiContainer-maxWidthLg",
                              "maxWidthMd": "MuiContainer-maxWidthMd",
                              "maxWidthSm": "MuiContainer-maxWidthSm",
                              "maxWidthXl": "MuiContainer-maxWidthXl",
                              "maxWidthXs": "MuiContainer-maxWidthXs",
                              "root": "MuiContainer-root",
                            }
                          }
                          maxWidth="lg"
                        >
                          <div
                            className="MuiContainer-root MuiContainer-maxWidthLg"
                          >
                            <WithStyles(ForwardRef(Grid))
                              container={true}
                              justify="center"
                              spacing={3}
                            >
                              <ForwardRef(Grid)
                                classes={
                                  Object {
                                    "align-content-xs-center": "MuiGrid-align-content-xs-center",
                                    "align-content-xs-flex-end": "MuiGrid-align-content-xs-flex-end",
                                    "align-content-xs-flex-start": "MuiGrid-align-content-xs-flex-start",
                                    "align-content-xs-space-around": "MuiGrid-align-content-xs-space-around",
                                    "align-content-xs-space-between": "MuiGrid-align-content-xs-space-between",
                                    "align-items-xs-baseline": "MuiGrid-align-items-xs-baseline",
                                    "align-items-xs-center": "MuiGrid-align-items-xs-center",
                                    "align-items-xs-flex-end": "MuiGrid-align-items-xs-flex-end",
                                    "align-items-xs-flex-start": "MuiGrid-align-items-xs-flex-start",
                                    "container": "MuiGrid-container",
                                    "direction-xs-column": "MuiGrid-direction-xs-column",
                                    "direction-xs-column-reverse": "MuiGrid-direction-xs-column-reverse",
                                    "direction-xs-row-reverse": "MuiGrid-direction-xs-row-reverse",
                                    "grid-lg-1": "MuiGrid-grid-lg-1",
                                    "grid-lg-10": "MuiGrid-grid-lg-10",
                                    "grid-lg-11": "MuiGrid-grid-lg-11",
                                    "grid-lg-12": "MuiGrid-grid-lg-12",
                                    "grid-lg-2": "MuiGrid-grid-lg-2",
                                    "grid-lg-3": "MuiGrid-grid-lg-3",
                                    "grid-lg-4": "MuiGrid-grid-lg-4",
                                    "grid-lg-5": "MuiGrid-grid-lg-5",
                                    "grid-lg-6": "MuiGrid-grid-lg-6",
                                    "grid-lg-7": "MuiGrid-grid-lg-7",
                                    "grid-lg-8": "MuiGrid-grid-lg-8",
                                    "grid-lg-9": "MuiGrid-grid-lg-9",
                                    "grid-lg-auto": "MuiGrid-grid-lg-auto",
                                    "grid-lg-true": "MuiGrid-grid-lg-true",
                                    "grid-md-1": "MuiGrid-grid-md-1",
                                    "grid-md-10": "MuiGrid-grid-md-10",
                                    "grid-md-11": "MuiGrid-grid-md-11",
                                    "grid-md-12": "MuiGrid-grid-md-12",
                                    "grid-md-2": "MuiGrid-grid-md-2",
                                    "grid-md-3": "MuiGrid-grid-md-3",
                                    "grid-md-4": "MuiGrid-grid-md-4",
                                    "grid-md-5": "MuiGrid-grid-md-5",
                                    "grid-md-6": "MuiGrid-grid-md-6",
                                    "grid-md-7": "MuiGrid-grid-md-7",
                                    "grid-md-8": "MuiGrid-grid-md-8",
                                    "grid-md-9": "MuiGrid-grid-md-9",
                                    "grid-md-auto": "MuiGrid-grid-md-auto",
                                    "grid-md-true": "MuiGrid-grid-md-true",
                                    "grid-sm-1": "MuiGrid-grid-sm-1",
                                    "grid-sm-10": "MuiGrid-grid-sm-10",
                                    "grid-sm-11": "MuiGrid-grid-sm-11",
                                    "grid-sm-12": "MuiGrid-grid-sm-12",
                                    "grid-sm-2": "MuiGrid-grid-sm-2",
                                    "grid-sm-3": "MuiGrid-grid-sm-3",
                                    "grid-sm-4": "MuiGrid-grid-sm-4",
                                    "grid-sm-5": "MuiGrid-grid-sm-5",
                                    "grid-sm-6": "MuiGrid-grid-sm-6",
                                    "grid-sm-7": "MuiGrid-grid-sm-7",
                                    "grid-sm-8": "MuiGrid-grid-sm-8",
                                    "grid-sm-9": "MuiGrid-grid-sm-9",
                                    "grid-sm-auto": "MuiGrid-grid-sm-auto",
                                    "grid-sm-true": "MuiGrid-grid-sm-true",
                                    "grid-xl-1": "MuiGrid-grid-xl-1",
                                    "grid-xl-10": "MuiGrid-grid-xl-10",
                                    "grid-xl-11": "MuiGrid-grid-xl-11",
                                    "grid-xl-12": "MuiGrid-grid-xl-12",
                                    "grid-xl-2": "MuiGrid-grid-xl-2",
                                    "grid-xl-3": "MuiGrid-grid-xl-3",
                                    "grid-xl-4": "MuiGrid-grid-xl-4",
                                    "grid-xl-5": "MuiGrid-grid-xl-5",
                                    "grid-xl-6": "MuiGrid-grid-xl-6",
                                    "grid-xl-7": "MuiGrid-grid-xl-7",
                                    "grid-xl-8": "MuiGrid-grid-xl-8",
                                    "grid-xl-9": "MuiGrid-grid-xl-9",
                                    "grid-xl-auto": "MuiGrid-grid-xl-auto",
                                    "grid-xl-true": "MuiGrid-grid-xl-true",
                                    "grid-xs-1": "MuiGrid-grid-xs-1",
                                    "grid-xs-10": "MuiGrid-grid-xs-10",
                                    "grid-xs-11": "MuiGrid-grid-xs-11",
                                    "grid-xs-12": "MuiGrid-grid-xs-12",
                                    "grid-xs-2": "MuiGrid-grid-xs-2",
                                    "grid-xs-3": "MuiGrid-grid-xs-3",
                                    "grid-xs-4": "MuiGrid-grid-xs-4",
                                    "grid-xs-5": "MuiGrid-grid-xs-5",
                                    "grid-xs-6": "MuiGrid-grid-xs-6",
                                    "grid-xs-7": "MuiGrid-grid-xs-7",
                                    "grid-xs-8": "MuiGrid-grid-xs-8",
                                    "grid-xs-9": "MuiGrid-grid-xs-9",
                                    "grid-xs-auto": "MuiGrid-grid-xs-auto",
                                    "grid-xs-true": "MuiGrid-grid-xs-true",
                                    "item": "MuiGrid-item",
                                    "justify-xs-center": "MuiGrid-justify-xs-center",
                                    "justify-xs-flex-end": "MuiGrid-justify-xs-flex-end",
                                    "justify-xs-space-around": "MuiGrid-justify-xs-space-around",
                                    "justify-xs-space-between": "MuiGrid-justify-xs-space-between",
                                    "justify-xs-space-evenly": "MuiGrid-justify-xs-space-evenly",
                                    "root": "MuiGrid-root",
                                    "spacing-xs-1": "MuiGrid-spacing-xs-1",
                                    "spacing-xs-10": "MuiGrid-spacing-xs-10",
                                    "spacing-xs-2": "MuiGrid-spacing-xs-2",
                                    "spacing-xs-3": "MuiGrid-spacing-xs-3",
                                    "spacing-xs-4": "MuiGrid-spacing-xs-4",
                                    "spacing-xs-5": "MuiGrid-spacing-xs-5",
                                    "spacing-xs-6": "MuiGrid-spacing-xs-6",
                                    "spacing-xs-7": "MuiGrid-spacing-xs-7",
                                    "spacing-xs-8": "MuiGrid-spacing-xs-8",
                                    "spacing-xs-9": "MuiGrid-spacing-xs-9",
                                    "wrap-xs-nowrap": "MuiGrid-wrap-xs-nowrap",
                                    "wrap-xs-wrap-reverse": "MuiGrid-wrap-xs-wrap-reverse",
                                    "zeroMinWidth": "MuiGrid-zeroMinWidth",
                                  }
                                }
                                container={true}
                                justify="center"
                                spacing={3}
                              >
                                <div
                                  className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 MuiGrid-justify-xs-center"
                                />
                              </ForwardRef(Grid)>
                            </WithStyles(ForwardRef(Grid))>
                          </div>
                        </ForwardRef(Container)>
                      </WithStyles(ForwardRef(Container))>
                    </section>
                    <NotificationBar
                      dismissAfter={5000}
                      msg=""
                      onDimiss={[Function]}
                      showNotification={false}
                      variant=""
                    >
                      <div>
                        <WithStyles(ForwardRef(Snackbar))
                          anchorOrigin={
                            Object {
                              "horizontal": "center",
                              "vertical": "bottom",
                            }
                          }
                          autoHideDuration={5000}
                          onClose={[Function]}
                          open={false}
                        >
                          <ForwardRef(Snackbar)
                            anchorOrigin={
                              Object {
                                "horizontal": "center",
                                "vertical": "bottom",
                              }
                            }
                            autoHideDuration={5000}
                            classes={
                              Object {
                                "anchorOriginBottomCenter": "MuiSnackbar-anchorOriginBottomCenter",
                                "anchorOriginBottomLeft": "MuiSnackbar-anchorOriginBottomLeft",
                                "anchorOriginBottomRight": "MuiSnackbar-anchorOriginBottomRight",
                                "anchorOriginTopCenter": "MuiSnackbar-anchorOriginTopCenter",
                                "anchorOriginTopLeft": "MuiSnackbar-anchorOriginTopLeft",
                                "anchorOriginTopRight": "MuiSnackbar-anchorOriginTopRight",
                                "root": "MuiSnackbar-root",
                              }
                            }
                            onClose={[Function]}
                            open={false}
                          />
                        </WithStyles(ForwardRef(Snackbar))>
                      </div>
                    </NotificationBar>
                  </div>
                </Dashboard>
        `);
});

it("Dashboard renders correctly - return drone voluntarily", () => {
  const wrapper = mount(<Dashboard></Dashboard>);
  const dronesStationCount = 3;
  const { quads: drones } = allDrones;
  const allStations = UtilityHelper.divideDronesAcrossStations(
    drones,
    dronesStationCount
  );

  const stationId = 0;
  const selectedDrone = allStations[stationId][0];

  wrapper
    .instance()
    .setState({ ...wrapper.instance().state, stations: { ...allStations } }); // initialise the stations with drones

  wrapper.instance()._currentUser = {
    emailId: "xyz@gmail.com",
    firstName: "Manoj",
    lastName: "Lakshman",
    phoneNumber: "912",
    isBanned: false
  };

  //return a drone
  wrapper.instance().returnDrone(false);

  expect(EnzymeToJson(wrapper)).toMatchInlineSnapshot(`
            <Dashboard>
              <div
                className="dashboard"
              >
                <HeaderAppBar
                  countDownValue={0}
                  isUserBanned={false}
                  loggedInUser=", "
                  onDroneReturn={[Function]}
                >
                  <div
                    className="header-app-bar"
                  >
                    <WithStyles(ForwardRef(AppBar))
                      position="static"
                    >
                      <ForwardRef(AppBar)
                        classes={
                          Object {
                            "colorDefault": "MuiAppBar-colorDefault",
                            "colorPrimary": "MuiAppBar-colorPrimary",
                            "colorSecondary": "MuiAppBar-colorSecondary",
                            "positionAbsolute": "MuiAppBar-positionAbsolute",
                            "positionFixed": "MuiAppBar-positionFixed",
                            "positionRelative": "MuiAppBar-positionRelative",
                            "positionStatic": "MuiAppBar-positionStatic",
                            "positionSticky": "MuiAppBar-positionSticky",
                            "root": "MuiAppBar-root",
                          }
                        }
                        position="static"
                      >
                        <WithStyles(ForwardRef(Paper))
                          className="MuiAppBar-root MuiAppBar-positionStatic MuiAppBar-colorPrimary"
                          component="header"
                          elevation={4}
                          square={true}
                        >
                          <ForwardRef(Paper)
                            className="MuiAppBar-root MuiAppBar-positionStatic MuiAppBar-colorPrimary"
                            classes={
                              Object {
                                "elevation0": "MuiPaper-elevation0",
                                "elevation1": "MuiPaper-elevation1",
                                "elevation10": "MuiPaper-elevation10",
                                "elevation11": "MuiPaper-elevation11",
                                "elevation12": "MuiPaper-elevation12",
                                "elevation13": "MuiPaper-elevation13",
                                "elevation14": "MuiPaper-elevation14",
                                "elevation15": "MuiPaper-elevation15",
                                "elevation16": "MuiPaper-elevation16",
                                "elevation17": "MuiPaper-elevation17",
                                "elevation18": "MuiPaper-elevation18",
                                "elevation19": "MuiPaper-elevation19",
                                "elevation2": "MuiPaper-elevation2",
                                "elevation20": "MuiPaper-elevation20",
                                "elevation21": "MuiPaper-elevation21",
                                "elevation22": "MuiPaper-elevation22",
                                "elevation23": "MuiPaper-elevation23",
                                "elevation24": "MuiPaper-elevation24",
                                "elevation3": "MuiPaper-elevation3",
                                "elevation4": "MuiPaper-elevation4",
                                "elevation5": "MuiPaper-elevation5",
                                "elevation6": "MuiPaper-elevation6",
                                "elevation7": "MuiPaper-elevation7",
                                "elevation8": "MuiPaper-elevation8",
                                "elevation9": "MuiPaper-elevation9",
                                "root": "MuiPaper-root",
                                "rounded": "MuiPaper-rounded",
                              }
                            }
                            component="header"
                            elevation={4}
                            square={true}
                          >
                            <header
                              className="MuiPaper-root MuiPaper-elevation4 MuiAppBar-root MuiAppBar-positionStatic MuiAppBar-colorPrimary"
                            >
                              <WithStyles(ForwardRef(Toolbar))>
                                <ForwardRef(Toolbar)
                                  classes={
                                    Object {
                                      "dense": "MuiToolbar-dense",
                                      "gutters": "MuiToolbar-gutters",
                                      "regular": "MuiToolbar-regular",
                                      "root": "MuiToolbar-root",
                                    }
                                  }
                                >
                                  <div
                                    className="MuiToolbar-root MuiToolbar-regular MuiToolbar-gutters"
                                  >
                                    <WithStyles(ForwardRef(Typography))
                                      className="makeStyles-title-2"
                                      noWrap={true}
                                      variant="h6"
                                    >
                                      <ForwardRef(Typography)
                                        className="makeStyles-title-2"
                                        classes={
                                          Object {
                                            "alignCenter": "MuiTypography-alignCenter",
                                            "alignJustify": "MuiTypography-alignJustify",
                                            "alignLeft": "MuiTypography-alignLeft",
                                            "alignRight": "MuiTypography-alignRight",
                                            "body1": "MuiTypography-body1",
                                            "body2": "MuiTypography-body2",
                                            "button": "MuiTypography-button",
                                            "caption": "MuiTypography-caption",
                                            "colorError": "MuiTypography-colorError",
                                            "colorInherit": "MuiTypography-colorInherit",
                                            "colorPrimary": "MuiTypography-colorPrimary",
                                            "colorSecondary": "MuiTypography-colorSecondary",
                                            "colorTextPrimary": "MuiTypography-colorTextPrimary",
                                            "colorTextSecondary": "MuiTypography-colorTextSecondary",
                                            "displayBlock": "MuiTypography-displayBlock",
                                            "displayInline": "MuiTypography-displayInline",
                                            "gutterBottom": "MuiTypography-gutterBottom",
                                            "h1": "MuiTypography-h1",
                                            "h2": "MuiTypography-h2",
                                            "h3": "MuiTypography-h3",
                                            "h4": "MuiTypography-h4",
                                            "h5": "MuiTypography-h5",
                                            "h6": "MuiTypography-h6",
                                            "noWrap": "MuiTypography-noWrap",
                                            "overline": "MuiTypography-overline",
                                            "paragraph": "MuiTypography-paragraph",
                                            "root": "MuiTypography-root",
                                            "srOnly": "MuiTypography-srOnly",
                                            "subtitle1": "MuiTypography-subtitle1",
                                            "subtitle2": "MuiTypography-subtitle2",
                                          }
                                        }
                                        noWrap={true}
                                        theme={
                                          Object {
                                            "breakpoints": Object {
                                              "between": [Function],
                                              "down": [Function],
                                              "keys": Array [
                                                "xs",
                                                "sm",
                                                "md",
                                                "lg",
                                                "xl",
                                              ],
                                              "only": [Function],
                                              "up": [Function],
                                              "values": Object {
                                                "lg": 1280,
                                                "md": 960,
                                                "sm": 600,
                                                "xl": 1920,
                                                "xs": 0,
                                              },
                                              "width": [Function],
                                            },
                                            "direction": "ltr",
                                            "mixins": Object {
                                              "gutters": [Function],
                                              "toolbar": Object {
                                                "@media (min-width:0px) and (orientation: landscape)": Object {
                                                  "minHeight": 48,
                                                },
                                                "@media (min-width:600px)": Object {
                                                  "minHeight": 64,
                                                },
                                                "minHeight": 56,
                                              },
                                            },
                                            "overrides": Object {},
                                            "palette": Object {
                                              "action": Object {
                                                "active": "rgba(0, 0, 0, 0.54)",
                                                "disabled": "rgba(0, 0, 0, 0.26)",
                                                "disabledBackground": "rgba(0, 0, 0, 0.12)",
                                                "hover": "rgba(0, 0, 0, 0.08)",
                                                "hoverOpacity": 0.08,
                                                "selected": "rgba(0, 0, 0, 0.14)",
                                              },
                                              "augmentColor": [Function],
                                              "background": Object {
                                                "default": "#fafafa",
                                                "paper": "#fff",
                                              },
                                              "common": Object {
                                                "black": "#000",
                                                "white": "#fff",
                                              },
                                              "contrastThreshold": 3,
                                              "divider": "rgba(0, 0, 0, 0.12)",
                                              "error": Object {
                                                "contrastText": "#fff",
                                                "dark": "#d32f2f",
                                                "light": "#e57373",
                                                "main": "#f44336",
                                              },
                                              "getContrastText": [Function],
                                              "grey": Object {
                                                "100": "#f5f5f5",
                                                "200": "#eeeeee",
                                                "300": "#e0e0e0",
                                                "400": "#bdbdbd",
                                                "50": "#fafafa",
                                                "500": "#9e9e9e",
                                                "600": "#757575",
                                                "700": "#616161",
                                                "800": "#424242",
                                                "900": "#212121",
                                                "A100": "#d5d5d5",
                                                "A200": "#aaaaaa",
                                                "A400": "#303030",
                                                "A700": "#616161",
                                              },
                                              "primary": Object {
                                                "contrastText": "#fff",
                                                "dark": "#303f9f",
                                                "light": "#7986cb",
                                                "main": "#3f51b5",
                                              },
                                              "secondary": Object {
                                                "contrastText": "#fff",
                                                "dark": "#c51162",
                                                "light": "#ff4081",
                                                "main": "#f50057",
                                              },
                                              "text": Object {
                                                "disabled": "rgba(0, 0, 0, 0.38)",
                                                "hint": "rgba(0, 0, 0, 0.38)",
                                                "primary": "rgba(0, 0, 0, 0.87)",
                                                "secondary": "rgba(0, 0, 0, 0.54)",
                                              },
                                              "tonalOffset": 0.2,
                                              "type": "light",
                                            },
                                            "props": Object {},
                                            "shadows": Array [
                                              "none",
                                              "0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)",
                                              "0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)",
                                              "0px 1px 8px 0px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 3px 3px -2px rgba(0,0,0,0.12)",
                                              "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
                                              "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
                                              "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
                                              "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
                                              "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
                                              "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
                                              "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
                                              "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
                                              "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
                                              "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
                                              "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
                                              "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
                                              "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
                                              "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
                                              "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
                                              "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
                                              "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
                                              "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
                                              "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
                                              "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
                                              "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
                                            ],
                                            "shape": Object {
                                              "borderRadius": 4,
                                            },
                                            "spacing": [Function],
                                            "transitions": Object {
                                              "create": [Function],
                                              "duration": Object {
                                                "complex": 375,
                                                "enteringScreen": 225,
                                                "leavingScreen": 195,
                                                "short": 250,
                                                "shorter": 200,
                                                "shortest": 150,
                                                "standard": 300,
                                              },
                                              "easing": Object {
                                                "easeIn": "cubic-bezier(0.4, 0, 1, 1)",
                                                "easeInOut": "cubic-bezier(0.4, 0, 0.2, 1)",
                                                "easeOut": "cubic-bezier(0.0, 0, 0.2, 1)",
                                                "sharp": "cubic-bezier(0.4, 0, 0.6, 1)",
                                              },
                                              "getAutoHeightDuration": [Function],
                                            },
                                            "typography": Object {
                                              "body1": Object {
                                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                "fontSize": "1rem",
                                                "fontWeight": 400,
                                                "letterSpacing": "0.00938em",
                                                "lineHeight": 1.5,
                                              },
                                              "body2": Object {
                                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                "fontSize": "0.875rem",
                                                "fontWeight": 400,
                                                "letterSpacing": "0.01071em",
                                                "lineHeight": 1.43,
                                              },
                                              "button": Object {
                                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                "fontSize": "0.875rem",
                                                "fontWeight": 500,
                                                "letterSpacing": "0.02857em",
                                                "lineHeight": 1.75,
                                                "textTransform": "uppercase",
                                              },
                                              "caption": Object {
                                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                "fontSize": "0.75rem",
                                                "fontWeight": 400,
                                                "letterSpacing": "0.03333em",
                                                "lineHeight": 1.66,
                                              },
                                              "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                              "fontSize": 14,
                                              "fontWeightBold": 700,
                                              "fontWeightLight": 300,
                                              "fontWeightMedium": 500,
                                              "fontWeightRegular": 400,
                                              "h1": Object {
                                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                "fontSize": "6rem",
                                                "fontWeight": 300,
                                                "letterSpacing": "-0.01562em",
                                                "lineHeight": 1,
                                              },
                                              "h2": Object {
                                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                "fontSize": "3.75rem",
                                                "fontWeight": 300,
                                                "letterSpacing": "-0.00833em",
                                                "lineHeight": 1,
                                              },
                                              "h3": Object {
                                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                "fontSize": "3rem",
                                                "fontWeight": 400,
                                                "letterSpacing": "0em",
                                                "lineHeight": 1.04,
                                              },
                                              "h4": Object {
                                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                "fontSize": "2.125rem",
                                                "fontWeight": 400,
                                                "letterSpacing": "0.00735em",
                                                "lineHeight": 1.17,
                                              },
                                              "h5": Object {
                                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                "fontSize": "1.5rem",
                                                "fontWeight": 400,
                                                "letterSpacing": "0em",
                                                "lineHeight": 1.33,
                                              },
                                              "h6": Object {
                                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                "fontSize": "1.25rem",
                                                "fontWeight": 500,
                                                "letterSpacing": "0.0075em",
                                                "lineHeight": 1.6,
                                              },
                                              "htmlFontSize": 16,
                                              "overline": Object {
                                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                "fontSize": "0.75rem",
                                                "fontWeight": 400,
                                                "letterSpacing": "0.08333em",
                                                "lineHeight": 2.66,
                                                "textTransform": "uppercase",
                                              },
                                              "pxToRem": [Function],
                                              "round": [Function],
                                              "subtitle1": Object {
                                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                "fontSize": "1rem",
                                                "fontWeight": 400,
                                                "letterSpacing": "0.00938em",
                                                "lineHeight": 1.75,
                                              },
                                              "subtitle2": Object {
                                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                "fontSize": "0.875rem",
                                                "fontWeight": 500,
                                                "letterSpacing": "0.00714em",
                                                "lineHeight": 1.57,
                                              },
                                            },
                                            "zIndex": Object {
                                              "appBar": 1100,
                                              "drawer": 1200,
                                              "mobileStepper": 1000,
                                              "modal": 1300,
                                              "snackbar": 1400,
                                              "tooltip": 1500,
                                            },
                                          }
                                        }
                                        variant="h6"
                                      >
                                        <h6
                                          className="MuiTypography-root makeStyles-title-2 MuiTypography-h6 MuiTypography-noWrap"
                                        >
                                          Drone For You
                                        </h6>
                                      </ForwardRef(Typography)>
                                    </WithStyles(ForwardRef(Typography))>
                                    <div
                                      className="makeStyles-grow-1"
                                    />
                                    <WithStyles(ForwardRef(Typography))
                                      noWrap={true}
                                    >
                                      <ForwardRef(Typography)
                                        classes={
                                          Object {
                                            "alignCenter": "MuiTypography-alignCenter",
                                            "alignJustify": "MuiTypography-alignJustify",
                                            "alignLeft": "MuiTypography-alignLeft",
                                            "alignRight": "MuiTypography-alignRight",
                                            "body1": "MuiTypography-body1",
                                            "body2": "MuiTypography-body2",
                                            "button": "MuiTypography-button",
                                            "caption": "MuiTypography-caption",
                                            "colorError": "MuiTypography-colorError",
                                            "colorInherit": "MuiTypography-colorInherit",
                                            "colorPrimary": "MuiTypography-colorPrimary",
                                            "colorSecondary": "MuiTypography-colorSecondary",
                                            "colorTextPrimary": "MuiTypography-colorTextPrimary",
                                            "colorTextSecondary": "MuiTypography-colorTextSecondary",
                                            "displayBlock": "MuiTypography-displayBlock",
                                            "displayInline": "MuiTypography-displayInline",
                                            "gutterBottom": "MuiTypography-gutterBottom",
                                            "h1": "MuiTypography-h1",
                                            "h2": "MuiTypography-h2",
                                            "h3": "MuiTypography-h3",
                                            "h4": "MuiTypography-h4",
                                            "h5": "MuiTypography-h5",
                                            "h6": "MuiTypography-h6",
                                            "noWrap": "MuiTypography-noWrap",
                                            "overline": "MuiTypography-overline",
                                            "paragraph": "MuiTypography-paragraph",
                                            "root": "MuiTypography-root",
                                            "srOnly": "MuiTypography-srOnly",
                                            "subtitle1": "MuiTypography-subtitle1",
                                            "subtitle2": "MuiTypography-subtitle2",
                                          }
                                        }
                                        noWrap={true}
                                        theme={
                                          Object {
                                            "breakpoints": Object {
                                              "between": [Function],
                                              "down": [Function],
                                              "keys": Array [
                                                "xs",
                                                "sm",
                                                "md",
                                                "lg",
                                                "xl",
                                              ],
                                              "only": [Function],
                                              "up": [Function],
                                              "values": Object {
                                                "lg": 1280,
                                                "md": 960,
                                                "sm": 600,
                                                "xl": 1920,
                                                "xs": 0,
                                              },
                                              "width": [Function],
                                            },
                                            "direction": "ltr",
                                            "mixins": Object {
                                              "gutters": [Function],
                                              "toolbar": Object {
                                                "@media (min-width:0px) and (orientation: landscape)": Object {
                                                  "minHeight": 48,
                                                },
                                                "@media (min-width:600px)": Object {
                                                  "minHeight": 64,
                                                },
                                                "minHeight": 56,
                                              },
                                            },
                                            "overrides": Object {},
                                            "palette": Object {
                                              "action": Object {
                                                "active": "rgba(0, 0, 0, 0.54)",
                                                "disabled": "rgba(0, 0, 0, 0.26)",
                                                "disabledBackground": "rgba(0, 0, 0, 0.12)",
                                                "hover": "rgba(0, 0, 0, 0.08)",
                                                "hoverOpacity": 0.08,
                                                "selected": "rgba(0, 0, 0, 0.14)",
                                              },
                                              "augmentColor": [Function],
                                              "background": Object {
                                                "default": "#fafafa",
                                                "paper": "#fff",
                                              },
                                              "common": Object {
                                                "black": "#000",
                                                "white": "#fff",
                                              },
                                              "contrastThreshold": 3,
                                              "divider": "rgba(0, 0, 0, 0.12)",
                                              "error": Object {
                                                "contrastText": "#fff",
                                                "dark": "#d32f2f",
                                                "light": "#e57373",
                                                "main": "#f44336",
                                              },
                                              "getContrastText": [Function],
                                              "grey": Object {
                                                "100": "#f5f5f5",
                                                "200": "#eeeeee",
                                                "300": "#e0e0e0",
                                                "400": "#bdbdbd",
                                                "50": "#fafafa",
                                                "500": "#9e9e9e",
                                                "600": "#757575",
                                                "700": "#616161",
                                                "800": "#424242",
                                                "900": "#212121",
                                                "A100": "#d5d5d5",
                                                "A200": "#aaaaaa",
                                                "A400": "#303030",
                                                "A700": "#616161",
                                              },
                                              "primary": Object {
                                                "contrastText": "#fff",
                                                "dark": "#303f9f",
                                                "light": "#7986cb",
                                                "main": "#3f51b5",
                                              },
                                              "secondary": Object {
                                                "contrastText": "#fff",
                                                "dark": "#c51162",
                                                "light": "#ff4081",
                                                "main": "#f50057",
                                              },
                                              "text": Object {
                                                "disabled": "rgba(0, 0, 0, 0.38)",
                                                "hint": "rgba(0, 0, 0, 0.38)",
                                                "primary": "rgba(0, 0, 0, 0.87)",
                                                "secondary": "rgba(0, 0, 0, 0.54)",
                                              },
                                              "tonalOffset": 0.2,
                                              "type": "light",
                                            },
                                            "props": Object {},
                                            "shadows": Array [
                                              "none",
                                              "0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)",
                                              "0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)",
                                              "0px 1px 8px 0px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 3px 3px -2px rgba(0,0,0,0.12)",
                                              "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
                                              "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
                                              "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
                                              "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
                                              "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
                                              "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
                                              "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
                                              "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
                                              "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
                                              "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
                                              "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
                                              "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
                                              "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
                                              "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
                                              "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
                                              "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
                                              "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
                                              "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
                                              "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
                                              "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
                                              "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
                                            ],
                                            "shape": Object {
                                              "borderRadius": 4,
                                            },
                                            "spacing": [Function],
                                            "transitions": Object {
                                              "create": [Function],
                                              "duration": Object {
                                                "complex": 375,
                                                "enteringScreen": 225,
                                                "leavingScreen": 195,
                                                "short": 250,
                                                "shorter": 200,
                                                "shortest": 150,
                                                "standard": 300,
                                              },
                                              "easing": Object {
                                                "easeIn": "cubic-bezier(0.4, 0, 1, 1)",
                                                "easeInOut": "cubic-bezier(0.4, 0, 0.2, 1)",
                                                "easeOut": "cubic-bezier(0.0, 0, 0.2, 1)",
                                                "sharp": "cubic-bezier(0.4, 0, 0.6, 1)",
                                              },
                                              "getAutoHeightDuration": [Function],
                                            },
                                            "typography": Object {
                                              "body1": Object {
                                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                "fontSize": "1rem",
                                                "fontWeight": 400,
                                                "letterSpacing": "0.00938em",
                                                "lineHeight": 1.5,
                                              },
                                              "body2": Object {
                                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                "fontSize": "0.875rem",
                                                "fontWeight": 400,
                                                "letterSpacing": "0.01071em",
                                                "lineHeight": 1.43,
                                              },
                                              "button": Object {
                                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                "fontSize": "0.875rem",
                                                "fontWeight": 500,
                                                "letterSpacing": "0.02857em",
                                                "lineHeight": 1.75,
                                                "textTransform": "uppercase",
                                              },
                                              "caption": Object {
                                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                "fontSize": "0.75rem",
                                                "fontWeight": 400,
                                                "letterSpacing": "0.03333em",
                                                "lineHeight": 1.66,
                                              },
                                              "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                              "fontSize": 14,
                                              "fontWeightBold": 700,
                                              "fontWeightLight": 300,
                                              "fontWeightMedium": 500,
                                              "fontWeightRegular": 400,
                                              "h1": Object {
                                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                "fontSize": "6rem",
                                                "fontWeight": 300,
                                                "letterSpacing": "-0.01562em",
                                                "lineHeight": 1,
                                              },
                                              "h2": Object {
                                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                "fontSize": "3.75rem",
                                                "fontWeight": 300,
                                                "letterSpacing": "-0.00833em",
                                                "lineHeight": 1,
                                              },
                                              "h3": Object {
                                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                "fontSize": "3rem",
                                                "fontWeight": 400,
                                                "letterSpacing": "0em",
                                                "lineHeight": 1.04,
                                              },
                                              "h4": Object {
                                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                "fontSize": "2.125rem",
                                                "fontWeight": 400,
                                                "letterSpacing": "0.00735em",
                                                "lineHeight": 1.17,
                                              },
                                              "h5": Object {
                                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                "fontSize": "1.5rem",
                                                "fontWeight": 400,
                                                "letterSpacing": "0em",
                                                "lineHeight": 1.33,
                                              },
                                              "h6": Object {
                                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                "fontSize": "1.25rem",
                                                "fontWeight": 500,
                                                "letterSpacing": "0.0075em",
                                                "lineHeight": 1.6,
                                              },
                                              "htmlFontSize": 16,
                                              "overline": Object {
                                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                "fontSize": "0.75rem",
                                                "fontWeight": 400,
                                                "letterSpacing": "0.08333em",
                                                "lineHeight": 2.66,
                                                "textTransform": "uppercase",
                                              },
                                              "pxToRem": [Function],
                                              "round": [Function],
                                              "subtitle1": Object {
                                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                "fontSize": "1rem",
                                                "fontWeight": 400,
                                                "letterSpacing": "0.00938em",
                                                "lineHeight": 1.75,
                                              },
                                              "subtitle2": Object {
                                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                "fontSize": "0.875rem",
                                                "fontWeight": 500,
                                                "letterSpacing": "0.00714em",
                                                "lineHeight": 1.57,
                                              },
                                            },
                                            "zIndex": Object {
                                              "appBar": 1100,
                                              "drawer": 1200,
                                              "mobileStepper": 1000,
                                              "modal": 1300,
                                              "snackbar": 1400,
                                              "tooltip": 1500,
                                            },
                                          }
                                        }
                                      >
                                        <p
                                          className="MuiTypography-root MuiTypography-body1 MuiTypography-noWrap"
                                        >
                                           
                                        </p>
                                      </ForwardRef(Typography)>
                                    </WithStyles(ForwardRef(Typography))>
                                    <div
                                      className="makeStyles-grow-1"
                                    />
                                    <WithStyles(ForwardRef(Button))
                                      className="margin3"
                                      color="primary"
                                      disabled={true}
                                      onClick={[Function]}
                                      variant="contained"
                                    >
                                      <ForwardRef(Button)
                                        className="margin3"
                                        classes={
                                          Object {
                                            "colorInherit": "MuiButton-colorInherit",
                                            "contained": "MuiButton-contained",
                                            "containedPrimary": "MuiButton-containedPrimary",
                                            "containedSecondary": "MuiButton-containedSecondary",
                                            "disabled": "Mui-disabled",
                                            "focusVisible": "Mui-focusVisible",
                                            "fullWidth": "MuiButton-fullWidth",
                                            "label": "MuiButton-label",
                                            "outlined": "MuiButton-outlined",
                                            "outlinedPrimary": "MuiButton-outlinedPrimary",
                                            "outlinedSecondary": "MuiButton-outlinedSecondary",
                                            "root": "MuiButton-root",
                                            "sizeLarge": "MuiButton-sizeLarge",
                                            "sizeSmall": "MuiButton-sizeSmall",
                                            "text": "MuiButton-text",
                                            "textPrimary": "MuiButton-textPrimary",
                                            "textSecondary": "MuiButton-textSecondary",
                                          }
                                        }
                                        color="primary"
                                        disabled={true}
                                        onClick={[Function]}
                                        variant="contained"
                                      >
                                        <WithStyles(ForwardRef(ButtonBase))
                                          className="MuiButton-root margin3 MuiButton-contained MuiButton-containedPrimary Mui-disabled"
                                          component="button"
                                          disabled={true}
                                          focusRipple={true}
                                          focusVisibleClassName="Mui-focusVisible"
                                          onClick={[Function]}
                                          type="button"
                                        >
                                          <ForwardRef(ButtonBase)
                                            className="MuiButton-root margin3 MuiButton-contained MuiButton-containedPrimary Mui-disabled"
                                            classes={
                                              Object {
                                                "disabled": "Mui-disabled",
                                                "focusVisible": "Mui-focusVisible",
                                                "root": "MuiButtonBase-root",
                                              }
                                            }
                                            component="button"
                                            disabled={true}
                                            focusRipple={true}
                                            focusVisibleClassName="Mui-focusVisible"
                                            onClick={[Function]}
                                            type="button"
                                          >
                                            <button
                                              className="MuiButtonBase-root MuiButton-root margin3 MuiButton-contained MuiButton-containedPrimary Mui-disabled Mui-disabled"
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
                                                Return Drone
                                              </span>
                                            </button>
                                          </ForwardRef(ButtonBase)>
                                        </WithStyles(ForwardRef(ButtonBase))>
                                      </ForwardRef(Button)>
                                    </WithStyles(ForwardRef(Button))>
                                    <div
                                      className="makeStyles-grow-1"
                                    />
                                    <b>
                                       
                                      , 
                                       
                                    </b>
                                    <div
                                      className="makeStyles-sectionDesktop-3"
                                    >
                                      <WithStyles(ForwardRef(IconButton))
                                        aria-controls="profile-account-menu"
                                        aria-haspopup="true"
                                        aria-label="Account of current user"
                                        color="inherit"
                                        edge="end"
                                        onClick={[Function]}
                                      >
                                        <ForwardRef(IconButton)
                                          aria-controls="profile-account-menu"
                                          aria-haspopup="true"
                                          aria-label="Account of current user"
                                          classes={
                                            Object {
                                              "colorInherit": "MuiIconButton-colorInherit",
                                              "colorPrimary": "MuiIconButton-colorPrimary",
                                              "colorSecondary": "MuiIconButton-colorSecondary",
                                              "disabled": "Mui-disabled",
                                              "edgeEnd": "MuiIconButton-edgeEnd",
                                              "edgeStart": "MuiIconButton-edgeStart",
                                              "label": "MuiIconButton-label",
                                              "root": "MuiIconButton-root",
                                              "sizeSmall": "MuiIconButton-sizeSmall",
                                            }
                                          }
                                          color="inherit"
                                          edge="end"
                                          onClick={[Function]}
                                        >
                                          <WithStyles(ForwardRef(ButtonBase))
                                            aria-controls="profile-account-menu"
                                            aria-haspopup="true"
                                            aria-label="Account of current user"
                                            centerRipple={true}
                                            className="MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-edgeEnd"
                                            disabled={false}
                                            focusRipple={true}
                                            onClick={[Function]}
                                          >
                                            <ForwardRef(ButtonBase)
                                              aria-controls="profile-account-menu"
                                              aria-haspopup="true"
                                              aria-label="Account of current user"
                                              centerRipple={true}
                                              className="MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-edgeEnd"
                                              classes={
                                                Object {
                                                  "disabled": "Mui-disabled",
                                                  "focusVisible": "Mui-focusVisible",
                                                  "root": "MuiButtonBase-root",
                                                }
                                              }
                                              disabled={false}
                                              focusRipple={true}
                                              onClick={[Function]}
                                            >
                                              <button
                                                aria-controls="profile-account-menu"
                                                aria-haspopup="true"
                                                aria-label="Account of current user"
                                                className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-edgeEnd"
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
                                                  className="MuiIconButton-label"
                                                >
                                                  <ForwardRef>
                                                    <WithStyles(ForwardRef(SvgIcon))>
                                                      <ForwardRef(SvgIcon)
                                                        classes={
                                                          Object {
                                                            "colorAction": "MuiSvgIcon-colorAction",
                                                            "colorDisabled": "MuiSvgIcon-colorDisabled",
                                                            "colorError": "MuiSvgIcon-colorError",
                                                            "colorPrimary": "MuiSvgIcon-colorPrimary",
                                                            "colorSecondary": "MuiSvgIcon-colorSecondary",
                                                            "fontSizeInherit": "MuiSvgIcon-fontSizeInherit",
                                                            "fontSizeLarge": "MuiSvgIcon-fontSizeLarge",
                                                            "fontSizeSmall": "MuiSvgIcon-fontSizeSmall",
                                                            "root": "MuiSvgIcon-root",
                                                          }
                                                        }
                                                      >
                                                        <svg
                                                          aria-hidden="true"
                                                          className="MuiSvgIcon-root"
                                                          focusable="false"
                                                          role="presentation"
                                                          viewBox="0 0 24 24"
                                                        >
                                                          <path
                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
                                                          />
                                                        </svg>
                                                      </ForwardRef(SvgIcon)>
                                                    </WithStyles(ForwardRef(SvgIcon))>
                                                  </ForwardRef>
                                                </span>
                                                <NoSsr>
                                                  <WithStyles(undefined)
                                                    center={true}
                                                  >
                                                    <ForwardRef(TouchRipple)
                                                      center={true}
                                                      classes={
                                                        Object {
                                                          "child": "MuiTouchRipple-child",
                                                          "childLeaving": "MuiTouchRipple-childLeaving",
                                                          "childPulsate": "MuiTouchRipple-childPulsate",
                                                          "ripple": "MuiTouchRipple-ripple",
                                                          "ripplePulsate": "MuiTouchRipple-ripplePulsate",
                                                          "rippleVisible": "MuiTouchRipple-rippleVisible",
                                                          "root": "MuiTouchRipple-root",
                                                        }
                                                      }
                                                    >
                                                      <span
                                                        className="MuiTouchRipple-root"
                                                      >
                                                        <TransitionGroup
                                                          childFactory={[Function]}
                                                          component={null}
                                                          exit={true}
                                                        />
                                                      </span>
                                                    </ForwardRef(TouchRipple)>
                                                  </WithStyles(undefined)>
                                                </NoSsr>
                                              </button>
                                            </ForwardRef(ButtonBase)>
                                          </WithStyles(ForwardRef(ButtonBase))>
                                        </ForwardRef(IconButton)>
                                      </WithStyles(ForwardRef(IconButton))>
                                    </div>
                                  </div>
                                </ForwardRef(Toolbar)>
                              </WithStyles(ForwardRef(Toolbar))>
                            </header>
                          </ForwardRef(Paper)>
                        </WithStyles(ForwardRef(Paper))>
                      </ForwardRef(AppBar)>
                    </WithStyles(ForwardRef(AppBar))>
                    <WithStyles(ForwardRef(Menu))
                      anchorEl={null}
                      anchorOrigin={
                        Object {
                          "horizontal": "right",
                          "vertical": "top",
                        }
                      }
                      id="profile-account-menu"
                      keepMounted={true}
                      onClose={[Function]}
                      open={false}
                      transformOrigin={
                        Object {
                          "horizontal": "right",
                          "vertical": "top",
                        }
                      }
                    >
                      <ForwardRef(Menu)
                        anchorEl={null}
                        anchorOrigin={
                          Object {
                            "horizontal": "right",
                            "vertical": "top",
                          }
                        }
                        classes={
                          Object {
                            "list": "MuiMenu-list",
                            "paper": "MuiMenu-paper",
                          }
                        }
                        id="profile-account-menu"
                        keepMounted={true}
                        onClose={[Function]}
                        open={false}
                        theme={
                          Object {
                            "breakpoints": Object {
                              "between": [Function],
                              "down": [Function],
                              "keys": Array [
                                "xs",
                                "sm",
                                "md",
                                "lg",
                                "xl",
                              ],
                              "only": [Function],
                              "up": [Function],
                              "values": Object {
                                "lg": 1280,
                                "md": 960,
                                "sm": 600,
                                "xl": 1920,
                                "xs": 0,
                              },
                              "width": [Function],
                            },
                            "direction": "ltr",
                            "mixins": Object {
                              "gutters": [Function],
                              "toolbar": Object {
                                "@media (min-width:0px) and (orientation: landscape)": Object {
                                  "minHeight": 48,
                                },
                                "@media (min-width:600px)": Object {
                                  "minHeight": 64,
                                },
                                "minHeight": 56,
                              },
                            },
                            "overrides": Object {},
                            "palette": Object {
                              "action": Object {
                                "active": "rgba(0, 0, 0, 0.54)",
                                "disabled": "rgba(0, 0, 0, 0.26)",
                                "disabledBackground": "rgba(0, 0, 0, 0.12)",
                                "hover": "rgba(0, 0, 0, 0.08)",
                                "hoverOpacity": 0.08,
                                "selected": "rgba(0, 0, 0, 0.14)",
                              },
                              "augmentColor": [Function],
                              "background": Object {
                                "default": "#fafafa",
                                "paper": "#fff",
                              },
                              "common": Object {
                                "black": "#000",
                                "white": "#fff",
                              },
                              "contrastThreshold": 3,
                              "divider": "rgba(0, 0, 0, 0.12)",
                              "error": Object {
                                "contrastText": "#fff",
                                "dark": "#d32f2f",
                                "light": "#e57373",
                                "main": "#f44336",
                              },
                              "getContrastText": [Function],
                              "grey": Object {
                                "100": "#f5f5f5",
                                "200": "#eeeeee",
                                "300": "#e0e0e0",
                                "400": "#bdbdbd",
                                "50": "#fafafa",
                                "500": "#9e9e9e",
                                "600": "#757575",
                                "700": "#616161",
                                "800": "#424242",
                                "900": "#212121",
                                "A100": "#d5d5d5",
                                "A200": "#aaaaaa",
                                "A400": "#303030",
                                "A700": "#616161",
                              },
                              "primary": Object {
                                "contrastText": "#fff",
                                "dark": "#303f9f",
                                "light": "#7986cb",
                                "main": "#3f51b5",
                              },
                              "secondary": Object {
                                "contrastText": "#fff",
                                "dark": "#c51162",
                                "light": "#ff4081",
                                "main": "#f50057",
                              },
                              "text": Object {
                                "disabled": "rgba(0, 0, 0, 0.38)",
                                "hint": "rgba(0, 0, 0, 0.38)",
                                "primary": "rgba(0, 0, 0, 0.87)",
                                "secondary": "rgba(0, 0, 0, 0.54)",
                              },
                              "tonalOffset": 0.2,
                              "type": "light",
                            },
                            "props": Object {},
                            "shadows": Array [
                              "none",
                              "0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)",
                              "0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)",
                              "0px 1px 8px 0px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 3px 3px -2px rgba(0,0,0,0.12)",
                              "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
                              "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
                              "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
                              "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
                              "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
                              "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
                              "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
                              "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
                              "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
                              "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
                              "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
                              "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
                              "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
                              "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
                              "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
                              "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
                              "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
                              "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
                              "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
                              "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
                              "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
                            ],
                            "shape": Object {
                              "borderRadius": 4,
                            },
                            "spacing": [Function],
                            "transitions": Object {
                              "create": [Function],
                              "duration": Object {
                                "complex": 375,
                                "enteringScreen": 225,
                                "leavingScreen": 195,
                                "short": 250,
                                "shorter": 200,
                                "shortest": 150,
                                "standard": 300,
                              },
                              "easing": Object {
                                "easeIn": "cubic-bezier(0.4, 0, 1, 1)",
                                "easeInOut": "cubic-bezier(0.4, 0, 0.2, 1)",
                                "easeOut": "cubic-bezier(0.0, 0, 0.2, 1)",
                                "sharp": "cubic-bezier(0.4, 0, 0.6, 1)",
                              },
                              "getAutoHeightDuration": [Function],
                            },
                            "typography": Object {
                              "body1": Object {
                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                "fontSize": "1rem",
                                "fontWeight": 400,
                                "letterSpacing": "0.00938em",
                                "lineHeight": 1.5,
                              },
                              "body2": Object {
                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                "fontSize": "0.875rem",
                                "fontWeight": 400,
                                "letterSpacing": "0.01071em",
                                "lineHeight": 1.43,
                              },
                              "button": Object {
                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                "fontSize": "0.875rem",
                                "fontWeight": 500,
                                "letterSpacing": "0.02857em",
                                "lineHeight": 1.75,
                                "textTransform": "uppercase",
                              },
                              "caption": Object {
                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                "fontSize": "0.75rem",
                                "fontWeight": 400,
                                "letterSpacing": "0.03333em",
                                "lineHeight": 1.66,
                              },
                              "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                              "fontSize": 14,
                              "fontWeightBold": 700,
                              "fontWeightLight": 300,
                              "fontWeightMedium": 500,
                              "fontWeightRegular": 400,
                              "h1": Object {
                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                "fontSize": "6rem",
                                "fontWeight": 300,
                                "letterSpacing": "-0.01562em",
                                "lineHeight": 1,
                              },
                              "h2": Object {
                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                "fontSize": "3.75rem",
                                "fontWeight": 300,
                                "letterSpacing": "-0.00833em",
                                "lineHeight": 1,
                              },
                              "h3": Object {
                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                "fontSize": "3rem",
                                "fontWeight": 400,
                                "letterSpacing": "0em",
                                "lineHeight": 1.04,
                              },
                              "h4": Object {
                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                "fontSize": "2.125rem",
                                "fontWeight": 400,
                                "letterSpacing": "0.00735em",
                                "lineHeight": 1.17,
                              },
                              "h5": Object {
                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                "fontSize": "1.5rem",
                                "fontWeight": 400,
                                "letterSpacing": "0em",
                                "lineHeight": 1.33,
                              },
                              "h6": Object {
                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                "fontSize": "1.25rem",
                                "fontWeight": 500,
                                "letterSpacing": "0.0075em",
                                "lineHeight": 1.6,
                              },
                              "htmlFontSize": 16,
                              "overline": Object {
                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                "fontSize": "0.75rem",
                                "fontWeight": 400,
                                "letterSpacing": "0.08333em",
                                "lineHeight": 2.66,
                                "textTransform": "uppercase",
                              },
                              "pxToRem": [Function],
                              "round": [Function],
                              "subtitle1": Object {
                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                "fontSize": "1rem",
                                "fontWeight": 400,
                                "letterSpacing": "0.00938em",
                                "lineHeight": 1.75,
                              },
                              "subtitle2": Object {
                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                "fontSize": "0.875rem",
                                "fontWeight": 500,
                                "letterSpacing": "0.00714em",
                                "lineHeight": 1.57,
                              },
                            },
                            "zIndex": Object {
                              "appBar": 1100,
                              "drawer": 1200,
                              "mobileStepper": 1000,
                              "modal": 1300,
                              "snackbar": 1400,
                              "tooltip": 1500,
                            },
                          }
                        }
                        transformOrigin={
                          Object {
                            "horizontal": "right",
                            "vertical": "top",
                          }
                        }
                      >
                        <WithStyles(ForwardRef(Popover))
                          PaperProps={
                            Object {
                              "classes": Object {
                                "root": "MuiMenu-paper",
                              },
                            }
                          }
                          anchorEl={null}
                          anchorOrigin={
                            Object {
                              "horizontal": "right",
                              "vertical": "top",
                            }
                          }
                          getContentAnchorEl={[Function]}
                          id="profile-account-menu"
                          keepMounted={true}
                          onClose={[Function]}
                          onEntering={[Function]}
                          open={false}
                          transformOrigin={
                            Object {
                              "horizontal": "right",
                              "vertical": "top",
                            }
                          }
                          transitionDuration="auto"
                        >
                          <ForwardRef(Popover)
                            PaperProps={
                              Object {
                                "classes": Object {
                                  "root": "MuiMenu-paper",
                                },
                              }
                            }
                            anchorEl={null}
                            anchorOrigin={
                              Object {
                                "horizontal": "right",
                                "vertical": "top",
                              }
                            }
                            classes={
                              Object {
                                "paper": "MuiPopover-paper",
                              }
                            }
                            getContentAnchorEl={[Function]}
                            id="profile-account-menu"
                            keepMounted={true}
                            onClose={[Function]}
                            onEntering={[Function]}
                            open={false}
                            transformOrigin={
                              Object {
                                "horizontal": "right",
                                "vertical": "top",
                              }
                            }
                            transitionDuration="auto"
                          >
                            <ForwardRef(Modal)
                              BackdropProps={
                                Object {
                                  "invisible": true,
                                }
                              }
                              id="profile-account-menu"
                              keepMounted={true}
                              onClose={[Function]}
                              open={false}
                            >
                              <ForwardRef(Portal)
                                disablePortal={false}
                                onRendered={[Function]}
                              >
                                <Portal
                                  containerInfo={
                                    <body>
                                      <div
                                        aria-hidden="true"
                                        id="profile-account-menu"
                                        role="presentation"
                                        style="position: fixed; z-index: 1300; right: 0px; bottom: 0px; top: 0px; left: 0px; visibility: hidden;"
                                      >
                                        <div
                                          data-test="sentinelStart"
                                          tabindex="0"
                                        />
                                        <div
                                          class="MuiPaper-root MuiMenu-paper MuiPaper-elevation8 MuiPopover-paper MuiPaper-rounded"
                                          role="document"
                                          style="opacity: 0; transform: scale(0.75, 0.5625); visibility: hidden;"
                                          tabindex="-1"
                                        >
                                          <ul
                                            class="MuiList-root MuiMenu-list MuiList-padding"
                                            role="menu"
                                            tabindex="-1"
                                          >
                                            <li
                                              aria-disabled="false"
                                              class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                                              role="menuitem"
                                              tabindex="-1"
                                            >
                                              Sign Out
                                              <span
                                                class="MuiTouchRipple-root"
                                              />
                                            </li>
                                          </ul>
                                        </div>
                                        <div
                                          data-test="sentinelEnd"
                                          tabindex="0"
                                        />
                                      </div>
                                      <div
                                        aria-hidden="true"
                                        id="profile-account-menu"
                                        role="presentation"
                                        style="position: fixed; z-index: 1300; right: 0px; bottom: 0px; top: 0px; left: 0px; visibility: hidden;"
                                      >
                                        <div
                                          data-test="sentinelStart"
                                          tabindex="0"
                                        />
                                        <div
                                          class="MuiPaper-root MuiMenu-paper MuiPaper-elevation8 MuiPopover-paper MuiPaper-rounded"
                                          role="document"
                                          style="opacity: 0; transform: scale(0.75, 0.5625); visibility: hidden;"
                                          tabindex="-1"
                                        >
                                          <ul
                                            class="MuiList-root MuiMenu-list MuiList-padding"
                                            role="menu"
                                            tabindex="-1"
                                          >
                                            <li
                                              aria-disabled="false"
                                              class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                                              role="menuitem"
                                              tabindex="-1"
                                            >
                                              Sign Out
                                              <span
                                                class="MuiTouchRipple-root"
                                              />
                                            </li>
                                          </ul>
                                        </div>
                                        <div
                                          data-test="sentinelEnd"
                                          tabindex="0"
                                        />
                                      </div>
                                      <div
                                        aria-hidden="true"
                                        id="profile-account-menu"
                                        role="presentation"
                                        style="position: fixed; z-index: 1300; right: 0px; bottom: 0px; top: 0px; left: 0px; visibility: hidden;"
                                      >
                                        <div
                                          data-test="sentinelStart"
                                          tabindex="0"
                                        />
                                        <div
                                          class="MuiPaper-root MuiMenu-paper MuiPaper-elevation8 MuiPopover-paper MuiPaper-rounded"
                                          role="document"
                                          style="opacity: 0; transform: scale(0.75, 0.5625); visibility: hidden;"
                                          tabindex="-1"
                                        >
                                          <ul
                                            class="MuiList-root MuiMenu-list MuiList-padding"
                                            role="menu"
                                            tabindex="-1"
                                          >
                                            <li
                                              aria-disabled="false"
                                              class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                                              role="menuitem"
                                              tabindex="-1"
                                            >
                                              Sign Out
                                              <span
                                                class="MuiTouchRipple-root"
                                              />
                                            </li>
                                          </ul>
                                        </div>
                                        <div
                                          data-test="sentinelEnd"
                                          tabindex="0"
                                        />
                                      </div>
                                    </body>
                                  }
                                >
                                  <div
                                    id="profile-account-menu"
                                    onKeyDown={[Function]}
                                    role="presentation"
                                    style={
                                      Object {
                                        "bottom": 0,
                                        "left": 0,
                                        "position": "fixed",
                                        "right": 0,
                                        "top": 0,
                                        "visibility": "hidden",
                                        "zIndex": 1300,
                                      }
                                    }
                                  >
                                    <ForwardRef(SimpleBackdrop)
                                      invisible={true}
                                      onClick={[Function]}
                                      open={false}
                                    />
                                    <TrapFocus
                                      disableAutoFocus={false}
                                      disableEnforceFocus={false}
                                      disableRestoreFocus={false}
                                      getDoc={[Function]}
                                      isEnabled={[Function]}
                                      open={false}
                                    >
                                      <div
                                        data-test="sentinelStart"
                                        tabIndex={0}
                                      />
                                      <ForwardRef(Grow)
                                        appear={true}
                                        in={false}
                                        onEnter={[Function]}
                                        onEntering={[Function]}
                                        onExited={[Function]}
                                        role="document"
                                        tabIndex="-1"
                                        timeout="auto"
                                      >
                                        <Transition
                                          addEndListener={[Function]}
                                          appear={true}
                                          enter={true}
                                          exit={true}
                                          in={false}
                                          mountOnEnter={false}
                                          onEnter={[Function]}
                                          onEntered={[Function]}
                                          onEntering={[Function]}
                                          onExit={[Function]}
                                          onExited={[Function]}
                                          onExiting={[Function]}
                                          role="document"
                                          tabIndex="-1"
                                          timeout={null}
                                          unmountOnExit={false}
                                        >
                                          <WithStyles(ForwardRef(Paper))
                                            className="MuiPopover-paper"
                                            classes={
                                              Object {
                                                "root": "MuiMenu-paper",
                                              }
                                            }
                                            elevation={8}
                                            role="document"
                                            style={
                                              Object {
                                                "opacity": 0,
                                                "transform": "scale(0.75, 0.5625)",
                                                "visibility": "hidden",
                                              }
                                            }
                                            tabIndex="-1"
                                          >
                                            <ForwardRef(Paper)
                                              className="MuiPopover-paper"
                                              classes={
                                                Object {
                                                  "elevation0": "MuiPaper-elevation0",
                                                  "elevation1": "MuiPaper-elevation1",
                                                  "elevation10": "MuiPaper-elevation10",
                                                  "elevation11": "MuiPaper-elevation11",
                                                  "elevation12": "MuiPaper-elevation12",
                                                  "elevation13": "MuiPaper-elevation13",
                                                  "elevation14": "MuiPaper-elevation14",
                                                  "elevation15": "MuiPaper-elevation15",
                                                  "elevation16": "MuiPaper-elevation16",
                                                  "elevation17": "MuiPaper-elevation17",
                                                  "elevation18": "MuiPaper-elevation18",
                                                  "elevation19": "MuiPaper-elevation19",
                                                  "elevation2": "MuiPaper-elevation2",
                                                  "elevation20": "MuiPaper-elevation20",
                                                  "elevation21": "MuiPaper-elevation21",
                                                  "elevation22": "MuiPaper-elevation22",
                                                  "elevation23": "MuiPaper-elevation23",
                                                  "elevation24": "MuiPaper-elevation24",
                                                  "elevation3": "MuiPaper-elevation3",
                                                  "elevation4": "MuiPaper-elevation4",
                                                  "elevation5": "MuiPaper-elevation5",
                                                  "elevation6": "MuiPaper-elevation6",
                                                  "elevation7": "MuiPaper-elevation7",
                                                  "elevation8": "MuiPaper-elevation8",
                                                  "elevation9": "MuiPaper-elevation9",
                                                  "root": "MuiPaper-root MuiMenu-paper",
                                                  "rounded": "MuiPaper-rounded",
                                                }
                                              }
                                              elevation={8}
                                              role="document"
                                              style={
                                                Object {
                                                  "opacity": 0,
                                                  "transform": "scale(0.75, 0.5625)",
                                                  "visibility": "hidden",
                                                }
                                              }
                                              tabIndex="-1"
                                            >
                                              <div
                                                className="MuiPaper-root MuiMenu-paper MuiPaper-elevation8 MuiPopover-paper MuiPaper-rounded"
                                                role="document"
                                                style={
                                                  Object {
                                                    "opacity": 0,
                                                    "transform": "scale(0.75, 0.5625)",
                                                    "visibility": "hidden",
                                                  }
                                                }
                                                tabIndex="-1"
                                              >
                                                <ForwardRef(MenuList)
                                                  actions={
                                                    Object {
                                                      "current": Object {
                                                        "adjustStyleForScrollbar": [Function],
                                                      },
                                                    }
                                                  }
                                                  autoFocus={false}
                                                  className="MuiMenu-list"
                                                  onKeyDown={[Function]}
                                                >
                                                  <WithStyles(ForwardRef(List))
                                                    className="MuiMenu-list"
                                                    onKeyDown={[Function]}
                                                    role="menu"
                                                    tabIndex={-1}
                                                  >
                                                    <ForwardRef(List)
                                                      className="MuiMenu-list"
                                                      classes={
                                                        Object {
                                                          "dense": "MuiList-dense",
                                                          "padding": "MuiList-padding",
                                                          "root": "MuiList-root",
                                                          "subheader": "MuiList-subheader",
                                                        }
                                                      }
                                                      onKeyDown={[Function]}
                                                      role="menu"
                                                      tabIndex={-1}
                                                    >
                                                      <ul
                                                        className="MuiList-root MuiMenu-list MuiList-padding"
                                                        onKeyDown={[Function]}
                                                        role="menu"
                                                        tabIndex={-1}
                                                      >
                                                        <WithStyles(ForwardRef(MenuItem))
                                                          key=".0"
                                                          onClick={[Function]}
                                                        >
                                                          <ForwardRef(MenuItem)
                                                            classes={
                                                              Object {
                                                                "dense": "MuiMenuItem-dense",
                                                                "gutters": "MuiMenuItem-gutters",
                                                                "root": "MuiMenuItem-root",
                                                                "selected": "Mui-selected",
                                                              }
                                                            }
                                                            onClick={[Function]}
                                                          >
                                                            <WithStyles(ForwardRef(ListItem))
                                                              button={true}
                                                              className="MuiMenuItem-root MuiMenuItem-gutters"
                                                              classes={
                                                                Object {
                                                                  "dense": "MuiMenuItem-dense",
                                                                }
                                                              }
                                                              component="li"
                                                              disableGutters={false}
                                                              onClick={[Function]}
                                                              role="menuitem"
                                                              tabIndex={-1}
                                                            >
                                                              <ForwardRef(ListItem)
                                                                button={true}
                                                                className="MuiMenuItem-root MuiMenuItem-gutters"
                                                                classes={
                                                                  Object {
                                                                    "alignItemsFlexStart": "MuiListItem-alignItemsFlexStart",
                                                                    "button": "MuiListItem-button",
                                                                    "container": "MuiListItem-container",
                                                                    "dense": "MuiListItem-dense MuiMenuItem-dense",
                                                                    "disabled": "Mui-disabled",
                                                                    "divider": "MuiListItem-divider",
                                                                    "focusVisible": "Mui-focusVisible",
                                                                    "gutters": "MuiListItem-gutters",
                                                                    "root": "MuiListItem-root",
                                                                    "secondaryAction": "MuiListItem-secondaryAction",
                                                                    "selected": "Mui-selected",
                                                                  }
                                                                }
                                                                component="li"
                                                                disableGutters={false}
                                                                onClick={[Function]}
                                                                role="menuitem"
                                                                tabIndex={-1}
                                                              >
                                                                <WithStyles(ForwardRef(ButtonBase))
                                                                  className="MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                                                                  component="li"
                                                                  disabled={false}
                                                                  focusVisibleClassName="Mui-focusVisible"
                                                                  onClick={[Function]}
                                                                  role="menuitem"
                                                                  tabIndex={-1}
                                                                >
                                                                  <ForwardRef(ButtonBase)
                                                                    className="MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                                                                    classes={
                                                                      Object {
                                                                        "disabled": "Mui-disabled",
                                                                        "focusVisible": "Mui-focusVisible",
                                                                        "root": "MuiButtonBase-root",
                                                                      }
                                                                    }
                                                                    component="li"
                                                                    disabled={false}
                                                                    focusVisibleClassName="Mui-focusVisible"
                                                                    onClick={[Function]}
                                                                    role="menuitem"
                                                                    tabIndex={-1}
                                                                  >
                                                                    <li
                                                                      aria-disabled={false}
                                                                      className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
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
                                                                      role="menuitem"
                                                                      tabIndex={-1}
                                                                    >
                                                                      Sign Out
                                                                      <NoSsr>
                                                                        <WithStyles(undefined)
                                                                          center={false}
                                                                        >
                                                                          <ForwardRef(TouchRipple)
                                                                            center={false}
                                                                            classes={
                                                                              Object {
                                                                                "child": "MuiTouchRipple-child",
                                                                                "childLeaving": "MuiTouchRipple-childLeaving",
                                                                                "childPulsate": "MuiTouchRipple-childPulsate",
                                                                                "ripple": "MuiTouchRipple-ripple",
                                                                                "ripplePulsate": "MuiTouchRipple-ripplePulsate",
                                                                                "rippleVisible": "MuiTouchRipple-rippleVisible",
                                                                                "root": "MuiTouchRipple-root",
                                                                              }
                                                                            }
                                                                          >
                                                                            <span
                                                                              className="MuiTouchRipple-root"
                                                                            >
                                                                              <TransitionGroup
                                                                                childFactory={[Function]}
                                                                                component={null}
                                                                                exit={true}
                                                                              />
                                                                            </span>
                                                                          </ForwardRef(TouchRipple)>
                                                                        </WithStyles(undefined)>
                                                                      </NoSsr>
                                                                    </li>
                                                                  </ForwardRef(ButtonBase)>
                                                                </WithStyles(ForwardRef(ButtonBase))>
                                                              </ForwardRef(ListItem)>
                                                            </WithStyles(ForwardRef(ListItem))>
                                                          </ForwardRef(MenuItem)>
                                                        </WithStyles(ForwardRef(MenuItem))>
                                                      </ul>
                                                    </ForwardRef(List)>
                                                  </WithStyles(ForwardRef(List))>
                                                </ForwardRef(MenuList)>
                                              </div>
                                            </ForwardRef(Paper)>
                                          </WithStyles(ForwardRef(Paper))>
                                        </Transition>
                                      </ForwardRef(Grow)>
                                      <div
                                        data-test="sentinelEnd"
                                        tabIndex={0}
                                      />
                                    </TrapFocus>
                                  </div>
                                </Portal>
                              </ForwardRef(Portal)>
                            </ForwardRef(Modal)>
                          </ForwardRef(Popover)>
                        </WithStyles(ForwardRef(Popover))>
                      </ForwardRef(Menu)>
                    </WithStyles(ForwardRef(Menu))>
                  </div>
                </HeaderAppBar>
                <section
                  className="dashboard__cont"
                >
                  <WithStyles(ForwardRef(Container))
                    maxWidth="lg"
                  >
                    <ForwardRef(Container)
                      classes={
                        Object {
                          "fixed": "MuiContainer-fixed",
                          "maxWidthLg": "MuiContainer-maxWidthLg",
                          "maxWidthMd": "MuiContainer-maxWidthMd",
                          "maxWidthSm": "MuiContainer-maxWidthSm",
                          "maxWidthXl": "MuiContainer-maxWidthXl",
                          "maxWidthXs": "MuiContainer-maxWidthXs",
                          "root": "MuiContainer-root",
                        }
                      }
                      maxWidth="lg"
                    >
                      <div
                        className="MuiContainer-root MuiContainer-maxWidthLg"
                      >
                        <WithStyles(ForwardRef(Grid))
                          container={true}
                          justify="center"
                          spacing={3}
                        >
                          <ForwardRef(Grid)
                            classes={
                              Object {
                                "align-content-xs-center": "MuiGrid-align-content-xs-center",
                                "align-content-xs-flex-end": "MuiGrid-align-content-xs-flex-end",
                                "align-content-xs-flex-start": "MuiGrid-align-content-xs-flex-start",
                                "align-content-xs-space-around": "MuiGrid-align-content-xs-space-around",
                                "align-content-xs-space-between": "MuiGrid-align-content-xs-space-between",
                                "align-items-xs-baseline": "MuiGrid-align-items-xs-baseline",
                                "align-items-xs-center": "MuiGrid-align-items-xs-center",
                                "align-items-xs-flex-end": "MuiGrid-align-items-xs-flex-end",
                                "align-items-xs-flex-start": "MuiGrid-align-items-xs-flex-start",
                                "container": "MuiGrid-container",
                                "direction-xs-column": "MuiGrid-direction-xs-column",
                                "direction-xs-column-reverse": "MuiGrid-direction-xs-column-reverse",
                                "direction-xs-row-reverse": "MuiGrid-direction-xs-row-reverse",
                                "grid-lg-1": "MuiGrid-grid-lg-1",
                                "grid-lg-10": "MuiGrid-grid-lg-10",
                                "grid-lg-11": "MuiGrid-grid-lg-11",
                                "grid-lg-12": "MuiGrid-grid-lg-12",
                                "grid-lg-2": "MuiGrid-grid-lg-2",
                                "grid-lg-3": "MuiGrid-grid-lg-3",
                                "grid-lg-4": "MuiGrid-grid-lg-4",
                                "grid-lg-5": "MuiGrid-grid-lg-5",
                                "grid-lg-6": "MuiGrid-grid-lg-6",
                                "grid-lg-7": "MuiGrid-grid-lg-7",
                                "grid-lg-8": "MuiGrid-grid-lg-8",
                                "grid-lg-9": "MuiGrid-grid-lg-9",
                                "grid-lg-auto": "MuiGrid-grid-lg-auto",
                                "grid-lg-true": "MuiGrid-grid-lg-true",
                                "grid-md-1": "MuiGrid-grid-md-1",
                                "grid-md-10": "MuiGrid-grid-md-10",
                                "grid-md-11": "MuiGrid-grid-md-11",
                                "grid-md-12": "MuiGrid-grid-md-12",
                                "grid-md-2": "MuiGrid-grid-md-2",
                                "grid-md-3": "MuiGrid-grid-md-3",
                                "grid-md-4": "MuiGrid-grid-md-4",
                                "grid-md-5": "MuiGrid-grid-md-5",
                                "grid-md-6": "MuiGrid-grid-md-6",
                                "grid-md-7": "MuiGrid-grid-md-7",
                                "grid-md-8": "MuiGrid-grid-md-8",
                                "grid-md-9": "MuiGrid-grid-md-9",
                                "grid-md-auto": "MuiGrid-grid-md-auto",
                                "grid-md-true": "MuiGrid-grid-md-true",
                                "grid-sm-1": "MuiGrid-grid-sm-1",
                                "grid-sm-10": "MuiGrid-grid-sm-10",
                                "grid-sm-11": "MuiGrid-grid-sm-11",
                                "grid-sm-12": "MuiGrid-grid-sm-12",
                                "grid-sm-2": "MuiGrid-grid-sm-2",
                                "grid-sm-3": "MuiGrid-grid-sm-3",
                                "grid-sm-4": "MuiGrid-grid-sm-4",
                                "grid-sm-5": "MuiGrid-grid-sm-5",
                                "grid-sm-6": "MuiGrid-grid-sm-6",
                                "grid-sm-7": "MuiGrid-grid-sm-7",
                                "grid-sm-8": "MuiGrid-grid-sm-8",
                                "grid-sm-9": "MuiGrid-grid-sm-9",
                                "grid-sm-auto": "MuiGrid-grid-sm-auto",
                                "grid-sm-true": "MuiGrid-grid-sm-true",
                                "grid-xl-1": "MuiGrid-grid-xl-1",
                                "grid-xl-10": "MuiGrid-grid-xl-10",
                                "grid-xl-11": "MuiGrid-grid-xl-11",
                                "grid-xl-12": "MuiGrid-grid-xl-12",
                                "grid-xl-2": "MuiGrid-grid-xl-2",
                                "grid-xl-3": "MuiGrid-grid-xl-3",
                                "grid-xl-4": "MuiGrid-grid-xl-4",
                                "grid-xl-5": "MuiGrid-grid-xl-5",
                                "grid-xl-6": "MuiGrid-grid-xl-6",
                                "grid-xl-7": "MuiGrid-grid-xl-7",
                                "grid-xl-8": "MuiGrid-grid-xl-8",
                                "grid-xl-9": "MuiGrid-grid-xl-9",
                                "grid-xl-auto": "MuiGrid-grid-xl-auto",
                                "grid-xl-true": "MuiGrid-grid-xl-true",
                                "grid-xs-1": "MuiGrid-grid-xs-1",
                                "grid-xs-10": "MuiGrid-grid-xs-10",
                                "grid-xs-11": "MuiGrid-grid-xs-11",
                                "grid-xs-12": "MuiGrid-grid-xs-12",
                                "grid-xs-2": "MuiGrid-grid-xs-2",
                                "grid-xs-3": "MuiGrid-grid-xs-3",
                                "grid-xs-4": "MuiGrid-grid-xs-4",
                                "grid-xs-5": "MuiGrid-grid-xs-5",
                                "grid-xs-6": "MuiGrid-grid-xs-6",
                                "grid-xs-7": "MuiGrid-grid-xs-7",
                                "grid-xs-8": "MuiGrid-grid-xs-8",
                                "grid-xs-9": "MuiGrid-grid-xs-9",
                                "grid-xs-auto": "MuiGrid-grid-xs-auto",
                                "grid-xs-true": "MuiGrid-grid-xs-true",
                                "item": "MuiGrid-item",
                                "justify-xs-center": "MuiGrid-justify-xs-center",
                                "justify-xs-flex-end": "MuiGrid-justify-xs-flex-end",
                                "justify-xs-space-around": "MuiGrid-justify-xs-space-around",
                                "justify-xs-space-between": "MuiGrid-justify-xs-space-between",
                                "justify-xs-space-evenly": "MuiGrid-justify-xs-space-evenly",
                                "root": "MuiGrid-root",
                                "spacing-xs-1": "MuiGrid-spacing-xs-1",
                                "spacing-xs-10": "MuiGrid-spacing-xs-10",
                                "spacing-xs-2": "MuiGrid-spacing-xs-2",
                                "spacing-xs-3": "MuiGrid-spacing-xs-3",
                                "spacing-xs-4": "MuiGrid-spacing-xs-4",
                                "spacing-xs-5": "MuiGrid-spacing-xs-5",
                                "spacing-xs-6": "MuiGrid-spacing-xs-6",
                                "spacing-xs-7": "MuiGrid-spacing-xs-7",
                                "spacing-xs-8": "MuiGrid-spacing-xs-8",
                                "spacing-xs-9": "MuiGrid-spacing-xs-9",
                                "wrap-xs-nowrap": "MuiGrid-wrap-xs-nowrap",
                                "wrap-xs-wrap-reverse": "MuiGrid-wrap-xs-wrap-reverse",
                                "zeroMinWidth": "MuiGrid-zeroMinWidth",
                              }
                            }
                            container={true}
                            justify="center"
                            spacing={3}
                          >
                            <div
                              className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 MuiGrid-justify-xs-center"
                            />
                          </ForwardRef(Grid)>
                        </WithStyles(ForwardRef(Grid))>
                      </div>
                    </ForwardRef(Container)>
                  </WithStyles(ForwardRef(Container))>
                </section>
                <NotificationBar
                  dismissAfter={5000}
                  msg=""
                  onDimiss={[Function]}
                  showNotification={false}
                  variant=""
                >
                  <div>
                    <WithStyles(ForwardRef(Snackbar))
                      anchorOrigin={
                        Object {
                          "horizontal": "center",
                          "vertical": "bottom",
                        }
                      }
                      autoHideDuration={5000}
                      onClose={[Function]}
                      open={false}
                    >
                      <ForwardRef(Snackbar)
                        anchorOrigin={
                          Object {
                            "horizontal": "center",
                            "vertical": "bottom",
                          }
                        }
                        autoHideDuration={5000}
                        classes={
                          Object {
                            "anchorOriginBottomCenter": "MuiSnackbar-anchorOriginBottomCenter",
                            "anchorOriginBottomLeft": "MuiSnackbar-anchorOriginBottomLeft",
                            "anchorOriginBottomRight": "MuiSnackbar-anchorOriginBottomRight",
                            "anchorOriginTopCenter": "MuiSnackbar-anchorOriginTopCenter",
                            "anchorOriginTopLeft": "MuiSnackbar-anchorOriginTopLeft",
                            "anchorOriginTopRight": "MuiSnackbar-anchorOriginTopRight",
                            "root": "MuiSnackbar-root",
                          }
                        }
                        onClose={[Function]}
                        open={false}
                      />
                    </WithStyles(ForwardRef(Snackbar))>
                  </div>
                </NotificationBar>
              </div>
            </Dashboard>
      `);
});

it("Dashboard renders correctly - return drone when crashed", () => {
  const wrapper = mount(<Dashboard></Dashboard>);
  const dronesStationCount = 3;
  const { quads: drones } = allDrones;
  const allStations = UtilityHelper.divideDronesAcrossStations(
    drones,
    dronesStationCount
  );

  const stationId = 0;
  const selectedDrone = allStations[stationId][0];

  wrapper
    .instance()
    .setState({ ...wrapper.instance().state, stations: { ...allStations } }); // initialise the stations with drones

  wrapper.instance()._currentUser = {
    emailId: "xyz@gmail.com",
    firstName: "Manoj",
    lastName: "Lakshman",
    phoneNumber: "912",
    isBanned: false
  };

  //return a drone
  wrapper.instance().returnDrone(true);

  expect(EnzymeToJson(wrapper)).toMatchInlineSnapshot(`
            <Dashboard>
              <div
                className="dashboard"
              >
                <HeaderAppBar
                  countDownValue={0}
                  isUserBanned={false}
                  loggedInUser=", "
                  onDroneReturn={[Function]}
                >
                  <div
                    className="header-app-bar"
                  >
                    <WithStyles(ForwardRef(AppBar))
                      position="static"
                    >
                      <ForwardRef(AppBar)
                        classes={
                          Object {
                            "colorDefault": "MuiAppBar-colorDefault",
                            "colorPrimary": "MuiAppBar-colorPrimary",
                            "colorSecondary": "MuiAppBar-colorSecondary",
                            "positionAbsolute": "MuiAppBar-positionAbsolute",
                            "positionFixed": "MuiAppBar-positionFixed",
                            "positionRelative": "MuiAppBar-positionRelative",
                            "positionStatic": "MuiAppBar-positionStatic",
                            "positionSticky": "MuiAppBar-positionSticky",
                            "root": "MuiAppBar-root",
                          }
                        }
                        position="static"
                      >
                        <WithStyles(ForwardRef(Paper))
                          className="MuiAppBar-root MuiAppBar-positionStatic MuiAppBar-colorPrimary"
                          component="header"
                          elevation={4}
                          square={true}
                        >
                          <ForwardRef(Paper)
                            className="MuiAppBar-root MuiAppBar-positionStatic MuiAppBar-colorPrimary"
                            classes={
                              Object {
                                "elevation0": "MuiPaper-elevation0",
                                "elevation1": "MuiPaper-elevation1",
                                "elevation10": "MuiPaper-elevation10",
                                "elevation11": "MuiPaper-elevation11",
                                "elevation12": "MuiPaper-elevation12",
                                "elevation13": "MuiPaper-elevation13",
                                "elevation14": "MuiPaper-elevation14",
                                "elevation15": "MuiPaper-elevation15",
                                "elevation16": "MuiPaper-elevation16",
                                "elevation17": "MuiPaper-elevation17",
                                "elevation18": "MuiPaper-elevation18",
                                "elevation19": "MuiPaper-elevation19",
                                "elevation2": "MuiPaper-elevation2",
                                "elevation20": "MuiPaper-elevation20",
                                "elevation21": "MuiPaper-elevation21",
                                "elevation22": "MuiPaper-elevation22",
                                "elevation23": "MuiPaper-elevation23",
                                "elevation24": "MuiPaper-elevation24",
                                "elevation3": "MuiPaper-elevation3",
                                "elevation4": "MuiPaper-elevation4",
                                "elevation5": "MuiPaper-elevation5",
                                "elevation6": "MuiPaper-elevation6",
                                "elevation7": "MuiPaper-elevation7",
                                "elevation8": "MuiPaper-elevation8",
                                "elevation9": "MuiPaper-elevation9",
                                "root": "MuiPaper-root",
                                "rounded": "MuiPaper-rounded",
                              }
                            }
                            component="header"
                            elevation={4}
                            square={true}
                          >
                            <header
                              className="MuiPaper-root MuiPaper-elevation4 MuiAppBar-root MuiAppBar-positionStatic MuiAppBar-colorPrimary"
                            >
                              <WithStyles(ForwardRef(Toolbar))>
                                <ForwardRef(Toolbar)
                                  classes={
                                    Object {
                                      "dense": "MuiToolbar-dense",
                                      "gutters": "MuiToolbar-gutters",
                                      "regular": "MuiToolbar-regular",
                                      "root": "MuiToolbar-root",
                                    }
                                  }
                                >
                                  <div
                                    className="MuiToolbar-root MuiToolbar-regular MuiToolbar-gutters"
                                  >
                                    <WithStyles(ForwardRef(Typography))
                                      className="makeStyles-title-2"
                                      noWrap={true}
                                      variant="h6"
                                    >
                                      <ForwardRef(Typography)
                                        className="makeStyles-title-2"
                                        classes={
                                          Object {
                                            "alignCenter": "MuiTypography-alignCenter",
                                            "alignJustify": "MuiTypography-alignJustify",
                                            "alignLeft": "MuiTypography-alignLeft",
                                            "alignRight": "MuiTypography-alignRight",
                                            "body1": "MuiTypography-body1",
                                            "body2": "MuiTypography-body2",
                                            "button": "MuiTypography-button",
                                            "caption": "MuiTypography-caption",
                                            "colorError": "MuiTypography-colorError",
                                            "colorInherit": "MuiTypography-colorInherit",
                                            "colorPrimary": "MuiTypography-colorPrimary",
                                            "colorSecondary": "MuiTypography-colorSecondary",
                                            "colorTextPrimary": "MuiTypography-colorTextPrimary",
                                            "colorTextSecondary": "MuiTypography-colorTextSecondary",
                                            "displayBlock": "MuiTypography-displayBlock",
                                            "displayInline": "MuiTypography-displayInline",
                                            "gutterBottom": "MuiTypography-gutterBottom",
                                            "h1": "MuiTypography-h1",
                                            "h2": "MuiTypography-h2",
                                            "h3": "MuiTypography-h3",
                                            "h4": "MuiTypography-h4",
                                            "h5": "MuiTypography-h5",
                                            "h6": "MuiTypography-h6",
                                            "noWrap": "MuiTypography-noWrap",
                                            "overline": "MuiTypography-overline",
                                            "paragraph": "MuiTypography-paragraph",
                                            "root": "MuiTypography-root",
                                            "srOnly": "MuiTypography-srOnly",
                                            "subtitle1": "MuiTypography-subtitle1",
                                            "subtitle2": "MuiTypography-subtitle2",
                                          }
                                        }
                                        noWrap={true}
                                        theme={
                                          Object {
                                            "breakpoints": Object {
                                              "between": [Function],
                                              "down": [Function],
                                              "keys": Array [
                                                "xs",
                                                "sm",
                                                "md",
                                                "lg",
                                                "xl",
                                              ],
                                              "only": [Function],
                                              "up": [Function],
                                              "values": Object {
                                                "lg": 1280,
                                                "md": 960,
                                                "sm": 600,
                                                "xl": 1920,
                                                "xs": 0,
                                              },
                                              "width": [Function],
                                            },
                                            "direction": "ltr",
                                            "mixins": Object {
                                              "gutters": [Function],
                                              "toolbar": Object {
                                                "@media (min-width:0px) and (orientation: landscape)": Object {
                                                  "minHeight": 48,
                                                },
                                                "@media (min-width:600px)": Object {
                                                  "minHeight": 64,
                                                },
                                                "minHeight": 56,
                                              },
                                            },
                                            "overrides": Object {},
                                            "palette": Object {
                                              "action": Object {
                                                "active": "rgba(0, 0, 0, 0.54)",
                                                "disabled": "rgba(0, 0, 0, 0.26)",
                                                "disabledBackground": "rgba(0, 0, 0, 0.12)",
                                                "hover": "rgba(0, 0, 0, 0.08)",
                                                "hoverOpacity": 0.08,
                                                "selected": "rgba(0, 0, 0, 0.14)",
                                              },
                                              "augmentColor": [Function],
                                              "background": Object {
                                                "default": "#fafafa",
                                                "paper": "#fff",
                                              },
                                              "common": Object {
                                                "black": "#000",
                                                "white": "#fff",
                                              },
                                              "contrastThreshold": 3,
                                              "divider": "rgba(0, 0, 0, 0.12)",
                                              "error": Object {
                                                "contrastText": "#fff",
                                                "dark": "#d32f2f",
                                                "light": "#e57373",
                                                "main": "#f44336",
                                              },
                                              "getContrastText": [Function],
                                              "grey": Object {
                                                "100": "#f5f5f5",
                                                "200": "#eeeeee",
                                                "300": "#e0e0e0",
                                                "400": "#bdbdbd",
                                                "50": "#fafafa",
                                                "500": "#9e9e9e",
                                                "600": "#757575",
                                                "700": "#616161",
                                                "800": "#424242",
                                                "900": "#212121",
                                                "A100": "#d5d5d5",
                                                "A200": "#aaaaaa",
                                                "A400": "#303030",
                                                "A700": "#616161",
                                              },
                                              "primary": Object {
                                                "contrastText": "#fff",
                                                "dark": "#303f9f",
                                                "light": "#7986cb",
                                                "main": "#3f51b5",
                                              },
                                              "secondary": Object {
                                                "contrastText": "#fff",
                                                "dark": "#c51162",
                                                "light": "#ff4081",
                                                "main": "#f50057",
                                              },
                                              "text": Object {
                                                "disabled": "rgba(0, 0, 0, 0.38)",
                                                "hint": "rgba(0, 0, 0, 0.38)",
                                                "primary": "rgba(0, 0, 0, 0.87)",
                                                "secondary": "rgba(0, 0, 0, 0.54)",
                                              },
                                              "tonalOffset": 0.2,
                                              "type": "light",
                                            },
                                            "props": Object {},
                                            "shadows": Array [
                                              "none",
                                              "0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)",
                                              "0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)",
                                              "0px 1px 8px 0px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 3px 3px -2px rgba(0,0,0,0.12)",
                                              "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
                                              "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
                                              "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
                                              "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
                                              "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
                                              "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
                                              "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
                                              "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
                                              "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
                                              "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
                                              "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
                                              "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
                                              "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
                                              "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
                                              "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
                                              "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
                                              "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
                                              "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
                                              "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
                                              "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
                                              "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
                                            ],
                                            "shape": Object {
                                              "borderRadius": 4,
                                            },
                                            "spacing": [Function],
                                            "transitions": Object {
                                              "create": [Function],
                                              "duration": Object {
                                                "complex": 375,
                                                "enteringScreen": 225,
                                                "leavingScreen": 195,
                                                "short": 250,
                                                "shorter": 200,
                                                "shortest": 150,
                                                "standard": 300,
                                              },
                                              "easing": Object {
                                                "easeIn": "cubic-bezier(0.4, 0, 1, 1)",
                                                "easeInOut": "cubic-bezier(0.4, 0, 0.2, 1)",
                                                "easeOut": "cubic-bezier(0.0, 0, 0.2, 1)",
                                                "sharp": "cubic-bezier(0.4, 0, 0.6, 1)",
                                              },
                                              "getAutoHeightDuration": [Function],
                                            },
                                            "typography": Object {
                                              "body1": Object {
                                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                "fontSize": "1rem",
                                                "fontWeight": 400,
                                                "letterSpacing": "0.00938em",
                                                "lineHeight": 1.5,
                                              },
                                              "body2": Object {
                                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                "fontSize": "0.875rem",
                                                "fontWeight": 400,
                                                "letterSpacing": "0.01071em",
                                                "lineHeight": 1.43,
                                              },
                                              "button": Object {
                                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                "fontSize": "0.875rem",
                                                "fontWeight": 500,
                                                "letterSpacing": "0.02857em",
                                                "lineHeight": 1.75,
                                                "textTransform": "uppercase",
                                              },
                                              "caption": Object {
                                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                "fontSize": "0.75rem",
                                                "fontWeight": 400,
                                                "letterSpacing": "0.03333em",
                                                "lineHeight": 1.66,
                                              },
                                              "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                              "fontSize": 14,
                                              "fontWeightBold": 700,
                                              "fontWeightLight": 300,
                                              "fontWeightMedium": 500,
                                              "fontWeightRegular": 400,
                                              "h1": Object {
                                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                "fontSize": "6rem",
                                                "fontWeight": 300,
                                                "letterSpacing": "-0.01562em",
                                                "lineHeight": 1,
                                              },
                                              "h2": Object {
                                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                "fontSize": "3.75rem",
                                                "fontWeight": 300,
                                                "letterSpacing": "-0.00833em",
                                                "lineHeight": 1,
                                              },
                                              "h3": Object {
                                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                "fontSize": "3rem",
                                                "fontWeight": 400,
                                                "letterSpacing": "0em",
                                                "lineHeight": 1.04,
                                              },
                                              "h4": Object {
                                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                "fontSize": "2.125rem",
                                                "fontWeight": 400,
                                                "letterSpacing": "0.00735em",
                                                "lineHeight": 1.17,
                                              },
                                              "h5": Object {
                                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                "fontSize": "1.5rem",
                                                "fontWeight": 400,
                                                "letterSpacing": "0em",
                                                "lineHeight": 1.33,
                                              },
                                              "h6": Object {
                                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                "fontSize": "1.25rem",
                                                "fontWeight": 500,
                                                "letterSpacing": "0.0075em",
                                                "lineHeight": 1.6,
                                              },
                                              "htmlFontSize": 16,
                                              "overline": Object {
                                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                "fontSize": "0.75rem",
                                                "fontWeight": 400,
                                                "letterSpacing": "0.08333em",
                                                "lineHeight": 2.66,
                                                "textTransform": "uppercase",
                                              },
                                              "pxToRem": [Function],
                                              "round": [Function],
                                              "subtitle1": Object {
                                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                "fontSize": "1rem",
                                                "fontWeight": 400,
                                                "letterSpacing": "0.00938em",
                                                "lineHeight": 1.75,
                                              },
                                              "subtitle2": Object {
                                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                "fontSize": "0.875rem",
                                                "fontWeight": 500,
                                                "letterSpacing": "0.00714em",
                                                "lineHeight": 1.57,
                                              },
                                            },
                                            "zIndex": Object {
                                              "appBar": 1100,
                                              "drawer": 1200,
                                              "mobileStepper": 1000,
                                              "modal": 1300,
                                              "snackbar": 1400,
                                              "tooltip": 1500,
                                            },
                                          }
                                        }
                                        variant="h6"
                                      >
                                        <h6
                                          className="MuiTypography-root makeStyles-title-2 MuiTypography-h6 MuiTypography-noWrap"
                                        >
                                          Drone For You
                                        </h6>
                                      </ForwardRef(Typography)>
                                    </WithStyles(ForwardRef(Typography))>
                                    <div
                                      className="makeStyles-grow-1"
                                    />
                                    <WithStyles(ForwardRef(Typography))
                                      noWrap={true}
                                    >
                                      <ForwardRef(Typography)
                                        classes={
                                          Object {
                                            "alignCenter": "MuiTypography-alignCenter",
                                            "alignJustify": "MuiTypography-alignJustify",
                                            "alignLeft": "MuiTypography-alignLeft",
                                            "alignRight": "MuiTypography-alignRight",
                                            "body1": "MuiTypography-body1",
                                            "body2": "MuiTypography-body2",
                                            "button": "MuiTypography-button",
                                            "caption": "MuiTypography-caption",
                                            "colorError": "MuiTypography-colorError",
                                            "colorInherit": "MuiTypography-colorInherit",
                                            "colorPrimary": "MuiTypography-colorPrimary",
                                            "colorSecondary": "MuiTypography-colorSecondary",
                                            "colorTextPrimary": "MuiTypography-colorTextPrimary",
                                            "colorTextSecondary": "MuiTypography-colorTextSecondary",
                                            "displayBlock": "MuiTypography-displayBlock",
                                            "displayInline": "MuiTypography-displayInline",
                                            "gutterBottom": "MuiTypography-gutterBottom",
                                            "h1": "MuiTypography-h1",
                                            "h2": "MuiTypography-h2",
                                            "h3": "MuiTypography-h3",
                                            "h4": "MuiTypography-h4",
                                            "h5": "MuiTypography-h5",
                                            "h6": "MuiTypography-h6",
                                            "noWrap": "MuiTypography-noWrap",
                                            "overline": "MuiTypography-overline",
                                            "paragraph": "MuiTypography-paragraph",
                                            "root": "MuiTypography-root",
                                            "srOnly": "MuiTypography-srOnly",
                                            "subtitle1": "MuiTypography-subtitle1",
                                            "subtitle2": "MuiTypography-subtitle2",
                                          }
                                        }
                                        noWrap={true}
                                        theme={
                                          Object {
                                            "breakpoints": Object {
                                              "between": [Function],
                                              "down": [Function],
                                              "keys": Array [
                                                "xs",
                                                "sm",
                                                "md",
                                                "lg",
                                                "xl",
                                              ],
                                              "only": [Function],
                                              "up": [Function],
                                              "values": Object {
                                                "lg": 1280,
                                                "md": 960,
                                                "sm": 600,
                                                "xl": 1920,
                                                "xs": 0,
                                              },
                                              "width": [Function],
                                            },
                                            "direction": "ltr",
                                            "mixins": Object {
                                              "gutters": [Function],
                                              "toolbar": Object {
                                                "@media (min-width:0px) and (orientation: landscape)": Object {
                                                  "minHeight": 48,
                                                },
                                                "@media (min-width:600px)": Object {
                                                  "minHeight": 64,
                                                },
                                                "minHeight": 56,
                                              },
                                            },
                                            "overrides": Object {},
                                            "palette": Object {
                                              "action": Object {
                                                "active": "rgba(0, 0, 0, 0.54)",
                                                "disabled": "rgba(0, 0, 0, 0.26)",
                                                "disabledBackground": "rgba(0, 0, 0, 0.12)",
                                                "hover": "rgba(0, 0, 0, 0.08)",
                                                "hoverOpacity": 0.08,
                                                "selected": "rgba(0, 0, 0, 0.14)",
                                              },
                                              "augmentColor": [Function],
                                              "background": Object {
                                                "default": "#fafafa",
                                                "paper": "#fff",
                                              },
                                              "common": Object {
                                                "black": "#000",
                                                "white": "#fff",
                                              },
                                              "contrastThreshold": 3,
                                              "divider": "rgba(0, 0, 0, 0.12)",
                                              "error": Object {
                                                "contrastText": "#fff",
                                                "dark": "#d32f2f",
                                                "light": "#e57373",
                                                "main": "#f44336",
                                              },
                                              "getContrastText": [Function],
                                              "grey": Object {
                                                "100": "#f5f5f5",
                                                "200": "#eeeeee",
                                                "300": "#e0e0e0",
                                                "400": "#bdbdbd",
                                                "50": "#fafafa",
                                                "500": "#9e9e9e",
                                                "600": "#757575",
                                                "700": "#616161",
                                                "800": "#424242",
                                                "900": "#212121",
                                                "A100": "#d5d5d5",
                                                "A200": "#aaaaaa",
                                                "A400": "#303030",
                                                "A700": "#616161",
                                              },
                                              "primary": Object {
                                                "contrastText": "#fff",
                                                "dark": "#303f9f",
                                                "light": "#7986cb",
                                                "main": "#3f51b5",
                                              },
                                              "secondary": Object {
                                                "contrastText": "#fff",
                                                "dark": "#c51162",
                                                "light": "#ff4081",
                                                "main": "#f50057",
                                              },
                                              "text": Object {
                                                "disabled": "rgba(0, 0, 0, 0.38)",
                                                "hint": "rgba(0, 0, 0, 0.38)",
                                                "primary": "rgba(0, 0, 0, 0.87)",
                                                "secondary": "rgba(0, 0, 0, 0.54)",
                                              },
                                              "tonalOffset": 0.2,
                                              "type": "light",
                                            },
                                            "props": Object {},
                                            "shadows": Array [
                                              "none",
                                              "0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)",
                                              "0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)",
                                              "0px 1px 8px 0px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 3px 3px -2px rgba(0,0,0,0.12)",
                                              "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
                                              "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
                                              "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
                                              "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
                                              "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
                                              "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
                                              "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
                                              "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
                                              "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
                                              "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
                                              "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
                                              "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
                                              "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
                                              "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
                                              "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
                                              "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
                                              "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
                                              "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
                                              "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
                                              "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
                                              "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
                                            ],
                                            "shape": Object {
                                              "borderRadius": 4,
                                            },
                                            "spacing": [Function],
                                            "transitions": Object {
                                              "create": [Function],
                                              "duration": Object {
                                                "complex": 375,
                                                "enteringScreen": 225,
                                                "leavingScreen": 195,
                                                "short": 250,
                                                "shorter": 200,
                                                "shortest": 150,
                                                "standard": 300,
                                              },
                                              "easing": Object {
                                                "easeIn": "cubic-bezier(0.4, 0, 1, 1)",
                                                "easeInOut": "cubic-bezier(0.4, 0, 0.2, 1)",
                                                "easeOut": "cubic-bezier(0.0, 0, 0.2, 1)",
                                                "sharp": "cubic-bezier(0.4, 0, 0.6, 1)",
                                              },
                                              "getAutoHeightDuration": [Function],
                                            },
                                            "typography": Object {
                                              "body1": Object {
                                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                "fontSize": "1rem",
                                                "fontWeight": 400,
                                                "letterSpacing": "0.00938em",
                                                "lineHeight": 1.5,
                                              },
                                              "body2": Object {
                                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                "fontSize": "0.875rem",
                                                "fontWeight": 400,
                                                "letterSpacing": "0.01071em",
                                                "lineHeight": 1.43,
                                              },
                                              "button": Object {
                                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                "fontSize": "0.875rem",
                                                "fontWeight": 500,
                                                "letterSpacing": "0.02857em",
                                                "lineHeight": 1.75,
                                                "textTransform": "uppercase",
                                              },
                                              "caption": Object {
                                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                "fontSize": "0.75rem",
                                                "fontWeight": 400,
                                                "letterSpacing": "0.03333em",
                                                "lineHeight": 1.66,
                                              },
                                              "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                              "fontSize": 14,
                                              "fontWeightBold": 700,
                                              "fontWeightLight": 300,
                                              "fontWeightMedium": 500,
                                              "fontWeightRegular": 400,
                                              "h1": Object {
                                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                "fontSize": "6rem",
                                                "fontWeight": 300,
                                                "letterSpacing": "-0.01562em",
                                                "lineHeight": 1,
                                              },
                                              "h2": Object {
                                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                "fontSize": "3.75rem",
                                                "fontWeight": 300,
                                                "letterSpacing": "-0.00833em",
                                                "lineHeight": 1,
                                              },
                                              "h3": Object {
                                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                "fontSize": "3rem",
                                                "fontWeight": 400,
                                                "letterSpacing": "0em",
                                                "lineHeight": 1.04,
                                              },
                                              "h4": Object {
                                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                "fontSize": "2.125rem",
                                                "fontWeight": 400,
                                                "letterSpacing": "0.00735em",
                                                "lineHeight": 1.17,
                                              },
                                              "h5": Object {
                                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                "fontSize": "1.5rem",
                                                "fontWeight": 400,
                                                "letterSpacing": "0em",
                                                "lineHeight": 1.33,
                                              },
                                              "h6": Object {
                                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                "fontSize": "1.25rem",
                                                "fontWeight": 500,
                                                "letterSpacing": "0.0075em",
                                                "lineHeight": 1.6,
                                              },
                                              "htmlFontSize": 16,
                                              "overline": Object {
                                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                "fontSize": "0.75rem",
                                                "fontWeight": 400,
                                                "letterSpacing": "0.08333em",
                                                "lineHeight": 2.66,
                                                "textTransform": "uppercase",
                                              },
                                              "pxToRem": [Function],
                                              "round": [Function],
                                              "subtitle1": Object {
                                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                "fontSize": "1rem",
                                                "fontWeight": 400,
                                                "letterSpacing": "0.00938em",
                                                "lineHeight": 1.75,
                                              },
                                              "subtitle2": Object {
                                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                                "fontSize": "0.875rem",
                                                "fontWeight": 500,
                                                "letterSpacing": "0.00714em",
                                                "lineHeight": 1.57,
                                              },
                                            },
                                            "zIndex": Object {
                                              "appBar": 1100,
                                              "drawer": 1200,
                                              "mobileStepper": 1000,
                                              "modal": 1300,
                                              "snackbar": 1400,
                                              "tooltip": 1500,
                                            },
                                          }
                                        }
                                      >
                                        <p
                                          className="MuiTypography-root MuiTypography-body1 MuiTypography-noWrap"
                                        >
                                           
                                        </p>
                                      </ForwardRef(Typography)>
                                    </WithStyles(ForwardRef(Typography))>
                                    <div
                                      className="makeStyles-grow-1"
                                    />
                                    <WithStyles(ForwardRef(Button))
                                      className="margin3"
                                      color="primary"
                                      disabled={true}
                                      onClick={[Function]}
                                      variant="contained"
                                    >
                                      <ForwardRef(Button)
                                        className="margin3"
                                        classes={
                                          Object {
                                            "colorInherit": "MuiButton-colorInherit",
                                            "contained": "MuiButton-contained",
                                            "containedPrimary": "MuiButton-containedPrimary",
                                            "containedSecondary": "MuiButton-containedSecondary",
                                            "disabled": "Mui-disabled",
                                            "focusVisible": "Mui-focusVisible",
                                            "fullWidth": "MuiButton-fullWidth",
                                            "label": "MuiButton-label",
                                            "outlined": "MuiButton-outlined",
                                            "outlinedPrimary": "MuiButton-outlinedPrimary",
                                            "outlinedSecondary": "MuiButton-outlinedSecondary",
                                            "root": "MuiButton-root",
                                            "sizeLarge": "MuiButton-sizeLarge",
                                            "sizeSmall": "MuiButton-sizeSmall",
                                            "text": "MuiButton-text",
                                            "textPrimary": "MuiButton-textPrimary",
                                            "textSecondary": "MuiButton-textSecondary",
                                          }
                                        }
                                        color="primary"
                                        disabled={true}
                                        onClick={[Function]}
                                        variant="contained"
                                      >
                                        <WithStyles(ForwardRef(ButtonBase))
                                          className="MuiButton-root margin3 MuiButton-contained MuiButton-containedPrimary Mui-disabled"
                                          component="button"
                                          disabled={true}
                                          focusRipple={true}
                                          focusVisibleClassName="Mui-focusVisible"
                                          onClick={[Function]}
                                          type="button"
                                        >
                                          <ForwardRef(ButtonBase)
                                            className="MuiButton-root margin3 MuiButton-contained MuiButton-containedPrimary Mui-disabled"
                                            classes={
                                              Object {
                                                "disabled": "Mui-disabled",
                                                "focusVisible": "Mui-focusVisible",
                                                "root": "MuiButtonBase-root",
                                              }
                                            }
                                            component="button"
                                            disabled={true}
                                            focusRipple={true}
                                            focusVisibleClassName="Mui-focusVisible"
                                            onClick={[Function]}
                                            type="button"
                                          >
                                            <button
                                              className="MuiButtonBase-root MuiButton-root margin3 MuiButton-contained MuiButton-containedPrimary Mui-disabled Mui-disabled"
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
                                                Return Drone
                                              </span>
                                            </button>
                                          </ForwardRef(ButtonBase)>
                                        </WithStyles(ForwardRef(ButtonBase))>
                                      </ForwardRef(Button)>
                                    </WithStyles(ForwardRef(Button))>
                                    <div
                                      className="makeStyles-grow-1"
                                    />
                                    <b>
                                       
                                      , 
                                       
                                    </b>
                                    <div
                                      className="makeStyles-sectionDesktop-3"
                                    >
                                      <WithStyles(ForwardRef(IconButton))
                                        aria-controls="profile-account-menu"
                                        aria-haspopup="true"
                                        aria-label="Account of current user"
                                        color="inherit"
                                        edge="end"
                                        onClick={[Function]}
                                      >
                                        <ForwardRef(IconButton)
                                          aria-controls="profile-account-menu"
                                          aria-haspopup="true"
                                          aria-label="Account of current user"
                                          classes={
                                            Object {
                                              "colorInherit": "MuiIconButton-colorInherit",
                                              "colorPrimary": "MuiIconButton-colorPrimary",
                                              "colorSecondary": "MuiIconButton-colorSecondary",
                                              "disabled": "Mui-disabled",
                                              "edgeEnd": "MuiIconButton-edgeEnd",
                                              "edgeStart": "MuiIconButton-edgeStart",
                                              "label": "MuiIconButton-label",
                                              "root": "MuiIconButton-root",
                                              "sizeSmall": "MuiIconButton-sizeSmall",
                                            }
                                          }
                                          color="inherit"
                                          edge="end"
                                          onClick={[Function]}
                                        >
                                          <WithStyles(ForwardRef(ButtonBase))
                                            aria-controls="profile-account-menu"
                                            aria-haspopup="true"
                                            aria-label="Account of current user"
                                            centerRipple={true}
                                            className="MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-edgeEnd"
                                            disabled={false}
                                            focusRipple={true}
                                            onClick={[Function]}
                                          >
                                            <ForwardRef(ButtonBase)
                                              aria-controls="profile-account-menu"
                                              aria-haspopup="true"
                                              aria-label="Account of current user"
                                              centerRipple={true}
                                              className="MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-edgeEnd"
                                              classes={
                                                Object {
                                                  "disabled": "Mui-disabled",
                                                  "focusVisible": "Mui-focusVisible",
                                                  "root": "MuiButtonBase-root",
                                                }
                                              }
                                              disabled={false}
                                              focusRipple={true}
                                              onClick={[Function]}
                                            >
                                              <button
                                                aria-controls="profile-account-menu"
                                                aria-haspopup="true"
                                                aria-label="Account of current user"
                                                className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-edgeEnd"
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
                                                  className="MuiIconButton-label"
                                                >
                                                  <ForwardRef>
                                                    <WithStyles(ForwardRef(SvgIcon))>
                                                      <ForwardRef(SvgIcon)
                                                        classes={
                                                          Object {
                                                            "colorAction": "MuiSvgIcon-colorAction",
                                                            "colorDisabled": "MuiSvgIcon-colorDisabled",
                                                            "colorError": "MuiSvgIcon-colorError",
                                                            "colorPrimary": "MuiSvgIcon-colorPrimary",
                                                            "colorSecondary": "MuiSvgIcon-colorSecondary",
                                                            "fontSizeInherit": "MuiSvgIcon-fontSizeInherit",
                                                            "fontSizeLarge": "MuiSvgIcon-fontSizeLarge",
                                                            "fontSizeSmall": "MuiSvgIcon-fontSizeSmall",
                                                            "root": "MuiSvgIcon-root",
                                                          }
                                                        }
                                                      >
                                                        <svg
                                                          aria-hidden="true"
                                                          className="MuiSvgIcon-root"
                                                          focusable="false"
                                                          role="presentation"
                                                          viewBox="0 0 24 24"
                                                        >
                                                          <path
                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
                                                          />
                                                        </svg>
                                                      </ForwardRef(SvgIcon)>
                                                    </WithStyles(ForwardRef(SvgIcon))>
                                                  </ForwardRef>
                                                </span>
                                                <NoSsr>
                                                  <WithStyles(undefined)
                                                    center={true}
                                                  >
                                                    <ForwardRef(TouchRipple)
                                                      center={true}
                                                      classes={
                                                        Object {
                                                          "child": "MuiTouchRipple-child",
                                                          "childLeaving": "MuiTouchRipple-childLeaving",
                                                          "childPulsate": "MuiTouchRipple-childPulsate",
                                                          "ripple": "MuiTouchRipple-ripple",
                                                          "ripplePulsate": "MuiTouchRipple-ripplePulsate",
                                                          "rippleVisible": "MuiTouchRipple-rippleVisible",
                                                          "root": "MuiTouchRipple-root",
                                                        }
                                                      }
                                                    >
                                                      <span
                                                        className="MuiTouchRipple-root"
                                                      >
                                                        <TransitionGroup
                                                          childFactory={[Function]}
                                                          component={null}
                                                          exit={true}
                                                        />
                                                      </span>
                                                    </ForwardRef(TouchRipple)>
                                                  </WithStyles(undefined)>
                                                </NoSsr>
                                              </button>
                                            </ForwardRef(ButtonBase)>
                                          </WithStyles(ForwardRef(ButtonBase))>
                                        </ForwardRef(IconButton)>
                                      </WithStyles(ForwardRef(IconButton))>
                                    </div>
                                  </div>
                                </ForwardRef(Toolbar)>
                              </WithStyles(ForwardRef(Toolbar))>
                            </header>
                          </ForwardRef(Paper)>
                        </WithStyles(ForwardRef(Paper))>
                      </ForwardRef(AppBar)>
                    </WithStyles(ForwardRef(AppBar))>
                    <WithStyles(ForwardRef(Menu))
                      anchorEl={null}
                      anchorOrigin={
                        Object {
                          "horizontal": "right",
                          "vertical": "top",
                        }
                      }
                      id="profile-account-menu"
                      keepMounted={true}
                      onClose={[Function]}
                      open={false}
                      transformOrigin={
                        Object {
                          "horizontal": "right",
                          "vertical": "top",
                        }
                      }
                    >
                      <ForwardRef(Menu)
                        anchorEl={null}
                        anchorOrigin={
                          Object {
                            "horizontal": "right",
                            "vertical": "top",
                          }
                        }
                        classes={
                          Object {
                            "list": "MuiMenu-list",
                            "paper": "MuiMenu-paper",
                          }
                        }
                        id="profile-account-menu"
                        keepMounted={true}
                        onClose={[Function]}
                        open={false}
                        theme={
                          Object {
                            "breakpoints": Object {
                              "between": [Function],
                              "down": [Function],
                              "keys": Array [
                                "xs",
                                "sm",
                                "md",
                                "lg",
                                "xl",
                              ],
                              "only": [Function],
                              "up": [Function],
                              "values": Object {
                                "lg": 1280,
                                "md": 960,
                                "sm": 600,
                                "xl": 1920,
                                "xs": 0,
                              },
                              "width": [Function],
                            },
                            "direction": "ltr",
                            "mixins": Object {
                              "gutters": [Function],
                              "toolbar": Object {
                                "@media (min-width:0px) and (orientation: landscape)": Object {
                                  "minHeight": 48,
                                },
                                "@media (min-width:600px)": Object {
                                  "minHeight": 64,
                                },
                                "minHeight": 56,
                              },
                            },
                            "overrides": Object {},
                            "palette": Object {
                              "action": Object {
                                "active": "rgba(0, 0, 0, 0.54)",
                                "disabled": "rgba(0, 0, 0, 0.26)",
                                "disabledBackground": "rgba(0, 0, 0, 0.12)",
                                "hover": "rgba(0, 0, 0, 0.08)",
                                "hoverOpacity": 0.08,
                                "selected": "rgba(0, 0, 0, 0.14)",
                              },
                              "augmentColor": [Function],
                              "background": Object {
                                "default": "#fafafa",
                                "paper": "#fff",
                              },
                              "common": Object {
                                "black": "#000",
                                "white": "#fff",
                              },
                              "contrastThreshold": 3,
                              "divider": "rgba(0, 0, 0, 0.12)",
                              "error": Object {
                                "contrastText": "#fff",
                                "dark": "#d32f2f",
                                "light": "#e57373",
                                "main": "#f44336",
                              },
                              "getContrastText": [Function],
                              "grey": Object {
                                "100": "#f5f5f5",
                                "200": "#eeeeee",
                                "300": "#e0e0e0",
                                "400": "#bdbdbd",
                                "50": "#fafafa",
                                "500": "#9e9e9e",
                                "600": "#757575",
                                "700": "#616161",
                                "800": "#424242",
                                "900": "#212121",
                                "A100": "#d5d5d5",
                                "A200": "#aaaaaa",
                                "A400": "#303030",
                                "A700": "#616161",
                              },
                              "primary": Object {
                                "contrastText": "#fff",
                                "dark": "#303f9f",
                                "light": "#7986cb",
                                "main": "#3f51b5",
                              },
                              "secondary": Object {
                                "contrastText": "#fff",
                                "dark": "#c51162",
                                "light": "#ff4081",
                                "main": "#f50057",
                              },
                              "text": Object {
                                "disabled": "rgba(0, 0, 0, 0.38)",
                                "hint": "rgba(0, 0, 0, 0.38)",
                                "primary": "rgba(0, 0, 0, 0.87)",
                                "secondary": "rgba(0, 0, 0, 0.54)",
                              },
                              "tonalOffset": 0.2,
                              "type": "light",
                            },
                            "props": Object {},
                            "shadows": Array [
                              "none",
                              "0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)",
                              "0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)",
                              "0px 1px 8px 0px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 3px 3px -2px rgba(0,0,0,0.12)",
                              "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
                              "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
                              "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
                              "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
                              "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
                              "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
                              "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
                              "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
                              "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
                              "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
                              "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
                              "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
                              "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
                              "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
                              "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
                              "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
                              "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
                              "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
                              "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
                              "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
                              "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
                            ],
                            "shape": Object {
                              "borderRadius": 4,
                            },
                            "spacing": [Function],
                            "transitions": Object {
                              "create": [Function],
                              "duration": Object {
                                "complex": 375,
                                "enteringScreen": 225,
                                "leavingScreen": 195,
                                "short": 250,
                                "shorter": 200,
                                "shortest": 150,
                                "standard": 300,
                              },
                              "easing": Object {
                                "easeIn": "cubic-bezier(0.4, 0, 1, 1)",
                                "easeInOut": "cubic-bezier(0.4, 0, 0.2, 1)",
                                "easeOut": "cubic-bezier(0.0, 0, 0.2, 1)",
                                "sharp": "cubic-bezier(0.4, 0, 0.6, 1)",
                              },
                              "getAutoHeightDuration": [Function],
                            },
                            "typography": Object {
                              "body1": Object {
                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                "fontSize": "1rem",
                                "fontWeight": 400,
                                "letterSpacing": "0.00938em",
                                "lineHeight": 1.5,
                              },
                              "body2": Object {
                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                "fontSize": "0.875rem",
                                "fontWeight": 400,
                                "letterSpacing": "0.01071em",
                                "lineHeight": 1.43,
                              },
                              "button": Object {
                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                "fontSize": "0.875rem",
                                "fontWeight": 500,
                                "letterSpacing": "0.02857em",
                                "lineHeight": 1.75,
                                "textTransform": "uppercase",
                              },
                              "caption": Object {
                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                "fontSize": "0.75rem",
                                "fontWeight": 400,
                                "letterSpacing": "0.03333em",
                                "lineHeight": 1.66,
                              },
                              "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                              "fontSize": 14,
                              "fontWeightBold": 700,
                              "fontWeightLight": 300,
                              "fontWeightMedium": 500,
                              "fontWeightRegular": 400,
                              "h1": Object {
                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                "fontSize": "6rem",
                                "fontWeight": 300,
                                "letterSpacing": "-0.01562em",
                                "lineHeight": 1,
                              },
                              "h2": Object {
                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                "fontSize": "3.75rem",
                                "fontWeight": 300,
                                "letterSpacing": "-0.00833em",
                                "lineHeight": 1,
                              },
                              "h3": Object {
                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                "fontSize": "3rem",
                                "fontWeight": 400,
                                "letterSpacing": "0em",
                                "lineHeight": 1.04,
                              },
                              "h4": Object {
                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                "fontSize": "2.125rem",
                                "fontWeight": 400,
                                "letterSpacing": "0.00735em",
                                "lineHeight": 1.17,
                              },
                              "h5": Object {
                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                "fontSize": "1.5rem",
                                "fontWeight": 400,
                                "letterSpacing": "0em",
                                "lineHeight": 1.33,
                              },
                              "h6": Object {
                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                "fontSize": "1.25rem",
                                "fontWeight": 500,
                                "letterSpacing": "0.0075em",
                                "lineHeight": 1.6,
                              },
                              "htmlFontSize": 16,
                              "overline": Object {
                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                "fontSize": "0.75rem",
                                "fontWeight": 400,
                                "letterSpacing": "0.08333em",
                                "lineHeight": 2.66,
                                "textTransform": "uppercase",
                              },
                              "pxToRem": [Function],
                              "round": [Function],
                              "subtitle1": Object {
                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                "fontSize": "1rem",
                                "fontWeight": 400,
                                "letterSpacing": "0.00938em",
                                "lineHeight": 1.75,
                              },
                              "subtitle2": Object {
                                "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                "fontSize": "0.875rem",
                                "fontWeight": 500,
                                "letterSpacing": "0.00714em",
                                "lineHeight": 1.57,
                              },
                            },
                            "zIndex": Object {
                              "appBar": 1100,
                              "drawer": 1200,
                              "mobileStepper": 1000,
                              "modal": 1300,
                              "snackbar": 1400,
                              "tooltip": 1500,
                            },
                          }
                        }
                        transformOrigin={
                          Object {
                            "horizontal": "right",
                            "vertical": "top",
                          }
                        }
                      >
                        <WithStyles(ForwardRef(Popover))
                          PaperProps={
                            Object {
                              "classes": Object {
                                "root": "MuiMenu-paper",
                              },
                            }
                          }
                          anchorEl={null}
                          anchorOrigin={
                            Object {
                              "horizontal": "right",
                              "vertical": "top",
                            }
                          }
                          getContentAnchorEl={[Function]}
                          id="profile-account-menu"
                          keepMounted={true}
                          onClose={[Function]}
                          onEntering={[Function]}
                          open={false}
                          transformOrigin={
                            Object {
                              "horizontal": "right",
                              "vertical": "top",
                            }
                          }
                          transitionDuration="auto"
                        >
                          <ForwardRef(Popover)
                            PaperProps={
                              Object {
                                "classes": Object {
                                  "root": "MuiMenu-paper",
                                },
                              }
                            }
                            anchorEl={null}
                            anchorOrigin={
                              Object {
                                "horizontal": "right",
                                "vertical": "top",
                              }
                            }
                            classes={
                              Object {
                                "paper": "MuiPopover-paper",
                              }
                            }
                            getContentAnchorEl={[Function]}
                            id="profile-account-menu"
                            keepMounted={true}
                            onClose={[Function]}
                            onEntering={[Function]}
                            open={false}
                            transformOrigin={
                              Object {
                                "horizontal": "right",
                                "vertical": "top",
                              }
                            }
                            transitionDuration="auto"
                          >
                            <ForwardRef(Modal)
                              BackdropProps={
                                Object {
                                  "invisible": true,
                                }
                              }
                              id="profile-account-menu"
                              keepMounted={true}
                              onClose={[Function]}
                              open={false}
                            >
                              <ForwardRef(Portal)
                                disablePortal={false}
                                onRendered={[Function]}
                              >
                                <Portal
                                  containerInfo={
                                    <body>
                                      <div
                                        aria-hidden="true"
                                        id="profile-account-menu"
                                        role="presentation"
                                        style="position: fixed; z-index: 1300; right: 0px; bottom: 0px; top: 0px; left: 0px; visibility: hidden;"
                                      >
                                        <div
                                          data-test="sentinelStart"
                                          tabindex="0"
                                        />
                                        <div
                                          class="MuiPaper-root MuiMenu-paper MuiPaper-elevation8 MuiPopover-paper MuiPaper-rounded"
                                          role="document"
                                          style="opacity: 0; transform: scale(0.75, 0.5625); visibility: hidden;"
                                          tabindex="-1"
                                        >
                                          <ul
                                            class="MuiList-root MuiMenu-list MuiList-padding"
                                            role="menu"
                                            tabindex="-1"
                                          >
                                            <li
                                              aria-disabled="false"
                                              class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                                              role="menuitem"
                                              tabindex="-1"
                                            >
                                              Sign Out
                                              <span
                                                class="MuiTouchRipple-root"
                                              />
                                            </li>
                                          </ul>
                                        </div>
                                        <div
                                          data-test="sentinelEnd"
                                          tabindex="0"
                                        />
                                      </div>
                                      <div
                                        aria-hidden="true"
                                        id="profile-account-menu"
                                        role="presentation"
                                        style="position: fixed; z-index: 1300; right: 0px; bottom: 0px; top: 0px; left: 0px; visibility: hidden;"
                                      >
                                        <div
                                          data-test="sentinelStart"
                                          tabindex="0"
                                        />
                                        <div
                                          class="MuiPaper-root MuiMenu-paper MuiPaper-elevation8 MuiPopover-paper MuiPaper-rounded"
                                          role="document"
                                          style="opacity: 0; transform: scale(0.75, 0.5625); visibility: hidden;"
                                          tabindex="-1"
                                        >
                                          <ul
                                            class="MuiList-root MuiMenu-list MuiList-padding"
                                            role="menu"
                                            tabindex="-1"
                                          >
                                            <li
                                              aria-disabled="false"
                                              class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                                              role="menuitem"
                                              tabindex="-1"
                                            >
                                              Sign Out
                                              <span
                                                class="MuiTouchRipple-root"
                                              />
                                            </li>
                                          </ul>
                                        </div>
                                        <div
                                          data-test="sentinelEnd"
                                          tabindex="0"
                                        />
                                      </div>
                                      <div
                                        aria-hidden="true"
                                        id="profile-account-menu"
                                        role="presentation"
                                        style="position: fixed; z-index: 1300; right: 0px; bottom: 0px; top: 0px; left: 0px; visibility: hidden;"
                                      >
                                        <div
                                          data-test="sentinelStart"
                                          tabindex="0"
                                        />
                                        <div
                                          class="MuiPaper-root MuiMenu-paper MuiPaper-elevation8 MuiPopover-paper MuiPaper-rounded"
                                          role="document"
                                          style="opacity: 0; transform: scale(0.75, 0.5625); visibility: hidden;"
                                          tabindex="-1"
                                        >
                                          <ul
                                            class="MuiList-root MuiMenu-list MuiList-padding"
                                            role="menu"
                                            tabindex="-1"
                                          >
                                            <li
                                              aria-disabled="false"
                                              class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                                              role="menuitem"
                                              tabindex="-1"
                                            >
                                              Sign Out
                                              <span
                                                class="MuiTouchRipple-root"
                                              />
                                            </li>
                                          </ul>
                                        </div>
                                        <div
                                          data-test="sentinelEnd"
                                          tabindex="0"
                                        />
                                      </div>
                                      <div
                                        aria-hidden="true"
                                        id="profile-account-menu"
                                        role="presentation"
                                        style="position: fixed; z-index: 1300; right: 0px; bottom: 0px; top: 0px; left: 0px; visibility: hidden;"
                                      >
                                        <div
                                          data-test="sentinelStart"
                                          tabindex="0"
                                        />
                                        <div
                                          class="MuiPaper-root MuiMenu-paper MuiPaper-elevation8 MuiPopover-paper MuiPaper-rounded"
                                          role="document"
                                          style="opacity: 0; transform: scale(0.75, 0.5625); visibility: hidden;"
                                          tabindex="-1"
                                        >
                                          <ul
                                            class="MuiList-root MuiMenu-list MuiList-padding"
                                            role="menu"
                                            tabindex="-1"
                                          >
                                            <li
                                              aria-disabled="false"
                                              class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                                              role="menuitem"
                                              tabindex="-1"
                                            >
                                              Sign Out
                                              <span
                                                class="MuiTouchRipple-root"
                                              />
                                            </li>
                                          </ul>
                                        </div>
                                        <div
                                          data-test="sentinelEnd"
                                          tabindex="0"
                                        />
                                      </div>
                                    </body>
                                  }
                                >
                                  <div
                                    id="profile-account-menu"
                                    onKeyDown={[Function]}
                                    role="presentation"
                                    style={
                                      Object {
                                        "bottom": 0,
                                        "left": 0,
                                        "position": "fixed",
                                        "right": 0,
                                        "top": 0,
                                        "visibility": "hidden",
                                        "zIndex": 1300,
                                      }
                                    }
                                  >
                                    <ForwardRef(SimpleBackdrop)
                                      invisible={true}
                                      onClick={[Function]}
                                      open={false}
                                    />
                                    <TrapFocus
                                      disableAutoFocus={false}
                                      disableEnforceFocus={false}
                                      disableRestoreFocus={false}
                                      getDoc={[Function]}
                                      isEnabled={[Function]}
                                      open={false}
                                    >
                                      <div
                                        data-test="sentinelStart"
                                        tabIndex={0}
                                      />
                                      <ForwardRef(Grow)
                                        appear={true}
                                        in={false}
                                        onEnter={[Function]}
                                        onEntering={[Function]}
                                        onExited={[Function]}
                                        role="document"
                                        tabIndex="-1"
                                        timeout="auto"
                                      >
                                        <Transition
                                          addEndListener={[Function]}
                                          appear={true}
                                          enter={true}
                                          exit={true}
                                          in={false}
                                          mountOnEnter={false}
                                          onEnter={[Function]}
                                          onEntered={[Function]}
                                          onEntering={[Function]}
                                          onExit={[Function]}
                                          onExited={[Function]}
                                          onExiting={[Function]}
                                          role="document"
                                          tabIndex="-1"
                                          timeout={null}
                                          unmountOnExit={false}
                                        >
                                          <WithStyles(ForwardRef(Paper))
                                            className="MuiPopover-paper"
                                            classes={
                                              Object {
                                                "root": "MuiMenu-paper",
                                              }
                                            }
                                            elevation={8}
                                            role="document"
                                            style={
                                              Object {
                                                "opacity": 0,
                                                "transform": "scale(0.75, 0.5625)",
                                                "visibility": "hidden",
                                              }
                                            }
                                            tabIndex="-1"
                                          >
                                            <ForwardRef(Paper)
                                              className="MuiPopover-paper"
                                              classes={
                                                Object {
                                                  "elevation0": "MuiPaper-elevation0",
                                                  "elevation1": "MuiPaper-elevation1",
                                                  "elevation10": "MuiPaper-elevation10",
                                                  "elevation11": "MuiPaper-elevation11",
                                                  "elevation12": "MuiPaper-elevation12",
                                                  "elevation13": "MuiPaper-elevation13",
                                                  "elevation14": "MuiPaper-elevation14",
                                                  "elevation15": "MuiPaper-elevation15",
                                                  "elevation16": "MuiPaper-elevation16",
                                                  "elevation17": "MuiPaper-elevation17",
                                                  "elevation18": "MuiPaper-elevation18",
                                                  "elevation19": "MuiPaper-elevation19",
                                                  "elevation2": "MuiPaper-elevation2",
                                                  "elevation20": "MuiPaper-elevation20",
                                                  "elevation21": "MuiPaper-elevation21",
                                                  "elevation22": "MuiPaper-elevation22",
                                                  "elevation23": "MuiPaper-elevation23",
                                                  "elevation24": "MuiPaper-elevation24",
                                                  "elevation3": "MuiPaper-elevation3",
                                                  "elevation4": "MuiPaper-elevation4",
                                                  "elevation5": "MuiPaper-elevation5",
                                                  "elevation6": "MuiPaper-elevation6",
                                                  "elevation7": "MuiPaper-elevation7",
                                                  "elevation8": "MuiPaper-elevation8",
                                                  "elevation9": "MuiPaper-elevation9",
                                                  "root": "MuiPaper-root MuiMenu-paper",
                                                  "rounded": "MuiPaper-rounded",
                                                }
                                              }
                                              elevation={8}
                                              role="document"
                                              style={
                                                Object {
                                                  "opacity": 0,
                                                  "transform": "scale(0.75, 0.5625)",
                                                  "visibility": "hidden",
                                                }
                                              }
                                              tabIndex="-1"
                                            >
                                              <div
                                                className="MuiPaper-root MuiMenu-paper MuiPaper-elevation8 MuiPopover-paper MuiPaper-rounded"
                                                role="document"
                                                style={
                                                  Object {
                                                    "opacity": 0,
                                                    "transform": "scale(0.75, 0.5625)",
                                                    "visibility": "hidden",
                                                  }
                                                }
                                                tabIndex="-1"
                                              >
                                                <ForwardRef(MenuList)
                                                  actions={
                                                    Object {
                                                      "current": Object {
                                                        "adjustStyleForScrollbar": [Function],
                                                      },
                                                    }
                                                  }
                                                  autoFocus={false}
                                                  className="MuiMenu-list"
                                                  onKeyDown={[Function]}
                                                >
                                                  <WithStyles(ForwardRef(List))
                                                    className="MuiMenu-list"
                                                    onKeyDown={[Function]}
                                                    role="menu"
                                                    tabIndex={-1}
                                                  >
                                                    <ForwardRef(List)
                                                      className="MuiMenu-list"
                                                      classes={
                                                        Object {
                                                          "dense": "MuiList-dense",
                                                          "padding": "MuiList-padding",
                                                          "root": "MuiList-root",
                                                          "subheader": "MuiList-subheader",
                                                        }
                                                      }
                                                      onKeyDown={[Function]}
                                                      role="menu"
                                                      tabIndex={-1}
                                                    >
                                                      <ul
                                                        className="MuiList-root MuiMenu-list MuiList-padding"
                                                        onKeyDown={[Function]}
                                                        role="menu"
                                                        tabIndex={-1}
                                                      >
                                                        <WithStyles(ForwardRef(MenuItem))
                                                          key=".0"
                                                          onClick={[Function]}
                                                        >
                                                          <ForwardRef(MenuItem)
                                                            classes={
                                                              Object {
                                                                "dense": "MuiMenuItem-dense",
                                                                "gutters": "MuiMenuItem-gutters",
                                                                "root": "MuiMenuItem-root",
                                                                "selected": "Mui-selected",
                                                              }
                                                            }
                                                            onClick={[Function]}
                                                          >
                                                            <WithStyles(ForwardRef(ListItem))
                                                              button={true}
                                                              className="MuiMenuItem-root MuiMenuItem-gutters"
                                                              classes={
                                                                Object {
                                                                  "dense": "MuiMenuItem-dense",
                                                                }
                                                              }
                                                              component="li"
                                                              disableGutters={false}
                                                              onClick={[Function]}
                                                              role="menuitem"
                                                              tabIndex={-1}
                                                            >
                                                              <ForwardRef(ListItem)
                                                                button={true}
                                                                className="MuiMenuItem-root MuiMenuItem-gutters"
                                                                classes={
                                                                  Object {
                                                                    "alignItemsFlexStart": "MuiListItem-alignItemsFlexStart",
                                                                    "button": "MuiListItem-button",
                                                                    "container": "MuiListItem-container",
                                                                    "dense": "MuiListItem-dense MuiMenuItem-dense",
                                                                    "disabled": "Mui-disabled",
                                                                    "divider": "MuiListItem-divider",
                                                                    "focusVisible": "Mui-focusVisible",
                                                                    "gutters": "MuiListItem-gutters",
                                                                    "root": "MuiListItem-root",
                                                                    "secondaryAction": "MuiListItem-secondaryAction",
                                                                    "selected": "Mui-selected",
                                                                  }
                                                                }
                                                                component="li"
                                                                disableGutters={false}
                                                                onClick={[Function]}
                                                                role="menuitem"
                                                                tabIndex={-1}
                                                              >
                                                                <WithStyles(ForwardRef(ButtonBase))
                                                                  className="MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                                                                  component="li"
                                                                  disabled={false}
                                                                  focusVisibleClassName="Mui-focusVisible"
                                                                  onClick={[Function]}
                                                                  role="menuitem"
                                                                  tabIndex={-1}
                                                                >
                                                                  <ForwardRef(ButtonBase)
                                                                    className="MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                                                                    classes={
                                                                      Object {
                                                                        "disabled": "Mui-disabled",
                                                                        "focusVisible": "Mui-focusVisible",
                                                                        "root": "MuiButtonBase-root",
                                                                      }
                                                                    }
                                                                    component="li"
                                                                    disabled={false}
                                                                    focusVisibleClassName="Mui-focusVisible"
                                                                    onClick={[Function]}
                                                                    role="menuitem"
                                                                    tabIndex={-1}
                                                                  >
                                                                    <li
                                                                      aria-disabled={false}
                                                                      className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
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
                                                                      role="menuitem"
                                                                      tabIndex={-1}
                                                                    >
                                                                      Sign Out
                                                                      <NoSsr>
                                                                        <WithStyles(undefined)
                                                                          center={false}
                                                                        >
                                                                          <ForwardRef(TouchRipple)
                                                                            center={false}
                                                                            classes={
                                                                              Object {
                                                                                "child": "MuiTouchRipple-child",
                                                                                "childLeaving": "MuiTouchRipple-childLeaving",
                                                                                "childPulsate": "MuiTouchRipple-childPulsate",
                                                                                "ripple": "MuiTouchRipple-ripple",
                                                                                "ripplePulsate": "MuiTouchRipple-ripplePulsate",
                                                                                "rippleVisible": "MuiTouchRipple-rippleVisible",
                                                                                "root": "MuiTouchRipple-root",
                                                                              }
                                                                            }
                                                                          >
                                                                            <span
                                                                              className="MuiTouchRipple-root"
                                                                            >
                                                                              <TransitionGroup
                                                                                childFactory={[Function]}
                                                                                component={null}
                                                                                exit={true}
                                                                              />
                                                                            </span>
                                                                          </ForwardRef(TouchRipple)>
                                                                        </WithStyles(undefined)>
                                                                      </NoSsr>
                                                                    </li>
                                                                  </ForwardRef(ButtonBase)>
                                                                </WithStyles(ForwardRef(ButtonBase))>
                                                              </ForwardRef(ListItem)>
                                                            </WithStyles(ForwardRef(ListItem))>
                                                          </ForwardRef(MenuItem)>
                                                        </WithStyles(ForwardRef(MenuItem))>
                                                      </ul>
                                                    </ForwardRef(List)>
                                                  </WithStyles(ForwardRef(List))>
                                                </ForwardRef(MenuList)>
                                              </div>
                                            </ForwardRef(Paper)>
                                          </WithStyles(ForwardRef(Paper))>
                                        </Transition>
                                      </ForwardRef(Grow)>
                                      <div
                                        data-test="sentinelEnd"
                                        tabIndex={0}
                                      />
                                    </TrapFocus>
                                  </div>
                                </Portal>
                              </ForwardRef(Portal)>
                            </ForwardRef(Modal)>
                          </ForwardRef(Popover)>
                        </WithStyles(ForwardRef(Popover))>
                      </ForwardRef(Menu)>
                    </WithStyles(ForwardRef(Menu))>
                  </div>
                </HeaderAppBar>
                <section
                  className="dashboard__cont"
                >
                  <WithStyles(ForwardRef(Container))
                    maxWidth="lg"
                  >
                    <ForwardRef(Container)
                      classes={
                        Object {
                          "fixed": "MuiContainer-fixed",
                          "maxWidthLg": "MuiContainer-maxWidthLg",
                          "maxWidthMd": "MuiContainer-maxWidthMd",
                          "maxWidthSm": "MuiContainer-maxWidthSm",
                          "maxWidthXl": "MuiContainer-maxWidthXl",
                          "maxWidthXs": "MuiContainer-maxWidthXs",
                          "root": "MuiContainer-root",
                        }
                      }
                      maxWidth="lg"
                    >
                      <div
                        className="MuiContainer-root MuiContainer-maxWidthLg"
                      >
                        <WithStyles(ForwardRef(Grid))
                          container={true}
                          justify="center"
                          spacing={3}
                        >
                          <ForwardRef(Grid)
                            classes={
                              Object {
                                "align-content-xs-center": "MuiGrid-align-content-xs-center",
                                "align-content-xs-flex-end": "MuiGrid-align-content-xs-flex-end",
                                "align-content-xs-flex-start": "MuiGrid-align-content-xs-flex-start",
                                "align-content-xs-space-around": "MuiGrid-align-content-xs-space-around",
                                "align-content-xs-space-between": "MuiGrid-align-content-xs-space-between",
                                "align-items-xs-baseline": "MuiGrid-align-items-xs-baseline",
                                "align-items-xs-center": "MuiGrid-align-items-xs-center",
                                "align-items-xs-flex-end": "MuiGrid-align-items-xs-flex-end",
                                "align-items-xs-flex-start": "MuiGrid-align-items-xs-flex-start",
                                "container": "MuiGrid-container",
                                "direction-xs-column": "MuiGrid-direction-xs-column",
                                "direction-xs-column-reverse": "MuiGrid-direction-xs-column-reverse",
                                "direction-xs-row-reverse": "MuiGrid-direction-xs-row-reverse",
                                "grid-lg-1": "MuiGrid-grid-lg-1",
                                "grid-lg-10": "MuiGrid-grid-lg-10",
                                "grid-lg-11": "MuiGrid-grid-lg-11",
                                "grid-lg-12": "MuiGrid-grid-lg-12",
                                "grid-lg-2": "MuiGrid-grid-lg-2",
                                "grid-lg-3": "MuiGrid-grid-lg-3",
                                "grid-lg-4": "MuiGrid-grid-lg-4",
                                "grid-lg-5": "MuiGrid-grid-lg-5",
                                "grid-lg-6": "MuiGrid-grid-lg-6",
                                "grid-lg-7": "MuiGrid-grid-lg-7",
                                "grid-lg-8": "MuiGrid-grid-lg-8",
                                "grid-lg-9": "MuiGrid-grid-lg-9",
                                "grid-lg-auto": "MuiGrid-grid-lg-auto",
                                "grid-lg-true": "MuiGrid-grid-lg-true",
                                "grid-md-1": "MuiGrid-grid-md-1",
                                "grid-md-10": "MuiGrid-grid-md-10",
                                "grid-md-11": "MuiGrid-grid-md-11",
                                "grid-md-12": "MuiGrid-grid-md-12",
                                "grid-md-2": "MuiGrid-grid-md-2",
                                "grid-md-3": "MuiGrid-grid-md-3",
                                "grid-md-4": "MuiGrid-grid-md-4",
                                "grid-md-5": "MuiGrid-grid-md-5",
                                "grid-md-6": "MuiGrid-grid-md-6",
                                "grid-md-7": "MuiGrid-grid-md-7",
                                "grid-md-8": "MuiGrid-grid-md-8",
                                "grid-md-9": "MuiGrid-grid-md-9",
                                "grid-md-auto": "MuiGrid-grid-md-auto",
                                "grid-md-true": "MuiGrid-grid-md-true",
                                "grid-sm-1": "MuiGrid-grid-sm-1",
                                "grid-sm-10": "MuiGrid-grid-sm-10",
                                "grid-sm-11": "MuiGrid-grid-sm-11",
                                "grid-sm-12": "MuiGrid-grid-sm-12",
                                "grid-sm-2": "MuiGrid-grid-sm-2",
                                "grid-sm-3": "MuiGrid-grid-sm-3",
                                "grid-sm-4": "MuiGrid-grid-sm-4",
                                "grid-sm-5": "MuiGrid-grid-sm-5",
                                "grid-sm-6": "MuiGrid-grid-sm-6",
                                "grid-sm-7": "MuiGrid-grid-sm-7",
                                "grid-sm-8": "MuiGrid-grid-sm-8",
                                "grid-sm-9": "MuiGrid-grid-sm-9",
                                "grid-sm-auto": "MuiGrid-grid-sm-auto",
                                "grid-sm-true": "MuiGrid-grid-sm-true",
                                "grid-xl-1": "MuiGrid-grid-xl-1",
                                "grid-xl-10": "MuiGrid-grid-xl-10",
                                "grid-xl-11": "MuiGrid-grid-xl-11",
                                "grid-xl-12": "MuiGrid-grid-xl-12",
                                "grid-xl-2": "MuiGrid-grid-xl-2",
                                "grid-xl-3": "MuiGrid-grid-xl-3",
                                "grid-xl-4": "MuiGrid-grid-xl-4",
                                "grid-xl-5": "MuiGrid-grid-xl-5",
                                "grid-xl-6": "MuiGrid-grid-xl-6",
                                "grid-xl-7": "MuiGrid-grid-xl-7",
                                "grid-xl-8": "MuiGrid-grid-xl-8",
                                "grid-xl-9": "MuiGrid-grid-xl-9",
                                "grid-xl-auto": "MuiGrid-grid-xl-auto",
                                "grid-xl-true": "MuiGrid-grid-xl-true",
                                "grid-xs-1": "MuiGrid-grid-xs-1",
                                "grid-xs-10": "MuiGrid-grid-xs-10",
                                "grid-xs-11": "MuiGrid-grid-xs-11",
                                "grid-xs-12": "MuiGrid-grid-xs-12",
                                "grid-xs-2": "MuiGrid-grid-xs-2",
                                "grid-xs-3": "MuiGrid-grid-xs-3",
                                "grid-xs-4": "MuiGrid-grid-xs-4",
                                "grid-xs-5": "MuiGrid-grid-xs-5",
                                "grid-xs-6": "MuiGrid-grid-xs-6",
                                "grid-xs-7": "MuiGrid-grid-xs-7",
                                "grid-xs-8": "MuiGrid-grid-xs-8",
                                "grid-xs-9": "MuiGrid-grid-xs-9",
                                "grid-xs-auto": "MuiGrid-grid-xs-auto",
                                "grid-xs-true": "MuiGrid-grid-xs-true",
                                "item": "MuiGrid-item",
                                "justify-xs-center": "MuiGrid-justify-xs-center",
                                "justify-xs-flex-end": "MuiGrid-justify-xs-flex-end",
                                "justify-xs-space-around": "MuiGrid-justify-xs-space-around",
                                "justify-xs-space-between": "MuiGrid-justify-xs-space-between",
                                "justify-xs-space-evenly": "MuiGrid-justify-xs-space-evenly",
                                "root": "MuiGrid-root",
                                "spacing-xs-1": "MuiGrid-spacing-xs-1",
                                "spacing-xs-10": "MuiGrid-spacing-xs-10",
                                "spacing-xs-2": "MuiGrid-spacing-xs-2",
                                "spacing-xs-3": "MuiGrid-spacing-xs-3",
                                "spacing-xs-4": "MuiGrid-spacing-xs-4",
                                "spacing-xs-5": "MuiGrid-spacing-xs-5",
                                "spacing-xs-6": "MuiGrid-spacing-xs-6",
                                "spacing-xs-7": "MuiGrid-spacing-xs-7",
                                "spacing-xs-8": "MuiGrid-spacing-xs-8",
                                "spacing-xs-9": "MuiGrid-spacing-xs-9",
                                "wrap-xs-nowrap": "MuiGrid-wrap-xs-nowrap",
                                "wrap-xs-wrap-reverse": "MuiGrid-wrap-xs-wrap-reverse",
                                "zeroMinWidth": "MuiGrid-zeroMinWidth",
                              }
                            }
                            container={true}
                            justify="center"
                            spacing={3}
                          >
                            <div
                              className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 MuiGrid-justify-xs-center"
                            />
                          </ForwardRef(Grid)>
                        </WithStyles(ForwardRef(Grid))>
                      </div>
                    </ForwardRef(Container)>
                  </WithStyles(ForwardRef(Container))>
                </section>
                <NotificationBar
                  dismissAfter={5000}
                  msg=""
                  onDimiss={[Function]}
                  showNotification={false}
                  variant=""
                >
                  <div>
                    <WithStyles(ForwardRef(Snackbar))
                      anchorOrigin={
                        Object {
                          "horizontal": "center",
                          "vertical": "bottom",
                        }
                      }
                      autoHideDuration={5000}
                      onClose={[Function]}
                      open={false}
                    >
                      <ForwardRef(Snackbar)
                        anchorOrigin={
                          Object {
                            "horizontal": "center",
                            "vertical": "bottom",
                          }
                        }
                        autoHideDuration={5000}
                        classes={
                          Object {
                            "anchorOriginBottomCenter": "MuiSnackbar-anchorOriginBottomCenter",
                            "anchorOriginBottomLeft": "MuiSnackbar-anchorOriginBottomLeft",
                            "anchorOriginBottomRight": "MuiSnackbar-anchorOriginBottomRight",
                            "anchorOriginTopCenter": "MuiSnackbar-anchorOriginTopCenter",
                            "anchorOriginTopLeft": "MuiSnackbar-anchorOriginTopLeft",
                            "anchorOriginTopRight": "MuiSnackbar-anchorOriginTopRight",
                            "root": "MuiSnackbar-root",
                          }
                        }
                        onClose={[Function]}
                        open={false}
                      />
                    </WithStyles(ForwardRef(Snackbar))>
                  </div>
                </NotificationBar>
              </div>
            </Dashboard>
      `);
});

it("Dashboard renders correctly - Build drone stations on state change", () => {
  const wrapper = mount(<Dashboard></Dashboard>);
  const dronesStationCount = 3;
  const { quads: drones } = allDrones;
  const allStations = UtilityHelper.divideDronesAcrossStations(
    drones,
    dronesStationCount
  );

  const stationId = 0;
  const selectedDrone = allStations[stationId][0];

  wrapper
    .instance()
    .setState({ ...wrapper.instance().state, stations: { ...allStations } }); // initialise the stations with drones

  wrapper.instance()._currentUser = {
    emailId: "xyz@gmail.com",
    firstName: "Manoj",
    lastName: "Lakshman",
    phoneNumber: "912",
    isBanned: false
  };

  //Trigger state change on timer to re-draw UI
  wrapper.instance().setState({
    ...wrapper.instance().state,
    stations: { ...allStations },
    timerValue: "03 : 06 : 09"
  });

  expect(EnzymeToJson(wrapper)).toMatchInlineSnapshot(`
        <Dashboard>
          <div
            className="dashboard"
          >
            <HeaderAppBar
              countDownValue={0}
              isUserBanned={false}
              loggedInUser=", "
              onDroneReturn={[Function]}
            >
              <div
                className="header-app-bar"
              >
                <WithStyles(ForwardRef(AppBar))
                  position="static"
                >
                  <ForwardRef(AppBar)
                    classes={
                      Object {
                        "colorDefault": "MuiAppBar-colorDefault",
                        "colorPrimary": "MuiAppBar-colorPrimary",
                        "colorSecondary": "MuiAppBar-colorSecondary",
                        "positionAbsolute": "MuiAppBar-positionAbsolute",
                        "positionFixed": "MuiAppBar-positionFixed",
                        "positionRelative": "MuiAppBar-positionRelative",
                        "positionStatic": "MuiAppBar-positionStatic",
                        "positionSticky": "MuiAppBar-positionSticky",
                        "root": "MuiAppBar-root",
                      }
                    }
                    position="static"
                  >
                    <WithStyles(ForwardRef(Paper))
                      className="MuiAppBar-root MuiAppBar-positionStatic MuiAppBar-colorPrimary"
                      component="header"
                      elevation={4}
                      square={true}
                    >
                      <ForwardRef(Paper)
                        className="MuiAppBar-root MuiAppBar-positionStatic MuiAppBar-colorPrimary"
                        classes={
                          Object {
                            "elevation0": "MuiPaper-elevation0",
                            "elevation1": "MuiPaper-elevation1",
                            "elevation10": "MuiPaper-elevation10",
                            "elevation11": "MuiPaper-elevation11",
                            "elevation12": "MuiPaper-elevation12",
                            "elevation13": "MuiPaper-elevation13",
                            "elevation14": "MuiPaper-elevation14",
                            "elevation15": "MuiPaper-elevation15",
                            "elevation16": "MuiPaper-elevation16",
                            "elevation17": "MuiPaper-elevation17",
                            "elevation18": "MuiPaper-elevation18",
                            "elevation19": "MuiPaper-elevation19",
                            "elevation2": "MuiPaper-elevation2",
                            "elevation20": "MuiPaper-elevation20",
                            "elevation21": "MuiPaper-elevation21",
                            "elevation22": "MuiPaper-elevation22",
                            "elevation23": "MuiPaper-elevation23",
                            "elevation24": "MuiPaper-elevation24",
                            "elevation3": "MuiPaper-elevation3",
                            "elevation4": "MuiPaper-elevation4",
                            "elevation5": "MuiPaper-elevation5",
                            "elevation6": "MuiPaper-elevation6",
                            "elevation7": "MuiPaper-elevation7",
                            "elevation8": "MuiPaper-elevation8",
                            "elevation9": "MuiPaper-elevation9",
                            "root": "MuiPaper-root",
                            "rounded": "MuiPaper-rounded",
                          }
                        }
                        component="header"
                        elevation={4}
                        square={true}
                      >
                        <header
                          className="MuiPaper-root MuiPaper-elevation4 MuiAppBar-root MuiAppBar-positionStatic MuiAppBar-colorPrimary"
                        >
                          <WithStyles(ForwardRef(Toolbar))>
                            <ForwardRef(Toolbar)
                              classes={
                                Object {
                                  "dense": "MuiToolbar-dense",
                                  "gutters": "MuiToolbar-gutters",
                                  "regular": "MuiToolbar-regular",
                                  "root": "MuiToolbar-root",
                                }
                              }
                            >
                              <div
                                className="MuiToolbar-root MuiToolbar-regular MuiToolbar-gutters"
                              >
                                <WithStyles(ForwardRef(Typography))
                                  className="makeStyles-title-2"
                                  noWrap={true}
                                  variant="h6"
                                >
                                  <ForwardRef(Typography)
                                    className="makeStyles-title-2"
                                    classes={
                                      Object {
                                        "alignCenter": "MuiTypography-alignCenter",
                                        "alignJustify": "MuiTypography-alignJustify",
                                        "alignLeft": "MuiTypography-alignLeft",
                                        "alignRight": "MuiTypography-alignRight",
                                        "body1": "MuiTypography-body1",
                                        "body2": "MuiTypography-body2",
                                        "button": "MuiTypography-button",
                                        "caption": "MuiTypography-caption",
                                        "colorError": "MuiTypography-colorError",
                                        "colorInherit": "MuiTypography-colorInherit",
                                        "colorPrimary": "MuiTypography-colorPrimary",
                                        "colorSecondary": "MuiTypography-colorSecondary",
                                        "colorTextPrimary": "MuiTypography-colorTextPrimary",
                                        "colorTextSecondary": "MuiTypography-colorTextSecondary",
                                        "displayBlock": "MuiTypography-displayBlock",
                                        "displayInline": "MuiTypography-displayInline",
                                        "gutterBottom": "MuiTypography-gutterBottom",
                                        "h1": "MuiTypography-h1",
                                        "h2": "MuiTypography-h2",
                                        "h3": "MuiTypography-h3",
                                        "h4": "MuiTypography-h4",
                                        "h5": "MuiTypography-h5",
                                        "h6": "MuiTypography-h6",
                                        "noWrap": "MuiTypography-noWrap",
                                        "overline": "MuiTypography-overline",
                                        "paragraph": "MuiTypography-paragraph",
                                        "root": "MuiTypography-root",
                                        "srOnly": "MuiTypography-srOnly",
                                        "subtitle1": "MuiTypography-subtitle1",
                                        "subtitle2": "MuiTypography-subtitle2",
                                      }
                                    }
                                    noWrap={true}
                                    theme={
                                      Object {
                                        "breakpoints": Object {
                                          "between": [Function],
                                          "down": [Function],
                                          "keys": Array [
                                            "xs",
                                            "sm",
                                            "md",
                                            "lg",
                                            "xl",
                                          ],
                                          "only": [Function],
                                          "up": [Function],
                                          "values": Object {
                                            "lg": 1280,
                                            "md": 960,
                                            "sm": 600,
                                            "xl": 1920,
                                            "xs": 0,
                                          },
                                          "width": [Function],
                                        },
                                        "direction": "ltr",
                                        "mixins": Object {
                                          "gutters": [Function],
                                          "toolbar": Object {
                                            "@media (min-width:0px) and (orientation: landscape)": Object {
                                              "minHeight": 48,
                                            },
                                            "@media (min-width:600px)": Object {
                                              "minHeight": 64,
                                            },
                                            "minHeight": 56,
                                          },
                                        },
                                        "overrides": Object {},
                                        "palette": Object {
                                          "action": Object {
                                            "active": "rgba(0, 0, 0, 0.54)",
                                            "disabled": "rgba(0, 0, 0, 0.26)",
                                            "disabledBackground": "rgba(0, 0, 0, 0.12)",
                                            "hover": "rgba(0, 0, 0, 0.08)",
                                            "hoverOpacity": 0.08,
                                            "selected": "rgba(0, 0, 0, 0.14)",
                                          },
                                          "augmentColor": [Function],
                                          "background": Object {
                                            "default": "#fafafa",
                                            "paper": "#fff",
                                          },
                                          "common": Object {
                                            "black": "#000",
                                            "white": "#fff",
                                          },
                                          "contrastThreshold": 3,
                                          "divider": "rgba(0, 0, 0, 0.12)",
                                          "error": Object {
                                            "contrastText": "#fff",
                                            "dark": "#d32f2f",
                                            "light": "#e57373",
                                            "main": "#f44336",
                                          },
                                          "getContrastText": [Function],
                                          "grey": Object {
                                            "100": "#f5f5f5",
                                            "200": "#eeeeee",
                                            "300": "#e0e0e0",
                                            "400": "#bdbdbd",
                                            "50": "#fafafa",
                                            "500": "#9e9e9e",
                                            "600": "#757575",
                                            "700": "#616161",
                                            "800": "#424242",
                                            "900": "#212121",
                                            "A100": "#d5d5d5",
                                            "A200": "#aaaaaa",
                                            "A400": "#303030",
                                            "A700": "#616161",
                                          },
                                          "primary": Object {
                                            "contrastText": "#fff",
                                            "dark": "#303f9f",
                                            "light": "#7986cb",
                                            "main": "#3f51b5",
                                          },
                                          "secondary": Object {
                                            "contrastText": "#fff",
                                            "dark": "#c51162",
                                            "light": "#ff4081",
                                            "main": "#f50057",
                                          },
                                          "text": Object {
                                            "disabled": "rgba(0, 0, 0, 0.38)",
                                            "hint": "rgba(0, 0, 0, 0.38)",
                                            "primary": "rgba(0, 0, 0, 0.87)",
                                            "secondary": "rgba(0, 0, 0, 0.54)",
                                          },
                                          "tonalOffset": 0.2,
                                          "type": "light",
                                        },
                                        "props": Object {},
                                        "shadows": Array [
                                          "none",
                                          "0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)",
                                          "0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)",
                                          "0px 1px 8px 0px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 3px 3px -2px rgba(0,0,0,0.12)",
                                          "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
                                          "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
                                          "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
                                          "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
                                          "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
                                          "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
                                          "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
                                          "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
                                          "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
                                          "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
                                          "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
                                          "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
                                          "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
                                          "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
                                          "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
                                          "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
                                          "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
                                          "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
                                          "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
                                          "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
                                          "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
                                        ],
                                        "shape": Object {
                                          "borderRadius": 4,
                                        },
                                        "spacing": [Function],
                                        "transitions": Object {
                                          "create": [Function],
                                          "duration": Object {
                                            "complex": 375,
                                            "enteringScreen": 225,
                                            "leavingScreen": 195,
                                            "short": 250,
                                            "shorter": 200,
                                            "shortest": 150,
                                            "standard": 300,
                                          },
                                          "easing": Object {
                                            "easeIn": "cubic-bezier(0.4, 0, 1, 1)",
                                            "easeInOut": "cubic-bezier(0.4, 0, 0.2, 1)",
                                            "easeOut": "cubic-bezier(0.0, 0, 0.2, 1)",
                                            "sharp": "cubic-bezier(0.4, 0, 0.6, 1)",
                                          },
                                          "getAutoHeightDuration": [Function],
                                        },
                                        "typography": Object {
                                          "body1": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "1rem",
                                            "fontWeight": 400,
                                            "letterSpacing": "0.00938em",
                                            "lineHeight": 1.5,
                                          },
                                          "body2": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "0.875rem",
                                            "fontWeight": 400,
                                            "letterSpacing": "0.01071em",
                                            "lineHeight": 1.43,
                                          },
                                          "button": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "0.875rem",
                                            "fontWeight": 500,
                                            "letterSpacing": "0.02857em",
                                            "lineHeight": 1.75,
                                            "textTransform": "uppercase",
                                          },
                                          "caption": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "0.75rem",
                                            "fontWeight": 400,
                                            "letterSpacing": "0.03333em",
                                            "lineHeight": 1.66,
                                          },
                                          "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                          "fontSize": 14,
                                          "fontWeightBold": 700,
                                          "fontWeightLight": 300,
                                          "fontWeightMedium": 500,
                                          "fontWeightRegular": 400,
                                          "h1": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "6rem",
                                            "fontWeight": 300,
                                            "letterSpacing": "-0.01562em",
                                            "lineHeight": 1,
                                          },
                                          "h2": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "3.75rem",
                                            "fontWeight": 300,
                                            "letterSpacing": "-0.00833em",
                                            "lineHeight": 1,
                                          },
                                          "h3": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "3rem",
                                            "fontWeight": 400,
                                            "letterSpacing": "0em",
                                            "lineHeight": 1.04,
                                          },
                                          "h4": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "2.125rem",
                                            "fontWeight": 400,
                                            "letterSpacing": "0.00735em",
                                            "lineHeight": 1.17,
                                          },
                                          "h5": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "1.5rem",
                                            "fontWeight": 400,
                                            "letterSpacing": "0em",
                                            "lineHeight": 1.33,
                                          },
                                          "h6": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "1.25rem",
                                            "fontWeight": 500,
                                            "letterSpacing": "0.0075em",
                                            "lineHeight": 1.6,
                                          },
                                          "htmlFontSize": 16,
                                          "overline": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "0.75rem",
                                            "fontWeight": 400,
                                            "letterSpacing": "0.08333em",
                                            "lineHeight": 2.66,
                                            "textTransform": "uppercase",
                                          },
                                          "pxToRem": [Function],
                                          "round": [Function],
                                          "subtitle1": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "1rem",
                                            "fontWeight": 400,
                                            "letterSpacing": "0.00938em",
                                            "lineHeight": 1.75,
                                          },
                                          "subtitle2": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "0.875rem",
                                            "fontWeight": 500,
                                            "letterSpacing": "0.00714em",
                                            "lineHeight": 1.57,
                                          },
                                        },
                                        "zIndex": Object {
                                          "appBar": 1100,
                                          "drawer": 1200,
                                          "mobileStepper": 1000,
                                          "modal": 1300,
                                          "snackbar": 1400,
                                          "tooltip": 1500,
                                        },
                                      }
                                    }
                                    variant="h6"
                                  >
                                    <h6
                                      className="MuiTypography-root makeStyles-title-2 MuiTypography-h6 MuiTypography-noWrap"
                                    >
                                      Drone For You
                                    </h6>
                                  </ForwardRef(Typography)>
                                </WithStyles(ForwardRef(Typography))>
                                <div
                                  className="makeStyles-grow-1"
                                />
                                <WithStyles(ForwardRef(Typography))
                                  noWrap={true}
                                >
                                  <ForwardRef(Typography)
                                    classes={
                                      Object {
                                        "alignCenter": "MuiTypography-alignCenter",
                                        "alignJustify": "MuiTypography-alignJustify",
                                        "alignLeft": "MuiTypography-alignLeft",
                                        "alignRight": "MuiTypography-alignRight",
                                        "body1": "MuiTypography-body1",
                                        "body2": "MuiTypography-body2",
                                        "button": "MuiTypography-button",
                                        "caption": "MuiTypography-caption",
                                        "colorError": "MuiTypography-colorError",
                                        "colorInherit": "MuiTypography-colorInherit",
                                        "colorPrimary": "MuiTypography-colorPrimary",
                                        "colorSecondary": "MuiTypography-colorSecondary",
                                        "colorTextPrimary": "MuiTypography-colorTextPrimary",
                                        "colorTextSecondary": "MuiTypography-colorTextSecondary",
                                        "displayBlock": "MuiTypography-displayBlock",
                                        "displayInline": "MuiTypography-displayInline",
                                        "gutterBottom": "MuiTypography-gutterBottom",
                                        "h1": "MuiTypography-h1",
                                        "h2": "MuiTypography-h2",
                                        "h3": "MuiTypography-h3",
                                        "h4": "MuiTypography-h4",
                                        "h5": "MuiTypography-h5",
                                        "h6": "MuiTypography-h6",
                                        "noWrap": "MuiTypography-noWrap",
                                        "overline": "MuiTypography-overline",
                                        "paragraph": "MuiTypography-paragraph",
                                        "root": "MuiTypography-root",
                                        "srOnly": "MuiTypography-srOnly",
                                        "subtitle1": "MuiTypography-subtitle1",
                                        "subtitle2": "MuiTypography-subtitle2",
                                      }
                                    }
                                    noWrap={true}
                                    theme={
                                      Object {
                                        "breakpoints": Object {
                                          "between": [Function],
                                          "down": [Function],
                                          "keys": Array [
                                            "xs",
                                            "sm",
                                            "md",
                                            "lg",
                                            "xl",
                                          ],
                                          "only": [Function],
                                          "up": [Function],
                                          "values": Object {
                                            "lg": 1280,
                                            "md": 960,
                                            "sm": 600,
                                            "xl": 1920,
                                            "xs": 0,
                                          },
                                          "width": [Function],
                                        },
                                        "direction": "ltr",
                                        "mixins": Object {
                                          "gutters": [Function],
                                          "toolbar": Object {
                                            "@media (min-width:0px) and (orientation: landscape)": Object {
                                              "minHeight": 48,
                                            },
                                            "@media (min-width:600px)": Object {
                                              "minHeight": 64,
                                            },
                                            "minHeight": 56,
                                          },
                                        },
                                        "overrides": Object {},
                                        "palette": Object {
                                          "action": Object {
                                            "active": "rgba(0, 0, 0, 0.54)",
                                            "disabled": "rgba(0, 0, 0, 0.26)",
                                            "disabledBackground": "rgba(0, 0, 0, 0.12)",
                                            "hover": "rgba(0, 0, 0, 0.08)",
                                            "hoverOpacity": 0.08,
                                            "selected": "rgba(0, 0, 0, 0.14)",
                                          },
                                          "augmentColor": [Function],
                                          "background": Object {
                                            "default": "#fafafa",
                                            "paper": "#fff",
                                          },
                                          "common": Object {
                                            "black": "#000",
                                            "white": "#fff",
                                          },
                                          "contrastThreshold": 3,
                                          "divider": "rgba(0, 0, 0, 0.12)",
                                          "error": Object {
                                            "contrastText": "#fff",
                                            "dark": "#d32f2f",
                                            "light": "#e57373",
                                            "main": "#f44336",
                                          },
                                          "getContrastText": [Function],
                                          "grey": Object {
                                            "100": "#f5f5f5",
                                            "200": "#eeeeee",
                                            "300": "#e0e0e0",
                                            "400": "#bdbdbd",
                                            "50": "#fafafa",
                                            "500": "#9e9e9e",
                                            "600": "#757575",
                                            "700": "#616161",
                                            "800": "#424242",
                                            "900": "#212121",
                                            "A100": "#d5d5d5",
                                            "A200": "#aaaaaa",
                                            "A400": "#303030",
                                            "A700": "#616161",
                                          },
                                          "primary": Object {
                                            "contrastText": "#fff",
                                            "dark": "#303f9f",
                                            "light": "#7986cb",
                                            "main": "#3f51b5",
                                          },
                                          "secondary": Object {
                                            "contrastText": "#fff",
                                            "dark": "#c51162",
                                            "light": "#ff4081",
                                            "main": "#f50057",
                                          },
                                          "text": Object {
                                            "disabled": "rgba(0, 0, 0, 0.38)",
                                            "hint": "rgba(0, 0, 0, 0.38)",
                                            "primary": "rgba(0, 0, 0, 0.87)",
                                            "secondary": "rgba(0, 0, 0, 0.54)",
                                          },
                                          "tonalOffset": 0.2,
                                          "type": "light",
                                        },
                                        "props": Object {},
                                        "shadows": Array [
                                          "none",
                                          "0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)",
                                          "0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)",
                                          "0px 1px 8px 0px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 3px 3px -2px rgba(0,0,0,0.12)",
                                          "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
                                          "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
                                          "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
                                          "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
                                          "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
                                          "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
                                          "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
                                          "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
                                          "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
                                          "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
                                          "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
                                          "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
                                          "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
                                          "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
                                          "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
                                          "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
                                          "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
                                          "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
                                          "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
                                          "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
                                          "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
                                        ],
                                        "shape": Object {
                                          "borderRadius": 4,
                                        },
                                        "spacing": [Function],
                                        "transitions": Object {
                                          "create": [Function],
                                          "duration": Object {
                                            "complex": 375,
                                            "enteringScreen": 225,
                                            "leavingScreen": 195,
                                            "short": 250,
                                            "shorter": 200,
                                            "shortest": 150,
                                            "standard": 300,
                                          },
                                          "easing": Object {
                                            "easeIn": "cubic-bezier(0.4, 0, 1, 1)",
                                            "easeInOut": "cubic-bezier(0.4, 0, 0.2, 1)",
                                            "easeOut": "cubic-bezier(0.0, 0, 0.2, 1)",
                                            "sharp": "cubic-bezier(0.4, 0, 0.6, 1)",
                                          },
                                          "getAutoHeightDuration": [Function],
                                        },
                                        "typography": Object {
                                          "body1": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "1rem",
                                            "fontWeight": 400,
                                            "letterSpacing": "0.00938em",
                                            "lineHeight": 1.5,
                                          },
                                          "body2": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "0.875rem",
                                            "fontWeight": 400,
                                            "letterSpacing": "0.01071em",
                                            "lineHeight": 1.43,
                                          },
                                          "button": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "0.875rem",
                                            "fontWeight": 500,
                                            "letterSpacing": "0.02857em",
                                            "lineHeight": 1.75,
                                            "textTransform": "uppercase",
                                          },
                                          "caption": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "0.75rem",
                                            "fontWeight": 400,
                                            "letterSpacing": "0.03333em",
                                            "lineHeight": 1.66,
                                          },
                                          "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                          "fontSize": 14,
                                          "fontWeightBold": 700,
                                          "fontWeightLight": 300,
                                          "fontWeightMedium": 500,
                                          "fontWeightRegular": 400,
                                          "h1": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "6rem",
                                            "fontWeight": 300,
                                            "letterSpacing": "-0.01562em",
                                            "lineHeight": 1,
                                          },
                                          "h2": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "3.75rem",
                                            "fontWeight": 300,
                                            "letterSpacing": "-0.00833em",
                                            "lineHeight": 1,
                                          },
                                          "h3": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "3rem",
                                            "fontWeight": 400,
                                            "letterSpacing": "0em",
                                            "lineHeight": 1.04,
                                          },
                                          "h4": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "2.125rem",
                                            "fontWeight": 400,
                                            "letterSpacing": "0.00735em",
                                            "lineHeight": 1.17,
                                          },
                                          "h5": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "1.5rem",
                                            "fontWeight": 400,
                                            "letterSpacing": "0em",
                                            "lineHeight": 1.33,
                                          },
                                          "h6": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "1.25rem",
                                            "fontWeight": 500,
                                            "letterSpacing": "0.0075em",
                                            "lineHeight": 1.6,
                                          },
                                          "htmlFontSize": 16,
                                          "overline": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "0.75rem",
                                            "fontWeight": 400,
                                            "letterSpacing": "0.08333em",
                                            "lineHeight": 2.66,
                                            "textTransform": "uppercase",
                                          },
                                          "pxToRem": [Function],
                                          "round": [Function],
                                          "subtitle1": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "1rem",
                                            "fontWeight": 400,
                                            "letterSpacing": "0.00938em",
                                            "lineHeight": 1.75,
                                          },
                                          "subtitle2": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "0.875rem",
                                            "fontWeight": 500,
                                            "letterSpacing": "0.00714em",
                                            "lineHeight": 1.57,
                                          },
                                        },
                                        "zIndex": Object {
                                          "appBar": 1100,
                                          "drawer": 1200,
                                          "mobileStepper": 1000,
                                          "modal": 1300,
                                          "snackbar": 1400,
                                          "tooltip": 1500,
                                        },
                                      }
                                    }
                                  >
                                    <p
                                      className="MuiTypography-root MuiTypography-body1 MuiTypography-noWrap"
                                    >
                                       
                                    </p>
                                  </ForwardRef(Typography)>
                                </WithStyles(ForwardRef(Typography))>
                                <div
                                  className="makeStyles-grow-1"
                                />
                                <WithStyles(ForwardRef(Button))
                                  className="margin3"
                                  color="primary"
                                  disabled={true}
                                  onClick={[Function]}
                                  variant="contained"
                                >
                                  <ForwardRef(Button)
                                    className="margin3"
                                    classes={
                                      Object {
                                        "colorInherit": "MuiButton-colorInherit",
                                        "contained": "MuiButton-contained",
                                        "containedPrimary": "MuiButton-containedPrimary",
                                        "containedSecondary": "MuiButton-containedSecondary",
                                        "disabled": "Mui-disabled",
                                        "focusVisible": "Mui-focusVisible",
                                        "fullWidth": "MuiButton-fullWidth",
                                        "label": "MuiButton-label",
                                        "outlined": "MuiButton-outlined",
                                        "outlinedPrimary": "MuiButton-outlinedPrimary",
                                        "outlinedSecondary": "MuiButton-outlinedSecondary",
                                        "root": "MuiButton-root",
                                        "sizeLarge": "MuiButton-sizeLarge",
                                        "sizeSmall": "MuiButton-sizeSmall",
                                        "text": "MuiButton-text",
                                        "textPrimary": "MuiButton-textPrimary",
                                        "textSecondary": "MuiButton-textSecondary",
                                      }
                                    }
                                    color="primary"
                                    disabled={true}
                                    onClick={[Function]}
                                    variant="contained"
                                  >
                                    <WithStyles(ForwardRef(ButtonBase))
                                      className="MuiButton-root margin3 MuiButton-contained MuiButton-containedPrimary Mui-disabled"
                                      component="button"
                                      disabled={true}
                                      focusRipple={true}
                                      focusVisibleClassName="Mui-focusVisible"
                                      onClick={[Function]}
                                      type="button"
                                    >
                                      <ForwardRef(ButtonBase)
                                        className="MuiButton-root margin3 MuiButton-contained MuiButton-containedPrimary Mui-disabled"
                                        classes={
                                          Object {
                                            "disabled": "Mui-disabled",
                                            "focusVisible": "Mui-focusVisible",
                                            "root": "MuiButtonBase-root",
                                          }
                                        }
                                        component="button"
                                        disabled={true}
                                        focusRipple={true}
                                        focusVisibleClassName="Mui-focusVisible"
                                        onClick={[Function]}
                                        type="button"
                                      >
                                        <button
                                          className="MuiButtonBase-root MuiButton-root margin3 MuiButton-contained MuiButton-containedPrimary Mui-disabled Mui-disabled"
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
                                            Return Drone
                                          </span>
                                        </button>
                                      </ForwardRef(ButtonBase)>
                                    </WithStyles(ForwardRef(ButtonBase))>
                                  </ForwardRef(Button)>
                                </WithStyles(ForwardRef(Button))>
                                <div
                                  className="makeStyles-grow-1"
                                />
                                <b>
                                   
                                  , 
                                   
                                </b>
                                <div
                                  className="makeStyles-sectionDesktop-3"
                                >
                                  <WithStyles(ForwardRef(IconButton))
                                    aria-controls="profile-account-menu"
                                    aria-haspopup="true"
                                    aria-label="Account of current user"
                                    color="inherit"
                                    edge="end"
                                    onClick={[Function]}
                                  >
                                    <ForwardRef(IconButton)
                                      aria-controls="profile-account-menu"
                                      aria-haspopup="true"
                                      aria-label="Account of current user"
                                      classes={
                                        Object {
                                          "colorInherit": "MuiIconButton-colorInherit",
                                          "colorPrimary": "MuiIconButton-colorPrimary",
                                          "colorSecondary": "MuiIconButton-colorSecondary",
                                          "disabled": "Mui-disabled",
                                          "edgeEnd": "MuiIconButton-edgeEnd",
                                          "edgeStart": "MuiIconButton-edgeStart",
                                          "label": "MuiIconButton-label",
                                          "root": "MuiIconButton-root",
                                          "sizeSmall": "MuiIconButton-sizeSmall",
                                        }
                                      }
                                      color="inherit"
                                      edge="end"
                                      onClick={[Function]}
                                    >
                                      <WithStyles(ForwardRef(ButtonBase))
                                        aria-controls="profile-account-menu"
                                        aria-haspopup="true"
                                        aria-label="Account of current user"
                                        centerRipple={true}
                                        className="MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-edgeEnd"
                                        disabled={false}
                                        focusRipple={true}
                                        onClick={[Function]}
                                      >
                                        <ForwardRef(ButtonBase)
                                          aria-controls="profile-account-menu"
                                          aria-haspopup="true"
                                          aria-label="Account of current user"
                                          centerRipple={true}
                                          className="MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-edgeEnd"
                                          classes={
                                            Object {
                                              "disabled": "Mui-disabled",
                                              "focusVisible": "Mui-focusVisible",
                                              "root": "MuiButtonBase-root",
                                            }
                                          }
                                          disabled={false}
                                          focusRipple={true}
                                          onClick={[Function]}
                                        >
                                          <button
                                            aria-controls="profile-account-menu"
                                            aria-haspopup="true"
                                            aria-label="Account of current user"
                                            className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-edgeEnd"
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
                                              className="MuiIconButton-label"
                                            >
                                              <ForwardRef>
                                                <WithStyles(ForwardRef(SvgIcon))>
                                                  <ForwardRef(SvgIcon)
                                                    classes={
                                                      Object {
                                                        "colorAction": "MuiSvgIcon-colorAction",
                                                        "colorDisabled": "MuiSvgIcon-colorDisabled",
                                                        "colorError": "MuiSvgIcon-colorError",
                                                        "colorPrimary": "MuiSvgIcon-colorPrimary",
                                                        "colorSecondary": "MuiSvgIcon-colorSecondary",
                                                        "fontSizeInherit": "MuiSvgIcon-fontSizeInherit",
                                                        "fontSizeLarge": "MuiSvgIcon-fontSizeLarge",
                                                        "fontSizeSmall": "MuiSvgIcon-fontSizeSmall",
                                                        "root": "MuiSvgIcon-root",
                                                      }
                                                    }
                                                  >
                                                    <svg
                                                      aria-hidden="true"
                                                      className="MuiSvgIcon-root"
                                                      focusable="false"
                                                      role="presentation"
                                                      viewBox="0 0 24 24"
                                                    >
                                                      <path
                                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
                                                      />
                                                    </svg>
                                                  </ForwardRef(SvgIcon)>
                                                </WithStyles(ForwardRef(SvgIcon))>
                                              </ForwardRef>
                                            </span>
                                            <NoSsr>
                                              <WithStyles(undefined)
                                                center={true}
                                              >
                                                <ForwardRef(TouchRipple)
                                                  center={true}
                                                  classes={
                                                    Object {
                                                      "child": "MuiTouchRipple-child",
                                                      "childLeaving": "MuiTouchRipple-childLeaving",
                                                      "childPulsate": "MuiTouchRipple-childPulsate",
                                                      "ripple": "MuiTouchRipple-ripple",
                                                      "ripplePulsate": "MuiTouchRipple-ripplePulsate",
                                                      "rippleVisible": "MuiTouchRipple-rippleVisible",
                                                      "root": "MuiTouchRipple-root",
                                                    }
                                                  }
                                                >
                                                  <span
                                                    className="MuiTouchRipple-root"
                                                  >
                                                    <TransitionGroup
                                                      childFactory={[Function]}
                                                      component={null}
                                                      exit={true}
                                                    />
                                                  </span>
                                                </ForwardRef(TouchRipple)>
                                              </WithStyles(undefined)>
                                            </NoSsr>
                                          </button>
                                        </ForwardRef(ButtonBase)>
                                      </WithStyles(ForwardRef(ButtonBase))>
                                    </ForwardRef(IconButton)>
                                  </WithStyles(ForwardRef(IconButton))>
                                </div>
                              </div>
                            </ForwardRef(Toolbar)>
                          </WithStyles(ForwardRef(Toolbar))>
                        </header>
                      </ForwardRef(Paper)>
                    </WithStyles(ForwardRef(Paper))>
                  </ForwardRef(AppBar)>
                </WithStyles(ForwardRef(AppBar))>
                <WithStyles(ForwardRef(Menu))
                  anchorEl={null}
                  anchorOrigin={
                    Object {
                      "horizontal": "right",
                      "vertical": "top",
                    }
                  }
                  id="profile-account-menu"
                  keepMounted={true}
                  onClose={[Function]}
                  open={false}
                  transformOrigin={
                    Object {
                      "horizontal": "right",
                      "vertical": "top",
                    }
                  }
                >
                  <ForwardRef(Menu)
                    anchorEl={null}
                    anchorOrigin={
                      Object {
                        "horizontal": "right",
                        "vertical": "top",
                      }
                    }
                    classes={
                      Object {
                        "list": "MuiMenu-list",
                        "paper": "MuiMenu-paper",
                      }
                    }
                    id="profile-account-menu"
                    keepMounted={true}
                    onClose={[Function]}
                    open={false}
                    theme={
                      Object {
                        "breakpoints": Object {
                          "between": [Function],
                          "down": [Function],
                          "keys": Array [
                            "xs",
                            "sm",
                            "md",
                            "lg",
                            "xl",
                          ],
                          "only": [Function],
                          "up": [Function],
                          "values": Object {
                            "lg": 1280,
                            "md": 960,
                            "sm": 600,
                            "xl": 1920,
                            "xs": 0,
                          },
                          "width": [Function],
                        },
                        "direction": "ltr",
                        "mixins": Object {
                          "gutters": [Function],
                          "toolbar": Object {
                            "@media (min-width:0px) and (orientation: landscape)": Object {
                              "minHeight": 48,
                            },
                            "@media (min-width:600px)": Object {
                              "minHeight": 64,
                            },
                            "minHeight": 56,
                          },
                        },
                        "overrides": Object {},
                        "palette": Object {
                          "action": Object {
                            "active": "rgba(0, 0, 0, 0.54)",
                            "disabled": "rgba(0, 0, 0, 0.26)",
                            "disabledBackground": "rgba(0, 0, 0, 0.12)",
                            "hover": "rgba(0, 0, 0, 0.08)",
                            "hoverOpacity": 0.08,
                            "selected": "rgba(0, 0, 0, 0.14)",
                          },
                          "augmentColor": [Function],
                          "background": Object {
                            "default": "#fafafa",
                            "paper": "#fff",
                          },
                          "common": Object {
                            "black": "#000",
                            "white": "#fff",
                          },
                          "contrastThreshold": 3,
                          "divider": "rgba(0, 0, 0, 0.12)",
                          "error": Object {
                            "contrastText": "#fff",
                            "dark": "#d32f2f",
                            "light": "#e57373",
                            "main": "#f44336",
                          },
                          "getContrastText": [Function],
                          "grey": Object {
                            "100": "#f5f5f5",
                            "200": "#eeeeee",
                            "300": "#e0e0e0",
                            "400": "#bdbdbd",
                            "50": "#fafafa",
                            "500": "#9e9e9e",
                            "600": "#757575",
                            "700": "#616161",
                            "800": "#424242",
                            "900": "#212121",
                            "A100": "#d5d5d5",
                            "A200": "#aaaaaa",
                            "A400": "#303030",
                            "A700": "#616161",
                          },
                          "primary": Object {
                            "contrastText": "#fff",
                            "dark": "#303f9f",
                            "light": "#7986cb",
                            "main": "#3f51b5",
                          },
                          "secondary": Object {
                            "contrastText": "#fff",
                            "dark": "#c51162",
                            "light": "#ff4081",
                            "main": "#f50057",
                          },
                          "text": Object {
                            "disabled": "rgba(0, 0, 0, 0.38)",
                            "hint": "rgba(0, 0, 0, 0.38)",
                            "primary": "rgba(0, 0, 0, 0.87)",
                            "secondary": "rgba(0, 0, 0, 0.54)",
                          },
                          "tonalOffset": 0.2,
                          "type": "light",
                        },
                        "props": Object {},
                        "shadows": Array [
                          "none",
                          "0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)",
                          "0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)",
                          "0px 1px 8px 0px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 3px 3px -2px rgba(0,0,0,0.12)",
                          "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
                          "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
                          "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
                          "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
                          "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
                          "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
                          "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
                          "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
                          "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
                          "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
                          "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
                          "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
                          "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
                          "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
                          "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
                          "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
                          "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
                          "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
                          "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
                          "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
                          "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
                        ],
                        "shape": Object {
                          "borderRadius": 4,
                        },
                        "spacing": [Function],
                        "transitions": Object {
                          "create": [Function],
                          "duration": Object {
                            "complex": 375,
                            "enteringScreen": 225,
                            "leavingScreen": 195,
                            "short": 250,
                            "shorter": 200,
                            "shortest": 150,
                            "standard": 300,
                          },
                          "easing": Object {
                            "easeIn": "cubic-bezier(0.4, 0, 1, 1)",
                            "easeInOut": "cubic-bezier(0.4, 0, 0.2, 1)",
                            "easeOut": "cubic-bezier(0.0, 0, 0.2, 1)",
                            "sharp": "cubic-bezier(0.4, 0, 0.6, 1)",
                          },
                          "getAutoHeightDuration": [Function],
                        },
                        "typography": Object {
                          "body1": Object {
                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                            "fontSize": "1rem",
                            "fontWeight": 400,
                            "letterSpacing": "0.00938em",
                            "lineHeight": 1.5,
                          },
                          "body2": Object {
                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                            "fontSize": "0.875rem",
                            "fontWeight": 400,
                            "letterSpacing": "0.01071em",
                            "lineHeight": 1.43,
                          },
                          "button": Object {
                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                            "fontSize": "0.875rem",
                            "fontWeight": 500,
                            "letterSpacing": "0.02857em",
                            "lineHeight": 1.75,
                            "textTransform": "uppercase",
                          },
                          "caption": Object {
                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                            "fontSize": "0.75rem",
                            "fontWeight": 400,
                            "letterSpacing": "0.03333em",
                            "lineHeight": 1.66,
                          },
                          "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                          "fontSize": 14,
                          "fontWeightBold": 700,
                          "fontWeightLight": 300,
                          "fontWeightMedium": 500,
                          "fontWeightRegular": 400,
                          "h1": Object {
                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                            "fontSize": "6rem",
                            "fontWeight": 300,
                            "letterSpacing": "-0.01562em",
                            "lineHeight": 1,
                          },
                          "h2": Object {
                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                            "fontSize": "3.75rem",
                            "fontWeight": 300,
                            "letterSpacing": "-0.00833em",
                            "lineHeight": 1,
                          },
                          "h3": Object {
                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                            "fontSize": "3rem",
                            "fontWeight": 400,
                            "letterSpacing": "0em",
                            "lineHeight": 1.04,
                          },
                          "h4": Object {
                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                            "fontSize": "2.125rem",
                            "fontWeight": 400,
                            "letterSpacing": "0.00735em",
                            "lineHeight": 1.17,
                          },
                          "h5": Object {
                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                            "fontSize": "1.5rem",
                            "fontWeight": 400,
                            "letterSpacing": "0em",
                            "lineHeight": 1.33,
                          },
                          "h6": Object {
                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                            "fontSize": "1.25rem",
                            "fontWeight": 500,
                            "letterSpacing": "0.0075em",
                            "lineHeight": 1.6,
                          },
                          "htmlFontSize": 16,
                          "overline": Object {
                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                            "fontSize": "0.75rem",
                            "fontWeight": 400,
                            "letterSpacing": "0.08333em",
                            "lineHeight": 2.66,
                            "textTransform": "uppercase",
                          },
                          "pxToRem": [Function],
                          "round": [Function],
                          "subtitle1": Object {
                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                            "fontSize": "1rem",
                            "fontWeight": 400,
                            "letterSpacing": "0.00938em",
                            "lineHeight": 1.75,
                          },
                          "subtitle2": Object {
                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                            "fontSize": "0.875rem",
                            "fontWeight": 500,
                            "letterSpacing": "0.00714em",
                            "lineHeight": 1.57,
                          },
                        },
                        "zIndex": Object {
                          "appBar": 1100,
                          "drawer": 1200,
                          "mobileStepper": 1000,
                          "modal": 1300,
                          "snackbar": 1400,
                          "tooltip": 1500,
                        },
                      }
                    }
                    transformOrigin={
                      Object {
                        "horizontal": "right",
                        "vertical": "top",
                      }
                    }
                  >
                    <WithStyles(ForwardRef(Popover))
                      PaperProps={
                        Object {
                          "classes": Object {
                            "root": "MuiMenu-paper",
                          },
                        }
                      }
                      anchorEl={null}
                      anchorOrigin={
                        Object {
                          "horizontal": "right",
                          "vertical": "top",
                        }
                      }
                      getContentAnchorEl={[Function]}
                      id="profile-account-menu"
                      keepMounted={true}
                      onClose={[Function]}
                      onEntering={[Function]}
                      open={false}
                      transformOrigin={
                        Object {
                          "horizontal": "right",
                          "vertical": "top",
                        }
                      }
                      transitionDuration="auto"
                    >
                      <ForwardRef(Popover)
                        PaperProps={
                          Object {
                            "classes": Object {
                              "root": "MuiMenu-paper",
                            },
                          }
                        }
                        anchorEl={null}
                        anchorOrigin={
                          Object {
                            "horizontal": "right",
                            "vertical": "top",
                          }
                        }
                        classes={
                          Object {
                            "paper": "MuiPopover-paper",
                          }
                        }
                        getContentAnchorEl={[Function]}
                        id="profile-account-menu"
                        keepMounted={true}
                        onClose={[Function]}
                        onEntering={[Function]}
                        open={false}
                        transformOrigin={
                          Object {
                            "horizontal": "right",
                            "vertical": "top",
                          }
                        }
                        transitionDuration="auto"
                      >
                        <ForwardRef(Modal)
                          BackdropProps={
                            Object {
                              "invisible": true,
                            }
                          }
                          id="profile-account-menu"
                          keepMounted={true}
                          onClose={[Function]}
                          open={false}
                        >
                          <ForwardRef(Portal)
                            disablePortal={false}
                            onRendered={[Function]}
                          >
                            <Portal
                              containerInfo={
                                <body>
                                  <div
                                    aria-hidden="true"
                                    id="profile-account-menu"
                                    role="presentation"
                                    style="position: fixed; z-index: 1300; right: 0px; bottom: 0px; top: 0px; left: 0px; visibility: hidden;"
                                  >
                                    <div
                                      data-test="sentinelStart"
                                      tabindex="0"
                                    />
                                    <div
                                      class="MuiPaper-root MuiMenu-paper MuiPaper-elevation8 MuiPopover-paper MuiPaper-rounded"
                                      role="document"
                                      style="opacity: 0; transform: scale(0.75, 0.5625); visibility: hidden;"
                                      tabindex="-1"
                                    >
                                      <ul
                                        class="MuiList-root MuiMenu-list MuiList-padding"
                                        role="menu"
                                        tabindex="-1"
                                      >
                                        <li
                                          aria-disabled="false"
                                          class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                                          role="menuitem"
                                          tabindex="-1"
                                        >
                                          Sign Out
                                          <span
                                            class="MuiTouchRipple-root"
                                          />
                                        </li>
                                      </ul>
                                    </div>
                                    <div
                                      data-test="sentinelEnd"
                                      tabindex="0"
                                    />
                                  </div>
                                  <div
                                    aria-hidden="true"
                                    id="profile-account-menu"
                                    role="presentation"
                                    style="position: fixed; z-index: 1300; right: 0px; bottom: 0px; top: 0px; left: 0px; visibility: hidden;"
                                  >
                                    <div
                                      data-test="sentinelStart"
                                      tabindex="0"
                                    />
                                    <div
                                      class="MuiPaper-root MuiMenu-paper MuiPaper-elevation8 MuiPopover-paper MuiPaper-rounded"
                                      role="document"
                                      style="opacity: 0; transform: scale(0.75, 0.5625); visibility: hidden;"
                                      tabindex="-1"
                                    >
                                      <ul
                                        class="MuiList-root MuiMenu-list MuiList-padding"
                                        role="menu"
                                        tabindex="-1"
                                      >
                                        <li
                                          aria-disabled="false"
                                          class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                                          role="menuitem"
                                          tabindex="-1"
                                        >
                                          Sign Out
                                          <span
                                            class="MuiTouchRipple-root"
                                          />
                                        </li>
                                      </ul>
                                    </div>
                                    <div
                                      data-test="sentinelEnd"
                                      tabindex="0"
                                    />
                                  </div>
                                  <div
                                    aria-hidden="true"
                                    id="profile-account-menu"
                                    role="presentation"
                                    style="position: fixed; z-index: 1300; right: 0px; bottom: 0px; top: 0px; left: 0px; visibility: hidden;"
                                  >
                                    <div
                                      data-test="sentinelStart"
                                      tabindex="0"
                                    />
                                    <div
                                      class="MuiPaper-root MuiMenu-paper MuiPaper-elevation8 MuiPopover-paper MuiPaper-rounded"
                                      role="document"
                                      style="opacity: 0; transform: scale(0.75, 0.5625); visibility: hidden;"
                                      tabindex="-1"
                                    >
                                      <ul
                                        class="MuiList-root MuiMenu-list MuiList-padding"
                                        role="menu"
                                        tabindex="-1"
                                      >
                                        <li
                                          aria-disabled="false"
                                          class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                                          role="menuitem"
                                          tabindex="-1"
                                        >
                                          Sign Out
                                          <span
                                            class="MuiTouchRipple-root"
                                          />
                                        </li>
                                      </ul>
                                    </div>
                                    <div
                                      data-test="sentinelEnd"
                                      tabindex="0"
                                    />
                                  </div>
                                  <div
                                    aria-hidden="true"
                                    id="profile-account-menu"
                                    role="presentation"
                                    style="position: fixed; z-index: 1300; right: 0px; bottom: 0px; top: 0px; left: 0px; visibility: hidden;"
                                  >
                                    <div
                                      data-test="sentinelStart"
                                      tabindex="0"
                                    />
                                    <div
                                      class="MuiPaper-root MuiMenu-paper MuiPaper-elevation8 MuiPopover-paper MuiPaper-rounded"
                                      role="document"
                                      style="opacity: 0; transform: scale(0.75, 0.5625); visibility: hidden;"
                                      tabindex="-1"
                                    >
                                      <ul
                                        class="MuiList-root MuiMenu-list MuiList-padding"
                                        role="menu"
                                        tabindex="-1"
                                      >
                                        <li
                                          aria-disabled="false"
                                          class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                                          role="menuitem"
                                          tabindex="-1"
                                        >
                                          Sign Out
                                          <span
                                            class="MuiTouchRipple-root"
                                          />
                                        </li>
                                      </ul>
                                    </div>
                                    <div
                                      data-test="sentinelEnd"
                                      tabindex="0"
                                    />
                                  </div>
                                  <div
                                    aria-hidden="true"
                                    id="profile-account-menu"
                                    role="presentation"
                                    style="position: fixed; z-index: 1300; right: 0px; bottom: 0px; top: 0px; left: 0px; visibility: hidden;"
                                  >
                                    <div
                                      data-test="sentinelStart"
                                      tabindex="0"
                                    />
                                    <div
                                      class="MuiPaper-root MuiMenu-paper MuiPaper-elevation8 MuiPopover-paper MuiPaper-rounded"
                                      role="document"
                                      style="opacity: 0; transform: scale(0.75, 0.5625); visibility: hidden;"
                                      tabindex="-1"
                                    >
                                      <ul
                                        class="MuiList-root MuiMenu-list MuiList-padding"
                                        role="menu"
                                        tabindex="-1"
                                      >
                                        <li
                                          aria-disabled="false"
                                          class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                                          role="menuitem"
                                          tabindex="-1"
                                        >
                                          Sign Out
                                          <span
                                            class="MuiTouchRipple-root"
                                          />
                                        </li>
                                      </ul>
                                    </div>
                                    <div
                                      data-test="sentinelEnd"
                                      tabindex="0"
                                    />
                                  </div>
                                </body>
                              }
                            >
                              <div
                                id="profile-account-menu"
                                onKeyDown={[Function]}
                                role="presentation"
                                style={
                                  Object {
                                    "bottom": 0,
                                    "left": 0,
                                    "position": "fixed",
                                    "right": 0,
                                    "top": 0,
                                    "visibility": "hidden",
                                    "zIndex": 1300,
                                  }
                                }
                              >
                                <ForwardRef(SimpleBackdrop)
                                  invisible={true}
                                  onClick={[Function]}
                                  open={false}
                                />
                                <TrapFocus
                                  disableAutoFocus={false}
                                  disableEnforceFocus={false}
                                  disableRestoreFocus={false}
                                  getDoc={[Function]}
                                  isEnabled={[Function]}
                                  open={false}
                                >
                                  <div
                                    data-test="sentinelStart"
                                    tabIndex={0}
                                  />
                                  <ForwardRef(Grow)
                                    appear={true}
                                    in={false}
                                    onEnter={[Function]}
                                    onEntering={[Function]}
                                    onExited={[Function]}
                                    role="document"
                                    tabIndex="-1"
                                    timeout="auto"
                                  >
                                    <Transition
                                      addEndListener={[Function]}
                                      appear={true}
                                      enter={true}
                                      exit={true}
                                      in={false}
                                      mountOnEnter={false}
                                      onEnter={[Function]}
                                      onEntered={[Function]}
                                      onEntering={[Function]}
                                      onExit={[Function]}
                                      onExited={[Function]}
                                      onExiting={[Function]}
                                      role="document"
                                      tabIndex="-1"
                                      timeout={null}
                                      unmountOnExit={false}
                                    >
                                      <WithStyles(ForwardRef(Paper))
                                        className="MuiPopover-paper"
                                        classes={
                                          Object {
                                            "root": "MuiMenu-paper",
                                          }
                                        }
                                        elevation={8}
                                        role="document"
                                        style={
                                          Object {
                                            "opacity": 0,
                                            "transform": "scale(0.75, 0.5625)",
                                            "visibility": "hidden",
                                          }
                                        }
                                        tabIndex="-1"
                                      >
                                        <ForwardRef(Paper)
                                          className="MuiPopover-paper"
                                          classes={
                                            Object {
                                              "elevation0": "MuiPaper-elevation0",
                                              "elevation1": "MuiPaper-elevation1",
                                              "elevation10": "MuiPaper-elevation10",
                                              "elevation11": "MuiPaper-elevation11",
                                              "elevation12": "MuiPaper-elevation12",
                                              "elevation13": "MuiPaper-elevation13",
                                              "elevation14": "MuiPaper-elevation14",
                                              "elevation15": "MuiPaper-elevation15",
                                              "elevation16": "MuiPaper-elevation16",
                                              "elevation17": "MuiPaper-elevation17",
                                              "elevation18": "MuiPaper-elevation18",
                                              "elevation19": "MuiPaper-elevation19",
                                              "elevation2": "MuiPaper-elevation2",
                                              "elevation20": "MuiPaper-elevation20",
                                              "elevation21": "MuiPaper-elevation21",
                                              "elevation22": "MuiPaper-elevation22",
                                              "elevation23": "MuiPaper-elevation23",
                                              "elevation24": "MuiPaper-elevation24",
                                              "elevation3": "MuiPaper-elevation3",
                                              "elevation4": "MuiPaper-elevation4",
                                              "elevation5": "MuiPaper-elevation5",
                                              "elevation6": "MuiPaper-elevation6",
                                              "elevation7": "MuiPaper-elevation7",
                                              "elevation8": "MuiPaper-elevation8",
                                              "elevation9": "MuiPaper-elevation9",
                                              "root": "MuiPaper-root MuiMenu-paper",
                                              "rounded": "MuiPaper-rounded",
                                            }
                                          }
                                          elevation={8}
                                          role="document"
                                          style={
                                            Object {
                                              "opacity": 0,
                                              "transform": "scale(0.75, 0.5625)",
                                              "visibility": "hidden",
                                            }
                                          }
                                          tabIndex="-1"
                                        >
                                          <div
                                            className="MuiPaper-root MuiMenu-paper MuiPaper-elevation8 MuiPopover-paper MuiPaper-rounded"
                                            role="document"
                                            style={
                                              Object {
                                                "opacity": 0,
                                                "transform": "scale(0.75, 0.5625)",
                                                "visibility": "hidden",
                                              }
                                            }
                                            tabIndex="-1"
                                          >
                                            <ForwardRef(MenuList)
                                              actions={
                                                Object {
                                                  "current": Object {
                                                    "adjustStyleForScrollbar": [Function],
                                                  },
                                                }
                                              }
                                              autoFocus={false}
                                              className="MuiMenu-list"
                                              onKeyDown={[Function]}
                                            >
                                              <WithStyles(ForwardRef(List))
                                                className="MuiMenu-list"
                                                onKeyDown={[Function]}
                                                role="menu"
                                                tabIndex={-1}
                                              >
                                                <ForwardRef(List)
                                                  className="MuiMenu-list"
                                                  classes={
                                                    Object {
                                                      "dense": "MuiList-dense",
                                                      "padding": "MuiList-padding",
                                                      "root": "MuiList-root",
                                                      "subheader": "MuiList-subheader",
                                                    }
                                                  }
                                                  onKeyDown={[Function]}
                                                  role="menu"
                                                  tabIndex={-1}
                                                >
                                                  <ul
                                                    className="MuiList-root MuiMenu-list MuiList-padding"
                                                    onKeyDown={[Function]}
                                                    role="menu"
                                                    tabIndex={-1}
                                                  >
                                                    <WithStyles(ForwardRef(MenuItem))
                                                      key=".0"
                                                      onClick={[Function]}
                                                    >
                                                      <ForwardRef(MenuItem)
                                                        classes={
                                                          Object {
                                                            "dense": "MuiMenuItem-dense",
                                                            "gutters": "MuiMenuItem-gutters",
                                                            "root": "MuiMenuItem-root",
                                                            "selected": "Mui-selected",
                                                          }
                                                        }
                                                        onClick={[Function]}
                                                      >
                                                        <WithStyles(ForwardRef(ListItem))
                                                          button={true}
                                                          className="MuiMenuItem-root MuiMenuItem-gutters"
                                                          classes={
                                                            Object {
                                                              "dense": "MuiMenuItem-dense",
                                                            }
                                                          }
                                                          component="li"
                                                          disableGutters={false}
                                                          onClick={[Function]}
                                                          role="menuitem"
                                                          tabIndex={-1}
                                                        >
                                                          <ForwardRef(ListItem)
                                                            button={true}
                                                            className="MuiMenuItem-root MuiMenuItem-gutters"
                                                            classes={
                                                              Object {
                                                                "alignItemsFlexStart": "MuiListItem-alignItemsFlexStart",
                                                                "button": "MuiListItem-button",
                                                                "container": "MuiListItem-container",
                                                                "dense": "MuiListItem-dense MuiMenuItem-dense",
                                                                "disabled": "Mui-disabled",
                                                                "divider": "MuiListItem-divider",
                                                                "focusVisible": "Mui-focusVisible",
                                                                "gutters": "MuiListItem-gutters",
                                                                "root": "MuiListItem-root",
                                                                "secondaryAction": "MuiListItem-secondaryAction",
                                                                "selected": "Mui-selected",
                                                              }
                                                            }
                                                            component="li"
                                                            disableGutters={false}
                                                            onClick={[Function]}
                                                            role="menuitem"
                                                            tabIndex={-1}
                                                          >
                                                            <WithStyles(ForwardRef(ButtonBase))
                                                              className="MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                                                              component="li"
                                                              disabled={false}
                                                              focusVisibleClassName="Mui-focusVisible"
                                                              onClick={[Function]}
                                                              role="menuitem"
                                                              tabIndex={-1}
                                                            >
                                                              <ForwardRef(ButtonBase)
                                                                className="MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                                                                classes={
                                                                  Object {
                                                                    "disabled": "Mui-disabled",
                                                                    "focusVisible": "Mui-focusVisible",
                                                                    "root": "MuiButtonBase-root",
                                                                  }
                                                                }
                                                                component="li"
                                                                disabled={false}
                                                                focusVisibleClassName="Mui-focusVisible"
                                                                onClick={[Function]}
                                                                role="menuitem"
                                                                tabIndex={-1}
                                                              >
                                                                <li
                                                                  aria-disabled={false}
                                                                  className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
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
                                                                  role="menuitem"
                                                                  tabIndex={-1}
                                                                >
                                                                  Sign Out
                                                                  <NoSsr>
                                                                    <WithStyles(undefined)
                                                                      center={false}
                                                                    >
                                                                      <ForwardRef(TouchRipple)
                                                                        center={false}
                                                                        classes={
                                                                          Object {
                                                                            "child": "MuiTouchRipple-child",
                                                                            "childLeaving": "MuiTouchRipple-childLeaving",
                                                                            "childPulsate": "MuiTouchRipple-childPulsate",
                                                                            "ripple": "MuiTouchRipple-ripple",
                                                                            "ripplePulsate": "MuiTouchRipple-ripplePulsate",
                                                                            "rippleVisible": "MuiTouchRipple-rippleVisible",
                                                                            "root": "MuiTouchRipple-root",
                                                                          }
                                                                        }
                                                                      >
                                                                        <span
                                                                          className="MuiTouchRipple-root"
                                                                        >
                                                                          <TransitionGroup
                                                                            childFactory={[Function]}
                                                                            component={null}
                                                                            exit={true}
                                                                          />
                                                                        </span>
                                                                      </ForwardRef(TouchRipple)>
                                                                    </WithStyles(undefined)>
                                                                  </NoSsr>
                                                                </li>
                                                              </ForwardRef(ButtonBase)>
                                                            </WithStyles(ForwardRef(ButtonBase))>
                                                          </ForwardRef(ListItem)>
                                                        </WithStyles(ForwardRef(ListItem))>
                                                      </ForwardRef(MenuItem)>
                                                    </WithStyles(ForwardRef(MenuItem))>
                                                  </ul>
                                                </ForwardRef(List)>
                                              </WithStyles(ForwardRef(List))>
                                            </ForwardRef(MenuList)>
                                          </div>
                                        </ForwardRef(Paper)>
                                      </WithStyles(ForwardRef(Paper))>
                                    </Transition>
                                  </ForwardRef(Grow)>
                                  <div
                                    data-test="sentinelEnd"
                                    tabIndex={0}
                                  />
                                </TrapFocus>
                              </div>
                            </Portal>
                          </ForwardRef(Portal)>
                        </ForwardRef(Modal)>
                      </ForwardRef(Popover)>
                    </WithStyles(ForwardRef(Popover))>
                  </ForwardRef(Menu)>
                </WithStyles(ForwardRef(Menu))>
              </div>
            </HeaderAppBar>
            <section
              className="dashboard__cont"
            >
              <WithStyles(ForwardRef(Container))
                maxWidth="lg"
              >
                <ForwardRef(Container)
                  classes={
                    Object {
                      "fixed": "MuiContainer-fixed",
                      "maxWidthLg": "MuiContainer-maxWidthLg",
                      "maxWidthMd": "MuiContainer-maxWidthMd",
                      "maxWidthSm": "MuiContainer-maxWidthSm",
                      "maxWidthXl": "MuiContainer-maxWidthXl",
                      "maxWidthXs": "MuiContainer-maxWidthXs",
                      "root": "MuiContainer-root",
                    }
                  }
                  maxWidth="lg"
                >
                  <div
                    className="MuiContainer-root MuiContainer-maxWidthLg"
                  >
                    <WithStyles(ForwardRef(Grid))
                      container={true}
                      justify="center"
                      spacing={3}
                    >
                      <ForwardRef(Grid)
                        classes={
                          Object {
                            "align-content-xs-center": "MuiGrid-align-content-xs-center",
                            "align-content-xs-flex-end": "MuiGrid-align-content-xs-flex-end",
                            "align-content-xs-flex-start": "MuiGrid-align-content-xs-flex-start",
                            "align-content-xs-space-around": "MuiGrid-align-content-xs-space-around",
                            "align-content-xs-space-between": "MuiGrid-align-content-xs-space-between",
                            "align-items-xs-baseline": "MuiGrid-align-items-xs-baseline",
                            "align-items-xs-center": "MuiGrid-align-items-xs-center",
                            "align-items-xs-flex-end": "MuiGrid-align-items-xs-flex-end",
                            "align-items-xs-flex-start": "MuiGrid-align-items-xs-flex-start",
                            "container": "MuiGrid-container",
                            "direction-xs-column": "MuiGrid-direction-xs-column",
                            "direction-xs-column-reverse": "MuiGrid-direction-xs-column-reverse",
                            "direction-xs-row-reverse": "MuiGrid-direction-xs-row-reverse",
                            "grid-lg-1": "MuiGrid-grid-lg-1",
                            "grid-lg-10": "MuiGrid-grid-lg-10",
                            "grid-lg-11": "MuiGrid-grid-lg-11",
                            "grid-lg-12": "MuiGrid-grid-lg-12",
                            "grid-lg-2": "MuiGrid-grid-lg-2",
                            "grid-lg-3": "MuiGrid-grid-lg-3",
                            "grid-lg-4": "MuiGrid-grid-lg-4",
                            "grid-lg-5": "MuiGrid-grid-lg-5",
                            "grid-lg-6": "MuiGrid-grid-lg-6",
                            "grid-lg-7": "MuiGrid-grid-lg-7",
                            "grid-lg-8": "MuiGrid-grid-lg-8",
                            "grid-lg-9": "MuiGrid-grid-lg-9",
                            "grid-lg-auto": "MuiGrid-grid-lg-auto",
                            "grid-lg-true": "MuiGrid-grid-lg-true",
                            "grid-md-1": "MuiGrid-grid-md-1",
                            "grid-md-10": "MuiGrid-grid-md-10",
                            "grid-md-11": "MuiGrid-grid-md-11",
                            "grid-md-12": "MuiGrid-grid-md-12",
                            "grid-md-2": "MuiGrid-grid-md-2",
                            "grid-md-3": "MuiGrid-grid-md-3",
                            "grid-md-4": "MuiGrid-grid-md-4",
                            "grid-md-5": "MuiGrid-grid-md-5",
                            "grid-md-6": "MuiGrid-grid-md-6",
                            "grid-md-7": "MuiGrid-grid-md-7",
                            "grid-md-8": "MuiGrid-grid-md-8",
                            "grid-md-9": "MuiGrid-grid-md-9",
                            "grid-md-auto": "MuiGrid-grid-md-auto",
                            "grid-md-true": "MuiGrid-grid-md-true",
                            "grid-sm-1": "MuiGrid-grid-sm-1",
                            "grid-sm-10": "MuiGrid-grid-sm-10",
                            "grid-sm-11": "MuiGrid-grid-sm-11",
                            "grid-sm-12": "MuiGrid-grid-sm-12",
                            "grid-sm-2": "MuiGrid-grid-sm-2",
                            "grid-sm-3": "MuiGrid-grid-sm-3",
                            "grid-sm-4": "MuiGrid-grid-sm-4",
                            "grid-sm-5": "MuiGrid-grid-sm-5",
                            "grid-sm-6": "MuiGrid-grid-sm-6",
                            "grid-sm-7": "MuiGrid-grid-sm-7",
                            "grid-sm-8": "MuiGrid-grid-sm-8",
                            "grid-sm-9": "MuiGrid-grid-sm-9",
                            "grid-sm-auto": "MuiGrid-grid-sm-auto",
                            "grid-sm-true": "MuiGrid-grid-sm-true",
                            "grid-xl-1": "MuiGrid-grid-xl-1",
                            "grid-xl-10": "MuiGrid-grid-xl-10",
                            "grid-xl-11": "MuiGrid-grid-xl-11",
                            "grid-xl-12": "MuiGrid-grid-xl-12",
                            "grid-xl-2": "MuiGrid-grid-xl-2",
                            "grid-xl-3": "MuiGrid-grid-xl-3",
                            "grid-xl-4": "MuiGrid-grid-xl-4",
                            "grid-xl-5": "MuiGrid-grid-xl-5",
                            "grid-xl-6": "MuiGrid-grid-xl-6",
                            "grid-xl-7": "MuiGrid-grid-xl-7",
                            "grid-xl-8": "MuiGrid-grid-xl-8",
                            "grid-xl-9": "MuiGrid-grid-xl-9",
                            "grid-xl-auto": "MuiGrid-grid-xl-auto",
                            "grid-xl-true": "MuiGrid-grid-xl-true",
                            "grid-xs-1": "MuiGrid-grid-xs-1",
                            "grid-xs-10": "MuiGrid-grid-xs-10",
                            "grid-xs-11": "MuiGrid-grid-xs-11",
                            "grid-xs-12": "MuiGrid-grid-xs-12",
                            "grid-xs-2": "MuiGrid-grid-xs-2",
                            "grid-xs-3": "MuiGrid-grid-xs-3",
                            "grid-xs-4": "MuiGrid-grid-xs-4",
                            "grid-xs-5": "MuiGrid-grid-xs-5",
                            "grid-xs-6": "MuiGrid-grid-xs-6",
                            "grid-xs-7": "MuiGrid-grid-xs-7",
                            "grid-xs-8": "MuiGrid-grid-xs-8",
                            "grid-xs-9": "MuiGrid-grid-xs-9",
                            "grid-xs-auto": "MuiGrid-grid-xs-auto",
                            "grid-xs-true": "MuiGrid-grid-xs-true",
                            "item": "MuiGrid-item",
                            "justify-xs-center": "MuiGrid-justify-xs-center",
                            "justify-xs-flex-end": "MuiGrid-justify-xs-flex-end",
                            "justify-xs-space-around": "MuiGrid-justify-xs-space-around",
                            "justify-xs-space-between": "MuiGrid-justify-xs-space-between",
                            "justify-xs-space-evenly": "MuiGrid-justify-xs-space-evenly",
                            "root": "MuiGrid-root",
                            "spacing-xs-1": "MuiGrid-spacing-xs-1",
                            "spacing-xs-10": "MuiGrid-spacing-xs-10",
                            "spacing-xs-2": "MuiGrid-spacing-xs-2",
                            "spacing-xs-3": "MuiGrid-spacing-xs-3",
                            "spacing-xs-4": "MuiGrid-spacing-xs-4",
                            "spacing-xs-5": "MuiGrid-spacing-xs-5",
                            "spacing-xs-6": "MuiGrid-spacing-xs-6",
                            "spacing-xs-7": "MuiGrid-spacing-xs-7",
                            "spacing-xs-8": "MuiGrid-spacing-xs-8",
                            "spacing-xs-9": "MuiGrid-spacing-xs-9",
                            "wrap-xs-nowrap": "MuiGrid-wrap-xs-nowrap",
                            "wrap-xs-wrap-reverse": "MuiGrid-wrap-xs-wrap-reverse",
                            "zeroMinWidth": "MuiGrid-zeroMinWidth",
                          }
                        }
                        container={true}
                        justify="center"
                        spacing={3}
                      >
                        <div
                          className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 MuiGrid-justify-xs-center"
                        />
                      </ForwardRef(Grid)>
                    </WithStyles(ForwardRef(Grid))>
                  </div>
                </ForwardRef(Container)>
              </WithStyles(ForwardRef(Container))>
            </section>
            <NotificationBar
              dismissAfter={5000}
              msg=""
              onDimiss={[Function]}
              showNotification={false}
              variant=""
            >
              <div>
                <WithStyles(ForwardRef(Snackbar))
                  anchorOrigin={
                    Object {
                      "horizontal": "center",
                      "vertical": "bottom",
                    }
                  }
                  autoHideDuration={5000}
                  onClose={[Function]}
                  open={false}
                >
                  <ForwardRef(Snackbar)
                    anchorOrigin={
                      Object {
                        "horizontal": "center",
                        "vertical": "bottom",
                      }
                    }
                    autoHideDuration={5000}
                    classes={
                      Object {
                        "anchorOriginBottomCenter": "MuiSnackbar-anchorOriginBottomCenter",
                        "anchorOriginBottomLeft": "MuiSnackbar-anchorOriginBottomLeft",
                        "anchorOriginBottomRight": "MuiSnackbar-anchorOriginBottomRight",
                        "anchorOriginTopCenter": "MuiSnackbar-anchorOriginTopCenter",
                        "anchorOriginTopLeft": "MuiSnackbar-anchorOriginTopLeft",
                        "anchorOriginTopRight": "MuiSnackbar-anchorOriginTopRight",
                        "root": "MuiSnackbar-root",
                      }
                    }
                    onClose={[Function]}
                    open={false}
                  />
                </WithStyles(ForwardRef(Snackbar))>
              </div>
            </NotificationBar>
          </div>
        </Dashboard>
    `);
});

it("Dashboard renders correctly - mimick drone renting", () => {
  const wrapper = mount(<Dashboard></Dashboard>);
  const dronesStationCount = 3;
  const { quads: drones } = allDrones;
  const allStations = UtilityHelper.divideDronesAcrossStations(
    drones,
    dronesStationCount
  );

  const stationId = 0;
  const selectedDrone = allStations[stationId][0];
  wrapper
    .instance()
    .setState({ ...wrapper.instance().state, stations: { ...allStations } }); // initialise the stations with drones

  wrapper.instance()._currentUser = {
    emailId: "xyz@gmail.com",
    firstName: "Manoj",
    lastName: "Lakshman",
    phoneNumber: "912",
    isBanned: false
  };

  //rent a drone
  wrapper.instance().rentDrone(selectedDrone, stationId);

  expect(EnzymeToJson(wrapper)).toMatchInlineSnapshot(`
        <Dashboard>
          <div
            className="dashboard"
          >
            <HeaderAppBar
              countDownValue={0}
              isUserBanned={false}
              loggedInUser=", "
              onDroneReturn={[Function]}
            >
              <div
                className="header-app-bar"
              >
                <WithStyles(ForwardRef(AppBar))
                  position="static"
                >
                  <ForwardRef(AppBar)
                    classes={
                      Object {
                        "colorDefault": "MuiAppBar-colorDefault",
                        "colorPrimary": "MuiAppBar-colorPrimary",
                        "colorSecondary": "MuiAppBar-colorSecondary",
                        "positionAbsolute": "MuiAppBar-positionAbsolute",
                        "positionFixed": "MuiAppBar-positionFixed",
                        "positionRelative": "MuiAppBar-positionRelative",
                        "positionStatic": "MuiAppBar-positionStatic",
                        "positionSticky": "MuiAppBar-positionSticky",
                        "root": "MuiAppBar-root",
                      }
                    }
                    position="static"
                  >
                    <WithStyles(ForwardRef(Paper))
                      className="MuiAppBar-root MuiAppBar-positionStatic MuiAppBar-colorPrimary"
                      component="header"
                      elevation={4}
                      square={true}
                    >
                      <ForwardRef(Paper)
                        className="MuiAppBar-root MuiAppBar-positionStatic MuiAppBar-colorPrimary"
                        classes={
                          Object {
                            "elevation0": "MuiPaper-elevation0",
                            "elevation1": "MuiPaper-elevation1",
                            "elevation10": "MuiPaper-elevation10",
                            "elevation11": "MuiPaper-elevation11",
                            "elevation12": "MuiPaper-elevation12",
                            "elevation13": "MuiPaper-elevation13",
                            "elevation14": "MuiPaper-elevation14",
                            "elevation15": "MuiPaper-elevation15",
                            "elevation16": "MuiPaper-elevation16",
                            "elevation17": "MuiPaper-elevation17",
                            "elevation18": "MuiPaper-elevation18",
                            "elevation19": "MuiPaper-elevation19",
                            "elevation2": "MuiPaper-elevation2",
                            "elevation20": "MuiPaper-elevation20",
                            "elevation21": "MuiPaper-elevation21",
                            "elevation22": "MuiPaper-elevation22",
                            "elevation23": "MuiPaper-elevation23",
                            "elevation24": "MuiPaper-elevation24",
                            "elevation3": "MuiPaper-elevation3",
                            "elevation4": "MuiPaper-elevation4",
                            "elevation5": "MuiPaper-elevation5",
                            "elevation6": "MuiPaper-elevation6",
                            "elevation7": "MuiPaper-elevation7",
                            "elevation8": "MuiPaper-elevation8",
                            "elevation9": "MuiPaper-elevation9",
                            "root": "MuiPaper-root",
                            "rounded": "MuiPaper-rounded",
                          }
                        }
                        component="header"
                        elevation={4}
                        square={true}
                      >
                        <header
                          className="MuiPaper-root MuiPaper-elevation4 MuiAppBar-root MuiAppBar-positionStatic MuiAppBar-colorPrimary"
                        >
                          <WithStyles(ForwardRef(Toolbar))>
                            <ForwardRef(Toolbar)
                              classes={
                                Object {
                                  "dense": "MuiToolbar-dense",
                                  "gutters": "MuiToolbar-gutters",
                                  "regular": "MuiToolbar-regular",
                                  "root": "MuiToolbar-root",
                                }
                              }
                            >
                              <div
                                className="MuiToolbar-root MuiToolbar-regular MuiToolbar-gutters"
                              >
                                <WithStyles(ForwardRef(Typography))
                                  className="makeStyles-title-2"
                                  noWrap={true}
                                  variant="h6"
                                >
                                  <ForwardRef(Typography)
                                    className="makeStyles-title-2"
                                    classes={
                                      Object {
                                        "alignCenter": "MuiTypography-alignCenter",
                                        "alignJustify": "MuiTypography-alignJustify",
                                        "alignLeft": "MuiTypography-alignLeft",
                                        "alignRight": "MuiTypography-alignRight",
                                        "body1": "MuiTypography-body1",
                                        "body2": "MuiTypography-body2",
                                        "button": "MuiTypography-button",
                                        "caption": "MuiTypography-caption",
                                        "colorError": "MuiTypography-colorError",
                                        "colorInherit": "MuiTypography-colorInherit",
                                        "colorPrimary": "MuiTypography-colorPrimary",
                                        "colorSecondary": "MuiTypography-colorSecondary",
                                        "colorTextPrimary": "MuiTypography-colorTextPrimary",
                                        "colorTextSecondary": "MuiTypography-colorTextSecondary",
                                        "displayBlock": "MuiTypography-displayBlock",
                                        "displayInline": "MuiTypography-displayInline",
                                        "gutterBottom": "MuiTypography-gutterBottom",
                                        "h1": "MuiTypography-h1",
                                        "h2": "MuiTypography-h2",
                                        "h3": "MuiTypography-h3",
                                        "h4": "MuiTypography-h4",
                                        "h5": "MuiTypography-h5",
                                        "h6": "MuiTypography-h6",
                                        "noWrap": "MuiTypography-noWrap",
                                        "overline": "MuiTypography-overline",
                                        "paragraph": "MuiTypography-paragraph",
                                        "root": "MuiTypography-root",
                                        "srOnly": "MuiTypography-srOnly",
                                        "subtitle1": "MuiTypography-subtitle1",
                                        "subtitle2": "MuiTypography-subtitle2",
                                      }
                                    }
                                    noWrap={true}
                                    theme={
                                      Object {
                                        "breakpoints": Object {
                                          "between": [Function],
                                          "down": [Function],
                                          "keys": Array [
                                            "xs",
                                            "sm",
                                            "md",
                                            "lg",
                                            "xl",
                                          ],
                                          "only": [Function],
                                          "up": [Function],
                                          "values": Object {
                                            "lg": 1280,
                                            "md": 960,
                                            "sm": 600,
                                            "xl": 1920,
                                            "xs": 0,
                                          },
                                          "width": [Function],
                                        },
                                        "direction": "ltr",
                                        "mixins": Object {
                                          "gutters": [Function],
                                          "toolbar": Object {
                                            "@media (min-width:0px) and (orientation: landscape)": Object {
                                              "minHeight": 48,
                                            },
                                            "@media (min-width:600px)": Object {
                                              "minHeight": 64,
                                            },
                                            "minHeight": 56,
                                          },
                                        },
                                        "overrides": Object {},
                                        "palette": Object {
                                          "action": Object {
                                            "active": "rgba(0, 0, 0, 0.54)",
                                            "disabled": "rgba(0, 0, 0, 0.26)",
                                            "disabledBackground": "rgba(0, 0, 0, 0.12)",
                                            "hover": "rgba(0, 0, 0, 0.08)",
                                            "hoverOpacity": 0.08,
                                            "selected": "rgba(0, 0, 0, 0.14)",
                                          },
                                          "augmentColor": [Function],
                                          "background": Object {
                                            "default": "#fafafa",
                                            "paper": "#fff",
                                          },
                                          "common": Object {
                                            "black": "#000",
                                            "white": "#fff",
                                          },
                                          "contrastThreshold": 3,
                                          "divider": "rgba(0, 0, 0, 0.12)",
                                          "error": Object {
                                            "contrastText": "#fff",
                                            "dark": "#d32f2f",
                                            "light": "#e57373",
                                            "main": "#f44336",
                                          },
                                          "getContrastText": [Function],
                                          "grey": Object {
                                            "100": "#f5f5f5",
                                            "200": "#eeeeee",
                                            "300": "#e0e0e0",
                                            "400": "#bdbdbd",
                                            "50": "#fafafa",
                                            "500": "#9e9e9e",
                                            "600": "#757575",
                                            "700": "#616161",
                                            "800": "#424242",
                                            "900": "#212121",
                                            "A100": "#d5d5d5",
                                            "A200": "#aaaaaa",
                                            "A400": "#303030",
                                            "A700": "#616161",
                                          },
                                          "primary": Object {
                                            "contrastText": "#fff",
                                            "dark": "#303f9f",
                                            "light": "#7986cb",
                                            "main": "#3f51b5",
                                          },
                                          "secondary": Object {
                                            "contrastText": "#fff",
                                            "dark": "#c51162",
                                            "light": "#ff4081",
                                            "main": "#f50057",
                                          },
                                          "text": Object {
                                            "disabled": "rgba(0, 0, 0, 0.38)",
                                            "hint": "rgba(0, 0, 0, 0.38)",
                                            "primary": "rgba(0, 0, 0, 0.87)",
                                            "secondary": "rgba(0, 0, 0, 0.54)",
                                          },
                                          "tonalOffset": 0.2,
                                          "type": "light",
                                        },
                                        "props": Object {},
                                        "shadows": Array [
                                          "none",
                                          "0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)",
                                          "0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)",
                                          "0px 1px 8px 0px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 3px 3px -2px rgba(0,0,0,0.12)",
                                          "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
                                          "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
                                          "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
                                          "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
                                          "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
                                          "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
                                          "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
                                          "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
                                          "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
                                          "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
                                          "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
                                          "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
                                          "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
                                          "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
                                          "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
                                          "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
                                          "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
                                          "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
                                          "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
                                          "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
                                          "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
                                        ],
                                        "shape": Object {
                                          "borderRadius": 4,
                                        },
                                        "spacing": [Function],
                                        "transitions": Object {
                                          "create": [Function],
                                          "duration": Object {
                                            "complex": 375,
                                            "enteringScreen": 225,
                                            "leavingScreen": 195,
                                            "short": 250,
                                            "shorter": 200,
                                            "shortest": 150,
                                            "standard": 300,
                                          },
                                          "easing": Object {
                                            "easeIn": "cubic-bezier(0.4, 0, 1, 1)",
                                            "easeInOut": "cubic-bezier(0.4, 0, 0.2, 1)",
                                            "easeOut": "cubic-bezier(0.0, 0, 0.2, 1)",
                                            "sharp": "cubic-bezier(0.4, 0, 0.6, 1)",
                                          },
                                          "getAutoHeightDuration": [Function],
                                        },
                                        "typography": Object {
                                          "body1": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "1rem",
                                            "fontWeight": 400,
                                            "letterSpacing": "0.00938em",
                                            "lineHeight": 1.5,
                                          },
                                          "body2": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "0.875rem",
                                            "fontWeight": 400,
                                            "letterSpacing": "0.01071em",
                                            "lineHeight": 1.43,
                                          },
                                          "button": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "0.875rem",
                                            "fontWeight": 500,
                                            "letterSpacing": "0.02857em",
                                            "lineHeight": 1.75,
                                            "textTransform": "uppercase",
                                          },
                                          "caption": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "0.75rem",
                                            "fontWeight": 400,
                                            "letterSpacing": "0.03333em",
                                            "lineHeight": 1.66,
                                          },
                                          "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                          "fontSize": 14,
                                          "fontWeightBold": 700,
                                          "fontWeightLight": 300,
                                          "fontWeightMedium": 500,
                                          "fontWeightRegular": 400,
                                          "h1": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "6rem",
                                            "fontWeight": 300,
                                            "letterSpacing": "-0.01562em",
                                            "lineHeight": 1,
                                          },
                                          "h2": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "3.75rem",
                                            "fontWeight": 300,
                                            "letterSpacing": "-0.00833em",
                                            "lineHeight": 1,
                                          },
                                          "h3": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "3rem",
                                            "fontWeight": 400,
                                            "letterSpacing": "0em",
                                            "lineHeight": 1.04,
                                          },
                                          "h4": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "2.125rem",
                                            "fontWeight": 400,
                                            "letterSpacing": "0.00735em",
                                            "lineHeight": 1.17,
                                          },
                                          "h5": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "1.5rem",
                                            "fontWeight": 400,
                                            "letterSpacing": "0em",
                                            "lineHeight": 1.33,
                                          },
                                          "h6": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "1.25rem",
                                            "fontWeight": 500,
                                            "letterSpacing": "0.0075em",
                                            "lineHeight": 1.6,
                                          },
                                          "htmlFontSize": 16,
                                          "overline": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "0.75rem",
                                            "fontWeight": 400,
                                            "letterSpacing": "0.08333em",
                                            "lineHeight": 2.66,
                                            "textTransform": "uppercase",
                                          },
                                          "pxToRem": [Function],
                                          "round": [Function],
                                          "subtitle1": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "1rem",
                                            "fontWeight": 400,
                                            "letterSpacing": "0.00938em",
                                            "lineHeight": 1.75,
                                          },
                                          "subtitle2": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "0.875rem",
                                            "fontWeight": 500,
                                            "letterSpacing": "0.00714em",
                                            "lineHeight": 1.57,
                                          },
                                        },
                                        "zIndex": Object {
                                          "appBar": 1100,
                                          "drawer": 1200,
                                          "mobileStepper": 1000,
                                          "modal": 1300,
                                          "snackbar": 1400,
                                          "tooltip": 1500,
                                        },
                                      }
                                    }
                                    variant="h6"
                                  >
                                    <h6
                                      className="MuiTypography-root makeStyles-title-2 MuiTypography-h6 MuiTypography-noWrap"
                                    >
                                      Drone For You
                                    </h6>
                                  </ForwardRef(Typography)>
                                </WithStyles(ForwardRef(Typography))>
                                <div
                                  className="makeStyles-grow-1"
                                />
                                <WithStyles(ForwardRef(Typography))
                                  noWrap={true}
                                >
                                  <ForwardRef(Typography)
                                    classes={
                                      Object {
                                        "alignCenter": "MuiTypography-alignCenter",
                                        "alignJustify": "MuiTypography-alignJustify",
                                        "alignLeft": "MuiTypography-alignLeft",
                                        "alignRight": "MuiTypography-alignRight",
                                        "body1": "MuiTypography-body1",
                                        "body2": "MuiTypography-body2",
                                        "button": "MuiTypography-button",
                                        "caption": "MuiTypography-caption",
                                        "colorError": "MuiTypography-colorError",
                                        "colorInherit": "MuiTypography-colorInherit",
                                        "colorPrimary": "MuiTypography-colorPrimary",
                                        "colorSecondary": "MuiTypography-colorSecondary",
                                        "colorTextPrimary": "MuiTypography-colorTextPrimary",
                                        "colorTextSecondary": "MuiTypography-colorTextSecondary",
                                        "displayBlock": "MuiTypography-displayBlock",
                                        "displayInline": "MuiTypography-displayInline",
                                        "gutterBottom": "MuiTypography-gutterBottom",
                                        "h1": "MuiTypography-h1",
                                        "h2": "MuiTypography-h2",
                                        "h3": "MuiTypography-h3",
                                        "h4": "MuiTypography-h4",
                                        "h5": "MuiTypography-h5",
                                        "h6": "MuiTypography-h6",
                                        "noWrap": "MuiTypography-noWrap",
                                        "overline": "MuiTypography-overline",
                                        "paragraph": "MuiTypography-paragraph",
                                        "root": "MuiTypography-root",
                                        "srOnly": "MuiTypography-srOnly",
                                        "subtitle1": "MuiTypography-subtitle1",
                                        "subtitle2": "MuiTypography-subtitle2",
                                      }
                                    }
                                    noWrap={true}
                                    theme={
                                      Object {
                                        "breakpoints": Object {
                                          "between": [Function],
                                          "down": [Function],
                                          "keys": Array [
                                            "xs",
                                            "sm",
                                            "md",
                                            "lg",
                                            "xl",
                                          ],
                                          "only": [Function],
                                          "up": [Function],
                                          "values": Object {
                                            "lg": 1280,
                                            "md": 960,
                                            "sm": 600,
                                            "xl": 1920,
                                            "xs": 0,
                                          },
                                          "width": [Function],
                                        },
                                        "direction": "ltr",
                                        "mixins": Object {
                                          "gutters": [Function],
                                          "toolbar": Object {
                                            "@media (min-width:0px) and (orientation: landscape)": Object {
                                              "minHeight": 48,
                                            },
                                            "@media (min-width:600px)": Object {
                                              "minHeight": 64,
                                            },
                                            "minHeight": 56,
                                          },
                                        },
                                        "overrides": Object {},
                                        "palette": Object {
                                          "action": Object {
                                            "active": "rgba(0, 0, 0, 0.54)",
                                            "disabled": "rgba(0, 0, 0, 0.26)",
                                            "disabledBackground": "rgba(0, 0, 0, 0.12)",
                                            "hover": "rgba(0, 0, 0, 0.08)",
                                            "hoverOpacity": 0.08,
                                            "selected": "rgba(0, 0, 0, 0.14)",
                                          },
                                          "augmentColor": [Function],
                                          "background": Object {
                                            "default": "#fafafa",
                                            "paper": "#fff",
                                          },
                                          "common": Object {
                                            "black": "#000",
                                            "white": "#fff",
                                          },
                                          "contrastThreshold": 3,
                                          "divider": "rgba(0, 0, 0, 0.12)",
                                          "error": Object {
                                            "contrastText": "#fff",
                                            "dark": "#d32f2f",
                                            "light": "#e57373",
                                            "main": "#f44336",
                                          },
                                          "getContrastText": [Function],
                                          "grey": Object {
                                            "100": "#f5f5f5",
                                            "200": "#eeeeee",
                                            "300": "#e0e0e0",
                                            "400": "#bdbdbd",
                                            "50": "#fafafa",
                                            "500": "#9e9e9e",
                                            "600": "#757575",
                                            "700": "#616161",
                                            "800": "#424242",
                                            "900": "#212121",
                                            "A100": "#d5d5d5",
                                            "A200": "#aaaaaa",
                                            "A400": "#303030",
                                            "A700": "#616161",
                                          },
                                          "primary": Object {
                                            "contrastText": "#fff",
                                            "dark": "#303f9f",
                                            "light": "#7986cb",
                                            "main": "#3f51b5",
                                          },
                                          "secondary": Object {
                                            "contrastText": "#fff",
                                            "dark": "#c51162",
                                            "light": "#ff4081",
                                            "main": "#f50057",
                                          },
                                          "text": Object {
                                            "disabled": "rgba(0, 0, 0, 0.38)",
                                            "hint": "rgba(0, 0, 0, 0.38)",
                                            "primary": "rgba(0, 0, 0, 0.87)",
                                            "secondary": "rgba(0, 0, 0, 0.54)",
                                          },
                                          "tonalOffset": 0.2,
                                          "type": "light",
                                        },
                                        "props": Object {},
                                        "shadows": Array [
                                          "none",
                                          "0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)",
                                          "0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)",
                                          "0px 1px 8px 0px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 3px 3px -2px rgba(0,0,0,0.12)",
                                          "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
                                          "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
                                          "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
                                          "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
                                          "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
                                          "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
                                          "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
                                          "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
                                          "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
                                          "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
                                          "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
                                          "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
                                          "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
                                          "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
                                          "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
                                          "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
                                          "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
                                          "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
                                          "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
                                          "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
                                          "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
                                        ],
                                        "shape": Object {
                                          "borderRadius": 4,
                                        },
                                        "spacing": [Function],
                                        "transitions": Object {
                                          "create": [Function],
                                          "duration": Object {
                                            "complex": 375,
                                            "enteringScreen": 225,
                                            "leavingScreen": 195,
                                            "short": 250,
                                            "shorter": 200,
                                            "shortest": 150,
                                            "standard": 300,
                                          },
                                          "easing": Object {
                                            "easeIn": "cubic-bezier(0.4, 0, 1, 1)",
                                            "easeInOut": "cubic-bezier(0.4, 0, 0.2, 1)",
                                            "easeOut": "cubic-bezier(0.0, 0, 0.2, 1)",
                                            "sharp": "cubic-bezier(0.4, 0, 0.6, 1)",
                                          },
                                          "getAutoHeightDuration": [Function],
                                        },
                                        "typography": Object {
                                          "body1": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "1rem",
                                            "fontWeight": 400,
                                            "letterSpacing": "0.00938em",
                                            "lineHeight": 1.5,
                                          },
                                          "body2": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "0.875rem",
                                            "fontWeight": 400,
                                            "letterSpacing": "0.01071em",
                                            "lineHeight": 1.43,
                                          },
                                          "button": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "0.875rem",
                                            "fontWeight": 500,
                                            "letterSpacing": "0.02857em",
                                            "lineHeight": 1.75,
                                            "textTransform": "uppercase",
                                          },
                                          "caption": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "0.75rem",
                                            "fontWeight": 400,
                                            "letterSpacing": "0.03333em",
                                            "lineHeight": 1.66,
                                          },
                                          "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                          "fontSize": 14,
                                          "fontWeightBold": 700,
                                          "fontWeightLight": 300,
                                          "fontWeightMedium": 500,
                                          "fontWeightRegular": 400,
                                          "h1": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "6rem",
                                            "fontWeight": 300,
                                            "letterSpacing": "-0.01562em",
                                            "lineHeight": 1,
                                          },
                                          "h2": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "3.75rem",
                                            "fontWeight": 300,
                                            "letterSpacing": "-0.00833em",
                                            "lineHeight": 1,
                                          },
                                          "h3": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "3rem",
                                            "fontWeight": 400,
                                            "letterSpacing": "0em",
                                            "lineHeight": 1.04,
                                          },
                                          "h4": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "2.125rem",
                                            "fontWeight": 400,
                                            "letterSpacing": "0.00735em",
                                            "lineHeight": 1.17,
                                          },
                                          "h5": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "1.5rem",
                                            "fontWeight": 400,
                                            "letterSpacing": "0em",
                                            "lineHeight": 1.33,
                                          },
                                          "h6": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "1.25rem",
                                            "fontWeight": 500,
                                            "letterSpacing": "0.0075em",
                                            "lineHeight": 1.6,
                                          },
                                          "htmlFontSize": 16,
                                          "overline": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "0.75rem",
                                            "fontWeight": 400,
                                            "letterSpacing": "0.08333em",
                                            "lineHeight": 2.66,
                                            "textTransform": "uppercase",
                                          },
                                          "pxToRem": [Function],
                                          "round": [Function],
                                          "subtitle1": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "1rem",
                                            "fontWeight": 400,
                                            "letterSpacing": "0.00938em",
                                            "lineHeight": 1.75,
                                          },
                                          "subtitle2": Object {
                                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                            "fontSize": "0.875rem",
                                            "fontWeight": 500,
                                            "letterSpacing": "0.00714em",
                                            "lineHeight": 1.57,
                                          },
                                        },
                                        "zIndex": Object {
                                          "appBar": 1100,
                                          "drawer": 1200,
                                          "mobileStepper": 1000,
                                          "modal": 1300,
                                          "snackbar": 1400,
                                          "tooltip": 1500,
                                        },
                                      }
                                    }
                                  >
                                    <p
                                      className="MuiTypography-root MuiTypography-body1 MuiTypography-noWrap"
                                    >
                                       
                                    </p>
                                  </ForwardRef(Typography)>
                                </WithStyles(ForwardRef(Typography))>
                                <div
                                  className="makeStyles-grow-1"
                                />
                                <WithStyles(ForwardRef(Button))
                                  className="margin3"
                                  color="primary"
                                  disabled={true}
                                  onClick={[Function]}
                                  variant="contained"
                                >
                                  <ForwardRef(Button)
                                    className="margin3"
                                    classes={
                                      Object {
                                        "colorInherit": "MuiButton-colorInherit",
                                        "contained": "MuiButton-contained",
                                        "containedPrimary": "MuiButton-containedPrimary",
                                        "containedSecondary": "MuiButton-containedSecondary",
                                        "disabled": "Mui-disabled",
                                        "focusVisible": "Mui-focusVisible",
                                        "fullWidth": "MuiButton-fullWidth",
                                        "label": "MuiButton-label",
                                        "outlined": "MuiButton-outlined",
                                        "outlinedPrimary": "MuiButton-outlinedPrimary",
                                        "outlinedSecondary": "MuiButton-outlinedSecondary",
                                        "root": "MuiButton-root",
                                        "sizeLarge": "MuiButton-sizeLarge",
                                        "sizeSmall": "MuiButton-sizeSmall",
                                        "text": "MuiButton-text",
                                        "textPrimary": "MuiButton-textPrimary",
                                        "textSecondary": "MuiButton-textSecondary",
                                      }
                                    }
                                    color="primary"
                                    disabled={true}
                                    onClick={[Function]}
                                    variant="contained"
                                  >
                                    <WithStyles(ForwardRef(ButtonBase))
                                      className="MuiButton-root margin3 MuiButton-contained MuiButton-containedPrimary Mui-disabled"
                                      component="button"
                                      disabled={true}
                                      focusRipple={true}
                                      focusVisibleClassName="Mui-focusVisible"
                                      onClick={[Function]}
                                      type="button"
                                    >
                                      <ForwardRef(ButtonBase)
                                        className="MuiButton-root margin3 MuiButton-contained MuiButton-containedPrimary Mui-disabled"
                                        classes={
                                          Object {
                                            "disabled": "Mui-disabled",
                                            "focusVisible": "Mui-focusVisible",
                                            "root": "MuiButtonBase-root",
                                          }
                                        }
                                        component="button"
                                        disabled={true}
                                        focusRipple={true}
                                        focusVisibleClassName="Mui-focusVisible"
                                        onClick={[Function]}
                                        type="button"
                                      >
                                        <button
                                          className="MuiButtonBase-root MuiButton-root margin3 MuiButton-contained MuiButton-containedPrimary Mui-disabled Mui-disabled"
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
                                            Return Drone
                                          </span>
                                        </button>
                                      </ForwardRef(ButtonBase)>
                                    </WithStyles(ForwardRef(ButtonBase))>
                                  </ForwardRef(Button)>
                                </WithStyles(ForwardRef(Button))>
                                <div
                                  className="makeStyles-grow-1"
                                />
                                <b>
                                   
                                  , 
                                   
                                </b>
                                <div
                                  className="makeStyles-sectionDesktop-3"
                                >
                                  <WithStyles(ForwardRef(IconButton))
                                    aria-controls="profile-account-menu"
                                    aria-haspopup="true"
                                    aria-label="Account of current user"
                                    color="inherit"
                                    edge="end"
                                    onClick={[Function]}
                                  >
                                    <ForwardRef(IconButton)
                                      aria-controls="profile-account-menu"
                                      aria-haspopup="true"
                                      aria-label="Account of current user"
                                      classes={
                                        Object {
                                          "colorInherit": "MuiIconButton-colorInherit",
                                          "colorPrimary": "MuiIconButton-colorPrimary",
                                          "colorSecondary": "MuiIconButton-colorSecondary",
                                          "disabled": "Mui-disabled",
                                          "edgeEnd": "MuiIconButton-edgeEnd",
                                          "edgeStart": "MuiIconButton-edgeStart",
                                          "label": "MuiIconButton-label",
                                          "root": "MuiIconButton-root",
                                          "sizeSmall": "MuiIconButton-sizeSmall",
                                        }
                                      }
                                      color="inherit"
                                      edge="end"
                                      onClick={[Function]}
                                    >
                                      <WithStyles(ForwardRef(ButtonBase))
                                        aria-controls="profile-account-menu"
                                        aria-haspopup="true"
                                        aria-label="Account of current user"
                                        centerRipple={true}
                                        className="MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-edgeEnd"
                                        disabled={false}
                                        focusRipple={true}
                                        onClick={[Function]}
                                      >
                                        <ForwardRef(ButtonBase)
                                          aria-controls="profile-account-menu"
                                          aria-haspopup="true"
                                          aria-label="Account of current user"
                                          centerRipple={true}
                                          className="MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-edgeEnd"
                                          classes={
                                            Object {
                                              "disabled": "Mui-disabled",
                                              "focusVisible": "Mui-focusVisible",
                                              "root": "MuiButtonBase-root",
                                            }
                                          }
                                          disabled={false}
                                          focusRipple={true}
                                          onClick={[Function]}
                                        >
                                          <button
                                            aria-controls="profile-account-menu"
                                            aria-haspopup="true"
                                            aria-label="Account of current user"
                                            className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-edgeEnd"
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
                                              className="MuiIconButton-label"
                                            >
                                              <ForwardRef>
                                                <WithStyles(ForwardRef(SvgIcon))>
                                                  <ForwardRef(SvgIcon)
                                                    classes={
                                                      Object {
                                                        "colorAction": "MuiSvgIcon-colorAction",
                                                        "colorDisabled": "MuiSvgIcon-colorDisabled",
                                                        "colorError": "MuiSvgIcon-colorError",
                                                        "colorPrimary": "MuiSvgIcon-colorPrimary",
                                                        "colorSecondary": "MuiSvgIcon-colorSecondary",
                                                        "fontSizeInherit": "MuiSvgIcon-fontSizeInherit",
                                                        "fontSizeLarge": "MuiSvgIcon-fontSizeLarge",
                                                        "fontSizeSmall": "MuiSvgIcon-fontSizeSmall",
                                                        "root": "MuiSvgIcon-root",
                                                      }
                                                    }
                                                  >
                                                    <svg
                                                      aria-hidden="true"
                                                      className="MuiSvgIcon-root"
                                                      focusable="false"
                                                      role="presentation"
                                                      viewBox="0 0 24 24"
                                                    >
                                                      <path
                                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
                                                      />
                                                    </svg>
                                                  </ForwardRef(SvgIcon)>
                                                </WithStyles(ForwardRef(SvgIcon))>
                                              </ForwardRef>
                                            </span>
                                            <NoSsr>
                                              <WithStyles(undefined)
                                                center={true}
                                              >
                                                <ForwardRef(TouchRipple)
                                                  center={true}
                                                  classes={
                                                    Object {
                                                      "child": "MuiTouchRipple-child",
                                                      "childLeaving": "MuiTouchRipple-childLeaving",
                                                      "childPulsate": "MuiTouchRipple-childPulsate",
                                                      "ripple": "MuiTouchRipple-ripple",
                                                      "ripplePulsate": "MuiTouchRipple-ripplePulsate",
                                                      "rippleVisible": "MuiTouchRipple-rippleVisible",
                                                      "root": "MuiTouchRipple-root",
                                                    }
                                                  }
                                                >
                                                  <span
                                                    className="MuiTouchRipple-root"
                                                  >
                                                    <TransitionGroup
                                                      childFactory={[Function]}
                                                      component={null}
                                                      exit={true}
                                                    />
                                                  </span>
                                                </ForwardRef(TouchRipple)>
                                              </WithStyles(undefined)>
                                            </NoSsr>
                                          </button>
                                        </ForwardRef(ButtonBase)>
                                      </WithStyles(ForwardRef(ButtonBase))>
                                    </ForwardRef(IconButton)>
                                  </WithStyles(ForwardRef(IconButton))>
                                </div>
                              </div>
                            </ForwardRef(Toolbar)>
                          </WithStyles(ForwardRef(Toolbar))>
                        </header>
                      </ForwardRef(Paper)>
                    </WithStyles(ForwardRef(Paper))>
                  </ForwardRef(AppBar)>
                </WithStyles(ForwardRef(AppBar))>
                <WithStyles(ForwardRef(Menu))
                  anchorEl={null}
                  anchorOrigin={
                    Object {
                      "horizontal": "right",
                      "vertical": "top",
                    }
                  }
                  id="profile-account-menu"
                  keepMounted={true}
                  onClose={[Function]}
                  open={false}
                  transformOrigin={
                    Object {
                      "horizontal": "right",
                      "vertical": "top",
                    }
                  }
                >
                  <ForwardRef(Menu)
                    anchorEl={null}
                    anchorOrigin={
                      Object {
                        "horizontal": "right",
                        "vertical": "top",
                      }
                    }
                    classes={
                      Object {
                        "list": "MuiMenu-list",
                        "paper": "MuiMenu-paper",
                      }
                    }
                    id="profile-account-menu"
                    keepMounted={true}
                    onClose={[Function]}
                    open={false}
                    theme={
                      Object {
                        "breakpoints": Object {
                          "between": [Function],
                          "down": [Function],
                          "keys": Array [
                            "xs",
                            "sm",
                            "md",
                            "lg",
                            "xl",
                          ],
                          "only": [Function],
                          "up": [Function],
                          "values": Object {
                            "lg": 1280,
                            "md": 960,
                            "sm": 600,
                            "xl": 1920,
                            "xs": 0,
                          },
                          "width": [Function],
                        },
                        "direction": "ltr",
                        "mixins": Object {
                          "gutters": [Function],
                          "toolbar": Object {
                            "@media (min-width:0px) and (orientation: landscape)": Object {
                              "minHeight": 48,
                            },
                            "@media (min-width:600px)": Object {
                              "minHeight": 64,
                            },
                            "minHeight": 56,
                          },
                        },
                        "overrides": Object {},
                        "palette": Object {
                          "action": Object {
                            "active": "rgba(0, 0, 0, 0.54)",
                            "disabled": "rgba(0, 0, 0, 0.26)",
                            "disabledBackground": "rgba(0, 0, 0, 0.12)",
                            "hover": "rgba(0, 0, 0, 0.08)",
                            "hoverOpacity": 0.08,
                            "selected": "rgba(0, 0, 0, 0.14)",
                          },
                          "augmentColor": [Function],
                          "background": Object {
                            "default": "#fafafa",
                            "paper": "#fff",
                          },
                          "common": Object {
                            "black": "#000",
                            "white": "#fff",
                          },
                          "contrastThreshold": 3,
                          "divider": "rgba(0, 0, 0, 0.12)",
                          "error": Object {
                            "contrastText": "#fff",
                            "dark": "#d32f2f",
                            "light": "#e57373",
                            "main": "#f44336",
                          },
                          "getContrastText": [Function],
                          "grey": Object {
                            "100": "#f5f5f5",
                            "200": "#eeeeee",
                            "300": "#e0e0e0",
                            "400": "#bdbdbd",
                            "50": "#fafafa",
                            "500": "#9e9e9e",
                            "600": "#757575",
                            "700": "#616161",
                            "800": "#424242",
                            "900": "#212121",
                            "A100": "#d5d5d5",
                            "A200": "#aaaaaa",
                            "A400": "#303030",
                            "A700": "#616161",
                          },
                          "primary": Object {
                            "contrastText": "#fff",
                            "dark": "#303f9f",
                            "light": "#7986cb",
                            "main": "#3f51b5",
                          },
                          "secondary": Object {
                            "contrastText": "#fff",
                            "dark": "#c51162",
                            "light": "#ff4081",
                            "main": "#f50057",
                          },
                          "text": Object {
                            "disabled": "rgba(0, 0, 0, 0.38)",
                            "hint": "rgba(0, 0, 0, 0.38)",
                            "primary": "rgba(0, 0, 0, 0.87)",
                            "secondary": "rgba(0, 0, 0, 0.54)",
                          },
                          "tonalOffset": 0.2,
                          "type": "light",
                        },
                        "props": Object {},
                        "shadows": Array [
                          "none",
                          "0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)",
                          "0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)",
                          "0px 1px 8px 0px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 3px 3px -2px rgba(0,0,0,0.12)",
                          "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
                          "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
                          "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
                          "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
                          "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
                          "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
                          "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
                          "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
                          "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
                          "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
                          "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
                          "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
                          "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
                          "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
                          "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
                          "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
                          "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
                          "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
                          "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
                          "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
                          "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
                        ],
                        "shape": Object {
                          "borderRadius": 4,
                        },
                        "spacing": [Function],
                        "transitions": Object {
                          "create": [Function],
                          "duration": Object {
                            "complex": 375,
                            "enteringScreen": 225,
                            "leavingScreen": 195,
                            "short": 250,
                            "shorter": 200,
                            "shortest": 150,
                            "standard": 300,
                          },
                          "easing": Object {
                            "easeIn": "cubic-bezier(0.4, 0, 1, 1)",
                            "easeInOut": "cubic-bezier(0.4, 0, 0.2, 1)",
                            "easeOut": "cubic-bezier(0.0, 0, 0.2, 1)",
                            "sharp": "cubic-bezier(0.4, 0, 0.6, 1)",
                          },
                          "getAutoHeightDuration": [Function],
                        },
                        "typography": Object {
                          "body1": Object {
                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                            "fontSize": "1rem",
                            "fontWeight": 400,
                            "letterSpacing": "0.00938em",
                            "lineHeight": 1.5,
                          },
                          "body2": Object {
                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                            "fontSize": "0.875rem",
                            "fontWeight": 400,
                            "letterSpacing": "0.01071em",
                            "lineHeight": 1.43,
                          },
                          "button": Object {
                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                            "fontSize": "0.875rem",
                            "fontWeight": 500,
                            "letterSpacing": "0.02857em",
                            "lineHeight": 1.75,
                            "textTransform": "uppercase",
                          },
                          "caption": Object {
                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                            "fontSize": "0.75rem",
                            "fontWeight": 400,
                            "letterSpacing": "0.03333em",
                            "lineHeight": 1.66,
                          },
                          "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                          "fontSize": 14,
                          "fontWeightBold": 700,
                          "fontWeightLight": 300,
                          "fontWeightMedium": 500,
                          "fontWeightRegular": 400,
                          "h1": Object {
                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                            "fontSize": "6rem",
                            "fontWeight": 300,
                            "letterSpacing": "-0.01562em",
                            "lineHeight": 1,
                          },
                          "h2": Object {
                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                            "fontSize": "3.75rem",
                            "fontWeight": 300,
                            "letterSpacing": "-0.00833em",
                            "lineHeight": 1,
                          },
                          "h3": Object {
                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                            "fontSize": "3rem",
                            "fontWeight": 400,
                            "letterSpacing": "0em",
                            "lineHeight": 1.04,
                          },
                          "h4": Object {
                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                            "fontSize": "2.125rem",
                            "fontWeight": 400,
                            "letterSpacing": "0.00735em",
                            "lineHeight": 1.17,
                          },
                          "h5": Object {
                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                            "fontSize": "1.5rem",
                            "fontWeight": 400,
                            "letterSpacing": "0em",
                            "lineHeight": 1.33,
                          },
                          "h6": Object {
                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                            "fontSize": "1.25rem",
                            "fontWeight": 500,
                            "letterSpacing": "0.0075em",
                            "lineHeight": 1.6,
                          },
                          "htmlFontSize": 16,
                          "overline": Object {
                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                            "fontSize": "0.75rem",
                            "fontWeight": 400,
                            "letterSpacing": "0.08333em",
                            "lineHeight": 2.66,
                            "textTransform": "uppercase",
                          },
                          "pxToRem": [Function],
                          "round": [Function],
                          "subtitle1": Object {
                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                            "fontSize": "1rem",
                            "fontWeight": 400,
                            "letterSpacing": "0.00938em",
                            "lineHeight": 1.75,
                          },
                          "subtitle2": Object {
                            "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                            "fontSize": "0.875rem",
                            "fontWeight": 500,
                            "letterSpacing": "0.00714em",
                            "lineHeight": 1.57,
                          },
                        },
                        "zIndex": Object {
                          "appBar": 1100,
                          "drawer": 1200,
                          "mobileStepper": 1000,
                          "modal": 1300,
                          "snackbar": 1400,
                          "tooltip": 1500,
                        },
                      }
                    }
                    transformOrigin={
                      Object {
                        "horizontal": "right",
                        "vertical": "top",
                      }
                    }
                  >
                    <WithStyles(ForwardRef(Popover))
                      PaperProps={
                        Object {
                          "classes": Object {
                            "root": "MuiMenu-paper",
                          },
                        }
                      }
                      anchorEl={null}
                      anchorOrigin={
                        Object {
                          "horizontal": "right",
                          "vertical": "top",
                        }
                      }
                      getContentAnchorEl={[Function]}
                      id="profile-account-menu"
                      keepMounted={true}
                      onClose={[Function]}
                      onEntering={[Function]}
                      open={false}
                      transformOrigin={
                        Object {
                          "horizontal": "right",
                          "vertical": "top",
                        }
                      }
                      transitionDuration="auto"
                    >
                      <ForwardRef(Popover)
                        PaperProps={
                          Object {
                            "classes": Object {
                              "root": "MuiMenu-paper",
                            },
                          }
                        }
                        anchorEl={null}
                        anchorOrigin={
                          Object {
                            "horizontal": "right",
                            "vertical": "top",
                          }
                        }
                        classes={
                          Object {
                            "paper": "MuiPopover-paper",
                          }
                        }
                        getContentAnchorEl={[Function]}
                        id="profile-account-menu"
                        keepMounted={true}
                        onClose={[Function]}
                        onEntering={[Function]}
                        open={false}
                        transformOrigin={
                          Object {
                            "horizontal": "right",
                            "vertical": "top",
                          }
                        }
                        transitionDuration="auto"
                      >
                        <ForwardRef(Modal)
                          BackdropProps={
                            Object {
                              "invisible": true,
                            }
                          }
                          id="profile-account-menu"
                          keepMounted={true}
                          onClose={[Function]}
                          open={false}
                        >
                          <ForwardRef(Portal)
                            disablePortal={false}
                            onRendered={[Function]}
                          >
                            <Portal
                              containerInfo={
                                <body>
                                  <div
                                    aria-hidden="true"
                                    id="profile-account-menu"
                                    role="presentation"
                                    style="position: fixed; z-index: 1300; right: 0px; bottom: 0px; top: 0px; left: 0px; visibility: hidden;"
                                  >
                                    <div
                                      data-test="sentinelStart"
                                      tabindex="0"
                                    />
                                    <div
                                      class="MuiPaper-root MuiMenu-paper MuiPaper-elevation8 MuiPopover-paper MuiPaper-rounded"
                                      role="document"
                                      style="opacity: 0; transform: scale(0.75, 0.5625); visibility: hidden;"
                                      tabindex="-1"
                                    >
                                      <ul
                                        class="MuiList-root MuiMenu-list MuiList-padding"
                                        role="menu"
                                        tabindex="-1"
                                      >
                                        <li
                                          aria-disabled="false"
                                          class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                                          role="menuitem"
                                          tabindex="-1"
                                        >
                                          Sign Out
                                          <span
                                            class="MuiTouchRipple-root"
                                          />
                                        </li>
                                      </ul>
                                    </div>
                                    <div
                                      data-test="sentinelEnd"
                                      tabindex="0"
                                    />
                                  </div>
                                  <div
                                    aria-hidden="true"
                                    id="profile-account-menu"
                                    role="presentation"
                                    style="position: fixed; z-index: 1300; right: 0px; bottom: 0px; top: 0px; left: 0px; visibility: hidden;"
                                  >
                                    <div
                                      data-test="sentinelStart"
                                      tabindex="0"
                                    />
                                    <div
                                      class="MuiPaper-root MuiMenu-paper MuiPaper-elevation8 MuiPopover-paper MuiPaper-rounded"
                                      role="document"
                                      style="opacity: 0; transform: scale(0.75, 0.5625); visibility: hidden;"
                                      tabindex="-1"
                                    >
                                      <ul
                                        class="MuiList-root MuiMenu-list MuiList-padding"
                                        role="menu"
                                        tabindex="-1"
                                      >
                                        <li
                                          aria-disabled="false"
                                          class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                                          role="menuitem"
                                          tabindex="-1"
                                        >
                                          Sign Out
                                          <span
                                            class="MuiTouchRipple-root"
                                          />
                                        </li>
                                      </ul>
                                    </div>
                                    <div
                                      data-test="sentinelEnd"
                                      tabindex="0"
                                    />
                                  </div>
                                  <div
                                    aria-hidden="true"
                                    id="profile-account-menu"
                                    role="presentation"
                                    style="position: fixed; z-index: 1300; right: 0px; bottom: 0px; top: 0px; left: 0px; visibility: hidden;"
                                  >
                                    <div
                                      data-test="sentinelStart"
                                      tabindex="0"
                                    />
                                    <div
                                      class="MuiPaper-root MuiMenu-paper MuiPaper-elevation8 MuiPopover-paper MuiPaper-rounded"
                                      role="document"
                                      style="opacity: 0; transform: scale(0.75, 0.5625); visibility: hidden;"
                                      tabindex="-1"
                                    >
                                      <ul
                                        class="MuiList-root MuiMenu-list MuiList-padding"
                                        role="menu"
                                        tabindex="-1"
                                      >
                                        <li
                                          aria-disabled="false"
                                          class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                                          role="menuitem"
                                          tabindex="-1"
                                        >
                                          Sign Out
                                          <span
                                            class="MuiTouchRipple-root"
                                          />
                                        </li>
                                      </ul>
                                    </div>
                                    <div
                                      data-test="sentinelEnd"
                                      tabindex="0"
                                    />
                                  </div>
                                  <div
                                    aria-hidden="true"
                                    id="profile-account-menu"
                                    role="presentation"
                                    style="position: fixed; z-index: 1300; right: 0px; bottom: 0px; top: 0px; left: 0px; visibility: hidden;"
                                  >
                                    <div
                                      data-test="sentinelStart"
                                      tabindex="0"
                                    />
                                    <div
                                      class="MuiPaper-root MuiMenu-paper MuiPaper-elevation8 MuiPopover-paper MuiPaper-rounded"
                                      role="document"
                                      style="opacity: 0; transform: scale(0.75, 0.5625); visibility: hidden;"
                                      tabindex="-1"
                                    >
                                      <ul
                                        class="MuiList-root MuiMenu-list MuiList-padding"
                                        role="menu"
                                        tabindex="-1"
                                      >
                                        <li
                                          aria-disabled="false"
                                          class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                                          role="menuitem"
                                          tabindex="-1"
                                        >
                                          Sign Out
                                          <span
                                            class="MuiTouchRipple-root"
                                          />
                                        </li>
                                      </ul>
                                    </div>
                                    <div
                                      data-test="sentinelEnd"
                                      tabindex="0"
                                    />
                                  </div>
                                  <div
                                    aria-hidden="true"
                                    id="profile-account-menu"
                                    role="presentation"
                                    style="position: fixed; z-index: 1300; right: 0px; bottom: 0px; top: 0px; left: 0px; visibility: hidden;"
                                  >
                                    <div
                                      data-test="sentinelStart"
                                      tabindex="0"
                                    />
                                    <div
                                      class="MuiPaper-root MuiMenu-paper MuiPaper-elevation8 MuiPopover-paper MuiPaper-rounded"
                                      role="document"
                                      style="opacity: 0; transform: scale(0.75, 0.5625); visibility: hidden;"
                                      tabindex="-1"
                                    >
                                      <ul
                                        class="MuiList-root MuiMenu-list MuiList-padding"
                                        role="menu"
                                        tabindex="-1"
                                      >
                                        <li
                                          aria-disabled="false"
                                          class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                                          role="menuitem"
                                          tabindex="-1"
                                        >
                                          Sign Out
                                          <span
                                            class="MuiTouchRipple-root"
                                          />
                                        </li>
                                      </ul>
                                    </div>
                                    <div
                                      data-test="sentinelEnd"
                                      tabindex="0"
                                    />
                                  </div>
                                  <div
                                    aria-hidden="true"
                                    id="profile-account-menu"
                                    role="presentation"
                                    style="position: fixed; z-index: 1300; right: 0px; bottom: 0px; top: 0px; left: 0px; visibility: hidden;"
                                  >
                                    <div
                                      data-test="sentinelStart"
                                      tabindex="0"
                                    />
                                    <div
                                      class="MuiPaper-root MuiMenu-paper MuiPaper-elevation8 MuiPopover-paper MuiPaper-rounded"
                                      role="document"
                                      style="opacity: 0; transform: scale(0.75, 0.5625); visibility: hidden;"
                                      tabindex="-1"
                                    >
                                      <ul
                                        class="MuiList-root MuiMenu-list MuiList-padding"
                                        role="menu"
                                        tabindex="-1"
                                      >
                                        <li
                                          aria-disabled="false"
                                          class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                                          role="menuitem"
                                          tabindex="-1"
                                        >
                                          Sign Out
                                          <span
                                            class="MuiTouchRipple-root"
                                          />
                                        </li>
                                      </ul>
                                    </div>
                                    <div
                                      data-test="sentinelEnd"
                                      tabindex="0"
                                    />
                                  </div>
                                </body>
                              }
                            >
                              <div
                                id="profile-account-menu"
                                onKeyDown={[Function]}
                                role="presentation"
                                style={
                                  Object {
                                    "bottom": 0,
                                    "left": 0,
                                    "position": "fixed",
                                    "right": 0,
                                    "top": 0,
                                    "visibility": "hidden",
                                    "zIndex": 1300,
                                  }
                                }
                              >
                                <ForwardRef(SimpleBackdrop)
                                  invisible={true}
                                  onClick={[Function]}
                                  open={false}
                                />
                                <TrapFocus
                                  disableAutoFocus={false}
                                  disableEnforceFocus={false}
                                  disableRestoreFocus={false}
                                  getDoc={[Function]}
                                  isEnabled={[Function]}
                                  open={false}
                                >
                                  <div
                                    data-test="sentinelStart"
                                    tabIndex={0}
                                  />
                                  <ForwardRef(Grow)
                                    appear={true}
                                    in={false}
                                    onEnter={[Function]}
                                    onEntering={[Function]}
                                    onExited={[Function]}
                                    role="document"
                                    tabIndex="-1"
                                    timeout="auto"
                                  >
                                    <Transition
                                      addEndListener={[Function]}
                                      appear={true}
                                      enter={true}
                                      exit={true}
                                      in={false}
                                      mountOnEnter={false}
                                      onEnter={[Function]}
                                      onEntered={[Function]}
                                      onEntering={[Function]}
                                      onExit={[Function]}
                                      onExited={[Function]}
                                      onExiting={[Function]}
                                      role="document"
                                      tabIndex="-1"
                                      timeout={null}
                                      unmountOnExit={false}
                                    >
                                      <WithStyles(ForwardRef(Paper))
                                        className="MuiPopover-paper"
                                        classes={
                                          Object {
                                            "root": "MuiMenu-paper",
                                          }
                                        }
                                        elevation={8}
                                        role="document"
                                        style={
                                          Object {
                                            "opacity": 0,
                                            "transform": "scale(0.75, 0.5625)",
                                            "visibility": "hidden",
                                          }
                                        }
                                        tabIndex="-1"
                                      >
                                        <ForwardRef(Paper)
                                          className="MuiPopover-paper"
                                          classes={
                                            Object {
                                              "elevation0": "MuiPaper-elevation0",
                                              "elevation1": "MuiPaper-elevation1",
                                              "elevation10": "MuiPaper-elevation10",
                                              "elevation11": "MuiPaper-elevation11",
                                              "elevation12": "MuiPaper-elevation12",
                                              "elevation13": "MuiPaper-elevation13",
                                              "elevation14": "MuiPaper-elevation14",
                                              "elevation15": "MuiPaper-elevation15",
                                              "elevation16": "MuiPaper-elevation16",
                                              "elevation17": "MuiPaper-elevation17",
                                              "elevation18": "MuiPaper-elevation18",
                                              "elevation19": "MuiPaper-elevation19",
                                              "elevation2": "MuiPaper-elevation2",
                                              "elevation20": "MuiPaper-elevation20",
                                              "elevation21": "MuiPaper-elevation21",
                                              "elevation22": "MuiPaper-elevation22",
                                              "elevation23": "MuiPaper-elevation23",
                                              "elevation24": "MuiPaper-elevation24",
                                              "elevation3": "MuiPaper-elevation3",
                                              "elevation4": "MuiPaper-elevation4",
                                              "elevation5": "MuiPaper-elevation5",
                                              "elevation6": "MuiPaper-elevation6",
                                              "elevation7": "MuiPaper-elevation7",
                                              "elevation8": "MuiPaper-elevation8",
                                              "elevation9": "MuiPaper-elevation9",
                                              "root": "MuiPaper-root MuiMenu-paper",
                                              "rounded": "MuiPaper-rounded",
                                            }
                                          }
                                          elevation={8}
                                          role="document"
                                          style={
                                            Object {
                                              "opacity": 0,
                                              "transform": "scale(0.75, 0.5625)",
                                              "visibility": "hidden",
                                            }
                                          }
                                          tabIndex="-1"
                                        >
                                          <div
                                            className="MuiPaper-root MuiMenu-paper MuiPaper-elevation8 MuiPopover-paper MuiPaper-rounded"
                                            role="document"
                                            style={
                                              Object {
                                                "opacity": 0,
                                                "transform": "scale(0.75, 0.5625)",
                                                "visibility": "hidden",
                                              }
                                            }
                                            tabIndex="-1"
                                          >
                                            <ForwardRef(MenuList)
                                              actions={
                                                Object {
                                                  "current": Object {
                                                    "adjustStyleForScrollbar": [Function],
                                                  },
                                                }
                                              }
                                              autoFocus={false}
                                              className="MuiMenu-list"
                                              onKeyDown={[Function]}
                                            >
                                              <WithStyles(ForwardRef(List))
                                                className="MuiMenu-list"
                                                onKeyDown={[Function]}
                                                role="menu"
                                                tabIndex={-1}
                                              >
                                                <ForwardRef(List)
                                                  className="MuiMenu-list"
                                                  classes={
                                                    Object {
                                                      "dense": "MuiList-dense",
                                                      "padding": "MuiList-padding",
                                                      "root": "MuiList-root",
                                                      "subheader": "MuiList-subheader",
                                                    }
                                                  }
                                                  onKeyDown={[Function]}
                                                  role="menu"
                                                  tabIndex={-1}
                                                >
                                                  <ul
                                                    className="MuiList-root MuiMenu-list MuiList-padding"
                                                    onKeyDown={[Function]}
                                                    role="menu"
                                                    tabIndex={-1}
                                                  >
                                                    <WithStyles(ForwardRef(MenuItem))
                                                      key=".0"
                                                      onClick={[Function]}
                                                    >
                                                      <ForwardRef(MenuItem)
                                                        classes={
                                                          Object {
                                                            "dense": "MuiMenuItem-dense",
                                                            "gutters": "MuiMenuItem-gutters",
                                                            "root": "MuiMenuItem-root",
                                                            "selected": "Mui-selected",
                                                          }
                                                        }
                                                        onClick={[Function]}
                                                      >
                                                        <WithStyles(ForwardRef(ListItem))
                                                          button={true}
                                                          className="MuiMenuItem-root MuiMenuItem-gutters"
                                                          classes={
                                                            Object {
                                                              "dense": "MuiMenuItem-dense",
                                                            }
                                                          }
                                                          component="li"
                                                          disableGutters={false}
                                                          onClick={[Function]}
                                                          role="menuitem"
                                                          tabIndex={-1}
                                                        >
                                                          <ForwardRef(ListItem)
                                                            button={true}
                                                            className="MuiMenuItem-root MuiMenuItem-gutters"
                                                            classes={
                                                              Object {
                                                                "alignItemsFlexStart": "MuiListItem-alignItemsFlexStart",
                                                                "button": "MuiListItem-button",
                                                                "container": "MuiListItem-container",
                                                                "dense": "MuiListItem-dense MuiMenuItem-dense",
                                                                "disabled": "Mui-disabled",
                                                                "divider": "MuiListItem-divider",
                                                                "focusVisible": "Mui-focusVisible",
                                                                "gutters": "MuiListItem-gutters",
                                                                "root": "MuiListItem-root",
                                                                "secondaryAction": "MuiListItem-secondaryAction",
                                                                "selected": "Mui-selected",
                                                              }
                                                            }
                                                            component="li"
                                                            disableGutters={false}
                                                            onClick={[Function]}
                                                            role="menuitem"
                                                            tabIndex={-1}
                                                          >
                                                            <WithStyles(ForwardRef(ButtonBase))
                                                              className="MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                                                              component="li"
                                                              disabled={false}
                                                              focusVisibleClassName="Mui-focusVisible"
                                                              onClick={[Function]}
                                                              role="menuitem"
                                                              tabIndex={-1}
                                                            >
                                                              <ForwardRef(ButtonBase)
                                                                className="MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                                                                classes={
                                                                  Object {
                                                                    "disabled": "Mui-disabled",
                                                                    "focusVisible": "Mui-focusVisible",
                                                                    "root": "MuiButtonBase-root",
                                                                  }
                                                                }
                                                                component="li"
                                                                disabled={false}
                                                                focusVisibleClassName="Mui-focusVisible"
                                                                onClick={[Function]}
                                                                role="menuitem"
                                                                tabIndex={-1}
                                                              >
                                                                <li
                                                                  aria-disabled={false}
                                                                  className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
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
                                                                  role="menuitem"
                                                                  tabIndex={-1}
                                                                >
                                                                  Sign Out
                                                                  <NoSsr>
                                                                    <WithStyles(undefined)
                                                                      center={false}
                                                                    >
                                                                      <ForwardRef(TouchRipple)
                                                                        center={false}
                                                                        classes={
                                                                          Object {
                                                                            "child": "MuiTouchRipple-child",
                                                                            "childLeaving": "MuiTouchRipple-childLeaving",
                                                                            "childPulsate": "MuiTouchRipple-childPulsate",
                                                                            "ripple": "MuiTouchRipple-ripple",
                                                                            "ripplePulsate": "MuiTouchRipple-ripplePulsate",
                                                                            "rippleVisible": "MuiTouchRipple-rippleVisible",
                                                                            "root": "MuiTouchRipple-root",
                                                                          }
                                                                        }
                                                                      >
                                                                        <span
                                                                          className="MuiTouchRipple-root"
                                                                        >
                                                                          <TransitionGroup
                                                                            childFactory={[Function]}
                                                                            component={null}
                                                                            exit={true}
                                                                          />
                                                                        </span>
                                                                      </ForwardRef(TouchRipple)>
                                                                    </WithStyles(undefined)>
                                                                  </NoSsr>
                                                                </li>
                                                              </ForwardRef(ButtonBase)>
                                                            </WithStyles(ForwardRef(ButtonBase))>
                                                          </ForwardRef(ListItem)>
                                                        </WithStyles(ForwardRef(ListItem))>
                                                      </ForwardRef(MenuItem)>
                                                    </WithStyles(ForwardRef(MenuItem))>
                                                  </ul>
                                                </ForwardRef(List)>
                                              </WithStyles(ForwardRef(List))>
                                            </ForwardRef(MenuList)>
                                          </div>
                                        </ForwardRef(Paper)>
                                      </WithStyles(ForwardRef(Paper))>
                                    </Transition>
                                  </ForwardRef(Grow)>
                                  <div
                                    data-test="sentinelEnd"
                                    tabIndex={0}
                                  />
                                </TrapFocus>
                              </div>
                            </Portal>
                          </ForwardRef(Portal)>
                        </ForwardRef(Modal)>
                      </ForwardRef(Popover)>
                    </WithStyles(ForwardRef(Popover))>
                  </ForwardRef(Menu)>
                </WithStyles(ForwardRef(Menu))>
              </div>
            </HeaderAppBar>
            <section
              className="dashboard__cont"
            >
              <WithStyles(ForwardRef(Container))
                maxWidth="lg"
              >
                <ForwardRef(Container)
                  classes={
                    Object {
                      "fixed": "MuiContainer-fixed",
                      "maxWidthLg": "MuiContainer-maxWidthLg",
                      "maxWidthMd": "MuiContainer-maxWidthMd",
                      "maxWidthSm": "MuiContainer-maxWidthSm",
                      "maxWidthXl": "MuiContainer-maxWidthXl",
                      "maxWidthXs": "MuiContainer-maxWidthXs",
                      "root": "MuiContainer-root",
                    }
                  }
                  maxWidth="lg"
                >
                  <div
                    className="MuiContainer-root MuiContainer-maxWidthLg"
                  >
                    <WithStyles(ForwardRef(Grid))
                      container={true}
                      justify="center"
                      spacing={3}
                    >
                      <ForwardRef(Grid)
                        classes={
                          Object {
                            "align-content-xs-center": "MuiGrid-align-content-xs-center",
                            "align-content-xs-flex-end": "MuiGrid-align-content-xs-flex-end",
                            "align-content-xs-flex-start": "MuiGrid-align-content-xs-flex-start",
                            "align-content-xs-space-around": "MuiGrid-align-content-xs-space-around",
                            "align-content-xs-space-between": "MuiGrid-align-content-xs-space-between",
                            "align-items-xs-baseline": "MuiGrid-align-items-xs-baseline",
                            "align-items-xs-center": "MuiGrid-align-items-xs-center",
                            "align-items-xs-flex-end": "MuiGrid-align-items-xs-flex-end",
                            "align-items-xs-flex-start": "MuiGrid-align-items-xs-flex-start",
                            "container": "MuiGrid-container",
                            "direction-xs-column": "MuiGrid-direction-xs-column",
                            "direction-xs-column-reverse": "MuiGrid-direction-xs-column-reverse",
                            "direction-xs-row-reverse": "MuiGrid-direction-xs-row-reverse",
                            "grid-lg-1": "MuiGrid-grid-lg-1",
                            "grid-lg-10": "MuiGrid-grid-lg-10",
                            "grid-lg-11": "MuiGrid-grid-lg-11",
                            "grid-lg-12": "MuiGrid-grid-lg-12",
                            "grid-lg-2": "MuiGrid-grid-lg-2",
                            "grid-lg-3": "MuiGrid-grid-lg-3",
                            "grid-lg-4": "MuiGrid-grid-lg-4",
                            "grid-lg-5": "MuiGrid-grid-lg-5",
                            "grid-lg-6": "MuiGrid-grid-lg-6",
                            "grid-lg-7": "MuiGrid-grid-lg-7",
                            "grid-lg-8": "MuiGrid-grid-lg-8",
                            "grid-lg-9": "MuiGrid-grid-lg-9",
                            "grid-lg-auto": "MuiGrid-grid-lg-auto",
                            "grid-lg-true": "MuiGrid-grid-lg-true",
                            "grid-md-1": "MuiGrid-grid-md-1",
                            "grid-md-10": "MuiGrid-grid-md-10",
                            "grid-md-11": "MuiGrid-grid-md-11",
                            "grid-md-12": "MuiGrid-grid-md-12",
                            "grid-md-2": "MuiGrid-grid-md-2",
                            "grid-md-3": "MuiGrid-grid-md-3",
                            "grid-md-4": "MuiGrid-grid-md-4",
                            "grid-md-5": "MuiGrid-grid-md-5",
                            "grid-md-6": "MuiGrid-grid-md-6",
                            "grid-md-7": "MuiGrid-grid-md-7",
                            "grid-md-8": "MuiGrid-grid-md-8",
                            "grid-md-9": "MuiGrid-grid-md-9",
                            "grid-md-auto": "MuiGrid-grid-md-auto",
                            "grid-md-true": "MuiGrid-grid-md-true",
                            "grid-sm-1": "MuiGrid-grid-sm-1",
                            "grid-sm-10": "MuiGrid-grid-sm-10",
                            "grid-sm-11": "MuiGrid-grid-sm-11",
                            "grid-sm-12": "MuiGrid-grid-sm-12",
                            "grid-sm-2": "MuiGrid-grid-sm-2",
                            "grid-sm-3": "MuiGrid-grid-sm-3",
                            "grid-sm-4": "MuiGrid-grid-sm-4",
                            "grid-sm-5": "MuiGrid-grid-sm-5",
                            "grid-sm-6": "MuiGrid-grid-sm-6",
                            "grid-sm-7": "MuiGrid-grid-sm-7",
                            "grid-sm-8": "MuiGrid-grid-sm-8",
                            "grid-sm-9": "MuiGrid-grid-sm-9",
                            "grid-sm-auto": "MuiGrid-grid-sm-auto",
                            "grid-sm-true": "MuiGrid-grid-sm-true",
                            "grid-xl-1": "MuiGrid-grid-xl-1",
                            "grid-xl-10": "MuiGrid-grid-xl-10",
                            "grid-xl-11": "MuiGrid-grid-xl-11",
                            "grid-xl-12": "MuiGrid-grid-xl-12",
                            "grid-xl-2": "MuiGrid-grid-xl-2",
                            "grid-xl-3": "MuiGrid-grid-xl-3",
                            "grid-xl-4": "MuiGrid-grid-xl-4",
                            "grid-xl-5": "MuiGrid-grid-xl-5",
                            "grid-xl-6": "MuiGrid-grid-xl-6",
                            "grid-xl-7": "MuiGrid-grid-xl-7",
                            "grid-xl-8": "MuiGrid-grid-xl-8",
                            "grid-xl-9": "MuiGrid-grid-xl-9",
                            "grid-xl-auto": "MuiGrid-grid-xl-auto",
                            "grid-xl-true": "MuiGrid-grid-xl-true",
                            "grid-xs-1": "MuiGrid-grid-xs-1",
                            "grid-xs-10": "MuiGrid-grid-xs-10",
                            "grid-xs-11": "MuiGrid-grid-xs-11",
                            "grid-xs-12": "MuiGrid-grid-xs-12",
                            "grid-xs-2": "MuiGrid-grid-xs-2",
                            "grid-xs-3": "MuiGrid-grid-xs-3",
                            "grid-xs-4": "MuiGrid-grid-xs-4",
                            "grid-xs-5": "MuiGrid-grid-xs-5",
                            "grid-xs-6": "MuiGrid-grid-xs-6",
                            "grid-xs-7": "MuiGrid-grid-xs-7",
                            "grid-xs-8": "MuiGrid-grid-xs-8",
                            "grid-xs-9": "MuiGrid-grid-xs-9",
                            "grid-xs-auto": "MuiGrid-grid-xs-auto",
                            "grid-xs-true": "MuiGrid-grid-xs-true",
                            "item": "MuiGrid-item",
                            "justify-xs-center": "MuiGrid-justify-xs-center",
                            "justify-xs-flex-end": "MuiGrid-justify-xs-flex-end",
                            "justify-xs-space-around": "MuiGrid-justify-xs-space-around",
                            "justify-xs-space-between": "MuiGrid-justify-xs-space-between",
                            "justify-xs-space-evenly": "MuiGrid-justify-xs-space-evenly",
                            "root": "MuiGrid-root",
                            "spacing-xs-1": "MuiGrid-spacing-xs-1",
                            "spacing-xs-10": "MuiGrid-spacing-xs-10",
                            "spacing-xs-2": "MuiGrid-spacing-xs-2",
                            "spacing-xs-3": "MuiGrid-spacing-xs-3",
                            "spacing-xs-4": "MuiGrid-spacing-xs-4",
                            "spacing-xs-5": "MuiGrid-spacing-xs-5",
                            "spacing-xs-6": "MuiGrid-spacing-xs-6",
                            "spacing-xs-7": "MuiGrid-spacing-xs-7",
                            "spacing-xs-8": "MuiGrid-spacing-xs-8",
                            "spacing-xs-9": "MuiGrid-spacing-xs-9",
                            "wrap-xs-nowrap": "MuiGrid-wrap-xs-nowrap",
                            "wrap-xs-wrap-reverse": "MuiGrid-wrap-xs-wrap-reverse",
                            "zeroMinWidth": "MuiGrid-zeroMinWidth",
                          }
                        }
                        container={true}
                        justify="center"
                        spacing={3}
                      >
                        <div
                          className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 MuiGrid-justify-xs-center"
                        />
                      </ForwardRef(Grid)>
                    </WithStyles(ForwardRef(Grid))>
                  </div>
                </ForwardRef(Container)>
              </WithStyles(ForwardRef(Container))>
            </section>
            <NotificationBar
              dismissAfter={5000}
              msg=""
              onDimiss={[Function]}
              showNotification={false}
              variant=""
            >
              <div>
                <WithStyles(ForwardRef(Snackbar))
                  anchorOrigin={
                    Object {
                      "horizontal": "center",
                      "vertical": "bottom",
                    }
                  }
                  autoHideDuration={5000}
                  onClose={[Function]}
                  open={false}
                >
                  <ForwardRef(Snackbar)
                    anchorOrigin={
                      Object {
                        "horizontal": "center",
                        "vertical": "bottom",
                      }
                    }
                    autoHideDuration={5000}
                    classes={
                      Object {
                        "anchorOriginBottomCenter": "MuiSnackbar-anchorOriginBottomCenter",
                        "anchorOriginBottomLeft": "MuiSnackbar-anchorOriginBottomLeft",
                        "anchorOriginBottomRight": "MuiSnackbar-anchorOriginBottomRight",
                        "anchorOriginTopCenter": "MuiSnackbar-anchorOriginTopCenter",
                        "anchorOriginTopLeft": "MuiSnackbar-anchorOriginTopLeft",
                        "anchorOriginTopRight": "MuiSnackbar-anchorOriginTopRight",
                        "root": "MuiSnackbar-root",
                      }
                    }
                    onClose={[Function]}
                    open={false}
                  />
                </WithStyles(ForwardRef(Snackbar))>
              </div>
            </NotificationBar>
          </div>
        </Dashboard>
    `);
});

it("Dashboard renders correctly - Verify timer after finishing count down", () => {
  const wrapper = mount(<Dashboard></Dashboard>);
  const dronesStationCount = 3;
  const { quads: drones } = allDrones;
  const allStations = UtilityHelper.divideDronesAcrossStations(
    drones,
    dronesStationCount
  );

  const stationId = 0;
  const selectedDrone = allStations[stationId][0];
  selectedDrone.maxFlightTime = "0min"; // simulating end of countdown timer

  wrapper
    .instance()
    .setState({ ...wrapper.instance().state, stations: { ...allStations } }); // initialise the stations with drones

  wrapper.instance()._currentUser = {
    emailId: "xyz@gmail.com",
    firstName: "Manoj",
    lastName: "Lakshman",
    phoneNumber: "912",
    isBanned: false
  };

  //rent a drone
  wrapper.instance().rentDrone(selectedDrone, stationId);

  expect(EnzymeToJson(wrapper)).toMatchInlineSnapshot(`
    <Dashboard>
      <div
        className="dashboard"
      >
        <HeaderAppBar
          countDownValue={0}
          isUserBanned={false}
          loggedInUser=", "
          onDroneReturn={[Function]}
        >
          <div
            className="header-app-bar"
          >
            <WithStyles(ForwardRef(AppBar))
              position="static"
            >
              <ForwardRef(AppBar)
                classes={
                  Object {
                    "colorDefault": "MuiAppBar-colorDefault",
                    "colorPrimary": "MuiAppBar-colorPrimary",
                    "colorSecondary": "MuiAppBar-colorSecondary",
                    "positionAbsolute": "MuiAppBar-positionAbsolute",
                    "positionFixed": "MuiAppBar-positionFixed",
                    "positionRelative": "MuiAppBar-positionRelative",
                    "positionStatic": "MuiAppBar-positionStatic",
                    "positionSticky": "MuiAppBar-positionSticky",
                    "root": "MuiAppBar-root",
                  }
                }
                position="static"
              >
                <WithStyles(ForwardRef(Paper))
                  className="MuiAppBar-root MuiAppBar-positionStatic MuiAppBar-colorPrimary"
                  component="header"
                  elevation={4}
                  square={true}
                >
                  <ForwardRef(Paper)
                    className="MuiAppBar-root MuiAppBar-positionStatic MuiAppBar-colorPrimary"
                    classes={
                      Object {
                        "elevation0": "MuiPaper-elevation0",
                        "elevation1": "MuiPaper-elevation1",
                        "elevation10": "MuiPaper-elevation10",
                        "elevation11": "MuiPaper-elevation11",
                        "elevation12": "MuiPaper-elevation12",
                        "elevation13": "MuiPaper-elevation13",
                        "elevation14": "MuiPaper-elevation14",
                        "elevation15": "MuiPaper-elevation15",
                        "elevation16": "MuiPaper-elevation16",
                        "elevation17": "MuiPaper-elevation17",
                        "elevation18": "MuiPaper-elevation18",
                        "elevation19": "MuiPaper-elevation19",
                        "elevation2": "MuiPaper-elevation2",
                        "elevation20": "MuiPaper-elevation20",
                        "elevation21": "MuiPaper-elevation21",
                        "elevation22": "MuiPaper-elevation22",
                        "elevation23": "MuiPaper-elevation23",
                        "elevation24": "MuiPaper-elevation24",
                        "elevation3": "MuiPaper-elevation3",
                        "elevation4": "MuiPaper-elevation4",
                        "elevation5": "MuiPaper-elevation5",
                        "elevation6": "MuiPaper-elevation6",
                        "elevation7": "MuiPaper-elevation7",
                        "elevation8": "MuiPaper-elevation8",
                        "elevation9": "MuiPaper-elevation9",
                        "root": "MuiPaper-root",
                        "rounded": "MuiPaper-rounded",
                      }
                    }
                    component="header"
                    elevation={4}
                    square={true}
                  >
                    <header
                      className="MuiPaper-root MuiPaper-elevation4 MuiAppBar-root MuiAppBar-positionStatic MuiAppBar-colorPrimary"
                    >
                      <WithStyles(ForwardRef(Toolbar))>
                        <ForwardRef(Toolbar)
                          classes={
                            Object {
                              "dense": "MuiToolbar-dense",
                              "gutters": "MuiToolbar-gutters",
                              "regular": "MuiToolbar-regular",
                              "root": "MuiToolbar-root",
                            }
                          }
                        >
                          <div
                            className="MuiToolbar-root MuiToolbar-regular MuiToolbar-gutters"
                          >
                            <WithStyles(ForwardRef(Typography))
                              className="makeStyles-title-2"
                              noWrap={true}
                              variant="h6"
                            >
                              <ForwardRef(Typography)
                                className="makeStyles-title-2"
                                classes={
                                  Object {
                                    "alignCenter": "MuiTypography-alignCenter",
                                    "alignJustify": "MuiTypography-alignJustify",
                                    "alignLeft": "MuiTypography-alignLeft",
                                    "alignRight": "MuiTypography-alignRight",
                                    "body1": "MuiTypography-body1",
                                    "body2": "MuiTypography-body2",
                                    "button": "MuiTypography-button",
                                    "caption": "MuiTypography-caption",
                                    "colorError": "MuiTypography-colorError",
                                    "colorInherit": "MuiTypography-colorInherit",
                                    "colorPrimary": "MuiTypography-colorPrimary",
                                    "colorSecondary": "MuiTypography-colorSecondary",
                                    "colorTextPrimary": "MuiTypography-colorTextPrimary",
                                    "colorTextSecondary": "MuiTypography-colorTextSecondary",
                                    "displayBlock": "MuiTypography-displayBlock",
                                    "displayInline": "MuiTypography-displayInline",
                                    "gutterBottom": "MuiTypography-gutterBottom",
                                    "h1": "MuiTypography-h1",
                                    "h2": "MuiTypography-h2",
                                    "h3": "MuiTypography-h3",
                                    "h4": "MuiTypography-h4",
                                    "h5": "MuiTypography-h5",
                                    "h6": "MuiTypography-h6",
                                    "noWrap": "MuiTypography-noWrap",
                                    "overline": "MuiTypography-overline",
                                    "paragraph": "MuiTypography-paragraph",
                                    "root": "MuiTypography-root",
                                    "srOnly": "MuiTypography-srOnly",
                                    "subtitle1": "MuiTypography-subtitle1",
                                    "subtitle2": "MuiTypography-subtitle2",
                                  }
                                }
                                noWrap={true}
                                theme={
                                  Object {
                                    "breakpoints": Object {
                                      "between": [Function],
                                      "down": [Function],
                                      "keys": Array [
                                        "xs",
                                        "sm",
                                        "md",
                                        "lg",
                                        "xl",
                                      ],
                                      "only": [Function],
                                      "up": [Function],
                                      "values": Object {
                                        "lg": 1280,
                                        "md": 960,
                                        "sm": 600,
                                        "xl": 1920,
                                        "xs": 0,
                                      },
                                      "width": [Function],
                                    },
                                    "direction": "ltr",
                                    "mixins": Object {
                                      "gutters": [Function],
                                      "toolbar": Object {
                                        "@media (min-width:0px) and (orientation: landscape)": Object {
                                          "minHeight": 48,
                                        },
                                        "@media (min-width:600px)": Object {
                                          "minHeight": 64,
                                        },
                                        "minHeight": 56,
                                      },
                                    },
                                    "overrides": Object {},
                                    "palette": Object {
                                      "action": Object {
                                        "active": "rgba(0, 0, 0, 0.54)",
                                        "disabled": "rgba(0, 0, 0, 0.26)",
                                        "disabledBackground": "rgba(0, 0, 0, 0.12)",
                                        "hover": "rgba(0, 0, 0, 0.08)",
                                        "hoverOpacity": 0.08,
                                        "selected": "rgba(0, 0, 0, 0.14)",
                                      },
                                      "augmentColor": [Function],
                                      "background": Object {
                                        "default": "#fafafa",
                                        "paper": "#fff",
                                      },
                                      "common": Object {
                                        "black": "#000",
                                        "white": "#fff",
                                      },
                                      "contrastThreshold": 3,
                                      "divider": "rgba(0, 0, 0, 0.12)",
                                      "error": Object {
                                        "contrastText": "#fff",
                                        "dark": "#d32f2f",
                                        "light": "#e57373",
                                        "main": "#f44336",
                                      },
                                      "getContrastText": [Function],
                                      "grey": Object {
                                        "100": "#f5f5f5",
                                        "200": "#eeeeee",
                                        "300": "#e0e0e0",
                                        "400": "#bdbdbd",
                                        "50": "#fafafa",
                                        "500": "#9e9e9e",
                                        "600": "#757575",
                                        "700": "#616161",
                                        "800": "#424242",
                                        "900": "#212121",
                                        "A100": "#d5d5d5",
                                        "A200": "#aaaaaa",
                                        "A400": "#303030",
                                        "A700": "#616161",
                                      },
                                      "primary": Object {
                                        "contrastText": "#fff",
                                        "dark": "#303f9f",
                                        "light": "#7986cb",
                                        "main": "#3f51b5",
                                      },
                                      "secondary": Object {
                                        "contrastText": "#fff",
                                        "dark": "#c51162",
                                        "light": "#ff4081",
                                        "main": "#f50057",
                                      },
                                      "text": Object {
                                        "disabled": "rgba(0, 0, 0, 0.38)",
                                        "hint": "rgba(0, 0, 0, 0.38)",
                                        "primary": "rgba(0, 0, 0, 0.87)",
                                        "secondary": "rgba(0, 0, 0, 0.54)",
                                      },
                                      "tonalOffset": 0.2,
                                      "type": "light",
                                    },
                                    "props": Object {},
                                    "shadows": Array [
                                      "none",
                                      "0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)",
                                      "0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)",
                                      "0px 1px 8px 0px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 3px 3px -2px rgba(0,0,0,0.12)",
                                      "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
                                      "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
                                      "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
                                      "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
                                      "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
                                      "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
                                      "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
                                      "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
                                      "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
                                      "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
                                      "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
                                      "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
                                      "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
                                      "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
                                      "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
                                      "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
                                      "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
                                      "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
                                      "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
                                      "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
                                      "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
                                    ],
                                    "shape": Object {
                                      "borderRadius": 4,
                                    },
                                    "spacing": [Function],
                                    "transitions": Object {
                                      "create": [Function],
                                      "duration": Object {
                                        "complex": 375,
                                        "enteringScreen": 225,
                                        "leavingScreen": 195,
                                        "short": 250,
                                        "shorter": 200,
                                        "shortest": 150,
                                        "standard": 300,
                                      },
                                      "easing": Object {
                                        "easeIn": "cubic-bezier(0.4, 0, 1, 1)",
                                        "easeInOut": "cubic-bezier(0.4, 0, 0.2, 1)",
                                        "easeOut": "cubic-bezier(0.0, 0, 0.2, 1)",
                                        "sharp": "cubic-bezier(0.4, 0, 0.6, 1)",
                                      },
                                      "getAutoHeightDuration": [Function],
                                    },
                                    "typography": Object {
                                      "body1": Object {
                                        "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                        "fontSize": "1rem",
                                        "fontWeight": 400,
                                        "letterSpacing": "0.00938em",
                                        "lineHeight": 1.5,
                                      },
                                      "body2": Object {
                                        "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                        "fontSize": "0.875rem",
                                        "fontWeight": 400,
                                        "letterSpacing": "0.01071em",
                                        "lineHeight": 1.43,
                                      },
                                      "button": Object {
                                        "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                        "fontSize": "0.875rem",
                                        "fontWeight": 500,
                                        "letterSpacing": "0.02857em",
                                        "lineHeight": 1.75,
                                        "textTransform": "uppercase",
                                      },
                                      "caption": Object {
                                        "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                        "fontSize": "0.75rem",
                                        "fontWeight": 400,
                                        "letterSpacing": "0.03333em",
                                        "lineHeight": 1.66,
                                      },
                                      "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                      "fontSize": 14,
                                      "fontWeightBold": 700,
                                      "fontWeightLight": 300,
                                      "fontWeightMedium": 500,
                                      "fontWeightRegular": 400,
                                      "h1": Object {
                                        "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                        "fontSize": "6rem",
                                        "fontWeight": 300,
                                        "letterSpacing": "-0.01562em",
                                        "lineHeight": 1,
                                      },
                                      "h2": Object {
                                        "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                        "fontSize": "3.75rem",
                                        "fontWeight": 300,
                                        "letterSpacing": "-0.00833em",
                                        "lineHeight": 1,
                                      },
                                      "h3": Object {
                                        "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                        "fontSize": "3rem",
                                        "fontWeight": 400,
                                        "letterSpacing": "0em",
                                        "lineHeight": 1.04,
                                      },
                                      "h4": Object {
                                        "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                        "fontSize": "2.125rem",
                                        "fontWeight": 400,
                                        "letterSpacing": "0.00735em",
                                        "lineHeight": 1.17,
                                      },
                                      "h5": Object {
                                        "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                        "fontSize": "1.5rem",
                                        "fontWeight": 400,
                                        "letterSpacing": "0em",
                                        "lineHeight": 1.33,
                                      },
                                      "h6": Object {
                                        "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                        "fontSize": "1.25rem",
                                        "fontWeight": 500,
                                        "letterSpacing": "0.0075em",
                                        "lineHeight": 1.6,
                                      },
                                      "htmlFontSize": 16,
                                      "overline": Object {
                                        "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                        "fontSize": "0.75rem",
                                        "fontWeight": 400,
                                        "letterSpacing": "0.08333em",
                                        "lineHeight": 2.66,
                                        "textTransform": "uppercase",
                                      },
                                      "pxToRem": [Function],
                                      "round": [Function],
                                      "subtitle1": Object {
                                        "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                        "fontSize": "1rem",
                                        "fontWeight": 400,
                                        "letterSpacing": "0.00938em",
                                        "lineHeight": 1.75,
                                      },
                                      "subtitle2": Object {
                                        "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                        "fontSize": "0.875rem",
                                        "fontWeight": 500,
                                        "letterSpacing": "0.00714em",
                                        "lineHeight": 1.57,
                                      },
                                    },
                                    "zIndex": Object {
                                      "appBar": 1100,
                                      "drawer": 1200,
                                      "mobileStepper": 1000,
                                      "modal": 1300,
                                      "snackbar": 1400,
                                      "tooltip": 1500,
                                    },
                                  }
                                }
                                variant="h6"
                              >
                                <h6
                                  className="MuiTypography-root makeStyles-title-2 MuiTypography-h6 MuiTypography-noWrap"
                                >
                                  Drone For You
                                </h6>
                              </ForwardRef(Typography)>
                            </WithStyles(ForwardRef(Typography))>
                            <div
                              className="makeStyles-grow-1"
                            />
                            <WithStyles(ForwardRef(Typography))
                              noWrap={true}
                            >
                              <ForwardRef(Typography)
                                classes={
                                  Object {
                                    "alignCenter": "MuiTypography-alignCenter",
                                    "alignJustify": "MuiTypography-alignJustify",
                                    "alignLeft": "MuiTypography-alignLeft",
                                    "alignRight": "MuiTypography-alignRight",
                                    "body1": "MuiTypography-body1",
                                    "body2": "MuiTypography-body2",
                                    "button": "MuiTypography-button",
                                    "caption": "MuiTypography-caption",
                                    "colorError": "MuiTypography-colorError",
                                    "colorInherit": "MuiTypography-colorInherit",
                                    "colorPrimary": "MuiTypography-colorPrimary",
                                    "colorSecondary": "MuiTypography-colorSecondary",
                                    "colorTextPrimary": "MuiTypography-colorTextPrimary",
                                    "colorTextSecondary": "MuiTypography-colorTextSecondary",
                                    "displayBlock": "MuiTypography-displayBlock",
                                    "displayInline": "MuiTypography-displayInline",
                                    "gutterBottom": "MuiTypography-gutterBottom",
                                    "h1": "MuiTypography-h1",
                                    "h2": "MuiTypography-h2",
                                    "h3": "MuiTypography-h3",
                                    "h4": "MuiTypography-h4",
                                    "h5": "MuiTypography-h5",
                                    "h6": "MuiTypography-h6",
                                    "noWrap": "MuiTypography-noWrap",
                                    "overline": "MuiTypography-overline",
                                    "paragraph": "MuiTypography-paragraph",
                                    "root": "MuiTypography-root",
                                    "srOnly": "MuiTypography-srOnly",
                                    "subtitle1": "MuiTypography-subtitle1",
                                    "subtitle2": "MuiTypography-subtitle2",
                                  }
                                }
                                noWrap={true}
                                theme={
                                  Object {
                                    "breakpoints": Object {
                                      "between": [Function],
                                      "down": [Function],
                                      "keys": Array [
                                        "xs",
                                        "sm",
                                        "md",
                                        "lg",
                                        "xl",
                                      ],
                                      "only": [Function],
                                      "up": [Function],
                                      "values": Object {
                                        "lg": 1280,
                                        "md": 960,
                                        "sm": 600,
                                        "xl": 1920,
                                        "xs": 0,
                                      },
                                      "width": [Function],
                                    },
                                    "direction": "ltr",
                                    "mixins": Object {
                                      "gutters": [Function],
                                      "toolbar": Object {
                                        "@media (min-width:0px) and (orientation: landscape)": Object {
                                          "minHeight": 48,
                                        },
                                        "@media (min-width:600px)": Object {
                                          "minHeight": 64,
                                        },
                                        "minHeight": 56,
                                      },
                                    },
                                    "overrides": Object {},
                                    "palette": Object {
                                      "action": Object {
                                        "active": "rgba(0, 0, 0, 0.54)",
                                        "disabled": "rgba(0, 0, 0, 0.26)",
                                        "disabledBackground": "rgba(0, 0, 0, 0.12)",
                                        "hover": "rgba(0, 0, 0, 0.08)",
                                        "hoverOpacity": 0.08,
                                        "selected": "rgba(0, 0, 0, 0.14)",
                                      },
                                      "augmentColor": [Function],
                                      "background": Object {
                                        "default": "#fafafa",
                                        "paper": "#fff",
                                      },
                                      "common": Object {
                                        "black": "#000",
                                        "white": "#fff",
                                      },
                                      "contrastThreshold": 3,
                                      "divider": "rgba(0, 0, 0, 0.12)",
                                      "error": Object {
                                        "contrastText": "#fff",
                                        "dark": "#d32f2f",
                                        "light": "#e57373",
                                        "main": "#f44336",
                                      },
                                      "getContrastText": [Function],
                                      "grey": Object {
                                        "100": "#f5f5f5",
                                        "200": "#eeeeee",
                                        "300": "#e0e0e0",
                                        "400": "#bdbdbd",
                                        "50": "#fafafa",
                                        "500": "#9e9e9e",
                                        "600": "#757575",
                                        "700": "#616161",
                                        "800": "#424242",
                                        "900": "#212121",
                                        "A100": "#d5d5d5",
                                        "A200": "#aaaaaa",
                                        "A400": "#303030",
                                        "A700": "#616161",
                                      },
                                      "primary": Object {
                                        "contrastText": "#fff",
                                        "dark": "#303f9f",
                                        "light": "#7986cb",
                                        "main": "#3f51b5",
                                      },
                                      "secondary": Object {
                                        "contrastText": "#fff",
                                        "dark": "#c51162",
                                        "light": "#ff4081",
                                        "main": "#f50057",
                                      },
                                      "text": Object {
                                        "disabled": "rgba(0, 0, 0, 0.38)",
                                        "hint": "rgba(0, 0, 0, 0.38)",
                                        "primary": "rgba(0, 0, 0, 0.87)",
                                        "secondary": "rgba(0, 0, 0, 0.54)",
                                      },
                                      "tonalOffset": 0.2,
                                      "type": "light",
                                    },
                                    "props": Object {},
                                    "shadows": Array [
                                      "none",
                                      "0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)",
                                      "0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)",
                                      "0px 1px 8px 0px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 3px 3px -2px rgba(0,0,0,0.12)",
                                      "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
                                      "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
                                      "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
                                      "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
                                      "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
                                      "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
                                      "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
                                      "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
                                      "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
                                      "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
                                      "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
                                      "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
                                      "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
                                      "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
                                      "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
                                      "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
                                      "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
                                      "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
                                      "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
                                      "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
                                      "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
                                    ],
                                    "shape": Object {
                                      "borderRadius": 4,
                                    },
                                    "spacing": [Function],
                                    "transitions": Object {
                                      "create": [Function],
                                      "duration": Object {
                                        "complex": 375,
                                        "enteringScreen": 225,
                                        "leavingScreen": 195,
                                        "short": 250,
                                        "shorter": 200,
                                        "shortest": 150,
                                        "standard": 300,
                                      },
                                      "easing": Object {
                                        "easeIn": "cubic-bezier(0.4, 0, 1, 1)",
                                        "easeInOut": "cubic-bezier(0.4, 0, 0.2, 1)",
                                        "easeOut": "cubic-bezier(0.0, 0, 0.2, 1)",
                                        "sharp": "cubic-bezier(0.4, 0, 0.6, 1)",
                                      },
                                      "getAutoHeightDuration": [Function],
                                    },
                                    "typography": Object {
                                      "body1": Object {
                                        "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                        "fontSize": "1rem",
                                        "fontWeight": 400,
                                        "letterSpacing": "0.00938em",
                                        "lineHeight": 1.5,
                                      },
                                      "body2": Object {
                                        "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                        "fontSize": "0.875rem",
                                        "fontWeight": 400,
                                        "letterSpacing": "0.01071em",
                                        "lineHeight": 1.43,
                                      },
                                      "button": Object {
                                        "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                        "fontSize": "0.875rem",
                                        "fontWeight": 500,
                                        "letterSpacing": "0.02857em",
                                        "lineHeight": 1.75,
                                        "textTransform": "uppercase",
                                      },
                                      "caption": Object {
                                        "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                        "fontSize": "0.75rem",
                                        "fontWeight": 400,
                                        "letterSpacing": "0.03333em",
                                        "lineHeight": 1.66,
                                      },
                                      "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                      "fontSize": 14,
                                      "fontWeightBold": 700,
                                      "fontWeightLight": 300,
                                      "fontWeightMedium": 500,
                                      "fontWeightRegular": 400,
                                      "h1": Object {
                                        "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                        "fontSize": "6rem",
                                        "fontWeight": 300,
                                        "letterSpacing": "-0.01562em",
                                        "lineHeight": 1,
                                      },
                                      "h2": Object {
                                        "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                        "fontSize": "3.75rem",
                                        "fontWeight": 300,
                                        "letterSpacing": "-0.00833em",
                                        "lineHeight": 1,
                                      },
                                      "h3": Object {
                                        "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                        "fontSize": "3rem",
                                        "fontWeight": 400,
                                        "letterSpacing": "0em",
                                        "lineHeight": 1.04,
                                      },
                                      "h4": Object {
                                        "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                        "fontSize": "2.125rem",
                                        "fontWeight": 400,
                                        "letterSpacing": "0.00735em",
                                        "lineHeight": 1.17,
                                      },
                                      "h5": Object {
                                        "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                        "fontSize": "1.5rem",
                                        "fontWeight": 400,
                                        "letterSpacing": "0em",
                                        "lineHeight": 1.33,
                                      },
                                      "h6": Object {
                                        "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                        "fontSize": "1.25rem",
                                        "fontWeight": 500,
                                        "letterSpacing": "0.0075em",
                                        "lineHeight": 1.6,
                                      },
                                      "htmlFontSize": 16,
                                      "overline": Object {
                                        "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                        "fontSize": "0.75rem",
                                        "fontWeight": 400,
                                        "letterSpacing": "0.08333em",
                                        "lineHeight": 2.66,
                                        "textTransform": "uppercase",
                                      },
                                      "pxToRem": [Function],
                                      "round": [Function],
                                      "subtitle1": Object {
                                        "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                        "fontSize": "1rem",
                                        "fontWeight": 400,
                                        "letterSpacing": "0.00938em",
                                        "lineHeight": 1.75,
                                      },
                                      "subtitle2": Object {
                                        "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                                        "fontSize": "0.875rem",
                                        "fontWeight": 500,
                                        "letterSpacing": "0.00714em",
                                        "lineHeight": 1.57,
                                      },
                                    },
                                    "zIndex": Object {
                                      "appBar": 1100,
                                      "drawer": 1200,
                                      "mobileStepper": 1000,
                                      "modal": 1300,
                                      "snackbar": 1400,
                                      "tooltip": 1500,
                                    },
                                  }
                                }
                              >
                                <p
                                  className="MuiTypography-root MuiTypography-body1 MuiTypography-noWrap"
                                >
                                   
                                </p>
                              </ForwardRef(Typography)>
                            </WithStyles(ForwardRef(Typography))>
                            <div
                              className="makeStyles-grow-1"
                            />
                            <WithStyles(ForwardRef(Button))
                              className="margin3"
                              color="primary"
                              disabled={true}
                              onClick={[Function]}
                              variant="contained"
                            >
                              <ForwardRef(Button)
                                className="margin3"
                                classes={
                                  Object {
                                    "colorInherit": "MuiButton-colorInherit",
                                    "contained": "MuiButton-contained",
                                    "containedPrimary": "MuiButton-containedPrimary",
                                    "containedSecondary": "MuiButton-containedSecondary",
                                    "disabled": "Mui-disabled",
                                    "focusVisible": "Mui-focusVisible",
                                    "fullWidth": "MuiButton-fullWidth",
                                    "label": "MuiButton-label",
                                    "outlined": "MuiButton-outlined",
                                    "outlinedPrimary": "MuiButton-outlinedPrimary",
                                    "outlinedSecondary": "MuiButton-outlinedSecondary",
                                    "root": "MuiButton-root",
                                    "sizeLarge": "MuiButton-sizeLarge",
                                    "sizeSmall": "MuiButton-sizeSmall",
                                    "text": "MuiButton-text",
                                    "textPrimary": "MuiButton-textPrimary",
                                    "textSecondary": "MuiButton-textSecondary",
                                  }
                                }
                                color="primary"
                                disabled={true}
                                onClick={[Function]}
                                variant="contained"
                              >
                                <WithStyles(ForwardRef(ButtonBase))
                                  className="MuiButton-root margin3 MuiButton-contained MuiButton-containedPrimary Mui-disabled"
                                  component="button"
                                  disabled={true}
                                  focusRipple={true}
                                  focusVisibleClassName="Mui-focusVisible"
                                  onClick={[Function]}
                                  type="button"
                                >
                                  <ForwardRef(ButtonBase)
                                    className="MuiButton-root margin3 MuiButton-contained MuiButton-containedPrimary Mui-disabled"
                                    classes={
                                      Object {
                                        "disabled": "Mui-disabled",
                                        "focusVisible": "Mui-focusVisible",
                                        "root": "MuiButtonBase-root",
                                      }
                                    }
                                    component="button"
                                    disabled={true}
                                    focusRipple={true}
                                    focusVisibleClassName="Mui-focusVisible"
                                    onClick={[Function]}
                                    type="button"
                                  >
                                    <button
                                      className="MuiButtonBase-root MuiButton-root margin3 MuiButton-contained MuiButton-containedPrimary Mui-disabled Mui-disabled"
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
                                        Return Drone
                                      </span>
                                    </button>
                                  </ForwardRef(ButtonBase)>
                                </WithStyles(ForwardRef(ButtonBase))>
                              </ForwardRef(Button)>
                            </WithStyles(ForwardRef(Button))>
                            <div
                              className="makeStyles-grow-1"
                            />
                            <b>
                               
                              , 
                               
                            </b>
                            <div
                              className="makeStyles-sectionDesktop-3"
                            >
                              <WithStyles(ForwardRef(IconButton))
                                aria-controls="profile-account-menu"
                                aria-haspopup="true"
                                aria-label="Account of current user"
                                color="inherit"
                                edge="end"
                                onClick={[Function]}
                              >
                                <ForwardRef(IconButton)
                                  aria-controls="profile-account-menu"
                                  aria-haspopup="true"
                                  aria-label="Account of current user"
                                  classes={
                                    Object {
                                      "colorInherit": "MuiIconButton-colorInherit",
                                      "colorPrimary": "MuiIconButton-colorPrimary",
                                      "colorSecondary": "MuiIconButton-colorSecondary",
                                      "disabled": "Mui-disabled",
                                      "edgeEnd": "MuiIconButton-edgeEnd",
                                      "edgeStart": "MuiIconButton-edgeStart",
                                      "label": "MuiIconButton-label",
                                      "root": "MuiIconButton-root",
                                      "sizeSmall": "MuiIconButton-sizeSmall",
                                    }
                                  }
                                  color="inherit"
                                  edge="end"
                                  onClick={[Function]}
                                >
                                  <WithStyles(ForwardRef(ButtonBase))
                                    aria-controls="profile-account-menu"
                                    aria-haspopup="true"
                                    aria-label="Account of current user"
                                    centerRipple={true}
                                    className="MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-edgeEnd"
                                    disabled={false}
                                    focusRipple={true}
                                    onClick={[Function]}
                                  >
                                    <ForwardRef(ButtonBase)
                                      aria-controls="profile-account-menu"
                                      aria-haspopup="true"
                                      aria-label="Account of current user"
                                      centerRipple={true}
                                      className="MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-edgeEnd"
                                      classes={
                                        Object {
                                          "disabled": "Mui-disabled",
                                          "focusVisible": "Mui-focusVisible",
                                          "root": "MuiButtonBase-root",
                                        }
                                      }
                                      disabled={false}
                                      focusRipple={true}
                                      onClick={[Function]}
                                    >
                                      <button
                                        aria-controls="profile-account-menu"
                                        aria-haspopup="true"
                                        aria-label="Account of current user"
                                        className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-edgeEnd"
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
                                          className="MuiIconButton-label"
                                        >
                                          <ForwardRef>
                                            <WithStyles(ForwardRef(SvgIcon))>
                                              <ForwardRef(SvgIcon)
                                                classes={
                                                  Object {
                                                    "colorAction": "MuiSvgIcon-colorAction",
                                                    "colorDisabled": "MuiSvgIcon-colorDisabled",
                                                    "colorError": "MuiSvgIcon-colorError",
                                                    "colorPrimary": "MuiSvgIcon-colorPrimary",
                                                    "colorSecondary": "MuiSvgIcon-colorSecondary",
                                                    "fontSizeInherit": "MuiSvgIcon-fontSizeInherit",
                                                    "fontSizeLarge": "MuiSvgIcon-fontSizeLarge",
                                                    "fontSizeSmall": "MuiSvgIcon-fontSizeSmall",
                                                    "root": "MuiSvgIcon-root",
                                                  }
                                                }
                                              >
                                                <svg
                                                  aria-hidden="true"
                                                  className="MuiSvgIcon-root"
                                                  focusable="false"
                                                  role="presentation"
                                                  viewBox="0 0 24 24"
                                                >
                                                  <path
                                                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
                                                  />
                                                </svg>
                                              </ForwardRef(SvgIcon)>
                                            </WithStyles(ForwardRef(SvgIcon))>
                                          </ForwardRef>
                                        </span>
                                        <NoSsr>
                                          <WithStyles(undefined)
                                            center={true}
                                          >
                                            <ForwardRef(TouchRipple)
                                              center={true}
                                              classes={
                                                Object {
                                                  "child": "MuiTouchRipple-child",
                                                  "childLeaving": "MuiTouchRipple-childLeaving",
                                                  "childPulsate": "MuiTouchRipple-childPulsate",
                                                  "ripple": "MuiTouchRipple-ripple",
                                                  "ripplePulsate": "MuiTouchRipple-ripplePulsate",
                                                  "rippleVisible": "MuiTouchRipple-rippleVisible",
                                                  "root": "MuiTouchRipple-root",
                                                }
                                              }
                                            >
                                              <span
                                                className="MuiTouchRipple-root"
                                              >
                                                <TransitionGroup
                                                  childFactory={[Function]}
                                                  component={null}
                                                  exit={true}
                                                />
                                              </span>
                                            </ForwardRef(TouchRipple)>
                                          </WithStyles(undefined)>
                                        </NoSsr>
                                      </button>
                                    </ForwardRef(ButtonBase)>
                                  </WithStyles(ForwardRef(ButtonBase))>
                                </ForwardRef(IconButton)>
                              </WithStyles(ForwardRef(IconButton))>
                            </div>
                          </div>
                        </ForwardRef(Toolbar)>
                      </WithStyles(ForwardRef(Toolbar))>
                    </header>
                  </ForwardRef(Paper)>
                </WithStyles(ForwardRef(Paper))>
              </ForwardRef(AppBar)>
            </WithStyles(ForwardRef(AppBar))>
            <WithStyles(ForwardRef(Menu))
              anchorEl={null}
              anchorOrigin={
                Object {
                  "horizontal": "right",
                  "vertical": "top",
                }
              }
              id="profile-account-menu"
              keepMounted={true}
              onClose={[Function]}
              open={false}
              transformOrigin={
                Object {
                  "horizontal": "right",
                  "vertical": "top",
                }
              }
            >
              <ForwardRef(Menu)
                anchorEl={null}
                anchorOrigin={
                  Object {
                    "horizontal": "right",
                    "vertical": "top",
                  }
                }
                classes={
                  Object {
                    "list": "MuiMenu-list",
                    "paper": "MuiMenu-paper",
                  }
                }
                id="profile-account-menu"
                keepMounted={true}
                onClose={[Function]}
                open={false}
                theme={
                  Object {
                    "breakpoints": Object {
                      "between": [Function],
                      "down": [Function],
                      "keys": Array [
                        "xs",
                        "sm",
                        "md",
                        "lg",
                        "xl",
                      ],
                      "only": [Function],
                      "up": [Function],
                      "values": Object {
                        "lg": 1280,
                        "md": 960,
                        "sm": 600,
                        "xl": 1920,
                        "xs": 0,
                      },
                      "width": [Function],
                    },
                    "direction": "ltr",
                    "mixins": Object {
                      "gutters": [Function],
                      "toolbar": Object {
                        "@media (min-width:0px) and (orientation: landscape)": Object {
                          "minHeight": 48,
                        },
                        "@media (min-width:600px)": Object {
                          "minHeight": 64,
                        },
                        "minHeight": 56,
                      },
                    },
                    "overrides": Object {},
                    "palette": Object {
                      "action": Object {
                        "active": "rgba(0, 0, 0, 0.54)",
                        "disabled": "rgba(0, 0, 0, 0.26)",
                        "disabledBackground": "rgba(0, 0, 0, 0.12)",
                        "hover": "rgba(0, 0, 0, 0.08)",
                        "hoverOpacity": 0.08,
                        "selected": "rgba(0, 0, 0, 0.14)",
                      },
                      "augmentColor": [Function],
                      "background": Object {
                        "default": "#fafafa",
                        "paper": "#fff",
                      },
                      "common": Object {
                        "black": "#000",
                        "white": "#fff",
                      },
                      "contrastThreshold": 3,
                      "divider": "rgba(0, 0, 0, 0.12)",
                      "error": Object {
                        "contrastText": "#fff",
                        "dark": "#d32f2f",
                        "light": "#e57373",
                        "main": "#f44336",
                      },
                      "getContrastText": [Function],
                      "grey": Object {
                        "100": "#f5f5f5",
                        "200": "#eeeeee",
                        "300": "#e0e0e0",
                        "400": "#bdbdbd",
                        "50": "#fafafa",
                        "500": "#9e9e9e",
                        "600": "#757575",
                        "700": "#616161",
                        "800": "#424242",
                        "900": "#212121",
                        "A100": "#d5d5d5",
                        "A200": "#aaaaaa",
                        "A400": "#303030",
                        "A700": "#616161",
                      },
                      "primary": Object {
                        "contrastText": "#fff",
                        "dark": "#303f9f",
                        "light": "#7986cb",
                        "main": "#3f51b5",
                      },
                      "secondary": Object {
                        "contrastText": "#fff",
                        "dark": "#c51162",
                        "light": "#ff4081",
                        "main": "#f50057",
                      },
                      "text": Object {
                        "disabled": "rgba(0, 0, 0, 0.38)",
                        "hint": "rgba(0, 0, 0, 0.38)",
                        "primary": "rgba(0, 0, 0, 0.87)",
                        "secondary": "rgba(0, 0, 0, 0.54)",
                      },
                      "tonalOffset": 0.2,
                      "type": "light",
                    },
                    "props": Object {},
                    "shadows": Array [
                      "none",
                      "0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)",
                      "0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)",
                      "0px 1px 8px 0px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 3px 3px -2px rgba(0,0,0,0.12)",
                      "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
                      "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
                      "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
                      "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
                      "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
                      "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
                      "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
                      "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
                      "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
                      "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
                      "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
                      "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
                      "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
                      "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
                      "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
                      "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
                      "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
                      "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
                      "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
                      "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
                      "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
                    ],
                    "shape": Object {
                      "borderRadius": 4,
                    },
                    "spacing": [Function],
                    "transitions": Object {
                      "create": [Function],
                      "duration": Object {
                        "complex": 375,
                        "enteringScreen": 225,
                        "leavingScreen": 195,
                        "short": 250,
                        "shorter": 200,
                        "shortest": 150,
                        "standard": 300,
                      },
                      "easing": Object {
                        "easeIn": "cubic-bezier(0.4, 0, 1, 1)",
                        "easeInOut": "cubic-bezier(0.4, 0, 0.2, 1)",
                        "easeOut": "cubic-bezier(0.0, 0, 0.2, 1)",
                        "sharp": "cubic-bezier(0.4, 0, 0.6, 1)",
                      },
                      "getAutoHeightDuration": [Function],
                    },
                    "typography": Object {
                      "body1": Object {
                        "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                        "fontSize": "1rem",
                        "fontWeight": 400,
                        "letterSpacing": "0.00938em",
                        "lineHeight": 1.5,
                      },
                      "body2": Object {
                        "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                        "fontSize": "0.875rem",
                        "fontWeight": 400,
                        "letterSpacing": "0.01071em",
                        "lineHeight": 1.43,
                      },
                      "button": Object {
                        "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                        "fontSize": "0.875rem",
                        "fontWeight": 500,
                        "letterSpacing": "0.02857em",
                        "lineHeight": 1.75,
                        "textTransform": "uppercase",
                      },
                      "caption": Object {
                        "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                        "fontSize": "0.75rem",
                        "fontWeight": 400,
                        "letterSpacing": "0.03333em",
                        "lineHeight": 1.66,
                      },
                      "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                      "fontSize": 14,
                      "fontWeightBold": 700,
                      "fontWeightLight": 300,
                      "fontWeightMedium": 500,
                      "fontWeightRegular": 400,
                      "h1": Object {
                        "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                        "fontSize": "6rem",
                        "fontWeight": 300,
                        "letterSpacing": "-0.01562em",
                        "lineHeight": 1,
                      },
                      "h2": Object {
                        "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                        "fontSize": "3.75rem",
                        "fontWeight": 300,
                        "letterSpacing": "-0.00833em",
                        "lineHeight": 1,
                      },
                      "h3": Object {
                        "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                        "fontSize": "3rem",
                        "fontWeight": 400,
                        "letterSpacing": "0em",
                        "lineHeight": 1.04,
                      },
                      "h4": Object {
                        "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                        "fontSize": "2.125rem",
                        "fontWeight": 400,
                        "letterSpacing": "0.00735em",
                        "lineHeight": 1.17,
                      },
                      "h5": Object {
                        "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                        "fontSize": "1.5rem",
                        "fontWeight": 400,
                        "letterSpacing": "0em",
                        "lineHeight": 1.33,
                      },
                      "h6": Object {
                        "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                        "fontSize": "1.25rem",
                        "fontWeight": 500,
                        "letterSpacing": "0.0075em",
                        "lineHeight": 1.6,
                      },
                      "htmlFontSize": 16,
                      "overline": Object {
                        "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                        "fontSize": "0.75rem",
                        "fontWeight": 400,
                        "letterSpacing": "0.08333em",
                        "lineHeight": 2.66,
                        "textTransform": "uppercase",
                      },
                      "pxToRem": [Function],
                      "round": [Function],
                      "subtitle1": Object {
                        "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                        "fontSize": "1rem",
                        "fontWeight": 400,
                        "letterSpacing": "0.00938em",
                        "lineHeight": 1.75,
                      },
                      "subtitle2": Object {
                        "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
                        "fontSize": "0.875rem",
                        "fontWeight": 500,
                        "letterSpacing": "0.00714em",
                        "lineHeight": 1.57,
                      },
                    },
                    "zIndex": Object {
                      "appBar": 1100,
                      "drawer": 1200,
                      "mobileStepper": 1000,
                      "modal": 1300,
                      "snackbar": 1400,
                      "tooltip": 1500,
                    },
                  }
                }
                transformOrigin={
                  Object {
                    "horizontal": "right",
                    "vertical": "top",
                  }
                }
              >
                <WithStyles(ForwardRef(Popover))
                  PaperProps={
                    Object {
                      "classes": Object {
                        "root": "MuiMenu-paper",
                      },
                    }
                  }
                  anchorEl={null}
                  anchorOrigin={
                    Object {
                      "horizontal": "right",
                      "vertical": "top",
                    }
                  }
                  getContentAnchorEl={[Function]}
                  id="profile-account-menu"
                  keepMounted={true}
                  onClose={[Function]}
                  onEntering={[Function]}
                  open={false}
                  transformOrigin={
                    Object {
                      "horizontal": "right",
                      "vertical": "top",
                    }
                  }
                  transitionDuration="auto"
                >
                  <ForwardRef(Popover)
                    PaperProps={
                      Object {
                        "classes": Object {
                          "root": "MuiMenu-paper",
                        },
                      }
                    }
                    anchorEl={null}
                    anchorOrigin={
                      Object {
                        "horizontal": "right",
                        "vertical": "top",
                      }
                    }
                    classes={
                      Object {
                        "paper": "MuiPopover-paper",
                      }
                    }
                    getContentAnchorEl={[Function]}
                    id="profile-account-menu"
                    keepMounted={true}
                    onClose={[Function]}
                    onEntering={[Function]}
                    open={false}
                    transformOrigin={
                      Object {
                        "horizontal": "right",
                        "vertical": "top",
                      }
                    }
                    transitionDuration="auto"
                  >
                    <ForwardRef(Modal)
                      BackdropProps={
                        Object {
                          "invisible": true,
                        }
                      }
                      id="profile-account-menu"
                      keepMounted={true}
                      onClose={[Function]}
                      open={false}
                    >
                      <ForwardRef(Portal)
                        disablePortal={false}
                        onRendered={[Function]}
                      >
                        <Portal
                          containerInfo={
                            <body>
                              <div
                                aria-hidden="true"
                                id="profile-account-menu"
                                role="presentation"
                                style="position: fixed; z-index: 1300; right: 0px; bottom: 0px; top: 0px; left: 0px; visibility: hidden;"
                              >
                                <div
                                  data-test="sentinelStart"
                                  tabindex="0"
                                />
                                <div
                                  class="MuiPaper-root MuiMenu-paper MuiPaper-elevation8 MuiPopover-paper MuiPaper-rounded"
                                  role="document"
                                  style="opacity: 0; transform: scale(0.75, 0.5625); visibility: hidden;"
                                  tabindex="-1"
                                >
                                  <ul
                                    class="MuiList-root MuiMenu-list MuiList-padding"
                                    role="menu"
                                    tabindex="-1"
                                  >
                                    <li
                                      aria-disabled="false"
                                      class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                                      role="menuitem"
                                      tabindex="-1"
                                    >
                                      Sign Out
                                      <span
                                        class="MuiTouchRipple-root"
                                      />
                                    </li>
                                  </ul>
                                </div>
                                <div
                                  data-test="sentinelEnd"
                                  tabindex="0"
                                />
                              </div>
                              <div
                                aria-hidden="true"
                                id="profile-account-menu"
                                role="presentation"
                                style="position: fixed; z-index: 1300; right: 0px; bottom: 0px; top: 0px; left: 0px; visibility: hidden;"
                              >
                                <div
                                  data-test="sentinelStart"
                                  tabindex="0"
                                />
                                <div
                                  class="MuiPaper-root MuiMenu-paper MuiPaper-elevation8 MuiPopover-paper MuiPaper-rounded"
                                  role="document"
                                  style="opacity: 0; transform: scale(0.75, 0.5625); visibility: hidden;"
                                  tabindex="-1"
                                >
                                  <ul
                                    class="MuiList-root MuiMenu-list MuiList-padding"
                                    role="menu"
                                    tabindex="-1"
                                  >
                                    <li
                                      aria-disabled="false"
                                      class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                                      role="menuitem"
                                      tabindex="-1"
                                    >
                                      Sign Out
                                      <span
                                        class="MuiTouchRipple-root"
                                      />
                                    </li>
                                  </ul>
                                </div>
                                <div
                                  data-test="sentinelEnd"
                                  tabindex="0"
                                />
                              </div>
                              <div
                                aria-hidden="true"
                                id="profile-account-menu"
                                role="presentation"
                                style="position: fixed; z-index: 1300; right: 0px; bottom: 0px; top: 0px; left: 0px; visibility: hidden;"
                              >
                                <div
                                  data-test="sentinelStart"
                                  tabindex="0"
                                />
                                <div
                                  class="MuiPaper-root MuiMenu-paper MuiPaper-elevation8 MuiPopover-paper MuiPaper-rounded"
                                  role="document"
                                  style="opacity: 0; transform: scale(0.75, 0.5625); visibility: hidden;"
                                  tabindex="-1"
                                >
                                  <ul
                                    class="MuiList-root MuiMenu-list MuiList-padding"
                                    role="menu"
                                    tabindex="-1"
                                  >
                                    <li
                                      aria-disabled="false"
                                      class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                                      role="menuitem"
                                      tabindex="-1"
                                    >
                                      Sign Out
                                      <span
                                        class="MuiTouchRipple-root"
                                      />
                                    </li>
                                  </ul>
                                </div>
                                <div
                                  data-test="sentinelEnd"
                                  tabindex="0"
                                />
                              </div>
                              <div
                                aria-hidden="true"
                                id="profile-account-menu"
                                role="presentation"
                                style="position: fixed; z-index: 1300; right: 0px; bottom: 0px; top: 0px; left: 0px; visibility: hidden;"
                              >
                                <div
                                  data-test="sentinelStart"
                                  tabindex="0"
                                />
                                <div
                                  class="MuiPaper-root MuiMenu-paper MuiPaper-elevation8 MuiPopover-paper MuiPaper-rounded"
                                  role="document"
                                  style="opacity: 0; transform: scale(0.75, 0.5625); visibility: hidden;"
                                  tabindex="-1"
                                >
                                  <ul
                                    class="MuiList-root MuiMenu-list MuiList-padding"
                                    role="menu"
                                    tabindex="-1"
                                  >
                                    <li
                                      aria-disabled="false"
                                      class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                                      role="menuitem"
                                      tabindex="-1"
                                    >
                                      Sign Out
                                      <span
                                        class="MuiTouchRipple-root"
                                      />
                                    </li>
                                  </ul>
                                </div>
                                <div
                                  data-test="sentinelEnd"
                                  tabindex="0"
                                />
                              </div>
                              <div
                                aria-hidden="true"
                                id="profile-account-menu"
                                role="presentation"
                                style="position: fixed; z-index: 1300; right: 0px; bottom: 0px; top: 0px; left: 0px; visibility: hidden;"
                              >
                                <div
                                  data-test="sentinelStart"
                                  tabindex="0"
                                />
                                <div
                                  class="MuiPaper-root MuiMenu-paper MuiPaper-elevation8 MuiPopover-paper MuiPaper-rounded"
                                  role="document"
                                  style="opacity: 0; transform: scale(0.75, 0.5625); visibility: hidden;"
                                  tabindex="-1"
                                >
                                  <ul
                                    class="MuiList-root MuiMenu-list MuiList-padding"
                                    role="menu"
                                    tabindex="-1"
                                  >
                                    <li
                                      aria-disabled="false"
                                      class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                                      role="menuitem"
                                      tabindex="-1"
                                    >
                                      Sign Out
                                      <span
                                        class="MuiTouchRipple-root"
                                      />
                                    </li>
                                  </ul>
                                </div>
                                <div
                                  data-test="sentinelEnd"
                                  tabindex="0"
                                />
                              </div>
                              <div
                                aria-hidden="true"
                                id="profile-account-menu"
                                role="presentation"
                                style="position: fixed; z-index: 1300; right: 0px; bottom: 0px; top: 0px; left: 0px; visibility: hidden;"
                              >
                                <div
                                  data-test="sentinelStart"
                                  tabindex="0"
                                />
                                <div
                                  class="MuiPaper-root MuiMenu-paper MuiPaper-elevation8 MuiPopover-paper MuiPaper-rounded"
                                  role="document"
                                  style="opacity: 0; transform: scale(0.75, 0.5625); visibility: hidden;"
                                  tabindex="-1"
                                >
                                  <ul
                                    class="MuiList-root MuiMenu-list MuiList-padding"
                                    role="menu"
                                    tabindex="-1"
                                  >
                                    <li
                                      aria-disabled="false"
                                      class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                                      role="menuitem"
                                      tabindex="-1"
                                    >
                                      Sign Out
                                      <span
                                        class="MuiTouchRipple-root"
                                      />
                                    </li>
                                  </ul>
                                </div>
                                <div
                                  data-test="sentinelEnd"
                                  tabindex="0"
                                />
                              </div>
                              <div
                                aria-hidden="true"
                                id="profile-account-menu"
                                role="presentation"
                                style="position: fixed; z-index: 1300; right: 0px; bottom: 0px; top: 0px; left: 0px; visibility: hidden;"
                              >
                                <div
                                  data-test="sentinelStart"
                                  tabindex="0"
                                />
                                <div
                                  class="MuiPaper-root MuiMenu-paper MuiPaper-elevation8 MuiPopover-paper MuiPaper-rounded"
                                  role="document"
                                  style="opacity: 0; transform: scale(0.75, 0.5625); visibility: hidden;"
                                  tabindex="-1"
                                >
                                  <ul
                                    class="MuiList-root MuiMenu-list MuiList-padding"
                                    role="menu"
                                    tabindex="-1"
                                  >
                                    <li
                                      aria-disabled="false"
                                      class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                                      role="menuitem"
                                      tabindex="-1"
                                    >
                                      Sign Out
                                      <span
                                        class="MuiTouchRipple-root"
                                      />
                                    </li>
                                  </ul>
                                </div>
                                <div
                                  data-test="sentinelEnd"
                                  tabindex="0"
                                />
                              </div>
                            </body>
                          }
                        >
                          <div
                            id="profile-account-menu"
                            onKeyDown={[Function]}
                            role="presentation"
                            style={
                              Object {
                                "bottom": 0,
                                "left": 0,
                                "position": "fixed",
                                "right": 0,
                                "top": 0,
                                "visibility": "hidden",
                                "zIndex": 1300,
                              }
                            }
                          >
                            <ForwardRef(SimpleBackdrop)
                              invisible={true}
                              onClick={[Function]}
                              open={false}
                            />
                            <TrapFocus
                              disableAutoFocus={false}
                              disableEnforceFocus={false}
                              disableRestoreFocus={false}
                              getDoc={[Function]}
                              isEnabled={[Function]}
                              open={false}
                            >
                              <div
                                data-test="sentinelStart"
                                tabIndex={0}
                              />
                              <ForwardRef(Grow)
                                appear={true}
                                in={false}
                                onEnter={[Function]}
                                onEntering={[Function]}
                                onExited={[Function]}
                                role="document"
                                tabIndex="-1"
                                timeout="auto"
                              >
                                <Transition
                                  addEndListener={[Function]}
                                  appear={true}
                                  enter={true}
                                  exit={true}
                                  in={false}
                                  mountOnEnter={false}
                                  onEnter={[Function]}
                                  onEntered={[Function]}
                                  onEntering={[Function]}
                                  onExit={[Function]}
                                  onExited={[Function]}
                                  onExiting={[Function]}
                                  role="document"
                                  tabIndex="-1"
                                  timeout={null}
                                  unmountOnExit={false}
                                >
                                  <WithStyles(ForwardRef(Paper))
                                    className="MuiPopover-paper"
                                    classes={
                                      Object {
                                        "root": "MuiMenu-paper",
                                      }
                                    }
                                    elevation={8}
                                    role="document"
                                    style={
                                      Object {
                                        "opacity": 0,
                                        "transform": "scale(0.75, 0.5625)",
                                        "visibility": "hidden",
                                      }
                                    }
                                    tabIndex="-1"
                                  >
                                    <ForwardRef(Paper)
                                      className="MuiPopover-paper"
                                      classes={
                                        Object {
                                          "elevation0": "MuiPaper-elevation0",
                                          "elevation1": "MuiPaper-elevation1",
                                          "elevation10": "MuiPaper-elevation10",
                                          "elevation11": "MuiPaper-elevation11",
                                          "elevation12": "MuiPaper-elevation12",
                                          "elevation13": "MuiPaper-elevation13",
                                          "elevation14": "MuiPaper-elevation14",
                                          "elevation15": "MuiPaper-elevation15",
                                          "elevation16": "MuiPaper-elevation16",
                                          "elevation17": "MuiPaper-elevation17",
                                          "elevation18": "MuiPaper-elevation18",
                                          "elevation19": "MuiPaper-elevation19",
                                          "elevation2": "MuiPaper-elevation2",
                                          "elevation20": "MuiPaper-elevation20",
                                          "elevation21": "MuiPaper-elevation21",
                                          "elevation22": "MuiPaper-elevation22",
                                          "elevation23": "MuiPaper-elevation23",
                                          "elevation24": "MuiPaper-elevation24",
                                          "elevation3": "MuiPaper-elevation3",
                                          "elevation4": "MuiPaper-elevation4",
                                          "elevation5": "MuiPaper-elevation5",
                                          "elevation6": "MuiPaper-elevation6",
                                          "elevation7": "MuiPaper-elevation7",
                                          "elevation8": "MuiPaper-elevation8",
                                          "elevation9": "MuiPaper-elevation9",
                                          "root": "MuiPaper-root MuiMenu-paper",
                                          "rounded": "MuiPaper-rounded",
                                        }
                                      }
                                      elevation={8}
                                      role="document"
                                      style={
                                        Object {
                                          "opacity": 0,
                                          "transform": "scale(0.75, 0.5625)",
                                          "visibility": "hidden",
                                        }
                                      }
                                      tabIndex="-1"
                                    >
                                      <div
                                        className="MuiPaper-root MuiMenu-paper MuiPaper-elevation8 MuiPopover-paper MuiPaper-rounded"
                                        role="document"
                                        style={
                                          Object {
                                            "opacity": 0,
                                            "transform": "scale(0.75, 0.5625)",
                                            "visibility": "hidden",
                                          }
                                        }
                                        tabIndex="-1"
                                      >
                                        <ForwardRef(MenuList)
                                          actions={
                                            Object {
                                              "current": Object {
                                                "adjustStyleForScrollbar": [Function],
                                              },
                                            }
                                          }
                                          autoFocus={false}
                                          className="MuiMenu-list"
                                          onKeyDown={[Function]}
                                        >
                                          <WithStyles(ForwardRef(List))
                                            className="MuiMenu-list"
                                            onKeyDown={[Function]}
                                            role="menu"
                                            tabIndex={-1}
                                          >
                                            <ForwardRef(List)
                                              className="MuiMenu-list"
                                              classes={
                                                Object {
                                                  "dense": "MuiList-dense",
                                                  "padding": "MuiList-padding",
                                                  "root": "MuiList-root",
                                                  "subheader": "MuiList-subheader",
                                                }
                                              }
                                              onKeyDown={[Function]}
                                              role="menu"
                                              tabIndex={-1}
                                            >
                                              <ul
                                                className="MuiList-root MuiMenu-list MuiList-padding"
                                                onKeyDown={[Function]}
                                                role="menu"
                                                tabIndex={-1}
                                              >
                                                <WithStyles(ForwardRef(MenuItem))
                                                  key=".0"
                                                  onClick={[Function]}
                                                >
                                                  <ForwardRef(MenuItem)
                                                    classes={
                                                      Object {
                                                        "dense": "MuiMenuItem-dense",
                                                        "gutters": "MuiMenuItem-gutters",
                                                        "root": "MuiMenuItem-root",
                                                        "selected": "Mui-selected",
                                                      }
                                                    }
                                                    onClick={[Function]}
                                                  >
                                                    <WithStyles(ForwardRef(ListItem))
                                                      button={true}
                                                      className="MuiMenuItem-root MuiMenuItem-gutters"
                                                      classes={
                                                        Object {
                                                          "dense": "MuiMenuItem-dense",
                                                        }
                                                      }
                                                      component="li"
                                                      disableGutters={false}
                                                      onClick={[Function]}
                                                      role="menuitem"
                                                      tabIndex={-1}
                                                    >
                                                      <ForwardRef(ListItem)
                                                        button={true}
                                                        className="MuiMenuItem-root MuiMenuItem-gutters"
                                                        classes={
                                                          Object {
                                                            "alignItemsFlexStart": "MuiListItem-alignItemsFlexStart",
                                                            "button": "MuiListItem-button",
                                                            "container": "MuiListItem-container",
                                                            "dense": "MuiListItem-dense MuiMenuItem-dense",
                                                            "disabled": "Mui-disabled",
                                                            "divider": "MuiListItem-divider",
                                                            "focusVisible": "Mui-focusVisible",
                                                            "gutters": "MuiListItem-gutters",
                                                            "root": "MuiListItem-root",
                                                            "secondaryAction": "MuiListItem-secondaryAction",
                                                            "selected": "Mui-selected",
                                                          }
                                                        }
                                                        component="li"
                                                        disableGutters={false}
                                                        onClick={[Function]}
                                                        role="menuitem"
                                                        tabIndex={-1}
                                                      >
                                                        <WithStyles(ForwardRef(ButtonBase))
                                                          className="MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                                                          component="li"
                                                          disabled={false}
                                                          focusVisibleClassName="Mui-focusVisible"
                                                          onClick={[Function]}
                                                          role="menuitem"
                                                          tabIndex={-1}
                                                        >
                                                          <ForwardRef(ButtonBase)
                                                            className="MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                                                            classes={
                                                              Object {
                                                                "disabled": "Mui-disabled",
                                                                "focusVisible": "Mui-focusVisible",
                                                                "root": "MuiButtonBase-root",
                                                              }
                                                            }
                                                            component="li"
                                                            disabled={false}
                                                            focusVisibleClassName="Mui-focusVisible"
                                                            onClick={[Function]}
                                                            role="menuitem"
                                                            tabIndex={-1}
                                                          >
                                                            <li
                                                              aria-disabled={false}
                                                              className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
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
                                                              role="menuitem"
                                                              tabIndex={-1}
                                                            >
                                                              Sign Out
                                                              <NoSsr>
                                                                <WithStyles(undefined)
                                                                  center={false}
                                                                >
                                                                  <ForwardRef(TouchRipple)
                                                                    center={false}
                                                                    classes={
                                                                      Object {
                                                                        "child": "MuiTouchRipple-child",
                                                                        "childLeaving": "MuiTouchRipple-childLeaving",
                                                                        "childPulsate": "MuiTouchRipple-childPulsate",
                                                                        "ripple": "MuiTouchRipple-ripple",
                                                                        "ripplePulsate": "MuiTouchRipple-ripplePulsate",
                                                                        "rippleVisible": "MuiTouchRipple-rippleVisible",
                                                                        "root": "MuiTouchRipple-root",
                                                                      }
                                                                    }
                                                                  >
                                                                    <span
                                                                      className="MuiTouchRipple-root"
                                                                    >
                                                                      <TransitionGroup
                                                                        childFactory={[Function]}
                                                                        component={null}
                                                                        exit={true}
                                                                      />
                                                                    </span>
                                                                  </ForwardRef(TouchRipple)>
                                                                </WithStyles(undefined)>
                                                              </NoSsr>
                                                            </li>
                                                          </ForwardRef(ButtonBase)>
                                                        </WithStyles(ForwardRef(ButtonBase))>
                                                      </ForwardRef(ListItem)>
                                                    </WithStyles(ForwardRef(ListItem))>
                                                  </ForwardRef(MenuItem)>
                                                </WithStyles(ForwardRef(MenuItem))>
                                              </ul>
                                            </ForwardRef(List)>
                                          </WithStyles(ForwardRef(List))>
                                        </ForwardRef(MenuList)>
                                      </div>
                                    </ForwardRef(Paper)>
                                  </WithStyles(ForwardRef(Paper))>
                                </Transition>
                              </ForwardRef(Grow)>
                              <div
                                data-test="sentinelEnd"
                                tabIndex={0}
                              />
                            </TrapFocus>
                          </div>
                        </Portal>
                      </ForwardRef(Portal)>
                    </ForwardRef(Modal)>
                  </ForwardRef(Popover)>
                </WithStyles(ForwardRef(Popover))>
              </ForwardRef(Menu)>
            </WithStyles(ForwardRef(Menu))>
          </div>
        </HeaderAppBar>
        <section
          className="dashboard__cont"
        >
          <WithStyles(ForwardRef(Container))
            maxWidth="lg"
          >
            <ForwardRef(Container)
              classes={
                Object {
                  "fixed": "MuiContainer-fixed",
                  "maxWidthLg": "MuiContainer-maxWidthLg",
                  "maxWidthMd": "MuiContainer-maxWidthMd",
                  "maxWidthSm": "MuiContainer-maxWidthSm",
                  "maxWidthXl": "MuiContainer-maxWidthXl",
                  "maxWidthXs": "MuiContainer-maxWidthXs",
                  "root": "MuiContainer-root",
                }
              }
              maxWidth="lg"
            >
              <div
                className="MuiContainer-root MuiContainer-maxWidthLg"
              >
                <WithStyles(ForwardRef(Grid))
                  container={true}
                  justify="center"
                  spacing={3}
                >
                  <ForwardRef(Grid)
                    classes={
                      Object {
                        "align-content-xs-center": "MuiGrid-align-content-xs-center",
                        "align-content-xs-flex-end": "MuiGrid-align-content-xs-flex-end",
                        "align-content-xs-flex-start": "MuiGrid-align-content-xs-flex-start",
                        "align-content-xs-space-around": "MuiGrid-align-content-xs-space-around",
                        "align-content-xs-space-between": "MuiGrid-align-content-xs-space-between",
                        "align-items-xs-baseline": "MuiGrid-align-items-xs-baseline",
                        "align-items-xs-center": "MuiGrid-align-items-xs-center",
                        "align-items-xs-flex-end": "MuiGrid-align-items-xs-flex-end",
                        "align-items-xs-flex-start": "MuiGrid-align-items-xs-flex-start",
                        "container": "MuiGrid-container",
                        "direction-xs-column": "MuiGrid-direction-xs-column",
                        "direction-xs-column-reverse": "MuiGrid-direction-xs-column-reverse",
                        "direction-xs-row-reverse": "MuiGrid-direction-xs-row-reverse",
                        "grid-lg-1": "MuiGrid-grid-lg-1",
                        "grid-lg-10": "MuiGrid-grid-lg-10",
                        "grid-lg-11": "MuiGrid-grid-lg-11",
                        "grid-lg-12": "MuiGrid-grid-lg-12",
                        "grid-lg-2": "MuiGrid-grid-lg-2",
                        "grid-lg-3": "MuiGrid-grid-lg-3",
                        "grid-lg-4": "MuiGrid-grid-lg-4",
                        "grid-lg-5": "MuiGrid-grid-lg-5",
                        "grid-lg-6": "MuiGrid-grid-lg-6",
                        "grid-lg-7": "MuiGrid-grid-lg-7",
                        "grid-lg-8": "MuiGrid-grid-lg-8",
                        "grid-lg-9": "MuiGrid-grid-lg-9",
                        "grid-lg-auto": "MuiGrid-grid-lg-auto",
                        "grid-lg-true": "MuiGrid-grid-lg-true",
                        "grid-md-1": "MuiGrid-grid-md-1",
                        "grid-md-10": "MuiGrid-grid-md-10",
                        "grid-md-11": "MuiGrid-grid-md-11",
                        "grid-md-12": "MuiGrid-grid-md-12",
                        "grid-md-2": "MuiGrid-grid-md-2",
                        "grid-md-3": "MuiGrid-grid-md-3",
                        "grid-md-4": "MuiGrid-grid-md-4",
                        "grid-md-5": "MuiGrid-grid-md-5",
                        "grid-md-6": "MuiGrid-grid-md-6",
                        "grid-md-7": "MuiGrid-grid-md-7",
                        "grid-md-8": "MuiGrid-grid-md-8",
                        "grid-md-9": "MuiGrid-grid-md-9",
                        "grid-md-auto": "MuiGrid-grid-md-auto",
                        "grid-md-true": "MuiGrid-grid-md-true",
                        "grid-sm-1": "MuiGrid-grid-sm-1",
                        "grid-sm-10": "MuiGrid-grid-sm-10",
                        "grid-sm-11": "MuiGrid-grid-sm-11",
                        "grid-sm-12": "MuiGrid-grid-sm-12",
                        "grid-sm-2": "MuiGrid-grid-sm-2",
                        "grid-sm-3": "MuiGrid-grid-sm-3",
                        "grid-sm-4": "MuiGrid-grid-sm-4",
                        "grid-sm-5": "MuiGrid-grid-sm-5",
                        "grid-sm-6": "MuiGrid-grid-sm-6",
                        "grid-sm-7": "MuiGrid-grid-sm-7",
                        "grid-sm-8": "MuiGrid-grid-sm-8",
                        "grid-sm-9": "MuiGrid-grid-sm-9",
                        "grid-sm-auto": "MuiGrid-grid-sm-auto",
                        "grid-sm-true": "MuiGrid-grid-sm-true",
                        "grid-xl-1": "MuiGrid-grid-xl-1",
                        "grid-xl-10": "MuiGrid-grid-xl-10",
                        "grid-xl-11": "MuiGrid-grid-xl-11",
                        "grid-xl-12": "MuiGrid-grid-xl-12",
                        "grid-xl-2": "MuiGrid-grid-xl-2",
                        "grid-xl-3": "MuiGrid-grid-xl-3",
                        "grid-xl-4": "MuiGrid-grid-xl-4",
                        "grid-xl-5": "MuiGrid-grid-xl-5",
                        "grid-xl-6": "MuiGrid-grid-xl-6",
                        "grid-xl-7": "MuiGrid-grid-xl-7",
                        "grid-xl-8": "MuiGrid-grid-xl-8",
                        "grid-xl-9": "MuiGrid-grid-xl-9",
                        "grid-xl-auto": "MuiGrid-grid-xl-auto",
                        "grid-xl-true": "MuiGrid-grid-xl-true",
                        "grid-xs-1": "MuiGrid-grid-xs-1",
                        "grid-xs-10": "MuiGrid-grid-xs-10",
                        "grid-xs-11": "MuiGrid-grid-xs-11",
                        "grid-xs-12": "MuiGrid-grid-xs-12",
                        "grid-xs-2": "MuiGrid-grid-xs-2",
                        "grid-xs-3": "MuiGrid-grid-xs-3",
                        "grid-xs-4": "MuiGrid-grid-xs-4",
                        "grid-xs-5": "MuiGrid-grid-xs-5",
                        "grid-xs-6": "MuiGrid-grid-xs-6",
                        "grid-xs-7": "MuiGrid-grid-xs-7",
                        "grid-xs-8": "MuiGrid-grid-xs-8",
                        "grid-xs-9": "MuiGrid-grid-xs-9",
                        "grid-xs-auto": "MuiGrid-grid-xs-auto",
                        "grid-xs-true": "MuiGrid-grid-xs-true",
                        "item": "MuiGrid-item",
                        "justify-xs-center": "MuiGrid-justify-xs-center",
                        "justify-xs-flex-end": "MuiGrid-justify-xs-flex-end",
                        "justify-xs-space-around": "MuiGrid-justify-xs-space-around",
                        "justify-xs-space-between": "MuiGrid-justify-xs-space-between",
                        "justify-xs-space-evenly": "MuiGrid-justify-xs-space-evenly",
                        "root": "MuiGrid-root",
                        "spacing-xs-1": "MuiGrid-spacing-xs-1",
                        "spacing-xs-10": "MuiGrid-spacing-xs-10",
                        "spacing-xs-2": "MuiGrid-spacing-xs-2",
                        "spacing-xs-3": "MuiGrid-spacing-xs-3",
                        "spacing-xs-4": "MuiGrid-spacing-xs-4",
                        "spacing-xs-5": "MuiGrid-spacing-xs-5",
                        "spacing-xs-6": "MuiGrid-spacing-xs-6",
                        "spacing-xs-7": "MuiGrid-spacing-xs-7",
                        "spacing-xs-8": "MuiGrid-spacing-xs-8",
                        "spacing-xs-9": "MuiGrid-spacing-xs-9",
                        "wrap-xs-nowrap": "MuiGrid-wrap-xs-nowrap",
                        "wrap-xs-wrap-reverse": "MuiGrid-wrap-xs-wrap-reverse",
                        "zeroMinWidth": "MuiGrid-zeroMinWidth",
                      }
                    }
                    container={true}
                    justify="center"
                    spacing={3}
                  >
                    <div
                      className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 MuiGrid-justify-xs-center"
                    />
                  </ForwardRef(Grid)>
                </WithStyles(ForwardRef(Grid))>
              </div>
            </ForwardRef(Container)>
          </WithStyles(ForwardRef(Container))>
        </section>
        <NotificationBar
          dismissAfter={5000}
          msg=""
          onDimiss={[Function]}
          showNotification={false}
          variant=""
        >
          <div>
            <WithStyles(ForwardRef(Snackbar))
              anchorOrigin={
                Object {
                  "horizontal": "center",
                  "vertical": "bottom",
                }
              }
              autoHideDuration={5000}
              onClose={[Function]}
              open={false}
            >
              <ForwardRef(Snackbar)
                anchorOrigin={
                  Object {
                    "horizontal": "center",
                    "vertical": "bottom",
                  }
                }
                autoHideDuration={5000}
                classes={
                  Object {
                    "anchorOriginBottomCenter": "MuiSnackbar-anchorOriginBottomCenter",
                    "anchorOriginBottomLeft": "MuiSnackbar-anchorOriginBottomLeft",
                    "anchorOriginBottomRight": "MuiSnackbar-anchorOriginBottomRight",
                    "anchorOriginTopCenter": "MuiSnackbar-anchorOriginTopCenter",
                    "anchorOriginTopLeft": "MuiSnackbar-anchorOriginTopLeft",
                    "anchorOriginTopRight": "MuiSnackbar-anchorOriginTopRight",
                    "root": "MuiSnackbar-root",
                  }
                }
                onClose={[Function]}
                open={false}
              />
            </WithStyles(ForwardRef(Snackbar))>
          </div>
        </NotificationBar>
      </div>
    </Dashboard>
  `);
});
