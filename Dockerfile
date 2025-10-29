FROM node:24-alpine

WORKDIR /api

COPY package.json ./
COPY package-lock.json ./

RUN npm i -g @nestjs/cli
RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]