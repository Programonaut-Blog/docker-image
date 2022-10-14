FROM node

# Create app directory
WORKDIR /code

# Install app dependencies
COPY . .
RUN npm install

# Start app
CMD [ "npm", "start" ]