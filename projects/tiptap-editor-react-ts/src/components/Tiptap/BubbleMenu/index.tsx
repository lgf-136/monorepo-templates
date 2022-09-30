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

export default function BubbleMenus({ editor }: any) {
  if (!editor) {
    return null;
  }
  return (
    <div className="BubbleMenus">
      <BubbleMenu
        className="bubble-menu"
        tippyOptions={{ duration: 100 }}
        editor={editor}>
        <button
          onClick={() => editor.chain().focus()
            .toggleBold()
            .run()}
          className={editor.isActive('bold') ? 'is-active' : ''}>
          {/* <TextBold theme='filled' size='16' fill='#000000' /> */}
          <RiBold />
        </button>
        <button
          onClick={() => editor.chain().focus()
            .toggleItalic()
            .run()}
          className={editor.isActive('italic') ? 'is-active' : ''}>
          {/* <TextItalic theme='filled' size='16' fill='#000000' /> */}
          <RiItalic />
        </button>
        <button
          onClick={() => editor.chain().focus()
            .toggleUnderline()
            .run()}
          className={editor.isActive('underline') ? 'is-active' : ''}>
          {/* <TextUnderline theme='filled' size='16' fill='#000000' /> */}
          <RiUnderline />
        </button>
        <button
          onClick={() => editor.chain().focus()
            .toggleStrike()
            .run()}
          className={editor.isActive('strike') ? 'is-active' : ''}>
          {/* <TextUnderline theme='filled' size='16' fill='#000000' /> */}
          <RiStrikethrough />
        </button>
        <button
          onClick={() => editor.chain().focus()
            .toggleHighlight()
            .run()}
          className={editor.isActive('highlight') ? 'is-active' : ''}>
          {/* <HighLight theme='filled' size='16' fill='#000000' /> */}
          <RiBrushFill />
        </button>
        {/* <AddHyperlink editor={editor} /> */}
        <button
          onClick={() => editor.chain().focus()
            .setTextAlign('left')
            .run()}
          className={
            editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''
          }>
          {/* <AlignTextLeft theme='filled' size='16' fill='#000000' /> */}
          <RiAlignLeft />
        </button>
        <button
          onClick={() =>
            editor.chain().focus()
              .setTextAlign('center')
              .run()
          }
          className={
            editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''
          }>
          {/* <AlignTextCenter theme='filled' size='16' fill='#000000' /> */}
          <RiAlignCenter />
        </button>
        <button
          onClick={() => editor.chain().focus()
            .setTextAlign('right')
            .run()}
          className={
            editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''
          }>
          {/* <AlignTextRight theme='filled' size='16' fill='#000000' /> */}
          <RiAlignRight />
        </button>
        <button
          onClick={() =>
            editor.chain().focus()
              .setTextAlign('justify')
              .run()
          }
          className={
            editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''
          }>
          {/* <AlignTextBoth theme='filled' size='16' fill='#000000' /> */}
          <RiAlignJustify />
        </button>
      </BubbleMenu>
    </div>
  );
}
