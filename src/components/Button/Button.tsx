import { ButtonProps } from "./Button.types";
import { Button as MUIButton } from "@mui/material";

const Button = (props: ButtonProps): JSX.Element => {
    const {text, onClick} = props;
    return (
        <MUIButton variant="contained" title={text} onClick={onClick}/>
    );
};

export default Button;