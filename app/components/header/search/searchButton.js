import React from 'react';
import {Button} from '../../common/button';

export const SearchButton = ({onClick}) => {
    return <div className={'search-button'}>
        <Button onClick={onClick}>search</Button>
    </div>
};
