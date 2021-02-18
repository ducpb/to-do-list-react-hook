import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

function AddToDo(props) {
  const [valueInput, setValue] = useState();
  const onInput = ({ target: { value } }) => setValue(value);

  const onSubmitForm = (e) => {
    e.preventDefault();
    props.onElementListToDo(valueInput);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={onSubmitForm}>
            <Form.Control
              type="text"
              className="mt-2"
              onChange={onInput}
              value={valueInput}
            />
            <Button
              type="submit"
              style={{ float: "right" }}
              className="mt-2 mb-2"
            >
              Lưu công việc
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AddToDo;
