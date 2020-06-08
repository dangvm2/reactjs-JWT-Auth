const express = require('express')
const auth = require('../middleware/auth')
const User = require('../models/User')

const router = express.Router()

//register
router.post('/users/register', async (req, res) => {
    // Create a new user
    try {
        const user = new User(req.body)
        await user.save()
        const token = await user.generateAuthToken()

        res.cookie('access_token', token, {
            maxAge: 365 * 24 * 60 * 60 * 100,// life time
            httpOnly: true,
            //secure: true; //for SSL
        })
        res.status(201).send({ user, token })
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
})

//login
router.post('/users/login', async (req, res) => {
    //Login a registered user
    try {
        const { email, password } = req.body
        const user = await User.findByCredentials(email, password)
        if (!user) {
            return res.status(401).send({ error: 'Login failed! Check authentication credentials' })
        }

        const token = await user.generateAuthToken()

        res.cookie('access_token', token, {
            maxAge: 365 * 24 * 60 * 60 * 100,// life time
            httpOnly: true,
            //secure: true; //for SSL
        })
        res.status(200).send({ user, token })
    } catch (error) {
        res.status(error.status).send({ error: error.message })
    }
})

//login
router.post('/users/loginWithToken', auth, async (req, res) => {
    //Login a registered user
    res.status(200).send(req.user)
})

//get user profile
router.get('/users/profile', auth, async (req, res) => {
    // View logged in user profile
    res.send(req.user)
})

//logout
router.post('/users/logout', auth, async (req, res) => {
    // Log user out of the application
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token != req.token
        })
        await req.user.save()
        
        res.clearCookie('access_token');
        res.send({ message: 'User has been logout!' })
    } catch (error) {
        res.status(500).send(error)
    }
})

//logout all
router.post('/users/logoutAll', auth, async (req, res) => {
    // Log user out of the application
    try {
        req.user.tokens.splice(0, req.user.tokens.length)
        await req.user.save()

        res.clearCookie('access_token');
        res.send({ message: 'User has been logout all!' })
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router;