import fs from 'fs'
import path from 'path'
import mime from 'mime'
import { s3Client, uploadParams } from '../lib/s3'

async function uploadFile(filePath) {
  const fileStream = fs.createReadStream(filePath)
  const relativeKey = path.basename(filePath)
  const params = uploadParams({
    Key: `previews/${relativeKey}`,
    Body: fileStream,
    ContentType: mime.getType(filePath) || 'application/octet-stream',
  })
  await s3Client.send(new PutObjectCommand(params))
  console.log(`Uploaded ${relativeKey}`)
}

async function main() {
  const previewsDir = path.join(process.cwd(), 'public', 'previews')
  const files = fs.readdirSync(previewsDir)
  for (const fileName of files) {
    const filePath = path.join(previewsDir, fileName)
    await uploadFile(filePath)
  }
}

main().catch(console.error)
