import RHFTextInput from "@/components/shared/form/RHFTextInput";
import { Button, Grid, MenuItem } from "@mui/material";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import RHFSelect from "@/components/shared/form/RHFSelect";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

export default function PersonalInformation() {
    return (
        <Grid container spacing={2}>
            <Grid size={6}>
                <RHFTextInput name="firstName" startIcon={<PersonOutlineOutlinedIcon />} placeholder="نام" />
            </Grid>

            <Grid size={6}>
                <RHFTextInput name="lastName" startIcon={<PersonOutlineOutlinedIcon />} placeholder="نام خانوادگی" />
            </Grid>


            <Grid size={6}>
                {/* <RHFSelect name="location" startIcon={<PersonOutlineOutlinedIcon />} placeholder="شهر" >
                    <MenuItem>مشهد</MenuItem>
                    <MenuItem>تهران</MenuItem>
                </RHFSelect> */}
                <RHFTextInput name="location" startIcon={<LocationOnOutlinedIcon />} placeholder="شهر" />
            </Grid>

            <Grid size={6}>
                <RHFTextInput name="provice" startIcon={<LocationOnOutlinedIcon />} placeholder="استان" />
            </Grid>

            <Grid size={6}>
                <RHFTextInput name="bwirtshDay" startIcon={<LocationOnOutlinedIcon />} placeholder="تاریخ تولدت" />
            </Grid>

            <Grid size={6}>
                <RHFTextInput name="birthsDway" startIcon={<LocationOnOutlinedIcon />} placeholder="تاریخ تولدت" />
            </Grid>

            <Grid size={6}>
                <RHFTextInput name="birtshDay" startIcon={<LocationOnOutlinedIcon />} placeholder="تاریخ تولدت" />
            </Grid>

            <Grid size={6}>
                <Button type="submit" sx={{ width: "100%", color: "white", height: "100%", fontWeight: 500, fontSize: 18 }} variant="contained"> ذخیره تغییرات</Button>
            </Grid>
        </Grid>
    )
}