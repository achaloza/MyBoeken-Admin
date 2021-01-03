import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from "shards-react";
import PageTitle from "../components/common/PageTitle";
import CreateOrderList from '../components/customer-order/CustomerOrder'

function CreateOrder() {
    const [errors, setErrors] = useState({});
    const [roleList, setRoleList] = useState([]);
    return (
        <div>
            <Container fluid className="main-content-container px-4">
                <CreateOrderList></CreateOrderList>
            </Container>
        </div >
    )
}

export default CreateOrder;
