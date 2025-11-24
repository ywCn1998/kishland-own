import RHFTextInput from "@/components/shared/form/RHFTextInput";
import { Button, Grid, MenuItem } from "@mui/material";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import RHFSelect from "@/components/shared/form/RHFSelect";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FixedBottomButton from "@/components/shared/fixedBottomBotton/fixedBottomBotton";

export default function ContactInformation() {
    return (
        <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
                <RHFTextInput name="firstName" startIcon={<PersonOutlineOutlinedIcon />} placeholder="شماره همراه" />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <RHFTextInput name="lastName" startIcon={<PersonOutlineOutlinedIcon />} placeholder="شماره تلفن (اختیاری)" />
            </Grid>


            <Grid size={{ xs: 12, md: 6 }}>
                <RHFTextInput name="birthDay" startIcon={<LocationOnOutlinedIcon />} placeholder="ایمیل" />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <RHFTextInput name="birthDafy" startIcon={<LocationOnOutlinedIcon />} placeholder="شماره تماس ضروری (اختیاری)" />
            </Grid>


            <Grid size={{ xs: 12, md: 6 }}>
            </Grid>

            <FixedBottomButton py={1.5}>
                <Button type="submit" sx={{ py: 0, width: "100%", color: "white", height: "100%", fontWeight: 500, fontSize: 16 }} variant="contained"> ذخیره تغییرات</Button>
            </FixedBottomButton>
        </Grid>
    )
}