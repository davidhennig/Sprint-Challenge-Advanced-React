import useLocalStorage from "./useLocalStorage";
import { useEffect } from "react";

const useDarkMode = (key, initialValues, cb) => {
  const [values, setValues] = useLocalStorage(key, initialValues);

  useEffect(() => {
    if (values === true) {
      const body = document.getElementsByTagName("body");
      body[0].classList.toggle("dark-mode");
    }
  }, [values]);

  return [values, setValues];
};

export default useDarkMode;
