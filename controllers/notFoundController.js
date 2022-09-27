const { render } = require("express/lib/response");

module.exports = (req, res) => {
    res.status(404);
    res.render('notFound', {
        title: 'Not Found'
    });
}