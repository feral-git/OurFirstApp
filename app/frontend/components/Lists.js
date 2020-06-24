import React from "react"
import PropTypes from "prop-types"

export default class Lists extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      lists: []
      // lists:[{"id":1,"title":"title_8230b261","desc":"desc_37bfa7dd","created_at":"2020-06-13T09:05:55.000Z","updated_at":"2020-06-13T09:05:55.000Z"},{"id":2,"title":"title_44bdd75f","desc":"desc_abc3a52a","created_at":"2020-06-13T09:05:55.000Z","updated_at":"2020-06-13T09:05:55.000Z"},{"id":3,"title":"title_fd798659","desc":"desc_eee32c7a","created_at":"2020-06-13T09:05:55.000Z","updated_at":"2020-06-13T09:05:55.000Z"},{"id":4,"title":"title_ae7971d4","desc":"desc_a61a30c4","created_at":"2020-06-13T09:05:55.000Z","updated_at":"2020-06-13T09:05:55.000Z"},{"id":5,"title":"title_f07cb4f1","desc":"desc_f6b7cdd3","created_at":"2020-06-13T09:05:55.000Z","updated_at":"2020-06-13T09:05:55.000Z"}]
    };
  }
  componentDidMount(){
    this.setState({
      lists: this.props.lists
    })
  }
  render () {
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>created_at</th>
              <th>updated_at</th>
            </tr>
          </thead>
          <tbody>
            {this.state.lists.map((list) => {
              return (
                <tr key={list.id}>
                  <td>{list.id}</td>
                  <td>{list.title}</td>
                  <td>{list.desc}</td>
                  <td>{list.created_at}</td>
                  <td>{list.updated_at}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

// export default Lists
