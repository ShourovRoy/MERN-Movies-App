FROM node:22-alpine3.18 AS builder

# Set working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock, etc.) for dependency installation
COPY package*.json ./

# # Install dependencies
RUN npm install

# # Copy the rest of the application code
COPY . .

RUN npm run build

CMD [ "npm", "run", "preview" ]

