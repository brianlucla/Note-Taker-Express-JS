const fs = require('fs');
const { title } = require('process');
const util = require('util');

const { v4: uuidv4 } = require("uuid");

class Notes{
  async readFile(){
    const file = await fs.readFile('db/db.json', 'utf-8', (err)=>{
      err
        ? console.error(err)
        : console.log(`Note has been written to JSON file`);
    });
    return file;
  }

  async writeFile(note){
    const file = await fs.writeFile('db/db.json', JSON.stringify(note), (err)=>{
      err
        ? console.error(err)
        : console.log(
            `Note has been written to JSON file`
        )
    });
    return file;
  }

  getNotes(){
    let notes = this.readFile();
    return notes.then((data) => {
      let noteArray;
      noteArray = [].concat(JSON.parse(data));
      return noteArray;
    })
  }

  addNote(note){
    const {title, text} = note;
    if (!title || !text){
      throw new Error('Note must contain a name and content');
    }
    const newNote = {
      title: title,
      text: text,
      id: uuidv4()
    }

    return this.getNotes()
      .then((notes) => [...notes, newNote])
      .then((notesArray) => this.writeFile(notesArray))
      .then(() => newNote);
  }
}

module.exports = new Notes();