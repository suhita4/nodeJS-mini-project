<h1>NodeJS CLI Notes App</h1><br>
A Node.js note taking app that takes commands from the terminal and performs the following functions:

<h3>-> Add note</h3>
Allows the user to enter the title and the body of the note and adds the note to our database (json file). <br>
    Command: node app.js add --title="Title" --body="Body"
    
<h3>-> Remove note</h3>
Allows the user to enter the title of the note they want to remove and removes that note.<br>
    Command: node app.js remove --title="Title"
    
<h3>-> List note</h3>
Lists the title of all the notes present.<br>
    Command: node app.js list
    
<h3>-> Read note</h3>
Allows the user to enter the title of the note they want to read and displays the body of that note on the terminal.<br>
    Command: node app.js read --title="Title"
