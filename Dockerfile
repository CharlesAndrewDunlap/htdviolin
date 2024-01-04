# Use an official base image
FROM node:21.1.0

# Set the working directory inside the container
WORKDIR /src

# Copy the dependencies file to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the content of the local source directory to the working directory
COPY . .

# Your build argument
ARG NEXT_PUBLIC_RECAPTCHA_SITE_KEY

# Set the environment variable
ENV NEXT_PUBLIC_RECAPTCHA_SITE_KEY=$NEXT_PUBLIC_RECAPTCHA_SITE_KEY

# Build the Next.js application
RUN npm run build

# Specify the command to run on container start
CMD ["npm", "run", "start"]