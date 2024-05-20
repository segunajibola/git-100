import Link from "next/link";

export default function Component() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 py-12 md:px-6 md:py-16 lg:py-20 text-gray-400 dark:text-gray-900">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-300">
          Privacy Policy
        </h1>
        <p className="text-lg">
          At our Git, GitHub, and engineering development collaboration site, we
          are committed to protecting the privacy and security of our users.
          This privacy policy outlines how we collect, use, and safeguard your
          personal information.
        </p>
      </div>
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-300">Data Collection</h2>
          <p className="">
            We collect certain personal information from you when you use our
            site, such as your name, email address, and any content you choose
            to share. We may also collect non-personal information, such as your
            IP address and browser type, to help us improve our services.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-300">Data Usage</h2>
          <p className="">
            We use the information we collect to provide and improve our
            services, communicate with you, and comply with legal requirements.
            We will never sell or rent your personal information to third
            parties.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-300">Data Sharing</h2>
          <p className="">
            We may share your personal information with trusted service
            providers who assist us in operating our site and delivering our
            services. We require these providers to maintain the confidentiality
            of your information.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-300">Data Storage and Security</h2>
          <p className="">
            We store your personal information securely and take reasonable
            measures to protect it from unauthorized access, use, or disclosure.
            However, no method of transmission over the internet or method of
            electronic storage is 100% secure, and we cannot guarantee absolute
            security.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-300">Your Rights</h2>
          <p className="">
            You have the right to access, correct, or delete your personal
            information, as well as the right to opt-out of certain data
            processing activities. If you have any questions or concerns about
            our privacy practices, please contact us at{" "}
            <Link href="#" className="underline" prefetch={false}>
              privacy@example.com
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
