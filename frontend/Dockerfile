FROM node:18-alpine

WORKDIR /frontend

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY ./ ./

RUN yarn build --mode production
CMD ["yarn", "preview"]