const baseUrl = `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/previews`
export const products = [
  {
    id: 'sea',
    name: 'Under the Sea Coloring Book',
    price: 9.99,
    priceId: process.env.PRICE_ID_SEA,
    previewImage: `${baseUrl}/sea-cover.jpg`,
    previewPdf: `${baseUrl}/sea-sample.pdf`,
  },
  {
    id: 'forest',
    name: 'Enchanted Forest Coloring Book',
    price: 12.99,
    priceId: process.env.PRICE_ID_FOREST,
    previewImage: `${baseUrl}/forest-cover.jpg`,
    previewPdf: `${baseUrl}/forest-sample.pdf`,
  },
]
