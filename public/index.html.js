const pairHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AstraX Session Generator - WhatsApp Bot Pairing</title>
  <meta name="description" content="Generate your AstraX WhatsApp Bot Session ID instantly. Connect with QR Code or Pairing Code. Fast, secure, and free session generator.">
  <meta name="keywords" content="WhatsApp Bot, Session Generator, AstraX, Baileys, Pair Code, QR Code, Bot Hosting">
  <meta name="author" content="AstraX Team">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://api.astrax.site.je/">
  <meta property="og:title" content="AstraX Session Generator">
  <meta property="og:description" content="Generate your WhatsApp Bot Session ID instantly with QR Code or Pairing Code. Secure and fast.">
  <meta property="og:image" content="https://i.ibb.co/QvGY7dqB/file-00000000e1107243ad54749c06fe2d80.png">
  
  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://api.astrax.site.je/">
  <meta property="twitter:title" content="AstraX Session Generator">
  <meta property="twitter:description" content="Generate your WhatsApp Bot Session ID instantly with QR Code or Pairing Code.">
  <meta property="twitter:image" content="https://i.ibb.co/QvGY7dqB/file-00000000e1107243ad54749c06fe2d80.png">
  
  <!-- Favicon -->
  <link rel="icon" type="image/png" href="https://i.ibb.co/QvGY7dqB/file-00000000e1107243ad54749c06fe2d80.png">
  
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
  <script src="https://cdn.socket.io/4.7.2/socket.io.min.js"></script>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Outfit', sans-serif;
    }
    
    body {
      background: #0a0e1a;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      color: #e0f2fe;
      position: relative;
      overflow-x: hidden;
    }

    /* GRID BACKGROUND */
    body::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: 
        linear-gradient(rgba(6, 182, 212, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(6, 182, 212, 0.03) 1px, transparent 1px);
      background-size: 50px 50px;
      z-index: 0;
      pointer-events: none;
    }

    /* GLOW ORBS */
    body::after {
      content: '';
      position: fixed;
      top: -50%;
      right: -20%;
      width: 800px;
      height: 800px;
      background: radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%);
      border-radius: 50%;
      filter: blur(60px);
      z-index: 0;
      pointer-events: none;
      animation: float 20s ease-in-out infinite;
    }

    @keyframes float {
      0%, 100% { transform: translate(0, 0) scale(1); }
      50% { transform: translate(-100px, 100px) scale(1.1); }
    }

    .container {
      width: 100%;
      max-width: 500px;
      display: grid;
      gap: 24px;
      position: relative;
      z-index: 1;
    }

    .glass-card {
      background: rgba(15, 23, 42, 0.6);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(6, 182, 212, 0.2);
      border-radius: 24px;
      padding: 36px;
      box-shadow: 
        0 20px 60px rgba(0, 0, 0, 0.5),
        inset 0 1px 0 rgba(255, 255, 255, 0.05);
      position: relative;
      overflow: hidden;
    }

    .glass-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.5), transparent);
    }

    .header {
      text-align: center;
      margin-bottom: 28px;
    }

    .bot-image {
      width: 110px;
      height: 110px;
      border-radius: 20px;
      margin: 0 auto 20px;
      border: 2px solid rgba(6, 182, 212, 0.4);
      object-fit: cover;
      box-shadow: 
        0 8px 32px rgba(6, 182, 212, 0.3),
        0 0 60px rgba(139, 92, 246, 0.2);
      animation: glow 3s ease-in-out infinite;
    }

    @keyframes glow {
      0%, 100% { box-shadow: 0 8px 32px rgba(6, 182, 212, 0.3), 0 0 60px rgba(139, 92, 246, 0.2); }
      50% { box-shadow: 0 8px 40px rgba(6, 182, 212, 0.5), 0 0 80px rgba(139, 92, 246, 0.4); }
    }

    .title {
      font-size: 30px;
      font-weight: 700;
      font-family: 'Space Grotesk', sans-serif;
      background: linear-gradient(135deg, #06b6d4 0%, #8b5cf6 50%, #06b6d4 100%);
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: shimmer 3s linear infinite;
      margin-bottom: 8px;
    }

    @keyframes shimmer {
      to { background-position: 200% center; }
    }

    .subtitle {
      font-size: 14px;
      color: #7dd3fc;
      font-weight: 400;
    }

    .status-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 18px;
      background: rgba(6, 182, 212, 0.1);
      border: 1px solid rgba(6, 182, 212, 0.3);
      border-radius: 12px;
      font-size: 13px;
      font-weight: 500;
      color: #22d3ee;
      margin-top: 16px;
    }

    .status-dot {
      width: 8px;
      height: 8px;
      background: #22d3ee;
      border-radius: 50%;
      box-shadow: 0 0 10px #22d3ee;
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.6; transform: scale(1.2); }
    }

    .qr-section {
      background: rgba(6, 182, 212, 0.05);
      border: 1px solid rgba(6, 182, 212, 0.15);
      border-radius: 20px;
      padding: 24px;
      text-align: center;
      margin-bottom: 24px;
    }

    .qr-container {
      background: white;
      border-radius: 16px;
      padding: 16px;
      display: inline-block;
      margin-bottom: 12px;
      box-shadow: 0 8px 24px rgba(6, 182, 212, 0.2);
    }

    #qr-image {
      width: 256px;
      height: 256px;
      border-radius: 12px;
      display: block;
    }

    .qr-placeholder {
      width: 256px;
      height: 256px;
      background: #f1f5f9;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #64748b;
      font-size: 14px;
    }

    .timer {
      font-size: 13px;
      color: #7dd3fc;
      margin-top: 8px;
    }

    .divider {
      display: flex;
      align-items: center;
      gap: 16px;
      margin: 28px 0;
      color: #475569;
      font-size: 13px;
      font-weight: 600;
    }

    .divider::before,
    .divider::after {
      content: '';
      flex: 1;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.3), transparent);
    }

    .input-group {
      margin-bottom: 18px;
    }

    .input-label {
      display: block;
      font-size: 13px;
      font-weight: 600;
      color: #7dd3fc;
      margin-bottom: 10px;
    }

    .input-field {
      width: 100%;
      padding: 16px 18px;
      background: rgba(6, 182, 212, 0.05);
      border: 1px solid rgba(6, 182, 212, 0.2);
      border-radius: 14px;
      color: #e0f2fe;
      font-size: 15px;
      transition: all 0.3s;
    }

    .input-field:focus {
      outline: none;
      border-color: #06b6d4;
      background: rgba(6, 182, 212, 0.08);
      box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.1);
    }

    .input-field::placeholder {
      color: #475569;
    }

    .btn {
      width: 100%;
      padding: 16px 24px;
      background: linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%);
      border: none;
      border-radius: 14px;
      color: white;
      font-size: 15px;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.3s;
      box-shadow: 0 4px 20px rgba(6, 182, 212, 0.4);
      position: relative;
      overflow: hidden;
    }

    .btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: left 0.5s;
    }

    .btn:hover::before {
      left: 100%;
    }

    .btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 30px rgba(6, 182, 212, 0.6);
    }

    .btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      transform: none;
    }

    .pair-code-display {
      background: rgba(6, 182, 212, 0.1);
      border: 1px solid rgba(6, 182, 212, 0.3);
      border-radius: 14px;
      padding: 24px;
      text-align: center;
      margin-top: 18px;
      display: none;
    }

    .pair-code-display.show {
      display: block;
      animation: slideIn 0.3s ease;
    }

    @keyframes slideIn {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .pair-code-label {
      font-size: 12px;
      color: #7dd3fc;
      margin-bottom: 10px;
      font-weight: 600;
    }

    .pair-code {
      font-size: 36px;
      font-weight: 700;
      color: #22d3ee;
      letter-spacing: 6px;
      font-family: 'Space Grotesk', monospace;
      text-shadow: 0 0 20px rgba(34, 211, 238, 0.5);
    }

    .info-box {
      background: rgba(6, 182, 212, 0.05);
      border: 1px solid rgba(6, 182, 212, 0.15);
      border-radius: 16px;
      padding: 20px;
      margin-top: 24px;
    }

    .info-title {
      font-size: 14px;
      font-weight: 700;
      color: #22d3ee;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .info-text {
      font-size: 13px;
      color: #7dd3fc;
      line-height: 1.8;
    }

    .info-text > span {
      display: block;
      margin-bottom: 6px;
    }

    @media (max-width: 480px) {
      .glass-card {
        padding: 28px 24px;
      }
      .title {
        font-size: 26px;
      }
      #qr-image, .qr-placeholder {
        width: 220px;
        height: 220px;
      }
      .pair-code {
        font-size: 28px;
        letter-spacing: 4px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="glass-card">
      <div class="header">
        <img src="https://i.ibb.co/QvGY7dqB/file-00000000e1107243ad54749c06fe2d80.png" alt="AstraX" class="bot-image">
        <h1 class="title">AstraX Session</h1>
        <p class="subtitle">Generate your WhatsApp Bot Session ID</p>
        <div class="status-badge">
          <span class="status-dot"></span>
          <span id="status-text">Connecting...</span>
        </div>
      </div>

      <div class="qr-section">
        <div class="qr-container">
          <div id="qr-placeholder" class="qr-placeholder">Generating QR Code...</div>
          <img id="qr-image" style="display: none;" alt="QR Code">
        </div>
        <p class="timer" id="timer-text">Scan with WhatsApp > Linked Devices</p>
      </div>

      <div class="divider">OR</div>

      <div class="input-group">
        <label class="input-label">Phone Number with Country Code</label>
        <input 
          type="text" 
          id="phone-input" 
          class="input-field" 
          placeholder="e.g. 254712345678"
          autocomplete="off"
        >
      </div>

      <button id="pair-btn" class="btn">Get Pairing Code</button>

      <div id="pair-code-display" class="pair-code-display">
        <p class="pair-code-label">Your Pairing Code</p>
        <p class="pair-code" id="pair-code-text"></p>
      </div>

      <div class="info-box">
        <div class="info-title">
          <span>𐂂</span>
          <span>Quick Steps</span>
        </div>
        <div class="info-text">
          <span>> ➪ 1. Scan QR or enter phone number</span>
          <span>> ➪ 2. Link device on WhatsApp</span>
          <span>> ➪ 3. Session ID sent to your DM</span>
          <span>> ➪ 4. Session starts with ASTRAX~</span>
          <span>> ➪ 5. Keep it safe, never share</span>
        </div>
      </div>
    </div>
  </div>

  <script>
    const socket = io();
    const qrImage = document.getElementById('qr-image');
    const qrPlaceholder = document.getElementById('qr-placeholder');
    const statusText = document.getElementById('status-text');
    const timerText = document.getElementById('timer-text');
    const phoneInput = document.getElementById('phone-input');
    const pairBtn = document.getElementById('pair-btn');
    const pairCodeDisplay = document.getElementById('pair-code-display');
    const pairCodeText = document.getElementById('pair-code-text');

    let qrTimer = null;
    let qrExpireTime = 50;

    function startQrTimer() {
      clearInterval(qrTimer);
      qrExpireTime = 50;
      qrTimer = setInterval(() => {
        qrExpireTime--;
        timerText.textContent = \`QR expires in \${qrExpireTime}s - Auto refresh\`;
        if (qrExpireTime <= 0) {
          clearInterval(qrTimer);
          timerText.textContent = 'Refreshing QR Code...';
        }
      }, 1000);
    }

    socket.on('connect', () => {
      statusText.textContent = 'Connected';
    });

    socket.on('status', (status) => {
      statusText.textContent = status;
    });

    socket.on('qr', (qrData) => {
      qrImage.src = qrData;
      qrImage.style.display = 'block';
      qrPlaceholder.style.display = 'none';
      startQrTimer();
    });

    socket.on('pair-code', (code) => {
      pairCodeText.textContent = code;
      pairCodeDisplay.classList.add('show');
      pairBtn.disabled = false;
      pairBtn.textContent = 'Get Pairing Code';
    });

    socket.on('error', (error) => {
      alert(error);
      pairBtn.disabled = false;
      pairBtn.textContent = 'Get Pairing Code';
    });

    socket.on('success', (sessionId) => {
      statusText.textContent = 'Session Generated Successfully!';
      pairBtn.disabled = true;
      pairBtn.textContent = 'Success - Check WhatsApp';
      alert('Session ID sent to your WhatsApp! Check your saved messages.');
    });

    pairBtn.addEventListener('click', () => {
      const phone = phoneInput.value.trim();
      if (!phone) {
        alert('Please enter your phone number');
        return;
      }
      if (phone.length < 10) {
        alert('Please enter a valid phone number with country code');
        return;
      }
      pairBtn.disabled = true;
      pairBtn.textContent = 'Generating...';
      pairCodeDisplay.classList.remove('show');
      socket.emit('request-pair-code', phone);
    });

    phoneInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        pairBtn.click();
      }
    });
  </script>
</body>
</html>`;

export default pairHtml;