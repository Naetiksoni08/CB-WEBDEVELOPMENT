import React from 'react'
import Input from '../Components/Input'

function Login() {
    return (
        <div className='border min-h-screen'>
            <div className='max-w-2xl mx-auto px-[24px] '>
                <div className='border w-10 rounded-sm bg-black text-white text-xl font-extrabold text-center mx-auto'>CB</div>
                <p className='font-bold text-center mt-3.5 text-2xl '>Join the CB Community</p>
                <p className='text-center text-gray-600'>CB Community is a community of 3,465,300 amazing developers</p>
                <form>
                    <Input title={"Email"} type={"email"} />
                    <Input title={"password"} type={"password"} />
                    <button className="w-full bg-[#3B49DF] text-white py-3 mt-4 rounded-lg">Log in</button>
                </form> 

                <div className="mt-6">
            <p className="text-sm italic text-gray-500 text-center">By signing in, you are agreeing to our <span className="text-[#3B49DF]">privacy policy</span>, <span className="text-[#3B49DF]">terms of use</span></p>
            <p className="text-sm italic text-gray-500 text-center">and <span className="text-[#3B49DF]">code of conduct</span>.</p>
          </div>

          <hr className="my-6 text-gray-300" />


          <p className="text-gray-800 text-center">New to DEV Community? <span className="text-[#3B49DF]">Create account.</span></p>
            </div>
        </div>
    )
}

export default Login