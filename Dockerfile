FROM node:16
COPY . /app
WORKDIR /app/backend 

CMD [ "npm","run","server"] 





