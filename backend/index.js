const express = require ("express")
const mysql = require ("mysql2")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "signupprj"
})

app.post('/signup', (req, res)=>{
    const sql = "INSERT INTO login (`name`, `email`, `password`) values(?)"
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, data)=>{
        if(err){
            return res.json("error")
        }
        return res.json(data)
    })
})

app.post('/login', (req, res)=>{
    const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?"
    const values = [
        req.body.email,
        req.body.password
    ]
    // [req.body.email,req.body.password]
    db.query(sql, values, (err, data)=>{
        if(err){
            return res.json("error")
        }
        if(data.length > 0){
            return res.json("success")
        } else{
            return res.json("failed")
        }
    })
})

app.listen(8081, ()=>{
    console.log("listening")
})