import React from 'react';
import Header from './components/header/header';

class MainLayout extends React.Component {
    constructor(){
        super();
    };

    render() {
        return (
            <div class="main-layout-wrapper">
                <Header></Header>
            </div>
        )
    }
}

export default MainLayout;