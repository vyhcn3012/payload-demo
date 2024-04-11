FROM node:18.8-alpine as base

FROM base as builder

WORKDIR /home/node/app
COPY package*.json ./

COPY . .
RUN yarn install

# Sao chép các tệp env vào dự án
COPY .env .env.production

RUN yarn build

FROM base as runtime

ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=dist/payload.config.js

WORKDIR /home/node/app
COPY package*.json  ./
COPY yarn.lock ./

RUN yarn install --production
COPY --from=builder /home/node/app/dist ./dist
COPY --from=builder /home/node/app/build ./build

# EXPOSE 3000 # Không cần thiết khi sử dụng Kubernetes hoặc môi trường tương tự

CMD ["node", "dist/server.js"]
