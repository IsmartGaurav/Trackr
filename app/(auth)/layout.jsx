import React from 'react'

function layout({children}) {
  return (
    <div className='flex justify-center py-12'>{children}</div>
  )
}

export default layout