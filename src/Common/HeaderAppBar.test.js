import React from "react";
import HeaderAppBar from "./HeaderAppBar";
import EnzymeToJson from "enzyme-to-json";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("HeaderAppBar renders correctly without banned user", () => {
  const timerValue = 0;
  const returnDrone = () => {};
  const isBanned = false;
  const fullName = "Lakshman, Manoj Kumar";
  const tree = mount(
    <HeaderAppBar
      countDownValue={timerValue}
      onDroneReturn={returnDrone}
      loggedInUser={fullName}
      isUserBanned={isBanned}
    ></HeaderAppBar>
  );
  expect(EnzymeToJson(tree)).toMatchInlineSnapshot(`
            <HeaderAppBar
              countDownValue={0}
              isUserBanned={false}
              loggedInUser="Lakshman, Manoj Kumar"
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
                                   
                                  Lakshman, Manoj Kumar
                                   
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
      `);
});

it("HeaderAppBar renders correctly with banned user", () => {
  const timerValue = 0;
  const returnDrone = () => {};
  const isBanned = true;
  const fullName = "Lakshman, Manoj Kumar";
  const tree = mount(
    <HeaderAppBar
      countDownValue={timerValue}
      onDroneReturn={returnDrone}
      loggedInUser={fullName}
      isUserBanned={isBanned}
    ></HeaderAppBar>
  );
  expect(EnzymeToJson(tree)).toMatchInlineSnapshot(`
        <HeaderAppBar
          countDownValue={0}
          isUserBanned={true}
          loggedInUser="Lakshman, Manoj Kumar"
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
                            <WithStyles(ForwardRef(Chip))
                              className="margin3"
                              color="secondary"
                              icon={<Memo />}
                              label="BANNED"
                            >
                              <ForwardRef(Chip)
                                className="margin3"
                                classes={
                                  Object {
                                    "avatar": "MuiChip-avatar",
                                    "avatarChildren": "MuiChip-avatarChildren",
                                    "avatarColorPrimary": "MuiChip-avatarColorPrimary",
                                    "avatarColorSecondary": "MuiChip-avatarColorSecondary",
                                    "avatarSmall": "MuiChip-avatarSmall",
                                    "clickable": "MuiChip-clickable",
                                    "clickableColorPrimary": "MuiChip-clickableColorPrimary",
                                    "clickableColorSecondary": "MuiChip-clickableColorSecondary",
                                    "colorPrimary": "MuiChip-colorPrimary",
                                    "colorSecondary": "MuiChip-colorSecondary",
                                    "deletable": "MuiChip-deletable",
                                    "deletableColorPrimary": "MuiChip-deletableColorPrimary",
                                    "deletableColorSecondary": "MuiChip-deletableColorSecondary",
                                    "deleteIcon": "MuiChip-deleteIcon",
                                    "deleteIconColorPrimary": "MuiChip-deleteIconColorPrimary",
                                    "deleteIconColorSecondary": "MuiChip-deleteIconColorSecondary",
                                    "deleteIconOutlinedColorPrimary": "MuiChip-deleteIconOutlinedColorPrimary",
                                    "deleteIconOutlinedColorSecondary": "MuiChip-deleteIconOutlinedColorSecondary",
                                    "deleteIconSmall": "MuiChip-deleteIconSmall",
                                    "icon": "MuiChip-icon",
                                    "iconColorPrimary": "MuiChip-iconColorPrimary",
                                    "iconColorSecondary": "MuiChip-iconColorSecondary",
                                    "iconSmall": "MuiChip-iconSmall",
                                    "label": "MuiChip-label",
                                    "labelSmall": "MuiChip-labelSmall",
                                    "outlined": "MuiChip-outlined",
                                    "outlinedPrimary": "MuiChip-outlinedPrimary",
                                    "outlinedSecondary": "MuiChip-outlinedSecondary",
                                    "root": "MuiChip-root",
                                    "sizeSmall": "MuiChip-sizeSmall",
                                  }
                                }
                                color="secondary"
                                icon={<Memo />}
                                label="BANNED"
                              >
                                <div
                                  className="MuiChip-root margin3 MuiChip-colorSecondary"
                                  onKeyDown={[Function]}
                                  onKeyUp={[Function]}
                                >
                                  <ForwardRef
                                    className="MuiChip-icon MuiChip-iconColorSecondary"
                                  >
                                    <WithStyles(ForwardRef(SvgIcon))
                                      className="MuiChip-icon MuiChip-iconColorSecondary"
                                    >
                                      <ForwardRef(SvgIcon)
                                        className="MuiChip-icon MuiChip-iconColorSecondary"
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
                                          className="MuiSvgIcon-root MuiChip-icon MuiChip-iconColorSecondary"
                                          focusable="false"
                                          role="presentation"
                                          viewBox="0 0 24 24"
                                        >
                                          <path
                                            d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"
                                          />
                                        </svg>
                                      </ForwardRef(SvgIcon)>
                                    </WithStyles(ForwardRef(SvgIcon))>
                                  </ForwardRef>
                                  <span
                                    className="MuiChip-label"
                                  >
                                    BANNED
                                  </span>
                                </div>
                              </ForwardRef(Chip)>
                            </WithStyles(ForwardRef(Chip))>
                            <b>
                               
                              Lakshman, Manoj Kumar
                               
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
    `);
});

