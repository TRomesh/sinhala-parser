# Sinhala Parser

<h1 align="center">
<br>
<img width="350" src="https://raw.githubusercontent.com/TRomesh/sinhala-parser/master/public/src/app/media/images/logo.png?token=AIhqNt6U6dBlMc1r3jWK_1QqSBdO9kiFks5YKsuhwA%3D%3D">
<br>
</h1>

###Setting up Docker Environment
[See how to install Docker on Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-16-04#step-2-—-executing-the-docker-command-without-sudo-(optional))

[Install Docker on Windows](https://docs.docker.com/docker-for-windows/)

###Create Docker Image for the API
```bash
cd server
docker build -t <your username>:SinhalaParser .
```
###Run Docker Container 

```bash
docker run -p <port wish to bind>:8080 -d <your username>:SinhalaParser
```
