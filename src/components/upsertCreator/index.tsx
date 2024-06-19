import { Button, Col, Form, Modal, ModalProps, Row, notification } from "antd";
import { CreatorType } from "../Creators/TableView";
import "./index.scss";
import { CloseOutlined } from "@ant-design/icons";
import { useCallback } from "react";
import { postCreators, updateCreators } from "@/services/creators";
import FormInputs from "@/components/upsertCreator/FormInputs";

export enum MODAL_MODES {
  EDIT = "Edit",
  ADD = "ADD",
}

interface IUpsertModal extends ModalProps {
  onClose: () => void;
  record?: CreatorType;
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

  const upsertData = useCallback(
    (formData: CreatorType) => {
      const isAddNewMode = props.mode === MODAL_MODES.ADD;
      const upsertMethod = isAddNewMode ? postCreators : updateCreators;
      const sucessMessage = isAddNewMode
        ? "Added new creator"
        : "Updated creator details";

      const { email, gender, name, status } = formData;
      let payload = {
        email,
        name,
        gender: gender ?? "male",
        status: status ?? "active",
      };

      upsertMethod(
        isAddNewMode
          ? { ...payload, id: props?.record?.id ?? 0 }
          : { ...payload, id: props?.record?.id ?? 0 }
      )
        .then(() => {
          notification.success({ message: sucessMessage });
          props.onClose?.();
        })
        .catch(() => {
          notification.error({ message: "Something went wrong..!" });
        });
    },
    [props.mode, props?.record?.id]
  );

  return (
    <Modal
      className="upsert-creator-modal"
      closeIcon={null}
      title={Title}
      {...props}
      footer={null}
      width="45vw"
      destroyOnClose
    >
      <Form
        name="basic"
        style={{ maxWidth: "100%" }}
        labelAlign="left"
        labelCol={{ span: 7 }}
        initialValues={props.record ?? undefined}
        onFinish={upsertData}
        onFinishFailed={() => {}}
        autoComplete="off"
        requiredMark={false}
      >
        <FormInputs mode={props.mode} status={props.record?.status} />
      </Form>
    </Modal>
  );
}
