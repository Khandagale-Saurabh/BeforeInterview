import React,{useState,useEffect} from 'react'
let axios=require('axios');
let Users=()=>{
    let [data,setData]=useState([])
    let [single,setSingle]=useState([])
    let [dd,setdd]=useState([])
    
    useEffect(()=>{
       axios.get('https://api.github.com/users')
       .then(response=> setData(response.data))
       .then(err=>console.log(err))
    },[])

    let changeMe=(e)=>{
              axios.get('https://api.github.com/users/'+e.target.value).
              then((res)=>{
                  console.log(res.data.avatar_url)
                 setSingle(res.data.avatar_url)
                 setdd(res.data)
              }).
              then((err)=>{
              console.log(err)
              })
    }
    return (
        <>
        <h1>Hello</h1>
         <select onChange={changeMe}>
            {

            data.map(el=>
                     (
                        <option key={el.id} value={el.id}>{el.login}</option>
                     ))
               }
        </select>
        <br></br>
              <img src={single} height="100px"></img>
            {  console.log(dd)}
            following_url:{dd.following_url}
            <br></br>
            type:{dd.type}
            <br></br>
            Login:{dd.login}
            <br></br>
=========================================
        <table>
           <td>name
               <tr>Node{dd.node_id}</tr>
               <tr>Id {dd.id}</tr>
               <tr>Company{dd.created_at}</tr>
           </td>
           
        </table>            

        </>
    )
}

export default Users;





// let axios=require('axios');
// let arr;
// let users= axios.get('https://api.github.com/users').then((res)=>{
//     arr=res;
//     // console.log(res);
//     return res;
// })

// console.log(users)
