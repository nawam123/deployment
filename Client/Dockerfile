# Build Stage
FROM node:22 AS BUILD

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Accept build arg
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

RUN npm run build

# Production Stage
FROM node:22

WORKDIR /app

RUN npm i -g serve

COPY --from=build /app/dist ./dist

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
