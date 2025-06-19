import { motion } from "framer-motion";
import { Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-purple-100 py-20" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Contact Us
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Ready to transform your space? Get in touch with us today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-lg bg-white p-8 shadow-md"
          >
            <div className="space-y-8">
              <a
                href="tel:+91 818 488 8036"
                className="flex flex-col items-start gap-4 md:flex-row"
              >
                <Phone className="mt-1 size-6 text-purple-600" />
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="text-gray-600">+91 818 488 8036</p>
                </div>
              </a>
              <a
                href="mailto:gscraftspaces@gmail.com"
                className="flex flex-col items-start gap-4 md:flex-row"
              >
                <Mail className="mt-1 size-6 text-purple-600" />
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-600">gscraftspaces@gmail.com</p>
                </div>
              </a>
              <a className="flex flex-col items-start gap-4 md:flex-row">
                <MapPin className="mt-1 size-6 text-purple-600" />
                <div>
                  <h3 className="text-lg font-semibold">Address</h3>
                  <p className="text-gray-600">
                    1st Floor, Chippa Babaiah Complex, Sai Baba Temple Rd,
                    Kamala Nagar, Dilsukhnagar
                    <br /> Hyderabad, Telangana 500060
                  </p>
                </div>
              </a>

              <div className="flex flex-col items-start gap-4 md:flex-row">
                <a
                  href="https://www.instagram.com/gs_craftspaces/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-purple-600 hover:underline"
                >
                  <Instagram className="size-6" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.youtube.com/@gscraftspaces"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-purple-600 hover:underline"
                >
                  <Youtube className="size-6" />
                  <span>Youtube</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15231.659570812317!2d78.50913383053602!3d17.367827833223608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98f13f8517f3%3A0x970d72ba0f45fa!2sChippa%20Babaiah%20Complex%2C%20Sai%20Baba%20Temple%20Rd%2C%20Kamala%20Nagar%2C%20Dilsukhnagar%2C%20Hyderabad%2C%20Telangana%20500060!5e0!3m2!1sen!2sin!4v1750314669950!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "6px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
