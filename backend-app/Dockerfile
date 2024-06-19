FROM ubuntu:22.04

WORKDIR /backendapp

RUN apt update -y
RUN apt upgrade -y
RUN apt install -y python3 python3-pip build-essential hdf5-tools libgl1 libgtk2.0-dev

COPY requirements.txt ./
RUN pip3 install -r requirements.txt

COPY . .

EXPOSE 2401

CMD [ "python3", "backend.py" ]