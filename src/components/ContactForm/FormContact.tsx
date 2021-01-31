// import "./scss/index.scss";
import React from "react";
import { useIntl } from "react-intl";
import { commonMessages } from "@temp/intl";
import emailjs from "emailjs-com";
import { useAlert } from "react-alert";
import { Button, Form, TextField } from "..";
import { EMAILJS_PARAMS } from "../../core/config";

interface IFormContact {}

const FormContact: React.FC<IFormContact> = () => {
  const [loading, setLoading] = React.useState(false);
  // const [errors, setErrors] = React.useState(null);

  const intl = useIntl();
  const alert = useAlert();

  const handleOnSubmit = async evt => {
    evt.preventDefault();
    setLoading(true);

    const { service_id, template_id, user_id } = EMAILJS_PARAMS;
    const response = await emailjs.sendForm(
      service_id,
      template_id,
      evt.target,
      user_id
    );
    setLoading(false);
    if (response.status !== 200) {
      alert.show(
        {
          title: intl.formatMessage({
            defaultMessage:
              "Something went wrong, Please call with phone number on the contact form",
          }),
        },
        { type: "error" }
      );
    } else if (response) {
      alert.show(
        {
          title: intl.formatMessage({
            defaultMessage: "Thank you, We will call you as soon as possible",
          }),
        },
        { type: "success" }
      );
    }
  };

  return (
    <div className="form-row">
      <Form onSubmit={handleOnSubmit}>
        <div className="col-md-3 col-lg-4">
          <div className="form-group">
            <TextField
              name="email"
              autoComplete="email"
              label={intl.formatMessage(commonMessages.eMail)}
              type="email"
              required
            />
          </div>
        </div>
        <div className="col-md-1 col-lg-4">
          <div className="form-group">
            <TextField
              name="fullname"
              label={intl.formatMessage({ defaultMessage: "Full Name" })}
              type="fullname"
              required
            />
          </div>
        </div>
        <div className="col-md-1 col-lg-4">
          <div className="form-group">
            <Button
              testingContext="submit"
              type="submit"
              {...(loading && { disabled: true })}
            >
              {loading
                ? intl.formatMessage(commonMessages.loading)
                : intl.formatMessage({ defaultMessage: "Call Me" })}
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default FormContact;
