import { Paper, Box, Typography } from "@material-ui/core";
import pokeStats from "./Style";

const PokemonStats = ({ attributes }) => {
  const stats = pokeStats();
  return (
    <Paper>
      {attributes.map((item) => (
        <Box>
          <Typography>{item.title}</Typography>
          <Typography>{item.attribute}</Typography>
        </Box>
      ))}
    </Paper>
  );
};

export default PokemonStats;
