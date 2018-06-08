import React from 'react';
import Header from './components/header/header';
import ResultsBox from './components/resultsBox/resultsBox';
import FilmsBox from './components/film/filmsBox';

class HomeLayout extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
            <div className={'main-layout-wrapper'}>
                <Header></Header>
                <ResultsBox></ResultsBox>
            </div>
    );
  }
}

export default HomeLayout;
