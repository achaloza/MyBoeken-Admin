import React, { useState } from "react";
import TagsInput from "react-tagsinput";
import { Alert, Container, Row, Col, Button, Card, CardBody, CardFooter, Form, FormInput, CardHeader, ListGroup, ListGroupItem, FormSelect, FormFeedback } from "shards-react";
import { Link } from "react-router-dom";
import CustomFileUpload from "../components-overview/CustomFileUpload";
import validator from "validator";

const Banner = () => {
  const [banner, setBanner] = useState({
    image_url: "",
    click_url: "",
    is_active: "",
    language: "",
    order_by: 0
  });
  const [errors, setErrors] = useState(false);
  const [errorMsg, setErrorMsg] = useState({
    image_urlEm: "",
    click_urlEm: "",
    languageEm: "",
    order_byEm: ""
  });
  const onChange = e => {
    setBanner({ ...banner, [e.target.name]: e.target.value });
  };
  const onFileChange = e => {
    debugger;
    let file = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(file[0]);

    reader.onload = e => {
      setBanner({ ...banner, image_url: e.target.result });
    };
  };
  const validate = () => {
    let formValidation = {};
    let isError = false;
    if (validator.isEmpty(banner.image_url)) {
      isError = true;
      formValidation.image_urlEm = "Image url is required";
    }
    if (validator.isEmpty(banner.click_url)) {
      isError = true;
      formValidation.click_urlEm = " Click url is required";
    }
    if (validator.isEmpty(banner.language)) {
      isError = true;
      formValidation.languageEm = "language is required";
    }
    if (banner.order_by < 0) {
      isError = true;
      formValidation.order_by = "orderby value more then 0";
    }
    if (isError) {
      setErrors(true);
      setErrorMsg(formValidation);
      console.log(errorMsg);

    }
    return isError;
  };
  const Save = e => {
    if (!validate()) {
      let data = {
        image_url: banner.image_url,
        click_url: banner.click_url,
        is_active: banner.is_active,
        language: banner.language,
        order_by: banner.order_by
      };
      if (null) {
        alert("save");
      } else {
        // alert api call
        alert("edit");
      }
    }
    e.preventDefault();
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
                <h6 className="m-0">Banner</h6>
              </CardHeader>
              <CardBody className="p-0">
                <ListGroup flush>
                  <ListGroupItem className="p-3">
                    <Form className="py-6">
                      <Row form className="mx-4">
                        <Col lg="12">
                          <Row form>
                            <Col md="6" className="form-group">
                              <label htmlFor="image_url">Image</label>
                              <CustomFileUpload name="image_url" onChange={e => onFileChange(e)}
                                className={errorMsg.image_urlEm != "" ? "is-invalid" : ""}
                              />
                              {errorMsg.click_urlEm != "" && (
                                <FormFeedback style={{ display: errorMsg.click_urlEm != "" ? 'block' : 'none' }}> {errorMsg.image_urlEm} </FormFeedback>
                              )}
                            </Col>

                            {/* Last Name */}
                            <Col md="6" className="form-group">
                              <label htmlFor="language">Language</label>
                              <FormSelect name="language" onChange={onChange}>
                                <option>Select an Option</option>
                                <option value="english">English</option>
                                <option value="germany">Germany</option>
                                <option value="dutch">Dutch</option>
                              </FormSelect>
                              <FormFeedback style={{ display: errorMsg.languageEm != "" ? 'block' : 'none' }}>
                                {errorMsg.languageEm}
                              </FormFeedback>
                            </Col>
                            <Col md="6" className="form-group">
                              <label htmlFor="click_url">Clickable Url</label>
                              <FormInput type="text" name="click_url" value={banner.click_url} onChange={onChange}
                                placeholder="Clickable Url" className={errorMsg.click_urlEm != "" ? "is-invalid" : ""} />
                              {errorMsg.click_urlEm != "" && (
                                <FormFeedback>
                                  {errorMsg.click_urlEm}
                                </FormFeedback>
                              )}
                            </Col>
                            <Col md="6" className="form-group">
                              <label htmlFor="click_url">Order by</label>
                              <FormInput
                                type="number"
                                name="order_by"
                                value={banner.order_by}
                                onChange={onChange}
                                placeholder=""
                                className={
                                  errorMsg.order_byEm != "" ? "is-invalid" : ""
                                }
                              />
                              {errorMsg.order_byEm != "" && (
                                <FormFeedback>
                                  {errorMsg.order_byEm}
                                </FormFeedback>
                              )}
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Form>
                  </ListGroupItem>
                </ListGroup>
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
                <Link to="/bannerlist" className="bg-primary rounded p-2"
                  style={{ boxShadow: "inset 0 0 5px rgba(0,0,0,.2)", color: "#fff", width: "80px", textAlign: "center" }}>  List </Link>


              </ListGroupItem>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Banner;
