import React from 'react';
import { connect } from 'react-redux';
import 'isomorphic-unfetch';

import * as actions from '../../r_actions/index'
import {SearchButton} from "./search/searchButton";
import {SearchField} from "./search/searchField";
import {ResultsCount, ResultsSort} from "./resultsPanel";
import {withRouter} from "next/router";

/*styles*/
// import "./header.scss"

class Header extends React.Component {
    constructor(props){
        super(props);
        console.log(' Header constructor props', props);
        this.state = {sortBy: 'title', text: ''};
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    // getInitialProps(ctx) {
    //     // component will read it from store's state when rendered
    //     store.dispatch({type: 'FOO', payload: 'foo'});
    //     // pass some custom props to component
    //     console.log('Header.getInitialProps ->>', ctx);
    //     return {store};
    // }

    handleInputChange = (event) => {
        this.setState({text: event.target.value});
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        // let location = `/search/search=${this.state.text}&searchBy=${this.state.sortBy}`;
        let location = `/search/${this.state.text}&searchBy=${this.state.sortBy}`;
        console.log('handleFormSubmit', this.props);
        this.props.router.push(location)
    };

    setGenre(genre){
        this.setState({sortBy: genre});
    }

    getTotal = () => this.props.totalMovies;

    componentDidMount(){
        // var query= `search=${this.state.text}&searchBy=${this.state.sortBy}`;

        if(this.props.query){
            console.log('Header.componentDidMount - this.props ->>', this.props)
            this.props.fetchMovieByQuery(this.props.query);
        }
    }

    render() {
        return (
            <header>
                <div className="header-wrapper">
                    <form className="form-horizontal"
                          action={"/search?${query}"}
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
// export default connect(mapStateToProps, mapDispatchToProps)(Header);
