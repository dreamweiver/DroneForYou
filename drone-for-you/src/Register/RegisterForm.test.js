import React from "react";
import RegisterForm from "./RegisterForm";
import renderer from "react-test-renderer";

it("RegisterForm renders correctly", () => {
  const tree = renderer.create(<RegisterForm></RegisterForm>).toJSON();

  expect(tree).toMatchInlineSnapshot(`
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
                              className="PrivateNotchedOutline-root-194 MuiOutlinedInput-notchedOutline"
                              style={
                                Object {
                                  "paddingLeft": 8,
                                }
                              }
                            >
                              <legend
                                className="PrivateNotchedOutline-legend-195"
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
                              className="PrivateNotchedOutline-root-194 MuiOutlinedInput-notchedOutline"
                              style={
                                Object {
                                  "paddingLeft": 8,
                                }
                              }
                            >
                              <legend
                                className="PrivateNotchedOutline-legend-195"
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
                              className="PrivateNotchedOutline-root-194 MuiOutlinedInput-notchedOutline"
                              style={
                                Object {
                                  "paddingLeft": 8,
                                }
                              }
                            >
                              <legend
                                className="PrivateNotchedOutline-legend-195"
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
                              className="PrivateNotchedOutline-root-194 MuiOutlinedInput-notchedOutline"
                              style={
                                Object {
                                  "paddingLeft": 8,
                                }
                              }
                            >
                              <legend
                                className="PrivateNotchedOutline-legend-195"
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
      `);
});

it("RegisterForm renders correctly- Invoke Register action", () => {
  const tree = renderer.create(<RegisterForm></RegisterForm>);
  const event = {
    preventDefault: _ => {}
  };

  tree.getInstance().register(event);

  expect(tree.toJSON()).toMatchInlineSnapshot(`
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
                              className="PrivateNotchedOutline-root-194 MuiOutlinedInput-notchedOutline"
                              style={
                                Object {
                                  "paddingLeft": 8,
                                }
                              }
                            >
                              <legend
                                className="PrivateNotchedOutline-legend-195"
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
                              className="PrivateNotchedOutline-root-194 MuiOutlinedInput-notchedOutline"
                              style={
                                Object {
                                  "paddingLeft": 8,
                                }
                              }
                            >
                              <legend
                                className="PrivateNotchedOutline-legend-195"
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
                              className="PrivateNotchedOutline-root-194 MuiOutlinedInput-notchedOutline"
                              style={
                                Object {
                                  "paddingLeft": 8,
                                }
                              }
                            >
                              <legend
                                className="PrivateNotchedOutline-legend-195"
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
                              className="PrivateNotchedOutline-root-194 MuiOutlinedInput-notchedOutline"
                              style={
                                Object {
                                  "paddingLeft": 8,
                                }
                              }
                            >
                              <legend
                                className="PrivateNotchedOutline-legend-195"
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
      `);
});

it("Register Form renders correctly - invoke handleChange action", () => {
  const tree = renderer.create(<RegisterForm></RegisterForm>);

  const event = {
    target: {
      value: "newValue"
    }
  };

  tree.getInstance().handleChange(event);

  expect(tree.toJSON()).toMatchInlineSnapshot(`
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
                          className="PrivateNotchedOutline-root-194 MuiOutlinedInput-notchedOutline"
                          style={
                            Object {
                              "paddingLeft": 8,
                            }
                          }
                        >
                          <legend
                            className="PrivateNotchedOutline-legend-195"
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
                          className="PrivateNotchedOutline-root-194 MuiOutlinedInput-notchedOutline"
                          style={
                            Object {
                              "paddingLeft": 8,
                            }
                          }
                        >
                          <legend
                            className="PrivateNotchedOutline-legend-195"
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
                          className="PrivateNotchedOutline-root-194 MuiOutlinedInput-notchedOutline"
                          style={
                            Object {
                              "paddingLeft": 8,
                            }
                          }
                        >
                          <legend
                            className="PrivateNotchedOutline-legend-195"
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
                          className="PrivateNotchedOutline-root-194 MuiOutlinedInput-notchedOutline"
                          style={
                            Object {
                              "paddingLeft": 8,
                            }
                          }
                        >
                          <legend
                            className="PrivateNotchedOutline-legend-195"
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
    `);
});

it("Register Form renders correctly - invoke dismissNotification action", () => {
  const tree = renderer.create(<RegisterForm></RegisterForm>);

  tree.getInstance().dismissNotification();

  expect(tree.toJSON()).toMatchInlineSnapshot(`
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
                      className="PrivateNotchedOutline-root-194 MuiOutlinedInput-notchedOutline"
                      style={
                        Object {
                          "paddingLeft": 8,
                        }
                      }
                    >
                      <legend
                        className="PrivateNotchedOutline-legend-195"
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
                      className="PrivateNotchedOutline-root-194 MuiOutlinedInput-notchedOutline"
                      style={
                        Object {
                          "paddingLeft": 8,
                        }
                      }
                    >
                      <legend
                        className="PrivateNotchedOutline-legend-195"
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
                      className="PrivateNotchedOutline-root-194 MuiOutlinedInput-notchedOutline"
                      style={
                        Object {
                          "paddingLeft": 8,
                        }
                      }
                    >
                      <legend
                        className="PrivateNotchedOutline-legend-195"
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
                      className="PrivateNotchedOutline-root-194 MuiOutlinedInput-notchedOutline"
                      style={
                        Object {
                          "paddingLeft": 8,
                        }
                      }
                    >
                      <legend
                        className="PrivateNotchedOutline-legend-195"
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
  `);
});

// it("TabPanel renders correctly - deactivate tab", () => {
//   const activePanelIndex = 1;
//   const tree = renderer
//     .create(<TabPanel value={activePanelIndex} index={0}></TabPanel>)
//     .toJSON();
//   expect(tree).toMatchInlineSnapshot(`
//     <div
//       aria-labelledby="full-width-tab-0"
//       className="MuiTypography-root MuiTypography-body1"
//       hidden={true}
//       id="full-width-tabpanel-0"
//       role="tabpanel"
//     >
//       <div
//         className="MuiBox-root MuiBox-root-33"
//       />
//     </div>
//   `);
// });
