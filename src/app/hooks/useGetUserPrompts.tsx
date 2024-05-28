const useGetUserPrompts = async() => {
  const response = await fetch('/api/layman-prompt/get');
  const data = await response.json();
  return data
};

export default useGetUserPrompts;
