'use client'
import { Add, Remove } from "@mui/icons-material";
import { IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";





export default function SanseCard() {
    const [count, setCount] = useState(0);


    return (
        <Stack className={` ${count > 0 ? "border-2 border-primary bg-[#FFF9EC]!" : "border-1 border-slate-200 bg-white!"} rounded-xl p-4  pb-0 flex flex-row! justify-between items-center`}>


            <Stack className="flex flex-col! gap-1 pt-5 " >
                <Typography variant="h3">صندلی اکونومی (اقتصادی)</Typography>

                <Stack className="flex flex-row! items-center ">
                    <Typography className="line-through" variant="body1" color="primary">650,000</Typography>
                    <Typography color="textSecondary" className="mr-3!">1 نفر/</Typography>
                    <Typography sx={{ fontSize: '24px' }} color="secondary" variant="overline">585,000 تومان</Typography>
                </Stack>
            </Stack>

            <Stack className="flex flex-row! items-center gap-2">
                <IconButton
                    onClick={() => setCount(prev => prev + 1)}
                    className="bg-[#F5F7FA]!  border-1! border-[#E1E6F0]! rounded-xl!">
                    <Add />
                </IconButton>
                <Typography sx={{ fontWeight: 500 }} variant="body2" className="px-4">{count}</Typography>
                <IconButton
                    onClick={() => setCount(prev => prev - 1)}
                    className="bg-[#F5F7FA]!  border-1! border-[#E1E6F0]! rounded-xl!">
                    <Remove />
                </IconButton>

            </Stack>


        </Stack>
    )
}