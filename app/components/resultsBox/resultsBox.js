import React from 'react';
import ErrorBoundry from '../common/errorBoundry';

const ResultsCount = ({count}) => (
    <div className={'results-count'}>{`${count} items found`} </div>
);

const ResultsSort = ({activeItem}) => (
    // activeItem === 2
    <div className={'results-sort-by'}>Sort by
        <ul className={'results-sort-by-list'}>
            <li>{`release date`}</li>
            <li className={`active`}>{`raiting`}</li> {/*TODO get from activeItem*/}
        </ul>
    </div>
);

export const ResultsBodyItem = ({title, genre, releaseDate,src}) => (
    <li>
        <img src={src}
             alt={`${title}`}/>
        <div className={'col-50'}>
            <p className={'title'}>{title}</p>
            <p className={'genre'}>{genre}</p>
        </div>
        <div className={'col-50 text-align-right'}>
            <span className={'release-date'}>{releaseDate}</span>
        </div>

    </li>
);

export const ResultsBody = () => {
    const urlImgHost = 'https://images.pexels.com/photos';
    const urlImgQuery = '?auto=compress&cs=tinysrgb&h=350';
    return (
        <div className='results-list-box'>
            <ul className='results-list'>
                <ResultsBodyItem
                    title={`Movie title 1`}
                    genre={`Drama`}
                    releaseDate={`1995`}
                    src={`${urlImgHost}/460307/pexels-photo-460307.jpeg${urlImgQuery}`}
                />
                <ResultsBodyItem
                    title={`Movie title 2`}
                    genre={`Comedy`}
                    releaseDate={`1998`}
                    src={`${urlImgHost}/257092/pexels-photo-257092.jpeg${urlImgQuery}`}
                />
                <ResultsBodyItem
                    title={`Movie title 3`}
                    genre={`Drama`}
                    releaseDate={`1991`}
                    src={`${urlImgHost}/374633/pexels-photo-374633.jpeg${urlImgQuery}`}
                />
            </ul>
        </div>
    )
};

export default class ResultsBox extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className='results results-wrapper'>
                    <ErrorBoundry>
                        <ResultsCount count={7}></ResultsCount>
                        <ResultsSort activeItem={1}></ResultsSort>
                    </ErrorBoundry>
                </div>
                <ResultsBody></ResultsBody>
            </React.Fragment>
        )
    }
}