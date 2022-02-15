import React from "react";
import { Alert } from "react-bootstrap";

interface MessageProps {
  variant:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
}

const Message: React.FC<MessageProps> = ({ children, variant }) => {
  return <Alert variant={variant}>{children}</Alert>;
};

export default Message;
