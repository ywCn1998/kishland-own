import FormProvider from "@/providers/FormProvider";
import { Divider, Box, Grid, Stack, MenuItem, Typography, Button } from "@mui/material";
import useCalculateTotal from "./useCalculateTotal";
import RHFDatePicker from "@/components/shared/form/RHFDatePicker";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import RHFSelect from "@/components/shared/form/RHFSelect";
import TextIcon from "@/components/shared/textIcon";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import Link from "next/link";

export default function CartTotal() {
    const { OnSubmit, methods } = useCalculateTotal()
    return (
        <Stack className="w-full! rounded-3xl! border-1! border-slate-200! p-4! " sx={{ backgroundColor: "secondary.50" }}>
            <FormProvider methods={methods}>
                <Grid container className="flex! flex-row! gap-4! border-1! border-slate-200! py-2! rounded-3xl! pr-2! bg-white!">
                    <Grid size="grow" sx={{ display: { xs: "none", md: "block" } }}>
                        <Box sx={{ minWidth: 120, p: 1 }}>
                            <RHFDatePicker
                                name="startDate"
                                label="تاریخ ورود"
                                startIcon={
                                    <BusinessCenterIcon sx={{ color: "primary.main" }} />
                                }
                            />
                        </Box>
                    </Grid>
                    <Divider orientation="vertical" sx={{ display: { xs: "hidden", md: "block" }, }} flexItem variant="middle" />

                    <Grid size="grow">
                        <Box sx={{ minWidth: 120, p: 1 }}>
                            <RHFDatePicker
                                name="endDate"
                                label={"تاریخ خروج"}
                                startIcon={
                                    <BusinessCenterIcon sx={{ color: "primary.main" }} />
                                }
                            />
                        </Box>
                    </Grid>



                </Grid >

                <Stack className="border-1 border-slate-200! rounded-3xl! p-3! bg-white!" mt={3}>
                    <Box sx={{ minWidth: 120, p: 1 }} >
                        <RHFSelect
                            name="number"
                            isSelect={false}
                            label="تعداد افراد"
                            startIcon={<BusinessCenterIcon />}
                        >
                            <MenuItem value="مشهد">4 تفر</MenuItem>
                        </RHFSelect>
                    </Box>
                </Stack>


                <Stack sx={{ backgroundColor: "text.secondary" }} className="rounded-3xl! border-2! border-white! border-dashed! py-10!" mt={3}>
                    <Typography className="text-sm! text-center! text-white! mb-4!">قیمت کل برای 4 شب / 4نفر/2 اتاق</Typography>
                    <Typography className="text-3xl! font-bold! text-center! text-white!">8,500,000 تومان</Typography>
                </Stack>

                <Button sx={{ backgroundColor: "primary.main" }} className="w-full! text-white! text-xl! mt-6!">رزرو اتاق</Button>
            </FormProvider>


            {/* summary */}
            <Stack mt={3} gap={4}>
                <Stack>
                    <TextIcon startIcon={<DeleteOutlineIcon color="error" />} text={<Typography className=" text-black!"><span className="text-[#626E94]! text-sm!">اتاق 1: </span> اتاق یک تخته (اقامت با صبحانه)</Typography>} />
                    <Stack className="flex! flex-row! w-full! gap-2!" mt={1}>
                        <Stack className="flex! flex-col! gap-3! bg-white! rounded-xl! p-2! border-1! border-slate-200! w-full!">
                            <SingleBedIcon className="text-3xl!" />
                            <Typography color="text.secondary" className="text-xs!">پنجشنبه 1402/09/08</Typography>
                            <Typography className="text-base! text-black!" fontWeight={500}>123.000.000 تومان</Typography>
                        </Stack>

                        <Stack className="flex! flex-col! gap-3! bg-white! rounded-xl! p-2! border-1! border-slate-200! w-full!">
                            <SingleBedIcon className="text-3xl!" />
                            <Typography color="text.secondary" className="text-xs!">پنجشنبه 1402/09/08</Typography>
                            <Typography className="text-base! text-black!" fontWeight={500}>123.000.000 تومان</Typography>
                        </Stack>

                    </Stack>
                </Stack>



                <Stack>
                    <TextIcon startIcon={<DeleteOutlineIcon color="error" />} text={<Typography className=" text-black!"><span className="text-[#626E94]! text-sm!">اتاق 1: </span> اتاق یک تخته (اقامت با صبحانه)</Typography>} />
                    <Stack className="flex! flex-row! w-full! gap-2!" mt={1}>
                        <Stack className="flex! flex-col! gap-3! bg-white! rounded-xl! p-2! border-1! border-slate-200! w-full!">
                            <SingleBedIcon className="text-3xl!" />
                            <Typography color="text.secondary" className="text-xs!">پنجشنبه 1402/09/08</Typography>
                            <Typography className="text-base! text-black!" fontWeight={500}>123.000.000 تومان</Typography>
                        </Stack>

                        <Stack className="flex! flex-col! gap-3! bg-white! rounded-xl! p-2! border-1! border-slate-200! w-full!">
                            <SingleBedIcon className="text-3xl!" />
                            <Typography color="text.secondary" className="text-xs!">پنجشنبه 1402/09/08</Typography>
                            <Typography className="text-base! text-black!" fontWeight={500}>123.000.000 تومان</Typography>
                        </Stack>

                    </Stack>
                </Stack>

                <Divider variant="fullWidth" orientation="horizontal" className="mt-[-15px]!" />

                <Stack className="flex! flex-row! items-center! justify-between!">
                    <Typography href={""} component={Link} color="secondary" className="text-lg!">سوالی دارید؟</Typography>
                    <Typography className="text-lg!">0513-5874451</Typography>
                </Stack>
            </Stack>


        </Stack>
    )
}