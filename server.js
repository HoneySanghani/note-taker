const express=require('express');
const app=express();
const PORT=process.env.PORT||3002;
const apiRoutes=require('./routes/apiRoutes');
const htmlRoutes=require('./routes/htmlRoutes');

//parse incomming string or array data
app.use(express.urlencoded({extended:true}));
//parse incomming JSON data
app.use(express.json());
app.use(express.static('public'));

app.use('/api',apiRoutes);
app.use('/',htmlRoutes);
app.listen(PORT,()=>{
    console.log(`API server noe running on port ${PORT}`);
})