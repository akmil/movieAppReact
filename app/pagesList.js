import React from 'react';
// import { Link } from 'react-router-dom';

class PagesList extends React.Component {
  render() {
    return (
            <div >
                <ul>
                    {/*<li><Link to="/home">Home</Link></li>*/}
                    {/*<li><Link to="/details/movieName">Details</Link></li>*/}
                    {/*<li><Link to="/about/company/employees">About</Link></li>*/}
                    {/*<li><Link to="/workers">Workers(redirect)</Link></li>*/}
                    {/*<li><Link to="/some-page">goto 404</Link></li>*/}
                </ul>

                {this.props.children}
            </div>
    );
  }
}

export default PagesList;
