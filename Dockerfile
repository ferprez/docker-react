# Phase 1
FROM node:alpine as builder

WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json

RUN npm install --silent

COPY . /usr/src/app

RUN npm run build

# Phase 2
FROM nginx

COPY --from=builder /usr/src/app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
