FROM node:20-alpine

ENV APP_PORT=${{values.application_port}}
ENV DB_USERNAME=${{values.database_username}}
ENV DB_PASSWORD=${{values.database_password}}
ENV DB_DATABASE=${{values.database_database}}
ENV DB_HOSTNAME=${{values.database_hostname}}
ENV DB_HOSTPORT=${{values.database_hostport}}

RUN apk add g++ make py3-pip

WORKDIR /app
COPY . .

EXPOSE ${{values.application_port}}

CMD npm install && npm rebuild bcrypt --build-from-source && npm start