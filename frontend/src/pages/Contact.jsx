import Container from "../components/ui/Container";
import Seperator from "../components/ui/Seperator";

const Contact = () => {
  return (
    <Container>
      <div className="p-2 md:p-5 lg:p-8">
        <h1 className="mb-7 font-bold uppercase text-xl">Contact Info:</h1>
        <div className="border-b py-3">
          <div className="flex items-center gap-3 md:gap-5 mb-1">
            <span className="fa-solid fa-envelope text-xl text-primary" />
            <span className="text-base font-bold">Email:</span>
          </div>
          <div className="space-y-1 md:pl-10">
            <p className="text-xs">
              <span>For Student Verification : </span>
              <a
                href="mailto:ar@gits.ac.in"
                className="underline text-secondary pl-1"
              >
                ar@gits.ac.in
              </a>
            </p>
            <p className="text-xs">
              <span>For Employee Verification : </span>
              <a
                href="mailto:director@gits.ac.in"
                className="underline text-secondary pl-1"
              >
                director@gits.ac.in
              </a>
            </p>
            <p className="text-xs">
              <span>For Placement Related : </span>
              <a
                href="mailto:tpo@gits.ac.in"
                className="underline text-secondary pl-1"
              >
                tpo@gits.ac.in
              </a>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:border-b">
          <div className="border-b py-3 lg:border-none">
            <div className="flex items-center gap-3 md:gap-5 mb-1">
              <span className="fa-solid fa-phone text-xl text-primary" />
              <span className="text-base font-bold">Phone:</span>
            </div>
            <div className="text-xs md:pl-10">
              <span>+91-294-2657800/01/02/03/04</span>
            </div>
          </div>
          <div className="border-b py-3 lg:border-none">
            <div className="flex items-center gap-3 md:gap-5 mb-1">
              <span className="fa-solid fa-mobile-screen text-xl text-primary" />
              <span className="text-base font-bold">Mobile:</span>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-3 divide-black md:pl-9 text-xs">
              <span>+91-9116039801/02/03</span>
              <span className="hidden lg:inline">|</span>
              <span>Training & Placement (9414097800)</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:border-b">
          <div className="border-b py-3 lg:border-none">
            <div className="flex items-center gap-3 md:gap-5 mb-1">
              <span className="fa-solid fa-location-dot text-xl text-primary" />
              <span className="text-base font-bold">Address:</span>
            </div>
            <div className="text-xs md:pl-10">
              <span>Airport Road, Dabok, Udaipur (Raj)- 313022</span>
            </div>
          </div>
          <div className="border-b py-3 lg:border-none">
            <div className="flex items-center gap-3 md:gap-5 mb-1">
              <span className="fa-solid fa-globe text-xl text-primary" />
              <span className="text-base font-bold">Website:</span>
            </div>
            <div className="flex items-center space-x-3 divide-black md:pl-9 text-xs">
              <a
                className="underline text-secondary hover:text-primary"
                href="https://www.gits.ac.in"
                target="_blank"
              >
                https://www.gits.ac.in
              </a>
            </div>
          </div>
        </div>
        <Seperator />
        <div className="">
          <h3 className="font-semibold uppercase text-xl my-2">
            LOCATION ON MAP:
          </h3>
          <div className="pr-4">
            <iframe
              className="border-none w-full h-80 md:h-[28rem]"
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3773.5256978915327!2d73.854741!3d24.619598!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus!4v1452937426192"
            ></iframe>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
