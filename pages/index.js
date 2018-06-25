import React from 'react';
import Header from '../app/components/header/header';
import ResultsBox from '../app/components/resultsBox/resultsBox';


class HomeLayout extends React.Component {
  // static getInitialProps = async ({ reduxStore, req, store })=> {
  //     const isServer = !!req;
  //     console.log('HomeLayout ->>', store, isServer);
  //     await store.dispatch({type: 'TEST' });
  //
  //     return {};
  // }

  constructor(props) {
    super(props);
    // console.log('props(HomeLayout)', props);
  }

  componentDidMount() {
    // console.log('HomeLayout', this.props.movies);
  }

  componentWillUnmount() {
    // clearInterval(this.timer)
  }

  render() {
    return (
            <div className={'main-wrapper'}>
                <Header></Header>
                <ResultsBox></ResultsBox>
            </div>
    );
  }
}


// export default connect()(withRouter(HomeLayout));
export default HomeLayout;
// export default HomeLayout;
