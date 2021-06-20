import React, { useState } from 'react';
import BarcodeScannerComponent from 'react-webcam-barcode-scanner';
import {
  Button,
  Modal
} from 'react-bootstrap';

const ReadCamera = ({
  open,
  onToggle
}) => {
  const [value, setValue] = useState('');

  return (
    <Modal data-testid="read-camera" size="lg" show={open} onHide={() => onToggle(false)}>
      <Modal.Header closeButton>
        <Modal.Title>
          Aproxime o código da câmera
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <center>
          <BarcodeScannerComponent
            width={500}
            height={500}
            onUpdate={(err, result) => {
              if (result) setValue(result.text);
              else setValue('');
            }}
          />
          <p style={{ marginTop: '16px' }}>{value}</p>
        </center>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={() => onToggle(false)}>
          Cancelar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export {
  ReadCamera
};
