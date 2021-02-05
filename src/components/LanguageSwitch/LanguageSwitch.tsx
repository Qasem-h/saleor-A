import React from "react";
import { Locale, localeNames } from "../Locale";

interface StaffPreferencesProps {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
}

const StaffPreferences: React.FC<StaffPreferencesProps> = ({
  locale,
  onLocaleChange,
}) => {
  return (
    <div>
      <div>
        <select
          value={locale}
          onChange={event => onLocaleChange(event.target.value)}
        >
          {Object.values(Locale).map(locale => (
            <option value={locale}>{localeNames[locale]}</option>
          ))}
        </select>
      </div>
    </div>
  );
};
StaffPreferences.displayName = "StaffPreferences";
export default StaffPreferences;
