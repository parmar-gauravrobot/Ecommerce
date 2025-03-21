// Modal.js
import React from 'react';

const Modal = ({ id, title, content, isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex={-1} id={id} aria-labelledby={title}>
      <div className="offcanvas-header justify-content-center">
        <button type="button" className="btn-close" onClick={onClose} aria-label="Close" />
      </div>
      <div className="offcanvas-body">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-primary">{title}</span>
        </h4>
        {content}
      </div>
    </div>
  );
};

export default Modal;
