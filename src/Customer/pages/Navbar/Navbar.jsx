import { AccountCircle, NotificationsActive } from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { useSelector } from "react-redux";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const navigate = useNavigate();
  const { auth, notification } = useSelector((store) => store);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="z-50 px-6 flex items-center justify-between py-2">
      <div className="flex items-center gap-10">
        <h1
          onClick={() => navigate("/")}
          className="cursor-pointer font-bold text-2xl"
        >
          Salon Service
        </h1>
        <div className="flex items-center gap-5">
          <h1>Home</h1>
        </div>
      </div>
      <div className="flex items-center gap-3 md:gap-6">
        <Button variant="outlined">Become partner</Button>

        <IconButton onClick={() => navigate("/notification")}>
          <Badge badgeContent={notification.unreadCount}>
            <NotificationsActive color="primary" />
          </Badge>
        </IconButton>

        {auth.user?.id ? (
          <div className="flex gap-1 items-center">
            <h1 className="text-lg font-semibold">
              {auth.user?.fullName}
            </h1>
            <IconButton
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <Avatar sx={{ bgcolor: "green" }}>
                {auth.user?.fullName?.[0].toUpperCase()}
              </Avatar>
            </IconButton>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem
                onClick={() => {
                  navigate("/bookings");
                  handleClose();
                }}
              >
                My Bookings
              </MenuItem>

              {auth.user?.role === "SALON_OWNER" && (
                <MenuItem
                  onClick={() => {
                    navigate("/salon-dashboard");
                    handleClose();
                  }}
                >
                  Salon Dashboard
                </MenuItem>
              )}

              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        ) : (
          <IconButton onClick={() => navigate("/login")}>
            <AccountCircle sx={{ fontSize: "45px", color: "green" }} />
          </IconButton>
        )}
      </div>
    </div>
  );
};

export default Navbar;
