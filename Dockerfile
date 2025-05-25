# ---- Stage 1: Build the React application ----
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build


# ---- Stage 2: Serve the application with Nginx ----
FROM nginx:1.28-alpine

# Copy the build output from the 'builder' stage
# Ensure '/app/dist' is correct for Vite, or use '/app/build' for CRA
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy your custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 12345 (documentation for which port Nginx is configured to listen on)
EXPOSE 12345

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]