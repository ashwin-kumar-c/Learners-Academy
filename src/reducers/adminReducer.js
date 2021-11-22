const adminInitialState = {
    isLoading: false,
    data: {},
    errors: {}
}

const adminReducer = (state = adminInitialState, action) => {
    switch(action.type) {
        default: {
            return {...state}
        }
    }
}

export default adminReducer