import React from 'react';
import { FilmsList } from '../film/filmsParts/filmsList';

export default class ResultsBox extends React.Component {
  render() {
    return (
            <React.Fragment>
                <FilmsList></FilmsList>
            </React.Fragment>
    );
  }
}
