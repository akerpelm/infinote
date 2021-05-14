// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import { convertToSnakeCase } from '../../util/snake_case_util'

//  class NotebookForm extends Component {
//      constructor(props) {
//         //  debugger
//          super(props)
//          this.state = props.notebook
//          this.handleSubmit = this.handleSubmit.bind(this);
//      }
//      handleChange(field) {
//         //  debugger
//          return e => this.setState({
//              [field] : e.target.value
//          })
//      }
//     renderErrors() {
//         return (
//             <ul className='error-ul'>
//                 {this.props.errors.map((error, i) => (
//                     <li className='error-li' key={`error-${i}`}>{error}</li>    
//                 ))}
//             </ul>
//         )
//     }
//     handleSubmit(e) {
//         //  debugger
//         e.preventDefault
//         this.props.action(convertToSnakeCase(this.state)).then(() => this.props.history.push("/notebooks"))
//     }
    
    
//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <h3>Create new notebook</h3>
//                     <p>Notebooks are useful for grouping notes around a common topic. They can be private or shared</p>
//                     { this.renderErrors() }
//                     <label>Name
//                         <input  value={this.state.title} onChange={this.handleChange('title')}/>
//                         <Link to="/notebooks">Cancel</Link>
//                             <button type="submit">Continue</button>
                       

//                     </label>

//                 </form>

//             </div>
//         )
//     }
// }

// export default NotebookForm
