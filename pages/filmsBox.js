import React from 'react';

import {FilmsTitle}         from '../app/components/film/filmsParts/filmsTitle';
import {FilmsCover}         from '../app/components/film/filmsParts/filmsCover';
import {FilmsDescription}   from '../app/components/film/filmsParts/filmsDescription';
import {FilmsList}          from '../app/components/film/filmsParts/filmsList';
import FilmsSearchButton    from '../app/components/film/filmsParts/filmsSearchButton';

import * as actions from "../app/r_actions";
import {connect} from "react-redux";

class FilmsBox extends React.Component {
    static getInitialProps = (ctx) => {
        const { id } = ctx.query;
        console.log('ctx', ctx);
        return {
            id,
        }
    };

    constructor(props){
        super(props);
        this.state = {detailMovie: {title:''}}
        console.log('FilmsBox', this.props);
        // this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentDidMount(){
        this.props.fetchMovieById(this.props.id)
            .then(res => {
                this.setState({detailMovie : res});

                //move to componentDidUpdate
                this.props.fetchMovieGenre(res.genres[0])
                    .then(res => {
                        this.setState({relatedMovies : res});
                        console.log(this.state, res);
                    })
            })
    }

    render() {
        return (
            <div className='films films-box-wrapper'>
                <p>films-box: <b>{this.props.id}</b></p>
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
                    {/*<FilmsSortBy
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
                    />*/}
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
    fetchMovieGenre: actions.fetchMovieGenre
})

export default connect(mapStateToProps, mapDispatchToProps)(FilmsBox);