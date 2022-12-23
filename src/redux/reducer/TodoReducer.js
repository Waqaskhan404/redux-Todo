const initialState={
    list:[]
}

const TodoReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD":
            const {id,data}=action.payload;
            return{
            ...state,
            list:[
                ...state.list,
                {
                id:id,
                data:data
                }
    ]
    }

    case "REMOVE_ONE":
       const newList= state.list.filter((ele)=> ele.id!==action.id)
        return{
        ...state,
        list:newList

}
case "REMOVE_ALL":
     return{
     ...state,
     list:[]

}
    default : return state;
}



}

export default TodoReducer