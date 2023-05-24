import userIcon from 'public/userIcon.svg'
import Imgae from 'next/image'
import { Text } from "@nextui-org/react";


export const MainHeader = () => {
  return (
    <div className="lg:w-256 h-20 py-4 border-b-2 border-b-violet-600 text-violet-800 flex flex-column items-center justify-center">
      <div className='w-full flex flex-row px-2 justify-between items-end py-4'>
        <Text h1 size={38}
          css={{
            textGradient: "45deg, $purple600 -10%, $pink600 150%",
          }}
          weight="bold"
        >
          Tiny Blog
        </Text>
        <div className="flex flex-row items-center">
          <Imgae priority src={userIcon} alt="user icon" className='h-7 w-7 mx-2' /> 
          <h3> login / register</h3>
        </div>
      </div>
        
    </div>
  )
}

