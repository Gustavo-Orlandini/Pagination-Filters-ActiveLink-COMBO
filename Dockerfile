FROM node:18

RUN npm install -g firebase-tools

WORKDIR /home/genesis/app