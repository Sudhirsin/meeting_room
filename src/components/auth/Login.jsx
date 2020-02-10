import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginUsers } from '../../redux/action'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
             username: "",
             password: ""
        }
    }

    hnadleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit = (e) => {
        e.preventDefault()
        let obj = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.loginUsers("http://localhost:8080/auth/login", obj)
    }


    
    render() {
        return (
            <div className="container-fluid mt-5 bg-dark">
                <h4 className="text-white text-center py-4">Login Here...</h4>
                <div className="row mt-5 bg-dark" style={{height:"450px"}}>
                    <div className="col-5 m-auto border rounded bg-dark py-4">
                        <form onSubmit= {(e) => e.preventDefault}>
                            <div className="form-group">
                                <label className="text-white" for="exampleInputEmail1">Username</label>
                                <input onChange={this.hnadleChange} name="username" type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label className="text-white" for="exampleInputPassword1">Password</label>
                                <input onChange={this.hnadleChange} name="password" type="password" className="form-control" />
                            </div>
                            <button onClick={this.submit} type="submit" className="btn btn-otline-light bg-light">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = dispatch => ({
    loginUsers: payload => dispatch(loginUsers(payload)) 
})

export default connect(mapStateToProps,
                       mapDispatchToProps)(Login)

