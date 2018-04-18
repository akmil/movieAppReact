import React from 'react';

const SearchField = ({val}) => (
    <input placeholder={`Hey, ${val}`} />
);

const SearchFilter  = ({name}) => (
    <ul>
        <li>{`Title ${name}`}</li>
        <li>{`Genre ${name}`}</li>
    </ul>
);

const SearchButton  = props => {
    const styles = {
        background: 'blue',
        color: 'white',
        padding: '10px'
    };

    return <button {...props} style={styles} />;
};

export default class SearchBox extends React.Component {
    render() {
        return (
            <div className='search-box-wrapper'>
                <SearchField val={'Search by name'}></SearchField>
                <SearchFilter></SearchFilter>
                <SearchButton>Search</SearchButton>
            </div>
        )
    }
}