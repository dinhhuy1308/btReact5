import { ADD_STUDENT, EDIT_STUDENT, FIND_STUDENT, UPDATE_STUDENT } from "../type/StudentsReducerType"
import { DELETE_STUDENT } from "../type/StudentsReducerType"

export const addStudentAction = (student) => ({
    type: ADD_STUDENT,
    payload: student
})

export const deleteStudentAction = (id) => ({
    type: DELETE_STUDENT,
    payload: id
})

export const editStudentAction = (student) => ({
    type: EDIT_STUDENT,
    payload: student
})

export const updateStudentAction = (student) => ({
    type: UPDATE_STUDENT,
    payload: student
})

export const findStudentAction = (student) => ({
    type: FIND_STUDENT,
    payload: student
})
