export default (state, action) => {
    console.log(state)
    switch (action.type) {
        case 'rotate':
            return {
                rotation: action.payload
            }
        default:
            return state
    }
}