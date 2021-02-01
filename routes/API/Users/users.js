const express = require('express');
const router = express.Router();
const  {User}  = require('../../../@kudan/db')
const md5 = require('md5');

router.get('/',(req, res)=>{
    User.findAll().then((users)=>{
        res.json({
            data: users,
            status:200
        })
    })
})

router.post('/findUser',(req, res)=>{
    let { username , password } = req.body
    User.findOne({where: {username : username, password: md5(password)}})
    .then(users =>{
        // if (username === "" && password === "") {
        //     res.json({error:'',status:400,msg:'anda belum memasukan username dan password'})
        //     return
        // }
        // if (!users) {
        //     res.json({error:'username',status:400,msg:'username tidak ditemukan'})
        //     return
        // }
        // if (users.password !== md5(password)) {
        //     res.json({error:'password',status:400,msg:'password masih salah atau kosong'})
        //     return
        // }
        if (!users.status) {
            res.json({error:'',status:400,msg:'user tidak aktif'})
            return
        }
        req.session.auth = users.id + users.username
        req.session.save(err => {
            if (!err) {
                res.json({
                    error: null,
                    token: req.sessionID,
                    status: 200,
                    user:{
                        id: users.id,
                        nama: users.nama,
                        username: users.username,
                        nip: users.nip,
                        akses: users.akses
                    },
                    msg: "Berhasil Login"
                  })
          }
        })
    }).catch((err)=>{
        res.json({error:'',status:400,msg:'username / password salah'})
  })
})

router.get('/logout',(req, res)=>{
    req.session.destroy()
})

// router.get('/:id',(req, res)=>{
//     const found = users.some(data=>data.id === parseInt(req.params.id))
//     if (found) {
//         res.json(users.filter(e=> e.id === parseInt(req.params.id)))
//     }else{
//         res.status(400).json({msg:`maaf data tidak ditemukan dengan id ${req.params.id}`})
//     }
// })

module.exports = router;