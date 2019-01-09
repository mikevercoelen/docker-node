FROM node:10.15.0-alpine

WORKDIR /app
COPY . .

RUN npm install --prod

EXPOSE 3000
CMD ["node", "./src/index.js"]