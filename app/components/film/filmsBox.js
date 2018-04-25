import React from 'react';
import {ResultsBody} from './../resultsBox/resultsBox';
import {Button} from '../common/button';

export const FilmsSearchButton  = props => {
    const stylesWhite = {
        background: 'white',
        border: 'none',
        color: '#F44336',
        padding: '10px'
    };
    const theme = (props.theme) ? `${props.theme}-theme` : '';

    return <div className={`${theme} col-66 text-align-right`}>
            <Button style={stylesWhite}>{props.name}</Button>
        </div>
};

const FilmsCover = ({src}) => (
    <img src={src}
         alt={'image'}
         className={'col-33 mr-3'}
    />
);

const FilmsTitle = ({title, rate}) => (
    <h1 className={'films-title mb-0'}>
        {title}
        <span className={'badge badge-transparent ml-2'}>{rate}</span>
    </h1>
);

//Film duration and release year
const FilmsDuration = ({duration, release}) => (
    <div className={'mb-3'}>
        <span className={'mr-3'}>{release}</span>
        <span className={'ml-3'}>{duration}</span>
    </div>
);

//Description
const FilmsDescription = ({description}) => (
    <div className="film-description">{description}</div>
);

//Films by the same genre
const FilmsSortBy = ({genre}) => (
    <React.Fragment>
        Films by {genre} genre.
    </React.Fragment>
);

const FilmsList = () => (
    <ResultsBody></ResultsBody>
);

export default class FilmsBox extends React.Component {
    render() {
        return (
            <div className='films films-box-wrapper'>
                <div className={'films-box-header'}>
                    <div className={'logo col-33'}>netfixroulette</div>
                    <FilmsSearchButton name={'FilmsSearchButton'} theme={'white'}/>
                    <div className={'d-flex'}>
                        <FilmsCover src={'https://images.pexels.com/photos/584302/pexels-photo-584302.jpeg?auto=compress&cs=tinysrgb&h=350'}/>
                        <div className={'films-box-body'}>
                            <FilmsTitle activeClass={'activeClass'}
                                        title={'Pulp fiction'}
                                        rate={8.2}
                            />
                            <FilmsDuration duration={'100'} release={1995}/>
                            <FilmsDescription
                                description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ' +
                                'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ' +
                                'nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' +
                                'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu ' +
                                'fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa ' +
                                'qui officia deserunt mollit anim id est laborum.'}
                            />
                        </div>
                    </div>
                </div>
                <div className='results results-wrapper'>
                    <FilmsSortBy genre={'Drama'}></FilmsSortBy>
                </div>
                <FilmsList></FilmsList>
            </div>
        )
    }
}