it("HeaderAppBar renders correctly - valid timer value", () => {
  const timerValue = "03 : 06 : 09";
  const returnDrone = () => {};
  const isBanned = false;
  const fullName = "Lakshman, Manoj Kumar";
  const tree = mount(
    <HeaderAppBar
      countDownValue={timerValue}
      onDroneReturn={returnDrone}
      loggedInUser={fullName}
      isUserBanned={isBanned}
    ></HeaderAppBar>
  );
  expect(EnzymeToJson(tree)).toMatchInlineSnapshot(`
    <HeaderAppBar
      countDownValue="03 : 06 : 09"
      isUserBanned={false}
      loggedInUser="Lakshman, Manoj Kumar"
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
                               
                              Time Remaining - 03 : 06 : 09
                            </p>
                          </ForwardRef(Typography)>
                        </WithStyles(ForwardRef(Typography))>
                        <div
                          className="makeStyles-grow-1"
                        />
                        <WithStyles(ForwardRef(Button))
                          className="margin3"
                          color="primary"
                          disabled={false}
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
                            disabled={false}
                            onClick={[Function]}
                            variant="contained"
                          >
                            <WithStyles(ForwardRef(ButtonBase))
                              className="MuiButton-root margin3 MuiButton-contained MuiButton-containedPrimary"
                              component="button"
                              disabled={false}
                              focusRipple={true}
                              focusVisibleClassName="Mui-focusVisible"
                              onClick={[Function]}
                              type="button"
                            >
                              <ForwardRef(ButtonBase)
                                className="MuiButton-root margin3 MuiButton-contained MuiButton-containedPrimary"
                                classes={
                                  Object {
                                    "disabled": "Mui-disabled",
                                    "focusVisible": "Mui-focusVisible",
                                    "root": "MuiButtonBase-root",
                                  }
                                }
                                component="button"
                                disabled={false}
                                focusRipple={true}
                                focusVisibleClassName="Mui-focusVisible"
                                onClick={[Function]}
                                type="button"
                              >
                                <button
                                  className="MuiButtonBase-root MuiButton-root margin3 MuiButton-contained MuiButton-containedPrimary"
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
                                    Return Drone
                                  </span>
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
                                </button>
                              </ForwardRef(ButtonBase)>
                            </WithStyles(ForwardRef(ButtonBase))>
                          </ForwardRef(Button)>
                        </WithStyles(ForwardRef(Button))>
                        <div
                          className="makeStyles-grow-1"
                        />
                        <b>
                           
                          Lakshman, Manoj Kumar
                           
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
  `);
});
