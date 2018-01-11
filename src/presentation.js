// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  Deck,
  Heading,
  Slide,
  Text,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#03A9FC',
    secondary: '#1F2022',
    tertiary: 'white',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        theme={theme}
        transition={['zoom', 'slide']}
        transitionDuration={500}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Software Testing
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            A discussion for Healthgrades engineering
          </Text>
        </Slide>
        <Slide>
          <div>
            <Heading size={5}>Testing Survey</Heading>
            <Appear>
              <p>Do more unit tests</p>
            </Appear>
            <Appear>
              <p>Test more</p>
            </Appear>
            <Appear>
              <p>Testing should be included in our Definition of Done</p>
            </Appear>
            <Appear>
              <p>We Suck At Testing</p>
            </Appear>
            <Appear>
              <p>YOU ARE A DREAMBOAT!</p>
            </Appear>
          </div>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading size={5} caps>
            Software Testing
          </Heading>
          <img src="../Test-Pyramid.png" width="75%" alt="testing pyramid" />
        </Slide>
        <Slide>
          <Heading size={3}>Unit Testing</Heading>
        </Slide>
        <Slide>
          <Heading size={3}>Integration Testing</Heading>
        </Slide>
        <Slide>
          <Heading size={3}>UI Testing</Heading>
        </Slide>
        <Slide>
          <Heading size={3}>Manual Testing</Heading>
        </Slide>
        <Slide>
          <Heading size={3} caps>
            Goals...
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
