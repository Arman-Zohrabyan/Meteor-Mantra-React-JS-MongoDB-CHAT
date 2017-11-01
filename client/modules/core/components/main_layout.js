import React from 'react';
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
  </div>
);

export default Layout;
