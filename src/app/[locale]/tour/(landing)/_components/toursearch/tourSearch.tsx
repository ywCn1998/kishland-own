"use client";
import {
  Grid,
  Stack,
  Typography,
  Button,
  Box,
  Select,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import InputLabel from "@mui/material/InputLabel";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ApartmentIcon from "@mui/icons-material/Apartment";
import SportsRugbyIcon from "@mui/icons-material/SportsRugby";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Person2Icon from "@mui/icons-material/Person2";
import LastSearch from "../../../../../../components/shared/_components/search/lastSearch/LastSearch";
import RHFSelect from "@/components/shared/form/RHFSelect";
import FormProvider from "@/providers/FormProvider";
import useSearch from "./_hook/useSearch";
import RHFDatePicker from "@/components/shared/form/RHFDatePicker";

export default function TourSearch() {
  // const t = useTranslations(locale);
  const { methods, OnSubmit } = useSearch();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <Grid className="md:bg-amber-50 p-2 md:p-3 rounded-lg reveal border-slate-300 border-1">
        <FormProvider methods={methods}>
          <Grid container spacing={3} className="flex flex-row-reverse! ">
            <Grid size={4} sx={{ display: { xs: "none", md: "block" } }}>
              <Button
                sx={{
                  bgcolor: "secondary.main",
                  width: "100%",
                  py: 2.5,
                }}
                variant="contained"
                className="text-white! font-normal! reveal"
                startIcon={<BusinessCenterIcon />}
              >
                تور ها
              </Button>
            </Grid>
            <Grid size={4} sx={{ display: { xs: "none", md: "block" } }}>
              <Button
                sx={{
                  background: "white",
                  width: "100%",
                  py: 2.5,
                  color: "text.primary",
                }}
                variant="outlined"
                startIcon={<ApartmentIcon />}
                className="reveal"
              >
                هتل‌ها و اقامتگاه‌ها
              </Button>
            </Grid>
            <Grid size={4} sx={{ display: { xs: "none", md: "block" } }}>
              <Button
                sx={{
                  background: "white",
                  width: "100%",
                  py: 2.5,
                  color: "text.primary",
                }}
                variant="outlined"
                startIcon={<SportsRugbyIcon />}
                className="reveal"
              >
                تفریحات
              </Button>
            </Grid>

            <Grid
              size={12}
              spacing={3}
              className="flex flex-col md:flex-row bg-white rounded-lg reveal"
            >
              <Grid size="grow">
                <Box sx={{ minWidth: 120, p: 2, fontSize: 20 }}>
                  <RHFSelect
                    name="origin"
                    label="انتخاب مبداء"
                    startIcon={<BusinessCenterIcon />}
                  >
                    <MenuItem value="مشهد">مشهد</MenuItem>
                    <MenuItem value="تهران">تهران</MenuItem>
                  </RHFSelect>
                </Box>
              </Grid>

              <Divider orientation="vertical" sx={{ display: { xs: "hidden", md: "block" }, }} flexItem variant="middle" />
              <Divider orientation="horizontal" sx={{ display: { xs: "block", md: "hidden" }, my: 0, }} flexItem variant="middle" />
              <Grid size="grow">
                <Box sx={{ minWidth: 120, p: 2 }}>
                  <RHFSelect
                    name="destination"
                    label="انتخاب مقصد"
                    startIcon={<BusinessCenterIcon />}
                  >
                    <MenuItem value="تهران">تهران</MenuItem>
                    <MenuItem value="مشهد">مشهد</MenuItem>
                  </RHFSelect>
                </Box>
              </Grid>

              <Divider orientation="vertical" sx={{ display: { xs: "hidden", md: "block" }, }} flexItem variant="middle" />
              <Divider orientation="horizontal" sx={{ display: { xs: "block", md: "hidden" }, }} flexItem variant="middle" />

              <Grid size="grow" sx={{ display: { xs: "none", md: "block" } }}>
                <Box sx={{ minWidth: 120, p: 2 }}>
                  <RHFDatePicker
                    name="startDate"
                    label="تاریخ رفت"
                    startIcon={
                      <BusinessCenterIcon sx={{ color: "primary.main" }} />
                    }
                  />
                </Box>
              </Grid>
              <Divider orientation="vertical" sx={{ display: { xs: "hidden", md: "block" }, }} flexItem variant="middle" />

              <Grid size="grow">
                <Box sx={{ minWidth: 120, p: 2 }}>
                  <RHFDatePicker
                    name="endDate"
                    label={isMd ? "تاریخ برگشت" : "تاریخ رفت و برگشت"}
                    startIcon={
                      <BusinessCenterIcon sx={{ color: "primary.main" }} />
                    }
                  />
                </Box>
              </Grid>
              <Divider orientation="vertical" sx={{ display: { xs: "hidden", md: "block" }, }} flexItem variant="middle" />
              <Divider orientation="horizontal" sx={{ display: { xs: "block", md: "hidden" }, }} flexItem variant="middle" />

              <Grid size="grow">
                <Box sx={{ minWidth: 120, p: 2 }}>
                  <RHFSelect
                    name="number"
                    isSelect={false}
                    label="تعداد"
                    startIcon={<BusinessCenterIcon />}
                  >
                    <MenuItem value="مشهد">4 تفر</MenuItem>
                  </RHFSelect>
                </Box>
              </Grid>
              <div className="w-full md:w-1/12 flex justify-center items-center mb-2 md:mb-0 px-2 md:px-0">
                <IconButton
                  className="w-full md:w-14 md:h-14 h-16 "
                  sx={{ bgcolor: "primary.main", borderRadius: 1 }}
                >
                  <Typography className="text-white pl-1 text-lg text-extralight md:hidden">بزن بریم</Typography>
                  <SearchIcon className="text-white" />
                </IconButton>
              </div>
            </Grid>
          </Grid>
        </FormProvider >
      </Grid >
    </>
  );
}
