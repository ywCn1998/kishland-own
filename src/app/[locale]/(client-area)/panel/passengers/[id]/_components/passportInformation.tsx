import RHFTextInput from "@/components/shared/form/RHFTextInput";
import { Button, Grid, MenuItem } from "@mui/material";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import RHFSelect from "@/components/shared/form/RHFSelect";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

export default function PassportInformation() {
    return (
        <Grid container spacing={2}>
            <Grid size={6}>
                <RHFTextInput name="firstName" startIcon={<PersonOutlineOutlinedIcon />} placeholder="نام به لاتین" />
            </Grid>

            <Grid size={6}>
                <RHFTextInput name="lastName" startIcon={<PersonOutlineOutlinedIcon />} placeholder="نام خانوادگی به لاتین" />
            </Grid>


            <Grid size={6}>
                <RHFTextInput name="birthDay" startIcon={<LocationOnOutlinedIcon />} placeholder="تولد به میلادی" />
            </Grid>

            <Grid size={6}>
                <RHFTextInput name="birthDay" startIcon={<LocationOnOutlinedIcon />} placeholder="انقضا پاسپورت" />
            </Grid>

            <Grid size={6}>
                <RHFTextInput name="birthDay" startIcon={<LocationOnOutlinedIcon />} placeholder="شماره پاسپورت " />
            </Grid>

            <Grid size={6}>
                <Button type="submit" sx={{ width: "100%", color: "white", height: "100%", fontWeight: 500, fontSize: 18 }} variant="contained"> ذخیره تغییرات</Button>
            </Grid>
        </Grid>
    )
}
