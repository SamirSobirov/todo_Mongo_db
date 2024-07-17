"use client"
import Image from "next/image";

export default function Home() {
  function postData() {

    const user = {
      name: 'Alex',
      email: 'alex@gmail.com'
    }

    fetch('http://localhost:3000/api/users',{
      method: "POST",
      body: JSON.stringify(user)
    }).then(res => console.log(res))
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button
      onClick={postData}>
        create</button>
    </main>
  )
}