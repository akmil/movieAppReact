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
    }
    
    componentDidMount(){
      this.setState({sortBy: 'title'});
    }

    submitBook(input){
      this.props.fetchMovie(input.title, this.state.sortBy);
    }

    setGenre(genre){      
      this.setState({sortBy: genre});
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
                                <li onClick={()=>{this.setGenre('title')}}>Title</li>
                                <li onClick={()=>{this.setGenre('genre')}}>Genre</li>                                
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
    sortBy: state.sortBy
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovie: (name, sortBy) => dispatch(actions.fetchMovieByName(name, sortBy))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
