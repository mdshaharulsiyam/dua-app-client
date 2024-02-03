import React from 'react'
import DuaData from './DuaData'

const Duas = ({duaData}) => {
    
  return (
    <div className='h-screen overflow-auto  pt-4 box-border'>
      {
        duaData.map(item=> <DuaData key={item?.item?._id} items={item} />)
      }
    </div>
  )
}

export default Duas
