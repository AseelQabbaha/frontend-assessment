import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const t = await getTranslations("teamDirectory");

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function TeamDirectoryPage() {
  const t = await getTranslations("teamDirectory");

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">{t("header")}</h1>

      <div
        className="
          p-4 grid grid-cols-1 gap-4
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
        "
      >
        {/* هنا يمكن إضافة بطاقات أعضاء الفريق */}
      </div>
    </main>
  );
}
