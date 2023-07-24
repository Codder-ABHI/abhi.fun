let currentQRText = ''; 

function generateQRCode() {
  const inputText = document.getElementById('textInput').value;
  const qrcodeContainer = document.getElementById('qrcode');

  if (!inputText) {
    alert('Please enter a text or URL.');
    return;
  }

  currentQRText = inputText; 

 
  qrcodeContainer.innerHTML = '';

  const qrcode = new QRCode(qrcodeContainer, {
    text: inputText,
    width: 200,
    height: 200,
  });
}

function downloadQRCode() {
  if (!currentQRText) {
    alert('Please generate a QR code first.');
    return;
  }

 
  const qrCodeData = document.getElementById('qrcode').getElementsByTagName('img')[0].src;
  const downloadLink = document.createElement('a');
  downloadLink.href = qrCodeData;
  downloadLink.download = 'qrcode.png';
  downloadLink.click(); 
}

document.addEventListener('DOMContentLoaded', function() {
  const defaultURL = 'https://abhi.fun'; 
  const textInput = document.getElementById('textInput');
  textInput.value = defaultURL;
  generateQRCode();
  textInput.value = null;
});