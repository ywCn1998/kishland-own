import RHFTextInput from "@/components/shared/form/RHFTextInput";
import { Button, Grid, MenuItem, Stack } from "@mui/material";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import RHFSelect from "@/components/shared/form/RHFSelect";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FixedBottomButton from "@/components/shared/fixedBottomBotton/fixedBottomBotton";
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import RHF2MonthRangePicker from "@/components/shared/form/RHFDatePicker";
import RHFSimpleDatePicker from "@/components/shared/form/RHFSimpleDatePicker";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import RHFSingleRadioGroup from "@/components/shared/form/RHFRadio";

const sampleOptions = [
    { value: "male", label: "مرد" },
    { value: "female", label: "زن" },
]

export default function PersonalInformation() {
    return (
        <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
                <RHFTextInput name="firstName" startIcon={<PersonOutlineOutlinedIcon />} placeholder="نام" />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <RHFTextInput name="lastName" startIcon={<PersonOutlineOutlinedIcon />} placeholder="نام خانوادگی" />
            </Grid>


            <Grid size={{ xs: 12, md: 6 }}>
                <RHFTextInput name="location" startIcon={<LocationOnOutlinedIcon />} placeholder="شهر" />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <RHFTextInput name="provice" startIcon={<LocationOnOutlinedIcon />} placeholder="استان" />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                {/* <Stack className="border-1! rounded-[16px]! p-2! border-slate-300! px-3!"> */}
                <RHFSimpleDatePicker placeholder="انتخاب از تقویم" name="bwrtshDay" endIcon={<CalendarMonthOutlinedIcon className="text-[#626e94]!" />} startIcon={<CakeOutlinedIcon />} label="تاریخ تولدت" />
                {/* </Stack> */}
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <RHFTextInput name="birthsDway" startIcon={<AccountBoxOutlinedIcon />} placeholder="کد ملی" />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                {/* <RHFTextInput name="birtshDay" startIcon={<AccountBoxOutlinedIcon />} placeholder="تاریخ تولدت" /> */}
                {/* set a sample option */}
                <Stack className="rounded-[16px]! py-4! pr-5! border-slate-00! h-full! bg-slate-50!">
                    <RHFSingleRadioGroup name="sda" options={sampleOptions} label="جنسیت" />
                </Stack>
            </Grid>

            <Grid size={6} className="hidden! md:block!">
                <Button type="submit" sx={{ width: "100%", color: "white", height: "100%", fontWeight: 500, fontSize: 18 }} variant="contained"> ذخیره تغییرات</Button>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <FixedBottomButton py={1.5}>
                    <Button type="submit" sx={{ py: 0, width: "100%", color: "white", height: "100%", fontWeight: 500, fontSize: 16 }} variant="contained"> ذخیره تغییرات</Button>
                </FixedBottomButton>
            </Grid>
        </Grid>
    )
}
