import React, { useState, useRef, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';


const AddProfilePicture = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [isPreviewing, setIsPreviewing] = useState(false);
  const [isImageSaved, setIsImageSaved] = useState(false);
  const videoRef = useRef(null);
  const mediaStreamRef = useRef(null);

  const { t } = useTranslation();

  useEffect(() => {
    startCamera();

    return () => {
      stopCamera();
    };
  }, []);

  const startCamera = async () => {
    try {
      const constraints = { video: true };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      const video = videoRef.current;
      video.srcObject = stream;
      video.play();
      mediaStreamRef.current = stream;
    } catch (error) {
      console.error('Error starting camera:', error);
    }
  };

  const stopCamera = () => {
    const video = videoRef.current;
    const stream = mediaStreamRef.current;
    if (video && stream) {
      video.srcObject = null;
      const tracks = stream.getTracks();
      tracks.forEach((track) => {
        track.stop();
      });
    }
  };

  const handleCapture = async () => {
    try {
      const video = videoRef.current;
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext('2d');
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const capturedImageSrc = canvas.toDataURL('image/png');
      setImageSrc(capturedImageSrc);
      setIsPreviewing(false);
      setIsImageSaved(false);
    } catch (error) {
      console.error('Error capturing image:', error);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const uploadedImageSrc = reader.result;
      setImageSrc(uploadedImageSrc);
      setIsPreviewing(false);
      setIsImageSaved(false);
    };
    reader.readAsDataURL(file);
  };

  const handlePreview = () => {
    stopCamera();
    startCamera();
    setIsPreviewing(true);
    setIsImageSaved(false);
  };

  const handleRetake = () => {
    setImageSrc(null);
    setIsPreviewing(false);
    setIsImageSaved(false);
  };

  const saveImage = () => {
    // Tässä voit toteuttaa logiikan tallentaaksesi kuvan tietokantaan
    // esimerkiksi lähettämällä sen palvelimelle HTTP-pyynnön avulla.
    // Voit käyttää esimerkiksi Axios-kirjastoa.

    // Esimerkki Axios-pyynnöstä:
    // axios.post('/tallennuspolku', { imageSrc })
    //   .then(response => {
    //     // Käsittely tallennuksen onnistuessa
    //     console.log('Kuva tallennettu tietokantaan');
    //     setIsImageSaved(true);
    //   })
    //   .catch(error => {
    //     // Käsittely tallennuksen epäonnistuessa
    //     console.error('Virhe tallentaessa kuvaa:', error);
    //   });

    // Käytetään tässä vaiheessa setIsImageSaved(true) simuloidaksemme tallennusprosessia
    setIsImageSaved(true);
    console.log('Kuva tallennettu tietokantaan');
  };

  return (
    <div>
      <h2>{t('addProfilePicture.title')}</h2>
      {imageSrc ? (
        <div style={{ marginBottom: '20px' }}>
          <img src={imageSrc} alt={t('addProfilePicture.profileAltText')} style={{ maxWidth: '100%' }} />
          <Button variant="secondary" onClick={handleRetake}>
            {t('addProfilePicture.retakeButton')}
          </Button>
          {!isImageSaved && (
            <Button variant="success" onClick={saveImage}>
              Tallenna
            </Button>
          )}
        </div>
      ) : (
        <div style={{ marginBottom: '20px' }}>
          {isPreviewing ? (
            <div>
              <video ref={videoRef} style={{ display: 'block' }}></video>
              <Button variant="primary" onClick={handleCapture}>
                {t('addProfilePicture.captureButton')}
              </Button>
              {!isImageSaved && (
                <Button variant="success" onClick={saveImage}>
                  Tallenna
                </Button>
              )}
            </div>
          ) : (
            <div>
              <video ref={videoRef} style={{ display: 'none' }}></video>
              <Button variant="primary" onClick={handlePreview}>
                {t('addProfilePicture.previewButton')}
              </Button>
              <br />
              <br />
              <input type="file" accept="image/*" onChange={handleFileUpload} />
              {!isImageSaved && (
                <Button variant="success" onClick={saveImage}>
                  Tallenna
                </Button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AddProfilePicture;
