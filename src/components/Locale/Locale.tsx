import React from "react";
import { IntlProvider } from "react-intl";
import useLocalStorage from "../../hooks/useLocalStorage";

export enum Locale {
  AR = "ar",
  EN = "en",
  FA = "fa",
}

interface StructuredMessage {
  context?: string;
  string: string;
}
type LocaleMessages = Record<string, StructuredMessage>;

export const localeNames: Record<Locale, string> = {
  [Locale.AR]: "العربيّة",
  [Locale.EN]: "English",
  [Locale.FA]: "فارسی",
};

const dotSeparator = "_dot_";
const sepRegExp = new RegExp(dotSeparator, "g");

function getKeyValueJson(messages: LocaleMessages): Record<string, string> {
  if (messages) {
    const keyValueMessages: Record<string, string> = {};
    return Object.entries(messages).reduce((acc, [id, msg]) => {
      acc[id.replace(sepRegExp, ".")] = msg.string;
      return acc;
    }, keyValueMessages);
  }
}

export function getMatchingLocale(languages: readonly string[]): Locale {
  const localeEntries = Object.entries(Locale);
  for (const preferredLocale of languages) {
    for (const localeEntry of localeEntries) {
      if (localeEntry[1].toLowerCase() === preferredLocale.toLowerCase()) {
        return Locale[localeEntry[0]];
      }
    }
  }

  return undefined;
}

const defaultLocale = Locale.EN;

export interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}
export const LocaleContext = React.createContext<LocaleContextType>({
  locale: defaultLocale,
  setLocale: () => undefined,
});

const { Consumer: LocaleConsumer, Provider: RawLocaleProvider } = LocaleContext;

const LocaleProvider: React.FC = ({ children }) => {
  const [locale, setLocale] = useLocalStorage(
    "locale",
    getMatchingLocale(navigator.languages) || defaultLocale
  );
  const [messages, setMessages] = React.useState(undefined);

  React.useEffect(() => {
    async function changeLocale() {
      if (locale !== defaultLocale) {
        // It seems like Webpack is unable to use aliases for lazy imports
        const mod = await import(`../../../locale/${locale}.json`);
        setMessages(mod.default);
      } else {
        setMessages(undefined);
      }
    }

    changeLocale();
  }, [locale]);

  return (
    <IntlProvider
      defaultLocale={defaultLocale}
      locale={locale}
      messages={getKeyValueJson(messages)}
      onError={err => {
        console.error(err);
      }}
      key={locale}
    >
      <RawLocaleProvider
        value={{
          locale,
          setLocale,
        }}
      >
        {children}
      </RawLocaleProvider>
    </IntlProvider>
  );
};

export { LocaleConsumer, LocaleProvider, RawLocaleProvider };
