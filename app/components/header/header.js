import React from 'react';
import {SearchButton} from "./search/searchButton";
// import {SearchFilter} from "./search/searchFilter";
import {SearchField} from "./search/searchField";
import {ResultsCount, ResultsSort} from "./resultsPanel";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";

import { connect } from 'react-redux';
import * as actions from '../../r_actions/index'


class Header extends React.Component {
    constructor(props){
      super(props);
      this.state = {sortBy: 'title', text: ''};
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInputChange = (event) => {
        this.setState({text: event.target.value});
    }

    handleFormSubmit(e) {
        e.preventDefault();

        // console.log('Search match.params', this.props.match);

        if(!this.props.match || !this.props.match.query){
            let location = `/search/search=${this.state.text}&searchBy=${this.state.sortBy}`;
            // console.log('location', location, this.props);
            this.props.history.push(location)
        }

    }

    setGenre(genre){
      this.setState({sortBy: genre});
    }

    getTotal = () => this.props.totalMovies;

    componentDidMount(){
        // var query= `search=${this.state.text}&searchBy=${this.state.sortBy}`;

        if(this.props.query){
            this.props.fetchMovieByQuery(this.props.query);
        }
    }

    render() {
        return (
            <header>
                <div className="header-wrapper">
                    <form className="form-horizontal"
                          action={"/search/${query}"}
                          onSubmit={this.handleFormSubmit}
                    >
                    <div className='logo'>netfixroulette</div>
                         <SearchField
                            val={'Search by name'}
                            onChange = {this.handleInputChange}
                        />
                    <div className='search-filter'>
                        <div className='search-filter-box'>
                            Search by
                            <ul className={'search-filter-list'}>
                                <li
                                    onClick={ ()=>this.setGenre('title') }
                                    className={(this.state.sortBy === 'title')? 'active' : ''}
                                    >
                                    Title
                                </li>
                                <li onClick={ ()=>this.setGenre('genre') }
                                    className={(this.state.sortBy === 'genre')? 'active' : ''}
                                    >
                                    Genre
                                </li>
                            </ul>
                        </div>
                        <SearchButton />
                    </div>
                  </form>
                </div>
                { this.getTotal() > 0 &&
                    <div className='results results-wrapper'>
                        <ResultsCount count={this.getTotal()}></ResultsCount>
                        <ResultsSort activeItem={1}></ResultsSort>
                    </div>
                }
            </header>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
    sortBy: state.sortBy,
    totalMovies: state.movies.length
  }
};

const mapDispatchToProps = ({
    // fetchMovie: actions.fetchMovieByName,
    fetchMovieByQuery: actions.fetchMovieByQuery,
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
