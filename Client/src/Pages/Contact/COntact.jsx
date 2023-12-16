
import { FaFacebook, FaInbox, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
const Contact = () => {

    const sectionStyle = {
        backgroundImage: "url('https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
        minHeight: "100vh",
        backgroundSize: "cover",
    };

    return (
        <>
            <section style={sectionStyle}>
                <div className="flex flex-col min-h-screen bg-black/60">
                    <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
                        <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
                            <div className="text-white lg:w-1/2 lg:mx-6">
                                <h1 className="text-3xl font-semibold capitalize lg:text-3xl">Contact Our Team</h1>

                                <p className="max-w-xl mt-6">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quo
                                    aliquid molestiae hic incidunt beatae placeat accusantium! Alias ex quisquam ab tempora. Ratione
                                    autem doloremque ducimus numquam doloribus, error sed.
                                </p>

                                <button className="px-8 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-purple-500 rounded-md hover:bg-purple-800 focus:outline-none focus:ring focus:ring-purple-400 focus:ring-opacity-50">
                                    get in touch
                                </button>

                                <div className="mt-6 md:mt-8">
                                    <h3 className="text-gray-300 text-xl">Follow us</h3>

                                    <div className="flex mt-4 -mx-1.5 ">
                                        <a className="mx-1.5 text-white transition-colors duration-300 transform hover:text-purple-500" href="#">
                                            <FaTwitter className="w-7 h-7" />
                                        </a>

                                        <a className="mx-1.5 text-white transition-colors duration-300 transform hover:text-purple-500" href="#">
                                            <FaLinkedin className="w-7 h-7" />
                                        </a>

                                        <a className="mx-1.5 text-white transition-colors duration-300 transform hover:text-purple-500" href="#">
                                            <FaFacebook className="w-7 h-7" />
                                        </a>

                                        <a className="mx-1.5 text-white transition-colors duration-300 transform hover:text-purple-500" href="#">
                                            <FaInstagram className="w-7 h-7" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 lg:w-1/2 lg:mx-6">
                                <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
                                    <h1 className="text-xl font-medium text-gray-700 dark:text-gray-200">Contact form</h1>

                                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                                        Ask us everything and we would love
                                        to hear from you
                                    </p>

                                    <form className="mt-6">
                                        <div className="flex-1">
                                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                                            <input type="text" placeholder="John Doe" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:purple-blue-400 focus:ring-purple-300 focus:ring-opacity-40 dark:focus:border-purple-300 focus:outline-none focus:ring" />
                                        </div>

                                        <div className="flex-1 mt-6">
                                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                                            <input type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-purple-400 focus:ring-purple-300 focus:ring-opacity-40 dark:focus:border-purple-300 focus:outline-none focus:ring" />
                                        </div>

                                        <div className="w-full mt-6">
                                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                                            <textarea className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-purple-400 focus:ring-purple-300 focus:ring-opacity-40 dark:focus:border-purple-300 focus:outline-none focus:ring" placeholder="Message"></textarea>
                                        </div>

                                        <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-purple-500 rounded-md hover:bg-purple-800 focus:outline-none focus:ring focus:ring-purple-400 focus:ring-opacity-50">
                                            Contact Our Team
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-12 mx-auto">
        <div className="text-center">
            <p className="font-medium text-purple-500 dark:text-purple-400">Contact us</p>

            <h1 className="mt-2 text-2xl font-semibold text-purple-800 md:text-3xl dark:text-white">Get in touch</h1>

            <p className="mt-3 text-gray-500 dark:text-gray-400">Our friendly team is always here to chat.</p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center justify-center text-center">
                <span className="p-3 text-purple-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                   <FaInbox/>
                </span>

                <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Email</h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400">Our friendly team is here to help.</p>
                <p className="mt-2 text-purple-500 dark:text-blue-400">hello@merakiui.com</p>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
                <span className="p-3 text-purple-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                    <CiLocationOn/>
                </span>
                
                <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Office</h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400">Come say hello at our office HQ.</p>
                <p className="mt-2 text-purple-500 dark:text-blue-400">100 Smith Street Collingwood VIC 3066 AU</p>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
                <span className="p-3 text-purple-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                   <FaPhone/>
                </span>
                
                <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Phone</h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400">Mon-Fri from 8am to 5pm.</p>
                <p className="mt-2 text-purple-500 dark:text-blue-400">+1 (555) 000-0000</p>
            </div>
        </div>
    </div>
</section>

        </>
    );
};

export default Contact;
