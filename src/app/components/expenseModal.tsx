"use state"
import { VscChromeClose } from "react-icons/vsc";
import { useState } from "react";
export default function ExpenseModal(props:expenseProps)
{
    const categories:string[]=["Online payment","Bill pay","shoping","Groceries"];
    const [errors, setErrors] = useState<string[]>([])
    return(
       
<>
<div className={`modal ${props.isOpen ? 'block' : 'hidden'}`}>
            <div className="modal-overlay absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-80">
{ <div className="float min-h-screen  py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-100">
          {props.expenseObj.id !=='' ?<></>:
            <><button  onClick={props.isClose} className="button-57" role="button"><span className="text">Close</span><span><VscChromeClose /></span></button>
               
            </>
                 }
              <div className="text-center pb-6">
                  <h1 className="text-3xl">Expense Add or update!</h1>
                  <p className="text-gray-300">
                      Add expense or update.
                  </p>
                 
              </div>
              <form >
                  <div className="flex justify-between mb-4">
                      <div className="w-1/2 pr-2">
                          <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                             Amount
                          </label>
                          <input
                              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              type="number"
                              value={props.expenseObj.amount}
                    
                              name="amount"
                              onChange={props.onChangeHandler}
                          
                          />
                      </div>
                      <div className="w-1/2 pr-2">
                          <label htmlFor="note" className="block text-sm font-medium text-gray-700">
                             Note
                          </label>
                          <input
                              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              type="text"
                              value={props.expenseObj.note}
                              onChange={props.onChangeHandler}
                              name="note"
                        //      onChange={onChangeHandler}
                          />
        
                    </div>
                    <br />
                    <div className="w-1/2 pr-2">
                          <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                             Date
                          </label>
                          <input
                              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              type="date"
                              value={props.expenseObj.date}
                              onChange={props.onChangeHandler}
                              name="date"
                        //      onChange={onChangeHandler}
                          />
        
                    </div>
                    <div className="w-1/2 pr-2">
                          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                             Category
                          </label>
                          <select
                              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            
                              value={props.expenseObj.category}
                              onChange={props.onChangeHandler}
                              name="category"
                        //      onChange={onChangeHandler}
                          >
                              <option value="" disabled>Select a category</option>
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>
                                    {cat}
                                </option>
                            ))}
                            </select>
        
                    </div>
                    

             



                  <div className="flex justify-between">
                  {props.expenseObj.id !=='' ?
                            <button
                            type="button"
                                onClick={props.onUpdatehandle}
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            >
                                update Expense
                            </button>

                            :
                            
                      <button
                          // onClick={onClickHandler}
                          type="button"
                          className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          onClick={props.onSubmithandle}
                      >
                          Add Expense
                      </button>}
                  </div>
                  
</div>
              </form>
          </div>
      </div>
  </div>      }
    </div>
    </div>
</>    
    )
}