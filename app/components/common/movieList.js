import React from 'react';

export const MovieItem = ({title, genre, releaseDate, src}) => (
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

/*
export const MovieList = () => {
    const urlImgHost = 'https://images.pexels.com/photos';
    const urlImgQuery = '?auto=compress&cs=tinysrgb&h=350';
    return (
        <div className='movie-list-box'>
            <ul className='movie-list'>
                <MovieItem
                    title={`Movie title 1`}
                    genre={`Drama`}
                    releaseDate={`1995`}
                    src={`${urlImgHost}/460307/pexels-photo-460307.jpeg${urlImgQuery}`}
                />
                <MovieItem
                    title={`Movie title 2`}
                    genre={`Comedy`}
                    releaseDate={`1998`}
                    src={`${urlImgHost}/257092/pexels-photo-257092.jpeg${urlImgQuery}`}
                />
                <MovieItem
                    title={`Movie title 3`}
                    genre={`Drama`}
                    releaseDate={`1991`}
                    src={`${urlImgHost}/374633/pexels-photo-374633.jpeg${urlImgQuery}`}
                />
            </ul>
        </div>
    )
};*/
