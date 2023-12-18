class randomNumberAndOthers {


    async randomNumber() {

        return Math.round(Math.random() * 10000)


    }


    // async randomLoopCountWithNote (num)  {


    //     for (let i = 0; i <= num; i++) {

    //         let currentRand = RandomNumberGenarator.randomNumber()

    //         let noteTitle = `randomTitle ${currentRand}`;

    //         let noteDescription = ` This a random Description with Random title ${currentRand}`;


    //         await addNote


    //        addNote






    //     }
    // }


}

module.exports = new randomNumberAndOthers()