import axios from 'axios';

export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';
export const EDIT_TODO = 'EDIT_TODO';
export const SUCCESS_TODO = 'SUCCESS_TODO';

export const COMPLETE_TODO = 'COMPLETE_TODO';

//action creator
export const fetchTodos = () => {
    return async (dispatch) => {
        dispatch({ type: FETCH_TODOS_REQUEST });
        try {
            const response = await axios.get('http://localhost:3000/todos');
            const data = await response.data;
            dispatch({ type: FETCH_TODOS_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: FETCH_TODOS_FAILURE, payload: error.message });
        }
    }
}

export const addTodos = (data) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_TODOS_REQUEST });
        try {
            await axios.post(`http://localhost:3000/todos`, data);
            dispatch({ type: SUCCESS_TODO });
        } catch (error) {
            dispatch({ type: FETCH_TODOS_FAILURE, payload: error.message });
        }
    }
}

export const deleteTodos = (id) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_TODOS_REQUEST });
        try {
            await axios.delete(`http://localhost:3000/todos/${id}`);
            dispatch({ type: SUCCESS_TODO });
        } catch (error) {
            dispatch({ type: FETCH_TODOS_FAILURE, payload: error.message });
        }
    }
}

export const updateTodos = (id, data) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_TODOS_REQUEST });
        try {
            await axios.put(`http://localhost:3000/todos/${id}`, data);
            dispatch({ type: SUCCESS_TODO });
        } catch (error) {
            dispatch({ type: FETCH_TODOS_FAILURE, payload: error.message });
        }
    }
}

export const editTodo = (id) => ({
    type: EDIT_TODO,
    payload: id,
});

export const completeTodo = (id) => {
    return async (dispatch, getState) => {
        const { todos } = getState().todo; // Ambil todos dari state
        const todoToUpdate = todos.find(todo => todo.id === id); // Temukan todo yang ingin diupdate

        if (todoToUpdate) {
            const updatedTodo = { ...todoToUpdate, completed: !todoToUpdate.completed }; // Toggle nilai completed

            dispatch({ type: COMPLETE_TODO, payload: id }); // Dispatch action untuk update state
            try {
                await axios.put(`http://localhost:3000/todos/${id}`, updatedTodo); // Kirim permintaan PUT ke API
            } catch (error) {
                dispatch({ type: FETCH_TODOS_FAILURE, payload: error.message }); // Tangani error
            }
        }
    }
}