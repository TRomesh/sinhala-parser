FROM python:2.7

# install scikit-learn with dependencies - modified from: https://hub.docker.com/r/mubo/sklearn/~/dockerfile/
RUN apt-get update && \
apt-get install -y pkg-config libopenblas-dev liblapack-dev build-essential gfortran python-dev libfreetype6-dev libjpeg-dev libhdf5-dev liblzo2-dev libbz2-dev && \
pip install cython==0.23.4 && \
pip install numpy==1.10.4 && \
pip install dicttoxml==1.7.4 && \
pip install six==1.10.0 && \
pip install scipy==0.17.0 && \
pip install nltk==3.2.1 && \
pip install cherrypy==8.1.2 && \
pip install scikit-learn==0.17

COPY . /opt/app/server

EXPOSE 8080

CMD ["python","/opt/app/server/api.py"]
