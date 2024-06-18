import { useEffect, useRef, useCallback } from 'react';
import Webcam from 'react-webcam';

function Camera({ onGetSignal }) {
    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: 'user',
    };
    const webcamRef = useRef();

    const getSignal = useCallback(() => {
        if (!webcamRef.current.unmounted) {
            const imageSrc = webcamRef.current.getScreenshot();
            if (imageSrc) {
                const img_base64 = imageSrc.slice('data:image/jpeg;base64,'.length);
                const formData = new FormData();
                formData.append('image', img_base64);
                fetch('http://127.0.0.1:3001/getsignal', { method: 'POST', body: formData })
                    .then((res) => {
                        return res.json();
                    })
                    .then((data) => {
                        const result = Object.keys(data)[0];
                        onGetSignal(result);
                    });
            }
        }
    }, [webcamRef]);

    useEffect(() => {
        const interval = setInterval(() => {
            getSignal();
        }, 1000);

        return () => clearInterval(interval);
    }, [getSignal]);

    return (
        <Webcam
            ref={webcamRef}
            style={{ width: '100%', height: '100%' }}
            audio={false}
            height={720}
            screenshotFormat="image/jpeg"
            width={1280}
            videoConstraints={videoConstraints}
        ></Webcam>
    );
}

export default Camera;
