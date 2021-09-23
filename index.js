const axios = require('axios')
const usersRequested=[2,4,6,8,10]
// Async function to return all users
const getUsers = async () =>{
try{
    // Return an array of Promises
    const promisesArray = usersRequested.map( async userId =>{
        const userNamesRes =  await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        
        return userNamesRes
})
    // Resolve the Promises
    console.log(promisesArray)
    const userInfo = await Promise.all(promisesArray)
  
    userInfo.map(promiseRecord=>{
        console.log(`ID - ${promiseRecord.data.id}, Name - ${promiseRecord.data.name}`)
    })
}catch(err){
    console.log(err.message)
}
}
getUsers()