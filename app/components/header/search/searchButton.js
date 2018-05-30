import React from 'react';
import {Button} from '../../common/button';
import { withRouter } from 'react-router'

/*
export const SearchButton = withRouter(
    ({ history, children, query}) => {
    return <div className={'search-button'}>
        <Button onClick={
            () => history.push(`/search/${query}`)
        }>search
        </Button>
    </div>
});
*/

export const SearchButton = ({onClick}) => {
    return <div className={'search-button'}>
        <Button onClick={onClick}>search
        </Button>
    </div>
};
