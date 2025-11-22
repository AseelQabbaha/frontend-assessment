import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "teamDirectory" });

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default function TeamDirectoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

