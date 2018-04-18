import React from 'react';

const ResultsCount = ({count}) => (
    <div>{`${count} items found`} </div>
);

const ResultsSort = ({activeClass}) => (
    <div>Sort by
        <ul>
            <li>{`release date`}</li>
            <li>{`raiting ${activeClass}`}</li>
        </ul>
    </div>
);

const ResultsBodyItem = ({val}) => (
    <li>
        <img src="#" alt={`${val}`}/>
        <div>release date</div>
        <div>genre</div>
        <div>{val}</div>
    </li>
);

const ResultsBody = () => (
    <ul>
        <ResultsBodyItem val={`Movie1`}></ResultsBodyItem>
        <ResultsBodyItem val={`Movie2`}></ResultsBodyItem>
    </ul>
);

export default class ResultsBox extends React.Component {
    render() {
        return (
            <div className='search-box-wrapper'>
                <ResultsCount count={7}></ResultsCount>
                <ResultsSort activeClass={'activeClass'}></ResultsSort>
                <ResultsBody></ResultsBody>
            </div>
        )
    }
}