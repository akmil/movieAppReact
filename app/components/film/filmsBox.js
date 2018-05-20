import React from 'react';

import {FilmsTitle} from './filmsParts/filmsTitle';
import {FilmsCover} from './filmsParts/filmsCover';
import {FilmsDescription} from './filmsParts/filmsDescription';
import FilmsSortBy from './filmsParts/filmsSortBy';
import {FilmsList} from './filmsParts/filmsList';
import FilmsSearchButton from './filmsParts/filmsSearchButton';

import { VisibilityFilters } from '../../r_actions'

export default class FilmsBox extends React.Component {
    // componentDidMount(){
    //   this.props.fetchCart();
    // }

    render() {
        return (
            <div className='films films-box-wrapper'>
                <div className='films-box-header'>
                    <div className='logo col-33'>netfixroulette</div>
                    <FilmsSearchButton name={'FilmsSearchButton'} theme={'white'}/>
                    <div className={'d-flex'}>
                        <FilmsCover src={'https://images.pexels.com/photos/584302/pexels-photo-584302.jpeg?auto=compress&cs=tinysrgb&h=350'}/>
                        <div className='films-box-body'>
                            <FilmsTitle activeClass={'activeClass'}
                                        title={'Pulp fiction'}
                                        rate={8.2}
                            />
                            <div className='mb-3'>
                                <span className='mr-3 release'>1995</span>
                                <span className='ml-3 duration'>100</span>
                            </div>
                            <FilmsDescription
                                description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ' +
                                'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ' +
                                'nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' +
                                'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu ' +
                                'fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa ' +
                                'qui officia deserunt mollit anim id est laborum.'}
                            />
                        </div>
                    </div>
                </div>
                <div className='results results-wrapper'>
                    <FilmsSortBy
                        filter={'SHOW_DRAMA'}
                        name = {'show Drama'}
                        theme={'white'}
                    />

                    <FilmsSortBy
                        theme={'white'}
                        filter={'SHOW_COMEDY'}
                        name = {'show Comedy'}
                    />
                    <FilmsSortBy
                        theme={'white'}
                        filter={'SHOW_COMEDY'}
                        name = {'fetch'}
                    />
                </div>
                <FilmsList></FilmsList>
            </div>
        )
    }
}