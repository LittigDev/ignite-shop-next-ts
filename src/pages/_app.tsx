import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import { Container, Header } from "../styles/pages/app";
import Image from 'next/image';
import logoImg from '../assets/logo.svg';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg.src} width={100} height={100} alt=""/>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
