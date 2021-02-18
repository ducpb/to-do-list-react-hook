/* eslint-disable react/jsx-curly-newline */
import React from "react";
import { Button, Container, Row, Table } from "react-bootstrap";

function ListToDo(props) {
  const { data } = props;

  return (
    <Container>
      <Row>
        <Table>
          <thead>
            <tr className="text-center">
              <th width="80%">Công việc</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {data.map((element) => {
              return (
                <tr key={element.id}>
                  <td>{element.toDo}</td>
                  <td>
                    <Button
                      variant="outline-success mr-2"
                      style={{
                        backgroundColor: element.status ? "#27a243" : "",
                        color: element.status ? "#fff" : "",
                      }}
                      onClick={() => props.onCheckElementListToDo(element.id)}
                    >
                      Hoàn thành
                    </Button>
                    <Button
                      variant="outline-danger"
                      onClick={() => props.onDeleteElementListToDo(element.id)}
                    >
                      Huỷ bỏ
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}

export default ListToDo;
