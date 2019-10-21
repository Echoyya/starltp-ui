FROM nginx:stable-alpine
ADD ./fe/starltp-ui/ /tmp/ui
EXPOSE 80
RUN mv  /tmp/ui  /usr/share/nginx/html/starltp-ui
CMD ["nginx", "-g", "daemon off;"]
