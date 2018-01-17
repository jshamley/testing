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
              <Text margin="30px 0 0" textSize={26}>Do more unit tests</Text>
            </Appear>
            <Appear>
              <Text margin="10px 0 0" textSize={26}>Test more</Text>
            </Appear>
            <Appear>
              <Text margin="10px 0 0" textSize={26}>Testing should be included in our Definition of Done</Text>
            </Appear>
            <Appear>
              <Text margin="10px 0 0" textSize={26}>We Suck At Testing</Text>
            </Appear>
            <Appear>
              <Text margin="10px 0 0" textSize={26}>Standards would be helpful</Text>
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
          <Appear>
            <Text margin="30px 0 0">Jest, Jasmine, Karma, Mocha, Enzyme, Chai, Cheerio</Text>
          </Appear>
        </Slide>
        <Slide>
          <Heading size={3}>Snapshot Testing</Heading>
          <Appear>
            <Text margin="30px 0 0">Jest</Text>
          </Appear>
        </Slide>
        <Slide>
          <Heading size={3}>Integration Testing</Heading>
          <Appear>
            <Text margin="30px 0 0">Selenium, Jenkins</Text>
          </Appear>
        </Slide>
        <Slide>
          <Heading size={3}>End-to-End Testing</Heading>
          <Appear>
            <Text margin="30px 0 0">Selenium, Jenkins</Text>
          </Appear>
        </Slide>
        <Slide>
          <Heading size={3}>Manual Testing</Heading>
        </Slide>
        <Slide>
          <Heading size={3} caps>
            What are our goals?
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
