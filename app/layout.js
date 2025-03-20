import "./globals.css";
import "./fanta.css";
import Head from "./Head";


export const metadata = {
  title: "Expenny · The Subscription Tracker",
  description: "Track all your subscription analytics!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head/>
      <body>
        {children}
      </body>
    </html>
  );
}
