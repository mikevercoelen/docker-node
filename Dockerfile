FROM node:10.15.0-alpine

WORKDIR /app
COPY . .

RUN npm install --prod

ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", "./src/index.js"]
