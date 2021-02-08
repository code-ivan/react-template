const appReducer = (
	state = {
		navigation: null,
		about: ''
	},
	action
) => {
	switch (action.type) {
		case "FETCH_ABOUT":
			state = { ...state, about: action.payload };
			break;
	}
	return state;
};

export default appReducer;
