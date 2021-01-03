import React, { useState } from "react";
import TagsInput from "react-tagsinput";
import { Alert, Container, Row, Col, Button, Card, CardBody, CardHeader, CardFooter, Form, FormInput, FormSelect, ListGroupItem, FormFeedback } from "shards-react";
import FormSectionTitle from "../edit-user-profile/FormSectionTitle";
import validator from "validator";
import { Link } from "react-router-dom";

function CreateTaxes() {
  const [createtaxes, setcreatetaxes] = useState({
    taxName: "",
    display_order: "",
    country_id: "",
    percentage_tax: "",
    IsDeleted: false,
    IsActive: true
    // roleId: 0
  });
  const [errors, setErrors] = useState({});
  const [errorMsg, setErrorMsg] = useState({
    taxNameEm: "",
    display_orderEm: "",
    country_idEm: "",
    percentage_taxEm: ""
  });
  const onChange = e => {
    setcreatetaxes({ ...createtaxes, [e.target.name]: e.target.value });
  };
  const validate = () => {
    let formValidation = {
      taxNameEm: "",
      display_orderEm: "",
      country_idEm: "",
      percentage_taxEm: "",
      charges: ""
    };
    let isError = false;
    if (validator.isEmpty(createtaxes.taxName)) {
      isError = true;
      formValidation.taxNameEm = "Tax name is required";
    }
    if (validator.isEmpty(createtaxes.display_order)) {
      isError = true;
      formValidation.display_orderEm = "display order is required";
    }
    if (validator.isEmpty(createtaxes.country_id)) {
      isError = true;
      formValidation.country_idEm = "country id is required";
    }
    if (validator.isEmpty(createtaxes.percentage_tax)) {
      isError = true;
      formValidation.percentage_taxEm = "percentage tax  is required";
    }

    if (isError) {
      setErrors(true);
      setErrorMsg(formValidation);
    }
    return isError;
  };

  const Save = e => {
    if (!validate()) {
      let data = {
        taxName: createtaxes.taxName,
        display_order: createtaxes.display_order,
        percentage_tax: createtaxes.percentage_tax,
        // roleid: createtaxes.roleId,
        isactive: createtaxes.IsActive,
        isdeleted: createtaxes.IsDeleted
      };
      return (
        <Alert theme="success" className="mb-0">
          Ole! Your profile has been successfully updated!
        </Alert>
      );
    }
    e.preventDefault();
  };
  return (
    <div>
      <Container fluid className="px-0"></Container>
      <Container fluid className="main-content-container px-4">
        <Row>
          <Col lg="8" className="mx-auto mt-4">
            <Card small className="edit-user-details mb-4">
              <CardHeader className="border-bottom">
                <h6 className="m-0">Taxes</h6>
              </CardHeader>
              <br />
              <CardBody className="p-0">
                {/* Form Section Title :: General */}
                <Form className="py-6">
                  <Row form className="mx-4">
                    <Col lg="12">
                      <Row form>
                        <Col md="6" className="form-group">
                          <label htmlFor="taxName">Name</label>
                          <FormInput
                            type="text"
                            name="taxName"
                            value={createtaxes.taxName}
                            onChange={onChange}
                            placeholder="Name"
                            className={
                              errorMsg.taxNameEm != "" ? "is-invalid" : ""
                            }
                          />
                          {errors && (
                            <FormFeedback>{errorMsg.taxNameEm}</FormFeedback>
                          )}
                        </Col>

                        {/* Last Name */}
                        <Col md="6" className="form-group">
                          <label htmlFor="display_order">Display Order</label>
                          <FormInput
                            type="text"
                            name="display_order"
                            value={createtaxes.display_order}
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
                          <label htmlFor="percentage_tax">Percentage Tax</label>
                          <FormInput
                            type="text"
                            name="percentage_tax"
                            value={createtaxes.percentage_tax}
                            onChange={onChange}
                            placeholder="Percentage"
                            className={
                              errorMsg.percentage_taxEm != ""
                                ? "is-invalid"
                                : ""
                            }
                          />
                          {errors && (
                            <FormFeedback>
                              {errorMsg.percentage_taxEm}
                            </FormFeedback>
                          )}
                        </Col>
                        {/* <Col md="6" className="form-group">
                          <label htmlFor="lastName">Password</label>
                          <FormInput
                            type="text"
                            name="password"
                            value={createtaxes.password}
                            onChange={onChange}
                            placeholder="User Name"
                          />
                        </Col> */}
                        <Col md="6" className="form-group">
                          <label htmlFor="country_id">Country</label>
                          <FormSelect
                            name="country_id"
                            onChange={createtaxes.onChange}
                          >
                            <option>Select an Option</option>
                            <option value="0">India</option>
                            <option value="1">Germany</option>
                          </FormSelect>
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
                <Button size="md" theme="accent" className="d-table mr-6">
                  Cancel
                </Button>
                &nbsp;
                <Link to="/taxlist" className="bg-primary rounded p-2"
                  style={{ boxShadow: "inset 0 0 5px rgba(0,0,0,.2)", color: "#fff" }}> User List </Link>

              </ListGroupItem>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default CreateTaxes;
