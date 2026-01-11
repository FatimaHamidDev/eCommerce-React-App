export default 

function ThankYouModal({ isOpen, onClose }) {

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="modal-art" />

        <h2>Thank you</h2>

        <p className="modal-text">
          For your recent purchase.<br />
          We appreciate you and hope you enjoy your items.
        </p>

        <div className="modal-divider" />

        <p className="modal-discount">
          Here’s a <strong>10% discount</strong> on your next purchase.
          <br />
          Our way of saying thanks!
        </p>

        <button className="btn-primary" onClick={onClose}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
