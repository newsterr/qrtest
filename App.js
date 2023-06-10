import React, { useState, useRef } from 'react';
import QRCode from 'qrcode.react';
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';
//import { canvasToBlob } from 'canvas-toBlob';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const qrCodeRef = useRef(null);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleDownload = () => {
    const qrCodeElement = qrCodeRef.current;
    html2canvas(qrCodeElement)
      .then((canvas) => {
        canvas.toBlob((bolb) => {
          saveAs(bolb, 'qrcode.png');
        })
      });

  };

  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <div ref={qrCodeRef}>
        <QRCode value={text} />
      </div>
      <div className="input-container">
        <input type="text" value={text} onChange={handleTextChange} placeholder="Enter URL" />
        <button onClick={handleDownload}>Download QR Code</button>
      </div>
    </div>
  );
}

export default App;
