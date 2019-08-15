FROM node:current-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --silent

RUN npm install babel-cli@6.26.0 -g --save --silent

RUN npm audit fix --silent

COPY src /usr/src/app/src

RUN rm -rf build && mkdir build

RUN babel -d ./build ./src -s

RUN npm prune --production --silent

COPY . .
