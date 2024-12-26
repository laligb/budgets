import { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { budgetContext } from "../context/BudgetContext";

function BudgetShareURL() {
  const {
    check,
    setCheck,
    pages,
    setPages,
    languages,
    setLanguages,
    isAnnual,
    setIsAnnual,
  } = useContext(budgetContext);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const params = {
      seo: check.seo,
      ads: check.ads,
      web: check.web,
      pages: pages.toString(),
      languages: languages.toString(),
      isAnnual: isAnnual.toString(),
    };
    setSearchParams(params);
  }, [check, pages, languages, isAnnual, setSearchParams]);

  useEffect(() => {
    setCheck({
      seo: searchParams.get("seo") === "true",
      ads: searchParams.get("ads") === "true",
      web: searchParams.get("web") === "true",
    });
    setPages(parseInt(searchParams.get("pages")) || 0);
    setLanguages(parseInt(searchParams.get("languages")) || 0);
    setIsAnnual(searchParams.get("isAnnual") === "true");
  }, []);

  return null;
}

export default BudgetShareURL;
