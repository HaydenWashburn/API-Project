const logger = async (req, res, next) => {
    const time = new Date().toLocaleString();
    const { url, method } = req;

    const values = {
        date_time: time,
        url: url,
        method: method
    }

    try{
        const queryres = await query(`INSERT INTO Logs ?;`, [values] )
        if (queryres){
            console.log("Affected Rows:", queryres.affectedRows);
        }
        next();
    }
    catch(err){
        console.error(err);
        res.end(error)
    }
}

module.exports = logger;