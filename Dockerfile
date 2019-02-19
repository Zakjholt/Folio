FROM node

WORKDIR /root

COPY package.json .
COPY package-lock.json .
RUN npm install 

COPY src ./src

ENTRYPOINT [ "npm", "run" ]

CMD ["start"]