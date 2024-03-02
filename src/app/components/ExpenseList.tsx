"use client"
import { useState } from "react";
import * as yup from "yup"
import DisplayContact from "./expenseModal";

import ExpenseModal from "./expenseModal";
import { IoAdd } from "react-icons/io5";
import BarChartWrapper from "./graph";
export default function ExpenseTracker() {

    const [catTotal,setCatTotal]=useState({
      onlinepayment:0,billpay:0,shoping:0,groceries:0
    })
    
    const [isOpen,setIsOpen]=useState(false)
    // to close the modal
    const isClosed= ()=>{
      setExpense({
        id:``,
        amount: 0,
        date: "",
        note: '',
        category: '',
      })
        setIsOpen(false)
    }
    const handleaAddCatTotal=()=>{
      if(expense.category==="Online payment"){
        setCatTotal(prevCatTotal => ({
          ...prevCatTotal,
          onlinepayment: prevCatTotal.onlinepayment + expense.amount
        }));
      }
      else if (expense.category==="Bill pay"){
        setCatTotal(prevCatTotal => ({
          ...prevCatTotal,
          billpay: prevCatTotal.billpay + expense.amount
        }));
        
      }
      else if (expense.category==="shoping"){
        setCatTotal(prevCatTotal => ({
          ...prevCatTotal,
          shoping: prevCatTotal.shoping + expense.amount
        }));
        
      }
      else if (expense.category==="Groceries"){
        setCatTotal(prevCatTotal => ({
          ...prevCatTotal,
          groceries: prevCatTotal.groceries + expense.amount
        }));
        
      }
    }
    const [expense, setExpense] = useState<expenseType>({
        id:``,
        amount: 0,
        date: "",
        note: '',
        category: '',
                
    });
    const [expenses, setExpenses] = useState<expenseType[]>([]);
    const [total, setTotal] = useState<number>(0)
    const onChangeHandler = (e: onChangeEventTypes) => {
        if(e.target.name==="amount"){
          setExpense({ ...expense, [e.target.name]: parseFloat(e.target.value )})
        }
        else{
        setExpense({ ...expense, [e.target.name]: e.target.value });}
    };
    const onDeleteHandler=(exp:expenseType)=>{
      if(exp.category==="Online payment"){
        setCatTotal(prevCatTotal => ({
          ...prevCatTotal,
          onlinepayment: prevCatTotal.onlinepayment - exp.amount 
        }));
      }
      else if (exp.category==="Bill pay"){
        setCatTotal(prevCatTotal => ({
          ...prevCatTotal,
          billpay: prevCatTotal.billpay - exp.amount
        }));
        
      }
      else if (exp.category==="shoping"){
        setCatTotal(prevCatTotal => ({
          ...prevCatTotal,
          shoping: prevCatTotal.shoping - exp.amount
        }));
        
      }
      else if (exp.category==="Groceries"){
        setCatTotal(prevCatTotal => ({
          ...prevCatTotal,
          groceries: prevCatTotal.groceries - exp.amount
        }));
        
      }
      setExpenses(expenses.filter((item)=>item.id!==exp.id))
      setTotal(total-exp.amount)
     }
     const onEditHandler =(exp:expenseType)=>{
      //updaing category total
      setTotal(total-exp.amount)
      if(exp.category==="Online payment"){
        setCatTotal(prevCatTotal => ({
          ...prevCatTotal,
          onlinepayment: prevCatTotal.onlinepayment - exp.amount 
        }));
      }
      else if (exp.category==="Bill pay"){
        setCatTotal(prevCatTotal => ({
          ...prevCatTotal,
          billpay: prevCatTotal.billpay - exp.amount
        }));
        
      }
      else if (exp.category==="shoping"){
        setCatTotal(prevCatTotal => ({
          ...prevCatTotal,
          shoping: prevCatTotal.shoping - exp.amount
        }));
        
      }
      else if (exp.category==="Groceries"){
        setCatTotal(prevCatTotal => ({
          ...prevCatTotal,
          groceries: prevCatTotal.groceries + exp.amount
        }));
        
      }
      //update cat end
      setExpense(exp)
      setIsOpen(true)
        


     }
     const onClickUpdate =()=>{
      handleaAddCatTotal()
      setExpenses(expenses.map((e) => {
       if( e.id === expense.id) {
        setTotal(total+expense.amount)
        return expense} else {return e}}
        ));
     
      setExpense({
        id:``,
        amount: 0,
        date: "",
        note: '',
        category: '',
      })
      setIsOpen(false)
     }
   const onSubmitHandler =()=>{
    handleaAddCatTotal()
    const submitExpense:expenseType={
      id:expense.id ||`${Date.now()}`,
      amount:expense.amount,
      date:expense.date,
      note:expense.note,
      category:expense.category
  }
  
    setExpenses([...expenses,submitExpense])
    setTotal(total+expense.amount)
    //setting category total
    
    
    setExpense({
        id:'',
        amount: 0,
        date: "",
        note: '',
        category: '',
                
    })
   setIsOpen(false)
   }
   const categories:string[]=["Online payment","Bill pay","shoping","Groceries"];
   //const barchartdata=categories.map((cat)=>{return{name:cat,amount:80}})
   const data = [
    {
      name: 'Bill payment',
      amount: catTotal.billpay,
    },
    {
      name: 'Online pay',
      amount: catTotal.onlinepayment,
    },
    {
      name: 'Shoping',
      amount: catTotal.shoping,
    },
    {
      name: 'Groceries',
      amount: catTotal.groceries,
    },
  ];
    return (
    <div>
    <h1 className="text-5xl text-center m-5">Expense Tracker</h1>
    


    <button onClick={()=>setIsOpen(true)} className="px-5 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-5 ">Add Expense <IoAdd /></button>
        <ExpenseModal isOpen={isOpen} isClose={isClosed} expenseObj={expense}onChangeHandler={onChangeHandler } onSubmithandle={onSubmitHandler} onUpdatehandle={onClickUpdate}/>




        <table className="mx-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 bg-white shadow-md rounded-md">
           <thead className="bg-indigo-700 text-white">
             <tr>
             <th className="py-2 px-4 text-center">ID</th>
               <th className="py-2 px-4 text-center">Amount</th>
               <th className="py-2 px-4 text-center">Note</th>
               <th className="py-2 px-4 text-center">Date</th>
               <th className="py-2 px-4 text-center">Category</th>
               <th className="py-2 px-4 text-center">Actions</th>
               
             </tr>
           </thead>
         {expenses.length>0 ? <>
          <tbody>
            {expenses.map((item) => (
              <tr key={item.id}>
                <td className="py-2 px-4 text-center">{item.id}</td>
                <td className="py-2 px-4 text-center">PKR {item.amount}</td>
                <td className="py-2 px-4 text-center">{item.note}</td>
                <td className="py-2 px-4 text-center">{item.date}</td>
                <td className="py-2 px-4 text-center">{item.category}</td>
                <td className="py-2 px-4 text-center">
                <button className="ml-30 text-gray-900 bg-red border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onClick={()=>onDeleteHandler(item)}>Delete</button>
                <button className="ml-30 text-gray-900 bg-red border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onClick={()=>onEditHandler(item)}>Update</button>
                </td>
             
              </tr>
            ))}
          </tbody>
          <thead className="bg-indigo-700 text-white">
             <tr>
               <th className="py-2 px-4 text-center">Total Amount</th>
        
               
             </tr>
           </thead>
           <tbody>
            
              <tr>
                <td className="py-2 px-4 text-center">{total}</td>
                
             
              </tr>
        
          </tbody></>:   <thead>  <tr>
      <td colSpan={6} className="text-center">
        <h1>No data</h1>
      </td>
    </tr>  </thead>}
   
        </table>
        
        <div className={`modal ${isOpen ? 'hidden' : 'block'} mt-5` }>
  {!isOpen && 
  <div style={{ width: '50%', height: '50vh' }}>
  <BarChartWrapper data={data} />
  </div>
  }
</div>


              
    </div>

     

    );
};





