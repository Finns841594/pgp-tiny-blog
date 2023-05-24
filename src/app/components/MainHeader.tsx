import userIcon from 'public/userIcon.svg'
import Imgae from 'next/image'

export const MainHeader = () => {
  return (
    <div className="w-256 h-20 py-4 border-b-2 border-b-violet-600 text-violet-800 flex flex-column items-center justify-center">
      <div className='w-full flex flex-row px-2 justify-between items-end py-4'>
        <h1 className="text-3xl">Tiny Blog</h1>
        <div className="flex flex-row items-center">
          <Imgae priority src={userIcon} alt="user icon" className='h-7 w-7 mx-2' /> 
          <h3> login / register</h3>
        </div>
      </div>
        
    </div>
  )
}

