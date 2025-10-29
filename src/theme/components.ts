import { Components, Theme } from "@mui/material/styles";
import TypographyComponents from "./components/typography";
import ButtonComponents from "./components/buttons";
import InputComponents from "./components/inputs";
import NavigationComponents from "./components/navigation";
import SurfaceComponents from "./components/surfaces";
import AccordionComponents from "./components/accordion";
import SelectComponents from "./components/select";
import CheckboxComponents from "./components/checkbox";
import RadioComponents from "./components/radio";
import SwitchComponents from "./components/switch";

const components: Components<Theme> = {
  ...TypographyComponents,
  ...ButtonComponents,
  ...InputComponents,
  ...NavigationComponents,
  ...SurfaceComponents,
  ...AccordionComponents,
  ...SelectComponents,
  ...CheckboxComponents,
  ...RadioComponents,
  ...SwitchComponents,
};

export default components;
