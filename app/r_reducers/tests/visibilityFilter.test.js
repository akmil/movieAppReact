
import visibilityFilter from './../visibilityFilter';
// import renderer from "react-test-renderer";

describe('visibilityFilter ', () => {
  it('visibilityFilter test', () => {
    const sut = visibilityFilter(['foo'], { type: 'SHOW_ALL', filter: 'filter' });
    expect(sut).toEqual(['foo']);
  });
  it('visibilityFilter test', () => {
    const sut = visibilityFilter([], { type: 'SHOW_DRAMA', filter: 'filter' });
    expect(sut).toEqual('filter');
  });
});
