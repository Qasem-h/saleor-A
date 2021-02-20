import * as React from "react";
import { FormattedMessage } from "react-intl";
import "./scss/index.scss";

const AppointmentButton: React.FC<{}> = () => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href="https://forms.gle/b3Yu34gjgwYeGrgG7"
  >
    <button className="app-button">
      <FormattedMessage defaultMessage="Schedule Appointment" />
    </button>
  </a>
);

export default AppointmentButton;
