import { useContext, useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { budgetContex } from "../context/BudgetContext";

function Form() {
  const [seo] = useState(300);
  const [ads] = useState(400);
  const [web] = useState(500);
  const { budget, setBudget } = useContext(budgetContex);

  useEffect(() => {
    setBudget(seo + ads + web);
  }, [seo, ads, web]);

  return (
    <form action="" className="">
      <ItemCard title="Seo" inputname="seo" price={seo} />
      <ItemCard title="Ads" inputname="ads" price={ads} />
      <ItemCard title="Web" inputname="web" price={web} />
      <div className="text-end">Preu supposat: {budget}</div>
    </form>
  );
}

export default Form;
