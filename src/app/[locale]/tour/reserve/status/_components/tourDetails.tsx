import { SelectedTourCard } from "@/components/shared/cards/tour/selectedTourCard";
import TicketCard from "@/components/shared/cards/tour/ticketCard";
import {
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    Button,
} from "@mui/material";

const rows = [
    {
        fullName: "قاسم سبحانی",
        nationalId: "۰۸۵۰۱۵۴۷۱۵",
        birthDate: "۱۳۷۵/۰۴/۱۵",
        status: "رزرو کننده",
    },
    {
        fullName: "قاسم سبحانی",
        nationalId: "۰۸۵۰۱۵۴۷۱۵",
        birthDate: "۱۳۷۵/۰۴/۱۵",
        status: "رزرو کننده",
    },
    {
        fullName: "قاسم سبحانی",
        nationalId: "۰۸۵۰۱۵۴۷۱۵",
        birthDate: "۱۳۷۵/۰۴/۱۵",
        status: "رزرو کننده",
    },
];

export default function TourDetails() {
    return (
        <Stack className="mt-5!">
            <SelectedTourCard />
            <Stack className="rounded-2xl! flex! flex-row! gap-4! p-4!" sx={{ backgroundColor: "secondary.50" }} mt={5}>
                <TicketCard isTicketShape={true} tripLabel="بلیط رفت"/>
                <TicketCard isTicketShape={true} tripLabel="بلیط برگشت" />
            </Stack>

            {/* <Stack className="rounded-2xl! flex! flex-row! gap-4! p-4!" sx={{ backgroundColor: "secondary.50" }} mt={5}>



            </Stack> */}


            <TableContainer
                component={Paper}
                sx={{
                    boxShadow: "none",
                    overflow: "hidden",
                    mt: 4
                }}
            >
                <Table>
                    {/* ===== Table Head ===== */}
                    <TableHead>
                        <TableRow
                            sx={{
                                backgroundColor: "secondary.50",
                                "& th": {
                                    fontWeight: 500,
                                    borderRadius: "16px", // rounded-2xl
                                    color: "text.secondary",
                                    textAlign: "left",
                                    borderBottom: "none",
                                    fontSize: "14px",
                                    py: 2,
                                },
                            }}
                        >
                            <TableCell>نام و نام خانوادگی</TableCell>
                            <TableCell>کد ملی</TableCell>
                            <TableCell>تاریخ تولد</TableCell>
                            <TableCell>وضعیت</TableCell>
                        </TableRow>
                    </TableHead>

                    {/* ===== Table Body ===== */}
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{
                                    "&:last-child td, &:last-child th": { borderBottom: 0 },
                                    borderBottom: "1px solid #e2e8f0", // border-slate-200
                                    backgroundColor: "white"
                                }}
                            >
                                <TableCell align="left">
                                    <Typography>{row.fullName}</Typography>
                                </TableCell>
                                <TableCell align="left">{row.nationalId}</TableCell>
                                <TableCell align="left">{row.birthDate}</TableCell>
                                <TableCell align="left">{row.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>



        </Stack>
    )
}