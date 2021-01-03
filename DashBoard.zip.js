import React, { useState } from "react";
import TagsInput from "react-tagsinput";
import {
    Alert,
    Container,
    Row,
    Col,
    Button,
    Card,
    CardBody,
    CardFooter,
    Form,
    FormInput,
    FormSelect,
    ListGroupItem,
    FormTextarea
} from "shards-react";
import FormSectionTitle from "../edit-user-profile/FormSectionTitle";
import ReactQuill from "react-quill";
import _quillModules from '../common/Editer'
function StaticPages() {
    const [cms, setCms] = useState(
        {
            id: null, name: '',
            page_url_en: '', meta_tag_en: '', meta_description_en:'', meta_title_en:'', meta_keyword_en:'', content_en:'',
            page_url_du: '', meta_tag_du: '', meta_description_du: '', meta_title_du: '', meta_keywords_du: '', content_du: '',
            page_url_de:'', meta_tag_de:'', meta_description_de:'', meta_title_de:'', meta_keywords_de:'', content_de:''
        });
    const [errors, setErrors] = useState({});

    const onChange = (e) => {
        setCms({ ...cms, [e.target.name]: e.target.value });
    }
    const onEditorChange = (e) => {
        setCms({ ...cms, 'cmscontent': e });
    }
    const Save = (e) => {
        e.preventDefault();
        debugger
    };
    return (
        <div>
            <Container fluid className="px-0">
                <Alert theme="success" className="mb-0">
                    Ole! Your profile has been successfully updated!
          </Alert>
            </Container>
            <Container fluid className="main-content-container px-4">
                <Row>
                    <Col lg="8" className="mx-auto mt-4">
                        <Card small className="edit-user-details mb-4">

                            <CardBody className="p-0">
                                {/* Form Section Title :: General */}
                                <Form className="py-6"  >
                                    <FormSectionTitle
                                        title="Create Account"
                                        description=""
                                    /><hr />

                                    <Row form className="mx-4">
                                        <Col lg="12">
                                            <Row form>
                                                <Col md="12" className="form-group">
                                                    <label htmlFor="name">Name<span style={{color: "red"}}>*</span></label>
                                                    <FormInput type="text" name="name" value={cms.name} onChange={onChange} placeholder="Name" maxmaxlength="50"/>
                                                </Col>

                                                <Col md="6" className="form-group">
                                                    <label htmlFor="page_url_en">Page Url En<span style={{color: "red"}}>*</span></label>
                                                    <FormInput type="text" name="page_url_en" value={cms.page_url_en} onChange={onChange} placeholder="Page Url En" maxmaxlength="50"/>
                                                </Col>
                                                <Col md="6" className="form-group">
                                                    <label htmlFor="meta_tag_en">Meta Title En<span style={{color: "red"}}>*</span></label>
                                                    <FormInput type="text" name="meta_title_en" value={cms.meta_title_en} onChange={onChange} placeholder="Meta Title En" maxmaxlength="100"/>
                                                </Col>
                                                <Col md="6" className="form-group">
                                                    <label htmlFor="meta_tag_en">Meta Tag En<span style={{color: "red"}}>*</span></label>
                                                    <FormInput type="text" name="meta_tag_en" value={cms.meta_tag_en} onChange={onChange} placeholder="Meta Tag En" maxmaxlength="50"/>
                                                </Col>
                                                <Col md="6" className="form-group">
                                                    <label htmlFor="meta_tag">Meta Keyword En<span style={{color: "red"}}>*</span></label>
                                                    <FormInput type="text" name="meta_keyword" value={cms.meta_keyword_en} onChange={onChange} placeholder="Meta Keyword" maxmaxlength="100" />
                                                </Col>
                                                <Col md="6" className="form-group">
                                                    <label htmlFor="meta_tag">Meta Description En<span style={{color: "red"}}>*</span></label>
                                                    <FormTextarea type="text" name="meta_description_en" value={cms.meta_description_en} onChange={onChange} placeholder="Meta Description En" rows="3"/>
                                                </Col>
                                                <Col md="12" className="form-group">
                                                    <label htmlFor="content_en">Content En<span style={{color: "red"}}>*</span></label>
                                                    <ReactQuill  name="content_en" value={cms.content_en} onChange={onEditorChange} className="add-new-post__editor mb-1" theme="snow" modules={_quillModules} />
                                                </Col>

                                            </Row>
                                        </Col>
                                    </Row>

                                </Form>
                            </CardBody>

                            <ListGroupItem className="d-flex px-2">
                                <Button size="md" theme="accent" className="d-table mr-6" onClick={Save}>Save</Button>&nbsp;
                                <Button size="md" theme="accent" className="d-table mr-6" >Cancel</Button>&nbsp;
                                <Button size="md" theme="accent" className="d-table mr-6" >List</Button>
                            </ListGroupItem>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default StaticPages;
