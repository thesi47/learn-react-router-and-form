import React from 'react'
import { useLoaderData } from 'react-router';

function Profiles() {
    const profiles = useLoaderData();
    console.log(profiles);
  return (
    <div>This is the Profiles section</div>
  )
}

export default Profiles