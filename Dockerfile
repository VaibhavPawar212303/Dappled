FROM node:alpine
COPY . /app
WORKDIR /app/backend 
CMD ["npm","run", "server"] 

