FROM node

RUN npm install -g kinesalite
RUN npm install kinesalite

RUN mkdir -p /data

ADD kinesalite.js /

EXPOSE 4567

CMD ["node", "kinesalite"]
