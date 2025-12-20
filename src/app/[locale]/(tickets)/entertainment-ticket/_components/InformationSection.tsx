import BlogCard from "@/components/shared/cards/blogCard";
import { Grid, Stack, Typography } from "@mui/material";
import LeafletMapComponent from "@/components/shared/LeafletMap/LeafletMapComponent";
import TextIcon from "@/components/shared/textIcon";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

export default function InformationSection({ info }: { info: any }) {
    return (
        <Stack className="md:border-1! border-slate-200! rounded-2xl! py-5!">
            {/* -------------- */}
            <Stack className="w-full! md:px-5! px-2!">
                <Stack className="flex-row! justify-between! w-full!">

                    <Stack className="flex! md:flex-row! flex-col! gap-6! md:gap-24! justify-between! md:justify-start! items-center!">
                        <Stack className="flex! items-center! md:items-start! flex-col! gap-3!">
                            <Typography color="text.secondary" className="text-sm!">
                                نام رزرو کننده
                            </Typography>
                            <Typography className="text-lg! font-semibold!">
                                {info?.organizer?.name}
                            </Typography>
                        </Stack>
                        <Stack className="flex! items-center! md:items-start! flex-col! gap-3!">
                            <Typography color="text.secondary" className="text-sm!">
                                شماره تماس
                            </Typography>
                            <Typography className="text-lg! font-semibold!">
                                {info?.organizer?.phone}
                            </Typography>
                        </Stack>
                    </Stack>


                    <Stack className="flex! md:flex-row! flex-col! gap-6! md:gap-24! justify-between! md:justify-start! items-center!">
                        <Stack className="flex! items-center! md:items-start! flex-col! gap-3!">
                            <Typography color="text.secondary" className="text-sm!">
                                تاریخ صدور بلیط
                            </Typography>
                            <Typography className="text-lg! font-semibold!">
                                {info?.ticket?.issueDate}
                            </Typography>
                        </Stack>
                        <Stack className="flex! items-center! md:items-start! flex-col! gap-3!">
                            <Typography color="text.secondary" className="text-sm!">
                                شماره پیگیری بلط
                            </Typography>
                            <Typography className="text-lg! font-semibold!">
                                {info.ticket.trackingNumber}
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>

                <div
                    className="w-full h-[2px] mt-10! mb-14!"
                    style={{
                        backgroundImage: "repeating-linear-gradient(to right, #eee 0 10px, transparent 0 20px)"
                    }}
                />
            </Stack>
            {/* -------------- */}


            <div className="flex! md:flex-row! flex-col-reverse! gap-4! md:px-5! px-2!">
                <div className="flex! flex-col! w-full!">
                    <Stack className="h-72! flex! flex-row! gap-3!">
                        <Stack className="w-1/3! gap-3!">
                            <BlogCard className="rounded-xl!" boxShadow={0} overlay="none" imageUrl="/images/building.png" height={"50%"} />
                            <BlogCard className="rounded-xl!" boxShadow={0} overlay="none" imageUrl="/images/building.png" height={"50%"} />
                        </Stack>

                        <Stack className="w-2/3!">
                            <BlogCard className="rounded-xl!" boxShadow={0} overlay="none" imageUrl="/images/building.png" height={"100%"} />
                        </Stack>
                    </Stack>
                </div>

                <div className="flex! flex-col! gap-3! w-full!">
                    <div className="w-full! h-72!">
                        <LeafletMapComponent coordinates={[info?.event?.location?.lat, info?.event?.location?.lng]} />
                    </div>
                </div>
            </div>


            <Stack className="md:px-5! px-2!">
                <Stack className="my-5! gap-6!">
                    <Typography className="md:text-[26px]! text-xl! font-semibold!">
                        {info?.event?.title}
                    </Typography>

                    <TextIcon text={info?.event?.address} className="text-base!" startIcon={<LocationOnOutlinedIcon className="text-2xl!" />} />

                    <Typography className="leading-8! text-slate-600! text-sm! md:text-base!">
                        {info?.event?.description}
                    </Typography>


                    <Stack className="md:flex-row! md:items-center! justify-between! md:mt-8! mt-5! md:ml-10! gap-2! md:gap-0!">
                        <Typography className="text-lg! font-medium! flex! items-center! gap-2!">
                            <span className="text-sm! text-slate-500!">رفرنس</span>
                            {info?.ticket?.referenceNumber}
                        </Typography>

                        <Typography className="text-lg! font-medium! flex! items-center! gap-2!">
                            <span className="text-sm! text-slate-500!">سانس</span>
                            {info?.ticket?.sance}
                        </Typography>

                        <Typography className="text-lg! font-medium! flex! items-center! gap-2!">
                            <span className="text-sm! text-slate-500!">صندلی</span>
                            {info?.ticket?.seat}
                        </Typography>

                        <Typography className="text-lg! font-medium! flex! items-center! gap-2!">
                            <span className="text-sm! text-slate-500!">زمان نمایش</span>
                            {info?.ticket?.showTime}
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>

            {/* divider */}
            <div
                className="w-full mb-5! border-b-1! border-slate-200!"
            />

            <Stack className="md:px-5! px-2!">
                <Stack className="justify-between! items-center! flex-row! mb-4!">
                    <Typography className="md:text-lg! text-base! font-medium!">بلیط های شما</Typography>
                    <Typography className="md:text-lg! text-base! text-slate-500! font-medium!">{info?.ticket?.quantity} عدد</Typography>
                </Stack>

                <Stack className="flex-row! items-center! md:gap-5! gap-2! overflow-x-auto!">
                    <Stack className="items-center! gap-2! border-1! border-slate-200! rounded-lg! p-2!">
                        <img src="/images/new/qr-code-sample.png" className="w-32! h-24!" alt="" />
                        <Typography className="text-base! md:text-lg! font-medium!">2432133</Typography>
                    </Stack>
                    <Stack className="items-center! gap-2! border-1! border-slate-200! rounded-lg! p-2!">
                        <img src="/images/new/qr-code-sample.png" className="w-32! h-24!" alt="" />
                        <Typography className="text-base! md:text-lg! font-medium!">2432133</Typography>
                    </Stack>
                    <Stack className="items-center! gap-2! border-1! border-slate-200! rounded-lg! p-2!">
                        <img src="/images/new/qr-code-sample.png" className="w-32! h-24!" alt="" />
                        <Typography className="text-base! md:text-lg! font-medium!">2432133</Typography>
                    </Stack>
                </Stack>

                <Typography sx={{ backgroundColor: "background.paper", color: "text.secondary" }} className="md:text-sm! text-xs! mt-5! p-3! rounded-xl! w-fit!">برای دریافت خدمات از سمت سرویس دهنده تفرحات حتما قسمت بارکد و کد پایین آن ها را به پرسنل تفریحی نمایش دهید.</Typography>

            </Stack>

            {/* divider */}
            <div
                className="w-full my-5! border-b-1! border-slate-200!"
            />

            <Stack className="md:flex-row! justify-between! md:px-5! px-2!">
                <Stack spacing={2.5}>
                    <Typography color="text.secondary" className="text-xs! md:text-sm! flex! gap-2! items-center!">نام مشتری <span className="text-sm! md:text-base! font-medium! text-black!">{info?.organizer?.name}</span></Typography>
                    <Typography color="text.secondary" className="text-xs! md:text-sm! flex! gap-2! items-center!">متصدی صدور <span className="text-sm! md:text-base! font-medium! text-black!">کلوپ تفریحی سیمرغ</span></Typography>
                    <Typography color="text.secondary" className="text-xs! md:text-sm! flex! gap-2! items-center!">نام مشتری <span className="text-sm! md:text-base! font-medium! text-black!">{info?.organizer?.name}</span></Typography>
                </Stack>
                <Typography className="md:text-base! text-sm! font-medium! text-black! flex! md:flex-col! flex-row! gap-4! mt-5! md:mt-0!">
                    <span className="md:text-sm! text-xs! text-slate-500!">آدرس</span>
                    <span className="md:text-base! text-sm!">
                        بلوار رودکی - نرسیده به جنب بانک ملی شعبه ساحل مرجانی
                    </span>
                </Typography>
            </Stack>

            <Stack className="md:px-5! px-2! mt-8! ">
                <Typography className="md:text-lg! text-base! font-medium! mb-3! mt-4! md:mt-0!">مهر و امضای صادر کننده</Typography>
                <Grid container className="md:h-24!" spacing={1}>
                    <Grid size={{ xs: 12, sm: 6, md: 'grow' }} className="flex! flex-row! gap-4! items-center! bg-[#E1E6F0]! p-2! rounded-lg! justify-center!">
                        <img src="/images/new/barcode-sample.png" className="w-9/12 h-20! md:h-full!" alt="" />
                        <Typography className="text-base! font-medium! text-black!">2432133</Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 'grow' }} className="flex! flex-row! gap-4! items-center! bg-[#E1E6F0]! p-2! rounded-lg! justify-center!">
                        <img src="/images/new/barcode-sample.png" className="w-9/12 h-20! md:h-full!" alt="" />
                        <Typography className="text-base! font-medium! text-black! ">2432133</Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 'grow' }} className="flex! flex-row! gap-4! items-center! bg-[#E1E6F0]! p-2! rounded-lg! justify-center!">
                        <img src="/images/new/barcode-sample.png" className="w-9/12 h-20! md:h-full!" alt="" />
                        <Typography className="text-base! font-medium! text-black!">2432133</Typography>
                    </Grid>
                </Grid>
            </Stack>




        </Stack>
    );
}