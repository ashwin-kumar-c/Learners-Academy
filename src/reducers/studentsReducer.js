const studentsInitialState = {
    isLoading: false,
    data: [],
    errors: {}
}

const studentsReducer = (state = studentsInitialState, action) => {
    switch(action.type) {
        default: {
            return {...state}
        }
    }
}

export default studentsReducer