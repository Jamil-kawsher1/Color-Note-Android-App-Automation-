class deleteNoteScreen{

    get addBtn() {

        return $("~Add");

    }

    get noteByindex(){


        return   $$("//android.widget.TextView[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/title']")
    }

    get moreBtn(){


    return $("~More")
}


get deleteNoteBtn(){


    return $('//android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/text" and @text="Delete"]');
}

get noteDeleteCofirmBtn(){


    return $('//android.widget.Button[@resource-id="android:id/button1"]');
}



async deleteSpecificNote(){


    
}


}

module.exports=new deleteNoteScreen();