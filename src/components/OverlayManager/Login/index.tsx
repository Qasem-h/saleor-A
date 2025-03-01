import "./scss/index.scss";

import * as React from "react";
import { FormattedMessage } from "react-intl";
import ReactSVG from "react-svg";

import {
  LoginForm,
  Offline,
  OfflinePlaceholder,
  Online,
  Overlay,
  OverlayContextInterface,
  OverlayTheme,
  OverlayType,
} from "../..";
import RegisterForm from "./RegisterForm";

import closeImg from "../../../images/x.svg";
import ForgottenPassword from "./ForgottenPassword";

class Login extends React.Component<
  { overlay: OverlayContextInterface; active?: "login" | "register" },
  { active: "login" | "register" }
> {
  static defaultProps = {
    active: "login",
  };

  constructor(props) {
    super(props);
    this.state = {
      active: props.active,
    };
  }

  changeActiveTab = (active: "login" | "register") => {
    this.setState({ active });
  };

  render() {
    const { overlay } = this.props;
    const { show, hide } = overlay;

    return (
      <Overlay testingContext="loginOverlay" context={overlay}>
        <div className="login">
          <Online>
            <div className="overlay__header">
              <p className="overlay__header-text">
                <FormattedMessage defaultMessage="Login to your account" />
              </p>
              <ReactSVG
                path={closeImg}
                onClick={hide}
                className="overlay__header__close-icon"
              />
            </div>
            <div className="login__tabs">
              <span
                data-test="loginTab"
                onClick={() => this.changeActiveTab("login")}
                className={this.state.active === "login" ? "active-tab" : ""}
              >
                <FormattedMessage defaultMessage="Sign in" />
              </span>
              <span
                data-test="registerTab"
                onClick={() => this.changeActiveTab("register")}
                className={this.state.active === "register" ? "active-tab" : ""}
              >
                <FormattedMessage defaultMessage="Sign Up" />
              </span>
            </div>
            <div className="login__content">
              {this.state.active === "login" ? (
                <>
                  <LoginForm hide={hide} />
                  <ForgottenPassword
                    onClick={() => {
                      show(OverlayType.password, OverlayTheme.modal);
                    }}
                  />
                </>
              ) : (
                <RegisterForm hide={hide} />
              )}
            </div>
          </Online>
          <Offline>
            <OfflinePlaceholder />
          </Offline>
        </div>
      </Overlay>
    );
  }
}

export default Login;
