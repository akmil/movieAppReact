import React from 'react';
import Header1 from './components/header/header'; // why it is broken ???
import Header2 from './components/header/header-new';
import ResultsBox from "./components/resultsBox/resultsBox";
import FilmsBox from "./components/film/filmsBox";

class MainLayout extends React.Component {
    constructor(){
        super();
    };

    render() {
        return (
            <div className={`main-layout-wrapper`}>
                <Header2></Header2>
                <ResultsBox></ResultsBox>
                <FilmsBox></FilmsBox>
            </div>
        )
    }
}

export default MainLayout;