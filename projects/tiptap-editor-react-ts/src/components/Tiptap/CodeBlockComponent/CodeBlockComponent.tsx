/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
import './CodeBlockComponent.scss';

import { NodeViewContent, NodeViewWrapper } from '@tiptap/react';
import React from 'react';

export default ({ node: { attrs: { language: defaultLanguage } }, updateAttributes, extension }:any) =>
  <NodeViewWrapper className="code-block">
    <select contentEditable={false} defaultValue={defaultLanguage} onChange={event => updateAttributes({ language: event.target.value })}>
      <option value="null">
        auto
      </option>
      <option disabled>
        —
      </option>
      {extension.options.lowlight.listLanguages().map((lang:string, index:number) =>
        <option key={index} value={lang}>
          {lang}
        </option>)}
    </select>
    <pre>
      <NodeViewContent as="code" />
    </pre>
  </NodeViewWrapper>;

