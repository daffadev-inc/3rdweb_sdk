import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import messages from '../lib/lang';
import Layout from '../components/layout';

export default function Home() {
  const [locale, setLocale] = useState('en');

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
        <Layout setLocale={setLocale} home />
    </IntlProvider>
  );
}
