import userIcon from 'public/userIcon.svg'
import Imgae from 'next/image'

export const MainHeader = () => {
  return (
    <div className="w-screen h-20 px-6 py-4 border-b-2 border-b-fuchsia-300 text-neutral-50 flex flex-row justify-between items-end">
      <h1 className="text-3xl">Tiny Blog</h1>
      <div className="flex flex-row items-center">
        <Imgae priority src={userIcon} alt="user icon" className='h-7 w-7 mx-2' /> 
        <h3> login / register</h3>
      </div>
    </div>
  )
}

