import { useEffect, useState } from "react";



export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const req = await fetch(url);
        if (!req.ok) {
          throw new Error(req.status.text);
        }

        const data = await req.json();
        setData(data);
        setIsPending(false);
      } catch (error) {
        setError(err.message);
        console.log(err.message);
        setIsPending(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, isPending, error };
}
