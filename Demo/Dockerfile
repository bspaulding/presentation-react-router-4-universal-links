FROM httpd:alpine
COPY build /usr/local/apache2/htdocs/
RUN echo 'Include conf/extra/vhost.conf' >> /usr/local/apache2/conf/httpd.conf
COPY httpd.conf /usr/local/apache2/conf/extra/vhost.conf
