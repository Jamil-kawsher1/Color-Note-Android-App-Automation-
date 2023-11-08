describe("delete Note", async () => {

    it('Delete random Note based on First Index', async () => {


        //Skiping Welcome Screen

        await $("//android.widget.Button[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip']").click()
        await $("android.widget.TextView").click()
    })

})