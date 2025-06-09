# Use Node image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy files
COPY . .

# Install dependencies (fixing your issue)
RUN npm install --legacy-peer-deps

# Build your app
RUN npm run build

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
