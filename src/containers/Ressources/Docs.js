import React from "react";
import {connect} from "react-redux";
import { getRessourcesType } from "../../store/actions/ressources"
import MaggyThink from "../../components/displayData/MaggyThink";
import Message from "../../components/displayData/Message";
import db from "../../utils/db";
import { Ressource_List } from "../../components/ressources/Ressource_List";

const Ressource_List_Loading = MaggyThink(Ressource_List)

class Docs extends React.Component {

  state = { 
      load: true,
  }

   componentDidMount(){

    db.table("user").get({id: 1}).then( (user) =>{
      if(user){

        const data = {
          offset: 0,
          limit: 10,
          dataType: "docs",
          visibility: user.data.accountType
        }

        this.props.getRessourcesType(data)
      }
    }).catch((err) => console.log('err :', err))
  }

  componentDidUpdate(prevProps, prevState){
    if(Object.keys(this.props.docs).length !== 0 && this.state.load === true){
      this.setState({load: false})
    } else if(this.props.noData === true && this.state.load === true){
      this.setState({load: false})
    }
  }
  
  render() {
    const { load } = this.state
    const { docs, visible } = this.props

    return (
      <div className="UserDashboardStyle">
        <Message visible={visible} typeMessage="container"/>
        <Ressource_List_Loading
          isLoading={load}
          Ressources={docs}
          history={this.props.history}
        />      
      </div>
    );
  }
}

const mapdispatchtoprops = {
    getRessourcesType
}

function mapStateToProps(state) {
  return {
    visible: state.messages.visible,
    docs: state.ressources.listType,
    count: state.ressources.count,
    noData: state.ressources.noData,
    currentPage: state.ressources.currentPage
  }
}

export default connect(mapStateToProps, mapdispatchtoprops)(Docs)