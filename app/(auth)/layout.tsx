import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Head from "next/head"; // Import the Head component from next/head
import { Inter } from 'next/font/google'

import '../globals.css'

export const metadata = {
    title: 'Threads',
    description: 'Threads next14 v1.00 application'
}

const inter = Inter({ subsets: ['latin'] })

function Header() {
  return (
    <header style={{ display: "flex", justifyContent: "space-between", padding: 20 }}>
      <h1>Threads</h1>
      <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton />
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton />
      </SignedOut>
    </header>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <Head>
        {/* Set HTML lang attribute and include metadata */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={`${inter.className} bg-dark-1`}>
        <ClerkProvider>
          <Header />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
