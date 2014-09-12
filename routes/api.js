/*
 * Serve JSON to our AngularJS client
 */

exports.name = function (req, res) {
  res.json({
    name: 'Bob'
  });
};

exports.register = function (req, res) {
    res.json(req.body.data);
};