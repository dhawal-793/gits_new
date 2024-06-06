import Container from '../ui/Container'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <Container>
        <div className="w-full h-auto text-center py-10">
          <h1 className="mt-5 font-sans font-bold xs:mt-7 mb-5 sm:mt-10 text-7xl xs:text-8xl sm:text-9xl text-primary">
            404
          </h1>
          <p className="text-tertiary font-bold text-2xl xs:text-4xl sm:text-[2.7rem] mb-6 sm:mb-8 uppercase">
          PAGE NOT FOUND
          </p>
          <p className="p-1 text-sm sm:text-base font-extralight text-tertiary/70 capitalize">
          The page you're looking for could not be found
          </p>
          <p className="p-1 text-sm sm:text-base font-extralight text-tertiary/70 capitalize">
          Please check the URL or Try again later
          </p>
          <Link
            to="/"
            className="block px-10 py-3 mx-auto mt-8 transition-all duration-300 border border-primary rounded-lg text-primary w-fit hover:bg-primary focus:bg-primary hover:text-white focus:text-white"
          >
            Go to Homepage
          </Link>
        </div>
      </Container>
  )
}

export default NotFound