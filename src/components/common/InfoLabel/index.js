import { Tooltip } from "@material-ui/core";
import React from "react";
import { FormLabel } from "react-bootstrap";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
const Label = props => {

    const {
        title = "",
        placement = "right",
        label,
        iconColor = "#1DBC8C",
        required = false,
        ...others
    } = props;

    return (
        <div className="inline-flex resultados__cards__card__info" >
            <FormLabel style={{marginRight: "5px"}}>{label}</FormLabel>
            <Tooltip
                title={<div style={{ whiteSpace: "pre-line", fontSize: "0.95rem", lineHeight: "1.2"}}>{title}</div>}
                arrow
                placement={placement}
                hidden={!title}
            >
                <div style={{height: "fit-content"}}>
                    <InfoOutlinedIcon
                        sx={{ color: iconColor }}
                        size={18}
                    />
                </div>
            </Tooltip>
        </div>
    );
}

export default Label;