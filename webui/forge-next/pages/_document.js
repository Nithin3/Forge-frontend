import Document, { Head, Main, NextScript } from 'next/document';

export default class ForgeDocument extends Document {
    render () {
        return (
            <html>
                <Head>
                    <title>FORGE</title>
                    <link rel="stylesheet" href="/_next/static/style.css" />
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </html>
        )
    }
}