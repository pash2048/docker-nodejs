# docker-nodejs

docker-nodejs use Redis and nodejs Redis client to show how to use docker network

## build & run

first, you need to create a network interface

```bash
docker create network nodejs
```

then run redis image with your custome network
```bash
docker run --name some-redis --rm --network nodejs -v /docker/host/dir:/data redis redis-server --save 60 1 --loglevel warning 
```

# build and run 

build image with your costume name and tag(default my app and laetes tag)

```bash
docker build -t myhttp .
```

then run docker image 
```bash
docker run --rm -p:80:80 --network nodejs --name myhttp myhttp
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
