import { Button, Col, Form, Input, Modal, ModalProps, Row, Select } from "antd";
import { DataType } from "../Creators/TableView";
import "./index.scss";
import { CloseOutlined } from "@ant-design/icons";

export enum MODAL_MODES {
  EDIT = "Edit",
  ADD = "ADD",
}

type FieldType = {
  name?: string;
  email?: string;
  gender?: string;
  status?: string;
};

interface IUpsertModal extends ModalProps {
  record?: DataType;
  mode?: MODAL_MODES;
}

export default function UpsertModal(props: IUpsertModal) {
  const modalTitle =
    props?.mode === MODAL_MODES.EDIT
      ? `Edit ${props.record?.name}'s details`
      : "Add a new creator";

  const Title = (
    <Row justify="space-between" align="middle" className="modal-title">
      <Col>
        <h3>{modalTitle}</h3>
      </Col>
      <Col>
        <Button
          onClick={props.onClose}
          type="text"
          icon={<CloseOutlined />}
        ></Button>
      </Col>
    </Row>
  );

  const submitButtonText =
    props?.mode === MODAL_MODES.EDIT ? "Update" : "+ Add creator";

  return (
    <Modal
      className="upsert-creator-modal"
      closeIcon={null}
      title={Title}
      {...props}
      footer={null}
    >
      <Form
        name="basic"
        style={{ maxWidth: "100%" }}
        labelAlign="left"
        labelCol={{ span: 7 }}
        initialValues={props.record ?? undefined}
        onFinish={() => {}}
        onFinishFailed={() => {}}
        autoComplete="off"
        requiredMark={false}
      >
        <Form.Item<FieldType>
          label="Creator Name"
          name="name"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input size="large" placeholder="Enter creator's name" />
        </Form.Item>
        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input size="large" placeholder="Enter email" />
        </Form.Item>
        <Form.Item<FieldType>
          label="Gender"
          name="gender"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Select
            size="large"
            defaultValue="male"
            options={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
            ]}
          />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 7, span: 16 }}>
          <Button className="upsertButton" type="primary" htmlType="submit">
            {submitButtonText}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}
