import CreatorsTable from "@/components/Creators/TableView";
import { PlusOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import "./index.scss";
import useOpen from "@/utils/useOpen";
import UpsertModal, { MODAL_MODES } from "@/components/UpsertCreator";

export default function CreatorsPage() {
  const {
    open: openUpsertCreatorModal,
    toggleOpen: toggleUpsertModalVisibilty,
  } = useOpen();

  return (
    <section className="creators-page">
      <Row align="middle" justify="space-between">
        <Col>
          <h2>Manage creators</h2>
        </Col>
        <Col>
          <Button
            className="view-status-button"
            icon={<UnorderedListOutlined />}
          >
            View Stats
          </Button>
          <Button
            onClick={toggleUpsertModalVisibilty}
            className="add-new-button"
            icon={<PlusOutlined />}
          >
            Add a new creator
          </Button>
        </Col>
        <Col className="creators-table-container" span={24}>
          <CreatorsTable />
        </Col>
      </Row>
      <UpsertModal
        mode={MODAL_MODES.ADD}
        open={openUpsertCreatorModal}
        onCancel={toggleUpsertModalVisibilty}
        onClose={toggleUpsertModalVisibilty}
      />
    </section>
  );
}
