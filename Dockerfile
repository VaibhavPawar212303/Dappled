FROM node:16
FROM mongo:latest

COPY . /app
WORKDIR /app/backend 
CMD [ "npm","install","npm","run","server"] 





