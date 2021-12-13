FROM node:12-slim

WORKDIR /usr/src/app

# COPY .env ./

COPY package*.json ./

RUN npm install --only=production

COPY .env ./

COPY . ./

CMD [ "npm", "start" ]