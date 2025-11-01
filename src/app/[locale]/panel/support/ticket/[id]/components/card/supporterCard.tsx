
import TextIcon from "@/components/shared/textIcon";
import { Avatar, Divider, IconButton, Stack, Typography } from "@mui/material";
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';

export default function SupporterCard({ files }: { files?: any[] }) {
    return (
        <Stack className="border-1! border-slate-200! p-4! pb-2! rounded-2xl!" mt={3}>
            <Stack className="flex! flex-row! justify-between! items-center!">
                <Stack className="flex! flex-row! gap-3! items-center!">
                    <Avatar src="/images/afzal-zade.png" />
                    <Typography color="text.secondary">
                        افضل زاده ( پشتیبان و امور مشتریان )
                    </Typography>
                </Stack>

                <Stack className="flex! flex-row! gap-5">
                    <TextIcon className="text-[#BFC4D5]!" text="۰۵ : ۰۹" gap={.7} endIcon={<WatchLaterOutlinedIcon className="text-xl! text-[#BFC4D5]!" />} />
                    <TextIcon className="text-[#BFC4D5]!" text="۱۴۰۲/۰۷/۱۸ " gap={.7} endIcon={<CalendarTodayOutlinedIcon className="text-xl! text-[#BFC4D5]!" />} />
                </Stack>
            </Stack>

            <Divider variant="fullWidth" orientation="horizontal" sx={{ my: 2 }} />

            <Typography>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز </Typography>
            <Stack className="flex! flex-row! gap-1! justify-end!" mt={1}>
                <IconButton >
                    <ThumbDownOutlinedIcon className="text-2xl!" />
                </IconButton>
                <IconButton >
                    <ThumbUpAltOutlinedIcon className="text-2xl!" />
                </IconButton>
            </Stack>

            {
                files && (
                    <>
                        <Divider variant="fullWidth" orientation="horizontal" sx={{ my: 2 }} />

                        <TextIcon className="text-lg!" gap={0} text={<Typography>{files.length} ضمیمه ارسال شده است</Typography>} startIcon={<InsertLinkOutlinedIcon className="text-2xl!" />} />

                        <Stack className="flex! flex-row! gap-2!" mt={1}>
                            {
                                files.map((item) => (
                                    <img className="w-20! h-20! rounded-xl!" src={item.imgUrl} />
                                ))
                            }
                        </Stack>
                    </>
                )
            }
        </Stack>
    )
}