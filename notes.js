const fs = require('fs')
const chalk = require('chalk')
const getNotes = () => {    //const getNotes = function () {
return 'Your notess....'
}


///addding the note function /////
const addnote = (title, body) => {                           //const addnote = function(title, body) { 
        const notes = loadNotes()                                    // load the LOADnotes function into notes const

///////Duplicate filter////// 
        const duplicateNote = notes.find((note) =>          //array filter. and put the function to do the job
                 note.title === title      )                    //equality equator if note.title = title on the list
    


    //     const duplicateNotes = notes.filter(function (note) {         //array filter. and put the function to do the job
    //         return note.title === title                          //equality equator if note.title = title on the list
    // })

 
        if (!duplicateNote) {                         //if 0 duplicate found. execute the push array.
            
            notes.push({                                                            //push the data (push array)
                title: title,
                body: body
            })

            saveNotes(notes)   //callback function
            console.log('new note added!')

        } else { 
          console.log('note title taken') 
        }



 

  //  notes.push({                                                            //push the data (push array)
  //      title: title,
  //      body: body
  //  })

                 //pass in the notes array to savenotes
}

/////////remove note function
    
const removeNote = (title) => {
        const notes = loadNotes()                                    
        const keepnotes = notes.filter((note)     =>             
             note.title !== title 

        )


        if (notes.length > keepnotes.length){
            console.log(chalk.green.inverse('Note remove'))
        } else {
            console.log(chalk.red.inverse('no not found'))
        }

        saveNotes(keepnotes) //Callback



 }

const listnotes =() => {
    const notes = loadNotes()

    console.log(chalk.inverse('Your notes'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}


  
const readnotes =(title) => {
    const notes = loadNotes()
    const note = notes.find ((note) => note.title === title)
    if(note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)

    } else {
        console.log(chalk.red.inverse('Note not found'))


    }


}

const saveNotes =  (notes) => {            //save the *notes* argument above from the notes.push
const dataJSON = JSON.stringify(notes)             //string the notes
fs.writeFileSync('notes.json', dataJSON )
}


const loadNotes = ()=> {
    try {                                                           //try catch method.
        const dataBuffer = fs.readFileSync('notes.json')             //readt the data from notes.json
        const dataJSON = dataBuffer.toString()                       //string the data 
        return JSON.parse(dataJSON)                                  // return the data as json parse
    
    }catch (e) {
            return []                                                 // if the 3 code above throws an error. return an empty array
    }


}






//module.exports = getNotes
module.exports = {
    getNotes: getNotes,
    addnote: addnote,
    removeNote: removeNote,
    listnotes: listnotes,
    readnotes: readnotes
}