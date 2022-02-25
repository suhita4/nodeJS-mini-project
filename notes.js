const fs = require('fs');
const chalk = require('chalk');

const loadNotes = function() {
  try{
      const presentNotes = fs.readFileSync('notes.json');
      const notesData = presentNotes.toString();
      return JSON.parse(notesData);
  }
  catch(e){
      return []
  }
}

const saveNotes = function(notes)  {
const notesData = JSON.stringify(notes);
fs.writeFileSync('notes.json', notesData);
}

const addNote = function(title, body){
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title;
    });
    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.bgGreen.black('New note created')
        );
    }
    else{
      console.log(chalk.bgRed.black('Title already taken!')
      );
    }
}

const removeNote = function(title){

    const notes = loadNotes()
    const requiredNote = notes.filter(function (note) {
        return note.title !== title
    })

    if (notes.length > requiredNote.length) {
        console.log(chalk.bgGreen.black('Note removed'));
        saveNotes(requiredNote)
    }
    else{
        console.log(chalk.bgRed.black('Note not found!'));
    }

}

const listNotes = function(){
    const notes = loadNotes()
    
    console.log(chalk.bgBlue.black('Your Notes:'));
    if (notes.length == 0) {
      console.log(chalk.bgRed.black('No notes created'));
    } else 
    {
      notes.forEach((note) => {
        console.log(note.title)
      });
    }
}

const readNote = function(title){
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title)
    if(note){
        console.log(chalk.bgYellow.black(note.title));
        console.log(note.body);
    }
    else{
        console.log(chalk.bgRed.black('Note not found!'));
    }
}

module.exports = {
    addNote : addNote,
    removeNote : removeNote,
    listNotes : listNotes,
    readNote : readNote
}