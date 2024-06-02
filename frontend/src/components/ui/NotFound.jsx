import Container from './Container'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <Container>
        <div className="w-full h-auto text-center py-10">
          <h1 className="pt-5 font-sans font-bold xs:pt-7 sm:pt-10 text-7xl xs:text-8xl sm:text-9xl text-primary">
            404
          </h1>
          <p className="text-tertiary font-bold text-2xl xs:text-4xl sm:text-[2.7rem] pb-6 sm:pb-8">
            PAGE NOT FOUND
          </p>
          <p className="p-1 text-base sm:text-lg font-extralight text-secondary">
            The page you're looking for could not be found
          </p>
          <p className="p-1 text-base sm:text-lg font-extralight text-secondary">
            Please check the URL or Try again later
          </p>
          <Link
            to="/"
            className="block px-5 py-4 mx-auto mt-8 transition-all duration-300 border border-primary rounded-md text-primary w-fit hover:bg-primary focus:bg-primary hover:text-white focus:text-white"
          >
            Go to Homepage
          </Link>
        </div>
      </Container>
  )
}

export default NotFound