import React from "react";
import Home from "./Home";
import renderer from "react-test-renderer";

it("Home Component renders correctly", () => {
  const tree = renderer.create(<Home></Home>).toJSON();
  expect(tree).toMatchInlineSnapshot(`
            <section
              className="home-cont"
            >
              <div>
                <h1>
                  Drone For You - Rent a drone
                </h1>
                <div
                  className="MuiContainer-root MuiContainer-maxWidthSm"
                >
                  <div
                    className="MuiPaper-root MuiPaper-elevation1"
                  >
                    <div
                      aria-label="Icon label tabs example"
                      className="MuiTabs-root"
                    >
                      <div
                        className="MuiTabs-scroller MuiTabs-fixed"
                        onScroll={[Function]}
                        role="tablist"
                        style={
                          Object {
                            "marginBottom": null,
                            "overflow": "hidden",
                          }
                        }
                      >
                        <div
                          className="MuiTabs-flexContainer"
                        >
                          <button
                            aria-selected={true}
                            className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary Mui-selected MuiTab-labelIcon MuiTab-fullWidth"
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
                            role="tab"
                            tabIndex={0}
                            type="button"
                          >
                            <span
                              className="MuiTab-wrapper"
                            >
                              <svg
                                aria-hidden="true"
                                className="MuiSvgIcon-root"
                                focusable="false"
                                role="presentation"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                                />
                              </svg>
                              LOGIN
                            </span>
                            <span
                              className="PrivateTabIndicator-root-66 PrivateTabIndicator-colorPrimary-67 MuiTabs-indicator"
                              style={Object {}}
                            />
                          </button>
                          <button
                            aria-selected={false}
                            className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary MuiTab-labelIcon MuiTab-fullWidth"
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
                            role="tab"
                            tabIndex={0}
                            type="button"
                          >
                            <span
                              className="MuiTab-wrapper"
                            >
                              <svg
                                aria-hidden="true"
                                className="MuiSvgIcon-root"
                                focusable="false"
                                role="presentation"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M12 2c-4.97 0-9 4.03-9 9 0 4.17 2.84 7.67 6.69 8.69L12 22l2.31-2.31C18.16 18.67 21 15.17 21 11c0-4.97-4.03-9-9-9zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.3c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
                                />
                              </svg>
                              REGISTER
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      aria-labelledby="full-width-tab-0"
                      className="MuiTypography-root MuiTypography-body1"
                      hidden={false}
                      id="full-width-tabpanel-0"
                      role="tabpanel"
                    >
                      <div
                        className="MuiBox-root MuiBox-root-100"
                      >
                        <section
                          className="login-form"
                        >
                          <div
                            className="MuiContainer-root MuiContainer-maxWidthSm"
                          >
                            <div
                              className="MuiPaper-root MuiPaper-elevation1 form__fld-cont MuiPaper-rounded"
                            >
                              <form
                                autoComplete="off"
                                onSubmit={[Function]}
                              >
                                <div
                                  className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3"
                                >
                                  <div
                                    className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12"
                                  >
                                    <div
                                      className="MuiFormControl-root MuiTextField-root login-form__txt-fld MuiFormControl-marginNormal"
                                    >
                                      <label
                                        className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined MuiFormLabel-filled Mui-required Mui-required"
                                        data-shrink={true}
                                        htmlFor="outlined-email-input"
                                      >
                                        Email
                                        <span
                                          className="MuiFormLabel-asterisk MuiInputLabel-asterisk"
                                        >
                                           
                                          *
                                        </span>
                                      </label>
                                      <div
                                        className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl"
                                        onClick={[Function]}
                                      >
                                        <fieldset
                                          aria-hidden={true}
                                          className="PrivateNotchedOutline-root-260 MuiOutlinedInput-notchedOutline"
                                          style={
                                            Object {
                                              "paddingLeft": 8,
                                            }
                                          }
                                        >
                                          <legend
                                            className="PrivateNotchedOutline-legend-261"
                                            style={
                                              Object {
                                                "width": 0,
                                              }
                                            }
                                          >
                                            <span
                                              dangerouslySetInnerHTML={
                                                Object {
                                                  "__html": "&#8203;",
                                                }
                                              }
                                            />
                                          </legend>
                                        </fieldset>
                                        <input
                                          aria-invalid={false}
                                          autoComplete="email"
                                          className="MuiInputBase-input MuiOutlinedInput-input"
                                          disabled={false}
                                          id="outlined-email-input"
                                          name="email"
                                          onBlur={[Function]}
                                          onChange={[Function]}
                                          onFocus={[Function]}
                                          required={true}
                                          type="email"
                                          value=" "
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12"
                                  >
                                    <button
                                      className="MuiButtonBase-root MuiButton-root form-btn active-btn MuiButton-contained"
                                      disabled={false}
                                      onBlur={[Function]}
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
                                      type="submit"
                                    >
                                      <span
                                        className="MuiButton-label"
                                      >
                                        Sign in
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div />
                        </section>
                      </div>
                    </div>
                    <div
                      aria-labelledby="full-width-tab-1"
                      className="MuiTypography-root MuiTypography-body1"
                      hidden={true}
                      id="full-width-tabpanel-1"
                      role="tabpanel"
                    >
                      <div
                        className="MuiBox-root MuiBox-root-293"
                      >
                        <section
                          className="register-form"
                        >
                          <div
                            className="MuiContainer-root MuiContainer-maxWidthSm"
                          >
                            <div
                              className="MuiPaper-root MuiPaper-elevation1 form__fld-cont MuiPaper-rounded"
                            >
                              <form
                                autoComplete="off"
                                onSubmit={[Function]}
                              >
                                <div
                                  className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3"
                                >
                                  <div
                                    className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12"
                                  >
                                    <div
                                      className="MuiFormControl-root MuiTextField-root register-form__txt-fld MuiFormControl-marginNormal"
                                    >
                                      <label
                                        className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined Mui-required Mui-required"
                                        data-shrink={false}
                                        htmlFor="outlined-first-name-input"
                                      >
                                        First Name
                                        <span
                                          className="MuiFormLabel-asterisk MuiInputLabel-asterisk"
                                        >
                                           
                                          *
                                        </span>
                                      </label>
                                      <div
                                        className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl"
                                        onClick={[Function]}
                                      >
                                        <fieldset
                                          aria-hidden={true}
                                          className="PrivateNotchedOutline-root-260 MuiOutlinedInput-notchedOutline"
                                          style={
                                            Object {
                                              "paddingLeft": 8,
                                            }
                                          }
                                        >
                                          <legend
                                            className="PrivateNotchedOutline-legend-261"
                                            style={
                                              Object {
                                                "width": 0.01,
                                              }
                                            }
                                          >
                                            <span
                                              dangerouslySetInnerHTML={
                                                Object {
                                                  "__html": "&#8203;",
                                                }
                                              }
                                            />
                                          </legend>
                                        </fieldset>
                                        <input
                                          aria-invalid={false}
                                          className="MuiInputBase-input MuiOutlinedInput-input"
                                          disabled={false}
                                          id="outlined-first-name-input"
                                          onBlur={[Function]}
                                          onChange={[Function]}
                                          onFocus={[Function]}
                                          required={true}
                                          type="text"
                                          value=""
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12"
                                  >
                                    <div
                                      className="MuiFormControl-root MuiTextField-root register-form__txt-fld MuiFormControl-marginNormal"
                                    >
                                      <label
                                        className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined"
                                        data-shrink={false}
                                        htmlFor="outlined-last-name-input"
                                      >
                                        Last Name
                                      </label>
                                      <div
                                        className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl"
                                        onClick={[Function]}
                                      >
                                        <fieldset
                                          aria-hidden={true}
                                          className="PrivateNotchedOutline-root-260 MuiOutlinedInput-notchedOutline"
                                          style={
                                            Object {
                                              "paddingLeft": 8,
                                            }
                                          }
                                        >
                                          <legend
                                            className="PrivateNotchedOutline-legend-261"
                                            style={
                                              Object {
                                                "width": 0.01,
                                              }
                                            }
                                          >
                                            <span
                                              dangerouslySetInnerHTML={
                                                Object {
                                                  "__html": "&#8203;",
                                                }
                                              }
                                            />
                                          </legend>
                                        </fieldset>
                                        <input
                                          aria-invalid={false}
                                          className="MuiInputBase-input MuiOutlinedInput-input"
                                          disabled={false}
                                          id="outlined-last-name-input"
                                          name="lastName"
                                          onBlur={[Function]}
                                          onChange={[Function]}
                                          onFocus={[Function]}
                                          required={false}
                                          type="TextField"
                                          value=""
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12"
                                  >
                                    <div
                                      className="MuiFormControl-root MuiTextField-root register-form__txt-fld MuiFormControl-marginNormal"
                                    >
                                      <label
                                        className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined"
                                        data-shrink={false}
                                        htmlFor="outlined-phone-number-input"
                                      >
                                        Emergency Phone Number
                                      </label>
                                      <div
                                        className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl"
                                        onClick={[Function]}
                                      >
                                        <fieldset
                                          aria-hidden={true}
                                          className="PrivateNotchedOutline-root-260 MuiOutlinedInput-notchedOutline"
                                          style={
                                            Object {
                                              "paddingLeft": 8,
                                            }
                                          }
                                        >
                                          <legend
                                            className="PrivateNotchedOutline-legend-261"
                                            style={
                                              Object {
                                                "width": 0.01,
                                              }
                                            }
                                          >
                                            <span
                                              dangerouslySetInnerHTML={
                                                Object {
                                                  "__html": "&#8203;",
                                                }
                                              }
                                            />
                                          </legend>
                                        </fieldset>
                                        <input
                                          aria-invalid={false}
                                          className="MuiInputBase-input MuiOutlinedInput-input"
                                          disabled={false}
                                          id="outlined-phone-number-input"
                                          onBlur={[Function]}
                                          onChange={[Function]}
                                          onFocus={[Function]}
                                          required={false}
                                          type="number"
                                          value=""
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12"
                                  >
                                    <div
                                      className="MuiFormControl-root MuiTextField-root register-form__txt-fld MuiFormControl-marginNormal"
                                    >
                                      <label
                                        className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined Mui-required Mui-required"
                                        data-shrink={false}
                                        htmlFor="outlined-email-input"
                                      >
                                        Email
                                        <span
                                          className="MuiFormLabel-asterisk MuiInputLabel-asterisk"
                                        >
                                           
                                          *
                                        </span>
                                      </label>
                                      <div
                                        className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl"
                                        onClick={[Function]}
                                      >
                                        <fieldset
                                          aria-hidden={true}
                                          className="PrivateNotchedOutline-root-260 MuiOutlinedInput-notchedOutline"
                                          style={
                                            Object {
                                              "paddingLeft": 8,
                                            }
                                          }
                                        >
                                          <legend
                                            className="PrivateNotchedOutline-legend-261"
                                            style={
                                              Object {
                                                "width": 0.01,
                                              }
                                            }
                                          >
                                            <span
                                              dangerouslySetInnerHTML={
                                                Object {
                                                  "__html": "&#8203;",
                                                }
                                              }
                                            />
                                          </legend>
                                        </fieldset>
                                        <input
                                          aria-invalid={false}
                                          autoComplete="email"
                                          className="MuiInputBase-input MuiOutlinedInput-input"
                                          disabled={false}
                                          id="outlined-email-input"
                                          name="email"
                                          onBlur={[Function]}
                                          onChange={[Function]}
                                          onFocus={[Function]}
                                          required={true}
                                          type="email"
                                          value=""
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12"
                                  >
                                    <button
                                      className="MuiButtonBase-root MuiButton-root form-btn active-btn MuiButton-contained"
                                      disabled={false}
                                      onBlur={[Function]}
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
                                      type="submit"
                                    >
                                      <span
                                        className="MuiButton-label"
                                      >
                                        Register
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div />
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
      `);
});

