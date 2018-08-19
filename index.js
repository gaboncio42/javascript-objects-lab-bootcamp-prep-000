var recipes = {
  breakfast: 'italian',
  lunch: 'spanish',
};

function updateObjectWithKeyAndValue(recipes, dinner, french) {
  Object.assing({},recipes,{dinner:'french'});
  return recipes;
}