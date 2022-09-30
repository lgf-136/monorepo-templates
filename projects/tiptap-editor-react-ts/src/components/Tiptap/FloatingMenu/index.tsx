import './index.scss';
import React, { InputHTMLAttributes } from 'react';
import {
  EditorContent,
  ReactNodeViewRenderer,
  useEditor,
  FloatingMenu,
  BubbleMenu,
} from '@tiptap/react';
import {
  RiBold,
  RiItalic,
  RiStrikethrough,
  RiUnderline,
  RiBrushFill,
  RiLineHeight,
  RiCodeSSlashLine,
  RiEmotionLine,
  RiH1,
  RiH2,
  RiH3,
  RiH4,
  RiH5,
  RiH6,
  RiParagraph,
  RiListOrdered,
  RiListUnordered,
  RiAlignJustify,
  RiAlignCenter,
  RiAlignRight,
  RiAlignTop,
  RiAlignBottom,
  RiAlignLeft,
  RiDeleteColumn,
  RiDeleteRow,
  RiCodeBoxLine,
  RiCodeSSlashFill,
  RiLink,
  RiLinkUnlink,
  RiDoubleQuotesL,
  RiSeparator,
  RiTextWrap,
  RiFormatClear,
  RiArrowGoBackLine,
  RiArrowGoForwardLine,
  RiTableFill,
  RiInsertColumnLeft,
  RiInsertColumnRight,
  RiInsertRowBottom,
  RiInsertRowTop,
  RiTable2,
  RiMergeCellsHorizontal,
  RiMergeCellsVertical,
  RiSplitCellsHorizontal,
  RiSplitCellsVertical,
  RiImageAddFill,
  RiImageAddLine,
  RiLayoutColumnFill,
  RiLayoutRowFill,
  RiCellphoneFill,
  RiDeleteBinLine,
  RiTaskLine,
  RiIndentIncrease,
  RiIndentDecrease,
  RiSuperscript,
  RiSubscript,
} from 'react-icons/ri';
import { LinkComponent } from '../LinkComponent';

export default function FloatingMenus({ editor }: any) {
  if (!editor) {
    return null;
  }
  return (
    <div className="FloatingMenus">
      <FloatingMenu
        className="floating-menu"
        tippyOptions={{ duration: 100 }}
        editor={editor}>
        <button
          onClick={() =>
            editor.chain().focus()
              .toggleHeading({ level: 1 })
              .run()
          }
          className={
            editor.isActive('heading', { level: 1 }) ? 'is-active' : ''
          }>
          {/* <H1 theme='filled' size='16' fill='#000000' /> */}
          <RiH1 />
        </button>
        <button
          onClick={() =>
            editor.chain().focus()
              .toggleHeading({ level: 2 })
              .run()
          }
          className={
            editor.isActive('heading', { level: 2 }) ? 'is-active' : ''
          }>
          {/* <H2 theme='filled' size='16' fill='#000000' /> */}
          <RiH2 />
        </button>
        <button
          onClick={() =>
            editor.chain().focus()
              .toggleHeading({ level: 3 })
              .run()
          }
          className={
            editor.isActive('heading', { level: 3 }) ? 'is-active' : ''
          }>
          {/* <H3 theme='filled' size='16' fill='#000000' /> */}
          <RiH3 />
        </button>
        <button
          onClick={() =>
            editor.chain().focus()
              .toggleHeading({ level: 4 })
              .run()
          }
          className={
            editor.isActive('heading', { level: 4 }) ? 'is-active' : ''
          }>
          {/* <H4 theme='filled' size='16' fill='#000000' /> */}
          <RiH4 />
        </button>
        {/* <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 5 }).run()
            }
            className={
              editor.isActive('heading', { level: 5 }) ? 'is-active' : ''
            }>
            <RiH5 />
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 6 }).run()
            }
            className={
              editor.isActive('heading', { level: 6 }) ? 'is-active' : ''
            }>
            <RiH6 />
          </button> */}
        <button
          onClick={() => editor.chain().focus()
            .toggleBulletList()
            .run()}
          className={editor.isActive('bulletList') ? 'is-active' : ''}>
          {/* <ListBottom theme='filled' size='16' fill='#000000' /> */}
          <RiListUnordered />
        </button>
        <button
          onClick={() => editor.chain().focus()
            .toggleOrderedList()
            .run()}
          className={editor.isActive('orderedList') ? 'is-active' : ''}>
          {/* <OrderedList theme='filled' size='16' fill='#000000' /> */}
          <RiListOrdered />
        </button>
        <button
          onClick={() => editor.chain().focus()
            .toggleCodeBlock()
            .run()}
          className={editor.isActive('codeBlock') ? 'is-active' : ''}>
          {/* <Code theme='filled' size='16' fill='#000000' /> */}
          <RiCodeBoxLine />
        </button>
        <button
          onClick={() => editor.chain().focus()
            .toggleBlockquote()
            .run()}
          className={editor.isActive('blockquote') ? 'is-active' : ''}>
          {/* <Quote theme='filled' size='16' fill='#000000' /> */}
          <RiDoubleQuotesL />
        </button>
        <button
          onClick={() => editor.chain().focus()
            .setHorizontalRule()
            .run()}>
          {/* <DividingLineOne theme='filled' size='16' fill='#000000' /> */}
          <RiSeparator />
        </button>
        <button
          onClick={() =>
            editor
              .chain()
              .focus()
              .insertTable({ rows: 3,
                cols: 3,
                withHeaderRow: true })
              .run()
          }>
          {/* <InsertTable theme='filled' size='16' fill='#000000' /> */}
          <RiTable2 />
        </button>
        <LinkComponent editor={editor}/>
      </FloatingMenu>
    </div>
  );
}
