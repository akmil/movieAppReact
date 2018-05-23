import React from 'react';
import {Button} from '../../common/button';
import PropTypes from 'prop-types'

const FilmsSearchButton  = props => {
    const stylesWhite = {
        background: 'white',
        border: 'none',
        color: '#F44336',
        padding: '10px'
    };
    const theme = (props.theme) ? `${props.theme}-theme` : '';

    return <div className={`${theme} col-66 text-align-right`}>
            <Button
                onClick = {props.onClick}
                style={stylesWhite}
            >{props.name}</Button>
        </div>
};

FilmsSearchButton.propTypes = {
    name: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired,
    // onClick: PropTypes.func.isRequired
};

export default FilmsSearchButton