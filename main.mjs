var basicSetup = require("@codemirror/basic-setup");
var langJS = require("@codemirror/lang-javascript");

let editor = new EditorView({
  state: EditorState.create({
    extensions: [basicSetup, javascript()]
  }),
  parent: document.body
})
