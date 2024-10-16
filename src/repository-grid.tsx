
import Grid from '@mui/material/Grid2';
import { RepositoryCard } from "./repository-card";
import { useGithubRepositories } from './hooks/use-github-repositories';

export function RepositoryGrid() {
  const { repositories } = useGithubRepositories();

  return (
    <Grid container spacing={2}>
      {repositories.map((repository) => (
        <Grid key={repository.id} size={{ xs: 12, sm: 6, lg: 4, xl: 3 }} display="inline-grid">
          <RepositoryCard {...repository}/>
        </Grid>
      ))}
    </Grid >
  )
}