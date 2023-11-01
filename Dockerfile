FROM node:18.18.2-slim 
# node:12-alpine
ENV TZ="Asia/Shanghai"
# 使用阿里云镜像
WORKDIR /app/
COPY . /app/yapi
WORKDIR /app/yapi
RUN echo $PWD
RUN ls -al .
RUN npm install -g npm@10.2.2
RUN npm install --legacy-peer-deps
