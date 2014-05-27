/*
 * GET home page.
 */

exports.index = function (req, res) {
    res.render('views/index');
};

exports.partials = function (req, res) {
    var name = req.params.name;
    var module = req.params.module;
    res.render('modules/'  + module + '/partials/' + name);
};