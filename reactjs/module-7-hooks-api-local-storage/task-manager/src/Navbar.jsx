import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
    <section className='grid grid-cols-2  bg-gray-600 p-5'>
    <div className='w-full'>
      <button type='button' className='bg-yellow-500 text-black p-2'><FaBars /> </button>
      <b className='ms-15 text-white'><FaBars className='inline-flex' />  Task Manager</b>
    </div>
    <div className='w-full'>
    <button className='bg-amber-500 p-2 rounded-xl ms-44'  command="show-modal"
    commandfor="dialog">AddTask</button>

    
    <button className='bg-amber-500 p-1 rounded-xl ms-4'>ManageTask <div class="mx-auto  size-5 shrink-0 items-center justify-center rounded-full inline-flex bg-red-600 text-white sm:mx-0 sm:size-8">0</div></button>

     <button className='bg-amber-500 p-2 rounded-xl ms-4'>Feedback</button>
    
    
     <Link to="/contact-us" className='text-white ms-5'>Contact Us</Link>
    </div>    
    </section>


    {/* create task modal in tailwinds */}

  {/* Include this script tag or install `@tailwindplus/elements` via npm: */}

  <el-dialog>
    <dialog
      id="dialog"
      aria-labelledby="dialog-title"
      className="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent"
    >
      <el-dialog-backdrop className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in" />
      <div
        tabIndex={0}
        className="flex min-h-full items-end justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0"
      >
        <el-dialog-panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95">

          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
             
                <div className="mt-2">
                    <h1 className='text-2xl'>Add Task Here</h1>
                {/*create task  */}
                <form>

                    <div className='mt-2'>
                    <input type='text' placeholder='New Task *' className='p-2 border-1 w-100' />
                    </div>
                    
                     <div className='mt-2'>
                    <select placeholder='assign-to *' className='p-2 border-1 w-100'>
                        <option value=''>-assignTo-</option>
                    </select>
                    </div>

                     <div className='mt-2'>
                    <select placeholder='assign-to *' className='p-2 border-1 w-100'>
                        <option value=''>-Priority-</option>
                        <option value="higher">Higher</option>
                        <option value="lower">Lower</option>
                        <option value="medium">Medium</option>
                    </select>
                    </div>

                     <div className='mt-2'>
                    <input type='date' placeholder='Added Date *' className='p-2 border-1 w-100' />
                    </div>

                     <div className='mt-2'>
                    <textarea  placeholder='Task Details *' className='p-2 border-1 w-100'></textarea>
                    </div>


                    <div className='mt-2'>
                    <input type='submit' value="Add Task"  className='p-2 border-1 w-100 bg-yellow-600 text-white' />
                    </div>
                </form>
              
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              type="button"
              command="close"
              commandfor="dialog"
              className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
            >
              Deactivate
            </button>
            <button
              type="button"
              command="close"
              commandfor="dialog"
              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            >
              Cancel
            </button>
          </div>
        </el-dialog-panel>
      </div>
    </dialog>
  </el-dialog>



    </>
  )
}
