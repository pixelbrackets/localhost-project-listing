var options = {
  valueNames: [ 'name' ]
};

var projectList = new List('projects', options);
projectList.sort('name', {order: 'asc'});
