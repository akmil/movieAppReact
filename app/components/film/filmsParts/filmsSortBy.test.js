import React from 'react';
import { FilmsSortBy, getVisibleMovie } from './filmsSortBy';
import renderer from 'react-test-renderer';

describe('<films FilmsSortBy/>', () => {
  it('should render <FilmsSortBy /> components', () => {
    // const wrapper = renderer.create(<FilmsSortBy/>);
    // expect(wrapper).toMatchSnapshot();
  });
  it('getVisibleMovie test', () => {
    const movies = [{
      name: 'test',
      genre: true,
    }, {
      name: 'test2',
      genre: false,
    }];
    const wrapperRes = getVisibleMovie(movies, 'SHOW_ALL');
    expect(wrapperRes).toEqual(movies);
    const wrapperRes2 = getVisibleMovie(movies, 'SHOW_ACTIVE');
    expect(wrapperRes2).toEqual(movies.filter(t => !t.genre));
  });
  it('getVisibleMovie test SHOW_DRAMA/SHOW_COMEDY', () => {
    const movies = [{
      name: 'test',
      genre: 'Drama2',
    }, {
      name: 'test2',
      genre: 'Comedy',
    }];
    const wrapperRes3 = getVisibleMovie(movies, 'SHOW_COMEDY');
    const wrapperRes4 = getVisibleMovie(movies, 'SHOW_DRAMA');

    expect(wrapperRes3).toEqual([{
      name: 'test2',
      genre: 'Comedy',
    }]);
    expect(wrapperRes4).toEqual([{
      name: 'test',
      genre: 'Drama2',
    }]);
  });
});
