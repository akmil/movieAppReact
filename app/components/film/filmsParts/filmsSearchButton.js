import React from 'react';
import {Button} from '../../common/button';

export const FilmsSearchButton  = props => {
    const stylesWhite = {
        background: 'white',
        border: 'none',
        color: '#F44336',
        padding: '10px'
    };
    const theme = (props.theme) ? `${props.theme}-theme` : '';

    return <div className={`${theme} col-66 text-align-right`}>
            <Button style={stylesWhite}>{props.name}</Button>
        </div>
};
