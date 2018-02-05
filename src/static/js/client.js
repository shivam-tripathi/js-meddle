var createElementsfromList = (arr, field) => arr.map(
    (val, i) => React.createElement(field, {'key': i}, val)
);

const Ingredients = React.createFactory(({dish}) => {
    return React.createElement('div', {'id': "dish"},
        React.DOM.h1(null, "SALMON"),
        React.DOM.ul(null, createElementsfromList(dish.salmon, 'li'))
    );
});

class Dishes {
    constructor() {}
    render () {
    }
}

let dish = {
  'salmon' : [
    "1 lb Salmon",
    "1 cup Pine Nuts",
    "2 cups Butter Lettuce",
    "1 Yellow Squash",
    "1/2 cup Olive Oil",
    "3 cloves of Garlic"
  ]
}

ReactDOM.render(
    Ingredients({dish}),
    document.getElementById('react-container')
);