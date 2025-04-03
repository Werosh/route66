import {
  Menu,
  X,
  ChevronRight,
  Droplets,
  Shield,
  Clock,
  Award,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";
import BackImg from "../images/back.jpg";
import LogoImg from "../images/logo.png";
import sectionBack from "../images/sectionback.jpg";
import WhyUsImg from "../images/whyus.jpg";
import ContactBAck from "../images/contactback.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src={BackImg}
            alt="Car Wash Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-9xl mx-auto"
          >
            <motion.div
              initial={{ y: -10 }}
              animate={{ y: 10 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2,
              }}
              className="mb-6"
            >
              <img
                src={LogoImg}
                alt="Route 66 Car Wash Logo"
                className="h-62 mx-auto"
              />
            </motion.div>
            <h1 className="text-5xl md:text-6xl xl:text-9xl font-bold text-white mb-6">
              Route 66 Car Wash
            </h1>
            <p className="text-2xl text-gray-200 mb-8">
              Experience the cleanest, most thorough hand car wash service with
              attention to every detail
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white py-3 px-8 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Book Your Wash
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            >
              Our Premium Services
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: 100 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="h-1 bg-blue-600 mx-auto mb-6"
            ></motion.div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We take pride in providing the most thorough and gentle hand wash
              services to keep your vehicle looking its best
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Droplets size={40} />,
                title: "Exterior Hand Wash",
                desc: "Gentle hand washing that protects your vehicle's paint",
              },
              {
                icon: <Shield size={40} />,
                title: "Premium Wax",
                desc: "Long-lasting protection and shine for your vehicle",
              },
              {
                icon: <Award size={40} />,
                title: "Interior Detailing",
                desc: "Thorough cleaning of all interior surfaces",
              },
              {
                icon: <Clock size={40} />,
                title: "Quick Service",
                desc: "Fast and efficient service without sacrificing quality",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Background */}
      <section id="about" className="relative py-24">
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src={sectionBack}
            alt="Car Wash Process"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900 opacity-85"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white mb-6">
                The Route 66 Difference
              </h2>
              <p className="text-gray-200 mb-6 text-xl">
                Since 2010, Route 66 Hand Car Wash has been setting the standard
                for premium car care. Our dedicated team uses only the finest
                eco-friendly products and techniques to ensure your vehicle
                receives the best possible treatment.
              </p>
              <p className="text-gray-200 mb-8 text-xl">
                We believe in attention to detail and personalized service –
                that's why our customers keep coming back and trust us with
                their vehicles.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-xl"
            >
              <img
                src={WhyUsImg}
                alt="Our Facility"
                className="w-full h-64 object-cover rounded-md mb-6"
              />
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Why Choose Our Hand Wash?
              </h3>
              <ul className="space-y-3">
                {[
                  "Experienced staff with attention to detail",
                  "Eco-friendly products that are safe for your car",
                  "No harsh brushes or machinery that can damage paint",
                  "Thorough cleaning of hard-to-reach areas",
                  "Flexible service packages for every need",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            >
              Washing Packages
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: 100 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="h-1 bg-blue-600 mx-auto mb-6"
            ></motion.div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the perfect package for your vehicle
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic Wash",
                price: "$19.99",
                features: [
                  "Exterior Hand Wash",
                  "Wheel Cleaning",
                  "Window Cleaning",
                  "Tire Dressing",
                  "Basic Vacuum",
                ],
                popular: false,
              },
              {
                name: "Deluxe Wash",
                price: "$34.99",
                features: [
                  "Everything in Basic Wash",
                  "Interior Vacuum & Wipe Down",
                  "Dashboard & Console Cleaning",
                  "Door Jamb Cleaning",
                  "Express Wax Treatment",
                ],
                popular: true,
              },
              {
                name: "Premium Detail",
                price: "$89.99",
                features: [
                  "Everything in Deluxe Wash",
                  "Clay Bar Treatment",
                  "Premium Carnauba Wax",
                  "Leather Conditioning",
                  "Full Interior Detailing",
                  "Engine Bay Cleaning",
                ],
                popular: false,
              },
            ].map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${
                  pkg.popular ? "border-2 border-blue-600 relative" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="bg-blue-600 text-white text-center py-1 font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {pkg.name}
                  </h3>
                  <div className="text-4xl font-bold text-blue-600 mb-6">
                    {pkg.price}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center justify-center text-gray-700"
                      >
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 rounded-md font-medium transition-colors ${
                      pkg.popular
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    }`}
                  >
                    Select Package
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Ready for a Spotless Shine?
          </motion.h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience the Route 66 difference.
            Your car deserves the best!
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-white text-blue-600 py-3 px-8 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Book Online
            </button>
            <button className="border-2 border-white text-white py-3 px-8 rounded-md font-medium hover:bg-blue-700 transition-colors">
              Call Us Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-white relative"
        style={{
          backgroundImage: `url(${ContactBAck})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Semi-transparent overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gray-600/60"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl xl:text-6xl font-bold text-red-100 mb-4"
            >
              Contact Us
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: 100 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="h-1 bg-blue-600 mx-auto mb-6"
            ></motion.div>
            <p className="text-gray-100 max-w-2xl font-bold mx-auto text-2xl">
              Have questions or need more information? Get in touch with our
              team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/80 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                Get In Touch
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <MapPin className="text-blue-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800">Location</h4>
                    <p className="text-gray-600">
                      1 McFarlane St, Merrylands NSW 2160, Australia
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="text-blue-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800">Hours</h4>
                    <p className="text-gray-600">
                      Thu: 8AM - 7PM Fri-Wed: 8AM - 5:30PM
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="text-blue-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800">Phone</h4>
                    <p className="text-gray-600">+61 433 187 980</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="text-blue-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800">Email</h4>
                    <p className="text-gray-600">info@route66carwash.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/90 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                Send a Message
              </h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Full-width map with small margin */}
          <motion.div
            className="w-full px-4 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

          
            <div className="rounded-xl overflow-hidden shadow-lg h-96 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d579.4369031535884!2d150.98969278643423!3d-33.83392965607234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bd2d5cc971cb%3A0x53d0aeaf6a0d6d7c!2sRoute%2066%20hand%20car%20wash!5e0!3m2!1sen!2slk!4v1743668807461!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Car Wash Cafe Location"
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
