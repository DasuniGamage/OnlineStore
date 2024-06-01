// import React, { Component } from 'react';
// import { fetchPost } from '../redux/actions/postAction';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

// class ButtonComponent extends Component {
//   render() {
//     return (
//       <div>
//         <button onClick={()=>this.props.fetchPost()}>
//             Click me
//         </button>
//       </div>
//     )
//   }
// }
// function matchDispatchToProps(dispatch){
//     return bindActionCreators({fetchPosts:fetchPost},dispatch)
// }

// export default connect(null,matchDispatchToProps)(ButtonComponent)