export function initialIdentityValues(status) {
  if (!status) {
    return {}
  }

  const ref = {
    professional: 'Professionel',
    individual: 'Particulier',
    insurer: 'Assureur',
    law_professional: 'Professionel du droit',
  }

  return {
    status: ref[status],
  }
}


export function initFormWithInitialValues({ identityValues, litigationValues, partiesValues, initialValues }) {
  if (initialValues.identity) {
    identityValues = { ...identityValues, ...initialValues.identity };
  }

  if (initialValues.parties) {
    partiesValues = { ...partiesValues, ...initialValues.parties };
  }

  if (initialValues.litige) {
    litigationValues = { ...litigationValues, ...initialValues.litige };
  }
  
  return { identityValues, litigationValues, partiesValues };
}