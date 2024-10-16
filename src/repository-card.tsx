import { Avatar, Button, Card, CardActions, Stack, CardContent, CardHeader, Typography } from "@mui/material";
import { GithubRepository } from "./types/github-repository";


type RepositoryCardProps = GithubRepository;

export function RepositoryCard({
  name,
  description,
  html_url,
  owner: {
    login,
    avatar_url
  },
}: RepositoryCardProps) {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardHeader
        avatar={<Avatar src={avatar_url} />}
        title={name}
        titleTypographyProps={{
          title: name,
          sx: {
            display: '-webkit-box',
            'WebkitLineClamp': 1,
            'WebkitBoxOrien': 'vertical',
            overflow: 'hidden',
          }
        }}
        subheader={login}
      />
      <Stack sx={{ justifyContent: 'space-between', flexGrow: 1 }}>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" component="a" href={html_url} target="blank">Learn More</Button>
        </CardActions>
      </Stack>
    </Card>
  );
}