# Base image with Node.js 20
FROM node:20-alpine 

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if you use it)
COPY package*.json ./

# Install dependencies (including TypeScript if it's a dev dependency)
RUN npm ci

# Copy the rest of your backend code, including TypeScript source files
COPY . .

# Compile TypeScript to JavaScript
# RUN npm run build # TODO

# Expose the port your backend app will run on (adjust if needed)
EXPOSE 3000 

# Start your backend app (adjust to your actual start script)
#CMD ["node", "build/index.js"]
CMD ["npm", "start"]