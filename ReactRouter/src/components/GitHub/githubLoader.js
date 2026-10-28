export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/sparsh-goyal01");

  if (!response.ok) {
    throw new Error("Unable to load GitHub profile");
  }

  return response.json();
};
