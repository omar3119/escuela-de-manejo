import { FiDownload, FiFileText } from "react-icons/fi";

const BtnDownloadPdf = () => {
  const handleDownload = async () => {
    const url =
      "https://bbgeydylfninsohmrewm.supabase.co/storage/v1/object/sign/documento/documento.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lNmRmMmQ3My03MzQ4LTRlMGItODJjYi05OTcxYjRmNjY5M2QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkb2N1bWVudG8vZG9jdW1lbnRvLnBkZiIsImlhdCI6MTc3NzY5NjU3MywiZXhwIjoxODA5MjMyNTczfQ.qP2ObxXBGJVBgGKn1Z8bV8oz9h34U-El-bkyqEEaDzs";

    const response = await fetch(url);
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = "Educacion vial.pdf";
    link.click();

    window.URL.revokeObjectURL(blobUrl);
  };
  return (
    <div className="w-full pt-5 ">
      <div className="rounded  bg-white">
        <div className="w-full flex items-center gap-3 rounded-xl border border-slate-100  px-3 py-2.5">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-50 text-red-500">
            <FiFileText className="h-6 w-6" aria-hidden />
          </div>
          <div className="min-w-0">
            <p className="truncate text-base font-semibold text-slate-700">
              Seguridad vial.pdf
            </p>
            <p className="text-sm text-slate-400">Manual Completo • 17.89 MB</p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleDownload}
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-sm border border-blue-300 bg-blue-50 px-4 py-2 text-base font-semibold text-blue-800 transition hover:border-blue-400 hover:bg-blue-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 cursor-pointer"
        >
          <FiDownload className="h-5 w-5 shrink-0 text-blue-800" aria-hidden />
          Descargar Material
        </button>
      </div>
    </div>
  );
};

export default BtnDownloadPdf;
