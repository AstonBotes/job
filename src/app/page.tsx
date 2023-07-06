import Link from 'next/link'


// `app/page.tsx` is the UI for the `/` URL
export default function Home() {
  return (
    <div style={{background: 'lightblue'}}>
      <button type='submit' style={{background: 'white'}}>Click Me</button><br></br>
      <Link href="/dashboard">Dashboard</Link>
    </div>
  )
}
