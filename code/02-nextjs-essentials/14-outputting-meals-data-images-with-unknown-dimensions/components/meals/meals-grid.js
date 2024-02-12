import MealItem from './meal-item';
import classes from './meals-grid.module.css';

export default function MealsGrid({ meals }) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} /> // with this syntax with spread we just pass the all property rom meals
        </li>
      ))}
    </ul>
  );
}
