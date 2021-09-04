FROM node:lts-alpine AS packages

ADD package.json /app/package.json
ADD yarn.lock /app/yarn.lock

WORKDIR /app

# Installing packages
RUN yarn

# Production Image
FROM packages

ADD . /app

ENV NODE_ENV=production

# Building TypeScript files
RUN yarn build

# EXPOSE 1337
CMD ["node", "dist/src/app.js"]