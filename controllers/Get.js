const client = require('../connection')
const express = require('express');
const app = express();

module.exports = {
    Get:  (req, res)=>{
        client.query(`Select * from users`, (err, result)=>{
            if(!err){
                res.send(result.rows);
            }
        });
        client.end;
    },

    GetById: (req, res)=>{
        client.query(`Select * from users where id=${req.params.id}`, (err, result)=>{
            if(!err){
                res.send(result.rows);
            }
        });
        client.end;
    },

    insertUser:(req, res)=> {
        const user = req.body;
        let insertQuery = `insert into users(id, firstname, lastname, location) 
                           values(${user.id}, '${user.firstname}', '${user.lastname}', '${user.location}')`
    
        client.query(insertQuery, (err, result)=>{
            if(!err){
                res.send('Insertion was successful')
            }
            else{ console.log(err.message) }
        })
        client.end;
    },
    
    UpdateUser:(req, res)=> {
        let user = req.body;
        let updateQuery = `update users
                           set firstname = '${user.firstname}',
                           lastname = '${user.lastname}',
                           location = '${user.location}'
                           where id = ${user.id}`
    
        client.query(updateQuery, (err, result)=>{
            if(!err){
                res.send('Update was successful')
            }
            else{ console.log(err.message) }
        })
        client.end;
    },

    DeleteUser:(req, res)=> {
        let insertQuery = `delete from users where id=${req.params.id}`
    
        client.query(insertQuery, (err, result)=>{
            if(!err){
                res.send('Deletion was successful')
            }
            else{ console.log(err.message) }
        })
        client.end;
    }   
   
}
