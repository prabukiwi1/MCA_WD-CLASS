const {readFileSync}=require('fs')
const load=()=>JSON.parse(readFileSync('emp.json'))
module.exports={load}