import React, { Component } from 'react'
import { signUpUser } from '../../redux/action'
import { connect } from 'react-redux'


let counter = 1
class SignUP extends Component {
    constructor(props) {
        super(props)
        this.state = {
             name: "",
             email: "",
             password: "",
             username: "",
             mobile: "",
             description: "",
             token: "abc"
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
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            username: this.state.username,
            mobile: this.state.mobile,
            description: this.state.description,
        }

        this.props.signUpUser("http://localhost:8080/auth/register", obj)
    }
    
    render() {
        return (
            <div className="container-fluid mt-5 bg-dark">
                <h1 className="text-center text-white p-5">Fill your Details</h1>
                <div className="row">
                    <div className="col-6 m-auto border rounded bg-dark p-4">
                        <form onSubmit= {(e) => e.preventDefault}>
                            <div className="form-group">
                                <label className="text-white">Name</label>
                                <input onChange={this.hnadleChange} name="name" type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label className="text-white">Email</label>
                                <input onChange={this.hnadleChange} name="eamil" type="email" className="form-control"  aria-describedby="emailHelp"/>
                            </div>
                            <div className="form-group">
                                <label className="text-white" for="exampleInputPassword1">Password</label>
                                <input onChange={this.hnadleChange} name="password" type="password" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label className="text-white">Usename</label>
                                <input onChange={this.hnadleChange} name="username" type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label className="text-white">Mobile</label>
                                <input onChange={this.hnadleChange} name="mobile" type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label className="text-white">Description</label>
                                <input onChange={this.hnadleChange} name="description" type="text" className="form-control"/>
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

const mapDispatchToProps = dispatch => {
    return {
        signUpUser: payload => dispatch(signUpUser(payload)) 
    }
}

export default connect(mapStateToProps,
                       mapDispatchToProps)(SignUP)
