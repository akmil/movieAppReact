import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

export const ResultsBodyItem = ({
  id, title, genres = [], release_date, poster_path,
}) => (
    <li>
        <Link href={`/details/${id}`}>
            <span>
                <img src={poster_path}
                     alt={title}/>
                <div className="col-50">
                    <p className={'title'}>{title}</p>
                    <p>
                        {genres.map((genre, index) => (
                            <span className={'genre'} key={index}>{genre} </span>
                        ))}
                    </p>
                </div>
                <div className={'col-50 text-align-right'}>
                    <span className={'release-date'}>{release_date}</span>
                </div>
            </span>
        </Link>
    </li>
);

ResultsBodyItem.propTypes = {
  // onClick: PropTypes.func.isRequired,
  // isActive: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  // genres: PropTypes.array.isRequired,
  release_date: PropTypes.string.isRequired,
  poster_path: PropTypes.string,
};
