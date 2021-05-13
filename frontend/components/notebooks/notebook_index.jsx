import React from 'react'
import { Link } from 'react-router-dom'
import NoteBookIndexItem from './notebook_index_item'
import classnames from 'classnames'



class NotebookIndex extends React.Component {
    constructor(props) {
        super(props)   
        
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        this.props.fetchNotebooks()
    }

    toggleModal = () => {
        document.querySelector('.modal')
            .classList.toggle('modal-hidden')
    }

    handleClick(e) {
        e.preventDefault
        this.toggleModal()
    }
    
    
    render() {
        return (
            <div className='notebook'>
                        <i className="fas fa-search"></i>
                <div className="notebook-header">
                    <h3 className="notebooks-title">Notebooks</h3>
                    <div className='notebooks-search-bar-div'>
                        <input className="notebooks-search-bar" type="input" placeholder="Find Notebooks..." />
                    </div>
                </div>
                <header className='notebook-count-new'>
                    <p className='notebook-count'>
                    {this.props.notebooks.length === 1 ? `${this.props.notebooks.length} notebook` : `${this.props.notebooks.length} notebooks` }
                    </p>
                    <Link to={`/notebooks/create`}><button className="new-notebook-button">New Notebook</button></Link> 

                    <div className="modal modal-hidden">
                        <div className="modal-contents">
                            <div className="modal-close">
                                <span onClick={this.toggleModal}>X</span>
                            </div>
                            <h3>Create new notebook</h3>
                            <p>Notebooks are useful for grouping notes around a common topic. They can be private or shared</p>
                            <form>
                                <label>Name
                                    <input type="text" placeholder="New notebook" />
                                </label>
                            </form>
                        </div>
                    </div>     
                    <button id="show-modal" onClick={this.toggleModal}>Test</button>
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
                            <NoteBookIndexItem notebook={notebook} user={this.props.user} key={notebook.id} />
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default NotebookIndex


// notebook = { notebook } key = { idx } > Notebooks
