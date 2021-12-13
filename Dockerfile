FROM node:12-slim

WORKDIR /usr/src/app

# COPY .env ./

COPY package*.json ./

RUN npm install --only=production

COPY . ./

CMD [ "npm", "start" ]