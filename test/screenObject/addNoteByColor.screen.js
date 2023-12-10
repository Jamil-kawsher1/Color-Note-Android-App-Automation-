const addNoteScreen = require("./addNote.screen");

class addNoteByColorScreen {

    get noteColorPickerMainBtn() {


        return $('//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn1"]');
    }


    get noteColor() {
        return $$('//android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/text"]')
    }


    async pickNoteColor() {

        let skipBtnAvailability = await addNoteScreen.skipBtn.isExisting()



        if (skipBtnAvailability) {
            //Skiping Welcome Screen
            await addNoteScreen.skipBtn.click()
            this.noteColorPickerMainBtn.click()
            this.noteColor[1].click()
        }

    }





}

module.exports = new addNoteByColorScreen();