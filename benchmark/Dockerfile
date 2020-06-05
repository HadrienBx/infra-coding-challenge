FROM node:12-stretch

COPY ./package.json ./entrypoint.sh /code/

WORKDIR /code
RUN npm install

COPY ./src /code/src

ENTRYPOINT [ "/code/entrypoint.sh" ]
