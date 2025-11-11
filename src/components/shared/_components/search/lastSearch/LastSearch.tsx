import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ReusableSwiper from "@/components/shared/reusableSwiper";

interface SearchItem {
  title: string;
  date?: string; // optional (for hotels)
}

interface LastSearchProps {
  hotel?: boolean;
  data?: SearchItem[];
}

export default function LastSearch({ hotel = false, data = [] }: LastSearchProps) {
  return (
    <Grid container className="md:mt-8! mt-4!">
      {/* Header */}
      <Stack className="flex! flex-row! justify-between! w-full! items-center!">
        <Stack className="flex-row! gap-1!">
          <Typography className="reveal text-lg! font-medium! reveal-down">
            آخرین جست و جو های من
          </Typography>
          <Typography className="reveal text-lg! font-medium! reveal-down hidden! md:block!">
            ({data.length})
          </Typography>
        </Stack>

        <Button startIcon={<DeleteIcon className="text-slate-400!" />} className="hidden! md:block!">
          <Typography className="reveal text-slate-400! reveal-down">حذف تاریخچه</Typography>
        </Button>
      </Stack>

      <Divider className="w-full hidden! md:block!" orientation="horizontal" variant="fullWidth" />

      {/* Dynamic Data Rendering */}
      <Stack className="md:flex! md:flex-row! md:gap-6! gap-2! mt-5 reveal hidden! mb-5!">
        {data.map((item, index) => (
          <Button
            key={index}
            className={
              hotel
                ? " text-slate-400! p-2! md:py-3! md:px-3! md:pl-8! rounded-xl! text-base! flex items-start!"
                : " text-slate-500! py-3! md:py-2! md:px-3! px-2! md:rounded-xl! rounded-lg! md:text-base! text-sm!"
            }
            variant="outlined"
            startIcon={<DeleteIcon />}
          >
            {hotel ? (
              <Box className="flex flex-col items-start! gap-3">
                <Typography className="text-sm! text-slate-500">{item.title}</Typography>
                {item.date && (
                  <Typography className="md:text-xs! text-[10px]!">{item.date}</Typography>
                )}
              </Box>
            ) : (
              item.title
            )}
          </Button>
        ))}
      </Stack>



      <Box
        sx={{
          maxWidth: "100%",
          height: "fit",
          mx: "auto",
          // pb: 4,
          display: "flex",
          flexDirection: "row",
          borderRadius: 2,
          marginTop: { xs: 2, md: 0 },
        }}
        className="reveal-down md:hidden!"
      >
        <ReusableSwiper slidePerViewXs={1.8} slideperviewMd={1.7} slidePerviewLg={5} spaceBetween={0} pagination={true} dots={false}>
          {data.map((item, index) => (
            <Button
              key={index}
              className={
                hotel
                  ? " text-slate-400! p-2! md:py-3! md:px-3! md:pl-8! rounded-xl! text-base! flex items-start! min-w-[200px]! max-w-[200px]!"
                  : " text-slate-500! py-2! md:px-3! md:rounded-xl! rounded-lg! md:text-base! text-sm! min-w-[200px]! max-w-[200px]!"
              }
              variant="outlined"
              startIcon={<DeleteIcon />}
            >
              {hotel ? (
                <Box className="flex flex-col items-start! gap-2!">
                  <Typography className="text-sm! text-slate-500">{item.title}</Typography>
                  {item.date && (
                    <Typography className="md:text-xs! text-[10px]!">{item.date}</Typography>
                  )}
                </Box>
              ) : (
              <Typography className="text-xs! text-nowrap!">{item.title}</Typography>
              )}
            </Button>
          ))}
        </ReusableSwiper>
      </Box>
    </Grid>
  );
}
