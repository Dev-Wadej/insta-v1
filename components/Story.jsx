import Image from 'next/image'
import React from 'react'

function Story({image,username}) {
  return (
    <div>
        <Image src={image} width={200} height={200} alt={`${username}'s Icon`}/>
        <p>{username}</p>
        {/* <img src={img} alt="" height={30} width={30} /> */}
    </div>
  )
}

export default Story
