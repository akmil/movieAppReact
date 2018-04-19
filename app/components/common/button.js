import React from 'react';

export const Button  = props => {
    const stylesDefault = {
        background: '#F44336',
        border: 'none',
        color: 'white',
        padding: '10px'
    };

    // const styles = props.style || stylesDefault;

    return <button {...props} style={props.style || stylesDefault} />;
};