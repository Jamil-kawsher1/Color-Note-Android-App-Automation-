const addNoteByColorScreen = require("../screenObject/addNoteByColor.screen")



describe("Add Note With Color", () => {

    it("Add Specific Color Note", async () => {


        await addNoteByColorScreen.pickNoteColor()
    })
})