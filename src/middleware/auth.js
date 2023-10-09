async function authCheck(req, res, next) {
    console.log('auth check');
    next()

}


module.exports = {
    authCheck
}