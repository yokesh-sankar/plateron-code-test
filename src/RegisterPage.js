import { Button, Col, Form, Input, Row } from "antd";
import { saveData } from "./services/RegisterService";
import { useState } from "react";

export const RegisterPage = () => {
  const [data, setData] = useState(null);
  const [requiredError, setRequiredError] = useState(false);

  const handleSubmit = (values) => {
    setData(data);
    if (values.firstName && values.lastName) {
      saveData(values);
      setRequiredError(false);
    } else {
      setRequiredError(true);
    }
  };

  return (
    <>
      <Row>
        <Col span={8}>
          <Form name="registerForm" onFinish={handleSubmit}>
            <Form.Item
              name="firstName"
              rules={[
                { required: requiredError, message: "First Name Required" },
              ]}
            >
              <Input placeholder="First Name" />
            </Form.Item>
            <Form.Item
              name="lastName"
              rules={[
                { required: requiredError, message: "Last Name Required" },
              ]}
            >
              <Input placeholder="Last Name" />
            </Form.Item>
            <Form.Item name="mobileNo">
              <Input placeholder="Mobile Number" />
            </Form.Item>
            <Form.Item name="city">
              <Input placeholder="City" />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" type="primary">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default RegisterPage;
