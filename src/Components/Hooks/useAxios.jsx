// hooks/useApi.js
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useAxios = (
  initialUrl = "",
  initialMethod = "GET",
  initialData = null,
  initialOptions = {}
) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(initialUrl);
  const [method, setMethod] = useState(initialMethod);
  const [body, setBody] = useState(initialData);
  const [options, setOptions] = useState(initialOptions);

  const sendRequest = useCallback(
    async (
      requestUrl,
      requestMethod = "GET",
      requestBody = null,
      requestOptions = {}
    ) => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios({
          method: requestMethod,
          url: requestUrl,
          data: requestBody,
          ...requestOptions,
        });
        setData(response.data);
        toast.success(response.data);
        // console.log(response.data);
      } catch (err) {
        setError(err);
        toast.error(err.message);
        // alert(err.message);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    if (method === "GET" && url) {
      sendRequest(url, method, body, options);
    }
  }, [url, method, body, options, sendRequest]);

  const triggerRequest = (
    requestUrl,
    requestMethod,
    requestBody,
    requestOptions
  ) => {
    setUrl(requestUrl);
    setMethod(requestMethod);
    setBody(requestBody);
    setOptions(requestOptions);
    sendRequest(requestUrl, requestMethod, requestBody, requestOptions);
  };

  return { data, loading, error, sendRequest: triggerRequest };
};

export default useAxios;
