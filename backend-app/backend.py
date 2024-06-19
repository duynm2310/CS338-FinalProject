from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from PIL import Image
import base64
from io import BytesIO
import ARL
import json

global model
model = ARL.create_model()

app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

def transferBase64ToImage(base64_string):
    try:
        image_string = base64.b64decode(base64_string)
        image = Image.open(BytesIO(image_string))
    except:
        return None
    return image


def predict(image):
    result = ARL.predict(model, image)
    return result

@app.route('/getsignal', methods =['POST'])
@cross_origin(origins='*')
def getSignal():
    image_base64 = request.form.get('image')
    img = transferBase64ToImage(image_base64)
    result = predict(img)
    return json.dumps(result)

if __name__ == '__main__':
    app.run(host='127.0.0.1', port='2401')