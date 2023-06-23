FROM node:alpine
COPY . /app
WORKDIR /app/backend 
CMD node server.js 

