import Head from 'next/head'

export default function PageLayout({children}){
    return (<>
        <Head>
        <title>Be a hero!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        {children}
    </>)
}