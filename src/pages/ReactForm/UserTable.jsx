import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { DELETE_STUDENT } from '../../redux/type/StudentsReducerType';
import { deleteStudentAction, editStudentAction } from '../../redux/actions/StudentsReducerAction';

class UserTable extends Component {
    renderSinhVien = () => {
        const { studentsArr, findStudentsArr, keyWord } = this.props;

        let showArr = [];

        if (keyWord !== '') {
            showArr = findStudentsArr
        } else {
            showArr = studentsArr
        }
        
        return showArr.map((item, index) => {
            
            
            return (
                <tr key={index} className='text-center'>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td >
                        <button id='edit' onClick={() => {
                            this.props.dispatch(editStudentAction(item))
                            document.getElementById('id').disabled = true;
                            document.getElementById('add').style.display = 'none';
                            document.getElementById('update').style.display = 'block';

                        }} style={{ width: 70 }} className="btn btn-success ">
                            Sửa
                        </button>
                        <button id='delete' onClick={() => {
                            this.props.dispatch(deleteStudentAction(item.id))
                        }} style={{ width: 70}} className="btn btn-danger mx-3">
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
        studentsArr: state.StudentsReducer.studentsArr,
        findStudentsArr: state.StudentsReducer.findStudentsArr,
        keyWord: state.StudentsReducer.keyWord,
    }
}


export default connect(mapStateToProps,)(UserTable)
