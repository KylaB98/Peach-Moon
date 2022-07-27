const express = require('express');
const db = require('./config/db')
const cors = require('cors')

const app = express();
const PORT = 3006;
app.use(cors());
app.use(express.json())

//Route for getting all products
app.get("/api/get", (req, res)=>{
db.query("SELECT * FROM products", (err, result)=> {
    if(err) {
        console.log(err)
    }
    res.send(result)
    });
});

//Route for getting one product
app.get("/api/getFromName/:name", (req, res)=> {
    const name = req.params.name;
        db.query("SELECT * FROM products WHERE name = ?", name,
        (err, res)=>{
            if(err) {
                console.log(err)
            }
            res.send(res)
        });
});

//Route to delete a product

app.delete('/api/delete/:id', (req, res)=> {
    const id = req.params.id;

    db.query("DELETE FROM products WHERE id= ?", id, (err, result)=> {
        if(err) {
            console.log(err)
        }
    })
})

app.listen(PORT, ()=> {
    console.log(`Server is running on ${PORT}`)
})