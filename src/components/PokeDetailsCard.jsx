import React from 'react'

export default function PokeDetailsCard() {
  const url = window.location.href;
  const pathname = new URL(url).pathname;
  console.log(pathname.split("/").slice(2,3)[0])

  
  return (
    <div>
      <p>{}</p>
    </div>
  )
}
