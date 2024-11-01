import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { commonRutes } from "@/common/routes";
import { comonText } from "@/common/constant";
import Drawer from "@mui/material/Drawer";

interface BlogSubItem {
  path: string;
  displayName: string;
}

const pages = [
  commonRutes.Products,
  commonRutes.pricing,
  commonRutes.blog,
  commonRutes.toogleClick,
  commonRutes.input,
  commonRutes.searchComponent,
  commonRutes.lazyLoadin,
];

const blogMenuItems = [
  { path: "/blog/latestposts", displayName: "Latest Posts" },
  { path: "/blog/categories", displayName: "Categories" },
  { path: "/blog/archives", displayName: "Archives" },
];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const blogSubItems = [
  { path: "/blog/submenu1", displayName: "Submenu item 1" },
  { path: "/blog/submenu2", displayName: "Submenu item 2" },
  { path: "/blog/submenu3", displayName: "Submenu item 3" },
  { path: "/blog/submenu4", displayName: "Submenu item 4" },
  { path: "/blog/submenu5", displayName: "Submenu item 5" },
];

function ResponsiveAppBar() {
  const [submenuAnchor, setSubmenuAnchor] = React.useState<null | HTMLElement>(
    null
  );

  const [selectedPage, setSelectedPage] = React.useState<string | null>(null);

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElBlog, setAnchorElBlog] = React.useState<null | HTMLElement>(
    null
  );
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleOpenBlogMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElBlog(event.currentTarget);
    setSubmenuAnchor(null);
  };

  const handleOpenSubmenu = (event: React.MouseEvent<HTMLElement>) => {
    setSubmenuAnchor(event.currentTarget);
  };

  const handleCloseSubmenu = () => {
    setSubmenuAnchor(null);
  };

  const handleCloseNavMenu = () => {
    setAnchorElBlog(null);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseBlogMenu = () => {
    setAnchorElBlog(null);
  };
  const handlePageClick = (page: string) => {
    setSelectedPage(page);
    handleCloseNavMenu();
  };
  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const handleBlogDropdownClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    handleOpenBlogMenu(event);
  };
  const handleMenuClose = () => {
    setSubmenuAnchor(null);
    handleCloseSubmenu();
  };
  const handleBlogItemClick = (subitem: BlogSubItem) => {
    toggleDrawer(false)();
  };
  const blogDropDown = () => {
    toggleDrawer(false)();
  };
  const drawer = (
    <Box
      sx={{
        width: 250,
        bgcolor: "background.paper",
        padding: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {pages.map((page) => (
        <Link
          key={page}
          to={page}
          style={{
            textDecoration: "none",
            color: "inherit",
            display: "flex",
            alignItems: "center",
            padding: "8px 16px",
            width: "100%",
          }}
          onClick={page !== commonRutes.blog ? toggleDrawer(false) : undefined}
        >
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            {page.replace("/", "").toUpperCase()}
          </Typography>
        </Link>
      ))}

      <MenuItem onClick={handleBlogDropdownClick}>
        <Typography
          sx={{ fontWeight: "bold", display: "flex", alignItems: "center" }}
        >
          Blog <ArrowDropDownIcon sx={{ marginLeft: 1 }} />{" "}
        </Typography>
      </MenuItem>
    </Box>
  );

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <IconButton
            size="large"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          >
            <MenuIcon sx={{ color: "white" }} />
          </IconButton>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {comonText.logo}
          </Typography>

          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
            {drawer}
          </Drawer>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handlePageClick(page)}
                onMouseEnter={
                  page === commonRutes.blog ? handleOpenBlogMenu : undefined
                }
                sx={{
                  my: 2,
                  backgroundColor: selectedPage === page ? "white" : "initial",
                  color: selectedPage === page ? "black" : "white",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {page === commonRutes.blog ? (
                  <>
                    {comonText.blog}
                    <ArrowDropDownIcon />
                  </>
                ) : (
                  <Link
                    to={page}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {page.replace("/", "").toUpperCase()}
                  </Link>
                )}
              </Button>
            ))}
            <Menu
              id="blog-menu"
              anchorEl={anchorElBlog}
              open={Boolean(anchorElBlog)}
              onClose={handleCloseBlogMenu}
              onMouseLeave={handleCloseBlogMenu}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              {blogMenuItems.map((item, index) => (
                <MenuItem
                  key={item.path}
                  onMouseEnter={index === 2 ? handleOpenSubmenu : undefined}
                  onMouseLeave={index === 2 ? handleCloseSubmenu : undefined}
                  onClick={() => {
                    handlePageClick(item.path);
                    handleMenuClose();
                    blogDropDown();
                  }}
                >
                  <Link
                    to={item.path}
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Typography>{item.displayName}</Typography>
                    {index === 2 && (
                      <div className="ml-2">
                        <ArrowDropDownIcon />
                      </div>
                    )}
                  </Link>

                  {index === 2 && (
                    <Menu
                      id="submenu"
                      anchorEl={submenuAnchor}
                      open={Boolean(submenuAnchor)}
                      onClose={handleCloseSubmenu}
                      onMouseLeave={handleCloseSubmenu}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                    >
                      {blogSubItems.map((subitem) => (
                        <MenuItem
                          key={subitem.path}
                          onClick={() => handleBlogItemClick(subitem)}
                        >
                          <Link
                            to={subitem.path}
                            style={{ textDecoration: "none", color: "inherit" }}
                          >
                            <Typography>{subitem.displayName}</Typography>
                          </Link>
                        </MenuItem>
                      ))}
                    </Menu>
                  )}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ marginLeft: "auto" }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
