import React from 'react';
import {Helmet} from 'react-helmet';
import Navigation from '../containers/navigation';

const Layout = ({content = () => null }) => (
  <div>
    <header>
      <Navigation />
    </header>

    <div>
      {content()}
    </div>

    <footer>
      {/*<small>Built with <a href='https://github.com/kadirahq/mantra'>Mantra</a> &amp; Meteor.</small>*/}
    </footer>

    <Helmet>
      <meta charSet="utf-8" />
      <title>ArmanChat</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
  </div>
);

export default Layout;
