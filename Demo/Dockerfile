FROM node:12.16 as builder
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm ci
COPY . .
RUN npm run build:web

FROM httpd:alpine
COPY --from=builder build /usr/local/apache2/htdocs/
RUN echo 'Include conf/extra/vhost.conf' >> /usr/local/apache2/conf/httpd.conf
COPY httpd.conf /usr/local/apache2/conf/extra/vhost.conf
