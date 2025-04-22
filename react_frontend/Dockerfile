# Build phase
FROM node:18-alpine as build

WORKDIR /app
COPY . .
RUN npm install && npm run build

# Serve phase
FROM nginx:alpine

# Set Cloud Run port
ENV PORT 8080

# Copy built React app to NGINX
COPY --from=build /app/build /usr/share/nginx/html

# Override default NGINX config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
