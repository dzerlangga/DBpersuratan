const express = require('express');
const router = express.Router();
const  {Barang}  = require('../../../@kudan/db')

router.get('/',(req, res)=>{
    Barang.findAll().then((barang)=>{
        res.json({
            data: barang,
            status:200
        })
})
})

router.get('/find/:id?',(req, res)=>{
    Barang.findAll({where: {id : JSON.parse(req.params.id)  }})
    .then(barang =>{
        res.json({
            data:barang,
            status:200
        })
    }).catch((err)=>{
      res.json({status:400})
  })
    // res.json('oke')
    // const found = users.some(data=>data.id === parseInt(req.params.id))
    // if (found) {
    //     res.json(users.filter(e=> e.id === parseInt(req.params.id)))
    // }else{
    //     res.status(400).json({msg:`maaf data tidak ditemukan dengan id ${req.params.id}`})
    // }
})

router.get('/:id',(req, res)=>{
    const found = users.some(data=>data.id === parseInt(req.params.id))
    if (found) {
        res.json(users.filter(e=> e.id === parseInt(req.params.id)))
    }else{
        res.status(400).json({msg:`maaf data tidak ditemukan dengan id ${req.params.id}`})
    }
})

module.exports = router;