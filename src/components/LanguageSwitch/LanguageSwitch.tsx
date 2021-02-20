import React from "react";
import classNames from "classnames";

import { Locale, localeNames } from "../Locale";

import "./scss/index.scss";

interface StaffPreferencesProps {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
}

const StaffPreferences: React.FC<StaffPreferencesProps> = ({
  locale,
  onLocaleChange,
}) => {
  return (
    <div className="select-dropdown">
      <select
        id="select-superpower"
        value={locale}
        onChange={event => onLocaleChange(event.target.value)}
      >
        {Object.values(Locale).map(locale => (
          <option value={locale}>{localeNames[locale]}</option>
        ))}
      </select>
    </div>
  );
};
StaffPreferences.displayName = "StaffPreferences";
export default StaffPreferences;
