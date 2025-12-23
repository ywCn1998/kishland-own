import TextIcon from "@/components/shared/textIcon";
import { FlightLandOutlined, FlightTakeoffOutlined } from "@mui/icons-material";
import { Stack, Typography, Grid, Avatar, Divider, Button } from "@mui/material";

export default function AirplaneInfoSection({ info }: { info: any }) {
    return (
        <Stack>
            <Typography className="md:text-xl! text-lg! font-semibold! mb-5! ">
                بلیط هواپیما
            </Typography>

            <Grid container spacing={{ xs: 0, lg: 2 }} className="border-1! border-slate-200! rounded-2xl!">

                {/* right side */}
                <Grid size={{ xs: 12, md: 10 }}>
                    <div className="md:p-6! p-3!">
                        <Stack className="flex! md:flex-row! flex-col! gap-3! md:justify-between! justify-start! md:items-center!">
                            <Typography className="md:text-2xl! text-lg! font-semibold!">
                                {info.flightTicketInfo.flight.title}
                            </Typography>

                            <Stack className="flex-row! items-center! gap-3!">
                                <Avatar src={info.flightTicketInfo.flight.airline.logo} className="w-12! h-12!" />
                                <Stack className="flex-col! gap-1.5!">
                                    <Typography className="md:text-base! text-xs! font-medium!" color="text.secondary">شرکت {info.flightTicketInfo.flight.airline.nameFa}</Typography>
                                    <Typography className="md:text-sm! text-xs! font-light!" color="text.secondary">{info.flightTicketInfo.flight.airline.nameEn}</Typography>
                                </Stack>
                            </Stack>
                        </Stack>

                        <Stack className="md:flex-row! flex-col! md:items-start! items-start! md:gap-12! gap-4! md:mt-8! mt-5!">
                            <Typography className="md:text-lg! text-base! font-medium! flex! items-center! gap-2!">
                                <span className="md:text-sm! text-xs! text-slate-500!">شماره بلیط </span>
                                {info.flightTicketInfo.flight.ticketNumber}
                            </Typography>

                            <Typography className="md:text-lg! text-base! font-medium! flex! items-center! gap-2!">
                                <span className="md:text-sm! text-xs! text-slate-500!">شماره مرجع </span>
                                {info.flightTicketInfo.flight.referenceNumber}
                            </Typography>

                            <Typography className="md:text-lg! text-base! font-medium! flex! items-center! gap-2!">
                                <span className="md:text-sm! text-xs! text-slate-500!">شماره پرواز </span>
                                {info.flightTicketInfo.flight.flightNumber} سیستمی
                            </Typography>
                        </Stack>
                    </div>

                    <Divider variant="middle" />

                    <div className="p-6! flex! flex-row! gap-10! items-start!">
                        <Stack className="flex-col! gap-3! md:gap-5!">
                            <TextIcon className="text-sm!" text="شهر مبدا" startIcon={<FlightTakeoffOutlined className="text-xl!" />} />
                            <Typography className="md:text-lg! text-base! font-medium!">{info.flightTicketInfo.route.origin.cityFa} ({info.flightTicketInfo.route.origin.airportCode})</Typography>
                        </Stack>

                        <Stack className="flex-col! gap-3! md:gap-5!">
                            <TextIcon className="text-sm!" text="شهر مقصد" startIcon={<FlightLandOutlined className="text-xl!" />} />
                            <Typography className="md:text-lg! text-base! font-medium!">{info.flightTicketInfo.route.destination.cityFa} ({info.flightTicketInfo.route.destination.airportCode})</Typography>
                        </Stack>
                    </div>

                    <Divider variant="middle" />

                    <div className="md:p-6! p-4! flex! flex-col! gap-5!">
                        <Stack className="justify-between! items-center! flex-row!">
                            <Typography className="md:text-base! text-xs! font-medium!" color="text.secondary">ساعت و تاریخ پرواز از مبدا</Typography>
                            <Typography className="md:text-base! text-xs! font-medium!" color="text.secondary">ساعت و تاریخ پرواز از مقصد</Typography>
                        </Stack>



                        <Stack className="flex! flex-row! gap-3! w-full! justify-between! items-start!">
                            <Stack className="flex! md:flex-row! justify-between! md:w-1/5! w-1/2! items-center! mt-2!">
                                <Typography className="md:text-xl! text-lg! font-semibold! md:text-3xl!">{info.flightTicketInfo.schedule.departure.time}</Typography>
                                <Stack className="flex! flex-col! md:gap-3! gap-1! md:items-end! items-center!">
                                    <Typography className="md:text-base! text-sm!" color="text.secondary">{info.flightTicketInfo.schedule.departure.dateEn}</Typography>
                                    <Typography className="text-sm! font-light!" color="text.secondary">{info.flightTicketInfo.schedule.departure.dateFa}</Typography>
                                </Stack>
                            </Stack>

                            <img
                                src="/images/plane-dash.png"
                                className="hidden! md:inline!  w-3/5! h-9!"
                                alt="plane path"
                            />


                            <Stack className="flex! md:flex-row! justify-between! md:w-1/5! w-1/2! items-center! mt-2!">
                                <Typography className="md:text-xl! text-lg! font-semibold! md:text-3xl!">{info.flightTicketInfo.schedule.arrival.time}</Typography>
                                <Stack className="flex! flex-col! md:gap-3! gap-1! md:items-end! items-center!">
                                    <Typography className="md:text-base! text-sm!" color="text.secondary">{info.flightTicketInfo.schedule.arrival.dateEn}</Typography>
                                    <Typography className="text-sm! font-light!" color="text.secondary">{info.flightTicketInfo.schedule.arrival.dateFa}</Typography>
                                </Stack>
                            </Stack>

                        </Stack>

                    </div>

                    <Divider variant="middle" />


                    <div className="md:p-6! p-4!">
                        <Typography className="text-base! font-medium!" color="text.secondary">اطلاعات بلیط</Typography>


                        <Grid container className="md:items-center! md:mt-8! mt-3!" spacing={{ xs: 2, lg: 3 }}>
                            <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                                <Typography className="md:text-lg! text-sm! font-medium! flex! md:justify-start! justify-start! w-full! items-center! gap-2!">
                                    <span className="text-sm! text-slate-500!">کلاس کابین (Cabin Class)</span>
                                    اکانومی  ({info.flightTicketInfo.flight.cabinClass})
                                </Typography>
                            </Grid>

                            <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                                <Typography className="md:text-lg! text-sm! font-medium! flex! md:justify-start! justify-start! w-full! items-center! gap-2!">
                                    <span className="text-sm! text-slate-500!">ایرلاین (Airline)</span>
                                    {info.flightTicketInfo.flight.airline.nameFa} ({info.flightTicketInfo.flight.airline.nameEn})
                                </Typography>
                            </Grid>

                            <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                                <Typography className="md:text-lg! text-sm! font-medium! flex! md:justify-start! justify-start! w-full! items-center! gap-2!">
                                    <span className="text-sm! text-slate-500!">مدل هواپیما (Aircraft Model)</span>
                                    {info.flightTicketInfo.flight.aircraft.model}
                                </Typography>
                            </Grid>
                        </Grid>


                        <Stack className="flex! lg:flex-row! flex-col! lg:items-center! lg:gap-5! gap-3! lg:mt-8! mt-5! overflow-x-auto! w-full!">
                            <Button variant="outlined" className="rounded-lg! text-sm! py-4! px-3! text-slate-500! w-full! md:w-auto!" >شرکت هواپیمایی <TextIcon text={info.flightTicketInfo.flight.airline.nameFa} className="text-sm! text-black! mx-2! font-medium! " startIcon={<Avatar className="w-6! h-6!" src={info.flightTicketInfo.flight.airline.logo} />} /></Button>

                            <Button variant="outlined" className="rounded-lg! text-sm! py-4! px-3! text-slate-500! w-full! md:w-auto!" >شماره پرواز <TextIcon text={info.flightTicketInfo.flight.flightNumber} className="text-sm! text-black! mx-2! font-medium! " /></Button>

                            <Button variant="outlined" className="rounded-lg! text-sm! py-4! px-3! text-slate-500! w-full! md:w-auto!" >کلاس کابین <TextIcon text={info.flightTicketInfo.flight.cabinClass} className="text-sm! text-black! mx-2! font-medium! " /></Button>

                            <Button variant="outlined" className="rounded-lg! text-sm! py-4! px-3! text-slate-500! w-full! md:w-auto!" >مقدار بار مجاز <TextIcon text={info.flightTicketInfo.flight.aircraft.manufacturer} className="text-sm! text-black! mx-2! font-medium! " /></Button>

                            <Button variant="outlined" className="rounded-lg! text-sm! py-4! px-3! text-slate-500! w-full! md:w-auto!" > فرودگاه <TextIcon text={"فردوگاه مهرآباد - ترمینال 2"} className="text-sm! text-black! mx-2! font-medium! " /></Button>
                        </Stack>

                    </div>

                </Grid>

                {/* --------divider-------- */}
                <Grid size={{ xs: 0, md: 0.5 }} sx={{ display: { xs: "none", md: "block" } }}>
                    <div
                        className="w-[1.3px] h-full"
                        style={{
                            backgroundImage: "repeating-linear-gradient(to bottom, #ccc 0 8px, transparent 0 14px)"
                        }}
                    />
                </Grid>

                {/* left side */}
                <Grid size={{ xs: 12, md: 1.5 }} className="md:py-6! py-3! relative! px-4! md:px-0!">
                    <Stack className="flex! flex-col! justify-between! h-8/12!" spacing={1}>
                        <Stack className="flex! md:flex-col! flex-row! gap-3! items-center! md:items-start! justify-between! md:justify-start! w-full! md:w-auto!">
                            <Typography color="text.secondary" className="text-sm!">نام مسافر به انگلیسی</Typography>
                            <Typography className="text-base! md:text-lg! font-semibold!">{info.flightTicketInfo.passenger.fullNameEn}</Typography>
                        </Stack>

                        <Stack className="flex! md:flex-col! flex-row! gap-3! items-center! md:items-start! justify-between! md:justify-start! w-full! md:w-auto!">
                            <Typography color="text.secondary" className="text-sm!">نام مسافر به فارسی</Typography>
                            <Typography className="text-base! md:text-lg! font-semibold!">{info.flightTicketInfo.passenger.fullNameFa}</Typography>
                        </Stack>

                        <Stack className="flex! md:flex-col! flex-row! gap-3! items-center! md:items-start! justify-between! md:justify-start! w-full! md:w-auto!">
                            <Typography color="text.secondary" className="text-sm!">کد ملی</Typography>
                            <Typography className="text-base! md:text-lg! font-semibold!">{info.flightTicketInfo.passenger.nationalId}</Typography>
                        </Stack>

                        <Stack className="flex! md:flex-col! flex-row! gap-3! items-center! md:items-start! justify-between! md:justify-start! w-full! md:w-auto!">
                            <Typography color="text.secondary" className="text-sm!">شماره تماس</Typography>
                            <Typography className="text-base! md:text-lg! font-semibold!">{info.flightTicketInfo.passenger.phone}</Typography>
                        </Stack>
                    </Stack>

                    {/* <Stack className=""> */}
                    {/* <img src="/images/new/qr-code-sample.png" alt="qr code" className="w-full! h-28! w-28! absolute! bottom-5! left-0!" /> */}
                    {/* </Stack> */}
                </Grid>

            </Grid>
        </Stack>
    );
}