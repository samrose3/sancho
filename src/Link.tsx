/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import * as React from "react";
import theme from "./Theme";
import PropTypes from "prop-types";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  component?: React.ReactType<any>;
  [key: string]: any; // back hack to permit things like to='/page'
}

export const Link: React.FunctionComponent<LinkProps> = ({
  children,
  component: Component = "a",
  ...other
}) => {
  return (
    <Component
      css={{
        textDecoration: "none",
        color: theme.colors.palette.blue.base
      }}
      {...other}
    >
      {children}
    </Component>
  );
};

Link.propTypes = {
  /** Use a custom component. E.g., ReactRouter Link */
  component: PropTypes.any,

  /** The content of the link */
  children: PropTypes.node
};
