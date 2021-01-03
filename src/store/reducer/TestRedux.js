const TestRedux =(state=[],action)=>{
    // console.log('categoriList state: ',state,' action: ',action);
    switch (action.type) {
        case 'Text_Redux':
                return action.payload
                break;

        default:
    return state
            break;
    }
}
export default TestRedux ;
