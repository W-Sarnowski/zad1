Część obowiązkowa:

punkt 1:
- index.js
- 
punkt 2:
- Dockerfile
- 
punkt 3:
1. sudo docker build -t test
2. docker run -it -p 3000:3000 --name container1 test
3. docker logs container1
4. docker history test

punkt 4:
- sudo apt-get install -y qemu-user-static
- docker buildx create --name builder1
- docker buildx use builder1
- docker buildx inspect --bootstrap
- docker buildx build -t scoutertf2/zad1:serwer --platform linux/arm/v7,linux/arm64/v8,linux/amd64 --push .
- 
Dodatek 1:
- frontend.yml

