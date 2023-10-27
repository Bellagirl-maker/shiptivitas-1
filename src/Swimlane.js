import React from 'react';
import Card from './Card';

export default function Swimlane({ name, clients, dragulaRef, onCardDrag }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'backlog':
        return 'Card-grey';  
      case 'in-progress':
        return 'Card-blue'; // Example color for in-progress
      case 'complete':
        return 'Card-green'; // Example color for complete
      default:
        return 'white';
    }
  };

  return (
    <div className="Swimlane" >
      <h2>{name}</h2>
      <div className="cards" ref={dragulaRef}>
        {clients.map(client => (
          <Card
            key={client.id}
            id={client.id}
            name={client.name}
            description={client.description}
            status={client.status}
            onCardDrag={onCardDrag}
            backgroundColor={getStatusColor(client.status)} // Apply background color
          />
        ))}
      </div>
    </div>
  );
}
