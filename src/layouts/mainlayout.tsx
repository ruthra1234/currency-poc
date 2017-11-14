import './main-layout.css!';
import * as React from 'react';
import { LayoutTopNav, LayoutTopNavLink } from './components/layout-top';
import { LayoutHeader } from './components/layoutheader';
import { LayoutMain } from './components/layoutmain';
import { LayoutFooter } from './components/layoutfooter';

export class MainLayout extends React.Component<{}, {}> {
  render() {
    const {children} = this.props;

    return (
      <div className="c-text">
        <LayoutHeader>
          <LayoutTopNav>
         
            <LayoutTopNavLink href="/currency-converter"> </LayoutTopNavLink>
           
          </LayoutTopNav>
        </LayoutHeader>

        <LayoutMain>
          {children}
        </LayoutMain>

        <LayoutFooter>
         <br />
        
        </LayoutFooter>
      </div>
    );
  };
};
