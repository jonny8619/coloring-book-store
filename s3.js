import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
export const s3Client = new S3Client({ region: process.env.AWS_REGION })
export const uploadParams = ({ Key, Body, ContentType }) => ({
  Bucket: process.env.S3_BUCKET_NAME,
  Key,
  Body,
  ContentType,
})
![image alt](https://github.com/jonny8619/coloring-book-store/blob/main/Screenshot%202025-06-09%20at%2022.20.25.png?raw=true)
