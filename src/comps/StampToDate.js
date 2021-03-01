export default function StampToDate(providedDate) {
  return providedDate.toDate().toString().split(' ').slice(1,4).toString().replaceAll(',',' ')
}