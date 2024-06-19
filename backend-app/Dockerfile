FROM python:3

WORKDIR /backendapp

COPY requirements.txt ./
RUN pip install -r requirements.txt

COPY . .

# CMD [ "python", "./backend.py" ]
