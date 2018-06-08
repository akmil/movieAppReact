import Document, { Head, Main, NextScript } from 'next/document';
import stylesheet from 'styles/main.scss';

export default class MyDocument extends Document {
  render() {
    return (
            <html>
            <Head>
                <link rel="stylesheet" href="/_next/static/main.css" />
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
            </html>
    );
  }
}
