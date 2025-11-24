import CollapseItem from "@/components/shared/collapse/collapseText";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import Question from "./_components/question";
import GoldenText from "../GoldenText";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CategoryTabs from "./_components/CategoryTabs";

const faqs = [
  {
    title: "1. کدام تور برای خانواده‌ها مناسب‌تر است؟",
    description:
      "تورهای خانوادگی کیش معمولاً شامل پارک‌ها، شاپینگ سنترها و برنامه‌های تفریحی جمعی هستند.",
  },
  {
    title: "2. آیا می‌توان تورها را بصورت لحظه‌ آخری رزرو کرد؟",
    description:
      "بله، برخی از تورها امکان رزرو لحظه‌ آخری دارند که معمولاً تخفیف‌های ویژه نیز ارائه می‌شود.",
  },
  {
    title: "3. برای تفریحات دریایی نیاز به داشتن مهارت خاصی هست؟",
    description:
      "خیر، اکثر تفریحات دریایی کیش مانند غواصی، پاراسل، شاتل و اسکوتر زیر دریایی نیازی به تجربه قبلی ندارند. راهنماهای حرفه‌ای قبل از شروع، آموزش‌های لازم را ارائه می‌دهند تا با خیال راحت از هیجان این تفریحات لذت ببرید. 🌊 🚤",
  },
  {
    title: "4. کدام تورها برای افراد ماجراجو و هیجان‌دوست پیشنهاد می‌شود؟",
    description: "کدام تورها برای افراد ماجراجو و هیجان‌دوست پیشنهاد می‌شود؟",
  },
  {
    title: "5. هزینه تورها شامل چه مواردی می‌شود؟",
    description: "هزینه تورها شامل چه مواردی می‌شود؟",
  },
  {
    title: "6. برای تفریحات دریایی نیاز به داشتن مهارت خاصی هست؟",
    description: "بهترین زمان برای رزرو تورهای کیش چه فصلی است؟",
  },
];

export default function CommonQuestions({
  hasTItle = true,
  hasFooter = true,
  responsive = false,
  isAboutUs = false,
}: {
  hasTItle?: boolean;
  hasFooter?: boolean;
  responsive?: boolean;
  isAboutUs?: boolean;
}) {
  return (
    <Stack >
      <Stack className={`${isAboutUs ? "bg-[#F5F7FA]! rounded-2xl! " : ""}`}>
        {hasTItle && (
          <Stack
            className="flex! flex-col! justify-center! items-center! "
            mt={10}
            mb={5}
            spacing={2}
          >
            <Typography className="text-slate-400! text-lg!">
              شاید جواب سوالت اینجا باشه
            </Typography>
            <GoldenText
              textClass="text-5xl! font-bold!"
              text={
                <>
                  <span className="text-black!">پر تکرارترین </span> سوالات{" "}
                  <span className="text-black!">متداول شما</span>
                </>
              }
              bgColor="orange"
              textColor="primary"
              bgColorSx={{ left: 20, bottom: -10 }}
              bgWidth="93% "
            />
          </Stack>
        )}

        {isAboutUs && (
          <Stack className="px-4! mb-6! hidden! md:block!">
            <CategoryTabs />
          </Stack>
        )}
      </Stack>

      {responsive ? (
        <Accordion className=" rounded-lg border-none!" defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon fontSize="large" />}
            aria-controls="faq-content"
            id="faq-header"
          >
            <p className="font-semibold text-2xl!">سوالات متداول</p>

          
          
          </AccordionSummary>
          {isAboutUs && (
              <Stack className="mb-5! mt-2! md:hidden!">
                <CategoryTabs />
              </Stack>
            )}
          <Divider className="mt-4!" />

          <AccordionDetails className="p-0">
            <div className="w-full mx-auto rounded-b-lg">
              {faqs.map((faq, idx) => (
                <div key={idx + "fraqs"}>
                  <CollapseItem
                    costumIcon={true}
                    title={faq.title}
                    description={faq.description}
                  />
                  {idx !== faqs.length - 1 && (
                    <Divider className="bg-gray-100" />
                  )}
                </div>
              ))}
            </div>
          </AccordionDetails>
        </Accordion>
      ) : (
        <div className="w-full! mx-auto bg-white  rounded-lg ">
          {faqs.map((faq, idx) => (
            <>
              <CollapseItem
                key={idx + "fraqs2"}
                title={faq.title}
                description={faq.description}
              />
              <Divider className="text-gray-50! bg-gray-50!" />
            </>
          ))}
        </div>
      )}

      {hasFooter && (
        <Stack className="border-1! border-slate-200! p-3! rounded-2xl! mt-10!">
          <Question />
        </Stack>
      )}
    </Stack>
  );
}
