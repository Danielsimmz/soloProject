// this.state.data.map((item, i) =>
//     {this.state.isEditable === false ? (
//       <li key={i}>
//         <img
//           style={{
//             border: "1px solid black",
//             borderRadius: "10px",
//             boxShadow: "0px 25px 50px -25px rgba(0,0,0,0.75)",
//           }}
//           src={item.image_url}
//           alt={item.description}
//         ></img>
//         <br />
//         {item.description}</li>
//       ) : ( <li>
//       <form onSubmit={this.updateImage}>
//         Image URL:
//         <input
//           type="text"
//           value={this.state.image_url}
//           onChange={(e) => this.setState({ image_url: e.target.value })}
//         />
//         <br />
//         Description:
//         <textarea
//           value={this.state.description}
//           onChange={(e) => this.setState({ description: e.target.value })}
//         />
//         <br />
//         <input type="submit" value="Submit" />
//       </form>,
//         <button id={item.id} onClick={this.deleteImage}>
//           Delete
//         </button><br />
//         <button>Update</button>
//         </li>
