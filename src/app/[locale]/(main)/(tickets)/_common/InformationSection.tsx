import BlogCard from "@/components/shared/cards/blogCard";
import { Button, Stack, Typography } from "@mui/material";
import LeafletMapComponent from "@/components/shared/LeafletMap/LeafletMapComponent";
import DashedDivider from "./dashDivider";
import TextIcon from "@/components/shared/textIcon";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { DirectionsCarFilledOutlined, DirectionsBusFilledOutlined } from '@mui/icons-material';

export default function InformationSection({ info }: { info: any }) {
    return (
        <Stack className="md:border-1! border-slate-200! rounded-2xl! py-5!">
            {/* -------------- */}
            <Stack className="items-center! w-full! px-2! md:px-0!">
                <Stack className="flex! md:flex-row! flex-col! md:gap-24! gap-4! items-center! justify-start! w-full! md:px-5! px-0!">
                    <Stack className="flex! md:flex-col! flex-row! gap-3! items-center! md:items-start! justify-between! md:justify-start! w-full! md:w-auto!">
                        <Typography color="text.secondary" className="md:text-sm! text-xs!">
                            نام رزرو کننده
                        </Typography>
                        <Typography className="md:text-lg! text-sm! font-semibold!">
                            {info.passenger.fullName}
                        </Typography>
                    </Stack>
                    <Stack className="flex! md:flex-col! flex-row! gap-3! items-center! md:items-start! justify-between! md:justify-start! w-full! md:w-auto!">
                        <Typography color="text.secondary" className="md:text-sm! text-xs!">
                            شماره تماس
                        </Typography>
                        <Typography className="md:text-lg! text-sm! font-semibold!">
                            {info.passenger.phone}
                        </Typography>
                    </Stack>
                    <Stack className="flex! md:flex-col! flex-row! gap-3! items-center! md:items-start! justify-between! md:justify-start! w-full! md:w-auto!">
                        <Typography color="text.secondary" className="md:text-sm! text-xs!">
                            {info.room.type}
                        </Typography>
                        <Typography className="md:text-lg! text-sm! font-semibold!">
                            {info.room.customerCount} نفر _ {info.room.boardCount} تخت {info.room.boardCount < 2 && "تنها"}
                        </Typography>
                    </Stack>

                </Stack>
                <div
                    className="w-full h-[2px] md:mt-10! mt-5! md:mb-14! mb-5!"
                    style={{
                        backgroundImage: "repeating-linear-gradient(to right, #eee 0 10px, transparent 0 20px)"
                    }}
                />
            </Stack>
            {/* -------------- */}


            <div className="flex! md:flex-row! flex-col! gap-4! md:px-5! px-0!">
                <div className="flex! flex-col! w-full!">
                    <Stack className="h-72! flex! flex-row! gap-3!">
                        <Stack className="w-1/3! gap-3!">
                            <BlogCard className="rounded-xl!" boxShadow={0} overlay="none" imageUrl="/images/building.png" height={"35%"} />
                            <BlogCard className="rounded-xl!" boxShadow={0} overlay="none" imageUrl="/images/building.png" height={"65%"} />
                        </Stack>

                        <Stack className="w-2/3!">
                            <BlogCard className="rounded-xl!" boxShadow={0} overlay="none" imageUrl="/images/building.png" height={"100%"} />
                        </Stack>
                    </Stack>


                    <Stack className="md:my-14! my-5! md:gap-6! gap-3!">
                        <Typography className="md:text-[26px]! md:text-xl! text-lg! font-semibold!">
                            {info.hotel.name}
                        </Typography>
                        <Typography className="md:text-base! text-xs!" color="text.secondary">
                            {info.hotel.name} / {info.hotel.stars} ستاره / {info.hotel.nights} شب اقامت
                        </Typography>
                    </Stack>
                </div>

                <div className="flex! flex-col! gap-3! w-full!">
                    <div className="w-full! h-72!">
                        <LeafletMapComponent coordinates={[info.hotel.location.lat, info.hotel.location.lng]} />
                    </div>
                    <Stack>
                        {/* ------------- */}
                        <Typography color="text.secondary" fontWeight={500} className="text-sm! md:text-lg! text-center! mt-3! md:mt-4! mb-2!">{info.hotel.nights} شب</Typography>
                        <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="space-between"
                            width="100%"
                            gap={2}
                        >
                            <Typography color="text.secondary" fontWeight={500} className="text-xs! md:text-base!">
                                تاریخ خروج
                            </Typography>

                            <DashedDivider />

                            <Typography color="text.secondary" fontWeight={500} className="text-xs! md:text-base!">
                                تاریخ ورود
                            </Typography>
                        </Stack>

                        <Stack className="flex! flex-row! justify-between! items-center!" mt={{ xs: 2, md: 1.5 }}>
                            <Typography className="text-sm! md:text-xl! font-semibold!">جمعه ۲۶ مرداد</Typography>
                            <Typography className="text-sm! md:text-xl! font-semibold!">یکشنبه ۲۸ مرداد</Typography>
                        </Stack>
                        <Stack className="flex! flex-row! justify-between! items-center!" mt={1.5}>
                            <Typography className="text-base" color="text.secondary">ساعت 14:۰۰</Typography>
                            <Typography className="text-base" color="text.secondary">ساعت 14:۰۰</Typography>
                        </Stack>
                        {/* ------------- */}
                    </Stack>
                </div>
            </div>

            {/* divider */}
            <div
                className="w-full mb-5! mt-5! md:mt-0! border-b-1! border-slate-200!"
            />


            {/* address */}
            <div className="flex! md:flex-row! flex-col! gap-4! md:px-5! px-2! justify-between! md:items-center!">
                <Stack spacing={1}>
                    <TextIcon text="آدرس" className="text-sm!" startIcon={<LocationOnOutlinedIcon className="text-xl!" />} />
                    <Typography className="text-base! font-medium! mr-6!">
                        {info.hotel.address}
                    </Typography>
                </Stack>

                <Stack className="flex-row! md:gap-4! gap-2!">
                    <Button variant="outlined" className="rounded-lg! text-xs! py-4! px-3!" startIcon={<DirectionsCarFilledOutlined sx={{ color: "primary.main" }} />}>ترانسفر فرودگاهی (رایگان)</Button>
                    <Button variant="outlined" className="rounded-lg! text-xs! py-4! px-3!" startIcon={<DirectionsBusFilledOutlined sx={{ color: "primary.main" }} />}>ترانسفر راه آهن (رایگان)</Button>
                </Stack>
            </div>


        </Stack>
    );
}