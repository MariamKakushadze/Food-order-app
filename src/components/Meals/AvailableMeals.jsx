import meals from "../../dummy-meals";
import Card from "../UI/Card";
import MealItem from "./MealItem";

const AvailableMeals = () => {
  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className="w-[90%] max-w-[60rem] my-8 mx-auto">
      <Card>
        <ul className="m-0 p-0 list-none">{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
