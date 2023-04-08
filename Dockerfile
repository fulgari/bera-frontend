FROM --platform=arm64 node:16

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN npm install

COPY . /usr/src/app

ARG DOCKER_ENV
ENV NODE_ENV=${DOCKER_ENV}

RUN npm run build

EXPOSE 9004

CMD [ "npm", "run", "start:serve_koa" ]