import express from 'express';

const app = express();
app.get('/',(req,res,next)=>
    {
      res.json({message:"welcom to ebook api"});  
    });


export default app;