import React from "react";
import ReactTable from "react-table";
import FuzzySearch from "fuzzy-search";
import { withRouter } from 'react-router-dom';
import { Container, Row, Col, ButtonGroup, Button, Card, CardHeader, CardBody, FormSelect, InputGroup, InputGroupAddon, InputGroupText, FormInput } from "shards-react";
import PageTitle from "../common/PageTitle";
import getTransactionHistoryData from "../../data/customerlist";
import { Link } from "react-router-dom";
import Services from "../../services/user";
import { Modal } from 'react-responsive-modal';

class CustomerOrder extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pageSizeOptions: [5, 10, 15, 20, 25, 30],
            pageSize: 10,
            tableData: [],
            open: false
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
        const tableData = getTransactionHistoryData();
        //let tableData = await Services.getUser();

        let pageSize = tableData.length;
        if (pageSize < 10) {
            this.setState({
                ...this.state, pageSize, tableData
            });
        }
        // Initialize the fuzzy searcher.
        this.searcher = new FuzzySearch(tableData, ["name", "email", "order"], {
            caseSensitive: false
        });
    }
    getStatusClass(status) {
        const statusMap = {
            deactive: "danger",
            active: "success",
        };
        return `text-${statusMap[status]}`;
    }
    handlePageSizeChange(e) {
        this.setState({
            ...this.state,
            pageSize: e.target.value
        });
    }
    handleFilterSearch(e) {
        this.setState({
            ...this.state,
            tableData: this.searcher.search(e.target.value)
        });
    }
    handleItemEdit(row) {
        // model popup
        // this.setState({
        //     ...this.state,
        //     open: true
        // });
        //this.props.history.push({ pathname: '/edituser/' + row.original.id });

        this.props.history.push({ pathname: '/OrderView/' + row.original.id });
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

    handleItemConfirm(row) {
        this.props.history.push({ pathname: '/customerdetail/' + row.original.id });
    }

    handleItemViewDetails(row) {
        alert(`Viewing details for "${row.original.id}"!`);
    }
    onCloseModal = () => {
        this.setState({
            ...this.state,
            open: false
        });
    };
    render() {

        const { tableData, pageSize, pageSizeOptions, open } = this.state;
        debugger
        const tableColumns = [
            {
                Header: "#",
                accessor: "id",
                maxWidth: 60,
                className: "text-center"
            },
            {
                Header: "Name",
                accessor: "name",
                className: "text-center",
                justifyContent: "left",
                minWidth: 100,
                style: { justifyContent: "left" },
                Cell: row => (
                    <div >{row.original.name} </div>
                )
            },
            {
                Header: "Default Address",
                accessor: "default_address",
                maxWidth: 300,
                className: "text-center",
                style: { justifyContent: "left" },
            },
            {
                Header: "Email",
                accessor: "email",
                maxWidth: 200,
                className: "text-center",
                style: { justifyContent: "left" },
            },

            {
                Header: "Phone",
                accessor: "phone",
                maxWidth: 100,
                className: "text-center",
                style: { justifyContent: "left" },
            },
            {
                Header: "Active",
                accessor: "isActive",
                maxWidth: 100,
                Cell: row => (
                    <span className={this.getStatusClass(row.original.status)}>
                        {row.original.status == 'active' ? 'Yes' : 'No'}
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
                        <Button theme="white" onClick={() => this.handleItemConfirm(row)} title="Customer Information">
                            {/* <i className="material-icons">&#xE5CA;</i> */}
                            <i class="material-icons how_to_reg">&#xe174;</i>
                        </Button>
                        <Button theme="white" onClick={() => this.handleItemEdit(row)} title="Customer Order">
                            <i class="material-icons add_shopping_cart">&#xe854;</i>
                        </Button>
                    </ButtonGroup>
                )
            }
        ];

        return (
            <Container fluid className="main-content-container px-4 pb-4">
                <Row noGutters className="page-header py-4">
                    <PageTitle title="Customer Orders" subtitle="Sales" className="text-sm-left mb-3" />

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
                <Modal open={open} onClose={this.onCloseModal} center>
                    <div>Achal</div>
                </Modal>
            </Container>
        );
    }
}

export default withRouter(CustomerOrder);
