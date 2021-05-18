
import React, { Component } from 'react'

export class TestIndex extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        // debugger
        this.props.fetchNotes()
    }
    render() {
        return (
            <div>
                <p>hi</p>
                
            </div>
        )
    }
}

export default TestIndex

