const addNoteHomeScreen = require('../screenObject/addNote.screen')

describe("Add Note", () => {


    it("Allowing Perssion and Add Note Title And Description", async () => {
        // Allowing Permiison


        //Skiping Welcome Screen
        await addNoteHomeScreen.skipBtn.click()


        //clicking on Add + icon

        await addNoteHomeScreen.addBtn.click()

        //Clicking On Note Type (Text) using resource Id

        await addNoteHomeScreen.textTypeNoteOption.click()


        // clicking on title
        await addNoteHomeScreen.noteTitle.click()

        await addNoteHomeScreen.noteTitle.setValue("Test note 1")



        //clicking on note body and adding value
        await addNoteHomeScreen.noteBody.click()

        await addNoteHomeScreen.noteBody.setValue("Hi This Is Jamil !!!!!\nA Junior Test Automation Enginner In meldCX")

        // clicking on save and back button
        await addNoteHomeScreen.backBtn.click()

        //Saving Changes and navigating back to Home page
        await addNoteHomeScreen.backBtn.click()




        //
        await browser.pause(4000)




    })
})