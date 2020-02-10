import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from '../common/Card'
import { bookRooms } from '../../redux/action'


class AvailableRooms extends Component {
    constructor(props){
        super(props)
    }

    bookRooms = (e) => {
        this.props.bookRooms(e.target.value)
    }

    render() {
        console.log(this.props)
        return (
            this.props.state.roomsData.map(ele => {
                return (
                    <div className="col-4">
                        <Card bookRooms = {this.bookRooms} item = {ele}/>
                    </div>
                )
            })
            
        )
    }
}

const mapStateToProps = (state) => ({
    state: state,
    roomsData : state.roomsData
})

const mapDispatchToProps = dispatch => ({
    bookRooms: payload => dispatch(bookRooms(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(AvailableRooms)
