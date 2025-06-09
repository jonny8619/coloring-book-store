# Coloring Book Store

This Next.js app sells digital coloring books using Stripe for payments and AWS S3 for asset hosting.

## Setup

1. Clone the repo
2. Install dependencies: npm install
3. Create a `.env.local` file with the following vars:
   - NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
   - STRIPE_SECRET_KEY
   - AWS_REGION, S3_BUCKET_NAME, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY
   - PRICE_ID_* for each product
4. Populate `public/previews` with cover images and sample PDFs
5. Upload previews to S3:
   ```bash
   npm run upload:previews
   ```

## Scripts

- `npm run dev` – starts Next.js in development mode
- `npm run build` – builds the production app
- `npm run start` – runs the production build
- `npm run upload:previews` – runs `scripts/uploadPreviews.js`

## Deployment (Vercel)

1. Log in to Vercel and import your GitHub repo.
2. In project settings, add Environment Variables matching your `.env.local` keys.
3. Set the build command to `npm run build` and output directory to `.next`
4. Optional: Configure CORS on your S3 bucket to allow the Vercel domain.
5. Deploy.

Your site will be live at `https://<your-project>.vercel.app`.
# coloring-book-store
# coloring-book-store
