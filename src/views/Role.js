/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, { useState } from "react";
import {
  Badge,
  Alert,
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  Form,
  FormInput,
  CardHeader,
  ButtonGroup
} from "shards-react";

import FormSectionTitle from "../components/edit-user-profile/FormSectionTitle";

function Role() {
  const [role, setRole] = useState({ role: '' });
  const [roleList, setRoleList] = useState([]);
  const [errors, setErrors] = useState(false);

  const onChange = (e) => {
    setRole({ ...role, [e.target.name]: e.target.value });
  }
  const Save = (e) => {
    e.preventDefault();
    let data = { role: role.role };
  }
  const edit = (e) => {
    e.preventDefault();
    let data = { role: role.role };
  }
  const remove = (e) => {
    e.preventDefault();
    let data = { role: role.role };
  }
  const statusChange = (e) => {
    e.preventDefault();
    let data = { role: role.role };
  }
  return (
    <div>
      <Container fluid className="px-0">
        <Alert theme="success" className="mb-0">
          Ole! Your profile has been successfully updated!
          </Alert>
      </Container>
      <Container fluid className="main-content-container px-4">
        <Row>
          <Col lg="6" className="mx-auto mt-4">
            <Card small className="edit-user-details mb-4">

              <CardBody className="p-0">

                {/* Form Section Title :: General */}
                <Form className="py-4">
                  <FormSectionTitle
                    title="Role"
                    description=""
                  /><hr />

                  <Row form className="mx-4">
                    <Col lg="8">
                      <Row form>
                        {/* First Name */}
                        <Col md="6" className="form-group">
                          <label htmlFor="firstName">First Name</label>
                          <FormInput
                            id="firstName"
                            name="role"
                            value={role.role}
                            onChange={onChange}
                          />
                        </Col>
                        <Col md="4" className="form-group">
                          <label>.</label>
                          <Button size="sm" theme="accent" className="ml-auto d-table mr-3" >Save</Button>
                          <Button size="sm" theme="accent" className="ml-auto d-table mr-3" >Cancel</Button>
                          <Button size="sm" theme="accent" className="ml-auto d-table mr-3" >List</Button>
                        </Col>
                        {/* Last Name */}
                      </Row>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="6" className="mx-auto mt-4">
            <Card small className="lo-stats h-100">
              <CardHeader className="border-bottom">
                <h6 className="m-0">Role List</h6>
                <div className="block-handle" />
              </CardHeader>

              <CardBody className="p-0">
                <Container fluid className="px-0">
                  <table className="table mb-0">
                    <thead className="py-2 bg-light text-semibold border-bottom">
                      <tr>
                        <th />
                        <th className="text-center">Role Type</th>

                        <th className="text-center">Status</th>
                        <th className="text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="lo-stats__image">
                        </td>
                        <td className="lo-stats__order-details">
                          <spam>Admin</spam>
                        </td>
                        <td className="lo-stats__status">
                          <div className="d-table mx-auto">
                            <Badge pill theme={getBadgeType('Complete')}>
                              {'Success'}
                            </Badge>
                          </div>
                        </td>
                        <td className="lo-stats__actions">
                          <ButtonGroup className="d-table ml-auto">
                            <Button size="sm" theme="white">
                              Cancel</Button>
                            <Button size="sm" theme="white">
                              Edit</Button>
                          </ButtonGroup>
                        </td>
                      </tr>
                      <tr>
                        <td className="lo-stats__image">
                        </td>
                        <td className="lo-stats__order-details">
                          <spam>Super Admin</spam>
                        </td>
                        <td className="lo-stats__status">
                          <div className="d-table mx-auto">
                            <Badge pill theme={getBadgeType('Canceled')}>
                              {'Dis-Active'}
                            </Badge>
                          </div>
                        </td>
                        <td className="lo-stats__actions">
                          <ButtonGroup className="d-table ml-auto">
                            <Button size="sm" theme="white">
                              Cancel</Button>
                            <Button size="sm" theme="white">
                              Edit</Button>
                          </ButtonGroup>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Container>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>

  )
}
function getBadgeType(itemStatus) {
  const statusMap = {
    Complete: "success",
    Pending: "warning",
    Canceled: "danger"
  };

  return statusMap[itemStatus];
}
export default Role;
