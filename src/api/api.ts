enum HTTPMethods {
  Post = "POST",
}

export const login = async (name: string, email: string) => {
  return apiCall("/prod/fake-auth", { name, email });
};

export const apiCall = async (
  path: string,
  data: Record<string, any>,
  method: HTTPMethods = HTTPMethods.Post
) => {
  return fetch(`${process.env.VITE_BACKEND_URL}${path}`, {
    body: JSON.stringify(data),
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    method,
  });
};
