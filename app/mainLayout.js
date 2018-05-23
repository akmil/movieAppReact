import React from 'react';
import Header from './components/header/header';
import ResultsBox from "./components/resultsBox/resultsBox";
import FilmsBox from "./components/film/filmsBox";

class MainLayout extends React.Component {
    constructor(){
        super();
    };

    render() {
        return (
            <div className={`main-layout-wrapper`}>
                <ul>
                    <li><a href="#/about">FilmsBox</a></li>
                    <li><a href="#/posts">ResultsBox</a></li>
                </ul>

                {this.props.children}

                <Header></Header>
                <ResultsBox></ResultsBox>
                <FilmsBox></FilmsBox>
            </div>
        )
    }
}

export default MainLayout;