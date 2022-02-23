const fs=require('fs');
const path=require('path');
function createNotes(body,notesArray){
    const note=body;
    notesArray.push(note);
    saveNote(notesArray);
    return note;
}
function deleteNotes(id,notesArray){
    var index=notesArray.map(x=>{
        return x.id;
    }).indexOf(id);
    const deletedNote=notesArray.splice(index,1);
    saveNote(notesArray);
   
}
function saveNote(notesArray){
    fs.writeFileSync(
        path.join(__dirname,'../data/notes.json'),
        JSON.stringify({notes:notesArray},null,1)
    );
}

module.exports={createNotes,deleteNotes};