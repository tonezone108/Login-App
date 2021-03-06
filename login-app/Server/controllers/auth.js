const mysql = require('mysql')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

// for bcrypt
const saltRounds = 10

const signup = (req, res) => {
  const { username, userpassword } = req.body
  let sql = "INSERT INTO login_app_users (username, userpassword) VALUES (?, ?)"

  bcrypt.hash(userpassword, saltRounds, function(err, hash) {
    sql = mysql.format(sql, [ username, hash ])
  
    pool.query(sql, (err, result) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') return res.status(409).send('Username is taken')
        return handleSQLError(res, err)
      }
      return res.send('Sign-up successful')
    })
  })
}

const login = (req, res) => {
  const { username, userpassword } = req.body
  let sql = "SELECT * FROM login_app_users WHERE username = ?"
  sql = mysql.format(sql, [ username ])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    if (!rows.length) return res.status(404).send('No matching users')

    const hash = rows[0].userpassword
    bcrypt.compare(userpassword, hash)
      .then(result => {
        if (!result) return res.status(400).send('Invalid userpassword')

        const data = { ...rows[0] }
        data.userpassword = 'REDACTED'

        const token = jwt.sign(data, 'secret')
        res.json({
          msg: 'Login successful',
          token,
          username: username
        })
      })
  })
}

module.exports = {
  signup,
  login
}