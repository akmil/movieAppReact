import React from 'react';

import {FilmsTitle} from './filmsParts/filmsTitle';
import {FilmsCover} from './filmsParts/filmsCover';
import {FilmsDescription} from './filmsParts/filmsDescription';
import FilmsSortBy from './filmsParts/filmsSortBy';
import {FilmsList} from './filmsParts/filmsList';
import FilmsSearchButton from './filmsParts/filmsSearchButton';

// import { VisibilityFilters } from '../../r_actions'
import * as actions from "../../r_actions";
import {connect} from "react-redux";

class FilmsBox extends React.Component {
    constructor(props){
        super(props);
        // this.state = {sortBy: 'title'}
        // this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {detailMovie: {title:''}}
    }

    componentDidMount(){
        // const self = this;
        this.props.fetchMovieById(this.props.match.params.id)
            .then(res => {
                this.setState({detailMovie : res});
                console.log(this.state, res);
            })
        // this.props.detailMovie = detailMovie;
        // this.setState(detailMovie);


    }

    render() {
        return (
            <div className='films films-box-wrapper'>
                <p>films-box: <b>{this.props.match.params.id}</b></p>
                <div className='films-box-header'>
                    <div className='logo col-33'>netfixroulette</div>
                    <FilmsSearchButton name={'FilmsSearchButton'} theme={'white'}/>
                    <div className={'d-flex'}>
                        <FilmsCover src={this.state.detailMovie.poster_path}/>
                        <div className='films-box-body'>
                            <FilmsTitle activeClass={'activeClass'}
                                        title={this.state.detailMovie.title}
                                        rate={this.state.detailMovie.vote_average}
                            />
                            <div className='mb-3'>
                                <span className='mr-3 release'>{this.state.detailMovie.release_date}</span>
                                <span className='ml-3 duration'>{this.state.detailMovie.runtime}</span>
                            </div>
                            <FilmsDescription
                                description={this.state.detailMovie.overview}
                            />
                        </div>
                    </div>
                </div>
                <div className='results results-wrapper'>
                    <FilmsSortBy
                        filter={'SHOW_DRAMA'}
                        name = {'show Drama'}
                        theme={'white'}
                    />

                    <FilmsSortBy
                        theme={'white'}
                        filter={'SHOW_COMEDY'}
                        name = {'show Comedy'}
                    />
                    <FilmsSortBy
                        theme={'white'}
                        filter={'SHOW_COMEDY'}
                        name = {'fetch'}
                    />
                </div>
                <FilmsList></FilmsList>
            </div>
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

const mapDispatchToProps = ({
    fetchMovieById: actions.fetchMovieById,
})

export default connect(mapStateToProps, mapDispatchToProps)(FilmsBox);