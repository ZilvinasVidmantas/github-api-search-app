import { GithubRepository } from "../types/github-repository";

type FetchGithubRepositoriesResponse = {
  items: GithubRepository[];
}

const fetchGithubRepositories = async (langs: string[]) => {
  const response = await fetch(`https://api.github.com/search/repositories?q=language:${langs.join(',')}`)
  const repositories = await response.json() as FetchGithubRepositoriesResponse;

  return repositories;
}


const fetchProgramingLanguages = async () => {

  const response = await fetch(`https://api.github.com/repos/microsoft/vscode/languages`)
  const languages = await response.json();

  return languages;
}
export const ApiService = { 
  fetchGithubRepositories,
  fetchProgramingLanguages,
}