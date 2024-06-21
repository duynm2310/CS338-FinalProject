import torch
import torchvision.transforms as transforms
import numpy as np
# import cv2
import mediapipe as mp
from torch import nn
from efficientnet_pytorch import EfficientNet

# mp_hands = mp.solutions.hands

threshold = 0.75

class_names = np.array(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
                      'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
                      'del', 'nothing', 'space'])

data_transform = transforms.Compose([
                transforms.Resize(size = (128, 128)),         # Resize our images to 224x224
                transforms.ToTensor()
            ])


def create_model():
    model = EfficientNet.from_pretrained('efficientnet-b0')
    model._fc = nn.Linear(model._fc.in_features, len(class_names))
    model.load_state_dict(torch.load(f="./models/ASL_HandSignLang_EfficientNetB0.pth", map_location=torch.device('cpu')))
    model.eval()
    return model

# def check_hands(img):
#     frame = np.array(img)
#     frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
#     frame_rgb = cv2.flip(frame_rgb, 1)
#     frame_rgb.flags.writeable = False
#     with mp_hands.Hands(min_detection_confidence=0.8, min_tracking_confidence=0.8) as hands:
#         results = hands.process(frame_rgb)
#     return results.multi_hand_landmarks


def predict(model, img):
    result = {}
    # if check_hands(img):
    with torch.inference_mode():    
        outputs = model(data_transform(img).unsqueeze(0))
    for idx in torch.topk(outputs, k=1).indices.squeeze(0).tolist():
        prob = torch.softmax(outputs, dim=1)[0, idx].item()
    
        result[class_names[idx]] = prob * 100
        print(result)
    # else: 
    #     result["none"] = 100
    return result