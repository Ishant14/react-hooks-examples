import { useEffect } from "react";

const useFetch = url => {
  useEffect(() => {
    fetch(url)
      .then(x => x.json())
      .then(value => {
        console.log(value);
      });
  }, [url]);
};

export default useFetch;
