import { useFetch } from "../hooks/useFetch";

function About() {
  return (
    <div className="w-[1250px] gap-y-10 flex flex-col justify-center mt-8 ml-[250px]">
      <div
        tabIndex={0}
        className=" w-[600px] collapse bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content "
      >
        <div className="collapse-title font-extrabold text-3xl p-8 text-white">
          <h1>New York info</h1>
        </div>
        <div className="collapse-content font-semibold text-white ">
          <p>
            Choose from 760 Hotels in New York. No Reservation Costs. Great
            Rates. 24/7 Customer Service. Great Availability. Save 10% with
            Genius. Hotels. Apartments. Book Your Car Rental. Airport Taxi
            available. No Booking Fees. Villas. We speak...
          </p>
        </div>
      </div>

      <li
        tabIndex={1}
        className="  w-[600px] collapse bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content "
      >
        <div className="collapse-title font-extrabold text-3xl p-8 text-white">
          <h1>Venice info</h1>
        </div>
        <div className="collapse-content font-semibold text-white ">
          <p>
            There are 89 four-star hotels in Venice at an average price of 243
            USD per night. There are 120 three-star hotels in Venice at an
            average price of 146 USD per night. There are 31 two-star hotels in
            Venice at an average price of 103 USD per night. There are many
            well-known chain hotels in Venice.
          </p>
        </div>
      </li>

      <li
        tabIndex={1}
        className="  w-[600px] collapse bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content "
      >
        <div className="collapse-title font-extrabold text-3xl p-8 text-white">
          <h1> London info</h1>
        </div>
        <div className="collapse-content font-semibold text-white ">
          <p>
            Book your Perfect Place to Stay in London now. Quick, Easy Booking.
            Great Rates. Choose from 3060 Hotels in London. No Reservation
            Costs. Great Rates. We speak your language. Villas. No Booking Fees.
            Read Real Guest Reviews.
          </p>
        </div>
      </li>

      <li
        tabIndex={1}
        className="  w-[600px] collapse bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content "
      >
        <div className="collapse-title font-extrabold text-3xl p-8 text-white">
          <h1> Paris info</h1>
        </div>
        <div className="collapse-content font-semibold text-white ">
          <p>
            Choose from 4260 Hotels in Paris. No Reservation Costs. Great Rates.
            Low Rates. Great Availability. Motels. Hotels. Book Your Car Rental.
            Special Offers. Get Instant Confirmation. Hostels. Apartments. Read
            Real Guest Reviews
          </p>
        </div>
      </li>
    </div>
  );
}

export default About;
