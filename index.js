var recipes = {
  breakfast: 'italian',
  lunch: 'spanish',
};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign(recipes, {dinner: 'french'});
}