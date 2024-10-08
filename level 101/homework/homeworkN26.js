class CountryDirectory {
  constructor(countries) {
    this.countries = new Map(countries);
  }

  getCapital(country) {
    return this.countries.get(country);
  }
}
