import React, { ReactNode, useState } from "react";
import { Button, Popconfirm } from "antd";
import { FaExclamationCircle } from "react-icons/fa";
import { DeleteOutlined } from "@ant-design/icons";
interface ConfirmToastProps {
  title: string;
  description?: string;
  onConfirm: () => Promise<void> | void;
  onCancel?: () => void;
  buttonText: string | ReactNode;
  buttonType?: "default" | "primary" | "dashed" | "link" | "text";
  danger?: boolean;
}

const ConfirmToast: React.FC<ConfirmToastProps> = ({
  title,
  description,
  onConfirm,
  onCancel,
  buttonText,
  buttonType = "primary",
  danger = false,
}) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showPopconfirm = () => {
    setOpen(true);
  };

  const handleOk = async () => {
    setConfirmLoading(true);
    try {
      await onConfirm(); // Wait for async confirmation logic
    } finally {
      setConfirmLoading(false);
      setOpen(false);
    }
  };

  const handleCancel = () => {
    if (onCancel) onCancel();
    setOpen(false);
  };

  return (
    <Popconfirm
      icon={
        <FaExclamationCircle
          style={{
            textAlign: "center",
            color: "red",
            fontSize: "1.2rem",
            alignItems: "center",
            marginRight: "1rem",
          }}
        />
      }
      title={title}
      description={description}
      open={open}
      onConfirm={handleOk}
      okButtonProps={{ loading: confirmLoading }}
      onCancel={handleCancel}
    >
      <Button type={buttonType} onClick={showPopconfirm} danger={danger}>
      {<DeleteOutlined />}
        {buttonText}
      </Button>
    </Popconfirm>
  );
};

export default ConfirmToast;
