import { Button, Divider, Grid, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
export default function LastSearch() {
  return (
    <Grid container mt={2}>
      <Stack className="flex! flex-row! justify-between! w-full! items-center!">
        <Typography className="reveal text-lg! font-medium! reveal-down">
          آخرین جست و جو های من (2)
        </Typography>
        <Button startIcon={<DeleteIcon className="text-slate-400!" />}>
          <Typography className="reveal text-slate-400! reveal-down">
            حذف تاریخچه
          </Typography>
        </Button>
      </Stack>
      <Divider
        className="w-full"
        orientation="horizontal"
        variant="fullWidth"
      />

      <Stack className="flex! flex-row! gap-6! mt-5 reveal">
        <Button
          className=" text-slate-400! py-2! px-3! rounded-xl! text-base!"
          variant="outlined"
          startIcon={<DeleteIcon />}
        >
          کشتی تفریحی کارینا کیش
        </Button>
        <Button
          className=" text-slate-400! py-2! px-3! rounded-xl! text-base! "
          variant="outlined"
          startIcon={<DeleteIcon />}
        >
          کشتی امیرکبیر کیش
        </Button>
      </Stack>
    </Grid>
  );
}
