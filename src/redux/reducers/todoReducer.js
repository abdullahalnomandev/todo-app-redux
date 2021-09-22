import {ADD_TODO,DELETE_TODO, TOGGLE_TODO} from '../actions/todoAction' 

const initialState= {
   
    // todos:[],
    toggle:'',
    todos : JSON.parse(localStorage.getItem('todos'))

}

const todoReducer = (state=initialState,action)=>{

    switch(action.type){
        case ADD_TODO :
            console.log("action",action);
            
            localStorage.setItem('todos',JSON.stringify(state.todos))
        return {
            ...state,todos:[...state.todos,action.payLod],       
        }
       
        case DELETE_TODO:   
        const todoId= action.payLod
            const remainingTodo = state.todos.filter((todo)=> todo.todoId !== todoId)

            localStorage.setItem('todos',JSON.stringify(remainingTodo))
        return {
            ...state,todos:  remainingTodo
          
    
        }

        case TOGGLE_TODO:
            console.log(action);
        return {
            ...state,
        }

        default:
        return state
    }

}

export default todoReducer;