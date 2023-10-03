import {
  Collapse,
  Divider,
  Link,
  List,
  ListItemButton,
  ListItemText,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import { Fragment } from "react";

import type { NavItemConfig } from "../appbar-menu";

const CustomListItemText = styled(ListItemText)({
  marginTop: 0,
  marginBottom: 0,
});

export const MobileSubMenu = ({
  isOpen,
  config,
}: {
  isOpen: boolean;
  config: NavItemConfig;
}) => {
  const theme = useTheme();
  return (
    <Collapse in={isOpen} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {config.children &&
          config.children.map((child) => (
            <Fragment key={child.title}>
              <ListItemButton
                sx={{
                  p: theme.spacing(2, 3),
                  backgroundColor: "#f6f8f9",
                }}
              >
                <Link
                  href={child.path}
                  sx={{
                    textDecoration: "none",
                    color: "#212121",
                    width: "100%",
                  }}
                >
                  <CustomListItemText>
                    <Typography fontSize={16} fontWeight={400}>
                      {child.title}
                    </Typography>
                  </CustomListItemText>
                </Link>
              </ListItemButton>
            </Fragment>
          ))}
      </List>
    </Collapse>
  );
};
