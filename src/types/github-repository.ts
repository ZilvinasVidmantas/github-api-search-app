export type GithubRepository = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}