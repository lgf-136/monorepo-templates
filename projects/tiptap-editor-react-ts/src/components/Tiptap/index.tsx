/* eslint-disable react/display-name */
import './index.scss';
import { initContentWithHtml } from './initContent';

import { EditorContent, ReactNodeViewRenderer, useEditor } from '@tiptap/react';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import StarterKit from '@tiptap/starter-kit';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import FontFamily from '@tiptap/extension-font-family';
import { Color } from '@tiptap/extension-color';
import History from '@tiptap/extension-history';
import Highlight from '@tiptap/extension-highlight';
import TextAlign from '@tiptap/extension-text-align';
import TextStyle from '@tiptap/extension-text-style';
import Code from '@tiptap/extension-code';
import Typography from '@tiptap/extension-typography';
import Dropcursor from '@tiptap/extension-dropcursor';
import Link from '@tiptap/extension-link';
import Underline from '@tiptap/extension-underline';
import Image from '@tiptap/extension-image';
import Table from '@tiptap/extension-table';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TableRow from '@tiptap/extension-table-row';
import Mention from '@tiptap/extension-mention';
import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';
import Superscript from '@tiptap/extension-superscript';
import Subscript from '@tiptap/extension-subscript';
import CharacterCount from '@tiptap/extension-character-count';
import React from 'react';
import ToolBar from './ToolBar';
import BubbleMenus from './BubbleMenu';
import FloatingMenus from './FloatingMenu';

import CodeBlockComponent from './CodeBlockComponent/CodeBlockComponent';
import { lowlight } from 'lowlight';
import css from 'highlight.js/lib/languages/css';
import js from 'highlight.js/lib/languages/javascript';
import ts from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/xml';
lowlight.registerLanguage('html', html);
lowlight.registerLanguage('css', css);
lowlight.registerLanguage('js', js);
lowlight.registerLanguage('ts', ts);

const limit = 99999999999;
export default () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Document,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      Paragraph,
      Text,
      TextStyle,
      FontFamily,
      Color,
      Superscript,
      Subscript,
      CharacterCount.configure({
        limit,
      }),
      Link,
      Underline,
      Image,
      Dropcursor,
      TextAlign.configure({
        types: [ 'heading', 'paragraph' ],
      }),
      // Highlight,
      Highlight.configure({ multicolor: true }),
      Code,
      CodeBlockLowlight
        .extend({
          addNodeView() {
            return ReactNodeViewRenderer(CodeBlockComponent);
          },
        })
        .configure({ lowlight }),
      Typography,
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      // Default TableCell
      TableCell,
    ],
    content: initContentWithHtml,
  });

  return (
    <div>
      <BubbleMenus editor={editor}/>
      <FloatingMenus editor={editor}/>
      <ToolBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};
