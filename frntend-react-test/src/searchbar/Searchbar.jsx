import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MDBCol } from "mdbreact";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ModalService from "../services/ModalService";
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Cards from '../Components/cards/Cards';
import TableView from '../Components/tableview/TableView';
import {
   faUserPlus
  } from "@fortawesome/free-solid-svg-icons";

const SearchPage = () => {
  function openModal(event){
    ModalService.open("Create Profile", { })
  }
  const [view, setView] = React.useState('list');

  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  const [showTable, setShowTable] = useState(true);
  const [showCards, setShowCards] = useState(false);

  const handleClickTable = () => {
    setShowTable(true);
    setShowCards(false);
  };

  const handleClickCard = () => {
    setShowTable(false);
    setShowCards(true);
  };



  return (
    <div>
<Row>
    <Col className="md-12">
    <MDBCol className="">
      <div className="mb-4 search-bar">
        <input className="form-control input-mdb" type="text" placeholder="Search" aria-label="Search" />
      </div>
    </MDBCol>
    </Col>
    <Col>
    <Button onClick ={openModal} className="btn-1"><FontAwesomeIcon icon={faUserPlus} style={{color: "#fafafa",}} /> Create Profile</Button>
    </Col>
    <Col>
    <ToggleButtonGroup
      orientation="vertical"
      value={view}
      exclusive
      onChange={handleChange}
    >
      <Row>
        <Col> 
        <ToggleButton className="toggle-btn" onClick={ handleClickTable} value="list" aria-label="list" sx={{ marginTop:"30px"}}>
        <ViewListIcon />
      </ToggleButton>
      </Col>
        <Col> <ToggleButton className="toggle-btn" onClick={ handleClickCard} value="module" aria-label="module" sx={{ marginTop:"30px"}}>
        <ViewModuleIcon />
      </ToggleButton>
      </Col>
    
      </Row>
      
     
      </ToggleButtonGroup>
      </Col>
     
    </Row>
    <Col>{showTable && <TableView />}</Col>
      
      <Col> {showCards && <Cards />} </Col>
    </div>

  );
}

export default SearchPage;