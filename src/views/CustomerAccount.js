import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from "shards-react";
import PageTitle from "../components/common/PageTitle";
import CreateAccountList from '../components/customer-account/CustomerAccount'

function CreateAccount() {
    const [errors, setErrors] = useState({});
    const [roleList, setRoleList] = useState([]);
    return (
        <div>
            <Container fluid className="main-content-container px-4">
                <CreateAccountList></CreateAccountList>
            </Container>
        </div >
    )
}

export default CreateAccount;
