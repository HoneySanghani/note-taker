const router=require('express').Router();
const {notes}=require('../../data/notes');
const {createNotes,deleteNotes}=require('../../lib/notes')
//to create new id every time
const generator = require('id-generator');
const g=new generator();

router.get('/notes',(req,res)=>{
    res.json(notes);
});

router.post('/notes',(req,res)=>{
    req.body.id=g.newId();
    const note=createNotes(req.body,notes);
    res.json(note);
});

router.delete('/notes/:id',(req,res)=>{
    res.send("note deleted!");
    const result=deleteNotes(req.params.id,notes);
    res.json(result);
})

module.exports=router;