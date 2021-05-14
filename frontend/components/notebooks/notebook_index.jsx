import React from 'react'
import { Link } from 'react-router-dom'
import NotebookIndexItem from './notebook_index_item'
import { classnames } from 'classnames'
import NotebookForm from './notebook_form'
import CreateFormModal from './create_form_modal'



class NotebookIndex extends React.Component {
    constructor(props) {
        // debugger
        super(props)   
    }
    
   

    componentDidMount() {
        this.props.fetchNotebooks()
    }
    
    render() {
        return (
            <div className='notebook'>

                <div className="notebook-header">
                    <h3 className="notebooks-title">Notebooks</h3>
                    <div className='notebooks-search-bar-div'>
                        <input className="notebooks-search-bar" type="input" placeholder="Find Notebooks..." />
                    </div>
                </div>

                <header className='notebook-count-new'>
                    <p className='notebook-count'>{this.props.notebooks.length === 1 ? `${this.props.notebooks.length} notebook` : `${this.props.notebooks.length} notebooks` }
                    </p> 
                    <CreateFormModal 
                    action={this.props.action}
                    removeErrors={this.props.removeErrors}
                    notebook={this.props.notebook}
                    formType={this.props.formType}
                    errors={this.props.errors}/>
                </header>
           
                <table className='notebook-table'>
                    <thead>
                        <tr className='notebook-sort'>
                            <th className='sort-feature sort-title'>TITLE</th>
                            <th className='sort-feature sort-cb'>CREATED BY</th>
                            <th className='sort-feature sort-update'>UPDATED</th>
                            <th className='sort-feature sort-action'>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody className='sort-body '>
                        {this.props.notebooks.map(notebook => (
                            <NotebookIndexItem notebook={notebook} user={this.props.user} key={notebook.id} />
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}


export default NotebookIndex


// notebook = { notebook } key = { idx } > Notebooks
