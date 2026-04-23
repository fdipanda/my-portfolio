# AWS Deployment Notes

This app is prepared for a private S3 + CloudFront deployment with Route 53 and ACM.

## Architecture

Request flow:

`User -> Route 53 -> CloudFront -> private S3 bucket`

## Required AWS resources

- One S3 bucket for the static export
- One CloudFront distribution with an S3 REST origin
- One Origin Access Control attached to the distribution
- One ACM certificate in `us-east-1`
- Route 53 hosted zone or delegated DNS from your registrar

## Recommended setup

### S3

- Block all public access
- Use bucket-owner-enforced object ownership
- Upload the contents of `out/`
- Do not use the public S3 website endpoint for production

### CloudFront

- Origin: S3 REST endpoint
- Viewer protocol policy: redirect HTTP to HTTPS
- Default root object: `index.html`
- Compression enabled
- Attach `infra/aws/cloudfront-url-rewrite.js` as a CloudFront Function on the viewer request event

### Route 53 + ACM

- Request an ACM certificate in `us-east-1`
- Add your apex domain and `www`
- Point Route 53 alias records to the CloudFront distribution
- Keep the apex domain as canonical and redirect `www` if desired

## GitHub Actions secrets

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_S3_BUCKET`
- `AWS_CLOUDFRONT_DISTRIBUTION_ID`

## GitHub Actions variables

- `SITE_URL`
- `AWS_REGION` (optional, defaults to `us-east-1`)

## Manual deploy commands

```bash
npm run build
aws s3 sync out/ s3://YOUR_BUCKET_NAME --delete
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```
