const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
const { strict, demandOption, string } = require('yargs')


//adding command

yargs.command ({
command: 'add',                          //name of command
describe: 'add command',
builder: {
    title: {
        describe: 'note title',
        demandOption: true,
        type: 'string'
    },
    body: {
        body: {
            describe: 'body',
            demandOption: true,
            type: 'string'
        }
    }
},

//handler: function (argv) {                   
    handler (argv) {     
    //console.log('adding note:', argv.title,'the body:', argv.body)    
    notes.addnote(argv.title, argv.body)           //pass the job to addnote function in notes.js
}
})








//removing command
yargs.command ({
command: 'remove',
describe: 'removing command',
builder: {
    title: {
        describe:'note title',
        demandOption: true,
        type: 'string'
    }

},
handler(argv) { //handler: function (argv) {
notes.removeNote(argv.title)

}

})
 
//list command
yargs.command ({
    command: 'list',
    describe: 'listing command',
    handler () { notes.listnotes()

    
    }
    
    })
    
    //read command
yargs.command ({
    command: 'read',
    describe: 'reading command',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
    notes.readnotes(argv.title)
    
    }
    
    })
    
    yargs.parse()
    //console.log(yargs.argv)


















//const getNotes = require('./notes.js')
//const msg = getNotes()
//console.log(chalk.blue (msg)) 
//const sum = add(1,3)
//console.log(chalk.red(sum))
//console.log(process.argv[2])

//Chalk
//const chalk = require('chalk')
//console.log(chalk.blue ('aw')) 

//validator
//const validator = require('validator')
//console.log(validator.isEmail ('aw')) 

//Challenge 2
//const add = require('./utils.js')
//const sum = add(4, 2)
//console.log(sum)


//Challenge 1
//const fs = require('fs')
//fs.writeFileSync('note.txt','MY name is erjee')
//fs.appendFileSync('note.txt','This is the challenge')

