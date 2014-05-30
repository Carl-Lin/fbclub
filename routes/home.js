
/*
 * GET home page.
 */

//fb login
module.exports = {
  '/': map,
};

function map(req, res){
  res.render('map');
};

