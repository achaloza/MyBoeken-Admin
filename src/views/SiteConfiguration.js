/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, { useState } from "react";
import { Badge, Alert, Container, Row, Col, Button, Card, CardBody, Form, FormInput, CardHeader, ButtonGroup, ListGroupItem } from "shards-react";

import FormSectionTitle from "../components/edit-user-profile/FormSectionTitle";

function SiteConfiguration() {
  const [siteConf, setSiteConf] = useState({ key: '', value: '' });
  const [roleList, setRoleList] = useState([]);
  const [errors, setErrors] = useState(false);

  const onChange = (e) => {
    setSiteConf({ ...siteConf, [e.target.name]: e.target.value });
  }
  const Save = (e) => {
    e.preventDefault();
    let data = { key: siteConf.key, value: siteConf.value };
  }
  const edit = (e) => {
    e.preventDefault();

  }
  const remove = (e) => {
    e.preventDefault();

  }
  const statusChange = (e) => {
    e.preventDefault();
    let data = { key: siteConf.key, value: siteConf.value };
  }
  return (
    <div>
      {errors &&
        <Container fluid className="px-0">
          <Alert theme="success" className="mb-0">
            Ole! Your profile has been successfully updated!
          </Alert>
        </Container>}
      <Container fluid className="main-content-container px-4">
        <Row>
          <Col lg="10" className="mx-auto mt-4">
            <Card small className="edit-user-details mb-4">

              <CardBody className="p-0">

                {/* Form Section Title :: General */}
                <Form className="py-4">
                  <FormSectionTitle
                    title="Site Configrations"
                    description=""
                  /><hr />

                  <Row form className="mx-4">
                    <Col lg="12">
                      <Row form>
                        {/* First Name */}
                        <Col md="6" className="form-group">
                          <label htmlFor="key">Key</label>
                          <FormInput
                            id="key"
                            name="key"
                            value={siteConf.key}
                            onChange={onChange}
                          />
                        </Col>
                        <Col md="6" className="form-group">
                          <label htmlFor="value">Value</label>
                          <FormInput
                            id="key"
                            name="value"
                            value={siteConf.value}
                            onChange={onChange}
                          />
                        </Col>
                        <ListGroupItem className="d-flex px-3">
                          <Button size="md" theme="accent" className="d-table mr-6" onClick={Save}>Save</Button>&nbsp;
                                <Button size="md" theme="accent" className="d-table mr-6" >Cancel</Button>&nbsp;

                        </ListGroupItem>
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
          <Col lg="10" className="mx-auto mt-4">
            <Card small className="lo-stats h-100">
              <CardHeader className="border-bottom">
                <h6 className="m-0">List</h6>
                <div className="block-handle" />
              </CardHeader>

              <CardBody className="p-0">
                <Container fluid className="px-0">
                  <table className="table mb-0">
                    <thead className="py-2 bg-light text-semibold border-bottom">
                      <tr>
                        <th >#</th>
                        <th className="text-center"><span>Key</span></th>
                        <th className="text-center"><span>Value</span></th>
                        <th className="text-center"><span>Status</span></th>
                        <th className="text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-left">1
                        </td>
                        <td className="text-left">
                          <span>Facebook</span>
                        </td>
                        <td className="text-left">
                          <span>www.facebook.com</span>
                        </td>
                        <td className="text-left">
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
                        <td className="text-left">2
                        </td>
                        <td className="text-left">
                          <span>Facebook</span>
                        </td>
                        <td className="text-left">
                          <span>www.facebook.com</span>
                        </td>
                        <td className="text-left">
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
export default SiteConfiguration;
