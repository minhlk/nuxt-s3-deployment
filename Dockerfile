ARG NODE_VERSION=20.16.0

FROM node:${NODE_VERSION}-alpine AS base

ENV NODE_ENV=development

WORKDIR /app

# Build
FROM base AS build

COPY --link ./app/package.json ./app/package-lock.json ./
RUN npm install

# Run
FROM base

COPY --from=build /app/node_modules /app/node_modules

CMD [ "npm", "run", "dev" ]
