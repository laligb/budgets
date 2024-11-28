import { useCallback, useContext, useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { budgetContex } from "../context/BudgetContext";

function Form() {
  const [seo] = useState(300);
  const [ads] = useState(400);
  const [web] = useState(500);
  const { budget, setBudget } = useContext(budgetContex);

  const [check, setCheck] = useState({
    seo: false,
    ads: false,
    web: false,
  });

  const handleCheck = (key) => {
    setCheck((states) => ({
      ...states,
      [key]: !states[key],
    }));
  };

  useEffect(() => {
    calculateBudget();
  }, [check, seo, ads, web]);

  const calculateBudget = useCallback(() => {
    let total = 0;
    if (check.seo) {
      total += seo;
    }
    if (check.ads) {
      total += ads;
    }
    if (check.web) {
      total += web;
    }
    setBudget(total);
  }, [seo, ads, web, check]);

  return (
    <form action="" className="">
      <ItemCard
        title="Seo"
        inputname="seo"
        price={seo}
        isChecked={check.seo}
        onCheck={() => handleCheck("seo")}
      />
      <ItemCard
        title="Ads"
        inputname="ads"
        price={ads}
        isChecked={check.ads}
        onCheck={() => handleCheck("ads")}
      />
      <ItemCard
        title="Web"
        inputname="web"
        price={web}
        isChecked={check.web}
        onCheck={() => handleCheck("web")}
      />
      <div className="text-end">Preu supposat: {budget}</div>
    </form>
  );
}

export default Form;
