import React, { useState, useRef, useEffect } from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator: React.FC = () => {
  const [data, setData] = useState('');
  const [qrCodeData, setQRCodeData] = useState('');
  const qrCodeRef = useRef<any>(null);
  const [error, setError] = useState('');
  useEffect(() => {
    const savedQRCodeData = localStorage.getItem('qrCodeData');
    if (savedQRCodeData) {
      setQRCodeData(savedQRCodeData);
    }
  }, []);
  const generateQRCode = () => {
    try {
      if (data.trim() !== '') {
        setQRCodeData(data);
        // Save the generated QR code data to localStorage
        localStorage.setItem('qrCodeData', data);
        setError('');
      } else {
        setQRCodeData('');
        setError('Please enter data to generate a QR code.');
      }
    } catch (error) {
      setError('An error occurred while generating the QR code.');
    }
  };

  const downloadQRCode = () => {
    if (!qrCodeRef.current) {
      setError('No QR code to download.');
      return;
    }
    const canvas = qrCodeRef.current.querySelector('canvas');
    if (!canvas) {
      setError('An error occurred while downloading the QR code.');
      return;
    }

    const url = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url;
    a.download = 'qrcode.png';
    a.click();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter URL, text, or contact information"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={generateQRCode}>Generate QR Code</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div ref={qrCodeRef}>
        <QRCode value={qrCodeData} />
      </div>
      {qrCodeData && (
        <div>
          <button onClick={downloadQRCode}>Download QR Code</button>
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;

