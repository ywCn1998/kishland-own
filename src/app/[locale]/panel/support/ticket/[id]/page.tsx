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
import LiteRichEditor from "@/components/shared/_components/customTextarea";
import RHFUploadButton from "@/components/shared/form/RHFChooseFile";
import useSendTicket from "./_hooks/useSendTicket";
import FormProvider from "@/providers/FormProvider";
import RHFTextarea from "@/components/shared/form/RHFTextarea";
import Link from "next/link";


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


    const tableRows = data.map((item: any, index: number) => (
        <Row key={String("ticket" + index)} {...item} index={index} />
    ));

    const items = Array.from({ length: 6 });
    const router = useRouter()

    return (
        <Stack>
            <Stack className="border-1! border-slate-200! py-4 px-6! rounded-2xl! flex! flex-row! justify-between! items-center!">
                <Typography className="font-semibold! text-base!">
                    تیکت {id}
                </Typography>
                <Button onClick={() => router.back()} variant="text" className="p-1! text-base!" sx={{ color: "text.secondary" }} endIcon={<KeyboardArrowLeftOutlinedIcon />}>
                    برگشت
                </Button>
            </Stack>

            <Stack className="border-1! border-slate-200! p-3! rounded-2xl!" mt={3}>
                <Stack className="flex! flex-row! justify-between! items-center!">
                    <Typography className="text-base! px-3!" color="text.secondary" fontWeight={500}>
                        اطلاعات تیکت
                    </Typography>
                    <Stack className="flex! flex-row! gap-3!">
                        <Button variant="contained" sx={{ backgroundColor: "#BFC4D5", color: "text.secondary" }} className="py-3! text-base! rounded-xl!" >
                            تیکت بسته شده
                        </Button>
                        <Button component={Link} href="/fa/panel/support/new-ticket" variant="contained" sx={{ color: "white" }} className="py-3! text-base! rounded-xl!" >
                            پاسخ
                        </Button>
                    </Stack>
                </Stack>

                <Typography mt={4} sx={{ borderColor: "error.main", color: "error.main" }} className="py-4! rounded-xl! bg-[#FA50501A]! border-1! text-center!">این درخواست بررسی و بسته شده است. در صورت نیاز با پاسخ مجدد بازگشایی خواهد شد.</Typography>

                <Table
                    // pagination={accounts?.pagination!}
                    sx={{ mt: 2 }}
                    loading={false}
                    headCells={headCells}
                    rows={tableRows ?? []}
                />
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
                    <Typography color="text.secondary" className="text-sm!">فایل های خود را برای اپلود انتخاب کنید</Typography>
                    <Stack className="w-fit!">
                        <RHFUploadButton sx={{ color: "secondary.main" }} className="text-sm! border-0! p-2!" name="t" buttonText="انتخاب فایل" />
                    </Stack>
                </Stack>
                <Typography mt={1} color="text.secondary" className="text-xs!">پسوند های مجاز: .jpg, .gif, .jpeg, .png, .zip, .pdf, (Max file size: 512MB)</Typography>

                <Stack className="flex! flex-row! gap-8! w-full!" mt={4}>
                    <Button className="w-full! text-lg! text-black! rounded-2xl!" variant="outlined">انصراف و بازگشت</Button>
                    <Button className="w-full! text-lg! text-white! rounded-2xl!" variant="contained" type="submit">ارسال</Button>
                </Stack>
            </FormProvider>
        </Stack>
    )
}