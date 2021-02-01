const express = require('express');
const router = express.Router();
const  {SuratJalan}  = require('../../../@kudan/db')

router.get('/',(req, res)=>{
    SuratJalan.findAll().then((surat)=>{
        res.json({
            data: surat,
            status:200
        })
    })
})

router.get('/:id',(req, res)=>{
    SuratJalan.findAll({where: {id : req.params.id}})
    .then(surat =>{
        res.json({
            data:surat,
            status:200
        })
    }).catch((err)=>{
      res.json({response:400})
  })
})

router.get('/byTanggal/:id?',(req, res)=>{
    SuratJalan.findAll({where: {tanggal : new Date()}})
    .then(surat =>{
        res.json({
            data:surat,
            status:200
        })
    }).catch((err)=>{
      res.json({response:400})
  })
})

router.post('/post',async (req, res)=>{
   const nextId = await SuratJalan.findAll().then((surat)=>{
        return (JSON.parse(JSON.stringify(surat))).length;
    })

    const { dari, kepada, ket, noSurat, barangId } = JSON.parse(req.query.data)
    await SuratJalan.create({
        id: nextId + 1,
        dari: dari,
        kepada: kepada,
        tanggal: new Date(),
        noSurat: noSurat,
        ket: ket == '' ? '-' : ket,
        // barangId: [1,2]
        barangId: '{1,4}'
      }).then(()=>{
          res.json({
            status: 200
          })
      }).catch((err)=>{
          res.json({
              err,
              status:400
          })
      });
})

router.get('/:id',(req, res)=>{
    const found = users.some(data=>data.id === parseInt(req.params.id))
    if (found) {
        res.json(users.filter(e=> e.id === parseInt(req.params.id)))
    }else{
        res.status(400).json({msg:`maaf data tidak ditemukan dengan id ${req.params.id}`})
    }
})

router.get('/delete/:id?',(req, res)=>{
    SuratJalan.destroy({
        where: {
          id: req.params.id
        }
      }).then(()=>{
        res.json({status:200})
      }).catch((err)=>
        res.json({status:400})
      );
})


module.exports = router;