# FROM node:alpine as todo-app-build

# WORKDIR /client

# COPY package.json package-lock.json README.md ./

# COPY ./public ./public

# COPY ./src ./src

# ENV REACT_APP_baseAPIURL=http://a8454f258d02f403c88b7ae8f38a15f1-1819828245.us-west-2.elb.amazonaws.com:5000

# RUN npm install

# RUN npm run build

# FROM nginx:latest

# COPY --from=todo-app-build /client/build/ /usr/share/nginx/html

# EXPOSE 80

FROM node:10
# A directory within the virtualized Docker environment
# Becomes more relevant when using Docker Compose later
WORKDIR /usr/src/app
# Copies package.json and package-lock.json to Docker environment
COPY package*.json ./
# Installs all node packages
RUN npm install
# Copies everything over to Docker environment
COPY . .

ENV REACT_APP_baseAPIURL=http://192.168.99.106:5000

# Uses port which is used by the actual application
EXPOSE 3000
# Finally runs the application
CMD [ "npm", "start" ]