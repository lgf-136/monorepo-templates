/* eslint-disable func-style */
import React, { useState } from 'react';
import { LinkModal } from './LinkModal';
import { RiLink, RiLinkUnlink } from 'react-icons/ri';
// Component to add hyperlink to the selected text
export const LinkComponent = ({ editor }:any) => {
  const [ showModal, setShowModal ] = useState(false);

  // sets the hyperlink to the text
  const setLink = (linkInput:any) => {
    if (linkInput) {
      editor
        .chain()
        .focus()
        .extendMarkRange('link')
        .setLink({ href: linkInput })
        .run();
    }
    setShowModal(false);
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className={editor.isActive('link') ? 'is-active' : ''}>
        <RiLink />
      </button>

      {editor.isActive('link') &&
        <button
          className="is-active"
          onClick={() => editor.chain().focus()
            .unsetLink()
            .run()}>
          <RiLinkUnlink />
        </button>
      }

      {/* Modal to enter hyperlink */}
      {showModal &&
        <LinkModal
          cancelOperationHandler={() => setShowModal(false)}
          proceedOperationHandler={setLink}
          inputLabel="Enter hyperlink here"
        />
      }
    </>
  );
};
