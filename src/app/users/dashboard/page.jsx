import { authUserSession } from "@/libs/auth"
import Image from "next/image"
import Link from "next/link"

const Page = async() => {
  const user = await authUserSession()
  return (
    <div className="flex flex-col items-center gap-4 mt-8">
      <h5 className="text-2xl font-bold">Welcome, {user?.name}</h5>
      <Image className="rounded-full" src={user?.image} alt={user?.name} width={200} height={200} />
      <div className="flex gap-4 flex-wrap text-color-dark font-semibold">
        <Link className="bg-color-accent rounded px-4 py-2 hover:bg-color-secondary" href="/users/dashboard/collections">
          My collections
        </Link>
        <Link className="bg-color-accent rounded px-4 py-2 hover:bg-color-secondary" href="/users/dashboard/comments">
          My comments
        </Link>
      </div>
    </div>
  )
}

export default Page