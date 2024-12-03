import { useCallback, useContext, useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { budgetContex } from "../context/BudgetContext";

function Form() {
  const [seo] = useState(300);
  const [ads] = useState(400);
  const [web] = useState(500);
  const { budget, setBudget } = useContext(budgetContex);

  const [pages, setPages] = useState(0);
  const [languages, setLanguages] = useState(0);

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
  }, [check, seo, ads, web, pages, languages]);

  const calculateBudget = useCallback(() => {
    let total = 0;
    if (check.seo) {
      total += seo;
    }
    if (check.ads) {
      total += ads;
    }
    if (check.web) {
      total += web + (pages + languages) * 30;
    }
    setBudget(total);
  }, [seo, ads, web, check, pages, languages]);

  return (
    <form action="" className="">
      <ItemCard
        title="Seo"
        inputname="seo"
        price={seo}
        isChecked={check.seo}
        onCheck={() => handleCheck("seo")}
        showInputs={false}
      />
      <ItemCard
        title="Ads"
        inputname="ads"
        price={ads}
        isChecked={check.ads}
        onCheck={() => handleCheck("ads")}
        showInputs={false}
      />
      <ItemCard
        title="Web"
        inputname="web"
        price={web}
        isChecked={check.web}
        onCheck={() => handleCheck("web")}
        showInputs={check.web}
        pages={pages}
        languages={languages}
        onPagesChange={(e) => setPages(Number(e.target.value))}
        onLanguagesChange={(e) => setLanguages(Number(e.target.value))}
      />
      <div className="text-end">Preu supposat: {budget}</div>
    </form>
  );
}

export default Form;
