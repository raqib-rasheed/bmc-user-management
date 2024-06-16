import { Button, Popconfirm, TableProps } from "antd";
import { CreatorType } from ".";
import { capitalize } from "@/utils/helperMethods";
import { DeleteOutlined } from "@ant-design/icons";

export const getTableColumns: (
  handleEditActionClick: (record: CreatorType) => void,
  handleDeleteActionClick: (record: CreatorType) => void,
  onDelete: () => void
) => TableProps<CreatorType>["columns"] = (
  handleEditActionClick: (record: CreatorType) => void,
  handleDeleteActionClick: (record: CreatorType) => void,
  onDelete
) => [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: "20%",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    width: "30%",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
    width: "10%",
    render: (gender) => <>{capitalize(gender)}</>,
  },
  {
    title: "Available for chat",
    dataIndex: "status",
    key: "status",
    width: "10%",
    render: (status) => <span className={status}>{capitalize(status)}</span>,
  },
  {
    title: "Action",
    dataIndex: "",
    key: "action",
    width: "10%",
    render: (_, record) => {
      return (
        <div className="actions-container">
          <Button onClick={() => handleEditActionClick(record)}>Edit</Button>
          <Popconfirm
            title="Delete Creator"
            description="Are you sure to delete this task?"
            onConfirm={onDelete}
            okText="Yes"
            cancelText={null}
          >
            <Button
              onClick={() => handleDeleteActionClick(record)}
              icon={<DeleteOutlined />}
              type="text"
            />
          </Popconfirm>
        </div>
      );
    },
  },
];
