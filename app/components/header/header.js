import React from 'react';
import { connect } from 'react-redux';
import 'isomorphic-unfetch';

import * as actions from '../../r_actions/index'
import {SearchButton} from "./search/searchButton";
import {SearchField} from "./search/searchField";
import {ResultsCount, ResultsSort} from "./resultsPanel";
import {withRouter} from "next/router";

/*styles*/
/* common */
import stylesheet from "./header.scss"


class Header extends React.Component {
    constructor(props){
        super(props);
        // console.log(' Header constructor props', props);
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
        console.log('handleFormSubmit', this.props, this.state.sortBy);
        //when MovieTitle or Genre not equal prew then make request
        if(this.props.query &&
            (this.props.router.query.search !== '' && this.props.router.query.search !== this.state.text) ||
            (this.props.router.query.searchBy !== '' && this.props.router.query.searchBy !== this.state.sortBy)
        ){
            let query = {
                search: this.state.text,
                searchBy: this.state.sortBy
            }
            console.log('Header.componentDidMount - query ->>', query)
            this.props.router.push({
                pathname: '/search',
                query: {
                    search: this.state.text,
                    searchBy: this.state.sortBy
                }
            });
            this.props.fetchMovieByQuery(this.props.query);
        }
        /*this.props.router.push({
            pathname: '/search',
            query: {
                search: this.state.text,
                searchBy: this.state.sortBy
            }
        });*/
    };

    setGenre(genre){
        // console.log('setGenre', this.state.sortBy);
        var self = this;
        this.setState({sortBy: genre});
        setTimeout(()=>{
            console.log('this.state.sortBy', this.state.sortBy);
        }, 200);
        console.log('should search by', genre);
        console.log('this.state.sortBy', this.state.sortBy);
        // e.preventDefault();
    }

    getTotal = () => this.props.totalMovies;

    //first load
    componentDidMount(){
        // var query= `search=${this.state.text}&searchBy=${this.state.sortBy}`;

        console.log('Header.componentDidMount - this.props ->>', this.props.router);
        if(this.props.query){
            // console.log('Header.componentDidMount - this.props ->>', this.props.router)
            this.props.fetchMovieByQuery(this.props.query);
        }
    }

    // componentDidUpdate(){
    //     console.log('Header.componentDidUpdate - this.props ->>', this.props);
    //     if(this.props.query){
    //         // console.log('Header.componentDidMount - this.props ->>', this.props.router)
    //         this.props.fetchMovieByQuery(this.props.query);
    //     }
    // }

    render() {
        return (
            <header>
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                <div className="header-wrapper">
                    <form className="form-horizontal"
                          action={"/search/${query}"}
                          onSubmit={this.handleFormSubmit}
                    >
                        <div className='logo'><a href="/">netfixroulette</a></div>
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
        // sortBy: state.sortBy,
        totalMovies: state.movies.length
    }
};

const mapDispatchToProps = ({
    // fetchMovie: actions.fetchMovieByName,
    fetchMovieByQuery: actions.fetchMovieByQuery,
    fetchMovieGenre: actions.fetchMovieGenre
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
// export default connect(mapStateToProps, mapDispatchToProps)(Header);
