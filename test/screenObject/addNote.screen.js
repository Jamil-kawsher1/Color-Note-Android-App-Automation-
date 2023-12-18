// import RandomNumberGenarator from "../utils/RandomNumberGenarator";
// import addNoteByColorScreen from "./addNoteByColor.screen";
// const RandomNumberGenarator = require('../utils/RandomNumberGenarator');

const RandomNumberGenarator = require("../utils/RandomNumberGenarator");
const addNoteByColorScreen = require("./addNoteByColor.screen");


// const addNoteByColorScreen = require("./addNoteByColor.screen")
// RandomNumberGenarator
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


    async addNoteCustomNumber(noteCount, type, colorName) {

        let loopRunner = async () => {
            for (let i = 0; i <= noteCount; i++) {

                let currentRand = RandomNumberGenarator.randomNumber()

                let noteTitle = `randomTitle ${currentRand}`;

                let noteDescription = ` This a random Description with Random title ${currentRand}`;

                await this.addNote(noteTitle, noteDescription);






            }

        }

        if (type == 'randomColorNote') {


            await addNoteByColorScreen.selectRandomColorForNotes()
            // for (let i = 0; i <= noteCount; i++) {

            //     let currentRand = RandomNumberGenarator.randomNumber()

            //     let noteTitle = `randomTitle ${currentRand}`;

            //     let noteDescription = ` This a random Description with Random title ${currentRand}`;


            //     await this.addNote(noteTitle, noteDescription);






            // }

            await loopRunner();

        } else if (type == 'customColorNote') {
            //Available Color as Parameter

            /*
            1. red
            2. orange
            3. yellow
            4. green
            5. sky blue
            6. purple
            7. black
            8. ash
            9. white
            
            */
            await addNoteByColorScreen.pickNoteColor(colorName)
            // for (let i = 0; i <= noteCount; i++) {

            //     let currentRand = RandomNumberGenarator.randomNumber()

            //     let noteTitle = `randomTitle ${currentRand}`;

            //     let noteDescription = ` This a random Description with Random title ${currentRand}`;


            //     await this.addNote(noteTitle, noteDescription);






            // }

            await loopRunner()
        }
        else if (type == 'normalNote') {

            await loopRunner()
        }
        else {
            console.log("invalid Color Method Selection Available Perameter 1.randomColorNote 2.customColorNote 3.normalNote")
            return 0;
        }





    }
}

module.exports = new addNoteScrren()