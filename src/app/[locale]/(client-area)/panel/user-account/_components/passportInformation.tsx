import RHFTextInput from "@/components/shared/form/RHFTextInput";
import { Button, Grid } from "@mui/material";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FixedBottomButton from "@/components/shared/fixedBottomBotton/fixedBottomBotton";
import RHFSimpleDatePicker from "@/components/shared/form/RHFSimpleDatePicker";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';

export default function PassportInformation() {
    return (
        <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
                <RHFTextInput name="firstName" startIcon={<PersonOutlineOutlinedIcon />} placeholder="نام به لاتین" />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <RHFTextInput name="lastName" startIcon={<PersonOutlineOutlinedIcon />} placeholder="نام خانوادگی به لاتین" />
            </Grid>


            <Grid size={{ xs: 12, md: 6 }}>
                <RHFSimpleDatePicker isJalalis={false} placeholder="انتخاب از تقویم" name="bwrtshDay" endIcon={<CalendarMonthOutlinedIcon className="text-[#626e94]!" />} startIcon={<CakeOutlinedIcon />} label="تاریخ تولدت" />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <RHFSimpleDatePicker isJalalis={false} placeholder="انتخاب از تقویم" name="bwrtshDay" startIcon={<LocationOnOutlinedIcon />} label="انقضا پاسپورت" />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <RHFTextInput name="birthfDay" startIcon={<LocationOnOutlinedIcon />} placeholder="شماره پاسپورت " />
            </Grid>

            <Grid size={6} className="hidden! md:block!">
                <Button type="submit" sx={{ width: "100%", color: "white", height: "100%", fontWeight: 500, fontSize: 18 }} variant="contained"> ذخیره تغییرات</Button>
            </Grid>

            <FixedBottomButton py={1.5}>
                <Button type="submit" sx={{ py: 0, width: "100%", color: "white", height: "100%", fontWeight: 500, fontSize: 16 }} variant="contained"> ذخیره تغییرات</Button>
            </FixedBottomButton>
        </Grid>
    )
}
