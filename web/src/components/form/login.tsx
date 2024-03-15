import { EnvelopeIcon, KeyIcon } from '@heroicons/react/24/outline'

export const Login = () => {
  return (
    <div
      className='
    md:max-w-none 

    max-w-md w-auto h-1/2 p-5 mx-2.5 flex flex-col justify-between  text-white  bg-black bg-opacity-75'
    >
      <h2 className='font-semibold text-3xl text-alien'>Login in RS/XP</h2>

      <p className='font-medium max-w-md'>
        O Rocketseat Experience é uma verdadeira imersão no mundo da tecnologia!
      </p>
      <form action=''>
        <fieldset className='flex flex-col gap-5'>
          <legend className='w-px h-px overflow-hidden -left-[9999px] absolute invisible'>
            Login in RSXP:
          </legend>
          <div className='m-auto flex flex-col  gap-2.5'>
            <label
              htmlFor='loginEmail'
              className='w-px h-px overflow-hidden -left-[9999px] absolute invisible'
            >
              Email
            </label>
            <div className='w-full p-1 pl-3 m-auto flex items-center justify-center border border-zinc-300 rounded-md '>
              <EnvelopeIcon className='w-5 h-5' />
              <hr className='w-8 h-px rotate-90' />
              <input
                id='loginEmail'
                type='text'
                name='Email'
                placeholder='Email'
                className='w-11/12 h-10 bg-transparent outline-none'
              />
            </div>
          </div>

          <div className='m-auto flex flex-col gap-2.5'>
            <label
              htmlFor='loginPassword'
              className='w-px h-px overflow-hidden -left-[9999px] absolute invisible'
            >
              Password
            </label>
            <div className='w-full p-1 pl-3 m-auto flex items-center justify-center border border-zinc-300 rounded-md'>
              <KeyIcon className='w-5 h-5' />
              <hr className='w-8 h-px rotate-90' />

              <input
                id='loginPassword'
                type='password'
                name='Password'
                placeholder='password'
                className='w-11/12 h-10 bg-transparent outline-none'
              />
            </div>
          </div>

          <input type='submit' value='Login' className='py-2.5' />
        </fieldset>
      </form>
    </div>
  )
}
