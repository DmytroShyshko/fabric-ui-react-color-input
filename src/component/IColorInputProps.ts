import { ITheme } from "office-ui-fabric-react/lib/Styling";

export interface IColorInputProps {
    value: string;
    onChange: (value: string) => void;
    theme?: ITheme;
}