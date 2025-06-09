import Link from 'next/link'

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-xl shadow p-4">
      <img src={product.previewImage} alt={product.name} className="rounded-md mb-4" />
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="mt-2 text-lg">${product.price.toFixed(2)}</p>
      <Link href={`/product/${product.id}`}>
        <a className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-md">View & Buy</a>
      </Link>
    </div>
  )
}
