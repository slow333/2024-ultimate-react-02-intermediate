import uuid from "react-uuid";
import {useEffect, useState} from "react";

function useFetch(url, query = undefined) {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [isPending, setIsPending] = useState(true)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect( () => {
      setTimeout(async () => {
        try {
          const res = await fetch(url);
          const data = await res.json();
          if (!data) throw new Error(`데이터 받기에 실패...🤩🤩🤩 ${data.message.text}`);

          if (query) {
            setData(data.slips);
            setError('');
            setIsPending(false)
          } else {
            setData(data => [...data, {id: uuid(), content: data?.slip?.advice}]);
            setError('');
            setIsPending(false)
          }
        } catch (error) {
          setError(error.message)
        }
      }, 1000)
    }, [url])
  return {data, error, isPending}
}

export default useFetch