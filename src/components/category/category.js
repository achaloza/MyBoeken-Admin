import React, { useState, useEffect } from "react";
import { Alert, Container, Row, Col, Button, Card, CardBody, CardFooter, Form, FormInput, FormSelect, ListGroup, ListGroupItem, FormTextarea, CardHeader, FormFeedback } from "shards-react";
import ReactQuill from "react-quill";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, } from 'react-accessible-accordion';
import _quillModules from '../common/QuillModules'
import Services from '../../services/category'
import { Link, withRouter } from "react-router-dom";
import validator from 'validator';

function Category(props) {
    const [category, setCategory] = useState(
        {
            category_id: null, parent_category_id: 0, display_order: 0, tax_id: 0,
            name_en: '', page_url_en: '', meta_tag_en: '', meta_description_en: '', meta_title_en: '', meta_keywords_en: '', content_en: '',
            name_du: '', page_url_du: '', meta_tag_du: '', meta_description_du: '', meta_title_du: '', meta_keywords_du: '', content_du: '',
            name_de: '', page_url_de: '', meta_tag_de: '', meta_description_de: '', meta_title_de: '', meta_keywords_de: '', content_de: ''
        });
    const [errors, setErrors] = useState(false);
    const [errorMsg, setErrorMsg] = useState({ userNameEm: '', passwordEm: '', firstNameEm: '', lastNameEm: '', roleEm: 0 });
    const [categoryList, setCategoryList] = useState([]);
    const [taxList, setTaxList] = useState([]);

    const validate = () => {
        let formValidation = {
            name_en: '', page_url_en: '', meta_tag_en: '', meta_description_en: '', meta_title_en: '', meta_keywords_en: '', content_en: '',
            name_du: '', page_url_du: '', meta_tag_du: '', meta_description_du: '', meta_title_du: '', meta_keywords_du: '', content_du: '',
            name_de: '', page_url_de: '', meta_tag_de: '', meta_description_de: '', meta_title_de: '', meta_keywords_de: '', content_de: ''
        }
        let isError = false;
        if (validator.isEmpty(category.name_en)) {
            isError = true;
            formValidation.name_en = "name is required";
        }
        if (validator.isEmpty(category.page_url_en)) {
            isError = true;
            formValidation.page_url_en = "url is required";
        }
        if (validator.isEmpty(category.meta_tag_en)) {
            isError = true;
            formValidation.meta_tag_en = "meta tag is required";
        }
        if (validator.isEmpty(category.meta_description_en)) {
            isError = true;
            formValidation.meta_description_en = "meta description is required";
        }
        if (validator.isEmpty(category.meta_title_en)) {
            isError = true;
            formValidation.meta_title_en = "meta title is required";
        }
        if (validator.isEmpty(category.meta_keywords_en)) {
            isError = true;
            formValidation.meta_tag_en = "meta keyword is required";
        }
        if (validator.isEmpty(category.content_en)) {
            isError = true;
            formValidation.content_en = "content is required";
        }
        if (validator.isEmpty(category.name_de)) {
            isError = true;
            formValidation.name_de = "name is required";
        }
        if (validator.isEmpty(category.page_url_de)) {
            isError = true;
            formValidation.page_url_de = "url is required";
        }
        if (validator.isEmpty(category.meta_tag_de)) {
            isError = true;
            formValidation.meta_tag_de = "meta tag is required";
        }
        if (validator.isEmpty(category.meta_description_de)) {
            isError = true;
            formValidation.meta_description_de = "meta description is required";
        }
        if (validator.isEmpty(category.meta_title_de)) {
            isError = true;
            formValidation.meta_title_de = "meta title is required";
        }
        if (validator.isEmpty(category.meta_keywords_de)) {
            isError = true;
            formValidation.meta_tag_de = "meta keyword is required";
        }
        if (validator.isEmpty(category.content_de)) {
            isError = true;
            formValidation.content_de = "content is required";
        }
        if (validator.isEmpty(category.name_du)) {
            isError = true;
            formValidation.name_du = "name is required";
        }
        if (validator.isEmpty(category.page_url_du)) {
            isError = true;
            formValidation.page_url_du = "url is required";
        }
        if (validator.isEmpty(category.meta_tag_du)) {
            isError = true;
            formValidation.meta_tag_du = "meta tag is required";
        }
        if (validator.isEmpty(category.meta_description_du)) {
            isError = true;
            formValidation.meta_description_du = "meta description is required";
        }
        if (validator.isEmpty(category.meta_title_du)) {
            isError = true;
            formValidation.meta_title_du = "meta title is required";
        }
        if (validator.isEmpty(category.meta_keywords_du)) {
            isError = true;
            formValidation.meta_tag_du = "meta keyword is required";
        }
        if (validator.isEmpty(category.content_du)) {
            isError = true;
            formValidation.content_du = "content is required";
        }
        if (isError) {
            setErrors(true);
            setErrorMsg(formValidation);
        }
        return isError;
    };

    useEffect(() => {
        let id = props.match.params.id;
        if (id > 0) {
            getCategory();
        }
        setCategoryList([
            { key: 0, value: "ABC" },
            { key: 1, value: "DEF" },
            { key: 2, value: "PQR" }
        ])
        setTaxList([
            { key: 0, value: "Tax 1" },
            { key: 1, value: "Tax 3" },
            { key: 2, value: "Tax 2" }
        ])
    }, []);
    const CategoryList = categoryList.map((category, key) => (
        <option key={key} value={category.key}>
            {category.value}
        </option>
    ))
    const TaxList = taxList.map((tax, key) => (
        <option key={key} value={tax.key}>
            {tax.value}
        </option>
    ))

    const getCategory = async () => {
        const result = await Services.getUser();
        setCategory({
            // firstName: result[0].firstname,
            // lastName: result[0].lastname,
            // userName: result[0].username,
            // password: result[0].password,
            // roleId: result[0].roleid,
        });
    }
    const onChange = (e) => {
        setCategory({ ...category, [e.target.name]: e.target.value });
    }
    const onEditorEnChange = (e) => {
        setCategory({ ...category, 'content_en': e });
    }
    const onEditorDuChange = (e) => {
        setCategory({ ...category, 'content_du': e });
    }
    const onEditorDeChange = (e) => {
        setCategory({ ...category, 'content_de': e });
    }
    const Save = (e) => {
        e.preventDefault();
        if (!validate()) {
            let id = props.match.params.id;
            if (id == null) {
                //save
            }
            else {
                // update
            }
            let data = {
                category_id: category.category_id, parent_category_id: category.parent_category_id, display_order: category.display_order, tax_id: category.tax_id,
                name_en: category.name_en, page_url_en: category.page_url_en, meta_tag_en: category.meta_tag_en, meta_description_en: category.meta_description_en, meta_title_en: category.meta_title_en, meta_keyword_en: category.meta_keyword_en, content_en: category.content_en,
                name_du: category.name_du, page_url_du: category.page_url_du, meta_tag_du: category.meta_tag_du, meta_description_du: category.meta_description_du, meta_title_du: category.meta_title_du, meta_keywords_du: category.meta_keywords_du, content_du: category.content_du,
                name_de: category.name_de, page_url_de: category.page_url_de, meta_tag_de: category.meta_tag_de, meta_description_de: category.meta_description_de, meta_title_de: category.meta_title_de, meta_keywords_de: category.meta_keywords_de, content_de: category.content_de
            }
        }
    };
    return (
        <div>
            {errors ? <Container fluid className="px-0">
                <Alert theme="success" className="mb-0">
                    Ole! Your profile has been successfully updated!
          </Alert>
            </Container> : ''}
            <Container fluid className="main-content-container px-4">
                <Row>
                    <Col lg="8" className="mx-auto mt-4">
                        <Card small className="edit-user-details mb-4">
                            <CardHeader className="border-bottom">
                                <h6 className="m-0">Category</h6>
                            </CardHeader>

                            <CardBody className="p-0">
                                <ListGroup flush>
                                    <ListGroupItem className="p-3">
                                        <Form className="py-6"  >

                                            {/* English Form */}
                                            <Accordion allowZeroExpanded>
                                                <AccordionItem>
                                                    <AccordionItemHeading>
                                                        <AccordionItemButton>
                                                            English
                                                    </AccordionItemButton>
                                                    </AccordionItemHeading>
                                                    <AccordionItemPanel>
                                                        <CardBody className="p-0">

                                                            <Row form className="mx-4">
                                                                <Col lg="12">
                                                                    <Row form>
                                                                        <Col md="12" className="form-group">
                                                                            <label htmlFor="name_en">Name<span style={{ color: "red" }}>*</span></label>
                                                                            <FormInput type="text" name="name_en" value={category.name_en} onChange={onChange} placeholder="Name" maxmaxlength="50"
                                                                                className={errors && errorMsg.name_en != "" ? "is-invalid" : ""}
                                                                            />
                                                                            {errors &&
                                                                                (<FormFeedback>{errorMsg.name_en}</FormFeedback>)
                                                                            }
                                                                        </Col>
                                                                        <Col md="6" className="form-group">
                                                                            <label htmlFor="page_url_en">Page Url En<span style={{ color: "red" }}>*</span></label>
                                                                            <FormInput type="text" name="page_url_en" value={category.page_url_en} onChange={onChange}
                                                                                placeholder="Page Url En" maxmaxlength="50"
                                                                                className={errors && errorMsg.page_url_en != "" ? "is-invalid" : ""}
                                                                            />
                                                                            {errors &&
                                                                                (<FormFeedback>{errorMsg.page_url_en}</FormFeedback>)
                                                                            }
                                                                        </Col>
                                                                        <Col md="6" className="form-group">
                                                                            <label htmlFor="meta_tag_en">Meta Title En<span style={{ color: "red" }}>*</span></label>
                                                                            <FormInput type="text" name="meta_title_en" value={category.meta_title_en} onChange={onChange}
                                                                                placeholder="Meta Title En" maxmaxlength="100"
                                                                                className={errors && errorMsg.meta_title_en != "" ? "is-invalid" : ""}
                                                                            />
                                                                            {errors &&
                                                                                (<FormFeedback>{errorMsg.meta_title_en}</FormFeedback>)
                                                                            }
                                                                        </Col>
                                                                        <Col md="6" className="form-group">
                                                                            <label htmlFor="meta_tag_en">Meta Tag En<span style={{ color: "red" }}>*</span></label>
                                                                            <FormInput type="text" name="meta_tag_en" value={category.meta_title_en} onChange={onChange} placeholder="Meta Tag En" maxmaxlength="50"
                                                                                className={errors && errorMsg.meta_title_en != "" ? "is-invalid" : ""} />
                                                                            {errors &&
                                                                                (<FormFeedback>{errorMsg.meta_title_en}</FormFeedback>)
                                                                            }
                                                                        </Col>
                                                                        <Col md="6" className="form-group">
                                                                            <label htmlFor="meta_tag">Meta Keyword En<span style={{ color: "red" }}>*</span></label>
                                                                            <FormInput type="text" name="meta_keywords_en" value={category.meta_keywords_en} onChange={onChange} placeholder="Meta Keyword" maxmaxlength="100"
                                                                                className={errors && errorMsg.meta_keywords_en != "" ? "is-invalid" : ""} />
                                                                            {errors &&
                                                                                (<FormFeedback>{errorMsg.meta_keywords_en}</FormFeedback>)
                                                                            }
                                                                        </Col>
                                                                        <Col md="6" className="form-group">
                                                                            <label htmlFor="meta_tag">Meta Description En<span style={{ color: "red" }}>*</span></label>
                                                                            <FormTextarea type="text" name="meta_description_en" value={category.meta_description_en} onChange={onChange} placeholder="Meta Description En" rows="3"
                                                                                className={errors && errorMsg.meta_description_en != "" ? "is-invalid" : ""} />
                                                                            {errors &&
                                                                                (<FormFeedback>{errorMsg.meta_description_en}</FormFeedback>)
                                                                            }
                                                                        </Col>
                                                                        <Col md="12" className="form-group">
                                                                            <label htmlFor="content_en">Content En<span style={{ color: "red" }}>*</span></label>
                                                                            <ReactQuill name="content_en" value={category.content_en} onChange={onEditorEnChange}
                                                                                className="add-new-post__editor mb-1" theme="snow" modules={_quillModules} />
                                                                            {errors &&
                                                                                (<FormFeedback>{errorMsg.content_en}</FormFeedback>)
                                                                            }
                                                                        </Col>

                                                                    </Row>
                                                                </Col>
                                                            </Row>
                                                        </CardBody>
                                                    </AccordionItemPanel>
                                                </AccordionItem>

                                                {/* Dutch Form */}
                                                <AccordionItem>
                                                    <AccordionItemHeading>
                                                        <AccordionItemButton>
                                                            Dutch
                                            </AccordionItemButton>
                                                    </AccordionItemHeading>
                                                    <AccordionItemPanel>
                                                        <CardBody className="p-0">

                                                            <Row form className="mx-4">
                                                                <Col lg="12">
                                                                    <Row form>
                                                                        <Col md="12" className="form-group">
                                                                            <label htmlFor="name_du">Name Du<span style={{ color: "red" }}>*</span></label>
                                                                            <FormInput type="text" name="name_du" value={category.name_du} onChange={onChange} placeholder="Name" maxmaxlength="50"
                                                                                className={errors && errorMsg.name_du != "" ? "is-invalid" : ""} />
                                                                            {errors &&
                                                                                (<FormFeedback>{errorMsg.name_du}</FormFeedback>)
                                                                            }
                                                                        </Col>

                                                                        <Col md="6" className="form-group">
                                                                            <label htmlFor="page_url_du">Page Url Du<span style={{ color: "red" }}>*</span></label>
                                                                            <FormInput type="text" name="page_url_du" value={category.page_url_du} onChange={onChange} placeholder="Page Url Du" maxmaxlength="50"
                                                                                className={errors && errorMsg.page_url_du != "" ? "is-invalid" : ""} />
                                                                            {errors &&
                                                                                (<FormFeedback>{errorMsg.page_url_du}</FormFeedback>)
                                                                            }
                                                                        </Col>
                                                                        <Col md="6" className="form-group">
                                                                            <label htmlFor="meta_tag_du">Meta Title Du<span style={{ color: "red" }}>*</span></label>
                                                                            <FormInput type="text" name="meta_title_du" value={category.meta_title_du} onChange={onChange} placeholder="Meta Title Du" maxmaxlength="100"
                                                                                className={errors && errorMsg.meta_title_du != "" ? "is-invalid" : ""} />
                                                                            {errors &&
                                                                                (<FormFeedback>{errorMsg.meta_title_du}</FormFeedback>)
                                                                            }
                                                                        </Col>
                                                                        <Col md="6" className="form-group">
                                                                            <label htmlFor="meta_tag_du">Meta Tag Du<span style={{ color: "red" }}>*</span></label>
                                                                            <FormInput type="text" name="meta_tag_du" value={category.meta_tag_du} onChange={onChange} placeholder="Meta Tag Du" maxmaxlength="50"
                                                                                className={errors && errorMsg.meta_tag_du != "" ? "is-invalid" : ""} />
                                                                            {errors &&
                                                                                (<FormFeedback>{errorMsg.meta_tag_du}</FormFeedback>)
                                                                            }
                                                                        </Col>
                                                                        <Col md="6" className="form-group">
                                                                            <label htmlFor="meta_tag">Meta Keyword Du<span style={{ color: "red" }}>*</span></label>
                                                                            <FormInput type="text" name="meta_keywords_du" value={category.meta_keywords_du} onChange={onChange} placeholder="Meta Keyword Du" maxmaxlength="100"
                                                                                className={errors && errorMsg.meta_keywords_du != "" ? "is-invalid" : ""} />
                                                                            {errors &&
                                                                                (<FormFeedback>{errorMsg.meta_keywords_du}</FormFeedback>)
                                                                            }
                                                                        </Col>
                                                                        <Col md="6" className="form-group">
                                                                            <label htmlFor="meta_tag">Meta Description Du<span style={{ color: "red" }}>*</span></label>
                                                                            <FormTextarea type="text" name="meta_description_du" value={category.meta_description_du} onChange={onChange} placeholder="Meta Description Du" rows="3"
                                                                                className={errors && errorMsg.meta_description_du != "" ? "is-invalid" : ""} />
                                                                            {errors &&
                                                                                (<FormFeedback>{errorMsg.meta_description_du}</FormFeedback>)
                                                                            }
                                                                        </Col>
                                                                        <Col md="12" className="form-group">
                                                                            <label htmlFor="content_du">Content Du<span style={{ color: "red" }}>*</span></label>
                                                                            <ReactQuill name="content_du" value={category.content_du} onChange={onEditorDuChange} className="add-new-post__editor mb-1" theme="snow" modules={_quillModules} />
                                                                            {errors &&
                                                                                (<FormFeedback>{errorMsg.content_du}</FormFeedback>)
                                                                            }
                                                                        </Col>

                                                                    </Row>
                                                                </Col>
                                                            </Row>
                                                        </CardBody>
                                                    </AccordionItemPanel>
                                                </AccordionItem>
                                                {/* German Form */}

                                                <AccordionItem>
                                                    <AccordionItemHeading>
                                                        <AccordionItemButton>
                                                            German
                                            </AccordionItemButton>
                                                    </AccordionItemHeading>
                                                    <AccordionItemPanel>
                                                        <CardBody className="p-0">

                                                            <Row form className="mx-4">
                                                                <Col lg="12">
                                                                    <Row form>
                                                                        <Col md="12" className="form-group">
                                                                            <label htmlFor="name_de">Name De<span style={{ color: "red" }}>*</span></label>
                                                                            <FormInput type="text" name="name_de" value={category.name_de} onChange={onChange} placeholder="Name" maxmaxlength="50"
                                                                                className={errors && errorMsg.name_de != "" ? "is-invalid" : ""} />
                                                                            {errors &&
                                                                                (<FormFeedback>{errorMsg.name_de}</FormFeedback>)
                                                                            }
                                                                        </Col>

                                                                        <Col md="6" className="form-group">
                                                                            <label htmlFor="page_url_de">Page Url De<span style={{ color: "red" }}>*</span></label>
                                                                            <FormInput type="text" name="page_url_de" value={category.page_url_de} onChange={onChange} placeholder="Page Url De" maxmaxlength="50"
                                                                                className={errors && errorMsg.page_url_de != "" ? "is-invalid" : ""} />
                                                                            {errors &&
                                                                                (<FormFeedback>{errorMsg.page_url_de}</FormFeedback>)
                                                                            }
                                                                        </Col>
                                                                        <Col md="6" className="form-group">
                                                                            <label htmlFor="meta_tag_de">Meta Title De<span style={{ color: "red" }}>*</span></label>
                                                                            <FormInput type="text" name="meta_title_de" value={category.meta_title_de} onChange={onChange} placeholder="Meta Title De" maxmaxlength="100"
                                                                                className={errors && errorMsg.meta_title_de != "" ? "is-invalid" : ""} />
                                                                            {errors &&
                                                                                (<FormFeedback>{errorMsg.meta_title_de}</FormFeedback>)
                                                                            }
                                                                        </Col>
                                                                        <Col md="6" className="form-group">
                                                                            <label htmlFor="meta_tag_de">Meta Tag De<span style={{ color: "red" }}>*</span></label>
                                                                            <FormInput type="text" name="meta_tag_de" value={category.meta_tag_de} onChange={onChange} placeholder="Meta Tag De" maxmaxlength="50"
                                                                                className={errors && errorMsg.meta_tag_de != "" ? "is-invalid" : ""} />
                                                                            {errors &&
                                                                                (<FormFeedback>{errorMsg.meta_tag_de}</FormFeedback>)
                                                                            }
                                                                        </Col>
                                                                        <Col md="6" className="form-group">
                                                                            <label htmlFor="meta_tag">Meta Keyword De<span style={{ color: "red" }}>*</span></label>
                                                                            <FormInput type="text" name="meta_keywords_de" value={category.meta_keywords_de} onChange={onChange} placeholder="Meta Keyword De" maxmaxlength="100"
                                                                                className={errors && errorMsg.meta_keywords_de != "" ? "is-invalid" : ""} />
                                                                            {errors &&
                                                                                (<FormFeedback>{errorMsg.meta_keywords_de}</FormFeedback>)
                                                                            }
                                                                        </Col>
                                                                        <Col md="6" className="form-group">
                                                                            <label htmlFor="meta_tag">Meta Description De<span style={{ color: "red" }}>*</span></label>
                                                                            <FormTextarea type="text" name="meta_description_de" value={category.meta_description_de} onChange={onChange} placeholder="Meta Description De" rows="3"
                                                                                className={errors && errorMsg.meta_description_de != "" ? "is-invalid" : ""} />
                                                                            {errors &&
                                                                                (<FormFeedback>{errorMsg.meta_description_de}</FormFeedback>)
                                                                            }
                                                                        </Col>
                                                                        <Col md="12" className="form-group">
                                                                            <label htmlFor="content_de">Content De<span style={{ color: "red" }}>*</span></label>
                                                                            <ReactQuill name="content_de" value={category.content_de} onChange={onEditorDeChange} className="add-new-post__editor mb-1" theme="snow" modules={_quillModules} />
                                                                            {errors &&
                                                                                (<FormFeedback>{errorMsg.content_de}</FormFeedback>)
                                                                            }
                                                                        </Col>

                                                                    </Row>
                                                                </Col>
                                                            </Row>
                                                        </CardBody>
                                                    </AccordionItemPanel>
                                                </AccordionItem>
                                            </Accordion>
                                            <br />
                                            <Row form className="mx-4">
                                                <Col lg="12">
                                                    <Row form>
                                                        <Col md="6" className="form-group">
                                                            <label htmlFor="display_order">Display Order<span style={{ color: "red" }}>*</span></label>
                                                            <FormInput type="number" name="display_order" value={category.display_order} onChange={onChange}
                                                                placeholder="Display Order" maxmaxlength="4" min="0" max="999" />
                                                        </Col>
                                                        <Col md="6" className="form-group" style={{ display: 'none' }}>
                                                            <label htmlFor="category_id">Parrent Category<span style={{ color: "red" }}>*</span></label>
                                                            <FormSelect name="parent_category_id" onChange={onChange}>
                                                                {CategoryList}
                                                            </FormSelect>
                                                        </Col>
                                                        <Col md="6" className="form-group">
                                                            <label htmlFor="tax_id">Tax</label>
                                                            <FormSelect name="tax_id" onChange={onChange}>
                                                                {TaxList}
                                                            </FormSelect>
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
                                <Link to="/categorylist" className="bg-primary rounded p-2"
                                    style={{ boxShadow: "inset 0 0 5px rgba(0,0,0,.2)", color: "#fff", width: "80px", textAlign: "center" }}> List </Link>
                            </ListGroupItem>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}
export default Category;
