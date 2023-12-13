async function fetchPatient() {
    const response = await fetch("https://hapi.fhir.org/baseR4/Patient");
    const patient = await response.json();

    const id = []

    const prefix = []
    const family = []
    const firstName = []

    const bday = []
    const gender = []

    const city = []
    const street = []
    const state = []


    const wayOfCommunication = []
    const valueOfCommunication = []


    patient?.entry.forEach(element => {
      element?.resource?.id ? id.push(element?.resource?.id) : id.push("NA")

      element?.resource?.name ? family.push(element?.resource?.name[0].family) : family.push('NA')
      element?.resource?.name ? firstName.push(element?.resource?.name[0]?.given[0]) : firstName.push('NA')
      element?.resource?.name ? (element?.resource?.name[0]?.prefix ? prefix.push(element?.resource?.name[0]?.prefix[0]) : prefix.push('NA')) : prefix.push('NA')

      element?.resource?.birthDate ? bday.push(element?.resource?.birthDate) : bday.push("NA")
      element?.resource?.gender ? gender.push(element?.resource?.gender) : gender.push("NA")

      element?.resource?.address ? city.push(element?.resource?.address[0].city) : city.push("NA")
      element?.resource?.address ? street.push(element?.resource?.address[0].line[0]) : street.push("NA")
      element?.resource?.address ? state.push(element?.resource?.address[0].state) : state.push("NA")

      element?.resource?.telecom ? wayOfCommunication.push(element?.resource?.telecom[0].system) : wayOfCommunication.push("NA")
      element?.resource?.telecom ? valueOfCommunication.push(element?.resource?.telecom[0].value) : valueOfCommunication.push("NA")
    })

    

    return {
      id,
      prefix,
      family,
      firstName,
      bday,
      gender,
      city,
      street,
      state,
      wayOfCommunication,
      valueOfCommunication
  };




  }


export {fetchPatient}