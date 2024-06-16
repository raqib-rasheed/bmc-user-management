import { Table, notification } from "antd";
import "./index.scss";
import { useCallback, useEffect, useState } from "react";
import useOpen from "@/utils/useOpen";
import UpsertModal, { MODAL_MODES } from "@/components/UpsertCreator";
import { deleteCreators, getCreators } from "@/services/creators";
import { getTableColumns } from "./columns";

export interface CreatorType {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
}

export default function CreatorsTable() {
  const [creators, setCreators] = useState<CreatorType[]>([]);
  const [loadingCreators, setLoadingCreators] = useState(false);
  const [creatorRecordToEdit, setCreatorRecordToEdit] = useState<CreatorType>();
  const [creatorRecordToDelete, setCreatorRecordToDelete] =
    useState<CreatorType>();
  const {
    open: openUpsertCreatorModal,
    toggleOpen: toggleUpsertModalVisibilty,
  } = useOpen();

  const handleEditActionClick = useCallback(
    (record: CreatorType) => {
      setCreatorRecordToEdit(record);
      toggleUpsertModalVisibilty();
    },
    [toggleUpsertModalVisibilty]
  );

  const handleDeleteActionClick = useCallback((record: CreatorType) => {
    setCreatorRecordToDelete(record);
  }, []);

  useEffect(() => {
    setLoadingCreators(true);
    getCreators()
      .then((res) => {
        setCreators(res.data);
      })
      .catch(() => {
        notification.error({ message: "Oops..! Something went wrong." });
      })
      .finally(() => setLoadingCreators(false));
  }, []);

  const onDelete = () => {
    if (creatorRecordToDelete) {
      deleteCreators(creatorRecordToDelete.id).then(() =>
        notification.success({ message: "Removed Creator!" })
      );
    }
  };

  const columnTable = getTableColumns(
    handleEditActionClick,
    handleDeleteActionClick,
    onDelete
  );

  return (
    <>
      <Table
        loading={loadingCreators}
        dataSource={creators}
        virtual
        columns={columnTable}
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
