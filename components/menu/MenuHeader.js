import React from 'react';
import { Container } from 'semantic-ui-react';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
import { createMedia } from '@artsy/fresnel';

export default function MenuHeader() {
  const {MediaContextProvider, Media } = createMedia({
      breakpoints: {
          'mobileBreakpoint': 0,
          'tabletBreakpoint': 768
      }
  })
  return (
      <Container fluid>
        <MediaContextProvider>
          <Media greaterThanOrEqual='tabletBreakpoint'>
            <DesktopMenu/>
          </Media>
          <Media at='mobileBreakpoint'>
            <MobileMenu/>
          </Media>
        </MediaContextProvider>  
      </Container>
  );
}