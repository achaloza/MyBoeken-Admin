import React, { useState, useEffect } from "react";
import { CardFooter, ListGroup, Alert, Container, Row, Col, Button, Card, CardBody, FormFeedback, Form, FormInput, FormSelect, ListGroupItem, CardHeader } from "shards-react";
import Services from "../../services/user";
import { Link, withRouter } from "react-router-dom";


const OrderView = props => {
  const [orderDetails, setOrderDetails] = useState({ id: 0, order_id: 0, order_date: '', customer_id: 0, customer_name: '', customer_email: '', customer_ph: '', billing_address: '', order_status: '', category_id: 0, category_name: '', product_id: 0, product_name: '', product_qty: 0, product_price: 0, product_tax: 0, product_total: 0 });
  useEffect(() => {
    let id = props.match.params.id;
    if (id > 0) {
      getUser();
    }
  }, []);

  const onChange = e => {
    setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
  };
  const getUser = async () => {
    const result = await Services.getUser();
    setOrderDetails({

    });
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
              <CardBody className="p-0">
                {/* Form Section Title :: General */}
                <ListGroup flush>
                  <ListGroupItem className="p-3">
                    <Form className="py-6">
                      <Row form className="mx-4">
                        <Col lg="12">
                          <Row form>
                            {/* Order Details */}
                            <Col md="4" className="form-group">
                              <label htmlFor="order_id">Order Id</label>
                              <FormInput type="text" name="order_id" value={orderDetails.order_id} onChange={onChange} placeholder="First Name" disabled />
                            </Col>
                            <Col md="4" className="form-group">
                              <label htmlFor="order_date">Date</label>
                              <FormInput type="text" name="order_date" value={orderDetails.order_date} onChange={onChange} placeholder="Last Name" disabled />
                            </Col>
                            <Col md="4" className="form-group">
                              <label htmlFor="order_status">Status</label>
                              <FormInput type="text" name="order_status" value={orderDetails.order_status} onChange={onChange} placeholder="Order Status" disabled />
                            </Col>
                            {/* Customer Details */}
                            <Col md="4" className="form-group">
                              <label htmlFor="customer_name">Customer Name</label>
                              <FormInput type="text" name="customer_name" value={orderDetails.customer_name} onChange={onChange} placeholder="customer_name" disabled />
                            </Col>
                            <Col md="4" className="form-group">
                              <label htmlFor="customer_email">Customer Email</label>
                              <FormInput type="text" name="customer_email" value={orderDetails.customer_email} onChange={onChange} placeholder="customer_email" disabled />
                            </Col>
                            <Col md="4" className="form-group">
                              <label htmlFor="customer_ph">Customer Phone</label>
                              <FormInput type="text" name="customer_ph" value={orderDetails.customer_ph} onChange={onChange} placeholder="Phone Number" disabled />
                            </Col>
                            <Col md="4" className="form-group">
                              <label htmlFor="billing_address">Billing Address</label>
                              <FormInput type="text" name="billing_address" value={orderDetails.billing_address} onChange={onChange} placeholder="billing address" disabled />
                            </Col>
                            {/* Product Details */}
                            <Col md="4" className="form-group">
                              <label htmlFor="product_name">Product Name</label>
                              <FormInput type="text" name="product_name" value={orderDetails.product_name + " - " + orderDetails.category_name} onChange={onChange} placeholder="billing address" disabled />
                            </Col>
                            <Col md="4" className="form-group">
                              <label htmlFor="product_qty">Quatity</label>
                              <FormInput type="text" name="product_qty" value={orderDetails.product_qty} onChange={onChange} placeholder="Quatity" disabled />
                            </Col>
                            <Col md="4" className="form-group">
                              <label htmlFor="product_price">Price</label>
                              <FormInput type="text" name="product_price" value={orderDetails.product_price} onChange={onChange} placeholder="billing address" disabled />
                            </Col>
                            <Col md="4" className="form-group">
                              <label htmlFor="product_tax">Tax</label>
                              <FormInput type="text" name="product_tax" value={orderDetails.product_tax} onChange={onChange} placeholder="Tax" disabled />
                            </Col>
                            <Col md="4" className="form-group">
                              <label htmlFor="product_total">Total Amount</label>
                              <FormInput type="text" name="product_total" value={orderDetails.product_total} onChange={onChange} placeholder="Total Amount" disabled />
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Form>
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
              <ListGroupItem className="d-flex px-2">
                <Link to="/CustomerOrder" className="bg-primary rounded p-2"
                  style={{ boxShadow: "inset 0 0 5px rgba(0,0,0,.2)", color: "#fff", width: "80px", textAlign: "center" }}>  List </Link>

              </ListGroupItem>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default withRouter(OrderView);
// export default CreateAccount;
