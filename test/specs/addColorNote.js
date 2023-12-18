const addNoteScreen = require("../screenObject/addNote.screen")
const addNoteByColorScreen = require("../screenObject/addNoteByColor.screen")




describe("Add Note With Color", () => {

    it("Add Specific Color Note", async () => {


        await addNoteByColorScreen.pickNoteColor("red")
        await addNoteByColorScreen.selectRandomColorForNotes()
        await addNoteScreen.addNote("test11", "Hello World This is jamil")
        // await addNoteScreen.addNote("red1", "hello everyone welcome to red note")
    })
})