import { SignInButton, UserButton } from "@clerk/nextjs";
export default function HomePage() {
  return (
    <div className="flex h-screen items-center justify-center w-screen">
      <SignInButton />
      <UserButton />
    </div>
  );
}
