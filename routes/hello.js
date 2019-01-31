
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', {
  	'name': '',
  });
};
exports.viewProject = function(req, res) { 
  // controller code goes here 
  res.render('project');
};
