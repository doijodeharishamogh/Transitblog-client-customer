FROM node:10

#create working directory 

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY ./ /app/

EXPOSE 3000