# Specify a base image

FROM node:alpine

WORKDIR /usr/app

# Install  the dependencies
COPY ./ ./
RUN npm install

# Default command

CMD ["npm", "start"]
