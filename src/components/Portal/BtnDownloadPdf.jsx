import { FiDownload } from "react-icons/fi";
import portadaPdf from "../../assets/images/libroportada-Pdf.png";

const BtnDownloadPdf = () => {
  const handleDownload = async () => {
    const url =
      "https://bbgeydylfninsohmrewm.supabase.co/storage/v1/object/sign/documento/documento.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lNmRmMmQ3My03MzQ4LTRlMGItODJjYi05OTcxYjRmNjY5M2QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkb2N1bWVudG8vZG9jdW1lbnRvLnBkZiIsImlhdCI6MTc3NzY5NjU3MywiZXhwIjoxODA5MjMyNTczfQ.qP2ObxXBGJVBgGKn1Z8bV8oz9h34U-El-bkyqEEaDzs";

    const response = await fetch(url);
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = "Educacion vial.pdf"; // nombre con el que se descarga
    link.click();

    window.URL.revokeObjectURL(blobUrl); // limpia la memoria
  };
  return (
    <div className="flex gap-5 pt-5">
      <img
        src={portadaPdf} // si la tienes en la carpeta public
        alt="Documento"
        className="w-36"
      />
      <div className="flex flex-col justify-between">
        <h4 className="text-lg font-semibold">Seguridad vial</h4>
        <button
          type="button"
          onClick={handleDownload}
          className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-4 py-2.5 text-sm font-semibold text-blue-800 shadow-sm transition hover:border-blue-300 hover:bg-blue-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 cursor-pointer"
        >
          <FiDownload className="h-4 w-4 shrink-0 text-blue-600" aria-hidden />
          Descargar
        </button>
      </div>
    </div>
  );
};

export default BtnDownloadPdf;
