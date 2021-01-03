import React, { useState, useEffect } from "react";
import { CardFooter, ListGroup, Alert, Container, Row, Col, Button, Card, CardBody, FormFeedback, Form, FormInput, FormSelect, ListGroupItem, CardHeader } from "shards-react";
import Services from "../../services/user";
import { Link, withRouter } from "react-router-dom";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, } from 'react-accessible-accordion';

const CustomerView = props => {
  const [customerDetails, setCustomerDetails] = useState({ id: 0, firstName: "", lastName: "", dob: '', gender: '', phone: '', email: '', IsActive: true, address: [] });
  useEffect(() => {
    let id = props.match.params.id;
    if (id > 0) {
      getAddress();
    }
  }, []);
  const getAddress = async () => {
    setCustomerDetails({
      address: [
        {
          author: "John James",
          title: "Had denoting properly jointure which well books beyond",
          body:
            "In said to of poor full be post face snug. Introduced imprudence see say unpleasing devonshire acceptance son. Exeter longer wisdom work...",
          date: "29 February 2019"
        },
        {
          author: "John James",
          title: "Husbands ask repeated resolved but laughter debating",
          body:
            "It abode words began enjoy years no do ﻿no. Tried spoil as heart visit blush or. Boy possible blessing sensible set but margaret interest. Off tears...",
          date: "29 February 2019"
        },
        {
          author: "John James",
          title:
            "Instantly gentleman contained belonging exquisite now direction",
          body:
            "West room at sent if year. Numerous indulged distance old law you. Total state as merit court green decay he. Steepest merit checking railway...",
          date: "29 February 2019"
        }
      ]
    })
  }
  const onChange = e => {
    setCustomerDetails({ ...customerDetails, [e.target.name]: e.target.value });
  };
  const getUser = async () => {
    const result = await Services.getUser();
    // setCustomerDetails({
    //   firstName: result[0].firstname,
    //   lastName: result[0].lastname,
    //   userName: result[0].username,
    //   password: result[0].password,
    //   roleId: result[0].roleid
    // });
  };

  return (
    <div>
      <Container fluid className="px-0"></Container>
      <Container fluid className="main-content-container px-8">
        <Row>
          <Col lg="8" className="mx-auto mt-4">
            <Card small className="edit-user-details mb-4">
              <CardHeader className="border-bottom">
                <h6 className="m-0">Customer Details</h6>
              </CardHeader>
              <Accordion allowZeroExpanded>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Customer Baisc Information
                                            </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <CardBody className="p-0">
                      {/* Form Section Title :: General */}
                      <ListGroup flush>
                        <ListGroupItem className="p-3">
                          <Form className="py-6">
                            <Row form className="mx-4">
                              <Col lg="12">
                                <Row form>
                                  <Col md="4" className="form-group">
                                    <label htmlFor="firstName">First Name</label>
                                    <FormInput
                                      type="text"
                                      name="firstName"
                                      value={customerDetails.firstName}
                                      onChange={onChange}
                                      placeholder="First Name"
                                      disabled
                                    />
                                  </Col>

                                  {/* Last Name */}
                                  <Col md="4" className="form-group">
                                    <label htmlFor="lastName">Last Name</label>
                                    <FormInput
                                      type="text"
                                      name="lastName"
                                      value={customerDetails.lastName}
                                      onChange={onChange}
                                      placeholder="Last Name"
                                      disabled
                                    />
                                  </Col>
                                  <Col md="4" className="form-group">
                                    <label htmlFor="lastName">User Name</label>
                                    <FormInput
                                      type="text"
                                      name="userName"
                                      value={customerDetails.email}
                                      onChange={onChange}
                                      placeholder="User Name"
                                      disabled
                                    />
                                  </Col>
                                  <Col md="4" className="form-group">
                                    <label htmlFor="lastName">Phone Number</label>
                                    <FormInput
                                      type="text"
                                      name="phone"
                                      value={customerDetails.phone}
                                      onChange={onChange}
                                      placeholder="Phone"
                                      disabled
                                    />
                                  </Col>
                                  <Col md="4" className="form-group">
                                    <label htmlFor="lastName">DOB</label>
                                    <FormInput
                                      type="text"
                                      name="dob"
                                      value={customerDetails.dob}
                                      onChange={onChange}
                                      placeholder="DOB"
                                      disabled
                                    />
                                  </Col>
                                  <Col md="4" className="form-group">
                                    <label htmlFor="lastName">Gender</label>
                                    <FormInput
                                      type="text"
                                      name="gender"
                                      value={customerDetails.gender}
                                      onChange={onChange}
                                      placeholder="Gender"
                                      disabled
                                    />
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </Form>
                        </ListGroupItem>
                      </ListGroup>
                    </CardBody>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
              <Accordion allowZeroExpanded>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Address Information
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <CardBody className="p-0">
                      {/* Form Section Title :: General */}
                      <ListGroup flush>
                        <ListGroupItem className="p-3">
                          <Form className="py-6">
                            <Row>
                              {customerDetails.address.map((post, idx) => (
                                <Col lg="4" key={idx}>
                                  <Card small className="card-post mb-4">
                                    <CardBody>
                                      <h5 className="card-title">{post.title}</h5>
                                      <p className="card-text text-muted">{post.body}</p>
                                    </CardBody>
                                    <CardFooter className="border-top d-flex">
                                      <div className="card-post__author d-flex">
                                        <div className="d-flex flex-column justify-content-center ml-3">
                                          {/* <span className="card-post__author-name">
                                            {post.author}
                                          </span>
                                          <small className="text-muted">{post.date}</small> */}
                                        </div>
                                      </div>
                                      <div className="my-auto ml-auto">
                                        <Button size="sm" theme="white">
                                          <i className="far fa-bookmark mr-1" /> Default Address
                    </Button>
                                      </div>
                                    </CardFooter>
                                  </Card>
                                </Col>
                              ))}
                            </Row>
                          </Form>
                        </ListGroupItem>
                      </ListGroup>
                    </CardBody>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
              <ListGroupItem className="d-flex px-2">
                <Link to="/customerlist" className="bg-primary rounded p-2"
                  style={{ boxShadow: "inset 0 0 5px rgba(0,0,0,.2)", color: "#fff", width: "80px", textAlign: "center" }}>  List </Link>

              </ListGroupItem>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default withRouter(CustomerView);
// export default CreateAccount;
