import React, { useState, useEffect } from "react";
import { FormCheckbox, Alert, Container, Row, Col, Button, Card, CardBody, CardFooter, Form, FormInput, FormSelect, ListGroup, ListGroupItem, FormTextarea, CardHeader, FormFeedback } from "shards-react";
import ReactQuill from "react-quill";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, } from 'react-accessible-accordion';
import _quillModules from '../common/QuillModules'
import Services from '../../services/category'
import CustomFileUpload from "../components-overview/CustomFileUpload";
import { Link, withRouter } from "react-router-dom";
import validator from 'validator';
import Validation from './validation'
function Product(props) {
    const [product, setProduct] = useState(
        {
            product_id: 0, name: '', SKU: '', short_description: '', description: '', rr_price: 0, has_base_price: 0, base_price: 0, supplier_id: 0, location: '', tax_id: 0, shipping_day_id: 0, condition: '',
            country: [],
            meta_tag: '', meta_description: '', meta_title: '', meta_keywords: '',
            author: '', manufacture: '', weight: '', length: '', width: '', height: '', language: '', display_attribute: '',
            attributes_name: [],
            thumb_img_url: [], small_img_url: [], actual_img_url: []
        });
    const [is_published, setIspublished] = useState(false);
    const [is_dead, setIsdead] = useState(false);
    const [is_fix_price, setIsfixprice] = useState(false);
    const [is_fix_stock, setisFixstock] = useState(false);
    const [errors, setErrors] = useState(false);
    const [errorMsg, setErrorMsg] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const [taxList, setTaxList] = useState([]);
    const [supplierList, setSupplierList] = useState([]);
    const [countryList, setCountryList] = useState([]);

    const [attribute, setAttribute] = useState({ key: '', value: '' });
    const [attributeList, setAttributeList] = useState([]);

    const onAttributeChange = (e) => {
        setAttribute({ ...attribute, [e.target.name]: e.target.value });
    }
    const onAdd = event => {
        event.persist()
        let data = { key: attribute.key, value: attribute.value }
        if (attribute.key != "" && attribute.value != "") {
            setAttributeList([...attributeList, data]);
            setAttribute({ key: '', value: '' });
        }
    }
    const handleRemoveItem = (e) => {
        const value = e.target.getAttribute("name")
        setAttributeList(attributeList.filter(item => item.value !== value));
    };

    useEffect(() => {
        let id = props.match.params.id;
        if (id > 0) {
            getProduct();
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
        setCountryList([
            { key: 0, value: "Denmark" },
            { key: 1, value: "Netherlands" },
        ])
    }, []);

    const onFileChange = e => {
        let file = e.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(file[0]);

        reader.onload = e => {
            setProduct({ ...Product, [e.target.name]: e.target.result });
        };
    };
    const onEditorChange = (e) => {
        setProduct({ ...product, 'description': e });
    }
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
    const Countrylist = countryList.map(item => (
        <div>
            <label>
                <input
                    type="checkbox"
                    value={item.id}
                    onChange={onchange}
                /> {item.value}
            </label>
        </div>
    ))
    const getProduct = async () => {
        const result = await Services.getUser();
        setProduct({
            // firstName: result[0].firstname,
            // lastName: result[0].lastname,
            // userName: result[0].username,
            // password: result[0].password,
            // roleId: result[0].roleid,
        });
    }
    const onChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    }

    const Save = (e) => {
        e.preventDefault();
        let error = Validation(product);
        //debugger;
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
                                <h6 className="m-0">Product</h6>
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
                                                            Basic Information
                                                    </AccordionItemButton>
                                                    </AccordionItemHeading>
                                                    <AccordionItemPanel>
                                                        <CardBody className="p-0">
                                                            <Row form className="mx-4">
                                                                <Col lg="12">
                                                                    <Row form>
                                                                        <Col md="6" className="form-group">
                                                                            <label htmlFor="name">Name<span style={{ color: "red" }}>*</span></label>
                                                                            <FormInput type="text" name="name" value={product.name} onChange={onChange} placeholder="Name" maxmaxlength="50"
                                                                                className={errors && errorMsg.name != "" ? "is-invalid" : ""}
                                                                            />
                                                                            {errorMsg.name != "" &&
                                                                                (<FormFeedback>{errorMsg.name}</FormFeedback>)
                                                                            }
                                                                        </Col>
                                                                        <Col md="6" className="form-group">
                                                                            <label htmlFor="page_url_en">SKU<span style={{ color: "red" }}>*</span></label>
                                                                            <FormInput type="text" name="SKU" value={product.SKU} onChange={onChange}
                                                                                placeholder="SKU" maxmaxlength="13"
                                                                                className={errors && errorMsg.SKU != "" ? "is-invalid" : ""}
                                                                            />
                                                                            {errorMsg.SKU != "" &&
                                                                                (<FormFeedback>{errorMsg.SKU}</FormFeedback>)
                                                                            }
                                                                        </Col>

                                                                        <Col md="4" className="form-group">
                                                                            <label htmlFor="rr_price">RR Price<span style={{ color: "red" }}>*</span></label>
                                                                            <FormInput type="number" name="rr_price" value={product.rr_price} onChange={onChange} placeholder="0" maxmaxlength="5"
                                                                                className={errors && errorMsg.rr_price != "" ? "is-invalid" : ""} />
                                                                            {errorMsg.rr_price != "" &&
                                                                                (<FormFeedback>{errorMsg.rr_price}</FormFeedback>)
                                                                            }
                                                                        </Col>
                                                                        <Col md="4" className="form-group">
                                                                            <label htmlFor="has_base_price">Has Base Price<span style={{ color: "red" }}>*</span></label>
                                                                            <FormInput type="number" name="has_base_price" value={product.has_base_price} onChange={onChange} placeholder="0" maxmaxlength="5"
                                                                                className={errors && errorMsg.has_base_price != "" ? "is-invalid" : ""} />
                                                                            {errorMsg.has_base_price != "" &&
                                                                                (<FormFeedback>{errorMsg.has_base_price}</FormFeedback>)
                                                                            }
                                                                        </Col>
                                                                        <Col md="4" className="form-group">
                                                                            <label htmlFor="base_price"> Base Price<span style={{ color: "red" }}>*</span></label>
                                                                            <FormInput type="number" name="base_price" value={product.base_price} onChange={onChange} placeholder="0" maxmaxlength="5"
                                                                                className={errors && errorMsg.base_price != "" ? "is-invalid" : ""} />
                                                                            {errorMsg.base_price != "" &&
                                                                                (<FormFeedback>{errorMsg.base_price}</FormFeedback>)
                                                                            }
                                                                        </Col>
                                                                        <Col md="6" className="form-group">
                                                                            <label htmlFor="base_price"> Supplier<span style={{ color: "red" }}>*</span></label>
                                                                            <FormSelect name="supplier_id" onChange={onChange}>
                                                                                <option>Select supplier</option>
                                                                            </FormSelect>
                                                                            {errorMsg.supplier_id != "" &&
                                                                                (<FormFeedback>{errorMsg.supplier_id}</FormFeedback>)
                                                                            }
                                                                        </Col>
                                                                        <Col md="6" className="form-group">
                                                                            <label htmlFor="base_price"> Tax<span style={{ color: "red" }}>*</span></label>
                                                                            <FormSelect name="tax_id" onChange={onChange}>
                                                                                <option>Select tax_id</option>
                                                                            </FormSelect>
                                                                            {errorMsg.tax_id != "" &&
                                                                                (<FormFeedback>{errorMsg.tax_id}</FormFeedback>)
                                                                            }
                                                                        </Col>
                                                                        <Col md="6" className="form-group">
                                                                            <label htmlFor="condition"> Condition<span style={{ color: "red" }}>*</span></label>
                                                                            <FormSelect name="condition" onChange={onChange}>
                                                                                <option>Select tax_id</option>
                                                                            </FormSelect>
                                                                            {errorMsg.condition != "" &&
                                                                                (<FormFeedback>{errorMsg.condition}</FormFeedback>)
                                                                            }
                                                                        </Col>
                                                                        <Col md="6" className="form-group">
                                                                            <label htmlFor="page_url_en">location<span style={{ color: "red" }}>*</span></label>
                                                                            <FormInput type="text" name="location" value={product.location} onChange={onChange}
                                                                                placeholder="location" maxmaxlength="30"
                                                                                className={errors && errorMsg.location != "" ? "is-invalid" : ""}
                                                                            />
                                                                            {errors &&
                                                                                (<FormFeedback>{errorMsg.location}</FormFeedback>)
                                                                            }
                                                                        </Col>
                                                                        <Col md="3" className="form-group">
                                                                            <FormCheckbox name="is_published" checked={is_published ? "Checked" : ""} onChange={() => setIspublished(!is_published)} >Published</FormCheckbox>
                                                                        </Col>
                                                                        <Col md="3" className="form-group">
                                                                            <FormCheckbox name="is_dead" checked={is_dead ? "Checked" : ""} onChange={() => setIsdead(!is_dead)}>Dead</FormCheckbox>

                                                                        </Col>
                                                                        <Col md="3" className="form-group">
                                                                            <FormCheckbox name="is_fix_price" checked={is_fix_price ? "Checked" : ""} onChange={() => setIsfixprice(!is_fix_price)}>Fix Price</FormCheckbox>
                                                                        </Col>
                                                                        <Col md="3" className="form-group">
                                                                            <FormCheckbox name="is_fix_stock" checked={is_fix_stock ? "Checked" : ""} onChange={() => setisFixstock(!is_fix_stock)} >Fix Stock</FormCheckbox>
                                                                        </Col>
                                                                        <Col md="12" className="form-group">
                                                                            <label htmlFor="meta_tag_en">Short Description<span style={{ color: "red" }}>*</span></label>
                                                                            <FormInput type="text" name="short_description" value={product.short_description} onChange={onChange}
                                                                                placeholder="Short Description" maxmaxlength="100"
                                                                                className={errors && errorMsg.short_description != "" ? "is-invalid" : ""}
                                                                            />
                                                                            {errorMsg.short_description != "" &&
                                                                                (<FormFeedback>{errorMsg.short_description}</FormFeedback>)
                                                                            }
                                                                        </Col>

                                                                        <Col md="12" className="form-group">
                                                                            <label htmlFor="content_en">Description<span style={{ color: "red" }}>*</span></label>
                                                                            <ReactQuill name="description" value={product.description} onChange={onEditorChange}
                                                                                className="add-new-post__editor mb-1" theme="snow" modules={_quillModules} />

                                                                            {errorMsg.description != "" &&
                                                                                (<FormFeedback>{errorMsg.description}</FormFeedback>)
                                                                            }
                                                                        </Col>
                                                                    </Row>
                                                                </Col>
                                                            </Row>

                                                        </CardBody>
                                                    </AccordionItemPanel>
                                                </AccordionItem>

                                                {/* Meta Form */}

                                                <AccordionItem>
                                                    <AccordionItemHeading>
                                                        <AccordionItemButton>
                                                            Meta Keyword
                                            </AccordionItemButton>
                                                    </AccordionItemHeading>
                                                    <AccordionItemPanel>
                                                        <CardBody className="p-0">
                                                            <Row form className="mx-4">
                                                                <Col lg="12">
                                                                    <Row form>
                                                                        <Col md="6" className="form-group">
                                                                            <label htmlFor="meta_tag">Meta Title<span style={{ color: "red" }}>*</span></label>
                                                                            <FormInput type="text" name="meta_title" value={product.meta_title} onChange={onChange}
                                                                                placeholder="Meta Title" maxmaxlength="100"
                                                                                className={errors && errorMsg.meta_title != "" ? "is-invalid" : ""}
                                                                            />
                                                                            {errorMsg.meta_title != "" &&
                                                                                (<FormFeedback>{errorMsg.meta_title}</FormFeedback>)
                                                                            }
                                                                        </Col>
                                                                        <Col md="6" className="form-group">
                                                                            <label htmlFor="meta_tag">Meta Tagn<span style={{ color: "red" }}>*</span></label>
                                                                            <FormInput type="text" name="meta_tag" value={product.meta_tag} onChange={onChange} placeholder="Meta Tag" maxmaxlength="50"
                                                                                className={errors && errorMsg.meta_title != "" ? "is-invalid" : ""} />
                                                                            {errorMsg.meta_title != "" &&
                                                                                (<FormFeedback>{errorMsg.meta_title}</FormFeedback>)
                                                                            }
                                                                        </Col>
                                                                        <Col md="6" className="form-group">
                                                                            <label htmlFor="meta_tag">Meta Keyword<span style={{ color: "red" }}>*</span></label>
                                                                            <FormInput type="text" name="meta_keywords" value={product.meta_keywords} onChange={onChange} placeholder="Meta Keyword" maxmaxlength="100"
                                                                                className={errors && errorMsg.meta_keywords != "" ? "is-invalid" : ""} />
                                                                            {errorMsg.meta_keywords != "" &&
                                                                                (<FormFeedback>{errorMsg.meta_keywords}</FormFeedback>)
                                                                            }
                                                                        </Col>
                                                                        <Col md="6" className="form-group">
                                                                            <label htmlFor="meta_tag">Meta Description<span style={{ color: "red" }}>*</span></label>
                                                                            <FormTextarea type="text" name="meta_description" value={product.meta_description} onChange={onChange} placeholder="Meta Description" rows="3"
                                                                                className={errors && errorMsg.meta_description != "" ? "is-invalid" : ""} />
                                                                            {errorMsg.meta_description != "" &&
                                                                                (<FormFeedback>{errorMsg.meta_description}</FormFeedback>)
                                                                            }
                                                                        </Col>
                                                                    </Row>
                                                                </Col>
                                                            </Row>

                                                        </CardBody>
                                                    </AccordionItemPanel>
                                                </AccordionItem>

                                                {/* Country List */}

                                                <AccordionItem>
                                                    <AccordionItemHeading>
                                                        <AccordionItemButton>
                                                            Country List
                                            </AccordionItemButton>
                                                    </AccordionItemHeading>
                                                    <AccordionItemPanel>
                                                        <CardBody className="p-0">
                                                            {Countrylist}

                                                        </CardBody>
                                                    </AccordionItemPanel>
                                                </AccordionItem>

                                                {/* Image */}

                                                <AccordionItem>
                                                    <AccordionItemHeading>
                                                        <AccordionItemButton>
                                                            Image
                                            </AccordionItemButton>
                                                    </AccordionItemHeading>
                                                    <AccordionItemPanel>
                                                        <CardBody className="p-0">

                                                            <Row form className="mx-4">
                                                                <Col lg="12">
                                                                    <Row form>
                                                                        <Col md="6" className="form-group">
                                                                            <label htmlFor="thumb_img_url">Thumb Image</label>
                                                                            <CustomFileUpload
                                                                                name="thumb_img_url"
                                                                                onChange={e => onFileChange(e)}
                                                                            // className={
                                                                            //   errorMsg.thumb_img_url != "" ? "is-invalid" : ""
                                                                            // }
                                                                            />
                                                                            {/* {errors && (
                                <FormFeedback>
                                  {errorMsg.thumb_img_url}
                                </FormFeedback>
                              )} */}
                                                                        </Col>
                                                                        <Col md="6" className="form-group">
                                                                            <label htmlFor="small_img_url">Small Image</label>
                                                                            <CustomFileUpload
                                                                                name="small_img_url"
                                                                                onChange={e => onFileChange(e)}
                                                                            // className={
                                                                            //   errorMsg.small_img_url != "" ? "is-invalid" : ""
                                                                            // }
                                                                            />
                                                                            {/* {errors && (
                                <FormFeedback>
                                  {errorMsg.small_img_url}
                                </FormFeedback>
                              )} */}
                                                                        </Col>
                                                                        <Col md="6" className="form-group">
                                                                            <label htmlFor="actual_img_url">Actual Image</label>
                                                                            <CustomFileUpload
                                                                                name="actual_img_url"
                                                                                onChange={e => onFileChange(e)}
                                                                            // className={
                                                                            //   errorMsg.actual_img_url != "" ? "is-invalid" : ""
                                                                            // }
                                                                            />
                                                                            {/* {errors && (
                                <FormFeedback>
                                  {errorMsg.actual_img_url}
                                </FormFeedback>
                              )} */}
                                                                        </Col>

                                                                    </Row>
                                                                </Col>
                                                            </Row>

                                                        </CardBody>
                                                    </AccordionItemPanel>
                                                </AccordionItem>

                                                {/* Attributes */}

                                                <AccordionItem>
                                                    <AccordionItemHeading>
                                                        <AccordionItemButton>
                                                            Book Details
                                            </AccordionItemButton>
                                                    </AccordionItemHeading>
                                                    <AccordionItemPanel>
                                                        <CardBody className="p-0">
                                                            <Row form className="mx-4">
                                                                <Col lg="12">
                                                                    <Row form>
                                                                        <Col md="6" className="form-group">
                                                                            <label htmlFor="author">Author<span style={{ color: "red" }}>*</span></label>
                                                                            <FormInput type="text" name="author" value={product.author} onChange={onChange}
                                                                                placeholder="Author" maxmaxlength="50"
                                                                                className={errors && errorMsg.author != "" ? "is-invalid" : ""}
                                                                            />
                                                                            {errorMsg.author != "" &&
                                                                                (<FormFeedback>{errorMsg.author}</FormFeedback>)
                                                                            }
                                                                        </Col>
                                                                        <Col md="6" className="form-group">
                                                                            <label htmlFor="manufacture">Manufacture<span style={{ color: "red" }}>*</span></label>
                                                                            <FormInput type="text" name="manufacture" value={product.manufacture} onChange={onChange}
                                                                                placeholder="Author" maxmaxlength="50"
                                                                                className={errors && errorMsg.manufacture != "" ? "is-invalid" : ""}
                                                                            />
                                                                            {errorMsg.manufacture != "" &&
                                                                                (<FormFeedback>{errorMsg.manufacture}</FormFeedback>)
                                                                            }
                                                                        </Col>
                                                                        <Col md="6" className="form-group">
                                                                            <label htmlFor="weight">Weight<span style={{ color: "red" }}>*</span></label>
                                                                            <FormInput type="text" name="weight" value={product.weight} onChange={onChange}
                                                                                placeholder="Weight" maxmaxlength="50"
                                                                                className={errors && errorMsg.weight != "" ? "is-invalid" : ""}
                                                                            />
                                                                            {errorMsg.weight != "" &&
                                                                                (<FormFeedback>{errorMsg.weight}</FormFeedback>)
                                                                            }
                                                                        </Col>
                                                                        <Col md="6" className="form-group">
                                                                            <label htmlFor="length">Length<span style={{ color: "red" }}>*</span></label>
                                                                            <FormInput type="text" name="length" value={product.length} onChange={onChange}
                                                                                placeholder="length" maxmaxlength="50"
                                                                                className={errors && errorMsg.length != "" ? "is-invalid" : ""}
                                                                            />
                                                                            {errorMsg.length != "" &&
                                                                                (<FormFeedback>{errorMsg.length}</FormFeedback>)
                                                                            }
                                                                        </Col>
                                                                        <Col md="6" className="form-group">
                                                                            <label htmlFor="width">width<span style={{ color: "red" }}>*</span></label>
                                                                            <FormInput type="text" name="width" value={product.width} onChange={onChange}
                                                                                placeholder="width" maxmaxlength="50"
                                                                                className={errors && errorMsg.width != "" ? "is-invalid" : ""}
                                                                            />
                                                                            {errorMsg.width != "" &&
                                                                                (<FormFeedback>{errorMsg.width}</FormFeedback>)
                                                                            }
                                                                        </Col>
                                                                        <Col md="6" className="form-group">
                                                                            <label htmlFor="height">Height<span style={{ color: "red" }}>*</span></label>
                                                                            <FormInput type="text" name="height" value={product.height} onChange={onChange}
                                                                                placeholder="height" maxmaxlength="50"
                                                                                className={errors && errorMsg.height != "" ? "is-invalid" : ""}
                                                                            />
                                                                            {errorMsg.height != "" &&
                                                                                (<FormFeedback>{errorMsg.height}</FormFeedback>)
                                                                            }
                                                                        </Col>
                                                                        <Col md="6" className="form-group">
                                                                            <label htmlFor="language">Language<span style={{ color: "red" }}>*</span></label>
                                                                            <FormInput type="text" name="language" value={product.language} onChange={onChange}
                                                                                placeholder="language" maxmaxlength="50"
                                                                                className={errors && errorMsg.language != "" ? "is-invalid" : ""}
                                                                            />
                                                                            {errorMsg.language != "" &&
                                                                                (<FormFeedback>{errorMsg.language}</FormFeedback>)
                                                                            }
                                                                        </Col>
                                                                        <Col md="6" className="form-group">
                                                                            <label htmlFor="display_attribute">Display Attribute<span style={{ color: "red" }}>*</span></label>
                                                                            <FormInput type="text" name="display_attribute" value={product.display_attribute} onChange={onChange}
                                                                                placeholder="Display Attribute" maxmaxlength="50"
                                                                                className={errors && errorMsg.display_attribute != "" ? "is-invalid" : ""}
                                                                            />
                                                                            {errorMsg.display_attribute != "" &&
                                                                                (<FormFeedback>{errorMsg.display_attribute}</FormFeedback>)
                                                                            }
                                                                        </Col>
                                                                        <Col md="5" className="form-group">
                                                                            <label htmlFor="key">Attribute</label>
                                                                            <FormInput type="text" name="key" value={attribute.key} onChange={onAttributeChange}
                                                                                placeholder="key" maxmaxlength="50"

                                                                            />

                                                                        </Col>
                                                                        <Col md="5" className="form-group">
                                                                            <label htmlFor="value">Value</label>
                                                                            <FormInput type="text" name="value" value={attribute.value} onChange={onAttributeChange}
                                                                                placeholder="value" maxmaxlength="50"

                                                                            />
                                                                        </Col>
                                                                        <Col md="2" className="form-group" style={{ top: 9 }}>
                                                                            <br />
                                                                            <input type="button" onClick={onAdd}
                                                                                value="Add"></input>
                                                                        </Col>
                                                                        {attributeList.map((item, index) => {
                                                                            return (
                                                                                <Col md="12" className="form-group" key={index}>
                                                                                    <Col md="6" className="form-group">
                                                                                        <span>{item.value}</span>
                                                                                    </Col>
                                                                                    <Col md="6" className="form-group">
                                                                                        <span name={item.value} onClick={handleRemoveItem}>X</span>
                                                                                    </Col>
                                                                                </Col>
                                                                            );
                                                                        })}

                                                                    </Row>
                                                                </Col>
                                                            </Row>


                                                        </CardBody>
                                                    </AccordionItemPanel>
                                                </AccordionItem>
                                            </Accordion>

                                        </Form>
                                    </ListGroupItem>
                                </ListGroup>
                            </CardBody>

                            <ListGroupItem className="d-flex px-2">
                                <Button size="md" theme="accent" className="d-table mr-6" onClick={Save}>Save</Button>&nbsp;
                                <Button size="md" theme="accent" className="d-table mr-6" >Cancel</Button>&nbsp;
                                <Link to="/productlist" className="bg-primary rounded p-2"
                                    style={{ boxShadow: "inset 0 0 5px rgba(0,0,0,.2)", color: "#fff", width: "80px", textAlign: "center" }}> List </Link>
                            </ListGroupItem>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}
export default Product;
