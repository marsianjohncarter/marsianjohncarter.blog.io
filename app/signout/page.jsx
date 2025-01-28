import { redirect } from "next/navigation";
import { signout } from '@/actions/auth/actions';
import { createClient } from '@/utils/supabase/server';
import { Button } from '@/components/ui/button';

export default async function LogoutPage() {
    const supabase = createClient();

    const { data } = await supabase.auth.getUser();

    if (!data?.user) {
        redirect('/');
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-10 rounded-xl shadow-lg">
                <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
                    Log Out
                </h1>
                <Button
                    onClick={signout}
                    className="w-full"
                >
                    Confirm Logout
                </Button>
            </div>
        </div>
    );
}



