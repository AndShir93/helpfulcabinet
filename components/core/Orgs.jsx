import React from 'react';

export default function Orgs({ response }) {
  return (
    <div>
      {response.relations.map((org, key) => (
        <h1 key={key}>org.name</h1>
      ))}
    </div>
  );
}
