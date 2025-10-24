import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
interface lastSearch {
  hotel?: boolean;
}
export default function LastSearch({ hotel = false }: lastSearch) {
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

      {hotel ? (
        <Stack className="flex! flex-row! gap-6! mt-5 reveal">
          <Button
            className=" text-slate-400! py-3! px-3! pl-8! rounded-xl! text-base! flex items-start! "
            variant="outlined"
            startIcon={<DeleteIcon />}
          >
            <Box className="flex flex-col items-start! gap-3">
              <Typography className="text-sm! text-slate-500">
                هتل آپارتمان های کیش
              </Typography>
              <Typography className="text-xs!">
                {" "}
                از 1404/01/20 تا 1404/01/22{" "}
              </Typography>
            </Box>
          </Button>
          <Button
            className=" text-slate-400! py-3! px-3! pl-8! rounded-xl! text-base! flex items-start! "
            variant="outlined"
            startIcon={<DeleteIcon />}
          >
            <Box className="flex flex-col items-start! gap-3">
              {" "}
              <Typography className="text-sm! text-slate-500">
                {" "}
                هتل 5 ستاره{" "}
              </Typography>
              <Typography className="text-xs!">
                {" "}
                از 1404/01/20 تا 1404/01/22{" "}
              </Typography>
            </Box>
          </Button>
          <Button
            className=" text-slate-400! py-3! px-3! pl-8! rounded-xl! text-base! flex items-start! "
            variant="outlined"
            startIcon={<DeleteIcon />}
          >
            <Box className="flex flex-col items-start! gap-3">
              {" "}
              <Typography className="text-sm! text-slate-500">
                هتل 4 ستاره
              </Typography>
              <Typography className="text-xs!">
                {" "}
                از 1404/01/20 تا 1404/01/22{" "}
              </Typography>
            </Box>
          </Button>
        </Stack>
      ) : (
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
      )}
    </Grid>
  );
}
