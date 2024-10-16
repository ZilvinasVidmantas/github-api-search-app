import { Button, Divider, Paper, Stack, Theme, Typography, useMediaQuery, SwipeableDrawer, Box } from "@mui/material";
import { MultipleSearchField } from "./multiple-search-field";
import { DateRangeField } from "./date-range.field";
import { StarsField } from "./stars-field";
import TuneIcon from '@mui/icons-material/Tune';
import React from "react";
import { useGithubRepositories } from "./hooks/use-github-repositories";

export function Filters() {
  const isLargeScreen = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
  const [open, setOpen] = React.useState(false);
  const {fetchRepositories, languages} = useGithubRepositories();

  if(isLargeScreen) {
    return (
      <Paper elevation={4}>
        <Stack sx={{ width: 340, p: 2, gap: 2}}>
          <Typography variant="h6">Filters</Typography>
          <Divider />
          <MultipleSearchField />
          <Divider />
          <DateRangeField />
          <Divider />
          <StarsField />
          <Divider />
          <Button variant="contained" onClick={() => fetchRepositories(languages)}>Search</Button>
        </Stack>
      </Paper>
    )
  }

  return <>
    <Button sx={{ position: "fixed", bottom: 10, right: 10, minWidth: 0, p: 1 }} onClick={() => setOpen(true)} variant="contained">
      <TuneIcon />
    </Button>
    <SwipeableDrawer
      anchor="bottom"
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Stack sx={{ p: 2, gap: 2, height: '100vh', width: '100vw'}}>
        <Typography variant="h6">Filters</Typography>
        <Divider />
        <MultipleSearchField />
        <Divider />
        <DateRangeField />
        <Divider />
        <StarsField />
        <Divider />
        <Button variant="contained" onClick={() => fetchRepositories(languages)}>Search</Button>
        <Box sx={{ flexGrow: 1,  display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end'}}>
          <Button variant="contained" color="secondary" onClick={() => setOpen(false)}>Close</Button>
        </Box>
      </Stack>
    </SwipeableDrawer>
  </>
}