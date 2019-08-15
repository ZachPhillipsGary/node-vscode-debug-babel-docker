FROM node:current-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --silent

RUN npm audit fix --silent

COPY . .