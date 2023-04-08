FROM nginx

RUN rm /etc/nginx/conf.d/default.conf

# Move the nginx config file to the docker container to make nginx work as a service
COPY nginx.conf /etc/nginx/conf.d/default.conf