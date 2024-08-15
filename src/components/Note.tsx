import { useEffect, useState } from 'react'
import { ContentState, convertFromHTML, convertToRaw, EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html'
function Note() {
  const note = {
    id: '9999',
    content: '<p>This is new note</p>'
  }
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
  const [rawHTML, setRawHTML] = useState(note.content)

  useEffect(() => {
    const blockFromHTML = convertFromHTML(note.content)
    const contentState = ContentState.createFromBlockArray(blockFromHTML.contentBlocks, blockFromHTML.entityMap)
    setEditorState(EditorState.createWithContent(contentState))
  }, [note.id])

  useEffect(() => {
    setRawHTML(note.content)
  }, [note.content])

  const handleOnChange = (editorState: EditorState) => {
    setEditorState(editorState)
    setRawHTML(draftToHtml(convertToRaw(editorState.getCurrentContent())))
  }
  return <Editor editorState={editorState} onEditorStateChange={handleOnChange} placeholder='Write your note...' />
}

export default Note
