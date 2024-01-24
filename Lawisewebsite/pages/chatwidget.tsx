// components/ChatWidget.js
import React, { useState } from 'react';

export default function ChatWidget() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div id="chatIcon" style={{ position: 'fixed', bottom: '20px', right: '20px', cursor: 'pointer' }} onClick={() => setShowModal(true)}>
        <span style={{ fontSize: '24px' }}>💬</span>
      </div>

      {showModal && (
        <div id="chatModal" style={{ position: 'fixed', bottom: '20px', right: '50px', width: '300px', height: '450px', backgroundColor: '#fff', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)', borderRadius: '10px', zIndex: '1000' }}>
          <div id="closeModal" style={{ position: 'absolute', top: '0', right: '0', padding: '10px', cursor: 'pointer', fontSize: '24px' }} onClick={() => setShowModal(false)}>&times;</div>
          <iframe src="http://localhost:8000/widget.html" style={{ width: '100%', height: '100%', border: 'none' , borderRadius: '30px'}}></iframe>
        </div>
      )}
    </div>
  );
}
