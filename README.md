# docker-nodejs
for run with docker
firt create brige network for docker

docker create network nodejs

then run redis
docker run --name some-redis --rm --network nodejs -v /docker/host/dir:/data redis redis-server --save 60 1 --loglevel warning 

first build image with your cotome name and tag(defule my app and leates tag)
docker build -t myhttp .

then run docker image 
docker run --rm -p:80:80 --network nodejs --name myhttp myhttp
