import { createIntl, createIntlCache } from 'react-intl';
import { Translation } from './translation';

export async function initIntl(t: Translation): Promise<void> {
  const locale = t.locale;
  const lang = await import(`./locale/${locale}.json`);

  const cache = createIntlCache();
  const intl = createIntl(
    {
      locale,
      messages: lang.default,
    },
    cache,
  );

  t.init(intl);
}
