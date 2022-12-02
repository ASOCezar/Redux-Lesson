export default function currencyFormatter(str: number) {
  return str.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}
