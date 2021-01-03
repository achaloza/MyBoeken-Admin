import validator from "validator";
const Validation = (cms) => {

    let errors = {};
    let isError = false;
    if (validator.isEmpty(cms.name_en)) {
        isError = true;
        errors.name_en = "Name is required";
    }
    if (validator.isEmpty(cms.page_url_en)) {
        isError = true;
        errors.page_url_en = "Pageurl is required";
    }
    if (validator.isEmpty(cms.meta_tag_en)) {
        isError = true;
        errors.meta_tag_en = "meta tag is required";
    }
    if (validator.isEmpty(cms.meta_description_en)) {
        isError = true;
        errors.meta_description_en = "meta description is required";
    }
    if (validator.isEmpty(cms.meta_title_en)) {
        isError = true;
        errors.meta_title_en = "meta title is required";
    }
    if (validator.isEmpty(cms.meta_title_en)) {
        isError = true;
        errors.meta_title_en = "meta title is required";
    }
    if (validator.isEmpty(cms.content_en)) {
        isError = true;
        errors.content_en = "meta title is required";
    }
    //======================================================================================
    if (validator.isEmpty(cms.name_du)) {
        isError = true;
        errors.name_du = "Name is required";
    }
    if (validator.isEmpty(cms.page_url_du)) {
        isError = true;
        errors.page_url_du = "Pageurl is required";
    }
    if (validator.isEmpty(cms.meta_tag_du)) {
        isError = true;
        errors.meta_tag_du = "meta tag is required";
    }
    if (validator.isEmpty(cms.meta_description_du)) {
        isError = true;
        errors.meta_description_du = "meta description is required";
    }
    if (validator.isEmpty(cms.meta_title_du)) {
        isError = true;
        errors.meta_title_du = "meta title is required";
    }
    if (validator.isEmpty(cms.meta_keywords_du)) {
        isError = true;
        errors.meta_keywords_du = "meta title is required";
    }
    if (validator.isEmpty(cms.content_du)) {
        isError = true;
        errors.content_du = "Content is required";
    }
    //======================================================================================
    if (validator.isEmpty(cms.name_de)) {
        isError = true;
        errors.name_de = "Name is required";
    }
    if (validator.isEmpty(cms.page_url_de)) {
        isError = true;
        errors.page_url_de = "Pageurl is required";
    }
    if (validator.isEmpty(cms.meta_tag_de)) {
        isError = true;
        errors.meta_tag_de = "meta tag is required";
    }
    if (validator.isEmpty(cms.meta_description_de)) {
        isError = true;
        errors.meta_description_de = "meta description is required";
    }
    if (validator.isEmpty(cms.meta_title_de)) {
        isError = true;
        errors.meta_title_de = "meta title is required";
    }
    if (validator.isEmpty(cms.meta_keywords_de)) {
        isError = true;
        errors.meta_keywords_de = "meta title is required";
    }
    if (validator.isEmpty(cms.content_de)) {
        isError = true;
        errors.content_de = "Content is required";
    }
    return {
        isError,
        errors
    }
}
export default Validation;