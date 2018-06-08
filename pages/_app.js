import React from 'react';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';

import configureStore from '../app/r_store/configureStore.BE';

class MyApp extends App {
  render() {
    const { Component, pageProps, store } = this.props;

    console.log('this.props MyApp', this.props);

    return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
    );
  }
}

export default withRedux(configureStore)(MyApp);
