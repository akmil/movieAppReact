import React from 'react';
import { Link } from 'next/link';

class PagesList extends React.Component {
  render() {
    return (
            <div >
                <ul>
                    <li><Link href="/home">Home</Link></li>
                    <li><Link href="/details/movieName">Details</Link></li>
                    <li><Link href="/about/company/employees">About</Link></li>
                    <li><Link href="/workers">Workers(redirect)</Link></li>
                    <li><Link href="/some-page">goto 404</Link></li>
                </ul>

                {this.props.children}
            </div>
    );
  }
}

export default PagesList;
