import React, { Component } from 'react'
import Swal from 'sweetalert2'
import { connect } from 'react-redux'

class UserTable extends Component {
    renderSinhVien = () => {
        const { studentsArr } = this.props
        return studentsArr.map((item, index) => {
            return (
                <tr key={index} className='text-center'>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td >
                        <button onClick={() => {
                            const action = {
                                type: 'EDIT_STUDENT',
                                payload: item
                            }
                            this.props.dispatch(action)
                            
                        }} style={{ width: 70 }} className="btn btn-success ">
                            Sửa
                        </button>
                        <button onClick={() => {
                            const action = {
                                type: 'DELETE_STUDENT',
                                payload: item.id
                            }
                            this.props.dispatch(action)
                            
                        }} style={{ width: 70 }} className="btn btn-danger mx-3">
                            Xóa
                        </button>

                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className='container'>
                <table className="table">
                    <thead>
                        <tr className='bg-dark text-white text-center'>
                            <th>Mã SV</th>
                            <th>Họ Tên</th>
                            <th>SĐT</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderSinhVien()}
                    </tbody>
                </table>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        studentsArr: state.StudentsReducer.studentsArr
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         deleteStudents: (id) => {
//             const action = {
//                 type: 'DELETE_STUDENT',
//                 payload: id
//             }
//             dispatch(action)
//         },
//         editStudents: (user) => {
//             const action = {
//                 type: 'EDIT_STUDENT',
//                 payload: user
//             }
//             dispatch(action)
//         }
//     }
// }

export default connect(mapStateToProps, )(UserTable)
