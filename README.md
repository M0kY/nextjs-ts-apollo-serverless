# Sample Next.js app

Sample [Next.js](https://nextjs.org/) app with Apollo, Typescript and [graphql-codegen](https://graphql-code-generator.com/) for generating types based on Graphql schema. The app is deployed to AWS
as a Serverless Framework component using [serverless-nextjs](https://github.com/serverless-nextjs/serverless-next.js).

In this simple example, Apollo is seamlessly inegrated with [Next.js data fetching methods](https://nextjs.org/docs/basic-features/data-fetching) to fetch queries in the server and hydrate them in the browser.

This example relies on [graph.cool](https://www.graph.cool) for its GraphQL backend.

## Architecture

Before deploying create an S3 bucket (in this example `sample-next-app-env`) for storing `.serverless` state. This is necessary for serverless not to create a new Cloudfront distribution on every CI build ([reference](https://github.com/serverless-nextjs/serverless-next.js#cicd-a-new-cloudfront-distribution-is-created-on-every-ci-build-i-wasnt-expecting-that)). In the S3 bucket a subdirectory is created for separating different environments.

Another S3 bucket gets created for storing static assets.

![architecture](https://github.com/serverless-nextjs/serverless-next.js/blob/master/arch_no_grid.png)

Four Cache Behaviours are created in CloudFront.

The first two \_next/_ and static/_ forward the requests to S3.

The third is associated to a lambda function which is responsible for handling three types of requests.

1. Server side rendered page. Any page that defines getInitialProps method will be rendered at this level and the response is returned immediately to the user.

2. Statically optimised page. Requests to pages that were pre-compiled by next to HTML are forwarded to S3.

3. Public resources. Requests to root level resources like /robots.txt, /favicon.ico, /manifest.json, etc. These are forwarded to S3.

The reason why 2. and 3. have to go through Lambda@Edge first is because the routes don't conform to a pattern like \_next/_ or static/_. Also, one cache behaviour per route is a bad idea because CloudFront only allows 25 per distribution.

The fourth cache behaviour handles next API requests api/\*.

## Deployment

To deploy to AWS you need to set your AWS credentials as environment variables:

```
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
```

Create an S3 bucket for storing `.serverless` state and set the bucket name and subdirectory as environment variables `s3://<SERVERLESS_STATE_BUCKET_NAME>/<ENVIRONMENT>/`:

```
SERVERLESS_STATE_BUCKET_NAME
ENVIRONMENT
```

Change the `serverless.yml` configuration file according to your needs or use the `${}` notation and set the values as environment variables.

The following environment variables are set for the purpose of generating a Next.js `BUILD_ID` and displaying the app version under the main navigation:

```
NEXT_PUBLIC_GH_RUN_NUMBER
NEXT_PUBLIC_GH_BRANCH
NEXT_PUBLIC_GH_COMMIT_HASH_SHORT
```

To deploy simply run:

```
npx serverless
```

## How to use

For development run:

```
npm run dev
```

which will run `graphql-codegen` and `next` in watch mode.

For creating a production build run:

```
npm run build
```

and to running the production build use:

```
npm start
```
