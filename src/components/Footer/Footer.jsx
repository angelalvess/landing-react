import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare,
  FaTwitterSquare,
  FaLinkedin,
} from 'react-icons/fa';

function Footer() {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          quaerat cum quos! Quas aut nihil laboriosam ratione repellendus!
          Aliquam, magnam!
        </p>

        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaTwitterSquare size={30} />
          <FaInstagramSquare size={30} />
          <FaLinkedin size={30} />
          <FaGithubSquare size={30} />
        </div>
      </div>

      <div className="lg:col-span-2 flex justify-between mt-6">
        {/* Menu 1  */}

        <div>
          <ul>
            <li className="text-1xl font-bold text-gray-400">Solutions</li>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>

        {/* Menu 2 */}

        <div>
          <ul>
            <li className="text-1xl font-bold text-gray-400">Support</li>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">API Status</li>
          </ul>
        </div>

        {/* Menu 3 */}

        <div>
          <ul>
            <li className="text-1xl font-bold text-gray-400">Company</li>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Careers</li>
          </ul>
        </div>

        {/* Menu 3 */}

        <div>
          <ul>
            <li className="text-1xl font-bold text-gray-400">Legal</li>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
