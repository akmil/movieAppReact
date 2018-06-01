import React from 'react';
import Header from '../ssr-app/header';
import ResultsBox from "../app/components/resultsBox/resultsBox";
// import FilmsBox from "./components/film/filmsBox";

class HomeLayout extends React.Component {
    constructor(){
        super();
    };

    render() {
        return (
            <div className={`main-layout-wrapper`}>
                <Header></Header>
                <ResultsBox></ResultsBox>
            </div>
        )
    }
}

export default HomeLayout;