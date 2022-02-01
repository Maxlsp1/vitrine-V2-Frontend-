import React from "react";

import { PageHeader, Steps, Button, } from 'antd';  
import Ressource_data from "../../../components/resources_management/management/Form/ressource_data";
import Files_upload from "../../../components/resources_management/management/Form/Files_upload";
import Page_layout from "../../../components/resources_management/management/Form/Page_layout";
import Review from "../../../components/resources_management/management/Form/Review";
import Message from "../../../components/displayData/Message";
import { v4 as uuid } from 'uuid';
import { 
  checkIfExist, 
  createRessource, 
  uploadDoc, 
  uploadImages, 
  uploadFile, 
} from "../../../store/actions/ressources";
import { connect } from "react-redux";
import { subscribeUser } from "../../../Subscription/subscription";

const { Step } = Steps;

class NewDoc extends React.Component {

  state = {
    current: 0,
    ressource_data: {},
    Files_data: {},
    Images_data: {},
    uploadingDoc: false
  };

  SwitchRender = (props) =>{
    const { 
      ressource_data,
      uploadingDoc,
      Files_data, 
      Images_data } = this.state

     switch (props.current) {
      case 0:
          return( 
            <Ressource_data
              ressource_type="docs"
              ressource={ressource_data !== {} ? ressource_data:null}

              nextStep={async (value) =>{
                value.uid = uuid()
                value.type = "doc"
                await this.props.createRessource(value)
                if(this.props.responseStatus === "success"){

                  this.setState({
                    ressource_data: value,
                    current: 1
                  })

                }
              }}
            />
          )
      case 1:
          return(
            <Files_upload
              ressource={Files_data !== {} ? Files_data:null}
              uploadingDoc={uploadingDoc}
              ressource_type="docs"
              percent_doc={this.props.percent_doc}
              nextStep={async (values) => {
                this.setState({ uploadingDoc: true })
                await this.props.uploadDoc(values, ressource_data.uid)

                if(this.props.docStatus === "success"){
                
                  this.setState({
                    Files_data: values,
                    current: 2,
                    uploadingDoc: false
                  })  
                }
              }}
              prevStep={() => this.setState({current: 0})}
            />
          )
      case 2:
          return(
            <Page_layout
              ressource={Images_data !== {} ? Images_data:null}
              nextStep={async (values) => {

                if(values.logo || values.background){
                  await this.props.uploadImages(values, ressource_data.uid)

                  if(this.props.Imagesstatus === "success"){
                    this.setState({
                      Images_data: values,
                      current: 3
                    })
                  }
                } else {

                  this.setState({
                    Images_data: values,
                    current: 3
                  })

                }
              }}
              prevStep={() => this.setState({current: 1})}
            />
          )
      case 3:
          return(
            <Review
              prevStep={() => this.setState({current: 2})}
              ressource_data={ressource_data}
              Files_data={Files_data}
              Images_data={Images_data}
              onFinish={() => {

                const nottificationData = {
                  title: "Nouvelle application",
                  text: "Hey ! il y a une nouvelle application",
                  visibility: ressource_data.visibility,
                  ressource_uid: ressource_data.uid,
                  tag: "Nouvelle application",
                  url: "/apps"
                }

                subscribeUser(nottificationData)

                this.setState({
                  ressource_data: {},
                  Files_data: {},
                  Images_data: {},
                  current: 0
                })

              }}
            />
          )
      default:
        break;
    }
  }

  render() {
    
    const { visible } = this.props
    const { current, ressource_data, Files_data } = this.state;
    console.log('ressource_data: ', ressource_data)
    return (
    <div>
      <PageHeader title="Nouveau fichier" onBack={() => window.history.back()}/>
      <Message typeMessage="container" visible={visible}/>
      <Steps className="StepsStyle" current={current}>
        <Step 
          title="Informations" 
          description="Renseigner les infos de la ressource (nom, visibilité etc ...)."
        />

        <Step 
          title="Fichiers" 
          description="Téléverser le fichier correspondant à la ressource ainsi que la procédure qui y est associé (optionel)" 
        />

        <Step 
          title="Mise en forme (optionel)." 
          description="Customisé la ressource en lui attribuant un logo spécifique ainsi qu'un arrière plans !"
        />

        <Step 
          title="Récapitulatif" 
          description="Récapitulatif des données qui ont été enrgistrées en BDD." 
        />
      </Steps>
      <this.SwitchRender current={current}/>
    
    </div>
    );
  }
}

const mapdispatchtoprops = {
    checkIfExist,
    createRessource, 
    uploadDoc, 
    uploadImages, 
    uploadFile,
}

function mapStateToProps(state) {
  return {
    visible: state.messages.visible,
    ressource_exist: state.ressources.ressource_exist,
    Imagesstatus: state.ressources.Imagesstatus,
    docStatus: state.ressources.docStatus,
    percent_doc: state.ressources.percent_doc,
    responseStatus: state.ressources.ressource_status,
  }
}

export default connect(mapStateToProps, mapdispatchtoprops)(NewDoc)