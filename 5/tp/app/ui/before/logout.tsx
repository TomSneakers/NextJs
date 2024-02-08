
import { signOut } from '@/auth';
import { PowerIcon } from '@heroicons/react/24/outline';

export default async function LogoutButton() {
    return (   
      <form
      action={async () => {
        
        await signOut();
      }}
        >          
        <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-pink-300 hover:text-grey-300 md:flex-none md:justify-start md:p-2 md:px-3">
        <PowerIcon className="w-6" />
        <div className="hidden md:block">Deconnexion</div>
      </button>
    </form>
    )
}