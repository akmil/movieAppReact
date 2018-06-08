
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../r_reducers';

import storeCfg from './configureStore.dev';
// import {addError, suggestMovies} from "../r_actions";

describe('>>>S T O R E --- Test', () => {
  it('+++ actionCreator addError', () => {
    const store = storeCfg();
    console.log(storeCfg);
    // expect(wrapper.find('.logo')).to.have.length(1);
  });
});
