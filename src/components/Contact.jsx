import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-10 px-6 lg:px-20">
      <h2 className="my-10 text-center text-4xl text-white">
        Get in Touch
      </h2>

      <div className="text-center tracking-tighter text-white">
        <p className="my-4">
          {CONTACT.address}
        </p>

        <p className="my-4">
          {CONTACT.phoneNo}
        </p>

        <div>
          <a
            href={`mailto:${CONTACT.email}`}
            className="border-b inline-block mt-4"
          >
            {CONTACT.email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
