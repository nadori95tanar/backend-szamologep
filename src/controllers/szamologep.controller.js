/* POST kérést kezelő kontroller:
 * Összeadja a POST kérés body-jában küldött szam1 és szam2 paramétereket,
 * majd válaszban megküldi az eredményt.
 *  - Ha nincs megadva a szam1 és szam2 adat, akkor 400-as státuszkód mellett
 *    elküldi a "Nincs megadva operandus!" hibaüzenetet.
 */
function osszeadPostController(req, res) {
    if(req.body.szam1 === undefined) {
        res.status(400);
        res.json({
            message: "Nincs megadva operandus!"
        });
        return;
    }
    let szam1 = parseFloat(req.body.szam1);

    if(req.body.szam2 === undefined) {
        res.status(400);
        res.json({
            message: "Nincs megadva operandus!"
        });
        return;
    }
    let szam2 = parseFloat(req.body.szam2);

    res.status(200);
    res.json({
        result: szam1 + szam2
    });
}

/* POST kérést kezelő kontroller:
 * Kivonja a POST kérés body-jában küldött szam1 és szam2 paramétereket egymásból
 * (a nagyobb számból a kisebbet), majd válaszban megküldi az eredményt.
 *  - Ha nincs megadva a szam1 és szam2 adat, akkor 400-as státuszkód mellett
 *    elküldi a "Nincs megadva operandus!" hibaüzenetet.
 */
function kivonPostController(req, res) {
    if(req.body.szam1 === undefined) {
        res.status(400);
        res.json({
            message: "Nincs megadva operandus!"
        });
        return;
    }
    let szam1 = parseFloat(req.body.szam1);

    if(req.body.szam2 === undefined) {
        res.status(400);
        res.json({
            message: "Nincs megadva operandus!"
        });
        return;
    }
    let szam2 = parseFloat(req.body.szam2);

    res.status(200);
    res.json({
        result: Math.max(szam1, szam2) - Math.min(szam1, szam2)
    });
}

/* POST kérést kezelő kontroller:
 * Összeszorozza a POST kérés body-jában küldött szam1 és szam2 paramétereket,
 * majd válaszban megküldi az eredményt.
 *  - Ha nincs megadva a szam1 és szam2 adat, akkor 400-as státuszkód mellett
 *    elküldi a "Nincs megadva operandus!" hibaüzenetet.
 */
function szorozPostController(req, res) {
    if(req.body.szam1 === undefined) {
        res.status(400);
        res.json({
            message: "Nincs megadva operandus!"
        });
        return;
    }
    let szam1 = parseFloat(req.body.szam1);

    if(req.body.szam2 === undefined) {
        res.status(400);
        res.json({
            message: "Nincs megadva operandus!"
        });
        return;
    }
    let szam2 = parseFloat(req.body.szam2);

    res.status(200);
    res.json({
        result: szam1 * szam2
    });
}

/* POST kérést kezelő kontroller:
 * Elosztja egymással a POST kérés body-jában küldött szam1 és szam2 paramétereket,
 * majd válaszban megküldi az eredményt.
 *  - Ha nincs megadva a szam1 és szam2 adat, akkor 400-as státuszkód mellett
 *    elküldi a "Nincs megadva operandus!" hibaüzenetet.
 *  - Ha a szam2 paraméter nulla, akkor 400-as státuszkód kíséretében elküldi
 *    a "Nem lehet 0-val osztani!" hibaüzenetet.
 */
function osztasPostController(req, res) {
    if(req.body.szam1 === undefined) {
        res.status(400);
        res.json({
            message: "Nincs megadva operandus!"
        });
        return;
    }
    let szam1 = parseFloat(req.body.szam1);

    if(req.body.szam2 === undefined) {
        res.status(400);
        res.json({
            message: "Nincs megadva operandus!"
        });
        return;
    }
    let szam2 = parseFloat(req.body.szam2);

    if(szam2 === 0) {
        res.status(400);
        res.json({
            message: "Nem lehet 0-val osztani!"
        });
        return;
    }

    res.status(200);
    res.json({
        result: szam1 / szam2
    });
}

/* POST kérést kezelő kontroller:
 * Elvégzi az URL paraméterként megadott műveletet a POST kérés body-jában küldött
 * szam1 és szam2 paraméterekkel, majd válaszban megküldi az eredményt.
 *  - Ha nincs megadva a szam1 és szam2 adat, akkor 400-as státuszkód mellett
 *    elküldi a "Nincs megadva operandus!" hibaüzenetet.
 *  - Ha a szam2 paraméter nulla, akkor 400-as státuszkód kíséretében elküldi
 *    a "Nem lehet 0-val osztani!" hibaüzenetet.
 *  - Ha nem megfelelő műveleti jel lett megadva (+, -, *, / egyike!), akkor
 *    400-as státuszkód kíséretében elküldi a "Nincs ilyen matematikai művelet!"
 *    hibaüzenetet.
 */
function muveletPostController(req, res) {
    let muvelet = req.params.muveletiJel;
    switch(muvelet) {
        case "+":
            osszeadPostController(req, res);
            break;
        case "-":
            kivonPostController(req, res);
            break;
        case "*":
            szorozPostController(req, res);
            break;
        case "/":
            szorozPostController(req, res);
            break;
        default:
            res.status(400);
            res.json({
                message: "Nincs ilyen matematikai művelet!"
            });
            return;
    }
}

module.exports = {
    osszeadPostController,
    kivonPostController,
    szorozPostController,
    osztasPostController,
    muveletPostController
};