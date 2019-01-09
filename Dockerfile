FROM node:10.15.0-alpine
ENV NODE_ENV=production
WORKDIR /usr/app

COPY ./package.json ./
RUN npm install && \
    npm cache clean --force

EXPOSE 3000

CMD ["npm", "run", "start-production"]
