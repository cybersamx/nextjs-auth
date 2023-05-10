import SignOut from '@/components/sign-out';

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="w-screen h-screen flex flex-col space-y-5 justify-center items-center">
        <div>You are in a protected page.</div>
        <SignOut />
      </div>
    </div>
  );
}
