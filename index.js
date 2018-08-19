var recipes = {
  breakfast: 'italian',
  lunch: 'spanish',
};

function updateObjectWithKeyAndValue(recipes, dinner, french){
  return Object.assign({},recipes, {dinner: "french" );
}