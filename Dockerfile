FROM node:alpine
FROM mongo:latest

COPY . /app
WORKDIR /app/backend 

CMD ["npm","run", "server"] 


