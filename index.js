var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var obj = {prop: 1};
  return Object.assign({}, obj, {['prop']:'2'});
}