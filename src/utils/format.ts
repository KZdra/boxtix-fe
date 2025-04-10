import dayjs from "dayjs";
dayjs.locale("id");

const formatRupiah = (value: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(value)
  }
  const formatDate = (dateString: string) => {
    return dayjs(dateString).format("D MMMM YYYY");
  };
  export {
    formatRupiah,
    formatDate
  }