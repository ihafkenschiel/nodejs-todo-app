# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directoring in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json  to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Run the application
CMD ["node", "index.js"]