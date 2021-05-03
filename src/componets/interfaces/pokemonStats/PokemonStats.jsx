import { Paper, Box, Typography } from "@material-ui/core";
import PokeStats from "./Style";

const PokemonStats = ({ attributes }) => {
  const classes = PokeStats();
  return (
    <Paper className={classes.root}>
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
