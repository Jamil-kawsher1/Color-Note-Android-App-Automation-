const addNoteHomePage = require('../screenObject/addNote.screen')
const deleteNoteScreen = require('../../test/screenObject/deleteNote.Screen')
const fs = require('fs')
const addNoteHomeScreen = require('../screenObject/addNote.screen')
const path = require('path')
describe("delete Note", async () => {

    it('Delete random Note based on First Index', async () => {




        await addNoteHomePage.addNote("test101", "Test Note description")

        // await $("//android.widget.Button[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip']").click()

        await deleteNoteScreen.noteByindex[0].click()


        //clicking on More
        await deleteNoteScreen.moreBtn.click()

        //clicking On Note Delete Btn

        await deleteNoteScreen.deleteNoteBtn.click()

        //clicking On Note Delete Btn confirm 

        await deleteNoteScreen.noteDeleteCofirmBtn.click()


    })


    it.only("Delete All Note", async () => {
        var noteJsonData = await fs.readFileSync(path.join(process.cwd(), 'test\\Data\\notes.json'), 'utf8');
        var notesConvertedObject = await JSON.parse(noteJsonData);
        await browser.pause(2000)
        for (let i = 0; i < 5; i++) {


            await addNoteHomeScreen.addNote(notesConvertedObject.notetitle[i], notesConvertedObject.noteDescription[i])
        }



        browser.pause(2000)

        for (let i = 0; i < await deleteNoteScreen.noteByindex.length; i++) {


            console.log("Current Index number is....", i);
            await browser.pause(1000)
            // await addNoteHomeScreen.addNote(notesConvertedObject.notetitle[i], notesConvertedObject.noteDescription[i])

            await deleteNoteScreen.noteByindex[i].click()
            await browser.pause(1000)

            //clicking on More
            await deleteNoteScreen.moreBtn.click()

            //clicking On Note Delete Btn

            await deleteNoteScreen.deleteNoteBtn.click()

            //clicking On Note Delete Btn confirm 

            await deleteNoteScreen.noteDeleteCofirmBtn.click()
        }




        it("Deelete Specif")





    })

})