type expenseType = {
    id:string,
    amount: number,
    date: string,
    note: string,
    category: string,
    
}
type expenseProps ={
    isOpen:boolean,
    isClose:()=>void,
    onChangeHandler:(e:onChangeEventTypes)=>void,
    onSubmithandle:()=>void,
    onUpdatehandle:()=>void,
    expenseObj:expenseType,
   
}
type onChangeEventTypes ={
    target: { value: string, name:string } 
}