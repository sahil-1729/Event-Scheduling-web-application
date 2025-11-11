const { generateToken, jwtAuthMiddleware } = require('../middleware/jwt');
const { createUser, getUserByEmail }  = require('../service/userService');

const express = require('express')
const router = express.Router();

router.post('/signup', async (req, res) => {
    try {
        const data = req.body;
        const response = await createUser(data);
        console.log('data saved ', response)

        const payload = {email : response[0].email}
        const token = generateToken(payload)

        res.status(200).json({ response: response, token: token })

    } catch (e) {

        console.log(e)
        res.status(500).json({ error: e.message ? e.message : 'internal server error' })

    }
})

router.post('/login', async(req, res) => {
    try{
        // Extract username and password from request body
        const {email, password} = req.body;

        // Find the user by email
        const user = await getUserByEmail(email);

        // If user does not exist or password does not match, return error
        if( !user || !( user.password === password) ){
            return res.status(401).json({error: 'Invalid username or password'});
        }

        // generate Token 
        const payload = {email : user.email}
        const token = generateToken(payload);

        // return token as response
        res.json({token})
    }catch(err){
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Profile route
router.get('/profile', jwtAuthMiddleware, async (req, res) => {
    try{
        // const userData = req.user;
        // console.log("User Data: ", userData);

        // const userId = userData.id;
        // const user = await Person.findById(userId);

        res.status(200).json({message : "response to be built"});
    }catch(err){
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})


router.get('/', jwtAuthMiddleware, async (req, res) => {
    res.status(200).json({ message: "passed bro" });
})

module.exports = router