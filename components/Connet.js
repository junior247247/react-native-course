
const {Client}= require('pg')

export const Connet = () => {
const getUser= async()=>{

  const client=new Client({
    database:'AutoMAKE',
    password:'Plane+aN#23&',
    host:'vantage-pds1.ccdzlisu8zno.us-east-2.rds.amazonaws.com',
    port:5432,
    user:'postgres',
  
    
    ssl:{
        rejectUnauthorized:false
    }
})
 await client.connect()

}



}
