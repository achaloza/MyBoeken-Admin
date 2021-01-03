import React, { useState, useEffect } from "react";
import TagsInput from "react-tagsinput";
import { Alert, Container, Row, Col, Button, Card, CardBody, CardFooter, Form, FormInput, FormSelect, ListGroup, ListGroupItem, CardHeader, FormFeedback } from "shards-react";
import Services from "../../services/user";
import { Link } from "react-router-dom";
const CreateDiscountCode = props => {
  const [discodedetails, setAccountdetails] = useState({ id: null, dis_name: "", dis_code: "", is_campaign: false, country_id: "", discount_type: false, charges: "" });
  const [errors, setErrors] = useState(false);

  const onChange = e => {
    setAccountdetails({
      ...discodedetails,
      [e.target.name]: e.target.value
    });
  };
  useEffect(() => {
    let id = props.match.params.id;
    if (id > 0) {
      getDiscount();
    }
  }, []);
  const getDiscount = async () => {
    const result = await Services.getUser();
    setAccountdetails({
      dis_name: result[0].dis_name,
      dis_code: result[0].dis_code,
      country_id: result[0].country_id,
      discount_type: result[0].discount_type,
      charges: result[0].charges
    });
  };
  const Save = async e => {
    let id = props.match.params.id;
    e.preventDefault();
    let data = {
      dis_name: discodedetails.dis_name,
      dis_code: discodedetails.dis_code,
      country_id: discodedetails.country_id,
      discount_type: discodedetails.discount_type,
      charges: discodedetails.charges,
      isactive: discodedetails.isactive
    };
    if (id == null) {
      //let createUser = await Services.createUser(data);
      alert("save");
    } else {
      // alert api call
      alert("edit");
    }
  };
  const clearData = e => {
    setAccountdetails({
      dis_name: "",
      dis_code: "",
      country_id: "",
      discount_type: "",
      charges: "",
      IsActive: true
    });
  };

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
          <Col lg="8" className="mx-auto mt-4">
            <Card small className="edit-user-details mb-4">
              <CardHeader className="border-bottom">
                <h6 className="m-0">Discount Code</h6>
              </CardHeader>
              <CardBody className="p-0">
                <ListGroup flush>
                  <ListGroupItem className="p-3">
                    <Form className="py-6">
                      <Row form className="mx-4">
                        <Col lg="12">
                          <Row form>
                            <Col md="6" className="form-group">
                              <label htmlFor="dis_name">Name</label>
                              <FormInput
                                type="text"
                                name="dis_name"
                                value={discodedetails.dis_name}
                                onChange={onChange}
                                placeholder="Shipiing Charges Name"
                              />
                            </Col>

                            {/* Last Name */}
                            <Col md="6" className="form-group">
                              <label htmlFor="dis_code">Display Order</label>
                              <FormInput
                                type="text"
                                name="dis_code"
                                value={discodedetails.dis_code}
                                onChange={onChange}
                                placeholder="Display Order"
                              />
                            </Col>
                            <Col md="6" className="form-group">
                              <label htmlFor="country_id">Country</label>
                              <FormSelect
                                name="country_id"
                                onChange={discodedetails.onChange}
                              >
                                <option>Select an Option</option>
                                <option value="0">India</option>
                                <option value="1">Germany</option>
                              </FormSelect>
                            </Col>
                            <Col md="6" className="form-group">
                              <label htmlFor="discount_type">Change Type</label>
                              <FormSelect
                                name="discount_type"
                                onChange={discodedetails.onChange}
                              >
                                <option>Select an Option</option>
                                <option value="0">Fix</option>
                                <option value="1">Percentage</option>
                              </FormSelect>
                            </Col>
                            <Col md="6" className="form-group">
                              <label htmlFor="charges">Charges</label>
                              <FormInput
                                type="text"
                                name="charges"
                                value={discodedetails.charges}
                                onChange={onChange}
                                placeholder="Charges"
                              />
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Form>
                  </ListGroupItem>
                </ListGroup>
              </CardBody>

              <ListGroupItem className="d-flex px-2">
                <Button size="md" theme="accent" className="d-table mr-6" onClick={Save}>Save</Button>&nbsp;
                                <Button size="md" theme="accent" className="d-table mr-6" >Cancel</Button>&nbsp;
                                <Link to="/discodelist" className="bg-primary rounded p-2"
                  style={{ boxShadow: "inset 0 0 5px rgba(0,0,0,.2)", color: "#fff", width: "80px", textAlign: "center" }}> List </Link>
              </ListGroupItem>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default CreateDiscountCode;
