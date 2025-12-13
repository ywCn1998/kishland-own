"use client"
import { Button, Typography, Stack } from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import { DeleteOutlineOutlined, LocalSeeOutlined, AccountBalanceWalletOutlined, KeyboardArrowLeftOutlined, PersonOutlined, CreditCardOutlined, LanguageOutlined, PhoneOutlined } from '@mui/icons-material';
import { useState } from "react";
import Table from "@/components/shared/table";
import Row from "./components/tableRow";
import { ITableHeadCell } from "@/models/table";
import SupporterCard from "./components/card/supporterCard";
import LiteRichEditor from "@/components/shared/ui/customTextarea";
import RHFUploadButton from "@/components/shared/form/RHFChooseFile";
import useSendTicket from "./hooks/useSendTicket";
import FormProvider from "@/providers/FormProvider";
import RHFTextarea from "@/components/shared/form/RHFTextarea";
import Link from "next/link";
import { headerTitleAtom } from "@/store/atomHeader";
import { useEffect } from "react";
import { useAtom } from "jotai";
import FixedBottomButton from "@/components/shared/fixedBottomBotton/fixedBottomBotton";


const headCells: ITableHeadCell[] = [
    {
        id: "fullName",
        label: "#",
        align: "left",
    },
    {
        id: "gender",
        label: "درخواست کننده",
        align: "left",
    },
    {
        id: "nationalCode",
        label: "بخش",
        align: "left",
    },
    {
        id: "birthDate",
        label: "واحد",
        align: "left",
    },
    {
        id: "ageGroup",
        label: "آخرین بروز رسانی",
        align: "left",
    },
];

const data = [
    {
        requestBy: "قاسم سبحانی",
        section: "پشتبانی هتل ها",
        unit: "هتل های کیش",
        lastUpdate: "3 ماه پیش",
    },
];

const fileData = [
    {
        imgUrl: "/images/file1.png"
    },
    {
        imgUrl: "/images/file2.jpg"
    },
    {
        imgUrl: "/images/file2.jpg"
    }
];

export default function Ticket() {
    const { id } = useParams()
    const [html, setHtml] = useState("");
    const { methods, OnSubmit } = useSendTicket();
    const [, setHeaderTitle] = useAtom(headerTitleAtom);
    useEffect(() => {
        setHeaderTitle("جزئیات تیکت");
    }, []);

    const tableRows = data.map((item: any, index: number) => (
        <Row key={String("ticket" + index)} {...item} index={index} />
    ));

    const items = Array.from({ length: 6 });
    const router = useRouter()

    return (
        <Stack className="px-4! md:px-0! " sx={{ backgroundColor: { xs: "background.paper", md: "white" } }}>
            <Stack className="border-1! border-slate-200! py-4 px-6! rounded-2xl! hidden! md:flex! flex-row! justify-between! items-center!">
                <Typography className="font-semibold! text-base!">
                    تیکت {id}
                </Typography>
                <Button onClick={() => router.back()} variant="text" className="p-1! text-base!" sx={{ color: "text.secondary" }} endIcon={<KeyboardArrowLeftOutlinedIcon />}>
                    برگشت
                </Button>
            </Stack>

            <Stack className="bg-white! border-1! border-slate-200! p-3! rounded-2xl!" mt={3}>
                <Stack className="flex! flex-row! justify-between! items-center!">
                    {/* in md */}
                    <Typography className="hidden! md:block! text-sm! md:text-base! px-3!" color="text.secondary" fontWeight={500}>
                        اطلاعات تیکت
                    </Typography>
                    {/*  */}

                    {/* in xs */}
                    <Stack className=" flex! md:hidden! flex-col! gap-2! items-start!">
                        <Typography className=" text-xs!" color="text.secondary" fontWeight={400}>شناسه تیکت</Typography>
                        <Typography className="font-semibold! text-base!">
                            تیکت {id}
                        </Typography>
                    </Stack>
                    {/*  */}
                    <Stack className="flex! flex-row! gap-3!">
                        <Button variant="contained" sx={{ backgroundColor: "#BFC4D5", color: "text.secondary" }} className="py-3! text-sm! md:text-base! rounded-xl!" >
                            <span className="hidden! md:inline!">
                                تیکت بسته شده
                            </span>
                            <span className="inline! md:hidden!">
                               تیکت بسته
                            </span>
                        </Button>
                        <Button component={Link} href="/fa/panel/support/new-ticket" variant="contained" sx={{ color: "white" }} className="hidden! md:block! py-3! text-base! rounded-xl!" >
                            پاسخ
                        </Button>
                    </Stack>
                </Stack>

                <Typography mt={4} sx={{ borderColor: "error.main", color: "error.main" }} className="py-4! rounded-xl! bg-[#FA50501A]! border-1! text-start! md:text-center! px-3! md:px-0! text-xs! md:text-base!">این درخواست بررسی و بسته شده است. در صورت نیاز با پاسخ مجدد بازگشایی خواهد شد.</Typography>

                <Stack className="hidden! md:block!">
                    <Table
                        // pagination={accounts?.pagination!}
                        sx={{ mt: 2 }}
                        loading={false}
                        headCells={headCells}
                        rows={tableRows ?? []}
                    />
                </Stack>
            </Stack>


            <Stack mt={3} mb={3}>
                <SupporterCard />

                <SupporterCard />

                <SupporterCard files={fileData} />

                <SupporterCard />

                <SupporterCard files={fileData} />
            </Stack>



            <FormProvider onSubmit={OnSubmit} methods={methods}>
                <RHFTextarea name="message" onChange={setHtml} height={300} />

                <Stack className="px-3! py-4! rounded-xl! flex! flex-row! justify-between! items-center! border-1! border-slate-200!" mt={3}>
                    <Typography color="text.secondary" className="text-xs! md:text-sm!">فایل های خود را برای اپلود انتخاب کنید</Typography>
                    <Stack className="w-fit!">
                        <RHFUploadButton sx={{ color: "secondary.main" }} className="text-xs! p-0! md:text-sm! border-0! md:p-2!" name="t" buttonText="انتخاب فایل" />
                    </Stack>
                </Stack>
                <Typography mt={1} color="text.secondary" className="text-xs!">پسوند های مجاز: .jpg, .gif, .jpeg, .png, .zip, .pdf, (Max file size: 512MB)</Typography>

                <Stack className="hidden! md:flex! flex-row! gap-8! w-full!" mt={4}>
                    <Button className="w-full! text-lg! text-black! rounded-2xl!" variant="outlined">انصراف و بازگشت</Button>
                    <Button className="w-full! text-lg! text-white! rounded-2xl!" variant="contained" type="submit">ارسال</Button>
                </Stack>

                <FixedBottomButton py={1.5}>
                    <Button className="w-full! text-base! text-white! py-4!" variant="contained">ارسال</Button>
                </FixedBottomButton>
            </FormProvider>
        </Stack>
    )
}
