/* eslint-disable react/prop-types */
function Popup({ trigger, setTrigger, children }) {
  return trigger ? (
    <div className="popup">
      <div>
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={() => setTrigger(false)}
        >
          <span aria-hidden="true">&times;</span>
        </button>
        {children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
