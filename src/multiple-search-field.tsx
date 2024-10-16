import { Autocomplete, Box, TextField } from "@mui/material";
import { useProgramingLanguages } from "./hooks/use-programing-languages";
import { useGithubRepositories } from "./hooks/use-github-repositories";

export function MultipleSearchField() {
  const langs = useProgramingLanguages();
  const { setLanguages} = useGithubRepositories();

  return (
    <Box>
      <Autocomplete
        disablePortal
        options={langs}
        onChange={(event, newSelectedLangs) => setLanguages(newSelectedLangs.map(x => x.label))}
        multiple
        sx={{ width: 300 }}
        renderInput={(params) => <TextField
          {...params}
          label="Languages"
          fullWidth
          size="small"
        />}
      />
    </Box>
  )
}