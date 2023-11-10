
const fs = require('fs');
const addNoteHomeScreen = require('../screenObject/addNote.screen')

describe("Add Note", () => {




    it("Allowing Perssion and Add Note Title And Description", async () => {

        await addNoteHomeScreen.addNote("Note1", "Hello Wordl!!!!")



    })


    it("Add Multiple Note at Once.", async () => {
        var noteJsonData = fs.readFileSync('D:\\appium\\ColorNoteApp\\test\\Data\\notes.json', 'utf8');
        var notesConvertedObject = JSON.parse(noteJsonData);
        await browser.pause(2000)

        for (let i = 0; i < 5; i++) {


            await addNoteHomeScreen.addNote(notesConvertedObject.notetitle[i], notesConvertedObject.noteDescription[i])
        }

    })
})