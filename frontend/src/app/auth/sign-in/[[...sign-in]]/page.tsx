// app/auth/sign-in/[[...sign-in]]/page.tsx
import { SignIn } from "@clerk/nextjs"

export default function Page() {
  return (
    <>
      <div className="py-20 w-full flex items-center justify-center">
        <SignIn />
      </div>
    </>
  )
}
