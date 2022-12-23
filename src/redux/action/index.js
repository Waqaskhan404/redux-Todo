export const addTodo=(data)=>{
    return{
        type:"ADD",
        payload:{
            id: new Date().getTime().toString(),
            data:data
        }
    }
}

export const removeOneData=(id)=>{
    return{
        type:"REMOVE_ONE",
        id:id
    }
}

export const removeOneAll=()=>{
    return{
        type:"REMOVE_ALL"
    }
}