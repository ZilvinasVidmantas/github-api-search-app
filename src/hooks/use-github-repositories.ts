import { create } from 'zustand'
import { ApiService } from '../services/api-service';
import { GithubRepository } from '../types/github-repository';

type UseGithubRepositories = {
  repositories: GithubRepository[],
  languages: string[],
  fetchRepositories: (repositories: string[]) => Promise<void>
  setLanguages: (languagesSearch: string[]) => void,
}

export const useGithubRepositories = create<UseGithubRepositories>((set) => ({
  repositories: [],
  languages: [],
  fetchRepositories: async (searchLangs: string[]) =>  {
    const repositories = await ApiService.fetchGithubRepositories(searchLangs);
    set({ repositories: repositories.items });
  },
  setLanguages: (languages: string[]) => {
    set({ languages });
  }
}))