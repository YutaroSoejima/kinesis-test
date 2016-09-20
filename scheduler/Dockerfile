FROM node:6.3.1

COPY app/package.json /var/eve/app/package.json
WORKDIR /var/eve/app

RUN npm install

COPY app /var/eve/app

CMD ["npm", "start"]
