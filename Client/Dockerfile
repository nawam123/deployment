# # Build Stage
# FROM node:22 AS BUILD

# WORKDIR /app

# COPY package*.json ./

# RUN npm install

# COPY . .

# # Accept build arg
# ARG VITE_API_URL
# ENV VITE_API_URL=$VITE_API_URL

# RUN npm run build

# # Production Stage
# FROM node:22

# WORKDIR /app

# RUN npm i -g serve

# COPY --from=build /app/dist ./dist

# EXPOSE 3000

# CMD ["serve", "-s", "dist", "-l", "3000"]




# Build Stage
FROM node:22 AS BUILD

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# 1. Add this ARG
ARG VITE_API_URL
# 2. Add this ENV to use the ARG
ENV VITE_API_URL=${VITE_API_URL}

# 3. This build command will now use the ENV var
RUN npm run build

# Production Stage
FROM node:22

WORKDIR /app

RUN npm i -g serve

ENV PATH="/usr/local/bin:$PATH"

COPY --from=build /app/dist ./dist

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
