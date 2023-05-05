import React, { Component } from 'react'
import Swal from 'sweetalert2'
import { connect } from 'react-redux'

class RegisterForm extends Component {
    state = {
        values: {
            id: '',
            name: '',
            phone: '',
            email: '',
        },
        errors: {
            id: '',
            name: '',
            phone: '',
            email: '',
        },
    }

    handleOnchange = (e) => {
        const { id, name, value } = e.target

        const newValue = { ...this.state.values, [id]: value }
        const newError = { ...this.state.errors }

        let messageError = ''

        // Check empty
        if (value.trim() === '') {
            messageError = name + ' không được để trống !!!'
        }

        // Check duplicate id
        if (id === 'id') {
            const { studentsArr } = this.props
            if (studentsArr.find(sv => sv.id === value)) {
                messageError = name + ' đã bị trùng lặp.'
            }
        }

        // Check phone
        if (id === 'phone') {
            const regexPhone = /^[0-9]+$/
            if (!regexPhone.test(value)) {
                messageError = name + ' không hợp lệ, phải là số.'
            }
        }

        // Check email
        if (id === 'email') {
            const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
            if (!regexEmail.test(value)) {
                messageError = name + ' không hợp lệ'
            }
        }

        newError[id] = messageError

        this.setState({
            values: newValue,
            errors: newError
        })


    }

    handleSubmit = (e) => {
        e.preventDefault()

        let { values, errors } = this.state
        let isValid = true

        // Check value
        for (let keyValue in values) {
            if (values[keyValue] === '') {
                isValid = false
                Swal.fire({
                    title: 'Error!',
                    text: 'Thông tin chưa hợp lệ',
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
                return
            }
        }

        // Check error
        for (let keyError in errors) {
            if (errors[keyError] !== '') {
                isValid = false
                Swal.fire({
                    title: 'Error!',
                    text: 'Thông tin chưa hợp lệ',
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
                return
            }
        }

        if (isValid) {
            Swal.fire({
                title: 'Success!',
                text: 'Thêm Thành Công',
                icon: 'success',
                confirmButtonText: 'OK',
                timer: 1000
            })
        }

        // Add students
        const action = {
            type: 'ADD_STUDENT',
            payload: this.state.values
        }
        this.props.dispatch(action)
        document.getElementById('form').reset()

    }

    // static getDerivedStateFromProps(newProps, currentState) {
    //     if (currentState.values.id !== newProps.studentsEdit.id) {
    //         // = this.setState()

    //         return {
    //             values: newProps.studentsEdit
    //         }
    //     }
    //     return null
    // }

    componentWillReceiveProps(newProps) {
        this.setState({
            values: newProps.studentsEdit,
        })
        document.getElementById('id').disabled = true;

    }



    render() {
        const { id, name, phone, email } = this.state.values

        return (
            <div className='container'>
                <div className="card mt-3">
                    <div className="card-header bg-dark text-white">
                        <h3 className='text-center'>Thông Tin Sinh Viên</h3>
                    </div>
                    <div className="card-body">
                        <form id='form' onSubmit={this.handleSubmit} >
                            <div className="row">
                                <div className="form-group col-6">
                                    <span>Mã Sinh Viên :</span>
                                    <input value={id} className="form-control" id='id' name='Mã Sinh Viên' onChange={this.handleOnchange} />
                                    <span className='text-danger'>{this.state.errors.id}</span>
                                </div>
                                <div className="form-group col-6">
                                    <span>Họ Tên :</span>
                                    <input value={name} className="form-control" id='name' name='Họ Tên' onChange={this.handleOnchange} />
                                    <span className='text-danger'>{this.state.errors.name}</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-6">
                                    <span>Số Điện Thoại :</span>
                                    <input value={phone} className="form-control" id='phone' name='Số Điện Thoại' onChange={this.handleOnchange} />
                                    <span className='text-danger'>{this.state.errors.phone}</span>
                                </div>
                                <div className="form-group col-6">
                                    <span>Email :</span>
                                    <input value={email} className="form-control" id='email' name='Email' onChange={this.handleOnchange} />
                                    <span className='text-danger'>{this.state.errors.email}</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 text-center">
                                    <button style={{ width: 150 }} className="btn btn-success mr-5">Thêm Nhân Viên</button>
                                    <button style={{ width: 150 }} className="btn btn-success" onClick={(e) => {
                                        e.preventDefault()
                                        let isValid = true

                                        // Check value
                                        for (let keyValue in this.state.values) {
                                            if (this.state.values[keyValue] === '') {
                                                isValid = false
                                                Swal.fire({
                                                    title: 'Error!',
                                                    text: 'Thông tin chưa hợp lệ',
                                                    icon: 'error',
                                                    confirmButtonText: 'OK',
                                                    timer: 1000
                                                })
                                                return
                                            }
                                        }

                                        // Check error
                                        for (let keyError in this.state.errors) {
                                            if (this.state.errors[keyError] !== '') {
                                                isValid = false
                                                Swal.fire({
                                                    title: 'Error!',
                                                    text: 'Thông tin chưa hợp lệ',
                                                    icon: 'error',
                                                    confirmButtonText: 'OK',
                                                    timer: 1000
                                                })
                                                return
                                            }
                                        }

                                        if (isValid) {
                                            Swal.fire({
                                                title: 'Success!',
                                                text: 'Cập Nhật Thành Công',
                                                icon: 'success',
                                                confirmButtonText: 'OK',
                                                timer: 1000
                                            })
                                            document.getElementById('form').reset()
                                        }
                                
                                        this.props.dispatch({
                                            type: 'UPDATE_STUDENT',
                                            payload: this.state.values,
                                        })
                                    }}>Cập Nhật</button>
                                </div>
                                <div className="col-6">
                                    <div className="input-group">
                                        <input type="text" className="form-control" />
                                        <div className="input-group-append">
                                            <button className="input-group-text"
                                            // onClick={(e) => {
                                            //     e.preventDefault()
                                            //     this.props.dispatch({
                                            //         type: 'FIND_STUDENT',
                                            //         payload: this.state.values
                                            //     })
                                            // }}
                                            >Search</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        studentsArr: state.StudentsReducer.studentsArr,
        studentsEdit: state.StudentsReducer.studentsEdit,
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         updateStudent: (user) => {
//             const action = {
//                 type: 'UPDATE_STUDENT',
//                 payload: user
//             }
//             dispatch(action)
//             document.getElementById('form').reset()
//         },

//     }
// }



export default connect(mapStateToProps,)(RegisterForm)
