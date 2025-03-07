# Stage 1: Build Stage
# Utilizing the official Node.js 23.3-bullseye image as the build environment.
FROM node:23.3-bullseye AS build

# Set the working directory inside the container to /usr/src/app
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
# This step ensures that we only install dependencies, enabling better layer caching.
COPY package*.json ./

# Install dependencies using npm, leveraging cache mount to speed up the process.
RUN --mount=type=cache,target=/usr/src/app/.npm \
  npm set cache /usr/src/app/.npm && \
  npm install --legacy-peer-deps

# Copy the entire project files to the working directory
COPY . .

# Build the project using the npm build script
RUN npm run build

# Stage 2: Deployable Image Stage
# Utilizing the official NGINX unprivileged 1.27-alpine-perl image as the deployment environment.
FROM nginxinc/nginx-unprivileged:1.27-alpine-perl

# Copy the custom NGINX configuration file to the container, ensuring the build cache is not invalidated by changes in the base image
COPY --link nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built project files from the build stage to the appropriate directory in the NGINX container
COPY --link --from=build /usr/src/app/dist/ /usr/share/nginx/html

# Expose port 5173 for the application
EXPOSE 5173

# Set the default command to run NGINX in the foreground
CMD ["nginx", "-g", "daemon off;"]
