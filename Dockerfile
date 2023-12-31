FROM node:18
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN npm install
RUN npm run build
ENTRYPOINT [ "npm","run","start:prod" ]
