import RHFTextInput from "@/components/shared/form/RHFTextInput";
import { Button, Grid, MenuItem } from "@mui/material";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import RHFSelect from "@/components/shared/form/RHFSelect";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FixedBottomButton from "@/components/shared/fixedBottomBotton/fixedBottomBotton";

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
                <RHFTextInput name="birthsDay" startIcon={<LocationOnOutlinedIcon />} placeholder="تولد به میلادی" />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <RHFTextInput name="birwthDay" startIcon={<LocationOnOutlinedIcon />} placeholder="انقضا پاسپورت" />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <RHFTextInput name="birthfDay" startIcon={<LocationOnOutlinedIcon />} placeholder="شماره پاسپورت " />
            </Grid>

            <FixedBottomButton py={1.5}>
                <Button type="submit" sx={{ py: 0, width: "100%", color: "white", height: "100%", fontWeight: 500, fontSize: 16 }} variant="contained"> ذخیره تغییرات</Button>
            </FixedBottomButton>
        </Grid>
    )
}