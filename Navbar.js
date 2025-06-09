import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 mb-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/"><a className="text-xl font-bold">Coloring Book Store</a></Link>
      </div>
    </nav>
  )
}
