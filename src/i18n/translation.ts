import { IntlShape } from 'react-intl';
import { DEFAULT_LOCALE } from './constant';

export class Translation {
  locale = DEFAULT_LOCALE;
  intl: IntlShape | undefined;

  init(intl: IntlShape) {
    this.intl = intl;
  }

  get(id: string, values?: Record<string, any>) {
    const translation = this.intl?.formatMessage({ id }, values);

    return translation;
  }

  hasTranslation(id: string) {
    return this.intl?.messages[id] !== undefined;
  }
}

export const t = new Translation();
