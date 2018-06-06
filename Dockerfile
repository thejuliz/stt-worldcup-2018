FROM smebberson/alpine-nginx-nodejs:4.4.0
MAINTAINER theerapat

RUN mkdir -p /tmp/src
ADD ./* /tmp/src/
WORKDIR /tmp/src
RUN npm install
RUN npm build
RUN ls /tmp/src/
RUN mv /tmp/src/build /usr/html/

EXPOSE "80"