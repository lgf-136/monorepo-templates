/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable func-style */
import React, { useState } from 'react';
import {
  RiFileAddFill,
  RiCloseCircleFill,
  RiAddCircleFill,
} from 'react-icons/ri';
// Modal component to enter urls
export const LinkModal = ({
  cancelOperationHandler,
  proceedOperationHandler,
  inputLabel,
}:any) => {
  const [ inputText, setInputText ] = useState('');
  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <label className="link-input-label">{inputLabel}</label>
          <br />
          <input
            className="link-input"
            value={inputText}
            onChange={e => setInputText(e.target.value)}
          />

          <br />
          <button
            className="add-link-btn"
            onClick={() => proceedOperationHandler(inputText)}>
            {/* <RiFileAddFill /> */}
            <RiAddCircleFill />
            {/* Add */}
          </button>
          <button
            className="cancel-link-btn"
            onClick={() => {
              setInputText('');
              cancelOperationHandler();
            }}>
            <RiCloseCircleFill />
            {/* Cancel */}
          </button>
        </div>
      </div>
    </>
  );
};
