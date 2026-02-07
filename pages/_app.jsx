import '../app/globals.css'
import { ToastProvider } from '../components/ui/Toast';

export default function App({ Component, pageProps }) {
  return (
    <ToastProvider>
      <Component {...pageProps} />
    </ToastProvider>
  );
}
