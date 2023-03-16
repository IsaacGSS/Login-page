export const Login = () => {
  return (
    <div className='bg-cyber '>
      <form action=''>
        <fieldset>
          <legend className='w-px h-px overflow-hidden -left-[9999px] absolute invisible'>
            Login to RSXP:
          </legend>
          <label htmlFor='loginEmail'>Email</label>
          <input id='loginEmail' type='text' name='Email' placeholder='Email' />

          <label htmlFor='loginPassword'>Password</label>
          <input
            id='loginPassword'
            type='password'
            name='Password'
            placeholder='password'
          />

          <input type='submit' value='Login' />
        </fieldset>
      </form>
    </div>
  )
}
