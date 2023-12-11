const addNoteScreen = require("./addNote.screen");

class addNoteByColorScreen {

    get noteColorPickerMainBtn() {


        return $('//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn1"]');
    }


    get noteColor() {
        return $$('//android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/text"]')
    }


    async pickNoteColor(color) {

        let skipBtnAvailability = await addNoteScreen.skipBtn.isExisting()



        if (skipBtnAvailability) {
            //Skiping Welcome Screen
            await addNoteScreen.skipBtn.click()




        }

        await this.noteColorPickerMainBtn.click()
        switch (color.toLowerCase()) {
            case 'red':
                await this.noteColor[1].click()
                break;
            case 'orange':
                await this.noteColor[2].click()
                break;

            case 'yellow':
                await this.noteColor[3].click()
                break;

            case 'green':
                await this.noteColor[4].click()
                break;
            case 'sky blue':
                await this.noteColor[5].click()
                break;

            case 'purple':
                await this.noteColor[6].click()
                break;

            case 'black':
                await this.noteColor[7].click()
                break;
            case 'ash':
                await this.noteColor[8].click()
                break;
            case 'white':
                await this.noteColor[9].click()
                break;


            default:
                await this.noteColor[0].click()
                break;
        }

    }

    async selectRandomColorForNotes() {

        let skipBtnAvailability = await addNoteScreen.skipBtn.isExisting()

        if (skipBtnAvailability) {

            await addNoteScreen.skipBtn.click()

        }

        await this.noteColorPickerMainBtn.click()
        let randomIndex = Math.floor(Math.random() * 10)
        await this.noteColor[randomIndex].click()


    }





}

module.exports = new addNoteByColorScreen();