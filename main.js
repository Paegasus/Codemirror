import {EditorState, EditorView, basicSetup} from "@codemirror/basic-setup"
import {javascript} from "@codemirror/lang-javascript"
import {oneDarkTheme} from "@codemirror/theme-one-dark";
import {oneDark} from "@codemirror/theme-one-dark";

let editor = new EditorView
({
  state: EditorState.create
  ({
    extensions:
    [
      basicSetup,
      javascript(),
      oneDark
    ]
  }),
  parent: document.body
})
