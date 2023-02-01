import React from 'react'
import Post from './Post'

function Posts() {

    const posts =[
        {
            id:"1",
            username:"j_adeniyi",
            userImg:"https://scontent.flos1-2.fna.fbcdn.net/v/t1.6435-9/132873831_1201915090227226_681900373770315192_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFwdPwC5zfJhrB-C_be_allA_MoA-VepBAD8ygD5V6kEHaI63pi1BCSOzBmJpRwMHwPe7-UVvuaJ5DNh_C2GW8M&_nc_ohc=MI-3pTnmHzAAX-2ZrQ_&_nc_ht=scontent.flos1-2.fna&oh=00_AfAxUElJoMD0HpMpf2_1YSDoXabu3KQUZW-FWsRqirlyxA&oe=63F3DF10",
            img: "https://plus.unsplash.com/premium_photo-1661582730924-dc67f6c93eea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
            caption:"Nice Picture you gat here"
    
        } ,{
            id:"2",
            username:"wadej",
            userImg:"https://scontent.flos1-2.fna.fbcdn.net/v/t1.6435-9/132873831_1201915090227226_681900373770315192_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFwdPwC5zfJhrB-C_be_allA_MoA-VepBAD8ygD5V6kEHaI63pi1BCSOzBmJpRwMHwPe7-UVvuaJ5DNh_C2GW8M&_nc_ohc=MI-3pTnmHzAAX-2ZrQ_&_nc_ht=scontent.flos1-2.fna&oh=00_AfAxUElJoMD0HpMpf2_1YSDoXabu3KQUZW-FWsRqirlyxA&oe=63F3DF10",
            img: "https://images.unsplash.com/photo-1675258156837-7ff69275adfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
            caption:"Photography is my thing, dont forget to book!!!"
    
        }
]
  return (
    <div>
      {posts.map((post)=>(
          <Post 
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
          />
      ))}
    </div>
  )
}

export default Posts
 