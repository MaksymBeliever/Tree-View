import { FolderOpen } from "react-ionicons";
import { SIZES } from "../../../variables/sizes";
import { COLORS } from "../../../variables/colors";
import { ReactComponent as VueIcon } from "../../../assets/svg/vue.svg";
import { ReactComponent as JavascriptIcon } from "../../../assets/svg/javascript.svg";
import { ReactComponent as TypescriptIcon } from "../../../assets/svg/typescript.svg";
import { ReactComponent as ScssIcon } from "../../../assets/svg/sass.svg";
import { ReactComponent as HtmlIcon } from "../../../assets/svg/html.svg";

export const useRenderIcon = () => {
    const renderFileIcon = (format) => {
        switch (format) {
            case "js":
                return <JavascriptIcon height={SIZES.ICON.BIG} width={SIZES.ICON.BIG} />;
            case "ts":
                return <TypescriptIcon height={SIZES.ICON.BIG} width={SIZES.ICON.BIG} />;
            case "vue":
                return <VueIcon height={SIZES.ICON.BIG} width={SIZES.ICON.BIG} />;
            case "scss":
                return <ScssIcon height={SIZES.ICON.BIG} width={SIZES.ICON.BIG} />;
            case "html":
                return <HtmlIcon height={SIZES.ICON.BIG} width={SIZES.ICON.BIG} />;
            default:
                return;
        }
    };

    const renderFileType = (type, format = "") => {
        if (type === "folder") {
            return (
                <FolderOpen
                    color={COLORS.LIGHT_BLUE}
                    height={SIZES.ICON.BIG}
                    width={SIZES.ICON.BIG}
                />
            );
        }

        return renderFileIcon(format);
    };

    return {
        renderFileIcon,
        renderFileType,
    };
};
