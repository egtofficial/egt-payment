export const ErrorSection = ({ errorMessage }) => (
  <>
    <div className="mx-auto max-w-7xl w-full pt-16 pb-20 flex justify-center items-center">
      <div className="px-4 sm:px-8 xl:pr-16 flex-grow">
        <h1 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-4xl xl:text-5xl">
          Ein Fehler ist aufgetreten
        </h1>
        <p className="mt-3 max-w-md text-xl text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
          Ein Fehler ist beim Zahlvorgang aufgetreten. Entweder hast du den
          Prozess abgebrochen oder irgendetwas funktioniert nicht.
          <br />
          Bitte versuche es erneut und kontaktiere uns, wenn es dauerhaft nicht
          klappt.
          <br /> <br />
          {errorMessage || ''}
        </p>
      </div>
      <div className="flex justify-center items-center">
        <img
          className="inset-0"
          src="/img/logo.png"
          alt="Logo Elysium Gaming Tübingen e.V."
        />
      </div>
    </div>
  </>
);
