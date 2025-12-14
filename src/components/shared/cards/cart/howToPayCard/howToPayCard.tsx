import { Stack } from "@mui/material"
import CustomAccordion from "../../../collapse/collapse"
import PayOnline from "../cards/payOnlineCard"
import PayLoan from "../cards/payLoans"
import PayWallet from "../cards/payWallet"

export default function HowToPayCard() {
    return (
        <Stack
            sx={{
                // border: "1px solid #e2e8f0",
                borderRadius: { xs: "12px", lg: "16px" },
                backgroundColor: "white",
                overflow: "hidden",
                p: { xs: 0, lg: 2 },
            }}
        >
            <Stack spacing={2}>
                <PayOnline
                // selected={selected }
                // // onClick={() => setSelected("online")}
                />
                <PayLoan
                // selected={selected }
                // // onClick={() => setSelected("loan")}
                />
                <PayWallet
                // selected={selected }
                // // onClick={() => setSelected("wallet")}
                />
            </Stack>
        </Stack>
    )
}
