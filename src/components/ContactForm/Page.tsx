import "./scss/index.scss";
import * as React from "react";
import { Title } from "..";
import FormContact from "./FormContact";

interface ContactFormProps {
  title?: string;
  subTitle?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ title, subTitle }) => {
  const skillsList = true;
  if (skillsList) {
    return (
      <div className="call-with-me-selection">
        <div className="container">
          <div className="call-with-me">
            <div className="call-with-me_overlay">
              <Title title={title} subTitle={subTitle} />
              <div className="row">
                <div className="col-sm-1" />
                <div className="col-sm-10">
                  <FormContact />
                </div>
                <div className="col-sm-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

ContactForm.defaultProps = {
  title: "Call us for advice at +968 96066585",
  subTitle: "Or drop your Whatsapp and We'll text you back",
};

export default ContactForm;
