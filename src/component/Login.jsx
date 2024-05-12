import { useState } from "react"
import { supabase } from "../database/supabase"
import { Link, useNavigate } from "react-router-dom"

export const Login = ({setToken}) =>{
  let navigate = useNavigate()
  const [formData, setFormData] = useState({
    email:'', password:''
  })

  function handleChange(event){
    setFormData((prevFormData)=>{
      return{
        ...prevFormData,
        [event.target.name]:event.target.value
      }
    })
  }

  async function handleSubmit(e){

    e.preventDefault()
    try {
      let { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password
      })

      if(error)
      throw error
      setToken(data)
      navigate('/api')
    } catch (error) {
      if(error.message.includes(!formData.password)){
        alert('Wrong password')
      }else{
        alert('Wrong email and password')
      }
    }
  
  }
    
  return(
    <div className="bg-indigo-300 dark:bg-gray-800 flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
        Login to your account
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6">
            Email address
          </label>
          <div className="mt-2">
            <input
              onChange={handleChange}
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full rounded-md border-0 py-1.5 font-semibold dark:font-bold dark:text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6">
              Password
            </label>
            <div className="text-sm">
              <a href="#" className="font-semibold text-indigo-700 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-500">
                Forgot password?
              </a>
            </div>
          </div>
          <div className="mt-2">
            <input
              onChange={handleChange}
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 py-1.5 font-semibold dark:font-bold dark:text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="flex text-center">
        <Link to="/signUp" className="w-full px-3 py-1.5 text-sm font-semibold leading-6 text-white bg-indigo-600 dark:bg-gray-600 rounded-md shadow-sm hover:bg-indigo-500 dark:hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          <button>
            Sign in
          </button>
        </Link>
          <button
            type="submit"
            className="w-full px-3 py-1.5 text-sm font-semibold leading-6 text-white bg-indigo-600 dark:bg-gray-600 rounded-md shadow-sm hover:bg-indigo-500 dark:hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>

)




}