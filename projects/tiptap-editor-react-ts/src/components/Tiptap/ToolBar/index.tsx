import './index.scss';
import React, { InputHTMLAttributes } from 'react';

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
import { NetworkImage } from '../ImageComponent';

export default function ToolBar({ editor }: any) {
  if (!editor) {
    return null;
  }
  return (
    <div className="ToolBar">
      <button onClick={() => editor.chain().focus()
        .undo()
        .run()}>
        {/* <Undo theme='filled' size='16' fill='#000000' /> */}
        <RiArrowGoBackLine />
      </button>
      <button onClick={() => editor.chain().focus()
        .redo()
        .run()}>
        <RiArrowGoForwardLine />
      </button>
      <button
        onClick={() => editor.chain().focus()
          .toggleHeading({ level: 1 })
          .run()}
        className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}>
        <RiH1 />
      </button>
      <button
        onClick={() => editor.chain().focus()
          .toggleHeading({ level: 2 })
          .run()}
        className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}>
        <RiH2 />
      </button>
      <button
        onClick={() => editor.chain().focus()
          .toggleHeading({ level: 3 })
          .run()}
        className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}>
        <RiH3 />
      </button>
      <button
        onClick={() => editor.chain().focus()
          .toggleHeading({ level: 4 })
          .run()}
        className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}>
        <RiH4 />
      </button>
      <button
        onClick={() => editor.chain().focus()
          .toggleHeading({ level: 5 })
          .run()}
        className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}>
        <RiH5 />
      </button>
      <button
        onClick={() => editor.chain().focus()
          .toggleHeading({ level: 6 })
          .run()}
        className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}>
        <RiH6 />
      </button>
      <button
        onClick={() => editor.chain().focus()
          .toggleBold()
          .run()}
        className={editor.isActive('bold') ? 'is-active' : ''}>
        <RiBold />
      </button>

      <button
        onClick={() => editor.chain().focus()
          .toggleItalic()
          .run()}
        className={editor.isActive('italic') ? 'is-active' : ''}>
        <RiItalic />
      </button>
      <button
        onClick={() => editor.chain().focus()
          .toggleUnderline()
          .run()}
        className={editor.isActive('underline') ? 'is-active' : ''}>
        <RiUnderline />
      </button>
      <button
        onClick={() => editor.chain().focus()
          .toggleStrike()
          .run()}
        className={editor.isActive('strike') ? 'is-active' : ''}>
        <RiStrikethrough />
      </button>

      {/* <input
        type="color"
        onInput={event =>
          editor.chain().focus()
            .setColor(event.target.value)
            .run()
        }
        value={editor.getAttributes('textStyle').color}
      /> */}

      <button
        onClick={() => editor.chain().focus()
          .toggleSuperscript()
          .run()}
        className={editor.isActive('superscript') ? 'is-active' : ''}>
        <RiSuperscript />
      </button>
      <button
        onClick={() => editor.chain().focus()
          .toggleSubscript()
          .run()}
        className={editor.isActive('subscript') ? 'is-active' : ''}>
        <RiSubscript />
      </button>
      <button
        onClick={() => editor.chain().focus()
          .toggleHighlight()
          .run()}
        className={editor.isActive('highlight') ? 'is-active' : ''}>
        <RiBrushFill />
      </button>
      <button
        onClick={() => editor.chain().focus()
          .setTextAlign('left')
          .run()}
        className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}>
        <RiAlignLeft />
      </button>
      <button
        onClick={() => editor.chain().focus()
          .setTextAlign('center')
          .run()}
        className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}>
        <RiAlignCenter />
      </button>
      <button
        onClick={() => editor.chain().focus()
          .setTextAlign('right')
          .run()}
        className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}>
        <RiAlignRight />
      </button>
      <button
        onClick={() => editor.chain().focus()
          .setTextAlign('justify')
          .run()}
        className={
          editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''
        }>
        <RiAlignJustify />
      </button>
      <button
        onClick={() => editor.chain().focus()
          .toggleCodeBlock()
          .run()}
        className={editor.isActive('codeBlock') ? 'is-active' : ''}>
        <RiCodeBoxLine />
      </button>
      <button
        onClick={() => editor.chain().focus()
          .toggleBlockquote()
          .run()}
        className={editor.isActive('blockquote') ? 'is-active' : ''}>
        <RiDoubleQuotesL />
      </button>
      <button onClick={() => editor.chain().focus()
        .setHorizontalRule()
        .run()}>
        <RiSeparator />
      </button>
      <button onClick={() => editor.chain().focus()
        .setHardBreak()
        .run()}>
        <RiTextWrap />
      </button>
      <button
        onClick={() => editor.chain().focus()
          .toggleBulletList()
          .run()}
        className={editor.isActive('bulletList') ? 'is-active' : ''}>
        <RiListUnordered />
      </button>
      <button
        onClick={() => editor.chain().focus()
          .toggleOrderedList()
          .run()}
        className={editor.isActive('orderedList') ? 'is-active' : ''}>
        <RiListOrdered />
      </button>
      <button
        onClick={() => editor.chain().focus()
          .toggleTaskList()
          .run()}
        className={editor.isActive('taskList') ? 'is-active' : ''}>
        <RiTaskLine />
      </button>
      <button
        onClick={() => editor.chain().focus()
          .sinkListItem('taskItem')
          .run()}
        disabled={!editor.can().sinkListItem('taskItem')}>
        <RiIndentIncrease />
      </button>
      <button
        onClick={() => editor.chain().focus()
          .liftListItem('taskItem')
          .run()}
        disabled={!editor.can().liftListItem('taskItem')}>
        <RiIndentDecrease />
      </button>
      <button
        onClick={() => editor.chain().focus()
          .setParagraph()
          .run()}
        className={editor.isActive('paragraph') ? 'is-active' : ''}>
        <RiParagraph />
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
        <RiTable2 />
      </button>
      <button
        onClick={() => editor.chain().focus()
          .deleteTable()
          .run()}
        disabled={!editor.can().deleteTable()}>
        <RiDeleteBinLine />
      </button>
      <button
        onClick={() => editor.chain().focus()
          .addColumnBefore()
          .run()}
        disabled={!editor.can().addColumnBefore()}>
        <RiInsertColumnLeft />
      </button>
      <button
        onClick={() => editor.chain().focus()
          .addColumnAfter()
          .run()}
        disabled={!editor.can().addColumnAfter()}>
        <RiInsertColumnRight />
      </button>
      <button
        onClick={() => editor.chain().focus()
          .deleteColumn()
          .run()}
        disabled={!editor.can().deleteColumn()}>
        <RiDeleteColumn />
      </button>
      <button
        onClick={() => editor.chain().focus()
          .addRowBefore()
          .run()}
        disabled={!editor.can().addRowBefore()}>
        <RiInsertRowTop />
      </button>
      <button
        onClick={() => editor.chain().focus()
          .addRowAfter()
          .run()}
        disabled={!editor.can().addRowAfter()}>
        <RiInsertRowBottom />
      </button>
      <button
        onClick={() => editor.chain().focus()
          .deleteRow()
          .run()}
        disabled={!editor.can().deleteRow()}>
        <RiDeleteRow />
      </button>

      <button
        onClick={() => editor.chain().focus()
          .mergeCells()
          .run()}
        disabled={!editor.can().mergeCells()}>
        <RiMergeCellsHorizontal />
      </button>
      <button
        onClick={() => editor.chain().focus()
          .splitCell()
          .run()}
        disabled={!editor.can().splitCell()}>
        <RiSplitCellsHorizontal />
      </button>
      <button
        onClick={() => editor.chain().focus()
          .toggleHeaderColumn()
          .run()}
        disabled={!editor.can().toggleHeaderColumn()}>
        <RiLayoutColumnFill />
      </button>
      <button
        onClick={() => editor.chain().focus()
          .toggleHeaderRow()
          .run()}
        disabled={!editor.can().toggleHeaderRow()}>
        <RiLayoutRowFill />
      </button>
      <button
        onClick={() => editor.chain().focus()
          .toggleHeaderCell()
          .run()}
        disabled={!editor.can().toggleHeaderCell()}>
        <RiCellphoneFill />
      </button>
      <LinkComponent editor={editor}/>
      <NetworkImage editor={editor}/>
    </div>
  );
}
