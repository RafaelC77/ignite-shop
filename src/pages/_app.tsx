import { globalStyles } from "../styles/global";
import { Container } from "../styles/pages/app";

globalStyles();

export default function App({ Component, pageProps }) {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
}
