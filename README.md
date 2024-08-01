## Prerequisites
- Setup IAM assume role and allow Github OIDC
- Using Cloudformation to deploy Cloudfront and S3

## TODO
- Add Route53
- [serverless framework] Add routing configuration for Api Gateway to point to cloudfront when path is '/'

## Configurations
### 1. Github Environment
```
ENV_NAME
e.g: dev, prod
```
### 2. Github Secret 
```
AWS_S3_DESTINATION
AWS_ACCOUNT_ID
```
