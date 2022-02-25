const yargs = require('yargs');
const notes = require('./notes.js');

yargs.command({
    command : 'add',
    describe: 'Add note',
    builder: {
        title : {
            describe: 'Note title',
            demandOption: true,
            type : 'string'
        },
        body: {
            describe: 'Type your note',
            demandOption: true,
            type : 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body);		
    }
})

yargs.command({
    command : 'remove',
    describe: "Remove note",
    builder: {
        title : {
            describe: 'Note title',
            demandOption: true,
            type : 'string'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title);		
    }
})

yargs.command({
    command : 'list',
    describe: "List all notes",
    handler: function(argv){
        notes.listNotes();		
    }
})

yargs.command({
    command : 'read',
    describe: 'Read note',
    builder: {
        title : {
            describe: 'Note title',
            demandOption: true,
            type : 'string'
        }
    },
    handler: function(argv){
        notes.readNote(argv.title);		
    }
})


yargs.parse();