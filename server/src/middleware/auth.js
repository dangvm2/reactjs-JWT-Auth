const jwt = require('jsonwebtoken')
const User = require('../models/User')

const auth = async(req, res, next) => {
    
    //support for both Bearer Token & Session cookie
    let token = req.header('Authorization')
    if (token === undefined) {
        token = req.cookies.access_token
    } else {
        token = token.replace('Bearer ', '')
    }
    
    try {
        const data = jwt.verify(token, process.env.JWT_KEY)
        const user = await User.findOne({ _id: data._id, 'tokens.token': token })
        if (!user) {
            throw new Error()
        }
        req.user = user
        req.token = token
        next()
    } catch (error) {
        res.status(401).send({ error: 'Not authorized to access this resource' })
    }
}

module.exports = auth