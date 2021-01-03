import React from "react";
import ReactTable from "react-table";
import FuzzySearch from "fuzzy-search";
import dateFormat from "dateformat";
import {
  Container,
  Row,
  Col,
  ButtonGroup,
  Button,
  Card,
  CardHeader,
  CardBody,
  FormSelect,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput
} from "shards-react";
import PageTitle from "../components/common/PageTitle";
import getTransactionHistoryData from "../data/transaction-history-data";
import { Link } from "react-router-dom";

class Taxes extends React.Component {
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

  componentWillMount() {
    const tableData = getTransactionHistoryData();

    this.setState({
      ...this.state,
      tableData
    });

    // Initialize the fuzzy searcher.
    this.searcher = new FuzzySearch(tableData, ["customer", "status"], {
      caseSensitive: false
    });
  }

  /**
   * Returns the appropriate status class for the `Status` column.
   */
  getStatusClass(status) {
    const statusMap = {
      Cancelled: "danger",
      Complete: "success",
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
    alert(`Editing transaction "${row.original.id}"!`);
    this.props.history.push({ pathname: "/edituser/" + row.original.id });
  }

  /**
   * Mock method for deleting transactions.
   */
  handleItemDelete(row) {
    alert(`Deleting transaction "${row.original.id}"!`);
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
    const { tableData, pageSize, pageSizeOptions } = this.state;
    const tableColumns = [
      {
        Header: "#",
        accessor: "tax_id",
        maxWidth: 60,
        className: "text-center"
      },
      {
        Header: "Name",
        accessor: "name",
        className: "text-center",
        justifyContent: "left",
        minWidth: 150,
        Cell: row => (
          <div style={{ textAlign: "left" }}>{row.original.customer}</div>
        )
        // dateFormat(new Date(row.original.date), "dddd, mmmm dS, yyyy")
      },
      {
        Header: "Display Orders",
        accessor: "display_order",
        className: "text-center"
      },
      {
        Header: "Percentage Tax",
        accessor: "percentage",
        maxWidth: 100,
        className: "text-center"
      },
      {
        Header: "Country",
        accessor: "country_id",
        maxWidth: 100,
        Cell: row => (
          <span className={this.getStatusClass(row.original.status)}>
            {row.original.status}
          </span>
        ),
        className: "text-center"
      },
      // {
      //   Header: "Updated Date",
      //   accessor: "total",
      //   maxWidth: 100,
      //   Cell: row => dateFormat(new Date(row.original.date), "mm/dd/yyyy"),
      //   className: "text-center"
      // },
      {
        Header: "Actions",
        accessor: "actions",
        maxWidth: 200,
        minWidth: 180,
        sortable: false,
        Cell: row => (
          <ButtonGroup size="sm" className="d-table mx-auto">
            <Button theme="white" onClick={() => this.handleItemConfirm(row)}>
              <i className="material-icons">&#xE5CA;</i>
            </Button>
            <Button
              theme="white"
              onClick={() => this.handleItemViewDetails(row)}
            >
              <i className="material-icons">&#xE870;</i>
            </Button>
            <Button theme="white" onClick={() => this.handleItemEdit(row)}>
              <i className="material-icons">&#xE254;</i>
            </Button>
            <Button theme="white" onClick={() => this.handleItemDelete(row)}>
              <i className="material-icons">&#xE872;</i>
            </Button>
          </ButtonGroup>
        )
      }
    ];

    return (
      <Container fluid className="main-content-container px-4 pb-4">
        <Row noGutters className="page-header py-4">
          <PageTitle
            title="Taxes List"
            subtitle="Dashboards"
            className="text-sm-left mb-3"
          />
          <Col sm="2" className="d-flex ml-auto my-auto">
            <Link
              to="/createtaxes"
              className="bg-primary rounded p-2"
              style={{
                boxShadow: "inset 0 0 5px rgba(0,0,0,.2)",
                color: "#fff"
              }}
            >
              Add Tax
            </Link>
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

export default Taxes;
