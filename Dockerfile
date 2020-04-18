FROM node:alpine as todo-app-build

WORKDIR /client

COPY package.json package-lock.json README.md ./

COPY ./public ./public

COPY ./src ./src

ENV REACT_APP_baseAPIURL=http://a8454f258d02f403c88b7ae8f38a15f1-1819828245.us-west-2.elb.amazonaws.com:5000

RUN npm install

RUN npm run build

FROM nginx:latest

COPY --from=todo-app-build /client/build/ /usr/share/nginx/html

EXPOSE 80