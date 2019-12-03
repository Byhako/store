import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

function Footer() {
  return (
    <section>
      <FormattedMessage {...messages.licenseMessage} />
    </section>
  );
}

export default Footer;
