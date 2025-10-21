const CardUsageSteps = () => {
  const steps = [
    {
      number: "1",
      title: "Sign Up",
      description: "Create your account with your email only.",
    },
    {
      number: "2",
      title: "Deposit Crypto",
      description:
        "Choose your cryptocurrency, network, and amount. Get a deposit address instantly.",
    },
    {
      number: "3",
      title: "Create Cards",
      description: "Create virtual cards instantly with 3DS enabled. Load money instantly.",
    },
    {
      number: "4",
      title: "Start Spending",
      description: "Use your cards anywhere Mastercards are accepted online.",
    },
  ];

  return (
    <section className="bg-dark-100 flex items-center justify-center">
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full">
        {steps.map((step) => (
          <div
            key={step.number}
            className="bg-neutral-800 rounded-2xl p-8 border border-neutral-700 hover:border-neutral-600 transition-colors"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-neutral-700 rounded-xl flex items-center justify-center">
                <span className="text-3xl font-bold text-white">{step.number}</span>
              </div>
              <h3 className="text-xl font-medium text-white">{step.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardUsageSteps;
