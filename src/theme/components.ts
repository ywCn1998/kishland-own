import { Components, Theme } from "@mui/material/styles";
import TypographyComponents from "./components/typography";
import ButtonComponents from "./components/buttons";
import InputComponents from "./components/inputs";
import NavigationComponents from "./components/navigation";
import SurfaceComponents from "./components/surfaces";
import AccordionComponents from "./components/accordion";

const components: Components<Theme> = {
  ...TypographyComponents,
  ...ButtonComponents,
  ...InputComponents,
  ...NavigationComponents,
  ...SurfaceComponents,
  ...AccordionComponents,
};

export default components;
