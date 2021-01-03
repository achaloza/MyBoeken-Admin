import React from "react";
import ReactTable from "react-table";
import FuzzySearch from "fuzzy-search";
import { withRouter } from 'react-router-dom';
import { Container, Row, Col, ButtonGroup, Button, Card, CardHeader, CardBody, FormSelect, InputGroup, InputGroupAddon, InputGroupText, FormInput } from "shards-react";
import PageTitle from "../common/PageTitle";

import { Link } from "react-router-dom";
import Services from "../../services/dynamicmessage";
class DyanmicMessageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageSizeOptions: [5, 10, 15, 20, 25, 30],
            pageSize: 10,
            tableData: []
        };

        this.searcher = null;
        this.getStatusClass = this.getStatusClass.bind(this);
        this.handlePageSizeChange = this.handlePageSizeChange.bind(this);
        this.handleFilterSearch = this.handleFilterSearch.bind(this);
        this.handleItemEdit = this.handleItemEdit.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        this.handleItemConfirm = this.handleItemConfirm.bind(this);
        this.handleItemViewDetails = this.handleItemViewDetails.bind(this);
    }

    async componentWillMount() {
        //const tableData = getTransactionHistoryData();
        let tableData = await Services.getAll();
        this.setState({
            ...this.state, tableData
        });
        let pageSize = tableData.length;
        if (pageSize < 10) {
            this.setState({
                ...this.state, pageSize
            });
        }
        // Initialize the fuzzy searcher.
        this.searcher = new FuzzySearch(tableData, ["firstname", "lastname"], {
            caseSensitive: false
        });
    }

    /**
     * Returns the appropriate status class for the `Status` column.
     */
    getStatusClass(status) {
        const statusMap = {
            Deactive: "danger",
            Active: "success",
            Pending: "warning"
        };
        return `text-${statusMap[status]}`;
    }

    /**
     * Handles the page size change event.
     */
    handlePageSizeChange(e) {
        this.setState({
            ...this.state,
            pageSize: e.target.value
        });
    }

    /**
     * Handles the global search.
     */
    handleFilterSearch(e) {
        this.setState({
            ...this.state,
            tableData: this.searcher.search(e.target.value)
        });
    }

    /**
     * Mock method for editing transactions.
     */
    handleItemEdit(row) {
        this.props.history.push({ pathname: '/editdyanmicmessage/' + row.original.id });
    }

    /**
     * Mock method for deleting transactions.
     */
    handleItemDelete = async row => {
        //alert(`Deleting transaction "${row.original.id}"!`);
        let result = await Services.remvoeUser(row.original.id);
        if (result) {
            let rows = this.state.rows.filter(element => (
                element.id !== row.id
            ));
            this.setState({ rows });
        }//////
    }
    /**
     * Mock method for confirming transactions.
     */
    handleItemConfirm(row) {
        alert(`Confirming transaction "${row.original.id}"!`);
    }

    /**
     * Mock method for confirming transactions.
     */
    handleItemViewDetails(row) {
        alert(`Viewing details for "${row.original.id}"!`);
    }

    render() {
        debugger
        const { tableData, pageSize, pageSizeOptions } = this.state;
        const tableColumns = [
            {
                Header: "#",
                accessor: "id",
                maxWidth: 60,
                className: "text-center"
            },
            {
                Header: "Name",
                accessor: "date",
                className: "text-center",
                justifyContent: "left",
                minWidth: 200,
                style: { textAlign: "left" },
                Cell: row => (
                    <div style={{ justifyContent: "right" }}>{row.original.firstname + " " + row.original.lastname}</div>
                )
                // dateFormat(new Date(row.original.date), "dddd, mmmm dS, yyyy")
            },
            {
                Header: "User Name",
                accessor: "username",
                className: "text-center"
            },
            {
                Header: "Password",
                accessor: "password",
                maxWidth: 100,
                className: "text-center"
            },
            {
                Header: "Status",
                accessor: "isActive",
                maxWidth: 100,
                Cell: row => (
                    <span className={this.getStatusClass(row.original.isActive)}>
                        {row.original.isActive}
                    </span>
                ),
                className: "text-center"
            },
            {
                Header: "Actions",
                accessor: "actions",
                maxWidth: 200,
                minWidth: 180,
                sortable: false,
                Cell: row => (
                    <ButtonGroup size="sm" className="d-table mx-auto">
                        <Button theme="white" onClick={() => this.handleItemConfirm(row)} title="Active and Deactive">
                            <i className="material-icons">&#xE5CA;</i>
                        </Button>
                        <Button theme="white" onClick={() => this.handleItemEdit(row)} title="Edit">
                            <i className="material-icons">&#xE254;</i>
                        </Button>
                        <Button theme="white" onClick={() => this.handleItemDelete(row)} title="Delete">
                            <i className="material-icons">&#xE872;</i>
                        </Button>
                    </ButtonGroup>
                )
            }
        ];

        return (
            <Container fluid className="main-content-container px-4 pb-4">
                <Row noGutters className="page-header py-4">
                    <PageTitle title="Dynamic Message" subtitle="Settings" className="text-sm-left mb-3" />
                    <Col sm="2" className="d-flex ml-auto my-auto justify-content-end">
                        <Link to="/dyanmicmessage" className="bg-primary rounded p-2"
                            style={{ boxShadow: "inset 0 0 5px rgba(0,0,0,.2)", color: "#fff" }}>Create</Link>

                    </Col>
                </Row>
                <Card className="p-0">
                    <CardHeader className="p-0">
                        <Container fluid className="file-manager__filters border-bottom">
                            <Row>
                                {/* Filters :: Page Size */}
                                <Col className="file-manager__filters__rows d-flex" md="6">
                                    <span>Show</span>
                                    <FormSelect
                                        size="sm"
                                        value={this.state.pageSize}
                                        onChange={this.handlePageSizeChange}
                                    >
                                        {pageSizeOptions.map((size, idx) => (
                                            <option key={idx} value={size}>
                                                {size} rows
                                            </option>
                                        ))}
                                    </FormSelect>
                                </Col>

                                {/* Filters :: Search */}
                                <Col className="file-manager__filters__search d-flex" md="6">
                                    <InputGroup seamless size="sm" className="ml-auto">
                                        <InputGroupAddon type="prepend">
                                            <InputGroupText>
                                                <i className="material-icons">search</i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <FormInput onChange={this.handleFilterSearch} />
                                    </InputGroup>
                                </Col>
                            </Row>
                        </Container>
                    </CardHeader>
                    <CardBody className="p-0">
                        <div className="">
                            <ReactTable
                                columns={tableColumns}
                                data={tableData}
                                pageSize={pageSize}
                                showPageSizeOptions={false}
                                resizable={false}
                            />
                        </div>
                    </CardBody>
                </Card>
            </Container>
        );
    }
}

export default withRouter(DyanmicMessageList);
