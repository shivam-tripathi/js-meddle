import React from 'react';
import {render} from 'react-dom';
import {Table, Grid, Panel, PageHeader} from 'react-bootstrap';
import '../css/bootstrap-theme.min.css';
import '../css/bootstrap.min.css';

window.React = React;

var data=[
    {
        "name": "Baked Salmon",
        "ingredients": [
            { "name": "Salmon", "amount": 1, "measurement": "l lb" },
            { "name": "Pine Nuts", "amount": 1, "measurement": "cup" },
            { "name": "Butter Lettuce", "amount": 2, "measurement": "cups" },
            { "name": "Yellow Squash", "amount": 1, "measurement": "med" },
            { "name": "Olive Oil", "amount": 0.5, "measurement": "cup" },
            { "name": "Garlic", "amount": 3, "measurement": "cloves" }
        ],
        "steps": [
            "Preheat the oven to 350 degrees.",
            "Spread the olive oil around a glass baking dish.",
            "Add the salmon, garlic, and pine nuts to the dish.",
            "Bake for 15 minutes.",
            "Add the yellow squash and put back in the oven for 30 mins.",
            "Remove from oven and let cool for 15 minutes. Add the lettuce and serve."
        ]
    },
    {
        "name": "Fish Tacos",
        "ingredients": [
            { "name": "Whitefish", "amount": 1, "measurement": "l lb" },
            { "name": "Cheese", "amount": 1, "measurement": "cup" },
            { "name": "Iceberg Lettuce", "amount": 2, "measurement": "cups" },
            { "name": "Tomatoes", "amount": 2, "measurement": "large"},
            { "name": "Tortillas", "amount": 3, "measurement": "med" }
        ],
        "steps": [
            "Cook the fish on the grill until hot.",
            "Place the fish on the 3 tortillas.",
            "Top them with lettuce, tomatoes, and cheese."
        ]
    }
];

const IngredientList = (props) => <Panel bsStyle="success">
    <Panel.Heading>
    <Panel.Title componentClass="h2">{props.dish.name}</Panel.Title>
    </Panel.Heading>
    <Panel.Body>
        <h3>Ingredients</h3>
        <Table striped bordered condensed hover responsive>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {props.dish.ingredients.map(
                    ({name, amount, measurement}, i) =>
                        <tr key={i}>
                            <td>{name}</td>
                            <td>{`${amount} ${measurement}`}</td>
                        </tr>
                )}
            </tbody>
        </Table>
        <h3>Steps</h3>
        <ol>
            {props.dish.steps.map((step, i) =>
                <li key={i}>{step}</li>
            )}
        </ol>
    </Panel.Body>
</Panel>

const Dishes = (props) => <Grid>
    <PageHeader> Menu </PageHeader>
    {props.data.map((dish, key) => <IngredientList key={key} dish={dish}/>)}
</Grid>

render(
    <Dishes data={data} />,
    document.getElementById('react-container')
);