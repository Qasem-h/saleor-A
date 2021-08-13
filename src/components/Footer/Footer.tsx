import "./scss/index.scss";

import * as React from "react";
import ReactSVG from "react-svg";
import { SocialMediaIcon } from "..";
import {
  SOCIAL_MEDIA,
  CONTACT_INFO,
  ABOUT_US,
  COPYRIGHT,
} from "../../core/config";
import Nav from "./Nav";

const Footer: React.FC = () => (
  <div className="footer" id="footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-5">
          <div className="footer-nav__section">
            <h4 className="footer-nav__section-header">{ABOUT_US.title}</h4>
            <div className="footer-nav__section-content">
              <p>{ABOUT_US.description}</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="footer-nav__section">
            <h4 className="footer-nav__section-header">{CONTACT_INFO.title}</h4>
            <div className="footer-nav__section-content">
              <div className="footer-nav__section-contact-info">
                <ReactSVG path={CONTACT_INFO.phone_number.icon_path} />
                <p>{CONTACT_INFO.phone_number.phone}</p>
              </div>
              <div className="footer-nav__section-contact-info">
                <ReactSVG path={CONTACT_INFO.open_hours.icon_path} />
                <p>{CONTACT_INFO.open_hours.open_hours}</p>
              </div>
              <div className="footer-nav__section-contact-info">
                <ReactSVG path={CONTACT_INFO.email.icon_path} />
                <p>{CONTACT_INFO.email.email}</p>
              </div>
              <div className="footer-nav__section-contact-info">
                <ReactSVG path={CONTACT_INFO.address.icon_path} />
                <p>{CONTACT_INFO.address.address}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <Nav />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
          <div className="footer__favicons">
            {SOCIAL_MEDIA.map(medium => (
              <SocialMediaIcon medium={medium} key={medium.ariaLabel} />
            ))}
          </div>
        </div>
        <hr />
        <div className="col-xs-12 col-sm-12 col-md-12 footer__copyright">
          <p>
            {COPYRIGHT.madein}
            <a href={COPYRIGHT.byso_link} target="_blank" >{COPYRIGHT.byso}</a>
            {COPYRIGHT.rights}
            <br />
            <a href={COPYRIGHT.link} target="_blank" >{COPYRIGHT.by}</a>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
