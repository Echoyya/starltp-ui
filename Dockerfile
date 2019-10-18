FROM nginx:stable-alpine
ADD ./fe/newtranstar/ /tmp/ui
EXPOSE 80
RUN mv  /tmp/ui  /usr/share/nginx/html/newtranstar
CMD ["nginx", "-g", "daemon off;"]
