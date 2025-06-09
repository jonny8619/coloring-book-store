import Layout from '../components/Layout'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

export default function Home() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">Our Coloring Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  )
}
