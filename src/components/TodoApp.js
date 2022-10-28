import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {loadData} from '././Redux/todoRedux/todo.actions'
import {TODO_KEY} from '../components/Redux/todoRedux/todo.reducer'
import {v4 as uuidv4} from 'uuid'


const TodoApp = () => {
    // initialize dispatch
    const dispatch = useDispatch()
    

    const [data, setData] = useState({
        firstName:'',
        lastName:'',
        email:'',
        age:''

    })



    // binding inputs
    const handleChange = (e) => {
        setData ({
            ...data,
            [e.target.name]: e.target.value
        })

    }

    // handle submit
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loadData({
            id:uuidv4(),
            dataItem:data
        }))

        setData({
            firstName:'',
            lastName:'',
            email:'',
            age:''

        })
    }

    // view store 
    const viewTodo = useSelector((state) => {
        return state[TODO_KEY]
    })


    return (
       <React.Fragment>
            {/* <pre>{JSON.stringify(viewTodo)}</pre>  */}
           {/* first table */}
           <section className="flex justify-center flex-col items-center">
               <div className='bg-indigo-900 h-60 w-96 mx-5 rounded-lg mt-10 overflow-hidden md:mx-96'>
                   {/* header */}
                   <div className='h-14 flex justify-center items-center'>
                       <p className='text-2xl text-white uppercase font-bold'>populate table app</p>
                   </div>

                   {/* table */}
                  <div>
                  <form onSubmit={handleSubmit}>
                      <table className='border-separate w-full border-2 border-gray-500'>
                          <tbody>
                              {/* firstName */}
                              <tr>
                                  <td className='border border-gray-500 text-white text-center'>First Name</td>
                                  <input
                                  name='firstName'
                                  value={data.firstName}
                                  onChange={handleChange}
                                  type='text'
                                  placeholder='First Name'
                                  className='pl-2 border-2 w-full border-gray-500'
                                   />
                              </tr>

                               {/* lastName */}
                               <tr>
                                  <td className='border border-gray-500 text-white text-center'>Last Name</td>
                                  <input
                                  name='lastName'
                                  value={data.lastName}
                                  onChange={handleChange}
                                  type='text'
                                  placeholder='Last Name'
                                  className='pl-2 border-2 w-full border-gray-500'
                                   />
                              </tr>


                               {/* email */}
                               <tr>
                                  <td className='border border-gray-500 text-white text-center'>Email</td>
                                  <input
                                  name='email'
                                  value={data.email}
                                  onChange={handleChange}
                                  type='email'
                                  placeholder='Email'
                                  className='pl-2 border-2 w-full border-gray-500'
                                   />
                              </tr>

                               {/* age */}
                               <tr>
                                  <td className='border border-gray-500 text-white text-center'>Age</td>
                                  <input
                                  name='age'
                                  value={data.age}
                                  onChange={handleChange}
                                  type='number'
                                  placeholder='Age'
                                  className='pl-2 border-2 w-full border-gray-500'
                                   />
                              </tr>

                               {/* button */}
                               <tr>
                                  <td colspan='2'>
                                      <button
                                      type='submit'
                                      className='text-black text-center bg-white w-full font-bold text-xl tracking-wide'
                                      >Add</button>
                                  </td>
                              </tr>

                            
                          </tbody>
                      </table>
                       
                  </form>
                  </div>

               </div>

           </section>

           {/* table two */}
           <section>
               <div className='bg-indigo-900 h-52 mx-5 rounded-lg mt-10 overflow-hidden'>
                {/* table */}
                <table className='border-separate w-full border-2 border-gray-500'>
                    <thead>
                        <tr>
                            <th className='border border-gray-500 text-white text-center'>FirstName</th>
                            <th className='border border-gray-500 text-white text-center'>LASTName</th>
                            <th className='border border-gray-500 text-white text-center'>EMAIL</th>
                            <th className='border border-gray-500 text-white text-center'>AGE</th>
                        </tr>
                    </thead>

                    <tbody>
                      {
                          viewTodo.map((item) =>{
                              return(
                                  
                            <tr key={item.id}>
                            <td className='border border-gray-500 text-white text-center'>{item.dataItem.firstName}</td>
                            <td className='border border-gray-500 text-white text-center'>{item.dataItem.lastName}</td>
                            <td className='border border-gray-500 text-white text-center'>{item.dataItem.email}</td>
                            <td className='border border-gray-500 text-white text-center'>{item.dataItem.age}</td>
                        </tr>
                              )
                          })
                      }
                    
                    </tbody>

                </table>
               </div>
           </section>
       </React.Fragment>
    )
}

export default TodoApp
