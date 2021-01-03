import React, { useState, useEffect } from "react";
import TagsInput from "react-tagsinput";
import { Alert, Container, Row, Col, Button, Card, CardBody, CardFooter, Form, FormInput, FormSelect, ListGroupItem, CardHeader, FormFeedback } from "shards-react";
import Services from "../../services/user";
import { Link, withRouter } from "react-router-dom";
import validator from "validator";
const CreateShipingCharges = props => {
  const [shippingchargedetails, setAccountdetails] = useState({
    id: null,
    shippName: "",
    display_order: "",
    country_id: "",
    charge_type: "",
    charges: ""
  });
  const [errors, setErrors] = useState(false);
  const [roleList, setRoleList] = useState([]);
  const [errorMsg, setErrorMsg] = useState({
    shippNameEm: "",
    display_orderEm: "",
    country_idEm: "",
    lastNameEm: "",
    charge_typeEm: "",
    chargesEm: ""
  });

  const onChange = e => {
    setAccountdetails({
      ...shippingchargedetails,
      [e.target.name]: e.target.value
    });
  };
  useEffect(() => {
    let id = props.match.params.id;
    if (id > 0) {
      getShipping();
    }
  }, []);
  const getShipping = async () => {
    const result = await Services.getUser();
    setAccountdetails({
      shippName: result[0].shippName,
      display_order: result[0].display_order,
      country_id: result[0].country_id,
      charge_type: result[0].charge_type,
      charges: result[0].charges
    });
  };
  const validate = () => {
    let formValidation = {
      shippNameEm: "",
      display_orderEm: "",
      country_idEm: "",
      charge_typeEm: "",
      chargesEm: ""
    };
    let isError = false;
    if (validator.isEmpty(shippingchargedetails.shippName)) {
      isError = true;
      formValidation.shippNameEm = "shippName is required";
    }
    if (validator.isEmpty(shippingchargedetails.display_order)) {
      isError = true;
      formValidation.display_orderEm = "display order is required";
    }
    if (validator.isEmpty(shippingchargedetails.country_id)) {
      isError = true;
      formValidation.country_idEm = "country id is required";
    }
    if (validator.isEmpty(shippingchargedetails.charge_type)) {
      isError = true;
      formValidation.charge_typeEm = "charge type is required";
    }
    if (validator.isEmpty(shippingchargedetails.charges)) {
      isError = true;
      formValidation.chargesEm = "charges is required";
    }
    if (isError) {
      setErrors(true);
      setErrorMsg(formValidation);
    }
    return isError;
  };
  const Save = async e => {
    if (!validate()) {
      let id = props.match.params.id;
      e.preventDefault();
      let data = {
        shippName: shippingchargedetails.shippName,
        display_order: shippingchargedetails.display_order,
        country_id: shippingchargedetails.country_id,
        charge_type: shippingchargedetails.charge_type,
        charges: shippingchargedetails.charges,
        isactive: shippingchargedetails.isactive
      };
      if (id == null) {
        //let createUser = await Services.createUser(data);
        alert("save");
      } else {
        // alert api call
        alert("edit");
      }
    }
  };
  const clearData = e => {
    setAccountdetails({
      shippName: "",
      display_order: "",
      country_id: "",
      charge_type: "",
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
                <h6 className="m-0">Shipping Charge</h6>
              </CardHeader>
              <CardBody className="p-0">
                {/* Form Section Title :: General */}
                <Form className="py-6">
                  <Row form className="mx-4">
                    <Col lg="12">
                      <Row form>
                        <Col md="6" className="form-group">
                          <label htmlFor="shippName">Name</label>
                          <FormInput
                            type="text"
                            name="shippName"
                            value={shippingchargedetails.shippName}
                            onChange={onChange}
                            placeholder="Shipiing Charges Name"
                            className={
                              errorMsg.shippNameEm != "" ? "is-invalid" : ""
                            }
                          />
                          {errors && (
                            <FormFeedback>{errorMsg.shippNameEm}</FormFeedback>
                          )}
                        </Col>

                        {/* Last Name */}
                        <Col md="6" className="form-group">
                          <label htmlFor="display_order">Display Order</label>
                          <FormInput
                            type="text"
                            name="display_order"
                            value={shippingchargedetails.display_order}
                            onChange={onChange}
                            placeholder="Display Order"
                            className={
                              errorMsg.display_orderEm != "" ? "is-invalid" : ""
                            }
                          />
                          {errors && (
                            <FormFeedback>
                              {errorMsg.display_orderEm}
                            </FormFeedback>
                          )}
                        </Col>
                        <Col md="6" className="form-group">
                          <label htmlFor="country_id">Country</label>
                          <FormSelect
                            name="country_id"
                            onChange={onChange}
                            className={
                              errorMsg.country_idEm != 0 ? "is-invalid" : ""
                            }
                          >
                            <option>Select an Option</option>
                            <option value="0">India</option>
                            <option value="1">Germany</option>
                          </FormSelect>
                          {errors && (
                            <FormFeedback>{errorMsg.country_idEm}</FormFeedback>
                          )}
                        </Col>
                        <Col md="6" className="form-group">
                          <label htmlFor="charge_type">Change Type</label>
                          <FormSelect
                            name="charge_type"
                            onChange={onChange}
                            className={
                              errorMsg.charge_typeEm != 0 ? "is-invalid" : ""
                            }
                          >
                            <option>Select an Option</option>
                            <option value="0">Fix</option>
                            <option value="1">Percentage</option>
                          </FormSelect>
                          {errors && (
                            <FormFeedback>
                              {errorMsg.charge_typeEm}
                            </FormFeedback>
                          )}
                        </Col>
                        <Col md="6" className="form-group">
                          <label htmlFor="charges">Charges</label>
                          <FormInput
                            type="text"
                            name="charges"
                            value={shippingchargedetails.charges}
                            onChange={onChange}
                            className={
                              errorMsg.chargesEm != "" ? "is-invalid" : ""
                            }
                          />
                          {errors && (
                            <FormFeedback>{errorMsg.chargesEm}</FormFeedback>
                          )}
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Form>
              </CardBody>

              <ListGroupItem className="d-flex px-2">
                <Button
                  size="md"
                  theme="accent"
                  className="d-table mr-6"
                  onClick={Save}
                >
                  Save
                </Button>
                &nbsp;
                <Button
                  size="md"
                  theme="accent"
                  className="d-table mr-6"
                  onClick={clearData}
                >
                  Cancel
                </Button>
                &nbsp;
                  <Link to="/shippinglist" className="bg-primary rounded p-2"
                  style={{ boxShadow: "inset 0 0 5px rgba(0,0,0,.2)", color: "#fff", width: "80px", textAlign: "center" }}>  List </Link>
              </ListGroupItem>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default withRouter(CreateShipingCharges);
