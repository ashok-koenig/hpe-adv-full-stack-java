# Container Basics
## Basic Docker Commands
### Check Docker version
```
docker -v
```
### List all images
```
docker images
```
### List all running containers
```
docker ps
```
### List all containers (Including stopped)
```
docker ps -a
```
### pull the nginx latest image
```
docker pull nginx:latest
```
### Create nginx container (Run the nginx image)
```
docker run -d -p 80:80 --name my-web-server nginx:latest
```
### pause / unpause nginx os container
```
docker pause my-web-server
docker unpause my-web-server
```
### stop / start / restart nginx containers
```
docker stop my-web-server
docker ps -a
docker start my-web-server
docker restart my-web-server
```
### stop and remove the container
```
docker stop my-web-server
docker rm my-web-server
```
### Remove the running container
```
docker rm -f my-web-server
```
### Remove the nginx image
```
docker rmi nginx:latest
```