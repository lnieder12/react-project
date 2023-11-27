
import React, { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

export default function DropDownEmail() {
  const [selectedItem, setSelectedItem] = useState('Home');
  // useState permet de définir un état local pour stocker l'élément sélectionné
  // selectedItem est initialisé avec la chaîne de caractères "Sélectionner un item"

  const handleSelect = (eventKey, event) => {
    setSelectedItem(eventKey);
    // cette fonction met à jour l'état local avec l'élément sélectionné dans le Dropdown
  }

  return (
    <DropdownButton style={{width: '30px'}} title={selectedItem} onSelect={handleSelect} variant="secondary">
      <Dropdown.Item eventKey="Home">Home</Dropdown.Item>
      <Dropdown.Item eventKey="Work">Work</Dropdown.Item>
    </DropdownButton>
  );
}