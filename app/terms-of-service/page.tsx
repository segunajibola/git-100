export default function Component() {
  return (
    <div className="container mx-auto max-w-3xl py-12 px-4 md:px-0 text-gray-400 dark:text-gray-900">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-300">Terms of Service</h1>
          <p className="">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-300">Terms of Use</h2>
          <p>
            By accessing or using our website, you agree to be bound by these
            terms of service and our privacy policy. If you do not agree with
            any part of these terms, please do not use our website.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-300">User Responsibilities</h2>
          <ul className="space-y-2 list-disc pl-6">
            <li>
              You must be at least 13 years old to use our website. If you are
              under 13, you may only use our website under the supervision of a
              parent or legal guardian.
            </li>
            <li>
              You are responsible for maintaining the confidentiality of your
              account and password, and for restricting access to your computer.
            </li>
            <li>
              You agree to use our website only for lawful purposes and in a way
              that does not infringe on the rights of others or restrict or
              inhibit anyone else's use and enjoyment of the website.
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-300">Intellectual Property Rights</h2>
          <p>
            Our website and its entire contents, features, and functionality
            (including but not limited to all information, software, text,
            displays, images, video, and audio, and the design, selection, and
            arrangement thereof) are owned by us, our licensors, or other
            providers of such material and are protected by United States and
            international copyright, trademark, patent, trade secret, and other
            intellectual property or proprietary rights laws.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-300">Disclaimer of Warranties</h2>
          <p>
            Our website is provided "as is" and "as available" without
            warranties of any kind, either express or implied. We do not warrant
            that our website will be uninterrupted or error-free, that defects
            will be corrected, or that our website or the server that makes it
            available are free of viruses or other harmful components.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-300">Limitation of Liability</h2>
          <p>
            In no event shall we be liable for any indirect, special,
            incidental, or consequential damages arising out of or in connection
            with your use of our website, whether based on warranty, contract,
            tort (including negligence), or any other legal theory.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-300">Dispute Resolution</h2>
          <p>
            Any dispute arising out of or in connection with these terms of
            service shall be resolved through binding arbitration in accordance
            with the rules of the American Arbitration Association. The
            arbitration shall be conducted in the city where our company is
            headquartered.
          </p>
        </div>
      </div>
    </div>
  );
}
