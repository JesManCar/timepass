const validarHora = (req, res, next) => {
    res.locals.hourOk = true;
    if(req.dateType < 12) {
        res.locals.hourOk = false;
        res.locals.msg = "Aun no son las 12 de la Mañana";
        return res.redirect('/?msg=' + encodeURIComponent(res.locals.msg));
    }
    next();
}

module.exports = validarHora;