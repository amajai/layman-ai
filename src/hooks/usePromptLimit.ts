import { useState, useEffect } from "react";

const usePromptLimit = (limit: number) => {
  const [promptCount, setPromptCount] = useState<number>(0);
  const [isLimitReached, setIsLimitReached] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPromptCount = () => {
      try {
        const today = new Date().toISOString().split("T")[0];
        const storedData = JSON.parse(
          localStorage.getItem("laymanPromptUsage") || "{}"
        );

        if (storedData.date !== today) {
          localStorage.setItem(
            "laymanPromptUsage",
            JSON.stringify({ date: today, count: 0 })
          );
          setError(null);
          setIsLimitReached(false);
          setPromptCount(0);
        } else {
          setPromptCount(storedData.count);
          if (limit == storedData.count) setIsLimitReached(true);
        }
      } catch (err) {
        setError("Failed to get prompt count");
      }
    };

    fetchPromptCount();
  }, []);

  const incrementPromptCount = () => {
    try {
      const today = new Date().toISOString().split("T")[0];
      const storedData = JSON.parse(
        localStorage.getItem("laymanPromptUsage") || "{}"
      );

      if (storedData.date !== today) {
        localStorage.setItem(
          "laymanPromptUsage",
          JSON.stringify({ date: today, count: 1 })
        );
        setPromptCount(1);
        setIsLimitReached(false);
        setError(null);
      } else {
        const newCount = storedData.count + 1;
        if (newCount <= limit) {
          localStorage.setItem(
            "laymanPromptUsage",
            JSON.stringify({ date: today, count: newCount })
          );
          setIsLimitReached(false);
          setError(null);
          setPromptCount(newCount);
          if (limit == newCount) 
            setIsLimitReached(true);
        } else {
          setIsLimitReached(true);
          setError("You have reached the maximum usage limit for today.");
        }
      }
    } catch (err) {
      setError("Failed to increment prompt count");
    }
  };

  return { promptCount, incrementPromptCount, error, isLimitReached };
};

export default usePromptLimit;
