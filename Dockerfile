FROM node:alpine as todo-app-build

WORKDIR /client

COPY package.json package-lock.json README.md ./

COPY ./public ./public

COPY ./src ./src

ENV REACT_APP_baseAPIURL=http://192.168.99.109:32272

RUN npm install

RUN npm run build

FROM nginx:latest

COPY --from=todo-app-build /client/build/ /usr/share/nginx/html

EXPOSE 80