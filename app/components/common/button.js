import React from 'react';

export const Button  = props => {
    const stylesDefault = {
        background: '#F44336',
        border: 'none',
        color: 'white',
        padding: '10px'
    };

    return <button {...props} style={props.style || stylesDefault} />;
};