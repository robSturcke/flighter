import React from 'react';
import Navigation from './navigation';

const Layout = ({ children }) => (
  <div className="content">
    <header>
      <div className="spacer" />
      <Navigation />
    </header>
    <main>{children}</main>
    <footer>
      <div className="text-center footer_txt">
        <p>
          © All Rights Preserved {new Date().getFullYear()}, Built by
          {` `}
          <a href="https://www.robsturcke.dev">robSturcke</a>
        </p>
      </div>
    </footer>
  </div>
);

export default Layout;
