const addNoteHomePage = require('../screenObject/addNote.screen')

describe("delete Note", async () => {

    it('Delete random Note based on First Index', async () => {




        await addNoteHomePage.addNote("test101", "Test Note description")

        // await $("//android.widget.Button[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip']").click()
        await $("android.widget.TextView").click()

        //clicking on More

        await $("~More").click()

        await $('//android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/text" and @text="Delete"]').click()
        await $('//android.widget.Button[@resource-id="android:id/button1"]')
    })

})