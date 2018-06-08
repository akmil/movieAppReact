import * as React from 'react';

export class About extends React.Component {
  getInitialProps(ctx) {
    // component will read it from store's state when rendered
    console.log('About.getInitialProps ->>', ctx, this.props);
    return {};
  }

  constructor(props) {
    super(props);
    console.log('constructor props(About)', props);
  }

  render() {
    return (
        <p>About tab:</p>
    );
  }
}

export default About;
