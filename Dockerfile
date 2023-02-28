# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Set environment variables
ENV DATABASE_URL=postgres://postgres:postgres@db:5432/postgres

# Build the Next.js app
RUN npm run build

# Expose the port that the app will listen on
EXPOSE 3000

# Run the app using the start command defined in package.json
CMD ["npm", "start"]