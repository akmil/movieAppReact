import React from 'react';
import {SearchButton} from "./search/searchButton";
import {SearchFilter} from "./search/searchFilter";
import {SearchField} from "./search/searchField";
import {ResultsCount, ResultsSort} from "./resultsPanel";

import { connect } from 'react-redux';
import * as actions from '../../r_actions/index'

let titleInput;

class Header extends React.Component {
    constructor(props){
      super(props);
      this.state = {sortBy: 'title'}
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    
    // componentDidMount(){
    //   this.setState({sortBy: 'title'});
    // }



    handleInputChange = (event) => {
        this.setState({text: event.target.value});
    }

    handleFormSubmit(e) {
        e.preventDefault();
        this.props.fetchMovie(this.state.text, this.state.sortBy);
    }

    setGenre(genre){
      this.setState({sortBy: genre});
    }

    getTotal = () => this.props.totalMovies

    render() {
        return (
            <header>
                <div className="header-wrapper">
                    <form className="form-horizontal"
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
                        <SearchButton/>
                    </div>
                  </form>
                </div>
                <div className='results results-wrapper'>
                    <ResultsCount count={this.getTotal()}></ResultsCount>
                    <ResultsSort activeItem={1}></ResultsSort>
                </div>
            </header>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    // console.log('ownProps', ownProps, state);
  return {
    sortBy: state.sortBy,
    totalMovies: state.movies.length
  }
};

/*const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovie: (name, sortBy) => dispatch(actions.fetchMovieByName(name, sortBy))
    }
};*/

const mapDispatchToProps = ({
    fetchMovie: actions.fetchMovieByName,
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