it("Home Component renders correctly after handle change", () => {
  const tree = renderer.create(<Home></Home>);

  const evt = {};
  const newValue = 1;

  tree.getInstance().handleChange(evt, newValue);
  expect(tree.toJSON()).toMatchInlineSnapshot(`
    <section
      className="home-cont"
    >
      <div>
        <h1>
          Drone For You - Rent a drone
        </h1>
        <div
          className="MuiContainer-root MuiContainer-maxWidthSm"
        >
          <div
            className="MuiPaper-root MuiPaper-elevation1"
          >
            <div
              aria-label="Icon label tabs example"
              className="MuiTabs-root"
            >
              <div
                className="MuiTabs-scroller MuiTabs-fixed"
                onScroll={[Function]}
                role="tablist"
                style={
                  Object {
                    "marginBottom": null,
                    "overflow": "hidden",
                  }
                }
              >
                <div
                  className="MuiTabs-flexContainer"
                >
                  <button
                    aria-selected={false}
                    className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary MuiTab-labelIcon MuiTab-fullWidth"
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
                    role="tab"
                    tabIndex={0}
                    type="button"
                  >
                    <span
                      className="MuiTab-wrapper"
                    >
                      <svg
                        aria-hidden="true"
                        className="MuiSvgIcon-root"
                        focusable="false"
                        role="presentation"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                        />
                      </svg>
                      LOGIN
                    </span>
                    <span
                      className="MuiTouchRipple-root"
                    />
                  </button>
                  <button
                    aria-selected={true}
                    className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary Mui-selected MuiTab-labelIcon MuiTab-fullWidth"
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
                    role="tab"
                    tabIndex={0}
                    type="button"
                  >
                    <span
                      className="MuiTab-wrapper"
                    >
                      <svg
                        aria-hidden="true"
                        className="MuiSvgIcon-root"
                        focusable="false"
                        role="presentation"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 2c-4.97 0-9 4.03-9 9 0 4.17 2.84 7.67 6.69 8.69L12 22l2.31-2.31C18.16 18.67 21 15.17 21 11c0-4.97-4.03-9-9-9zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.3c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
                        />
                      </svg>
                      REGISTER
                    </span>
                    <span
                      className="MuiTouchRipple-root"
                    />
                  </button>
                </div>
                <span
                  className="PrivateTabIndicator-root-66 PrivateTabIndicator-colorPrimary-67 MuiTabs-indicator"
                  style={
                    Object {
                      "left": 0,
                      "width": 0,
                    }
                  }
                />
              </div>
            </div>
            <div
              aria-labelledby="full-width-tab-0"
              className="MuiTypography-root MuiTypography-body1"
              hidden={true}
              id="full-width-tabpanel-0"
              role="tabpanel"
            >
              <div
                className="MuiBox-root MuiBox-root-304"
              >
                <section
                  className="login-form"
                >
                  <div
                    className="MuiContainer-root MuiContainer-maxWidthSm"
                  >
                    <div
                      className="MuiPaper-root MuiPaper-elevation1 form__fld-cont MuiPaper-rounded"
                    >
                      <form
                        autoComplete="off"
                        onSubmit={[Function]}
                      >
                        <div
                          className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3"
                        >
                          <div
                            className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12"
                          >
                            <div
                              className="MuiFormControl-root MuiTextField-root login-form__txt-fld MuiFormControl-marginNormal"
                            >
                              <label
                                className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined MuiFormLabel-filled Mui-required Mui-required"
                                data-shrink={true}
                                htmlFor="outlined-email-input"
                              >
                                Email
                                <span
                                  className="MuiFormLabel-asterisk MuiInputLabel-asterisk"
                                >
                                   
                                  *
                                </span>
                              </label>
                              <div
                                className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl"
                                onClick={[Function]}
                              >
                                <fieldset
                                  aria-hidden={true}
                                  className="PrivateNotchedOutline-root-260 MuiOutlinedInput-notchedOutline"
                                  style={
                                    Object {
                                      "paddingLeft": 8,
                                    }
                                  }
                                >
                                  <legend
                                    className="PrivateNotchedOutline-legend-261"
                                    style={
                                      Object {
                                        "width": 0,
                                      }
                                    }
                                  >
                                    <span
                                      dangerouslySetInnerHTML={
                                        Object {
                                          "__html": "&#8203;",
                                        }
                                      }
                                    />
                                  </legend>
                                </fieldset>
                                <input
                                  aria-invalid={false}
                                  autoComplete="email"
                                  className="MuiInputBase-input MuiOutlinedInput-input"
                                  disabled={false}
                                  id="outlined-email-input"
                                  name="email"
                                  onBlur={[Function]}
                                  onChange={[Function]}
                                  onFocus={[Function]}
                                  required={true}
                                  type="email"
                                  value=" "
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12"
                          >
                            <button
                              className="MuiButtonBase-root MuiButton-root form-btn active-btn MuiButton-contained"
                              disabled={false}
                              onBlur={[Function]}
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
                              type="submit"
                            >
                              <span
                                className="MuiButton-label"
                              >
                                Sign in
                              </span>
                              <span
                                className="MuiTouchRipple-root"
                              />
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div />
                </section>
              </div>
            </div>
            <div
              aria-labelledby="full-width-tab-1"
              className="MuiTypography-root MuiTypography-body1"
              hidden={false}
              id="full-width-tabpanel-1"
              role="tabpanel"
            >
              <div
                className="MuiBox-root MuiBox-root-305"
              >
                <section
                  className="register-form"
                >
                  <div
                    className="MuiContainer-root MuiContainer-maxWidthSm"
                  >
                    <div
                      className="MuiPaper-root MuiPaper-elevation1 form__fld-cont MuiPaper-rounded"
                    >
                      <form
                        autoComplete="off"
                        onSubmit={[Function]}
                      >
                        <div
                          className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3"
                        >
                          <div
                            className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12"
                          >
                            <div
                              className="MuiFormControl-root MuiTextField-root register-form__txt-fld MuiFormControl-marginNormal"
                            >
                              <label
                                className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined Mui-required Mui-required"
                                data-shrink={false}
                                htmlFor="outlined-first-name-input"
                              >
                                First Name
                                <span
                                  className="MuiFormLabel-asterisk MuiInputLabel-asterisk"
                                >
                                   
                                  *
                                </span>
                              </label>
                              <div
                                className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl"
                                onClick={[Function]}
                              >
                                <fieldset
                                  aria-hidden={true}
                                  className="PrivateNotchedOutline-root-260 MuiOutlinedInput-notchedOutline"
                                  style={
                                    Object {
                                      "paddingLeft": 8,
                                    }
                                  }
                                >
                                  <legend
                                    className="PrivateNotchedOutline-legend-261"
                                    style={
                                      Object {
                                        "width": 0.01,
                                      }
                                    }
                                  >
                                    <span
                                      dangerouslySetInnerHTML={
                                        Object {
                                          "__html": "&#8203;",
                                        }
                                      }
                                    />
                                  </legend>
                                </fieldset>
                                <input
                                  aria-invalid={false}
                                  className="MuiInputBase-input MuiOutlinedInput-input"
                                  disabled={false}
                                  id="outlined-first-name-input"
                                  onBlur={[Function]}
                                  onChange={[Function]}
                                  onFocus={[Function]}
                                  required={true}
                                  type="text"
                                  value=""
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12"
                          >
                            <div
                              className="MuiFormControl-root MuiTextField-root register-form__txt-fld MuiFormControl-marginNormal"
                            >
                              <label
                                className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined"
                                data-shrink={false}
                                htmlFor="outlined-last-name-input"
                              >
                                Last Name
                              </label>
                              <div
                                className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl"
                                onClick={[Function]}
                              >
                                <fieldset
                                  aria-hidden={true}
                                  className="PrivateNotchedOutline-root-260 MuiOutlinedInput-notchedOutline"
                                  style={
                                    Object {
                                      "paddingLeft": 8,
                                    }
                                  }
                                >
                                  <legend
                                    className="PrivateNotchedOutline-legend-261"
                                    style={
                                      Object {
                                        "width": 0.01,
                                      }
                                    }
                                  >
                                    <span
                                      dangerouslySetInnerHTML={
                                        Object {
                                          "__html": "&#8203;",
                                        }
                                      }
                                    />
                                  </legend>
                                </fieldset>
                                <input
                                  aria-invalid={false}
                                  className="MuiInputBase-input MuiOutlinedInput-input"
                                  disabled={false}
                                  id="outlined-last-name-input"
                                  name="lastName"
                                  onBlur={[Function]}
                                  onChange={[Function]}
                                  onFocus={[Function]}
                                  required={false}
                                  type="TextField"
                                  value=""
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12"
                          >
                            <div
                              className="MuiFormControl-root MuiTextField-root register-form__txt-fld MuiFormControl-marginNormal"
                            >
                              <label
                                className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined"
                                data-shrink={false}
                                htmlFor="outlined-phone-number-input"
                              >
                                Emergency Phone Number
                              </label>
                              <div
                                className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl"
                                onClick={[Function]}
                              >
                                <fieldset
                                  aria-hidden={true}
                                  className="PrivateNotchedOutline-root-260 MuiOutlinedInput-notchedOutline"
                                  style={
                                    Object {
                                      "paddingLeft": 8,
                                    }
                                  }
                                >
                                  <legend
                                    className="PrivateNotchedOutline-legend-261"
                                    style={
                                      Object {
                                        "width": 0.01,
                                      }
                                    }
                                  >
                                    <span
                                      dangerouslySetInnerHTML={
                                        Object {
                                          "__html": "&#8203;",
                                        }
                                      }
                                    />
                                  </legend>
                                </fieldset>
                                <input
                                  aria-invalid={false}
                                  className="MuiInputBase-input MuiOutlinedInput-input"
                                  disabled={false}
                                  id="outlined-phone-number-input"
                                  onBlur={[Function]}
                                  onChange={[Function]}
                                  onFocus={[Function]}
                                  required={false}
                                  type="number"
                                  value=""
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12"
                          >
                            <div
                              className="MuiFormControl-root MuiTextField-root register-form__txt-fld MuiFormControl-marginNormal"
                            >
                              <label
                                className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined Mui-required Mui-required"
                                data-shrink={false}
                                htmlFor="outlined-email-input"
                              >
                                Email
                                <span
                                  className="MuiFormLabel-asterisk MuiInputLabel-asterisk"
                                >
                                   
                                  *
                                </span>
                              </label>
                              <div
                                className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl"
                                onClick={[Function]}
                              >
                                <fieldset
                                  aria-hidden={true}
                                  className="PrivateNotchedOutline-root-260 MuiOutlinedInput-notchedOutline"
                                  style={
                                    Object {
                                      "paddingLeft": 8,
                                    }
                                  }
                                >
                                  <legend
                                    className="PrivateNotchedOutline-legend-261"
                                    style={
                                      Object {
                                        "width": 0.01,
                                      }
                                    }
                                  >
                                    <span
                                      dangerouslySetInnerHTML={
                                        Object {
                                          "__html": "&#8203;",
                                        }
                                      }
                                    />
                                  </legend>
                                </fieldset>
                                <input
                                  aria-invalid={false}
                                  autoComplete="email"
                                  className="MuiInputBase-input MuiOutlinedInput-input"
                                  disabled={false}
                                  id="outlined-email-input"
                                  name="email"
                                  onBlur={[Function]}
                                  onChange={[Function]}
                                  onFocus={[Function]}
                                  required={true}
                                  type="email"
                                  value=""
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12"
                          >
                            <button
                              className="MuiButtonBase-root MuiButton-root form-btn active-btn MuiButton-contained"
                              disabled={false}
                              onBlur={[Function]}
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
                              type="submit"
                            >
                              <span
                                className="MuiButton-label"
                              >
                                Register
                              </span>
                              <span
                                className="MuiTouchRipple-root"
                              />
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div />
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `);
});
