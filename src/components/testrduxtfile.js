const mapStateToProps = (state /*, ownProps*/) => {
  // console.log('mapStateToProps state: ',state);
  return {
  TestRedux:state.TestRedux,
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    TestRedux: (product) => dispatch({ type: 'Text_Redux', payload: product }),
    }

}


 this.props.TestRedux(response.store_orderFullCount);

 let selectedCart=this.state.selectedCart;

 import { connect  } from "react-redux";

 export default connect(mapStateToProps,mapDispatchToProps)(Cart);
