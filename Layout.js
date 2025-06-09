import Head from 'next/head'
import Navbar from './Navbar'
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Coloring Book Store</title>
        <meta name="description" content="Digital coloring books for kids" />
      </Head>
      <Navbar />
      <main className="container mx-auto p-4">{children}</main>
      <footer className="text-center p-4 text-sm">© 2025 Coloring Book Store</footer>
    </>
  )
}
