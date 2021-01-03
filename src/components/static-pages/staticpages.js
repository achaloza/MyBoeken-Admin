import React, { useState } from "react";
import TagsInput from "react-tagsinput";
import { FormFeedback, Alert, Container, Row, Col, Button, Card, CardBody, CardFooter, Form, FormInput, FormSelect, ListGroupItem, FormTextarea, CardHeader } from "shards-react";
import { Link } from "react-router-dom";
import ReactQuill from "react-quill";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, } from 'react-accessible-accordion';
import _quillModules from '../common/QuillModules'
import Validation from './validation'

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
function StaticPages(props) {
    const [cms, setCms] = useState(
        {
            id: null,
            name_en: '', page_url_en: '', meta_tag_en: '', meta_description_en: '', meta_title_en: '', meta_keyword_en: '', content_en: '',
            name_du: '', page_url_du: '', meta_tag_du: '', meta_description_du: '', meta_title_du: '', meta_keywords_du: '', content_du: '',
            name_de: '', page_url_de: '', meta_tag_de: '', meta_description_de: '', meta_title_de: '', meta_keywords_de: '', content_de: ''
        });
    const [roleList, setRoleList] = useState([]);
    const [errors, setErrors] = useState(false);
    const [errorMsg, setErrorMsg] = useState({
        name_en: '', page_url_en: '', meta_tag_en: '', meta_description_en: '', meta_title_en: '', meta_keyword_en: '', content_en: '',
        name_du: '', page_url_du: '', meta_tag_du: '', meta_description_du: '', meta_title_du: '', meta_keywords_du: '', content_du: '',
        name_de: '', page_url_de: '', meta_tag_de: '', meta_description_de: '', meta_title_de: '', meta_keywords_de: '', content_de: ''
    });

    const onChange = (e) => {
        setCms({ ...cms, [e.target.name]: e.target.value });
    }
    const onEditorChange = (e) => {
        setCms({ ...cms, 'cmscontent': e });
    }
    const Save = (e) => {
        e.preventDefault();
        //let data = { name: cms.name, url: cms.url, language: cms.language, meta_tag: cms.meta_tag, meta_title: cms.meta_title, meta_keyword: cms.meta_keyword, meta_description: cms.meta_description, cmscontent: '', };
        let error = Validation(cms);
        debugger
        if (!error.isError) {
            let id = props.match.params.id;
            if (id == null) {
                //save
            }
            else {
                // update
            }
        }
        else {
            setErrors(error.isError);
            setErrorMsg(error.errors)
        }
    };
    return (
        <div>
            { errors &&
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
                                <h6 className="m-0">Static Pages</h6>
                            </CardHeader>

                            <CardBody className="p-0">
                                {/* Form Section Title :: General */}
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
                                                                    <FormInput type="text" name="name_en" value={cms.name_en} onChange={onChange} placeholder="Name" maxmaxlength="50"
                                                                        className={errorMsg.name_en != "" ? "is-invalid" : ""} />
                                                                    {errorMsg.name_en != "" &&
                                                                        (<FormFeedback>{errorMsg.name_en}</FormFeedback>)
                                                                    }
                                                                </Col>

                                                                <Col md="6" className="form-group">
                                                                    <label htmlFor="page_url_en">Page Url En<span style={{ color: "red" }}>*</span></label>
                                                                    <FormInput type="text" name="page_url_en" value={cms.page_url_en} onChange={onChange} placeholder="Page Url En" maxmaxlength="50"
                                                                        className={errorMsg.page_url_en != "" ? "is-invalid" : ""} />
                                                                    {errorMsg.page_url_en != "" &&
                                                                        (<FormFeedback>{errorMsg.page_url_en}</FormFeedback>)
                                                                    }
                                                                </Col>
                                                                <Col md="6" className="form-group">
                                                                    <label htmlFor="meta_tag_en">Meta Title En<span style={{ color: "red" }}>*</span></label>
                                                                    <FormInput type="text" name="meta_title_en" value={cms.meta_title_en} onChange={onChange} placeholder="Meta Title En"
                                                                        maxmaxlength="100" className={errorMsg.meta_title_en != "" ? "is-invalid" : ""} />
                                                                    {errorMsg.meta_title_en != "" &&
                                                                        (<FormFeedback>{errorMsg.meta_title_en}</FormFeedback>)
                                                                    }
                                                                </Col>
                                                                <Col md="6" className="form-group">
                                                                    <label htmlFor="meta_tag_en">Meta Tag En<span style={{ color: "red" }}>*</span></label>
                                                                    <FormInput type="text" name="meta_tag_en" value={cms.meta_tag_en} onChange={onChange} placeholder="Meta Tag En" maxmaxlength="50"
                                                                        className={errorMsg.meta_tag_en != "" ? "is-invalid" : ""} />
                                                                    {errorMsg.meta_tag_en != "" &&
                                                                        (<FormFeedback>{errorMsg.meta_tag_en}</FormFeedback>)
                                                                    }
                                                                </Col>
                                                                <Col md="6" className="form-group">
                                                                    <label htmlFor="meta_tag">Meta Keyword En<span style={{ color: "red" }}>*</span></label>
                                                                    <FormInput type="text" name="meta_keyword" value={cms.meta_keyword_en} onChange={onChange} placeholder="Meta Keyword" maxmaxlength="100"
                                                                        className={errorMsg.meta_keyword_en != "" ? "is-invalid" : ""} />
                                                                    {errorMsg.meta_keyword != "" &&
                                                                        (<FormFeedback>{errorMsg.meta_keyword_en}</FormFeedback>)
                                                                    }
                                                                </Col>
                                                                <Col md="6" className="form-group">
                                                                    <label htmlFor="meta_tag">Meta Description En<span style={{ color: "red" }}>*</span></label>
                                                                    <FormTextarea type="text" name="meta_description_en" value={cms.meta_description_en} onChange={onChange} placeholder="Meta Description En" rows="3"
                                                                        className={errorMsg.meta_description_en != "" ? "is-invalid" : ""} />
                                                                    {errorMsg.meta_description_en != "" &&
                                                                        (<FormFeedback>{errorMsg.meta_description_en}</FormFeedback>)
                                                                    }
                                                                </Col>
                                                                <Col md="12" className="form-group">
                                                                    <label htmlFor="content_en">Content En<span style={{ color: "red" }}>*</span></label>
                                                                    <ReactQuill name="content_en" value={cms.content_en} onChange={onEditorChange} className="add-new-post__editor mb-1" theme="snow" modules={_quillModules} />
                                                                    {errorMsg.meta_description_en != "" &&
                                                                        (<FormFeedback>{errorMsg.meta_description_en}</FormFeedback>)
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
                                                                    <label htmlFor="name_du">Name<span style={{ color: "red" }}>*</span></label>
                                                                    <FormInput type="text" name="name_du" value={cms.name_du} onChange={onChange} placeholder="Name" maxmaxlength="50"
                                                                        className={errorMsg.name_du != "" ? "is-invalid" : ""} />
                                                                    {errorMsg.name_du != "" &&
                                                                        (<FormFeedback>{errorMsg.name_du}</FormFeedback>)
                                                                    }
                                                                </Col>

                                                                <Col md="6" className="form-group">
                                                                    <label htmlFor="page_url_du">Page Url En<span style={{ color: "red" }}>*</span></label>
                                                                    <FormInput type="text" name="page_url_du" value={cms.page_url_du} onChange={onChange} placeholder="Page Url En" maxmaxlength="50"
                                                                        className={errorMsg.page_url_du != "" ? "is-invalid" : ""} />
                                                                    {errorMsg.page_url_du != "" &&
                                                                        (<FormFeedback>{errorMsg.page_url_du}</FormFeedback>)
                                                                    }
                                                                </Col>
                                                                <Col md="6" className="form-group">
                                                                    <label htmlFor="meta_tag_du">Meta Title En<span style={{ color: "red" }}>*</span></label>
                                                                    <FormInput type="text" name="meta_title_du" value={cms.meta_title_du} onChange={onChange} placeholder="Meta Title En" maxmaxlength="100"
                                                                        className={errorMsg.meta_title_du != "" ? "is-invalid" : ""} />
                                                                    {errorMsg.meta_title_du != "" &&
                                                                        (<FormFeedback>{errorMsg.meta_title_du}</FormFeedback>)
                                                                    }
                                                                </Col>
                                                                <Col md="6" className="form-group">
                                                                    <label htmlFor="meta_tag_du">Meta Tag En<span style={{ color: "red" }}>*</span></label>
                                                                    <FormInput type="text" name="meta_tag_du" value={cms.meta_tag_du} onChange={onChange} placeholder="Meta Tag En" maxmaxlength="50"
                                                                        className={errorMsg.meta_tag_du != "" ? "is-invalid" : ""} />
                                                                    {errorMsg.meta_tag_du != "" &&
                                                                        (<FormFeedback>{errorMsg.meta_tag_du}</FormFeedback>)
                                                                    }
                                                                </Col>
                                                                <Col md="6" className="form-group">
                                                                    <label htmlFor="meta_tag">Meta Keyword En<span style={{ color: "red" }}>*</span></label>
                                                                    <FormInput type="text" name="meta_keyword" value={cms.meta_keyword_du} onChange={onChange} placeholder="Meta Keyword" maxmaxlength="100"
                                                                        className={errorMsg.meta_keyword != "" ? "is-invalid" : ""} />
                                                                    {errorMsg.meta_keyword != "" &&
                                                                        (<FormFeedback>{errorMsg.meta_keyword}</FormFeedback>)
                                                                    }
                                                                </Col>
                                                                <Col md="6" className="form-group">
                                                                    <label htmlFor="meta_tag">Meta Description En<span style={{ color: "red" }}>*</span></label>
                                                                    <FormTextarea type="text" name="meta_description_du" value={cms.meta_description_du} onChange={onChange} placeholder="Meta Description En" rows="3"
                                                                        className={errorMsg.meta_description_du != "" ? "is-invalid" : ""} />
                                                                    {errorMsg.meta_description_du != "" &&
                                                                        (<FormFeedback>{errorMsg.meta_description_du}</FormFeedback>)
                                                                    }
                                                                </Col>
                                                                <Col md="12" className="form-group">
                                                                    <label htmlFor="content_du">Content En<span style={{ color: "red" }}>*</span></label>
                                                                    <ReactQuill name="content_du" value={cms.content_du} onChange={onEditorChange} className="add-new-post__editor mb-1" theme="snow" modules={_quillModules} />
                                                                    {
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
                                                                    <label htmlFor="name_de">Name<span style={{ color: "red" }}>*</span></label>
                                                                    <FormInput type="text" name="name_de" value={cms.name_de} onChange={onChange} placeholder="Name" maxmaxlength="50"
                                                                        className={errorMsg.name_de != "" ? "is-invalid" : ""} />
                                                                    {errorMsg.name_de != "" &&
                                                                        (<FormFeedback>{errorMsg.name_de}</FormFeedback>)
                                                                    }
                                                                </Col>

                                                                <Col md="6" className="form-group">
                                                                    <label htmlFor="page_url_de">Page Url En<span style={{ color: "red" }}>*</span></label>
                                                                    <FormInput type="text" name="page_url_de" value={cms.page_url_de} onChange={onChange} placeholder="Page Url En" maxmaxlength="50"
                                                                        className={errorMsg.page_url_de != "" ? "is-invalid" : ""} />
                                                                    {errorMsg.page_url_de != "" &&
                                                                        (<FormFeedback>{errorMsg.name_de}</FormFeedback>)
                                                                    }
                                                                </Col>
                                                                <Col md="6" className="form-group">
                                                                    <label htmlFor="meta_tag_de">Meta Title En<span style={{ color: "red" }}>*</span></label>
                                                                    <FormInput type="text" name="meta_title_de" value={cms.meta_title_de} onChange={onChange} placeholder="Meta Title En" maxmaxlength="100"
                                                                        className={errorMsg.meta_title_de != "" ? "is-invalid" : ""} />
                                                                    {errorMsg.meta_title_de != "" &&
                                                                        (<FormFeedback>{errorMsg.meta_title_de}</FormFeedback>)
                                                                    }
                                                                </Col>
                                                                <Col md="6" className="form-group">
                                                                    <label htmlFor="meta_tag_de">Meta Tag En<span style={{ color: "red" }}>*</span></label>
                                                                    <FormInput type="text" name="meta_tag_de" value={cms.meta_tag_de} onChange={onChange} placeholder="Meta Tag En" maxmaxlength="50"
                                                                        className={errorMsg.meta_tag_de != "" ? "is-invalid" : ""} />
                                                                    {errorMsg.meta_tag_de != "" &&
                                                                        (<FormFeedback>{errorMsg.meta_tag_de}</FormFeedback>)
                                                                    }
                                                                </Col>
                                                                <Col md="6" className="form-group">
                                                                    <label htmlFor="meta_tag">Meta Keyword En<span style={{ color: "red" }}>*</span></label>
                                                                    <FormInput type="text" name="meta_keyword" value={cms.meta_keyword_de} onChange={onChange} placeholder="Meta Keyword" maxmaxlength="100"
                                                                        className={errorMsg.meta_keyword != "" ? "is-invalid" : ""} />
                                                                    {errorMsg.meta_keyword != "" &&
                                                                        (<FormFeedback>{errorMsg.meta_keyword}</FormFeedback>)
                                                                    }
                                                                </Col>
                                                                <Col md="6" className="form-group">
                                                                    <label htmlFor="meta_tag">Meta Description En<span style={{ color: "red" }}>*</span></label>
                                                                    <FormTextarea type="text" name="meta_description_de" value={cms.meta_description_de} onChange={onChange} placeholder="Meta Description En" rows="3"
                                                                        className={errorMsg.meta_description_de != "" ? "is-invalid" : ""} />
                                                                    {errorMsg.meta_description_de != "" &&
                                                                        (<FormFeedback>{errorMsg.meta_description_de}</FormFeedback>)
                                                                    }
                                                                </Col>
                                                                <Col md="12" className="form-group">
                                                                    <label htmlFor="content_de">Content En<span style={{ color: "red" }}>*</span></label>
                                                                    <ReactQuill name="content_de" value={cms.content_de} onChange={onEditorChange} className="add-new-post__editor mb-1" theme="snow" modules={_quillModules} />
                                                                    {errorMsg.content_de != "" &&
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


                                </Form>
                            </CardBody>

                            <ListGroupItem className="d-flex px-2">
                                <Button size="md" theme="accent" className="d-table mr-6" onClick={Save}>Save</Button>&nbsp;
                                <Button size="md" theme="accent" className="d-table mr-6" >Cancel</Button>&nbsp;
                                <Link to="/cmslist" className="bg-primary rounded p-2"
                                    style={{ boxShadow: "inset 0 0 5px rgba(0,0,0,.2)", color: "#fff", width: "80px", textAlign: "center" }}>  List </Link>
                            </ListGroupItem>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default StaticPages;
