import React from "react"
import { ApiService } from "../services/api-service";


export const useProgramingLanguages = () => {
  const [langs, setLangs] = React.useState<string[]>([]);

  React.useEffect(() => {
    ApiService.fetchProgramingLanguages().then(setLangs);

  }, [])

  return  Object.keys(langs).map(x => ({
    id: x,
    label: x,
  }));
} 