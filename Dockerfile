FROM node:16
FROM mongo:latest

COPY . /app
WORKDIR /app/backend 
RUN sudo npm install
RUN sudo npm run server




