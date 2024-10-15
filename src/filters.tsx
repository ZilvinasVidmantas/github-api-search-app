import { Button, Divider, IconButton, Paper, Stack, Theme, Typography, useMediaQuery } from "@mui/material";
import { MultipleSearchField } from "./multiple-search-field";
import { DateRangeField } from "./date-range.field";
import { StarsField } from "./stars-field";
import TuneIcon from '@mui/icons-material/Tune';

export function Filters() {
  const isLargeScreen = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

  if(isLargeScreen) {
    return (
      <Paper elevation={4}>
        <Stack sx={{ width: 240, p: 2, gap: 2}}>
          <Typography variant="h6">Filters</Typography>
          <Divider />
          <MultipleSearchField />
          <Divider />
          <DateRangeField />
          <Divider />
          <StarsField />
          <Divider />
          <Button variant="contained">Search</Button>
        </Stack>
      </Paper>
    )
  }

  return <>
    <IconButton sx={{ position: "fixed", bottom: 10, right: 10}}>
      <TuneIcon />
    </IconButton>
  </>
}