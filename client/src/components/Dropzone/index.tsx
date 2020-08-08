import React, { useState, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import ReactCrop from 'react-image-crop';
import { Modal } from 'react-bootstrap';

import notify from '../../services/toast';

import { Container, FiUploadIcon } from './styles';
import 'react-image-crop/dist/ReactCrop.css';
import { DotLoader } from 'react-spinners';

interface Props {
  onFileUploaded: React.Dispatch<React.SetStateAction<File | undefined>>;
}

interface Crop {
  aspect?: number;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  unit?: 'px' | '%';
}

const Dropzone: React.FC<Props> = ({ onFileUploaded }) => {
  const { t } = useTranslation();
  const [loadingAvatar, setLoadingAvatar] = useState(false);
  const [show, setShow] = useState(false);
  const [upImg, setUpImg] = useState<any>();
  const [imgName, setImgName] = useState('');
  const imgRef = useRef(null);
  const [crop, setCrop] = useState<Crop>({ unit: '%', width: 100, aspect: 1 / 1 });
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [cropped, setCropped] = useState<File>();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleModalExit = () => {
    setUpImg(undefined);
    setPreviewUrl('');
    setCropped(undefined);
    setImgName('');
  };

  const onSelectFile = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      if (e.target.files[0].name.includes('.png') || e.target.files[0].name.includes('.jpg') || e.target.files[0].name.includes('.jpeg')) {
        const reader = new FileReader();
        reader.addEventListener('load', () => setUpImg(reader?.result ? reader.result : undefined));
        reader.readAsDataURL(e.target.files[0]);
        setImgName(e.target.files[0].name);
        handleShow();
      } else {
        notify(t('imageinvalid'), 'error');
        e.target.value = '';
      }
    }
  };

  const onLoad = useCallback((img) => {
    imgRef.current = img;
  }, []);

  const createCropPreview = async (image: any, crop: any, fileName: string) => {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width ? crop.width : 0;
    canvas.height = crop.height ? crop.height : 0;
    const ctx = canvas.getContext('2d');

    ctx?.drawImage(image, crop.x * scaleX, crop.y * scaleY, crop.width * scaleX, crop.height * scaleY, 0, 0, crop.width, crop.height);
    return new Promise((resolve, reject) => {
      canvas.toBlob((blob: any) => {
        if (!blob) {
          reject(new Error('Canvas is empty'));
          return;
        }
        blob.name = fileName;
        window.URL.revokeObjectURL(previewUrl);
        setPreviewUrl(window.URL.createObjectURL(blob));
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          dataURLtoFile(String(reader.result), imgName);
        };
      }, 'image/jpeg');
    });
  };

  const makeClientCrop = async (crop: any) => {
    if (imgRef.current && crop.width && crop.height) {
      createCropPreview(imgRef.current, crop, imgName);
    }
  };

  const dataURLtoFile = async (dataurl: string, filename: string) => {
    const arr = dataurl.split(',');
    const mime = arr.length > 0 && arr[0]?.match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    const croppedImage = new File([u8arr], filename, { type: mime });
    setCropped(croppedImage);
  };

  async function save() {
    try {
      setLoadingAvatar(true);
      onFileUploaded(cropped);
      handleClose();
    } catch (err) {
      notify(err.message, 'error');
    } finally {
      setLoadingAvatar(false);
    }
  }
  return (
    <Container>
      <input id="input-picture" type="file" accept=".png, .jpg, .jpeg" onChange={onSelectFile} />
      <label className="dropzone" htmlFor="input-picture" data-tip={t('selectAvatar')}>
        <FiUploadIcon />
        {t('selectFile')}
      </label>
      <Modal show={show} onHide={handleClose} centered onExit={handleModalExit} backdrop={loadingAvatar ? 'static' : true}>
        <Modal.Header closeButton>
          <Modal.Title>{t('croppicture')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ReactCrop src={upImg} onImageLoaded={onLoad} crop={crop} onChange={(c) => setCrop(c)} onComplete={makeClientCrop} />
        </Modal.Body>
        <Modal.Footer>
          <div className="footer-buttons">
            <button type="button" data-tip={t('crop1x1')} disabled={loadingAvatar} onClick={() => save()}>
              {loadingAvatar ? <DotLoader size={25} color="#efefef" /> : t('crop')}
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Dropzone;
