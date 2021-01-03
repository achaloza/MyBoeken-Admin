import React, { useState, useEffect } from "react";
import TagsInput from "react-tagsinput";
import { ListGroup, Alert, Container, Row, Col, Button, Card, CardBody, FormFeedback, Form, FormInput, FormSelect, ListGroupItem, CardHeader } from "shards-react";
import Services from "../../services/user";
import { Link, withRouter } from "react-router-dom";
import validator from "validator";
const CreateAccount = props => {
  const [accountdetails, setAccountdetails] = useState({
    id: 0,
    userName: "",
    password: "",
    firstName: "",
    lastName: "",
    IsActive: true,
    roleId: 0
  });
  const [errors, setErrors] = useState(false);
  const [errorMsg, setErrorMsg] = useState({
    userNameEm: "",
    passwordEm: "",
    firstNameEm: "",
    lastNameEm: "",
    roleEm: 0
  });
  const [roleList, setRoleList] = useState([]);

  useEffect(() => {
    let id = props.match.params.id;
    if (id > 0) {
      getUser();
    }
  }, []);
  const onChange = e => {
    setAccountdetails({ ...accountdetails, [e.target.name]: e.target.value });
  };
  const getUser = async () => {
    const result = await Services.getUser();
    setAccountdetails({
      firstName: result[0].firstname,
      lastName: result[0].lastname,
      userName: result[0].username,
      password: result[0].password,
      roleId: result[0].roleid
    });
  };
  const validate = () => {
    let formValidation = {
      firstNameEm: "",
      lastNameEm: "",
      userNameEm: "",
      passwordEm: "",
      roleEm: 0
    };
    let isError = false;
    if (validator.isEmpty(accountdetails.firstName)) {
      isError = true;
      formValidation.firstNameEm = "firstname is required";
    }
    if (validator.isEmpty(accountdetails.lastName)) {
      isError = true;
      formValidation.lastNameEm = "lastname is required";
    }
    if (validator.isEmpty(accountdetails.password)) {
      isError = true;
      formValidation.passwordEm = "password is required";
    }
    if (accountdetails.roleId == 0) {
      isError = true;
      formValidation.roleEm = "Role is required";
    }
    if (validator.isEmpty(accountdetails.userName)) {
      isError = true;
      formValidation.userNameEm = "username is required";
    }
    if (isError) {
      setErrors(true);
      setErrorMsg(formValidation);
    }
    return isError;
  };
  const Save = async e => {
    //validateInput();
    if (!validate()) {
      let id = props.match.params.id;
      let data = {
        username: accountdetails.userName,
        password: accountdetails.password,
        firstname: accountdetails.firstName,
        lastname: accountdetails.lastName,
        roleid: accountdetails.roleId,
        isactive: accountdetails.IsActive
      };
      if (id == null) {
        //let createUser = await Services.createUser(data);
        // alert("save");
        return (
          <Alert theme="success" className="mb-0">
            Ole! Your profile has been successfully updated!
          </Alert>
        );
      } else {
        // alert api call
        alert("edit");
      }
      e.preventDefault();
    }
  };
  const clearDate = e => {
    setAccountdetails({
      userName: "",
      password: "",
      firstName: "",
      lastName: "",
      IsActive: true,
      roleId: 0
    });
  };

  return (
    <div>
      <Container fluid className="px-0"></Container>
      <Container fluid className="main-content-container px-4">
        <Row>
          <Col lg="8" className="mx-auto mt-4">
            <Card small className="edit-user-details mb-4">
              <CardHeader className="border-bottom">
                <h6 className="m-0">Create User</h6>
              </CardHeader>
              <CardBody className="p-0">
                {/* Form Section Title :: General */}
                <ListGroup flush>
                  <ListGroupItem className="p-3">
                    <Form className="py-6">
                      <Row form className="mx-4">
                        <Col lg="12">
                          <Row form>
                            <Col md="6" className="form-group">
                              <label htmlFor="firstName">First Name</label>
                              <FormInput
                                type="text"
                                name="firstName"
                                value={accountdetails.firstName}
                                onChange={onChange}
                                placeholder="First Name"
                                className={
                                  errorMsg.firstNameEm != "" ? "is-invalid" : ""
                                }
                              />
                              {errors && (
                                <FormFeedback>
                                  {errorMsg.firstNameEm}
                                </FormFeedback>
                              )}
                            </Col>

                            {/* Last Name */}
                            <Col md="6" className="form-group">
                              <label htmlFor="lastName">Last Name</label>
                              <FormInput
                                type="text"
                                name="lastName"
                                value={accountdetails.lastName}
                                onChange={onChange}
                                placeholder="Last Name"
                                className={
                                  errorMsg.lastNameEm != "" ? "is-invalid" : ""
                                }
                              />
                              {errors && (
                                <FormFeedback>
                                  {errorMsg.lastNameEm}
                                </FormFeedback>
                              )}
                            </Col>
                            <Col md="6" className="form-group">
                              <label htmlFor="lastName">User Name</label>
                              <FormInput
                                type="text"
                                name="userName"
                                value={accountdetails.userName}
                                onChange={onChange}
                                placeholder="User Name"
                                className={
                                  errorMsg.userNameEm != "" ? "is-invalid" : ""
                                }
                              />
                              {errors && (
                                <FormFeedback>
                                  {errorMsg.userNameEm}
                                </FormFeedback>
                              )}
                            </Col>
                            <Col md="6" className="form-group">
                              <label htmlFor="lastName">Password</label>
                              <FormInput
                                type="text"
                                name="password"
                                value={accountdetails.password}
                                onChange={onChange}
                                placeholder="User Name"
                                className={
                                  errorMsg.passwordEm != "" ? "is-invalid" : ""
                                }
                              />
                              {errors && (
                                <FormFeedback>
                                  {errorMsg.passwordEm}
                                </FormFeedback>
                              )}
                            </Col>
                            <Col md="6" className="form-group">
                              <label htmlFor="lastName">Role</label>
                              <FormSelect
                                name="roleId"
                                onChange={accountdetails.onChange}
                                className={
                                  errorMsg.roleEm != 0 ? "is-invalid" : ""
                                }
                              >
                                <option value="0">Select an Option</option>
                                <option value="1">Admin</option>
                                <option value="2">Super Admin</option>
                              </FormSelect>
                              {errors && (
                                <FormFeedback>{errorMsg.roleEm}</FormFeedback>
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
                <Button
                  size="md"
                  theme="accent"
                  className="d-table mr-6"
                  onClick={clearDate}
                >
                  Cancel
                </Button>
                &nbsp;
                <Link to="/userlist" className="bg-primary rounded p-2"
                  style={{ boxShadow: "inset 0 0 5px rgba(0,0,0,.2)", color: "#fff", width: "80px", textAlign: "center" }}> List </Link>


              </ListGroupItem>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default withRouter(CreateAccount);
// export default CreateAccount;
