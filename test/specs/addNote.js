describe("Add Note", () => {


    it("Allowing Perssion and Add Note Title And Description", async () => {
        // Allowing Permiison


        //Skiping Welcome Screen

        await $("//android.widget.Button[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip']").click()

        //clicking on Add + icon

        await $("~Add").click()

        //Clicking On Note Type (Text) using resource Id

        await $("//android.widget.TextView[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/text']").click()


        // clicking on title
        let tittleField = await $('//android.widget.EditText[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
        await tittleField.click()
        await tittleField.setValue("Hello Word!!!")

        let noteBody = await $('//android.widget.EditText[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');

        await noteBody.click();

        await noteBody.setValue("Hi This Is Jamil !!!!!\nA Junior Test Automation Enginner In meldCX")

        let backBtn = await $('//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/back_btn"]');

        //Saving Changes
        await backBtn.click()

        //navigating back to Home page

        await backBtn.click()



        //
        await browser.pause(4000)




    })
})