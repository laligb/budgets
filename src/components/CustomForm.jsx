import { useCallback, useContext, useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { budgetContex } from "../context/BudgetContext";

function CustomForm() {
  const [seo] = useState(300);
  const [ads] = useState(400);
  const [web] = useState(500);
  const {
    budget,
    setBudget,
    check,
    setCheck,
    pages,
    setPages,
    languages,
    setLanguages,
  } = useContext(budgetContex);

  const handleCheck = (key) => {
    setCheck((states) => ({
      ...states,
      [key]: !states[key],
    }));
  };

  const pagesPlus = () => setPages((p) => p + 1);
  const pagesMinus = () => setPages((p) => Math.max(0, p - 1));
  const lanPlus = () => setLanguages((p) => p + 1);
  const lanMinus = () => setLanguages((p) => Math.max(0, p - 1));

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
        pPlus={pagesPlus}
        pMinus={pagesMinus}
        lPlus={lanPlus}
        lMinus={lanMinus}
      />
      <div className="text-end">Preu supposat: {budget}</div>
    </form>
  );
}

export default CustomForm;