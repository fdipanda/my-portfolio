# Franck Alexis Dipanda Portfolio

Projects-first portfolio built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and a static export path for Amazon S3 + CloudFront.

## Local development

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run lint
npm run build
```

The static export is written to `out/`.

## Deployment

This repo includes:

- `.github/workflows/deploy.yml` for GitHub Actions deployment
- `infra/aws/cloudfront-url-rewrite.js` for extensionless route support
- `infra/aws/bucket-policy.template.json` for OAC-restricted S3 access
- `infra/aws/README.md` for the S3 + CloudFront + Route 53 setup

### Required GitHub secrets

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_S3_BUCKET`
- `AWS_CLOUDFRONT_DISTRIBUTION_ID`

### Required GitHub variables

- `SITE_URL`
- `AWS_REGION` (optional)

## Resume asset

The downloadable PDF is stored directly in:

`public/resume/franck-dipanda-resume.pdf`
