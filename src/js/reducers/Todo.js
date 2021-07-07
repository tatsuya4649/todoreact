const initialState = {
	todoList: []
}

export const todoReducer = (state = initialState,action) => {
	switch(action.type){
	case 'ADD_TODO':
		// new add TODO
		const todo = action.payload.todo;
		// duplicate and add
		const newState = Object.assign({},state);
		newState.todoList.push(todo);
		return newState;
	default:
		return state;
	}
};

