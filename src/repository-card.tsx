import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Paper, Typography } from "@mui/material";

export function RepositoryCard() {
  return <Paper>
    <Card>
      <CardHeader
        avatar={<Avatar />}
        title="Repository Name"
        subheader="Owner Name"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Description
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  </Paper>
}