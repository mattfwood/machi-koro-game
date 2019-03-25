import App, { Container } from 'next/app';
import { Provider } from 'reakit';
import theme from '../lib/theme';

class MyApp extends App {
  // state = {
  //   hasError: false,
  //   errorEventId: undefined,
  // };

  // static async getInitialProps({ Component, ctx }) {
  //   try {
  //     let pageProps = {};

  //     const isServer = typeof window === 'undefined';

  //     // TODO: get cookie when doing client-side routing
  //     if (isServer && ctx && ctx.req) {
  //       if (ctx.req.cookies.tdActiveTeam) {
  //         const activeTeam = JSON.parse(ctx.req.cookies.tdActiveTeam);
  //         pageProps.activeTeam = activeTeam;
  //       }
  //     } else {
  //       const cookies = cookie.parse(document.cookie);

  //       if (cookies && cookies.tdActiveTeam) {
  //         pageProps.activeTeam = JSON.parse(cookies.tdActiveTeam);
  //       }
  //     }

  //     if (Component.getInitialProps) {
  //       pageProps = await Component.getInitialProps(ctx);
  //     }

  //     // expose query to the user
  //     pageProps.query = ctx.query;
  //     return { pageProps };
  //   } catch (error) {
  //     // Capture errors that happen during a page's getInitialProps.
  //     // This will work on both client and server sides.
  //     const errorEventId = captureException(error, ctx);
  //     return {
  //       hasError: true,
  //       errorEventId,
  //     };
  //   }
  // }

  // static getDerivedStateFromProps(props, state) {
  //   // If there was an error generated within getInitialProps, and we haven't
  //   // yet seen an error, we add it to this.state here
  //   return {
  //     hasError: props.hasError || state.hasError || false,
  //     errorEventId: props.errorEventId || state.errorEventId || undefined,
  //   };
  // }

  // static getDerivedStateFromError() {
  //   // React Error Boundary here allows us to set state flagging the error (and
  //   // later render a fallback UI).
  //   return { hasError: true };
  // }

  // componentDidCatch(error, errorInfo) {
  //   const errorEventId = captureException(error, { errorInfo });

  //   // Store the event id at this point as we don't have access to it within
  //   // `getDerivedStateFromError`.
  //   this.setState({ errorEventId });
  // }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Provider theme={theme}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default MyApp;
