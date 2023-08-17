import NavBar from '@/components/Navigation/NavBar';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <div className="w-screen">
      <NavBar></NavBar>
      <Component {...pageProps} />
    </div>
  );
}
