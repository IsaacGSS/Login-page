import { IBreak } from '../../types/IBreak'

export const Break = ({ children }: IBreak) => {
  return (
    <>
      <div className='w-full flex justify-between items-center my-1.5'>
        <div className='w-full h-px bg-white'></div>

        <div className='w-64 mx-1 text-center italic font-light text-sm text-white bg-transparent'>
          {children}
        </div>

        <div className='w-full h-px bg-white'></div>
      </div>
    </>
  )
}
