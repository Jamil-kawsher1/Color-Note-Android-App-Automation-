const addNoteHomeScreen = require('../screenObject/addNote.screen')

describe("Add Note", () => {


    it("Allowing Perssion and Add Note Title And Description", async () => {

        await addNoteHomeScreen.addNote("Note1", "Hello Wordl!!!!")



    })
})