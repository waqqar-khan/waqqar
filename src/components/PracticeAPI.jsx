import PropTypes from "prop-types";
import AdminHeaderButtons from "./AdminHeaderButtons";
import "../styles/Login.css";

const PracticeAPI = ({ onLogout }) => {
  const apiList = [
    {
      name: "JSONPlaceholder",
      url: "https://jsonplaceholder.typicode.com/",
      description:
        "A free fake API for testing and prototyping. Provides posts, comments, users, etc.",
    },
    {
      name: "Posts",
      url: "https://jsonplaceholder.typicode.com/posts",
      description: "Fetches a list of dummy blog posts.",
    },
    {
      name: "Users",
      url: "https://jsonplaceholder.typicode.com/users",
      description:
        "Fetches a list of dummy users with name, email, and other details.",
    },
    {
      name: "Comments",
      url: "https://jsonplaceholder.typicode.com/comments",
      description: "Fetches a list of comments associated with posts.",
    },
    {
      name: "Albums",
      url: "https://jsonplaceholder.typicode.com/albums",
      description: "Fetches a list of albums for users.",
    },
    {
      name: "Photos",
      url: "https://jsonplaceholder.typicode.com/photos",
      description: "Fetches a list of dummy photos associated with albums.",
    },
    {
      name: "Todos",
      url: "https://jsonplaceholder.typicode.com/todos",
      description: "Fetches a list of to-do items for users.",
    },
    {
      name: "Posts by ID",
      url: "https://jsonplaceholder.typicode.com/posts/{id}",
      description: "Fetches a single post by its ID.",
    },
    {
      name: "FakeAPI",
      url: "https://fakeapi.pl",
      description:
        "Provides fake data like products, users, and addresses for testing purposes.",
    },
    {
      name: "Products",
      url: "https://fakeapi.pl/api/v1/products",
      description:
        "Fetches a list of fake product data including name, price, and description.",
    },
    {
      name: "Users",
      url: "https://fakeapi.pl/api/v1/users",
      description:
        "Fetches a list of fake users with details like name, email, and address.",
    },
    {
      name: "Addresses",
      url: "https://fakeapi.pl/api/v1/addresses",
      description: "Fetches a list of fake address data.",
    },
    {
      name: "Companies",
      url: "https://fakeapi.pl/api/v1/companies",
      description:
        "Fetches a list of fake company data with name, industry, and address.",
    },
    {
      name: "Posts",
      url: "https://fakeapi.pl/api/v1/posts",
      description: "Fetches a list of fake blog posts.",
    },
    {
      name: "Comments",
      url: "https://fakeapi.pl/api/v1/comments",
      description: "Fetches a list of fake comments associated with posts.",
    },
    {
      name: "RandomUser.me",
      url: "https://randomuser.me/",
      description:
        "Generates random user data for testing, includes name, address, and photo.",
    },
    {
      name: "REST Countries",
      url: "https://restcountries.com/v3.1/all",
      description:
        "A free API that provides information about countries, including name, population, and region.",
    },
    {
      name: "CountryFlags API",
      url: "https://www.countryflags.io/",
      description:
        "Provides country flags in various formats to be used in websites or applications.",
    },
    {
      name: "GeoDB Countries API",
      url: "https://wft-geo-db.p.rapidapi.com/v1/geo/countries",
      description:
        "A comprehensive API for retrieving country information, including ISO codes and popular cities.",
    },
    {
      name: "RestCountries v2",
      url: "https://restcountries.com/v2/all",
      description:
        "Another version of the REST Countries API with more features like region-based filtering and currency data.",
    },
    {
      name: "Country Data",
      url: "https://api.countrylayer.com/v2/all",
      description:
        "Provides detailed country data, including demographics, languages, and currencies.",
    },
    {
      name: "Wizards API",
      url: "https://wizard-world-api.herokuapp.com/Wizards",
      description: "Provides wizards name, elixirs, etc...",
    },
    {
      name: "FlightAware API",
      url: "https://www.flightaware.com/commercial/aeroapi/",
      description:
        "Flight data API that provides detailed flight tracking and status information.",
    },
    {
      name: "RapidAPI Hotel API",
      url: "https://rapidapi.com/search/hotel",
      description:
        "A collection of APIs that help you find hotel listings, reviews, and pricing data.",
    },
    {
      name: "Amadeus Travel API",
      url: "https://developers.amadeus.com/",
      description:
        "Provides access to travel data including hotels, flights, and other travel-related information.",
    },
    {
      name: "Athar Transaction API",
      url: "https://dummyjson.com/c/36fe-ab86-40ec-bca1",
      description:
        "An API that provides debit, credit and other transactional records.",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-5 md:pt-8 lg:pt-14 font-sans mt-14">
      <h1 className="italic text-2xl text-center text-purple-800 font-serif font-semibold pb-8">
        Dummy APIs{" "}
        <span
          style={{
            marginLeft: "4rem",
            display: "inline-flex",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <AdminHeaderButtons />
          <button
            onClick={onLogout}
            style={{
              position: "relative",
              top: "-10px",
              padding: "0.5rem 1rem",
            }}
            className="adminPage-logout-button"
          >
            Logout
          </button>
        </span>
      </h1>
      {apiList.map((api, index) => (
        <div key={index} className="mb-5 pb-3 border-b border-gray-300">
          <h2 className="text-lg text-black">
            {index + 1}.&nbsp;
            <a
              href={api.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:underline"
            >
              {api.name}
            </a>
            &nbsp; -&nbsp;
            <span className="text-black" style={{ userSelect: "text" }}>
              {api.url}
            </span>
          </h2>
          <p className="text-gray-600">{api.description}</p>
        </div>
      ))}
    </div>
  );
};

PracticeAPI.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default PracticeAPI;
