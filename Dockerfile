FROM node:16
FROM mongo:latest

COPY . /app
WORKDIR /app/backend 
RUN npm install
RUN npm run server




