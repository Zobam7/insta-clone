import React from 'react'
import { getProviders, signIn as SignIntoProvider } from "next-auth/react"
import Header from "../components/Header"


function signIn({ providers }) {
  return (
    <>
    <Header />
    <div className='flex flex-col justify-center items-center min-h-screen py-2  px-14 text-center'>
      <img src='/Images/insta.png' alt='' className='w-80'/>
      <p className='font-xs italic'>This is a clone App!!!!</p>
    <div className='mt-40'>
    {Object.values(providers).map((provider) => (
      <div key={provider.name}>
        <button className='p-3 bg-blue-500 rounded-lg text-white hover:scale-105 transition-all' onClick={() => SignIntoProvider(provider.id, { callbackUrl: "/"})}>
          Sign in with {provider.name}
        </button>
      </div>
    ))}
    </div>
    </div>
    
    
  </>
  )
}

export async function getServerSideProps() {
    const providers = await getProviders()
    return {
        props: {
            providers
        }
    }
}


export default signIn