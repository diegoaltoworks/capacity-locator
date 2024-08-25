# Base image with Node.js 20
FROM node:20-alpine 

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if you use it)
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the rest of your frontend code
COPY . .

# Build your Remix.js app
RUN npm run build

# Expose the port your Remix.js app will run on (usually 3000)
EXPOSE 3000

# Start your Remix.js app
CMD ["npm", "run", "start"] 