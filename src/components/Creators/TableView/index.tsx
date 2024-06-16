import { Button, Table, TableProps } from "antd";
import "./index.scss";
import { capitalize } from "@/utils/helperMethods";
import { DeleteOutlined } from "@ant-design/icons";
import { useCallback, useState } from "react";
import useOpen from "@/utils/useOpen";
import UpsertModal, { MODAL_MODES } from "@/components/UpsertCreator";

export interface DataType {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
}

export default function CreatorsTable() {
  const [creatorRecordToEdit, setCreatorRecordToEdit] = useState<DataType>();
  const {
    open: openUpsertCreatorModal,
    toggleOpen: toggleUpsertModalVisibilty,
  } = useOpen();

  const handleEditActionClick = useCallback(
    (record: DataType) => {
      setCreatorRecordToEdit(record);
      toggleUpsertModalVisibilty();
    },
    [toggleUpsertModalVisibilty]
  );

  const columns: TableProps<DataType>["columns"] = [
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
            <Button icon={<DeleteOutlined />} type="text"></Button>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <Table
        dataSource={[
          {
            id: 6964102,
            name: "Chidambaram Pandey",
            email: "pandey_chidambaram@mohr.example",
            gender: "female",
            status: "inactive",
          },
          {
            id: 6964101,
            name: "Anunay Deshpande",
            email: "anunay_deshpande@halvorson-nader.test",
            gender: "female",
            status: "inactive",
          },
          {
            id: 6964099,
            name: "Bishnu Adiga",
            email: "adiga_bishnu@pollich.test",
            gender: "male",
            status: "active",
          },
          {
            id: 6964098,
            name: "Ms. Arjun Singh",
            email: "arjun_ms_singh@leuschke-hand.test",
            gender: "male",
            status: "active",
          },
          {
            id: 6964097,
            name: "Brajesh Shukla",
            email: "shukla_brajesh@leffler-nader.example",
            gender: "female",
            status: "inactive",
          },
          {
            id: 6961069,
            name: "Udai Sinha",
            email: "sinha_udai@walter.example",
            gender: "male",
            status: "inactive",
          },
          {
            id: 6964102,
            name: "Chidambaram Pandey",
            email: "pandey_chidambaram@mohr.example",
            gender: "female",
            status: "inactive",
          },
          {
            id: 6964101,
            name: "Anunay Deshpande",
            email: "anunay_deshpande@halvorson-nader.test",
            gender: "female",
            status: "inactive",
          },
          {
            id: 6964099,
            name: "Bishnu Adiga",
            email: "adiga_bishnu@pollich.test",
            gender: "male",
            status: "active",
          },
          {
            id: 6964098,
            name: "Ms. Arjun Singh",
            email: "arjun_ms_singh@leuschke-hand.test",
            gender: "male",
            status: "active",
          },
          {
            id: 6964097,
            name: "Brajesh Shukla",
            email: "shukla_brajesh@leffler-nader.example",
            gender: "female",
            status: "inactive",
          },
          {
            id: 6961069,
            name: "Udai Sinha",
            email: "sinha_udai@walter.example",
            gender: "male",
            status: "inactive",
          },
          {
            id: 6964102,
            name: "Chidambaram Pandey",
            email: "pandey_chidambaram@mohr.example",
            gender: "female",
            status: "inactive",
          },
          {
            id: 6964101,
            name: "Anunay Deshpande",
            email: "anunay_deshpande@halvorson-nader.test",
            gender: "female",
            status: "inactive",
          },
          {
            id: 6964099,
            name: "Bishnu Adiga",
            email: "adiga_bishnu@pollich.test",
            gender: "male",
            status: "active",
          },
          {
            id: 6964098,
            name: "Ms. Arjun Singh",
            email: "arjun_ms_singh@leuschke-hand.test",
            gender: "male",
            status: "active",
          },
          {
            id: 6964097,
            name: "Brajesh Shukla",
            email: "shukla_brajesh@leffler-nader.example",
            gender: "female",
            status: "inactive",
          },
          {
            id: 6961069,
            name: "Udai Sinha",
            email: "sinha_udai@walter.example",
            gender: "male",
            status: "inactive",
          },
        ]}
        virtual
        columns={columns}
        pagination={false}
        scroll={{ y: 600, x: 1300 }}
      />

      <UpsertModal
        mode={MODAL_MODES.EDIT}
        open={openUpsertCreatorModal}
        onCancel={toggleUpsertModalVisibilty}
        onClose={toggleUpsertModalVisibilty}
        record={creatorRecordToEdit}
      />
    </>
  );
}
