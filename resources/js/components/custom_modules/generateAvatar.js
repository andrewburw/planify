/* *************************************************************
|
|
|                     AVATAR generate/show file
|
|       *  This is custom module for generating and showing avatar.
|
|      My page: https://andrewburw.github.io/personalpage/
|
|
| **************************************************************/


export default {
    generate: function () {

        let save = [];

        const OPTIONS = {
            figureSize: 20
        }


        for (let a = 1; a < 8; a++) {
            for (let i = 1; i < 14; i++) {
                let rand = Math.random() < 0.5 ? 0 : 1


                if (rand === 1) {
                    save.push({
                        run: true,
                        a: a * OPTIONS.figureSize,
                        b: i * OPTIONS.figureSize,
                        c: OPTIONS.figureSize,
                        d: OPTIONS.figureSize
                    })


                } else {
                    save.push({ run: false })

                }
            }
        }
          return save;
    }

}