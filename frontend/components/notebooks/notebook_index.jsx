import React from 'react'
import { Link } from 'react-router-dom'
import NotebookIndexItem from './notebook_index_item'
// import CreateNotebookModal from './create_notebook_modal'
import { BsSearch } from 'react-icons/bs'
import CreateModal from './modals/create_modal'


class NotebookIndex extends React.Component {
    constructor(props) {
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
                        <input className="notebooks-search-bar" type="input" placeholder="Find Notebooks..."  />
                        <BsSearch className="notebooks-search-bar-icon" />
                        
                    </div>
                </div>

                <header className='notebook-count-new'>
                    <p className='notebook-count'>{this.props.notebooks.length === 1 ? `${this.props.notebooks.length} notebook` : `${this.props.notebooks.length} notebooks` }
                    </p> 
                    <CreateModal />
                </header>
           
                <table className='notebook-table'>
                    <thead className="notebook-table-head">
                        <tr className='notebook-sort'>
                            <th className='sort-feature sort-title'>TITLE</th>
                            <th className='sort-feature sort-cb'>CREATED BY</th>
                            <th className='sort-feature sort-update'>UPDATED</th>
                            <th className='sort-feature sort-action'>ACTIONS</th>
                        </tr>
                    </thead >
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
