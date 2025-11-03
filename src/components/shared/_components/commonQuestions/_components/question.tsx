"use client";
import Button from "@mui/material/Button";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";

type QuestionProps = { animation?: boolean };

const Question = ({ animation = true }: QuestionProps) => {
  const r = animation ? "reveal" : "";
  const rd = animation ? "reveal-down" : "";

  return (
    <Stack className="flex! flex-row! justify-between! items-center!">
      <Stack className="flex! flex-row! items-center! gap-2">
        <div className={`w-25! h-25! relative ${r}`}>
          <Image src="/images/phone-message.png" alt="s" fill />
        </div>

        <Stack spacing={2}>
          <Typography className={`text-lg! font-bold! ${rd}`}>
            جواب سوالت رو پیدا نکردی ؟!
          </Typography>

          <Typography className={`text-slate-400! ${rd}`}>
            اشکالی نداره! تیم پشتیبانی کیشلندیار 24 ساعته آماده شنیدن سوالات،
            پیشنهادات و انتقادات شما عزیزان هستش
          </Typography>
        </Stack>
      </Stack>

      <Stack>
        <Button
          sx={{ bgcolor: "secondary.main" }}
          className={`text-white! rounded-3xl! px-14! font-normal! ${r}`}
          variant="contained"
          startIcon={<PhoneInTalkIcon />}
          href="/fa/panel/support"
        >
          ارتباط با پشتیبانی
        </Button>
      </Stack>
    </Stack>
  );
};

export default Question;
