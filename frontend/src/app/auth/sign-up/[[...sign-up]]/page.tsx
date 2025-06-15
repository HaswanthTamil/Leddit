// app/auth/sign-up/[[...sign-up]]/page.tsx
import { SignUp } from "@clerk/nextjs"

export default function Page() {
  return (
    <>
      <div className="py-20 w-full flex items-center justify-center">
        <SignUp />
      </div>
    </>
  )
}
