FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --omit=dev
FROM nginx:alpine
COPY --from=build /app/dist/front_majama/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
RUN chmod -R 755 /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]