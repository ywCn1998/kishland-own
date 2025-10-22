import { ArrowBackIosNew } from "@mui/icons-material";
import { ReactNode, useState } from "react";

const TextHider = ({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleText = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div style={{ padding: "1rem" }}>
      <p
        className={`${className} ${
          isVisible ? "line-clamp-none" : "line-clamp-3"
        }`}
      >
        {children}
      </p>
      <button className="my-5 text-cyan-400 cursor-pointer absolute right-0" onClick={toggleText}>
        {isVisible ? "مشاهده کمتر" : "مشاهده بیشتر "}
        <ArrowBackIosNew className="text-cyan-400 !text-sm ms-2" />
      </button>
    </div>
  );
};

export default TextHider;
