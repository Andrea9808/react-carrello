// definisce una funzione chiamata formatNumber che accetta un numero come argomento
const formatNumber = (number) => {
  // utilizza l'oggetto Intl.NumberFormat per formattare il numero secondo lo stile della valuta europea (EUR)
  // e il formato tedesco (de-DE)
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR'
  }).format(number);
};

// esporta la funzione formatNumber come predefinito
export default formatNumber;
