
/* GET homepage */
const index = (req, res) => {
res.render('index', { title: 'LOST AND FOUND' });
};
module.exports = {
index
};