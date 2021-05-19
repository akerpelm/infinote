import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import React, { Component } from 'react'
import { EditorState } from 'draft-js'

export class Editor extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             editorState: EditorState.createEmpty(),
        }
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        })
    }
    
    render() {
        const {editorState} = this.state
         return (
      <div className="editor-wrapper">
        <div className="editor-title">Test</div>
        <div className="editor-content">
          <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={this.onEditorStateChange}
          />
          ;
        </div>
      </div>
        )
    }
}

export default Editor
