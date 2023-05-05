const stateDefault = {
    studentsArr: [
        {id: '1', name: 'Nguyen Van A', phone: '0848778009', email: 'test@gmail.com'},
        {id: '2', name: 'Nguyen Van B', phone: '0848778009', email: 'test@gmail.com'},
    ],
    studentsEdit: {},
    
}

const  StudentsReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'ADD_STUDENT': {
            state.studentsArr = [...state.studentsArr,action.payload]

            return {...state}
        }
        case 'DELETE_STUDENT': {
            // let studentsArrUpdate = [...state.studentsArr]
            // let index = studentsArrUpdate.findIndex(sv => sv.id === action.payload)
            // studentsArrUpdate.splice(index,1)

            // state.studentsArr = studentsArrUpdate

            const studentsArrUpdate = state.studentsArr.filter(sv => sv.id !== action.payload)
            state.studentsArr = studentsArrUpdate

            return {...state}
        }
        case 'EDIT_STUDENT': {
            state.studentsEdit = action.payload


            return {...state}
        }
        case 'UPDATE_STUDENT': {
            let index = state.studentsArr.findIndex(user => user.id === action.payload.id)
            let newStudentArr = [...state.studentsArr]
            if(index !== -1) {
                newStudentArr[index] = action.payload
            }
            state.studentsArr = newStudentArr
            

            return {...state}
        }
        case 'FIND_STUDENT': {


            return {...state}
        }
        default:
            return state
    }
    
    
}

export default StudentsReducer