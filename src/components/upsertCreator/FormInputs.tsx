import { Button, Form, Input, Radio, Select } from "antd";
import { useState } from "react";
import { MODAL_MODES } from ".";

type FieldType = {
  name?: string;
  email?: string;
  gender?: string;
  status?: string;
};

interface IUpsertForm {
  mode?: MODAL_MODES;
  status?: string;
}

export default function FormInputs(props: IUpsertForm) {
  const [status, setStatus] = useState("active");
  const [gender, setGender] = useState("male");

  const submitButtonText =
    props?.mode === MODAL_MODES.EDIT ? "Update" : "+ Add creator";

  return (
    <>
      <Form.Item<FieldType>
        label="Creator Name"
        name="name"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input size="large" placeholder="Enter creator's name" />
      </Form.Item>
      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[{ required: true }]}
      >
        <Input size="large" placeholder="Enter email" />
      </Form.Item>
      <Form.Item<FieldType> label="Gender" name="gender">
        <Select
          defaultValue="male"
          onChange={setGender}
          size="large"
          value={gender}
        >
          <Select.Option value="male">Male</Select.Option>
          <Select.Option value="female">Female</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item name="status" label="Available for chat">
        <Radio.Group
          onChange={(e) => setStatus(e.target.value)}
          defaultValue={status}
        >
          <Radio value="active">Active</Radio>
          <Radio value="inactive">Inactive</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 7, span: 16 }}>
        <Button className="upsertButton" type="primary" htmlType="submit">
          {submitButtonText}
        </Button>
      </Form.Item>
    </>
  );
}
