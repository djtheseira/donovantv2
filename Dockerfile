FROM node:16-alpine

ENV HOME=/home/app

RUN mkdir -p $HOME/donovant/src
RUN mkdir -p /usr/share/nginx/html
COPY package.json $HOME/donovant

WORKDIR $HOME/donovant
RUN npm install

RUN npm install serve

RUN addgroup -S app &&\
  adduser -S -D -h /bin/false app -G app

# COPY ./package.json $HOME/donovant
COPY ./src $HOME/donovant/src
# COPY ./config/nginx.conf $HOME

COPY ./public $HOME/donovant/public

# RUN chown -R app:app $HOME/*

# RUN npm run build
  
# CMD serve -s build -l 3000
CMD ["npm", "start"]

# USER app

# FROM nginx

# COPY --from=build-stage /home/app/donovant/src/build /usr/share/nginx/html

# COPY --from=build-stage /home/app/nginx.conf /etc/nginx/conf.d/default.conf