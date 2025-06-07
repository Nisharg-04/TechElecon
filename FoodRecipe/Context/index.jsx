import { createContext, useState, useEffect } from "react";
export const GlobalContext = createContext(null);

export default function GolbalState({ children }) {
  const [searchPrams, setsearchPrams] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState([]);
  const [details, setDetails] = useState(null);
  const [fav, setfav] = useState([]);
  // --- Dark mode state ---
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  function toggleDark() {
    setDark((prev) => !prev);
  }

  function addFav(currentRecipe) {
    const exists = fav.some((item) => item.id === currentRecipe.id);
    if (!exists) {
      setfav([...fav, currentRecipe]);
    } else {
      setfav(fav.filter((item) => item.id !== currentRecipe.id));
    }
  }

  function removeFav(id) {
    setfav(fav.filter((item) => item.id !== id));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchPrams}`
    )
      .then((res) => res.json())
      .then((res) => {
        setRecipe(res?.data?.recipes || []);
        setLoading(false);
        setsearchPrams("");
      })
      .catch((error) => {
        setLoading(false);
        setRecipe([]);
        console.log(error);
      });
  };

  // Persist favorites in localStorage
  useEffect(() => {
    const storedFav = localStorage.getItem("favRecipes");
    if (storedFav) setfav(JSON.parse(storedFav));
  }, []);
  useEffect(() => {
    localStorage.setItem("favRecipes", JSON.stringify(fav));
  }, [fav]);

  function clearFav() {
    setfav([]);
  }

  return (
    <GlobalContext.Provider
      value={{
        searchPrams,
        setsearchPrams,
        handleSubmit,
        recipe,
        loading,
        details,
        setDetails,
        addFav,
        removeFav,
        fav,
        clearFav,
        dark,
        toggleDark,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
