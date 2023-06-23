FROM node:16
COPY . /app
WORKDIR /app/backend 
FROM mongo:latest
CMD [ "npm","run","server"] 





