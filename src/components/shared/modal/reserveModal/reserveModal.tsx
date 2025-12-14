// components/ReserveButtonWithModal.tsx
"use client";

import * as React from "react";
import { Button, Stack, Typography } from "@mui/material";
import ReusableDrawer from "@/components/shared/reuseableDrawer";
import { Add } from "@mui/icons-material";

export default function ReserveButtonWithModal({ room }: { room?: string | number }) {
    const [open, setOpen] = React.useState(false);
    const [count, setCount] = React.useState(2);

    return (
        <>
            <Button
                className="text-white! w-full"
                variant="contained"
                onClick={() => setOpen(true)}
            >
                رزرو و ثبت اطلاعات
            </Button>

            <ReusableDrawer
                open={open}
                setOpen={setOpen}
                title={"انتخاب تعداد"}
                closeText=""
                height="auto"
                sx={{ zIndex: 10000 }}
            >
                <Stack spacing={4}>
                    <Stack mt={2}>
                        <Typography className="text-xl! mb-4! font-semibold!">اتاق اول</Typography>

                        <Stack className="flex flex-row! justify-between! items-center!" mb={2}>
                            <Typography>بزرگسال (۱۲ سال به بالا)</Typography>

                            <Stack direction="row" spacing={2} alignItems="center" className="select-none">
                                <Button
                                    variant="outlined"
                                    onClick={() => setCount((p) => Math.max(0, p - 1))}
                                    className="p-2! rounded-lg! border-slate-200! text-slate-800! font-bold text-2xl! shadow-none hover:bg-slate-50"
                                    sx={{ backgroundColor: "background.paper" }}
                                >
                                    −
                                </Button>

                                <Typography className="font-medium text-slate-800">
                                    {count}
                                </Typography>

                                <Button
                                    sx={{ backgroundColor: "background.paper" }}
                                    variant="outlined"
                                    onClick={() => setCount((p) => p + 1)}
                                    className="p-2! rounded-lg! border-slate-200! text-slate-800! font-bold text-2xl! shadow-none hover:bg-slate-50"
                                >
                                    +
                                </Button>
                            </Stack>
                        </Stack>


                        <Stack className="flex flex-row! justify-between! items-center!">
                            <Typography>کودک ( 5 تا 12 سال)</Typography>

                            <Stack direction="row" spacing={2} alignItems="center" className="select-none">
                                <Button
                                    variant="outlined"
                                    onClick={() => setCount((p) => Math.max(0, p - 1))}
                                    className="p-2! rounded-lg! border-slate-200! text-slate-800! font-bold text-2xl! shadow-none hover:bg-slate-50"
                                    sx={{ backgroundColor: "background.paper" }}
                                >
                                    −
                                </Button>

                                <Typography className="font-medium text-slate-800">
                                    {count}
                                </Typography>

                                <Button
                                    sx={{ backgroundColor: "background.paper" }}
                                    variant="outlined"
                                    onClick={() => setCount((p) => p + 1)}
                                    className="p-2! rounded-lg! border-slate-200! text-slate-800! font-bold text-2xl! shadow-none hover:bg-slate-50"
                                >
                                    +
                                </Button>
                            </Stack>
                        </Stack>
                    </Stack>

                    <Button
                        className="w-full"
                        variant="outlined"
                        startIcon={<Add />}
                        sx={{ color: "secondary.main", border: "2px dashed", mt: 2 }}
                    >
                        افزودن اتاق جدید
                    </Button>


                    <Button
                        className="text-white! w-full rounded-xl!"
                        variant="contained"
                    >
                        تایید و ادامه
                    </Button>
                </Stack>
            </ReusableDrawer>
        </>
    );
}

