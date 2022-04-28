FROM node

WORKDIR /todo

COPY . .

RUN npm install

ENTRYPOINT [ "node", "app.js" ]