import * as React from 'react';

export class About extends React.Component {

    render() {
        return (
            <p>About tab: {this.props.match.params.tab}, and section: {this.props.match.params.section}</p>
        );
    }
}