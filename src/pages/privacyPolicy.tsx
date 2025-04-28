// import React from 'react';

const PrivacyPolicy = () => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-GB'); // Adjusted date formatting

    return (
        <div className="max-w-4xl mx-auto px-4 py-6 font-['Poppins'] my-5">
            <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Privacy Policy</h1>
            <p className="text-base text-gray-700 mb-4">
                Effective Date: <strong>{formattedDate}</strong>
            </p>
            <p className="text-base text-gray-700 mb-4">
                At <strong>Rupayie</strong>, we are committed to protecting your privacy and ensuring a safe and secure experience while using our expense tracking services. This Privacy Policy outlines how we collect, use, and protect your personal information.
            </p>

            <div className="space-y-6">
                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
                    <p className="text-base text-gray-700 mb-4">
                        To provide you with the best experience, we collect the following information:
                    </p>
                    <ul className="list-disc pl-6 text-base text-gray-700 space-y-2">
                        <li><strong>Personal Information</strong>: Name, email, biometric data (if enabled).</li>
                        <li><strong>Financial Data</strong>: Transaction history, recurring transactions, categories, people (borrow/lend), and trash.</li>
                        <li><strong>Settings</strong>: Preferences such as theme, language, currency, and other user-specific settings.</li>
                        <li><strong>Notifications & Shared Data</strong>: Notification preferences and shared transaction links.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
                    <p className="text-base text-gray-700 mb-4">
                        We use your information for the following purposes:
                    </p>
                    <ul className="list-disc pl-6 text-base text-gray-700 space-y-2">
                        <li>To provide and improve the core functionality of the app, such as authentication, transaction management, and budget planning.</li>
                        <li>To customize your experience, including profile, settings, and financial data analysis.</li>
                        <li>To enhance security, including biometric authentication for secure login.</li>
                        <li>To monitor and analyze app performance and provide better user insights.</li>
                        <li>To communicate important updates, such as transaction alerts, app notifications, or security updates.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Sharing Your Information</h2>
                    <p className="text-base text-gray-700 mb-4">
                        We do not sell, rent, or share your personal information with third parties. However, we do allow users to share specific information with other users within the app, as follows:
                    </p>
                    <ul className="list-disc pl-6 text-base text-gray-700 space-y-2">
                        <li><strong>Shared Transactions</strong>: You can choose to share your transaction history with other users through a public link. This link reflects your current data in real-time, allowing others to see your transactions.</li>
                        <li><strong>People Management</strong>: You can share details related to borrowed or lent money between users to track repayment status, ensuring transparency in financial dealings.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Data Retention and Security</h2>
                    <p className="text-base text-gray-700 mb-4">
                        We retain your data as long as necessary to provide the app services. If you delete your account or request data deletion, we will remove your data.
                    </p>
                    <p className="text-base text-gray-700 mb-4">
                        We implement industry-standard security measures to protect your data, including encryption during transmission and storage.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. User Rights and Control</h2>
                    <p className="text-base text-gray-700 mb-4">
                        You have the following rights regarding your personal information:
                    </p>
                    <ul className="list-disc pl-6 text-base text-gray-700 space-y-2">
                        <li>Access and view your transaction history, profile information, and settings.</li>
                        <li>Update your personal details, including name and avatar.</li>
                        <li>Delete transactions or your entire account.</li>
                        <li>Export your transaction history as an Excel file for record-keeping.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Transaction Sharing and Links</h2>
                    <p className="text-base text-gray-700 mb-4">
                        If you choose to share your transaction history, we will provide a public link that reflects your current data in real-time. Please exercise caution when sharing sensitive data.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Children’s Privacy</h2>
                    <p className="text-base text-gray-700 mb-4">
                        Our app is not intended for children under the age of 13. We do not knowingly collect personal information from children. If we become aware of such data, we will take steps to delete it.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Changes to This Privacy Policy</h2>
                    <p className="text-base text-gray-700 mb-4">
                        We may update this Privacy Policy from time to time. Any changes will be reflected in the app, and the effective date will be updated accordingly. Please review periodically.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Contact Us</h2>
                    <p className="text-base text-gray-700 mb-4">
                        If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
                    </p>
                    <p className="text-base text-gray-700">
                        <strong>Rupayie</strong><br />
                        Email: <a href="mailto:ultrakeyit@gmail.com" className="text-blue-600">ultrakeyit@gmail.com</a><br />
                        Address: Hyderabad, India.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
