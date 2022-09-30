/* eslint-disable func-style */
import React, { useState } from 'react';
import { NetworkImageModal } from './NetworkImageModal';
import { RiImageAddFill, RiImageFill } from 'react-icons/ri';
// Component to add hyperlink to the selected text
export const NetworkImage = ({ editor }:any) => {
  const [ showModal, setShowModal ] = useState(false);

  // sets the hyperlink to the text
  const setNetworkImage = (linkInput:any) => {
    if (linkInput) {
      editor
        .chain()
        .focus()
        .extendMarkRange('link')
        .setImage({ src: linkInput })
        .run();
    }
    setShowModal(false);
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className={editor.isActive('image') ? 'is-active' : ''}>
        <RiImageFill />
      </button>

      {/* {editor.isActive('link') && (
        <button
          className='is-active'
          onClick={() => editor.chain().focus().unsetLink().run()}>
          <RiLinkUnlink />
        </button>
      )} */}

      {/* Modal to enter hyperlink */}
      {showModal &&
        <NetworkImageModal
          cancelOperationHandler={() => setShowModal(false)}
          proceedOperationHandler={setNetworkImage}
          inputLabel="Enter Network Image link here"
        />
      }
    </>
  );
};
