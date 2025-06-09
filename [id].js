import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import ProductPreview from '../../components/ProductPreview'
import { products } from '../../data/products'
import { loadStripe } from '@stripe/stripe-js'

export default function ProductPage() {
  const router = useRouter()
  const { id } = router.query
  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <Layout>
        <h1 className="text-2xl font-bold">Product Not Found</h1>
      </Layout>
    )
  }

  const handleBuy = async () => {
    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId: product.id }),
    })
    const { id: sessionId } = await res.json()
    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
    stripe.redirectToCheckout({ sessionId })
  }

  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <img src={product.previewImage} alt={product.name} className="rounded-md mb-4" />
        <p className="text-lg mb-4">Price: ${product.price.toFixed(2)}</p>
        <button
          onClick={handleBuy}
          className="px-6 py-3 bg-green-600 text-white rounded-md"
        >
          Buy Now
        </button>
        <ProductPreview pdfUrl={product.previewPdf} />
      </div>
    </Layout>
  )
}
