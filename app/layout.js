import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar';
import Footer from './components/footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Genesis Hernandez',
  description: 'Personal portfolio of Genesis Hernandez',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
