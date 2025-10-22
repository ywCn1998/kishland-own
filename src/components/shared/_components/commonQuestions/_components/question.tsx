"use client";
import Button from "@mui/material/Button";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";

const Question = () => {
  return (
    <Stack className="flex! flex-row! justify-between! items-center!">
      <Stack className="flex! flex-row! items-center! gap-2">
        <div className="w-25! h-25! relative reveal">
          <Image src="/images/phone-message.png" alt="s" fill />
        </div>
        <Stack spacing={2}>
          <Typography className="text-lg! font-bold! reveal-down">
            جواب سوالت رو پیدا نکردی ؟!
          </Typography>
          <Typography className="text-slate-400! reveal-down">
            اشکالی نداره! تیم پشتیبانی کیشلندیار 24 ساعته آماده شنیدن سوالات،
            پیشنهادات و انتقادات شما عزیزان هستش
          </Typography>
        </Stack>
      </Stack>

      <Stack>
        <Button
          sx={{ bgcolor: "secondary.main" }}
          className="text-white! rounded-3xl! px-14! font-normal! reveal"
          variant="contained"
          startIcon={<PhoneInTalkIcon />}
        >
          ارتباط با پشتیبانی
        </Button>
      </Stack>
    </Stack>
  );
};

export default Question;
