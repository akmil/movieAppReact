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

    return <div className={(props.theme) ? `${props.theme}-theme` : ''}>
        <Button style={stylesWhite}>{props.name}</Button>
    </div>
};

const FilmsCover = ({src}) => (
    <img src={src} alt={'image'}/>
);

const FilmsTitle = ({activeClass}) => (
    <h1>Pulp fiction</h1>
);

const FilmsRating = ({rate}) => (
    <div>
        <span>Rating is {rate}</span>
    </div>
);

//Film duration and release year
const FilmsDuration = ({duration, release}) => (
    <div>
        <span>{`${release} -=- ${duration}`}</span>
    </div>
);

//Description
const FilmsDescription = ({description}) => (
    <div className="film-description">{description}</div>
);

//Films by the same genre
const FilmsList = () => (
    <ResultsBody></ResultsBody>
);

export default class FilmsBox extends React.Component {
    render() {
        return (
            <div className='films films-box-wrapper'>
                <div className={'films-box-header'}>
                    <FilmsSearchButton name={'FilmsSearchButton'} theme={'white'}></FilmsSearchButton>
                    <FilmsCover src={'https://images.pexels.com/photos/584302/pexels-photo-584302.jpeg?auto=compress&cs=tinysrgb&h=350'}></FilmsCover>
                    <FilmsTitle activeClass={'activeClass'}></FilmsTitle>
                    <FilmsRating rate={8.2}></FilmsRating>
                    <FilmsDuration duration={'100'} release={1995}></FilmsDuration>
                    <FilmsDescription description={'description1'}></FilmsDescription>
                </div>
                <FilmsList></FilmsList>
            </div>
        )
    }
}