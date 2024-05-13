import Link from "next/link";
import MealsGrid from "@/components/meals/mealsGrid";
import classes from "./page.module.css";

export default function Meals() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals created {""}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose and cook your favourite meal</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your recipies</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}
