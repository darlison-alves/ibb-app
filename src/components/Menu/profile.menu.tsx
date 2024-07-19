import { IconButton, Menu, MenuItem } from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from "react";
import { useNavigate } from "react-router-dom";
import { useUpdateFirstFormData } from "../../context/FormContext";


const ITEM_HEIGHT = 48;

export interface ProfileMenuProps {
    userId?: number;
    planId?: number;
}

export const ProfileMenu: React.FC<ProfileMenuProps> = ({ userId, planId }) => {

    const navigate = useNavigate();
    const updateFirstFormData = useUpdateFirstFormData();

    const options = [
        {
            id: 1,
            label: 'Pagar Assinatura',
            handle: () => handleSelected()
        }
    ];

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        console.log('event.currentTarget', event.currentTarget)
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSelected = () => {
        updateFirstFormData(userId)
        navigate(`/plans/${planId}/pay`);
    };

    return (
        <div>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>


            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}                
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    },
                }}
            >
                {options.map((option) => (
                    <MenuItem key={option.id} onClick={(evt) => option.handle()}>
                        {option.label}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    )
}