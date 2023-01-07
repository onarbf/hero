import('../styles/main.css');

import { useEffect } from "react";
import { SessionProvider } from "next-auth/react"
function MyApp({ Component,
  pageProps: {session ,...pageProps}
}) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (<SessionProvider session={session}>
    <Component {...pageProps} />
  </SessionProvider>)
}

export default MyApp
