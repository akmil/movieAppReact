import React from 'react';
// import { shallow } from 'enzyme';
import { FilmsList } from './filmsList';
import { VisibleMovieList } from './filmsList';
import renderer from './../container-redux/VisibleMovieList';

describe('<films FilmsList />', () => {
  it('should render FilmsList without errors', () => {
    const wrapper = renderer.create(<VisibleMovieList><FilmsList/></VisibleMovieList>);
    expect(wrapper).toMatchSnapshot();
  });
});
