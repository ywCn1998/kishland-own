import RHFTextInput from "@/components/shared/form/RHFTextInput";
import { Button, Grid, MenuItem } from "@mui/material";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import RHFSelect from "@/components/shared/form/RHFSelect";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FormProvider from "@/providers/FormProvider";
import usePassenger from "../_hook/usePassenger";

export default function PersonalInformation() {
    const { OnSubmit, methods } = usePassenger()
    return (
        <FormProvider onSubmit={OnSubmit} methods={methods}>
            <Grid container spacing={2}>
                <Grid size={6}>
                    <RHFTextInput name="firstName" startIcon={<PersonOutlineOutlinedIcon />} placeholder="نام" />
                </Grid>

                <Grid size={6}>
                    <RHFTextInput name="lastName" startIcon={<PersonOutlineOutlinedIcon />} placeholder="نام خانوادگی" />
                </Grid>

                <Grid size={6}>
                    <RHFTextInput name="birthDay" startIcon={<LocationOnOutlinedIcon />} placeholder="تاریخ تولدت" />
                </Grid>

                <Grid size={6}>
                    <RHFTextInput name="birthDay" startIcon={<LocationOnOutlinedIcon />} placeholder="کد ملی" />
                </Grid>

                <Grid size={6}>
                    <RHFTextInput name="birthDay" startIcon={<LocationOnOutlinedIcon />} placeholder="جنسیت" />
                </Grid>

                <Grid size={6}>
                    <Button type="submit" sx={{ width: "100%", color: "white", height: "100%", fontWeight: 500, fontSize: 18 }} variant="contained"> ذخیره تغییرات</Button>
                </Grid>
            </Grid>
        </FormProvider>
    )
}