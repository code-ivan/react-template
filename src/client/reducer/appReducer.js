const appReducer = (state = {}, action) => {
	switch (action.type) {
        case 'FETCH_ABOUT':
            state = {...state,
                ...action.payload
            }
            break;
	}
	return state;
};

export default appReducer;