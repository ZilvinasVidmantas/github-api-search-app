import { Box, Stack } from "@mui/material";
import { Filters } from "./filters";
import { SearchDetails } from "./search-details";
import { RepositoryGrid } from "./repository-grid";

export function App() {

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', alignItems: 'stretch', p: 2, gap: 2  }}>
      <Filters />
      <Stack sx={{  flexGrow: 1, gap: 2}}>
        <SearchDetails />
        <RepositoryGrid />
      </Stack>
    </Box>
  )
}