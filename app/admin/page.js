"use client";

import { useState } from "react";

export default function Admin(){

  const [title,setTitle] = useState("");

  async function generate(){

    await fetch("/api/generate-blog",{
      method:"POST",
      body:JSON.stringify({title})
    });

    alert("Draft sent to email!");
  }

  return(

    <div style={{padding:"40px"}}>

      <h1>AI Blog Generator</h1>

      <input
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        placeholder="Enter blog title"
      />

      <button onClick={generate}>
        Generate Blog
      </button>

    </div>

  );
}