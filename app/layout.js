import "./globals.css";
import './custom.css'
import Head from "./Head";
import Link from "next/link";
import GoTo from "@/components/GoTo";
import { AuthProvider } from "@/context/AuthContext";

export const metadata = {
  title: "Spendorra · The Subscription Tracker",
  description: "Track all your subscription analytics!",
};

export default function RootLayout({ children }) {
  const header = (
    <header>
      <div>
        <Link href={'/'}>
          <h1 className="text-gradient">Spendorra</h1>
        </Link>
        <p>The Subscription Tracker</p>
      </div>
      <GoTo />
    </header>
  )

  const footer = (
    <footer>
      <div className="hard-line" />
      <div className="footer-content">
        <div>
          <div>
            <h4>Spendorra</h4>
            <p>|</p>
            <button disabled>Install app</button>
          </div>
          <p className="copyright">© Copyright 2024-2025, Anvit Singh.<br />All rights reserved.</p>
          <p>By <a href="https://www.anvitdoestech.com" target="_blank">Anvit Singh</a> ⭐️ the repo on <a target="_blank"
                href="https://github.com/BrutalOverkill/Spendorra">GitHub</a></p>
        </div>
        <div>
          <p>Facing issues? <a>Get help</a></p>
          <p>Suggestions for improvement? <a>Share feedback</a></p>
          <div>
            <Link href={'/privacy'}>Privacy Policy</Link>
            <Link href={'/tos'}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )

  return (
    <html lang="en">
      <Head />
      <AuthProvider>
        <body >
          {header}
          <div className="full-line" />
          <main>
            {children}
          </main>
          {footer}
        </body>
      </AuthProvider>
    </html>
  );
}