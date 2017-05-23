FROM node:7

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json yarn.lock /usr/src/app/
RUN yarn install

COPY . /usr/src/app
ARG MANDRILL_API_KEY
ARG MANDRILL_ACCOUNT
RUN yarn build
CMD [ "yarn", "server"]
