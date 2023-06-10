import React, { useState, useRef } from 'react';
import QRCode from 'qrcode.react';
import { saveAs } from 'file-saver';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const qrCodeRef = useRef(null);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleDownload = () => {
    const canvas = qrCodeRef.current;
    canvas.toBlob((blob) => {
      saveAs(blob, 'qrcode.png');
    });
  };

  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <QRCode ref={qrCodeRef} value={text} />
      <div className="input-container">
        <input type="text" value={text} onChange={handleTextChange} placeholder="Enter URL" />
        <button onClick={handleDownload}>Download QR Code</button>
      </div>
    </div>
  );
}

export default App;
