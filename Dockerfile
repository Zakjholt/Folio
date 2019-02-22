FROM node

USER node

WORKDIR /home/node

COPY package.json .
COPY package-lock.json .
RUN npm install 

COPY server ./server
COPY app ./app

ENTRYPOINT [ "npm", "run" ]

CMD ["start"]
