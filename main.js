import {EditorState, EditorView, basicSetup} from "@codemirror/basic-setup"
import {javascript} from "@codemirror/lang-javascript"

let editorState = EditorState.create
({
  extensions:
  [
    basicSetup,
    javascript(),
  ]
})

let editor = new EditorView
({
  state: editorState,
  parent: document.body
})
