import {EditorState, EditorView, basicSetup} from "@codemirror/basic-setup"
import {javascript} from "@codemirror/lang-javascript"
import {oneDark} from "@codemirror/theme-one-dark";

let editorState = EditorState.create
({
  extensions:
  [
    basicSetup,
    javascript(),
    oneDark
  ]
});

let editor = new EditorView
({
  state: editorState,
  parent: document.body
})
