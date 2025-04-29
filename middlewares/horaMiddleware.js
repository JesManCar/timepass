const hora = (req, res, next) => {

    const now = new Date();
    const h = now.getHours();
    req.dateType = h;

    next();
}


module.exports = hora;