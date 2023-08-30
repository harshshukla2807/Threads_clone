import { UserButton } from "@clerk/nextjs";
 
export default function Home() {
  return (
    <div>
      <div>
        <h1>THreads</h1>
      </div>
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}