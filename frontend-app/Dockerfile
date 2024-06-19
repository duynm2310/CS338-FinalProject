# build environment
FROM node:13.12.0-alpine as build
WORKDIR /frontendapp
COPY . .
RUN npm install
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /frontendapp/build /usr/share/nginx/html
COPY --from=build /frontendapp/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 2402
CMD ["nginx", "-g", "daemon off;"]