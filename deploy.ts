import { $ } from "bun";

await $`bun run release`;
await $`aws s3 sync release ${process.env.PERSONAL_RESUME_S3_BUCKET}`;
await $`aws cloudfront create-invalidation --distribution-id ${process.env.PERSONAL_RESUME_CLOUDFRONT_DISTRIBUTION_ID} --paths '/*' --no-cli-pager`;
