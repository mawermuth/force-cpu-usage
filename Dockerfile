FROM node:lts

WORKDIR /app/
ADD package.json .

RUN npm install

ADD . .

CMD [ "node ./load-cpu.js" ]