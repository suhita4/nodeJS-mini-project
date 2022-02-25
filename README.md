# nodeJS-mini-project
A Node.js note taking app that takes commands from the terminal and performs the following functions:

-> Add note: Allows the user to enter the title and the body of the note and adds the note to our database (json file).
    Command: node app.js add --title="Title" --body="Body"
    
-> Remove note: Allows the user to enter the title of the note they want to remove and removes that note.
    Command: node app.js remove --title="Title"
    
-> List note: Lists the title of all the notes present.
    Command: node app.js list
    
-> Read note: Allows the user to enter the title of the note they want to read and displays the body of that note on the terminal.
    Command: node app.js read --title="Title"
