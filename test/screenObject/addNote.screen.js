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


}

module.exports = new addNoteScrren();