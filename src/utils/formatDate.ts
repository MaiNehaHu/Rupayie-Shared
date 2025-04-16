import moment from "moment";

export default function formatDateTimeSimple(isoString: string) {
  return moment(isoString).format("DD MMM YYYY, hh:mm A");
}
