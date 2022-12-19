import SendBottom from "./SendBottom";
import { Button } from "@mui/material";
import DocBom from "./DocBom";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";

const DocTop = () => {
  return (
    <div className="bg-whiteRight rounded-3xl w-full h-full mt-3 mb-3 py-4 px-4">
      <KeyboardArrowLeftRoundedIcon className="bg-primary text-white rounded-full" />
      <DocBom />
    </div>
  );
};

export default DocTop;
