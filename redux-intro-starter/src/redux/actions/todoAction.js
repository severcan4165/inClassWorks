import { ADD_TODO, CLEAR_TODO } from "../types/todoTypes";

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload: payload
})
export const clearTodo = (payload) => ({
    type: CLEAR_TODO,
 
  })