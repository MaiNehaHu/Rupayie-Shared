// import React from 'react'
import One from '../assets/screenshots/one.jpg'
import Two from '../assets/screenshots/two.jpg'
import Three from '../assets/screenshots/three.jpg'
import Four from '../assets/screenshots/four.jpg'

const DeleteAccount = () => {
    return (
        <div className='min-h-screen w-full'>
            <header className="w-full bg-[#4FB92D] sm:px-10 px-10 sm:py-4 py-2 sticky top-0 flex flex-row justify-between">
                <h1 className="text-white font-semibold sm:text-3xl text-xl">₹ Rupayie</h1>
            </header>

            <main className="px-10 py-6">
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold text-gray-800">Delete Account Instructions</h2>
                    <p className="text-base text-gray-700">
                        If you wish to delete your account, follow these steps:
                    </p>
                    <ol className="list-decimal pl-6 text-base text-gray-700 space-y-2">
                        <li>Click on the hamburger menu (the three horizontal lines) in the top left corner of the app.</li>
                        <li>Go to <strong>Settings</strong>.</li>
                        <li>In the Settings menu, click on <strong>Delete Account</strong>.</li>
                        <li>Confirm the deletion by following the on-screen instructions.</li>
                    </ol>
                    <p className="text-base text-gray-700">
                        Please note that once your account is deleted, all your data will be permanently removed and cannot be recovered.
                    </p>
                </section>

                <section className="mt-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Screenshots for Guidance</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <img src={One} alt="Step 1" className="w-full h-auto rounded-lg shadow-md" />
                        <img src={Two} alt="Step 2" className="w-full h-auto rounded-lg shadow-md" />
                        <img src={Three} alt="Step 3" className="w-full h-auto rounded-lg shadow-md" />
                        <img src={Four} alt="Step 4" className="w-full h-auto rounded-lg shadow-md" />
                    </div>
                </section>
            </main>
        </div>
    )
}

export default DeleteAccount
