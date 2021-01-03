export default function validate(values) {
    let formValidation = {};

    if (values.isEmpty(category.name_en)) {
        formValidation.name_en = "name is required";
    }
    if (values.isEmpty(category.page_url_en)) {
        formValidation.page_url_en = "url is required";
    }
    if (values.isEmpty(category.meta_tag_en)) {
        formValidation.meta_tag_en = "meta tag is required";
    }
    if (values.isEmpty(category.meta_description_en)) {
        formValidation.meta_description_en = "meta description is required";
    }
    if (values.isEmpty(category.meta_title_en)) {
        formValidation.meta_title_en = "meta title is required";
    }
    if (values.isEmpty(category.meta_keywords_en)) {
        formValidation.meta_tag_en = "meta keyword is required";
    }
    if (values.isEmpty(category.content_en)) {
        formValidation.content_en = "content is required";
    }
    if (values.isEmpty(category.name_de)) {
        formValidation.name_de = "name is required";
    }
    if (values.isEmpty(category.page_url_de)) {
        formValidation.page_url_de = "url is required";
    }
    if (values.isEmpty(category.meta_tag_de)) {
        formValidation.meta_tag_de = "meta tag is required";
    }
    if (values.isEmpty(category.meta_description_de)) {
        formValidation.meta_description_de = "meta description is required";
    }
    if (values.isEmpty(category.meta_title_de)) {
        formValidation.meta_title_de = "meta title is required";
    }
    if (values.isEmpty(category.meta_keywords_de)) {
        formValidation.meta_tag_de = "meta keyword is required";
    }
    if (values.isEmpty(category.content_de)) {
        formValidation.content_de = "content is required";
    }
    if (values.isEmpty(category.name_du)) {
        formValidation.name_du = "name is required";
    }
    if (values.isEmpty(category.page_url_du)) {
        formValidation.page_url_du = "url is required";
    }
    if (values.isEmpty(category.meta_tag_du)) {
        formValidation.meta_tag_du = "meta tag is required";
    }
    if (values.isEmpty(category.meta_description_du)) {
        formValidation.meta_description_du = "meta description is required";
    }
    if (values.isEmpty(category.meta_title_du)) {
        formValidation.meta_title_du = "meta title is required";
    }
    if (values.isEmpty(category.meta_keywords_du)) {
        formValidation.meta_tag_du = "meta keyword is required";
    }
    if (values.isEmpty(category.content_du)) {
        formValidation.content_du = "content is required";
    }
    if (isError) {
        setErrorMsg(formValidation);
    }
    return errors;
};
