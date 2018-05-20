import React from 'react';
import {SearchButton} from "./search/searchButton";
import {SearchFilter} from "./search/searchFilter";
import {SearchField} from "./search/searchField";
import {ResultsCount, ResultsSort} from "./resultsPanel";

import { connect } from 'react-redux';
import * as actions from '../../r_actions/index'

let titleInput;

class Header extends React.Component {
    constructor(props){
      super(props);
      console.log(this.props);
    }

    submitBook(input){
      console.log(this.state);
      this.props.fetchMovie(input.title, 'title');
    }

    render() {
        return (
            <header>
                <div className="header-wrapper">
                  <form onSubmit={e => {
                        e.preventDefault();
                        var input = {
                          title: titleInput.value
                        };
                        this.submitBook(input);
                        e.target.reset();
                      }}
                        className="form-horizontal"
                  >
                    <div className='logo'>netfixroulette</div>
                    <div className={'search-field-box'}>
                      <label className={'search-field-label'}>Find your movie</label>
                      <input 
                        placeholder={`Hey, Search by name`} 
                        className={'search-field-input'}
                        ref = {node => titleInput = node}
                        // ref={refInput}
                      />
                  </div>               
                        {/* <SearchField
                            val={'Search by name'}
                            refInput = {node => titleInput = node}
                        /> */}
                    <div className='search-filter'>
                        <div className='search-filter-box'>
                            Search by
                            <ul className={'search-filter-list'}>
                                <li onclick={()=>{this.setState(sortBy, 'title')}}>Title</li>
                                <li onclick={()=>{this.props.sortBy = 'genre'}}>Genre</li>                                
                            </ul>
                        </div>
                        <SearchButton/>
                    </div>
                  </form>
                </div>
                <div className='results results-wrapper'>
                    <ResultsCount count={7}></ResultsCount>
                    <ResultsSort activeItem={1}></ResultsSort>
                </div>
            </header>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
    sortBy: state.sortBy = 'title'
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovie: name => dispatch(actions.fetchMovieByName(name))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
// export default Header;