import express from "express";
import cors from "cors";
import connection from "./db/Connection.js";
import user from "./module/user.js";
import bcrypt from "bcrypt"


const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:3000' })); 
app.get('/quiz', (req, res) => { });
                                                    
// app.get('./quiz', (req,res)=>{                   
//     const showquestion = Questions.find({})     
//     console.log(showquestion)
//     res.status(200).end('Done')                    
// })


app.get('/quiz', (req, res) => {
    const db = client.db('your_database_name'); // Replace with your database name
    const collection = db.collection('users');
  
    // Retrieve data from MongoDB
    collection.find({}).toArray((err, users) => {
      if (err) {
        console.error('Error retrieving users:', err);
        res.status(500).send('Internal Server Error');
        return;
      }
  
      res.json(users);
    });
  });




app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const userTryingToLogin = await user.findOne({ username })
    
    if (user) {
        const match = await bcrypt.compare(password,userTryingToLogin.password)

        if(match){
            console.log(match)
        }
                if (username === userTryingToLogin.username) {
            res.status(200).send("success");
        } else {
            res.status(401).send("invalid credential")
        }
    }
    else {
        res.status(401).send("invalid credential")
    }
})
    


app.post("/register", async (req, res) => {

    const { name, email, phone, username, password } = req.body;

    const hashedpassword = await bcrypt.hash(password , 10) ;
    const newUser = new user({ 
        name,
        email,
        phone,
        username,
        password: hashedpassword
    })

     await newUser.save()
    res.status(200).end('Well Done')
});

connection.then(() => {
    app.listen(8080, () => console.log("Server started at port 8080"))
})