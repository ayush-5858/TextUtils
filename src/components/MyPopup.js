import React, { useState, useEffect } from "react";

export default function MyPopup(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Function to show the modal
  const showModal = () => {
    setIsModalVisible(true);
  };

  // Function to hide the modal
  const hideModal = () => {
    setIsModalVisible(false);
    setTimeout(() => {
      showModal();
    }, 60000); // Reappear after 1 minute
  };

  // Automatically show the modal 15 seconds after the component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      showModal();
    }, 15000);
    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <>
      <div
        className={`modal fade ${isModalVisible ? "show d-block" : ""}`}
        style={{
          display: isModalVisible ? "block" : "none",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Adds backdrop effect
        }}
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden={!isModalVisible}
        role="dialog"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Recommendation
              </h1>
            </div>
            <div className="modal-body">
              {props.recommendation}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={hideModal}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Download
              </button>
            </div>
          </div>
        </div>
      </div>

      {isModalVisible && (
        <div
          className="modal-backdrop fade show"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        ></div>
      )}
    </>
  );
}
