FROM node:9.4.0-alpine

WORKDIR /usr/app

RUN apk add --no-cache imagemagick

COPY package*.json ./
RUN npm install -qy

COPY . .

EXPOSE 8080

CMD ["npm", "start"]
