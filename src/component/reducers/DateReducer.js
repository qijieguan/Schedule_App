const init = () => {
    let result = [];
    for (let i = 0; i < 31; ++i) {
        result.push({Day: (i + 1), Slot: []});
    }
    return result;
}

const dateReducer = (state = init(), action) => {
    switch (action.type) {
        case 'SET_DATE':
            return action.payload;
        default: 
            return state;
    }
}

export default dateReducer;