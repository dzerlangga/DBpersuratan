const express = require('express');
const path = require('path');
// const middleware = require('./middleware/index');
var cookieParser = require('cookie-parser');
var session = require('express-session');
const app = express();
app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));


// const users = require('./users');
// app.use(middleware)

// set statis folder
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/users',require('./routes/API/Users/users'));
app.use('/api/suratJalan',require('./routes/API/SuratJalan/suratJalan'));
app.use('/api/suratJalan/delete/:id?',require('./routes/API/SuratJalan/suratJalan'));
app.use('/api/suratJalan/byTanggal/:id?',require('./routes/API/SuratJalan/suratJalan'));
app.use('/api/suratJalan/post',require('./routes/API/SuratJalan/suratJalan'));
app.use('/api/Barang',require('./routes/API/Barang/barang'));
app.use('/api/Barang/find/:id?',require('./routes/API/Barang/barang'));

// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','index.html'));
// })

const PORT = process.env.PORT || 5000;


app.listen(PORT,()=>console.log(`Berjalan di port ${PORT}`))