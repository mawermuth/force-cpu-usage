FROM node:lts

WORKDIR /app/
ADD package.json .

RUN npm install
RUN npm install nodemon -g

ADD . /app/

CMD [ "nodemon" ]