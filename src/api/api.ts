enum HTTPMethods {
  Post = "POST",
}

export const login = async (name: string, email: string) => {
  const result = await apiCall("/prod/fake-auth", { name, email });
  return result;
};

export const apiCall = async (
  path: string,
  data: Record<string, any>,
  method: HTTPMethods = HTTPMethods.Post
) => {
  const result = await fetch(`${import.meta.env.VITE_BACKEND_URL}${path}`, {
    body: JSON.stringify(data),
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    method,
  });
  return result;
};
