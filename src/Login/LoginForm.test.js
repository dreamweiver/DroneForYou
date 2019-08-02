import React from "react";
import LoginForm from "./LoginForm";
import renderer from "react-test-renderer";

it("Login Form renders correctly", () => {
  const tree = renderer.create(<LoginForm></LoginForm>).toJSON();

  expect(tree).toMatchInlineSnapshot(`
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
      `);
});

it("Login Form renders correctly - invoke login action", () => {
  const tree = renderer.create(<LoginForm></LoginForm>);

  const event = {
    preventDefault: _ => {}
  };

  tree.getInstance().login(event);

  expect(tree.toJSON()).toMatchInlineSnapshot(`
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
  `);
});

it("Login Form renders correctly - invoke handleChange action", () => {
  const tree = renderer.create(<LoginForm></LoginForm>);

  const event = {
    target: {
      value: "newValue"
    }
  };

  tree.getInstance().handleChange(event);

  expect(tree.toJSON()).toMatchInlineSnapshot(`
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
                          value="newValue"
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
    `);
});

it("Login Form renders correctly - invoke dismissNotification action", () => {
  const tree = renderer.create(<LoginForm></LoginForm>);

  tree.getInstance().dismissNotification();

  expect(tree.toJSON()).toMatchInlineSnapshot(`
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
      `);
});
