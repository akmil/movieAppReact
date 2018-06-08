import React from 'react';
import { Button } from '../../common/button';
// import { withRouter } from 'react-router'

export const SearchButton = ({ onClick }) => <div className={'search-button'}>
        <Button onClick={onClick}>search
        </Button>
    </div>;
