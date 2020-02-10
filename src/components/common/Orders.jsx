import React, { Component } from 'react'
import { connect } from 'react-redux'

class Orders extends Component {
    render() {
        return (
           <div className="container mt-5">
               <div className="row py-5">
                   <div className="col">
                        <table class="table table-dark">
                            <thead>
                                <tr>
                                <th scope="col">Sr.no</th>
                                <th scope="col">Type</th>
                                <th scope="col">Price</th>
                                <th scope="col">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.state.orderedRooms.map((ele, i) => {
                                    return (
                                        <tr key = {i+1}>
                                            <td>{i + 1}</td>
                                            <td>{ele.type}</td>
                                            <td>{ele.rate}</td>
                                            <td>{ele.total}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                            
                        </table>
                   </div>
               </div>
           </div> 
        )
    }
}


const mapStateToProps = (state) => ({
    state: state
})

const mapDispatchToProps = ({
    
})


export default connect(mapStateToProps,
                mapDispatchToProps)(Orders)