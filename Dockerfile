FROM node:1w6.4.0
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN yarn
CMD ["yarn", "start"]