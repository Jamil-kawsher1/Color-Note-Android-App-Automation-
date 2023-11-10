class addNoteScrren {

    //skip btn Home Page

    get skipBtn() {

        return $("//android.widget.Button[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip']")
    }

    get addBtn() {

        return $("~Add");

    }

    get textTypeNoteOption() {

        return $("//android.widget.TextView[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/text']")


    }

    get noteTitle() {


        return $('//android.widget.EditText[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
    }

    get noteBody() {

        return $('//android.widget.EditText[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
    }

    get backBtn() {

        return $('//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/back_btn"]');

    }


    async addNote(noteTitle, noteDescription) {
        // Allowing Permiison


        //checking for Skip button

        let skipBtnAvailability = await this.skipBtn.isExisting()

        if (skipBtnAvailability) {
            //Skiping Welcome Screen
            await this.skipBtn.click()

        }

        //clicking on Add + icon

        await this.addBtn.click()

        //Clicking On Note Type (Text) using resource Id

        await this.textTypeNoteOption.click()


        // clicking on title
        await this.noteTitle.click()

        await this.noteTitle.setValue(noteTitle)



        //clicking on note body and adding value
        await this.noteBody.click()

        await this.noteBody.setValue(noteDescription)

        // clicking on save and back button
        await this.backBtn.click()

        //Saving Changes and navigating back to Home page
        await this.backBtn.click()




        //
        await browser.pause(4000)








    }
}

module.exports = new addNoteScrren();