import React, { useState, useEffect } from "react";
import TagsInput from "react-tagsinput";
import { Alert, Container, Row, Col, Button, Card, CardHeader, CardBody, CardFooter, Form, FormInput, ListGroup, ListGroupItem } from "shards-react";
import FormSectionTitle from "../edit-user-profile/FormSectionTitle";
import Services from '../../services/dynamicmessage'
import { Link, withRouter } from "react-router-dom";

function Attribute(props) {

    const [msg, setMsg] = useState({ id: 0, name: '' });
    const [errors, setErrors] = useState(false);
    const [roleList, setRoleList] = useState([]);

    useEffect(() => {
        let id = props.match.params.id;
        if (id > 0) {
            fillData();
        }
    }, []);
    function fillData() {
        // setAccountdetails({
        //     firstName: result[0].firstname,
        //     lastName: result[0].lastname,
        //     userName: result[0].username,
        //     password: result[0].password,
        //     roleId: result[0].roleid,
        // });
    }
    const onChange = (e) => {
        setMsg({ ...msg, [e.target.name]: e.target.value });
    }
    const Save = (e) => {
        e.preventDefault();
        let data = { name: msg.name };

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
                                <h6 className="m-0">Attribute</h6>
                            </CardHeader>

                            <CardBody className="p-0">
                                <ListGroup flush>
                                    <ListGroupItem className="p-3">

                                        {/* Form Section Title :: General */}
                                        <Form className="py-6" >
                                            <Row form className="mx-4">
                                                <Col lg="12">
                                                    <Row form>
                                                        <Col md="6" className="form-group">
                                                            <label htmlFor="key">Name</label>
                                                            <FormInput
                                                                type="text"
                                                                name="key"
                                                                value={msg.name}
                                                                onChange={onChange}
                                                                placeholder="Name"
                                                                maxlength="20"
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
                                <Button size="md" theme="accent" className="d-table mr-6" onChange={Save}>Save</Button>&nbsp;
                                <Button size="md" theme="accent" className="d-table mr-6" >Cancel</Button>&nbsp;
                                                  <Link to="/attributeList" className="bg-primary rounded p-2"
                                    style={{ boxShadow: "inset 0 0 5px rgba(0,0,0,.2)", color: "#fff", width: "80px", textAlign: "center" }}>  List </Link>

                            </ListGroupItem>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Attribute;
