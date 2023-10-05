# syntax = docker/dockerfile:1

ARG NODE_VERSION=18.16.0
FROM node:${NODE_VERSION}-slim as builder

LABEL fly_launch_runtime="Node.js"

WORKDIR /tmp

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

COPY package*.json ./

RUN npm ci && npm cache clean --force

COPY . .

RUN npm run build
RUN npm prune --production

FROM nginx:stable-alpine
COPY --from=builder /tmp/dist /usr/share/nginx/html
