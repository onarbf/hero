import Head from 'next/head'

export default function PageLayout({children}){
    return (<>
        <Head>
        <title>CalBar</title>
        <meta name="description" content="License: Onar Berrade" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        {children}
    </>)
}