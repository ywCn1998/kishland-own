import { Divider, Grid } from "@mui/material";
import InformationCard from "@/components/shared/cards/informationCard";

const aboutItems = [
  {
    image: "/images/office-adress.png",
    title: "آدرس دفتر",
    description: "مشهد ...",
  },
  {
    image: "/images/phone-number.png",
    title: "شماره تماس و مشاوره",
    description: "051 567 8725 | 051 567 8725",
  },
  {
    image: "/images/message.png",
    title: "واتس اپ و ارسال پیامک",
    description: "0939 838 4994",
  },
  {
    image: "/images/email.png",
    title: "آدرس الکترونیکی",
    description: "Kishlanyar@info.com",
  },
];

export default function AboutSection() {
  return (
    <Grid container mt={{ lg: 10, xs: 2 }} spacing={2} className="!flex !flex-col lg:!flex-row xs-fullwidth">
      {aboutItems.map((item, i) => (
        <InformationCard
          key={i}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
      <Divider className="lg:!hidden mt-5! mx-4!" />

    </Grid>
  );
}
