import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import { Link } from "react-router-dom";
import { info } from "../../../../data";

export default function BasicMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                style={{ fontSize: "20px" }}>
                Menu
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}>
                <MenuItem onClick={handleClose}>
                    <Link to="lab1">{info[0].title}</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to="lab2">{info[1].title}</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to="lab3">{info[2].title}</Link>
                </MenuItem>
            </Menu>
        </div>
    );
}
