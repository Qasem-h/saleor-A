import * as React from "react";

import { INavItem, MobileNavList, Overlay, OverlayContextInterface } from "..";
import AppointmentButton from "../AppointmentButton";
import LanguageSwitch from "../LanguageSwitch";
import useLocale from "../../hooks/useLocale";

const MobileNav: React.FC<{ overlay: OverlayContextInterface }> = ({
  overlay,
}) => {
  const items: INavItem[] = overlay.context.data;
  const { locale, setLocale } = useLocale();
  return (
    <Overlay testingContext="mobileNavigationOverlay" context={overlay}>
      <div className="side-nav" onClick={evt => evt.stopPropagation()}>
        <MobileNavList items={items} hideOverlay={overlay.hide} />
          <li>
            <AppointmentButton />
          </li>
          <li>
            <LanguageSwitch locale={locale} onLocaleChange={setLocale} />
          </li>
      </div>
    </Overlay>
  );
};

export default MobileNav;
