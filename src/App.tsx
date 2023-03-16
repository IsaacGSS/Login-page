import { Login } from './components/form/login'
import { Social } from './components/LoginSocial/Social'
import { Break } from './components/common/break'
function App() {
  return (
    <>
      <div
        className='
      md:justify-center

      w-full h-screen flex flex-col  items-center z-10 relative'
      >
        <Login />
        <footer className='w-full absolute bottom-0'>
          <Break>if you log with</Break>
          <Social />
        </footer>
      </div>

      <video
        muted
        autoPlay
        loop
        src='./rocketseatRSXP[descktop].mp4'
        className='w-full h-screen object-cover absolute top-0 z-0'
      ></video>
    </>
  )
}

export default App
