"use client";
import {
  Grid,
  Button,
  Box,
  MenuItem,
  Divider,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ApartmentIcon from "@mui/icons-material/Apartment";
import SportsRugbyIcon from "@mui/icons-material/SportsRugby";
import RHFSelect from "@/components/shared/form/RHFSelect";
import RHFDatePicker from "@/components/shared/form/RHFDatePicker";
import FormProvider from "@/providers/FormProvider";
import useSearch from "./hooks/useSearch";

export default function TourSearch({ activePage = "tour" }) {
  const { methods, OnSubmit } = useSearch();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <Grid className="md:bg-amber-50 p-2 md:p-4 rounded-xl reveal border-1 border-[#E1E6F0]">
        <FormProvider methods={methods}>
          <Grid container spacing={3} className="flex flex-row-reverse! ">
            <Grid size={4} sx={{ display: { xs: "none", md: "block" } }}>
              <Button
                sx={{
                  bgcolor: activePage === "tour" ? "secondary.main" : "white",
                  width: "100%",
                  py: 2.5,
                  color: activePage === "tour" ? "white" : "text.primary",
                }}
                variant={activePage === "tour" ? "contained" : "outlined"}
                className="font-normal! reveal"
                startIcon={<BusinessCenterIcon />}
                href="/fa/tour/hotel-location"
              >
                تور ها
              </Button>
            </Grid>
            <Grid size={4} sx={{ display: { xs: "none", md: "block" } }}>
              <Button
                sx={{
                  bgcolor: activePage === "hotel" ? "secondary.main" : "white",
                  width: "100%",
                  py: 2.5,
                  color: activePage === "hotel" ? "white" : "text.primary",
                }}
                variant={activePage === "hotel" ? "contained" : "outlined"}
                startIcon={<ApartmentIcon />}
                className="reveal"
                href="/fa/hotel"
              >
                هتل‌ها و اقامتگاه‌ها
              </Button>
            </Grid>
            <Grid size={4} sx={{ display: { xs: "none", md: "block" } }}>
              <Button
                sx={{
                  bgcolor: activePage === "fun" ? "secondary.main" : "white",
                  width: "100%",
                  py: 2.5,
                  color: activePage === "fun" ? "white" : "text.primary",
                }}
                variant={activePage === "fun" ? "contained" : "outlined"}
                startIcon={<SportsRugbyIcon />}
                className="reveal"
                href="/fa/entertainment"
              >
                تفریحات
              </Button>
            </Grid>

            {activePage === "hotel" && (
              <Grid
                size={12}
                spacing={3}
                className="flex flex-col md:flex-row bg-white rounded-lg reveal"
              >
                <Grid size="grow">
                  <Box sx={{ minWidth: 120, p: 2, fontSize: 20 }}>
                    <RHFSelect
                      name="hotel"
                      label=" نوع اقامت گاه"
                      startIcon={<BusinessCenterIcon />}
                      defaultValue="کیش"
                    >
                      <MenuItem value="کیش">هتل آپارتمان های کیش</MenuItem>
                      <MenuItem value="قشم">هتل آپارتمان های قشم</MenuItem>
                    </RHFSelect>
                  </Box>
                </Grid>

                <Divider
                  orientation={isMd ? "vertical" : "horizontal"}
                  flexItem
                  variant="middle"
                />

                <Grid size="grow">
                  <Box sx={{ minWidth: 120, p: 2 }}>
                    {/* <RHFDatePicker
                      name="startDate"
                      label="تاریخ ورود"
                      startIcon={
                        <BusinessCenterIcon sx={{ color: "primary.main" }} />
                      }
                    /> */}
                  </Box>
                </Grid>

                <Divider
                  orientation={isMd ? "vertical" : "horizontal"}
                  flexItem
                  variant="middle"
                />

                <Grid size="grow">
                  <Box sx={{ minWidth: 120, p: 2 }}>
                    <RHFDatePicker
                      name="endDate"
                      label="تاریخ خروج"
                      startIcon={
                        <BusinessCenterIcon sx={{ color: "primary.main" }} />
                      }
                    />
                  </Box>
                </Grid>

                <Divider
                  orientation={isMd ? "vertical" : "horizontal"}
                  flexItem
                  variant="middle"
                />

                <Grid size="grow">
                  <Box sx={{ minWidth: 120, p: 2 }}>
                    <RHFSelect
                      name="countAndRoom"
                      label="مسافران و تعداد اتاق"
                      startIcon={<BusinessCenterIcon />}
                    >
                      <MenuItem value="1room2adult">
                        1 اتاق - 2 بزرگسال
                      </MenuItem>
                    </RHFSelect>
                  </Box>
                </Grid>

                <div className="w-full md:w-1/12 flex justify-center items-center mb-2 md:mb-0 px-2 md:px-0">
                  <IconButton
                    className="w-full md:w-14 md:h-14 h-16 "
                    sx={{ bgcolor: "primary.main", borderRadius: 1 }}
                    href="/fa/hotel/list"
                  >
                    <Typography className="text-white pl-1 text-lg text-extralight md:hidden">
                      بزن بریم
                    </Typography>
                    <SearchIcon className="text-white" />
                  </IconButton>
                </div>
              </Grid>
            )}

            {activePage === "tour" && (
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

                <Divider
                  orientation={isMd ? "vertical" : "horizontal"}
                  flexItem
                  variant="middle"
                />

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

                <Divider
                  orientation={isMd ? "vertical" : "horizontal"}
                  flexItem
                  variant="middle"
                />

                <Grid size="grow" sx={{ display: { xs: "none", md: "block" } }}>
                  <Box sx={{ minWidth: 120, p: 2 }}>
                    <RHFDatePicker
                      name="startDate"
                      label="تاریخ رفت"
                      startIcon={
                        <BusinessCenterIcon sx={{ color: "primary.main" }} fontSize="small"/>
                      }
                    />
                  </Box>
                </Grid>

                <Divider
                  orientation={isMd ? "vertical" : "horizontal"}
                  flexItem
                  variant="middle"
                />

                <Grid size="grow">
                  <Box sx={{ minWidth: 120, p: 2 }}>
                    <RHFDatePicker
                      name="endDate"
                      label={isMd ? "تاریخ برگشت" : "تاریخ رفت و برگشت"}
                      startIcon={
                        <BusinessCenterIcon sx={{ color: "primary.main" }} fontSize="small"/>
                      }
                    />
                  </Box>
                </Grid>

                <Divider
                  orientation={isMd ? "vertical" : "horizontal"}
                  flexItem
                  variant="middle"
                />

                <Grid size="grow">
                  <Box sx={{ minWidth: 120, p: 2 }}>
                    <RHFSelect
                      name="number"
                      isSelect={false}
                      label="تعداد"
                      startIcon={<BusinessCenterIcon />}
                    >
                      <MenuItem value="4">4 نفر</MenuItem>
                    </RHFSelect>
                  </Box>
                </Grid>

                <div className="w-full md:w-1/12 flex justify-center items-center mb-2 md:mb-0 px-2 md:px-0">
                  <IconButton
                    className="w-full md:w-14 md:h-14 h-16 "
                    sx={{ bgcolor: "primary.main", borderRadius: 1 }}
                    href="/fa/tour/list"
                  >
                    <Typography className="text-white pl-1 text-lg text-extralight md:hidden">
                      بزن بریم
                    </Typography>
                    <SearchIcon className="text-white" />
                  </IconButton>
                </div>
              </Grid>
            )}
          </Grid>
        </FormProvider>
      </Grid>
    </>
  );
}
