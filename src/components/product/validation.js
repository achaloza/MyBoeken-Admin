import validator from "validator";
const Validation = (product) => {
    // const [errorProductmsg, setErrorProductmsg] = useState(
    //     {
    //         product_id: 0, name: '', SKU: '', short_description: '', description: '', rr_price: 0, has_base_price: 0, base_price: 0, supplier_id: 0, location: '', tax_id: 0, shipping_day_id: 0, condition: '',
    //         country: [],
    //         meta_tag: '', meta_description: '', meta_title: '', meta_keywords: '',
    //         author: '', manufacture: '', weight: '', length: '', width: '', height: '', language: '', display_attribute: '',
    //         attributes_name: [],
    //         thumb_img_url: [], small_img_url: [], actual_img_url: []
    //     });
    let errors = {};
    let isError = false;
    if (validator.isEmpty(product.name)) {
        isError = true;
        errors.name = "Name is required";
    }
    if (validator.isEmpty(product.SKU)) {
        isError = true;
        errors.SKU = "SkU is required";
    }
    if (validator.isEmpty(product.short_description)) {
        isError = true;
        errors.short_description = "short description is required";
    }
    if (validator.isEmpty(product.description)) {
        isError = true;
        errors.description = "Description is required";
    }
    if (product.rr_price == 0) {
        isError = true;
        errors.rr_price = "RR price is required";
    }
    if (product.rr_price == 0) {
        isError = true;
        errors.rr_price = "RR price is required";
    }
    if (product.has_base_price == 0) {
        isError = true;
        errors.has_base_price = "Has base price is required";
    }
    if (product.base_price == 0) {
        isError = true;
        errors.base_price = "Base price is required";
    }
    if (product.has_base_price == 0) {
        isError = true;
        errors.has_base_price = "Has base price is required";
    }
    //meta_tag: '', meta_description: '', meta_title: '', meta_keywords: '',
    if (validator.isEmpty(product.meta_tag)) {
        isError = true;
        errors.meta_tag = "Meta tag is required";
    }
    if (validator.isEmpty(product.meta_description)) {
        isError = true;
        errors.meta_description = "Meta description is required";
    }
    if (validator.isEmpty(product.meta_title)) {
        isError = true;
        errors.meta_title = "Meta title is required";
    }
    if (validator.isEmpty(product.meta_keywords)) {
        isError = true;
        errors.meta_keywords = "Meta Keyword is required";
    }
    if (product.country.length > 0) {
        isError = true;
        errors.meta_keywords = "you have select atlist one country.";
    }
    //author: '', manufacture: '', weight: '', length: '', width: '', height: '', language: '', display_attribute: '',
    if (validator.isEmpty(product.author)) {
        isError = true;
        errors.author = "Author is required";
    }
    if (validator.isEmpty(product.manufacture)) {
        isError = true;
        errors.author = "Manufacture is required";
    }
    if (validator.isEmpty(product.weight)) {
        isError = true;
        errors.weight = "weight is required";
    }
    if (validator.isEmpty(product.length)) {
        isError = true;
        errors.length = "length is required";
    }
    if (validator.isEmpty(product.width)) {
        isError = true;
        errors.width = "width is required";
    }
    if (validator.isEmpty(product.height)) {
        isError = true;
        errors.height = "height is required";
    }
    if (validator.isEmpty(product.language)) {
        isError = true;
        errors.language = "language is required";
    }
    if (validator.isEmpty(product.display_attribute)) {
        isError = true;
        errors.display_attribute = "Display attribute is required";
    }
    return {
        isError,
        errors
    }
}
export default Validation;